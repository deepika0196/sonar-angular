import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, isObservable, map, of, take, takeUntil } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import {
  ArqPageableRequest,
  ArqPageableResponse,
  ArqBaseComponent,
  ArqDatatableColumnsSchema,
  ArqList,
  ArqDialogService
} from '../../../../public-api';

import {
  ArqDTBusquedaAvanzadaColumns,
  ArqDTBusquedaAvanzadaComboDynam,
  ArqDTBusquedaAvanzadaConfig,
  ArqDTBusquedaAvanzadaFilters,
  ArqDTBusquedaAvanzadaSavedFilter
} from './arq-dt-busqueda-avanzada.interface';

import { ArqAdvFilterDialogComponent } from './dialogs/adv-filter/adv-filter-dialog.component';
import { ArqPrefiltersDialogComponent } from './dialogs/prefilters/prefilters-dialog.component';

@Component({
  selector: 'arq-dt-busqueda-avanzada',
  templateUrl: './arq-dt-busqueda-avanzada.component.html',
  styleUrls: ['./arq-dt-busqueda-avanzada.component.scss']
})
export class ArqDTBusquedaAvanzadaComponent extends ArqBaseComponent implements OnInit {
  @Input('schema') public set schema(val: any | Observable<any>) {
    if (!isObservable(val)) val = of(val);

    // Obtiene las columnas, las traduce con el servicio y las almacena en columnsSchema
    val.pipe(take(1)).subscribe((_schema: any) => {
      if (!_schema) return;
      this.allColumns = _schema.columns;
      [this.savedColumnsSchema, this.pkColumns, this.allColumnsSchema] = this.translateColumns(this.allColumns);

      this.pkKeys = this.pkColumns.map(column => column.key);
      this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema));

      this.idDatatable = _schema.idDatatable;

      // Set backend componentConfig settings
      this.componentConfig.datatable.pageSize = _schema.rowNumber ? _schema.rowNumber : 10;
      this.componentConfig.datatable.selectColumn = _schema.selectionType || false;

      // Load default prefilters
      const prefilters = this.allColumnsSchema.filter((col: ArqDatatableColumnsSchema) => col.isDefaultFilter);
      if (prefilters.length) this.loadPrefilters(prefilters);

      if (this.savedFilters && this.savedFilters.length > 0) {
        const defaultSavedFilter: ArqDTBusquedaAvanzadaSavedFilter | undefined = this.savedFilters.find(
          filter => filter.isPredeterminado
        );
        if (defaultSavedFilter) {
          this.applySavedFilters(defaultSavedFilter);
        }
      }

      this.rebuildTable();
    });
  }

  @Input('loadedData') public loadedData$!: Observable<ArqPageableResponse>;
  @Input('refreshData') public refreshData$ = new Subject<any>();
  @Output('loadDataEvent') public loadDataEvent$ = new EventEmitter<{
    request: ArqPageableRequest;
    filters: ArqDTBusquedaAvanzadaFilters[];
  }>();

  @Output('selectEvent') public $selectEvent = new EventEmitter();
  @Output('actionEvent') public $actionEvent = new EventEmitter<{ id: string; value: any }>();

  @Input('componentConfig') public componentConfig: ArqDTBusquedaAvanzadaConfig = { datatable: {} };

  @Input() public filters: ArqDTBusquedaAvanzadaFilters[] = [];
  @Output() public filtersChange = new EventEmitter<ArqDTBusquedaAvanzadaFilters[]>();

  @Input('forceRebuild') public forceRebuild$ = new Subject<any>();

  @Input('refreshComboFn') public _refreshComboFn!: (
    filterComboDynam: ArqDTBusquedaAvanzadaComboDynam
  ) => Observable<ArqList[]>;

  @Input('savedFilters') public savedFilters: ArqDTBusquedaAvanzadaSavedFilter[] = [];
  @Output('saveSavedFilters') public $saveSavedFilters = new EventEmitter<ArqDTBusquedaAvanzadaSavedFilter>();
  @Output('deleteSavedFilters') public $deleteSavedFilters = new EventEmitter<ArqDTBusquedaAvanzadaSavedFilter>();

  public addFilterForm: { data: Array<string>; column: ArqDatatableColumnsSchema | null } = {
    data: [''],
    column: null
  };
  private lastRequest!: ArqPageableRequest;
  public allColumns!: ArqDTBusquedaAvanzadaColumns[];
  public allColumnsSchema!: ArqDatatableColumnsSchema[];
  public savedColumnsSchema!: ArqDatatableColumnsSchema[];
  public columnsSchema!: ArqDatatableColumnsSchema[];
  private idDatatable!: string;
  private pkColumns!: ArqDatatableColumnsSchema[];
  private pkKeys!: string[];

  public fDisplayedColumns: string[] = [];

  public tableLoaded: boolean = false;
  public savedFiltersStatus: '' | 'loaded' | 'modified' = '';
  public selectedSavedFilter: ArqDTBusquedaAvanzadaSavedFilter | null = null;

  public constructor(
    private _changeDetector: ChangeDetectorRef,
    private dialog: MatDialog,
    private arqDialog: ArqDialogService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.loadedData$ = this.loadedData$.pipe(
      map((data: ArqPageableResponse) => {
        data.content = data.content.map(row => {
          const pCol: any = {};
          row.columns.forEach((col: any) => {
            pCol[col.nameColumnGrid] = col.valueColumnGrid;
          });
          return pCol;
        });

        return data;
      })
    );

    // Establece las configuraciones por defecto
    if (typeof this.componentConfig.headerButtons === 'undefined') this.componentConfig.headerButtons = [];
    if (typeof this.componentConfig.cleanFiltersButton === 'undefined') this.componentConfig.cleanFiltersButton = true;
    if (typeof this.componentConfig.headerToolbarsPos === 'undefined')
      this.componentConfig.headerToolbarsPos = 'normal';
    if (typeof this.componentConfig.datatable.selectColumn === 'undefined')
      this.componentConfig.datatable.selectColumn = false;

    // Si existe este observable se subscribe a el
    if (this.forceRebuild$) this.forceRebuild$.pipe(takeUntil(this.unsubscribe$)).subscribe(_ => this.rebuildTable());
  }

  private translateColumns(columns: ArqDTBusquedaAvanzadaColumns[]): Array<ArqDatatableColumnsSchema[]> {
    const translatedColumns = columns
      .sort((x, y) => x.order - y.order)
      .map(column => {
        return {
          key: column.idColumn,
          type: column.type,
          label: column.label,
          data: column.comboItemList,
          format: column.format,
          // FIXME: editInputSize: column.sizeCol ? column.sizeCol : '150px',
          editInputSize: '150px',
          isHidden: !(column.showDefault ?? true),
          isFilterable: column.showHeader ?? true,
          isPk: column.pkColumn,
          isDefaultFilter: column.isDefaultFilter,
          isOnlyFilter: column.isOnlyFilter,
          dependsOn: column.dependsOn ? [column.dependsOn] : undefined
        } as ArqDatatableColumnsSchema;
      });

    return [
      translatedColumns.filter(column => !column.isOnlyFilter && !column.isPk),
      translatedColumns.filter(column => !column.isOnlyFilter && column.isPk),
      translatedColumns
    ];
  }

  private loadPrefilters(prefilters: ArqDatatableColumnsSchema[]): void {
    const dialogRef = this.dialog.open(ArqPrefiltersDialogComponent, {
      width: '70%',
      maxWidth: '900px',
      minWidth: '400px',
      data: { idDatatable: this.idDatatable, prefilters: prefilters, refreshComboFn: this._refreshComboFn }
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((_filterForms: { data: Array<string>; column: ArqDatatableColumnsSchema | null }[]) => {
        if (_filterForms.length === 0) return;
        _filterForms
          .filter((filterForm: any) => this.isValidFilter(filterForm))
          .forEach((filterForm: any) => this.filters.push(this.generateFilter(filterForm)));
        this.requireData(this.lastRequest);
      });
  }

  private isValidFilter(filter: { data: Array<string>; column: ArqDatatableColumnsSchema | null }): boolean {
    return (
      !!filter.data[0] &&
      !!filter.column &&
      (filter.column!.type !== 'autocomplete' ||
        (filter.column!.type === 'autocomplete' && filter.data[0].hasOwnProperty('value')))
    );
  }

  // TWO-WAY BINDING TABLE DATA LOGIC
  public requireData(request: ArqPageableRequest): void {
    this.loadDataEvent$.emit({ request: this.generatePageable(request), filters: this.filters });
    this.lastRequest = request;
  }

  private generatePageable(request: ArqPageableRequest): ArqPageableRequest {
    return {
      page: request.page ? request.page : 0,
      size: request.size ? request.size : 10,
      sortName: request.sort?.split(',')[0],
      sortDirection: request.sort?.split(',')[1].toUpperCase()
    };
  }

  private rebuildTable(): void {
    this.tableLoaded = false;

    // Genera las columnas la tabla de filtros
    this.fDisplayedColumns = this.columnsSchema?.map((col: { key: any }) => col.key);

    setTimeout(() => {
      this.tableLoaded = true;
      this._changeDetector.detectChanges();
    }, 1);
  }

  public showHideCol(col: any): void {
    col.isHidden = col.isHidden ? !col.isHidden : true;
    this.allColumns[this.allColumns.findIndex(_col => _col.idColumn === col.key)].showDefault = !col.isHidden;
    this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));

    // Cambia el estado de los filtros para mostrar el boton de guardado
    this.savedFiltersStatus = 'modified';

    this.rebuildTable();
  }

  public emitActionEvent(id: string, value: any): void {
    this.$actionEvent.emit({ id, value });
  }

  public handleSelectEvent(ev: any): void {
    this.$selectEvent.emit(ev);
  }

  // FILTERS FUNCTIONS
  public cleanFilters(): void {
    this.filters.forEach((filter, index) => {
      if (!filter.hidden) {
        this.filters.splice(index, 1);
      }
    });

    // Cambia el estado de los filtros para mostrar el boton de guardado
    this.savedFiltersStatus = '';

    this.rebuildTable();
  }

  public addFilter(): void {
    if (!this.isValidFilter(this.addFilterForm)) return;
    const filter: ArqDTBusquedaAvanzadaFilters = this.generateFilter(this.addFilterForm);
    this.checkDependent(filter, false);
    this.filters.push(filter);
    this.addFilterForm = { data: [''], column: null };
    // Cambia el estado de los filtros para mostrar el boton de guardado
    this.savedFiltersStatus = 'modified';

    this.requireData(this.lastRequest);
  }

  private generateFilter(
    filter: {
      data: Array<string>;
      column: ArqDatatableColumnsSchema | null;
    },
    filterType: string | null = null
  ): ArqDTBusquedaAvanzadaFilters {
    // TODO: Sacar funcion a servicio
    const dataCol = this.allColumnsSchema.find((_: any) => _.key === filter.column?.key);
    const gFilter: ArqDTBusquedaAvanzadaFilters = {
      idDatatable: this.idDatatable,
      idColumn: dataCol?.key ?? 'text',
      type: dataCol?.type?.toUpperCase() ?? 'TEXT',
      option: 'BASE',
      formatColumn: dataCol?.format,
      dependsOn: dataCol?.dependsOn
    };
    if (!filterType) {
      switch (dataCol?.type?.toLowerCase()) {
        default:
          gFilter.baseFilterText = filter.data[0];
          break;
        case 'number':
          gFilter.baseFilterNumber = +filter.data[0];
          break;
        case 'date':
          gFilter.baseFilterDate = new Date(filter.data[0]);
          break;
        case 'select':
        case 'image':
          gFilter.baseFilterCombo = [filter.data[0]];
          break;
        case 'autocomplete':
          gFilter.baseFilterCombo = [(filter.data[0] as any).value];
          break;
      }
    } else {
      switch (filterType) {
        default:
          gFilter.baseFilterText = filter.data[0];
          break;
        case 'informed':
          gFilter.option = filter.data[0] === 'false' ? 'IS_NULL' : 'NOT_NULL';
          break;
        case 'daterange':
          gFilter.option = 'RANGES';
          gFilter.fromDate = new Date(filter.data[0]);
          gFilter.untilDate = new Date(filter.data[1]);
          break;
        case 'numberrange':
          gFilter.option = 'RANGES';
          gFilter.fromNumber = +filter.data[0];
          gFilter.untilNumber = +filter.data[1];
          break;
        case 'selectmultiple':
        case 'autocompletemultiple':
          gFilter.option = 'MULTIPLE';
          gFilter.baseFilterCombo = filter.data;
          break;
        case 'textmultiple':
          gFilter.option = 'MULTIPLE';
          gFilter.baseFilterText = filter.data.join(',');
          break;
      }
    }
    return gFilter;
  }

  public removeFilter(rmFltr: ArqDTBusquedaAvanzadaFilters): void {
    this.resetColumnSchema(rmFltr);

    // Cambia el estado de los filtros para mostrar el boton de guardado
    this.savedFiltersStatus = 'modified';

    this.checkDependent(rmFltr, true);
    this.filters.splice(
      this.filters.findIndex(filter => filter.idColumn === rmFltr.idColumn),
      1
    );
    this.requireData(this.lastRequest);
  }

  private resetColumnSchema(filter: ArqDTBusquedaAvanzadaFilters): void {
    filter.baseFilterCombo = undefined;
    if (filter.type === 'autocomplete') {
      const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === filter.idColumn)!;
      columnSchema.dataFn = of(columnSchema.data!);
    }
  }

  private checkDependent(filter: ArqDTBusquedaAvanzadaFilters, remove: boolean): void {
    const dependentCols: ArqDTBusquedaAvanzadaColumns[] = this.allColumns.filter(
      col => col.dependsOn === filter.idColumn
    );
    dependentCols.forEach(col => {
      const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === col.idColumn);
      if (!columnSchema) return;
      if (remove) {
        columnSchema!.dataFn = of(columnSchema.data!);
        this.filters.splice(
          this.filters.findIndex(filter => filter.idColumn === col.idColumn),
          1
        );
      }
      const filterComboDynam: ArqDTBusquedaAvanzadaComboDynam = {
        idColumn: col.idColumn,
        idDatatable: col.idDatatable,
        queryParams: { [filter.idColumn]: filter.baseFilterCombo?.join(',') || '' }
      };
      this._refreshComboFn(filterComboDynam).subscribe((data: ArqList[]) => {
        switch (columnSchema?.type?.toLowerCase()) {
          case 'select':
          case 'image':
            break;
          case 'autocomplete':
            columnSchema!.data = data;
            columnSchema!.dataFn = of(data);
            break;
        }
      });
    });
  }

  /**
   * Abre el modal de seleccion de filtros avanzados y genera el filtro con la respuesta
   */
  public openAdvFilters(): void {
    const dialogRef = this.dialog.open(ArqAdvFilterDialogComponent, {
      width: '50%',
      maxWidth: '750px',
      minWidth: '400px',
      data: {
        selectedCol: this.addFilterForm.column,
        filterCols: this.filterCols,
        allColumnsSchema: this.allColumnsSchema
      }
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(_filter => {
        if (!_filter) return;
        const filter: ArqDTBusquedaAvanzadaFilters = this.generateFilter(_filter, _filter.type);
        this.filters.push(filter);
        this.checkDependent(filter, false);
        console.log('filtersArquetipo: ', this.filters);
        this.addFilterForm = { data: [''], column: null };
        this.requireData(this.lastRequest);
      });
  }

  /* For HTML Funcions */

  /**
   * Filtra las columnas recibidas, eliminado las que no son filtrables y las que ya estan utilizadas
   * @param filterCols Array de columnas
   * @returns Array con las columnas filtradas
   */
  public filterCols = (filterCols: ArqDatatableColumnsSchema[]): ArqDatatableColumnsSchema[] =>
    filterCols
      .filter(filterCol => filterCol.isFilterable)
      .filter(filterCol => this.filters.filter(_ => filterCol.key === _.idColumn).length === 0);

  /**
   * -
   */
  public getChipName = (filter: ArqDTBusquedaAvanzadaFilters): string => {
    const colName: string = this.allColumnsSchema.find(col => col.key === filter.idColumn)?.label ?? '***';
    let filterData: string = '';

    switch (filter.option) {
      case 'BASE':
        switch (filter.type.toLowerCase()) {
          default:
            filterData = String(filter.baseFilterText || '***');
            break;
          case 'number':
            filterData = String(filter.baseFilterNumber);
            break;
          case 'date':
            filterData = filter.baseFilterDate
              ? new Date(filter.baseFilterDate).toLocaleString().slice(0, 10).split('-').reverse().join('/')
              : String(filter.baseFilterDate);
            break;
          case 'select':
          case 'image':
          case 'autocomplete':
            filterData = String(filter.baseFilterCombo?.join(', '));
            break;
        }
        break;

      case 'IS_NULL':
        filterData = 'No informado';
        break;
      case 'NOT_NULL':
        filterData = 'Informado';
        break;
      case 'RANGES':
        filterData =
          `desde ${filter.fromDate || filter.fromNumber || '*'} ` +
          `hasta ${filter.untilDate || filter.untilNumber || '*'}`;
        break;
      case 'MULTIPLE':
        filterData = filter.baseFilterText?.split(',').join(', ') || '';
        break;

      default:
        filterData = '(ADV)';
        break;
    }

    if ((colName + filterData).length < 25) return `<b>${colName}:</b> ${filterData}`;
    else return `<b>${colName}</b>`;
  };

  /**
   *
   */
  public hiddenFilters = (_filters: ArqDTBusquedaAvanzadaFilters[]): ArqDTBusquedaAvanzadaFilters[] =>
    _filters.filter(f => !f.hidden);

  public selectionChange(): void {
    if (this.addFilterForm.column?.type === 'autocomplete') {
      this.addFilterForm.column.dataFn = of(this.addFilterForm.column.data!);
    }
  }
  public doFilter(filter: { data: any; column: ArqDatatableColumnsSchema | null }): void {
    filter.column!.dataFn = filter.column!.dataFn!.pipe(map(val => this.filter(val, filter.data[0]!)));
  }

  private filter(val: ArqList[], data: any): ArqList[] {
    if (!val) return [];
    return val.filter(item => item.description.toLowerCase().includes(data.value?.toLowerCase() || data.toLowerCase()));
  }

  public displayFn(option: any): string {
    return option?.description || '';
  }

  /**
   *
   */
  public applySavedFilters(filters: ArqDTBusquedaAvanzadaSavedFilter): void {
    // Limpiamos los filtros aplicados y aplicamos los nuevos
    this.filters = this.filters.filter(f => f.hidden);
    filters.filters.forEach(f => this.filters.push(f));

    // Mostramos/ocultamos las columnas
    this.savedColumnsSchema = this.savedColumnsSchema.map(_scs => {
      let _ = _scs;
      filters.columns.forEach((_fc: any) => {
        if (_scs.key === _fc.idColumn) {
          _scs.isHidden = !_fc.isShowDefault;
          _ = _scs;
        }
      });
      return _;
    });
    this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));

    this.savedFiltersStatus = 'loaded';
    this.selectedSavedFilter = filters;

    this.rebuildTable();
  }

  /**
   *
   */
  public async saveSavedFilters(): Promise<void> {
    const _data: any = await this.nameFilterDialog();
    if (!_data || !_data.name) return;
    const _name = _data.name;
    const _default = _data.default;
    const _priv = await this.confirmPrivateFDialog();
    if (typeof _priv === 'undefined') return;

    const sFilter: ArqDTBusquedaAvanzadaSavedFilter = {
      columns: this.savedColumnsSchema.map(col => {
        return {
          idColumn: col.key,
          isShowDefault: !col.isHidden
        };
      }),
      filters: this.filters.filter(_ => !_.hidden),
      idDatatable: this.idDatatable,
      nombre: _name,
      isPredeterminado: _default,
      isPublico: !_priv
    };

    if (sFilter.isPublico && sFilter.isPredeterminado) {
      this.arqDialog.open({
        confirmBtn: true,
        message: 'No se puede crear un filtro publico publico por defecto',
        title: 'Error',
        type: 'alert',
        icon: 'warning',
        color: 'text-warning',
        textConfirm: 'Continuar'
      });
      return;
    }

    // HANDLER
    const _filter = this.savedFilters.find(_ => _.nombre === sFilter.nombre);

    if (_filter) {
      if (_filter.isPublico)
        this.arqDialog.open({
          confirmBtn: true,
          message: 'El filtro ya existe y no se puede sobreescribir un filtro publico',
          title: 'Error',
          type: 'alert',
          icon: 'warning',
          color: 'text-warning',
          textConfirm: 'Continuar'
        });
      else
        this.arqDialog
          .open({
            cancelBtn: true,
            confirmBtn: true,
            message: 'El filtro ya existe y se va a sobreescribir. ¿Deseas continuar?',
            title: 'Guardado de filtro',
            type: 'alert',
            icon: 'warning',
            color: 'text-warning',
            textConfirm: 'Aceptar',
            textCancel: 'Cancelar'
          })
          .subscribe((_res: any) => {
            if (_res) {
              this.$saveSavedFilters.emit(sFilter);
              this.savedFiltersStatus = 'loaded';
              this.selectedSavedFilter = sFilter;
            }
          });
    } else {
      this.$saveSavedFilters.emit(sFilter);
      this.savedFiltersStatus = 'loaded';
      this.selectedSavedFilter = sFilter;
    }

    this._changeDetector.detectChanges();
  }

  /**
   *
   */
  public deleteSavedFilters(): void {
    if (this.selectedSavedFilter !== null) {
      this.arqDialog
        .open({
          cancelBtn: true,
          confirmBtn: true,
          message: 'Vas a borrar el filtro seleccionado (' + this.selectedSavedFilter.nombre + '). ¿Deseas continuar?',
          title: 'Borrar filtro guardado',
          type: 'alert',
          icon: 'warning',
          color: 'text-warning',
          textConfirm: 'Aceptar',
          textCancel: 'Cancelar'
        })
        .subscribe((_res: any) => {
          if (_res) {
            if (this.selectedSavedFilter && this.selectedSavedFilter.idDatatableFilter)
              this.$deleteSavedFilters.emit(this.selectedSavedFilter);
            else
              this.$deleteSavedFilters.emit(
                this.savedFilters.reverse().find(_ => this.selectedSavedFilter?.nombre === _.nombre)
              );
            this.savedFiltersStatus = '';
            this.selectedSavedFilter = null;
          }
        });
    }
  }

  private async nameFilterDialog(): Promise<string> {
    return new Promise(resolve => {
      this.arqDialog.open({}, ArqDTBANameFilterDialogComponent).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  private async confirmPrivateFDialog(): Promise<boolean> {
    return new Promise(resolve => {
      this.arqDialog
        .open({
          cancelBtn: true,
          confirmBtn: true,
          message: '¿Quieres que el filtro sea privado o público?',
          title: 'Guardado de filtro',
          type: 'alert',
          icon: 'warning',
          color: 'text-warning',
          textConfirm: 'Privado',
          textCancel: 'Publico'
        })
        .subscribe((priv: any) => resolve(priv));
    });
  }
}

@Component({
  selector: 'arq-dt-ba-namefilter-dialog',
  template: `
    <div class="p-3">
      <h1 mat-dialog-title>Guardado de filtro</h1>
      <div mat-dialog-content>
        <p>Inserta nombre del filtro para guardar</p>
        <mat-form-field>
          <input matInput placeholder="Nombre del filtro" [(ngModel)]="fName" />
        </mat-form-field>
      </div>
      <div mat-dialog-content style="padding-top: 0px;">
        <span>Filtro por defecto </span>
        <mat-icon
          (click)="toggleDefault()"
          style="cursor: pointer; color: {{ fDefault ? 'gold' : 'grey' }}; vertical-align: middle;">
          star
        </mat-icon>
      </div>
      <div mat-dialog-actions align="end">
        <arq-button (click)="closeDialog()" label="Cancelar"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" label="Guardar"></arq-button>
      </div>
    </div>
  `
})
export class ArqDTBANameFilterDialogComponent {
  public fName!: string;
  public fDefault: boolean = false;
  public constructor(private dialogService: ArqDialogService) {}

  public closeDialog(): void {
    this.dialogService.confirmed({ name: this.fName, default: this.fDefault });
  }

  public toggleDefault(): void {
    this.fDefault = !this.fDefault;
  }
}
