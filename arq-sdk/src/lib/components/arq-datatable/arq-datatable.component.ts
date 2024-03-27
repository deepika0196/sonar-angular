import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { checkRequiredFields } from '../../../core/utils/basic.util';
import { ArqDialogService } from '../../../lib/services/arq-dialog.service';
import { ArqBaseComponent } from '../../../lib/utils/utils';
import { ArqPageableRequest, ArqPageableResponse } from '../../interfaces/arq-basic.interface';
import {
  ArqDatatableActions,
  ArqDatatableColumnsSchema,
  ArqDatatableConfig,
  ArqDatatableSelectEvent
} from './arq-datatable.interface';

const DEFAULT_CONFIG: ArqDatatableConfig = {
  filterType: 'hide',
  filterPlaceholder: 'Filtrar...',
  filterLabel: 'Filtrar',
  noDataString: 'No hay datos',

  actions: [],
  actionsInContextMenu: false,
  actionColLabel: '',
  newRowInActionsTH: false,
  newRowInModal: false,

  disablePagination: false,
  pageSize: 5,

  selectColumn: false,

  editCallback: row => {},
  eventRow: row => {},
  eventNewRow: row => {},
  prepareFormGroup: formGroup => {}
};

@Component({
  selector: 'arq-datatable',
  templateUrl: './arq-datatable.component.html',
  styleUrls: ['./arq-datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqDatatableComponent extends ArqBaseComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // Component inputs
  @Input('columnsSchema') public _columnsSchema: ArqDatatableColumnsSchema[] = [];
  @Input('tableConfig') public _tableConfig!: ArqDatatableConfig;

  @Input('loadedData') public loadedData$!: Observable<ArqPageableResponse>;
  @Input('loadDataFn') public _loadDataFn!: (request: ArqPageableRequest) => Observable<ArqPageableResponse>;
  @Input('refreshData') public refreshData$!: Observable<any>;
  @Output('loadDataEvent') public loadDataEvent$ = new EventEmitter<ArqPageableRequest>();
  @Output('selectEvent') public selectEvent$ = new EventEmitter<ArqDatatableSelectEvent>();

  @Input('form') public _form?: FormGroup;
  @Input('isEditing') public _isEditing!: boolean;
  @Input('itemsPerPageLabel') public itemsPerPageLabel: string = 'Items por página';
  @Input('nextPageLabel') public nextPageLabel: string = 'Siguiente';
  @Input('firstPageLabel') public firstPageLabel: string = 'Primera';
  @Input('lastPageLabel') public lastPageLabel: string = 'Última';
  @Input('previousPageLabel') public previousPageLabel: string = 'Anterior';
  @Input('range') public range: string = 'de';

  @Input('loadDataMantFn') public _loadDataMantFn!: (
    request: ArqPageableRequest,
    table?: string
  ) => Observable<ArqPageableResponse>;

  // Component properties
  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  public dataSource = new MatTableDataSource<any>();
  public displayedColumns: string[] = [];
  public tableConfig: ArqDatatableConfig = DEFAULT_CONFIG;

  public dataRequest: ArqPageableRequest = { page: 0, size: 5 };
  public totalElements: number = 0;
  public isLoading = true;

  // ??
  public valid: any = {};
  public activeQueryFilter: string = '';
  public activeFilter: any = {};
  public displayedColumnsStatic: string[] = ['codigo', 'descripcion'];

  // Context Menu
  public isDisplayContextMenu: boolean = false;
  public rightClickMenuPositions!: { x: number; y: number };
  public rightClickMenuItems: any = [];

  // Select funcionality
  public selectedRows: any[] = [];
  public checkSelectedRow = (row: any): boolean => !!this.selectedRows.filter(_ => row.id === _.id).length;

  // Template Functions
  public iterateAndF = (_: any): any => _.map((a: any) => a + 'f'); // Añade el sufijo 'f' a cada elemento del array
  public toOf = (_: any): any => of(_);
  public findValue = (value: any, data: any, lang: any, type: any): any => {
    const description = lang == 'ca' ? 'descriptionV' : 'description';
    let dataNew;

    // Si tenemos objeto en select o autocomplete no necesitamos buscar en el filtro
    if ((type == 'select' || type == 'autocomplete') && value?.value) {
      return value[description];
    }

    if (type == 'select' && !Array.isArray(data)) {
      data.subscribe((e: any) => (dataNew = e));
    } else {
      dataNew = data;
    }

    // prettier-ignore
    return (
      dataNew?.find((_: any) => {
        if (!value) return false;
        else return (typeof value !== 'string') ?  (_.value === value.value) : (_.value === value)
      })?.[description] || value
    );
  };
  public findSrc = (value: any, data: any): any => {
    // prettier-ignore
    return (
      data.find((_: any) => {
        if (!value) return false;
        else return _.value === value
      })?.src || value
    );
  };

  public hideIcon = false;
  public showFilters!: boolean;
  public formGroup?: FormGroup<any>;
  public readonly!: boolean;
  public fg: any;
  public rowClicked: any;
  public originalFilterType!: false | 'hide' | 'global' | 'column' | 'both' | null | undefined;
  public fgCopy: any;

  public constructor(private formBuilder: FormBuilder, private serviceDialog: ArqDialogService) {
    super();
  }

  public ngAfterViewInit(): void {
    this.customPaginator();
  }

  public ngOnInit(): void {
    this.fg = { ...this._form };
    this.fgCopy = { ...this._form };

    this._columnsSchema.forEach(col => {
      if (col.fullObject === undefined) {
        col.fullObject = true;
      }
      if (col.isEditable === undefined) {
        col.isEditable = true;
      }
      if (!col.defaultValue) {
        col.defaultValue = null;
      }
      if (col.dataFnReq) {
        col.dataFnReq({ page: 0, size: 10 }).subscribe(res => (col.data = res.content));
      }

      if (col.dataFn) {
        col.dataFn.subscribe((e: any) => (col.data = e));
      }
    });

    if (!this.loadedData$ && !this.loadDataEvent$)
      checkRequiredFields(this._loadDataFn || this._loadDataMantFn, 'loadDataFn');
    if (!this._loadDataFn && !this._loadDataMantFn) {
      checkRequiredFields(this.loadedData$, 'loadedData');
      checkRequiredFields(this.loadDataEvent$, 'loadDataEvent');
    }
    checkRequiredFields(this._columnsSchema, 'columnsSchema');

    this.initializeDatatable();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.displayedColumns = this._columnsSchema
        ?.filter((col: any) => col.isHidden != true)
        .map((col: any) => col.key);
      if (this.tableConfig?.actions?.length && !this.tableConfig?.actionsInContextMenu) this.showActionsCol();
      if (
        changes['_tableConfig'] &&
        changes['_tableConfig']['currentValue'] &&
        changes['_tableConfig']['currentValue']['selectColumn']
      ) {
        this._tableConfig.selectColumn = changes['_tableConfig']['currentValue']['selectColumn'];
        this.tableConfig.selectColumn = changes['_tableConfig']['currentValue']['selectColumn'];
      }
    }
  }

  public action() {
    return (row: any): any => {
      row.isEdit = !row.isEdit;
      for (const key in row) {
        if (Object.prototype.hasOwnProperty.call(row, key)) {
          this._form?.controls[key]?.setValue(row[key], { emitEvent: false });
        }
      }
      if (this.tableConfig.prepareFormGroup && this._form) {
        this.tableConfig.prepareFormGroup(this._form);
        this._form.updateValueAndValidity({ emitEvent: false });
      }
      this._isEditing = true;
      row.newRow = false;
    };
  }

  private initializeDatatable(): void {
    this.setTableConfig();

    this.showFilters = this.tableConfig.filterType == 'both' || this.tableConfig.filterType == 'column';

    this.displayedColumns = this._columnsSchema?.filter((col: any) => col.isHidden != true).map((col: any) => col.key);

    if (this.tableConfig.actions?.length && !this.tableConfig.actionsInContextMenu) this.showActionsCol();
    this.showSelectCol(!!this.tableConfig.selectColumn);

    if (this.loadedData$)
      this.loadedData$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
        res = this.addIdsIfNecesary(res);
        this.dataSource.data = res.content;
        this.totalElements = res.totalElements;

        this.isLoading = false;
      });

    if (this.refreshData$) this.refreshData$.pipe(takeUntil(this.unsubscribe$)).subscribe(_ => this.refreshData());

    this.originalFilterType = this.tableConfig?.filterType;

    this.tableConfig?.actions?.forEach((element: ArqDatatableActions) => {
      if (element.inline) {
        element.action = this.action();
      }
    });

    this.refreshData();
  }

  public refreshData(): void {
    this.isLoading = true;

    if (this.loadDataEvent$.observers.length) this.loadDataEvent$.emit(this.dataRequest);
    else {
      if (this._loadDataFn) {
        this._loadDataFn(this.dataRequest).subscribe(res => {
          res = this.addIdsIfNecesary(res);
          this.dataSource.data = res.content;
          this.totalElements = res.totalElements;
          this.isLoading = false;
        });
      } else {
        this._loadDataMantFn(this.dataRequest).subscribe(res => {
          res = this.addIdsIfNecesary(res);
          this.dataSource.data = res.content;
          this.totalElements = res.totalElements;
          this.isLoading = false;
        });
      }
    }
  }

  private addIdsIfNecesary(res: ArqPageableResponse): ArqPageableResponse {
    res.content = res.content.map((column, index) => {
      if (!Object.keys(column).includes('id')) column.id = index;
      return column;
    });

    return res;
  }

  private setTableConfig(): void {
    this.tableConfig = {
      filterType: this._tableConfig?.filterType ? this._tableConfig?.filterType : DEFAULT_CONFIG.filterType,
      filterPlaceholder: this._tableConfig?.filterPlaceholder
        ? this._tableConfig.filterPlaceholder
        : DEFAULT_CONFIG.filterPlaceholder,
      filterLabel: this._tableConfig?.filterLabel ? this._tableConfig?.filterLabel : DEFAULT_CONFIG.filterLabel,
      noDataString: this._tableConfig?.noDataString ? this._tableConfig?.noDataString : DEFAULT_CONFIG.noDataString,
      footerTable: this._tableConfig?.footerTable ? this._tableConfig?.footerTable : DEFAULT_CONFIG.footerTable,
      footerTableString: this._tableConfig?.footerTableString
        ? this._tableConfig?.footerTableString
        : DEFAULT_CONFIG.footerTableString,
      headerTable: this._tableConfig?.headerTable ? this._tableConfig?.headerTable : DEFAULT_CONFIG.headerTable,
      headerTableString: this._tableConfig?.headerTableString
        ? this._tableConfig?.headerTableString
        : DEFAULT_CONFIG.headerTableString,
      actions: this._tableConfig?.actions ? this._tableConfig?.actions : DEFAULT_CONFIG.actions,
      actionsInContextMenu: this._tableConfig?.actionsInContextMenu
        ? this._tableConfig?.actionsInContextMenu
        : DEFAULT_CONFIG.actionsInContextMenu,
      actionColLabel: this._tableConfig?.actionColLabel
        ? this._tableConfig?.actionColLabel
        : DEFAULT_CONFIG.actionColLabel,
      newRowInActionsTH: this._tableConfig?.newRowInActionsTH
        ? this._tableConfig?.newRowInActionsTH
        : DEFAULT_CONFIG.newRowInActionsTH,
      newRowInModal: this._tableConfig?.newRowInModal ? this._tableConfig?.newRowInModal : DEFAULT_CONFIG.newRowInModal,
      disablePagination: this._tableConfig?.disablePagination
        ? this._tableConfig?.disablePagination
        : DEFAULT_CONFIG.disablePagination,
      disableSorting: this._tableConfig?.disableSorting
        ? this._tableConfig?.disableSorting
        : DEFAULT_CONFIG.disableSorting,
      pageSize: this._tableConfig?.pageSize ? this._tableConfig?.pageSize : DEFAULT_CONFIG.pageSize,
      editCallback: this._tableConfig?.editCallback ? this._tableConfig?.editCallback : DEFAULT_CONFIG.editCallback,
      eventRow: this._tableConfig?.eventRow ? this._tableConfig?.eventRow : DEFAULT_CONFIG.eventRow,
      eventNewRow: this._tableConfig?.eventNewRow ? this._tableConfig?.eventNewRow : DEFAULT_CONFIG.eventNewRow,
      selectColumn: this._tableConfig.selectColumn ? this._tableConfig.selectColumn : DEFAULT_CONFIG.selectColumn,
      prepareFormGroup: this._tableConfig?.prepareFormGroup
        ? this._tableConfig?.prepareFormGroup
        : DEFAULT_CONFIG.prepareFormGroup
    };

    this.dataRequest.size = this.tableConfig?.pageSize || 5;
  }

  private customPaginator(): void {
    this.paginator._intl.itemsPerPageLabel = this.itemsPerPageLabel;
    this.paginator._intl.firstPageLabel = this.firstPageLabel;
    this.paginator._intl.lastPageLabel = this.lastPageLabel;
    this.paginator._intl.nextPageLabel = this.nextPageLabel;
    this.paginator._intl.previousPageLabel = this.previousPageLabel;
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number): any => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} ${this.range} ${length}`;
    };
  }

  public nextPage(event: PageEvent): void {
    this.dataRequest.page = +event.pageIndex.toString();
    this.dataRequest.size = +event.pageSize.toString();

    this.refreshData();
  }

  public autocFilter(data: any, value: any): any {
    let dataNew;
    if (data) {
      if (typeof data == 'function') {
        return data;
      } else {
        if (Array.isArray(data)) {
          dataNew = data;
        } else {
          data.subscribe((e: any) => (dataNew = e));
        }
      }

      return dataNew?.filter((_: any) =>
        _.description.toLowerCase().includes((typeof value == 'string' ? value : value.description).toLowerCase())
      );
    }
  }

  public editCol(col: any, row: any): any {
    if (typeof col.isEditable == 'boolean') {
      return col.isEditable;
    }

    return col.isEditable(row);
  }

  public editRow(row: any): void {
    let form = row.newRow ? this.fg : this._form;
    form.updateValueAndValidity();
    if (this.tableConfig.editCallback) {
      const editCallback = this.tableConfig.editCallback({ ...row, ...form.value }, form);
      if (editCallback instanceof Observable) {
        editCallback?.subscribe({
          next: () => {
            this.readonly = false;
            this._isEditing = false;
            row.isEdit = false;
            row.isCreate = false;
            this.refreshData();
          }
        });
      } else {
        this.readonly = false;
        this._isEditing = false;
        row.isEdit = false;
        row.isCreate = false;
        this.refreshData();
      }
    } else {
      console.error('Not edit callback defined');
    }
  }

  public showActionsCol(show: boolean = true): void {
    if (show) {
      if (!this.displayedColumns.includes('actions')) this.displayedColumns.push('actions');
    } else {
      if (this.tableConfig.actionsInContextMenu)
        this.displayedColumns = this.displayedColumns.filter((col: string) => col !== 'actions');
    }
  }

  public hideFilter(b: boolean): void {
    this.hideIcon = !b;

    this.tableConfig.filterType = this.originalFilterType;
    if (this.hideIcon) {
      this.tableConfig.filterType = 'hide';
    }
  }

  public inputHandler(e: any, id: number, key: string): void {
    if (!this.valid[id]) this.valid[id] = {};
    this.valid[id][key] = e;
  }

  public addNewRow(): void {
    this.readonly = true;
    this.fg = this.cloneFormGroup();

    if (this.tableConfig.prepareFormGroup) {
      this.tableConfig.prepareFormGroup(this.fg);
    }

    let el: any = {};
    el = this.fg.value;
    el.newRow = true;
    el.isCreate = true;
    el.isEdit = false;

    if (this.tableConfig.newRowInModal) {
      this.openDialog(el);
    } else {
      this._isEditing = true;
      this.dataSource.data.unshift(el);
      this.dataSource.data = this.dataSource.data;
    }
  }

  public openDialog(el: any): void {
    const resp: any = this.tableConfig.eventNewRow ? this.tableConfig.eventNewRow(el) : null;

    if (resp) {
      this.serviceDialog.open(resp.data, resp.component).subscribe((res: any) => {
        if (res) {
          this.dataSource.data.unshift(res);
          this.dataSource.data = this.dataSource.data;
        }
      });
    }
    this.readonly = false;
  }

  public showSelectCol(show: boolean = true): void {
    if (show) {
      if (!this.displayedColumns.includes('selectColumn')) this.displayedColumns.unshift('selectColumn');
    } else {
      this.displayedColumns = this.displayedColumns.filter((col: string) => col !== 'selectColumn');
    }
  }

  // Context Menu
  public displayContextMenu(event: { clientX: number; clientY: number }, row: any): void {
    if (this.tableConfig.actionsInContextMenu) {
      this.rightClickMenuItems = [];
      this.tableConfig.actions?.forEach((action: any) => {
        this.rightClickMenuItems.push({ menuText: action.tooltip, action: action.action, row: row });
      });

      this.isDisplayContextMenu = true;
      this.rightClickMenuPositions = {
        x: event.clientX,
        y: event.clientY
      };
    }
  }

  @HostListener('document:click')
  @HostListener('document:scroll', ['$event'])
  public event(): void {
    this.isDisplayContextMenu = false;
  }

  // Sorting
  public sortHandler(ev: { active: string; direction: 'asc' | 'desc' | '' }): void {
    if (ev.direction !== '') {
      this.dataRequest.sort = ev.active + ',' + ev.direction;
    } else {
      delete this.dataRequest.sort;
    }

    this.refreshData();
  }

  // Filtering
  public filterHandler(ev: any, col: string): void {
    if (ev.keyCode !== 13) return;

    if (ev.target.value !== '') {
      this.dataRequest.filter = ev.target.value;
      this.dataRequest.filterCol = col;
    } else {
      delete this.dataRequest.filter;
      delete this.dataRequest.filterCol;
    }

    this.refreshData();
  }

  public obtenerElemento(obj: any, prop: any): any {
    if (typeof obj !== 'object') throw 'getProp: obj is not an object';
    if (typeof prop !== 'string') throw 'getProp: prop is not a string';

    // Replace [] notation with dot notation
    prop = prop.replace(/\[["'`](.*)["'`]\]/g, '.$1');

    return prop.split('.').reduce(function (prev: { [x: string]: any }, curr: string | number) {
      return prev ? prev[curr] : undefined;
    }, obj || self);
  }

  public cloneFormGroup(): FormGroup {
    let el: any = {};
    this._columnsSchema.forEach((col: ArqDatatableColumnsSchema) => {
      el[col.key] = col.defaultValue;
    });
    return this.formBuilder.group(el);
  }

  public eventRow(row: any): void {
    if (this.rowClicked === row.id) this.rowClicked = -1;
    else this.rowClicked = row.id;

    this.tableConfig.eventRow && !row.isEdit
      ? this.tableConfig.eventRow(row)
      : console.error('Not edit callback defined');
  }

  // Select funcionality
  public toggleSelectRow(row: any): void {
    if (this.checkSelectedRow(row)) this.selectedRows = this.selectedRows.filter(_ => _.id !== row.id);
    else this.selectedRows.push(row);

    this.selectEvent$.emit({ selected: this.selectedRows, lastSelection: row });
  }

  public cleanSelectionRows(): void {
    this.selectedRows = [];
    this.selectEvent$.emit({ selected: this.selectedRows, lastSelection: [] });
  }

  public closeRowEdit(el: any): void {
    el.isEdit = false;
    this.readonly = false;
    this._isEditing = false;

    if (el.newRow) {
      this.dataSource.data.shift();
    }
    el.newRow = false;
    this.dataSource.data = this.dataSource.data;
  }

  public desactivarItems(action: ArqDatatableActions): void {
    if (action.inline) {
      this._isEditing = true;
    }
  }

  public actionHandler(action: ArqDatatableActions, element: any): void {
    const result = action.action(element);
    if (result instanceof Observable) {
      result?.subscribe({
        next: () => this.refreshData()
      });
    }
    this.desactivarItems(action);
  }
}
