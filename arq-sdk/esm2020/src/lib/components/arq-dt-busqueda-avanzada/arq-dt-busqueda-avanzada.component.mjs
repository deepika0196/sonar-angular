import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, isObservable, map, of, take, takeUntil } from 'rxjs';
import { ArqBaseComponent } from '../../../../public-api';
import { DefaultFilterType } from './arq-dt-busqueda-avanzada.interface';
import { ArqAdvFilterDialogComponent } from './dialogs/adv-filter/adv-filter-dialog.component';
import { ArqPrefiltersDialogComponent } from './dialogs/prefilters/prefilters-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../../public-api";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../arq-datatable/arq-datatable.component";
import * as i6 from "@angular/material/datepicker";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/input";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/core";
import * as i13 from "@angular/material/menu";
import * as i14 from "@angular/material/toolbar";
import * as i15 from "@angular/material/autocomplete";
import * as i16 from "@angular/material/chips";
import * as i17 from "@angular/material/tooltip";
import * as i18 from "@ngneat/transloco";
import * as i19 from "../arq-button/arq-button.component";
export class ArqDTBusquedaAvanzadaComponent extends ArqBaseComponent {
    set schema(val) {
        if (!isObservable(val))
            val = of(val);
        // Obtiene las columnas, las traduce con el servicio y las almacena en columnsSchema
        val.pipe(take(1)).subscribe((_schema) => {
            if (!_schema)
                return;
            this.allColumns = _schema.columns;
            [this.savedColumnsSchema, this.pkColumns, this.allColumnsSchema] = this.translateColumns(this.allColumns);
            this.pkKeys = this.pkColumns.map(column => column.key);
            this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema));
            // seteamos los observables tras el JSON.parse
            this.initializeAutocomplete();
            this.idDatatable = _schema.idDatatable;
            // Set backend componentConfig settings
            this.componentConfig.datatable.pageSize = _schema.rowNumber ? _schema.rowNumber : 10;
            if (_schema.selectionType)
                this.componentConfig.datatable.selectColumn = true;
            // Load default prefilters
            const prefilters = this.allColumnsSchema.filter((col) => col.isDefaultFilter);
            if (prefilters.length)
                this.loadPrefilters(prefilters);
            if (this.savedFilters && this.savedFilters.length > 0) {
                const defaultSavedFilter = this.savedFilters.find(filter => filter.isPredeterminado);
                if (defaultSavedFilter) {
                    this.applySavedFilters(defaultSavedFilter);
                }
            }
            this.rebuildTable();
        });
    }
    constructor(_changeDetector, dialog, arqDialog) {
        super();
        this._changeDetector = _changeDetector;
        this.dialog = dialog;
        this.arqDialog = arqDialog;
        this.refreshData$ = new Subject();
        this.loadDataEvent$ = new EventEmitter();
        this.$selectEvent = new EventEmitter();
        this.$actionEvent = new EventEmitter();
        this.componentConfig = { datatable: {} };
        this.filters = [];
        this.filtersChange = new EventEmitter();
        this.forceRebuild$ = new Subject();
        this.savedFilters = [];
        this.$saveSavedFilters = new EventEmitter();
        this.$deleteSavedFilters = new EventEmitter();
        this.addFilterForm = {
            data: [''],
            column: null
        };
        this.fDisplayedColumns = [];
        this.tableLoaded = false;
        this.savedFiltersStatus = '';
        this.selectedSavedFilter = null;
        /* For HTML Funcions */
        /**
         * Filtra las columnas recibidas, eliminado las que no son filtrables y las que ya estan utilizadas
         * @param filterCols Array de columnas
         * @returns Array con las columnas filtradas
         */
        this.filterCols = (filterCols) => filterCols
            .filter(filterCol => filterCol.isFilterable)
            .filter(filterCol => this.filters.filter(_ => filterCol.key === _.idColumn).length === 0);
        /**
         * -
         */
        this.getChipName = (filter) => {
            const colName = this.allColumnsSchema.find(col => col.key === filter.idColumn)?.label ?? '***';
            let filterData = '';
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
            if ((colName + filterData).length < 25)
                return `<b>${colName}:</b> ${filterData}`;
            else
                return `<b>${colName}</b>`;
        };
        /**
         *
         */
        this.hiddenFilters = (_filters) => _filters.filter(f => !f.hidden);
    }
    ngOnInit() {
        this.loadedData$ = this.loadedData$.pipe(map((data) => {
            data.content = data.content.map(row => {
                const pCol = {};
                row.columns.forEach((col) => {
                    pCol[col.nameColumnGrid] = col.valueColumnGrid;
                });
                return pCol;
            });
            return data;
        }));
        // Establece las configuraciones por defecto
        if (typeof this.componentConfig.headerButtons === 'undefined')
            this.componentConfig.headerButtons = [];
        if (typeof this.componentConfig.cleanFiltersButton === 'undefined')
            this.componentConfig.cleanFiltersButton = true;
        if (typeof this.componentConfig.headerToolbarsPos === 'undefined')
            this.componentConfig.headerToolbarsPos = 'normal';
        if (typeof this.componentConfig.datatable.selectColumn === 'undefined')
            this.componentConfig.datatable.selectColumn = false;
        // Si existe este observable se subscribe a el
        if (this.forceRebuild$)
            this.forceRebuild$.pipe(takeUntil(this.unsubscribe$)).subscribe(_ => this.rebuildTable());
    }
    translateColumns(columns) {
        const translatedColumns = columns
            .sort((x, y) => x.order - y.order)
            .map(column => {
            return {
                key: column.idColumn,
                type: column.type,
                label: column.label,
                data: column.comboItemList,
                dataFn: column.type === 'autocomplete' ? of(column.comboItemList) : undefined,
                format: column.format,
                editInputSize: column.sizeCol ? column.sizeCol : '150px',
                isHidden: !(column.showDefault ?? true),
                isFilterable: column.showHeader ?? true,
                isPk: column.pkColumn,
                isDefaultFilter: column.defaultFilter === DefaultFilterType.REQUERIDO ||
                    column.defaultFilter === DefaultFilterType.NO_REQUERIDO,
                isRequired: column.defaultFilter === DefaultFilterType.REQUERIDO,
                isOnlyFilter: column.isOnlyFilter,
                dependsOn: column.dependsOn ? [column.dependsOn] : undefined
            };
        });
        return [
            translatedColumns.filter(column => !column.isOnlyFilter && !column.isPk),
            translatedColumns.filter(column => !column.isOnlyFilter && column.isPk),
            translatedColumns
        ];
    }
    loadPrefilters(prefilters) {
        const dialogRef = this.dialog.open(ArqPrefiltersDialogComponent, {
            maxWidth: '900px',
            minWidth: '400px',
            disableClose: true,
            data: { idDatatable: this.idDatatable, prefilters: prefilters, refreshComboFn: this._refreshComboFn }
        });
        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((_filterForms) => {
            if (!_filterForms || _filterForms.length === 0)
                return;
            _filterForms
                .filter((filterForm) => this.isValidFilter(filterForm))
                .forEach((filterForm) => this.filters.push(this.generateFilter(filterForm)));
            this.requireData(this.lastRequest);
        });
    }
    isValidFilter(filter) {
        return (!!filter.data[0] &&
            !!filter.column &&
            (filter.column.type !== 'autocomplete' ||
                (filter.column.type === 'autocomplete' && filter.data[0].hasOwnProperty('value'))));
    }
    // TWO-WAY BINDING TABLE DATA LOGIC
    requireData(request) {
        this.loadDataEvent$.emit({ request: this.generatePageable(request), filters: this.filters });
        this.lastRequest = request;
    }
    generatePageable(request) {
        return {
            page: request.page ? request.page : 0,
            size: request.size ? request.size : 10,
            sortName: request.sort?.split(',')[0],
            sortDirection: request.sort?.split(',')[1].toUpperCase()
        };
    }
    rebuildTable() {
        this.tableLoaded = false;
        // Genera las columnas la tabla de filtros
        this.fDisplayedColumns = this.columnsSchema?.map((col) => col.key);
        setTimeout(() => {
            this.tableLoaded = true;
            this._changeDetector.detectChanges();
        }, 1);
    }
    showHideCol(col) {
        col.isHidden = col.isHidden ? !col.isHidden : true;
        this.allColumns[this.allColumns.findIndex(_col => _col.idColumn === col.key)].showDefault = !col.isHidden;
        this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));
        // seteamos los observables tras el JSON.parse
        this.initializeAutocomplete();
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.rebuildTable();
    }
    emitActionEvent(id, value) {
        this.$actionEvent.emit({ id, value });
    }
    handleSelectEvent(ev) {
        this.$selectEvent.emit(ev);
    }
    // FILTERS FUNCTIONS
    cleanFilters() {
        for (let i = this.filters.length - 1; i >= 0; i--) {
            if (!this.filters[i].hidden) {
                this.filters.splice(i, 1);
            }
        }
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = '';
        this.rebuildTable();
    }
    addFilter() {
        if (!this.isValidFilter(this.addFilterForm))
            return;
        const filter = this.generateFilter(this.addFilterForm);
        this.checkDependent(filter, false);
        this.filters.push(filter);
        this.addFilterForm = { data: [''], column: null };
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.requireData(this.lastRequest);
    }
    generateFilter(filter, filterType = null) {
        // TODO: Sacar funcion a servicio
        const dataCol = this.allColumnsSchema.find((_) => _.key === filter.column?.key);
        const gFilter = {
            idDatatable: this.idDatatable,
            idColumn: dataCol?.key ?? 'text',
            type: dataCol?.type?.toUpperCase() ?? 'TEXT',
            option: 'BASE',
            formatColumn: dataCol?.format,
            dependsOn: dataCol?.dependsOn,
            hidden: dataCol?.isRequired
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
                    gFilter.baseFilterCombo = [filter.data[0].value];
                    break;
            }
        }
        else {
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
    removeFilter(rmFltr) {
        this.resetColumnSchema(rmFltr);
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.checkDependent(rmFltr, true);
        this.filters.splice(this.filters.findIndex(filter => filter.idColumn === rmFltr.idColumn), 1);
        this.requireData(this.lastRequest);
    }
    resetColumnSchema(filter) {
        filter.baseFilterCombo = undefined;
        if (filter.type === 'autocomplete') {
            const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === filter.idColumn);
            columnSchema.dataFn = of(columnSchema.data);
        }
    }
    checkDependent(filter, remove) {
        const dependentCols = this.allColumns.filter(col => col.dependsOn === filter.idColumn);
        dependentCols.forEach(col => {
            const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === col.idColumn);
            if (!columnSchema)
                return;
            if (remove) {
                columnSchema.dataFn = of(columnSchema.data);
                this.filters.splice(this.filters.findIndex(filter => filter.idColumn === col.idColumn), 1);
            }
            const filterComboDynam = {
                idColumn: col.idColumn,
                idDatatable: col.idDatatable,
                queryParams: { [filter.idColumn]: filter.baseFilterCombo?.join(',') || '' }
            };
            this._refreshComboFn(filterComboDynam).subscribe((data) => {
                switch (columnSchema?.type?.toLowerCase()) {
                    case 'select':
                    case 'image':
                        columnSchema.data = data;
                        break;
                    case 'autocomplete':
                        columnSchema.data = data;
                        columnSchema.dataFn = of(data);
                        break;
                }
            });
        });
    }
    /**
     * Abre el modal de seleccion de filtros avanzados y genera el filtro con la respuesta
     */
    openAdvFilters() {
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
            if (!_filter)
                return;
            const filter = this.generateFilter(_filter, _filter.type);
            this.filters.push(filter);
            this.savedFiltersStatus = 'modified';
            this.checkDependent(filter, false);
            this.addFilterForm = { data: [''], column: null };
            this.requireData(this.lastRequest);
        });
    }
    selectionChange() {
        if (this.addFilterForm.column?.type === 'autocomplete') {
            this.addFilterForm.column.dataFn = of(this.addFilterForm.column.data);
        }
    }
    doFilter(filter) {
        filter.column.dataFn = filter.column.dataFn.pipe(map(val => this.filter(val, filter.data[0])));
    }
    filter(val, data) {
        if (!val)
            return [];
        return val.filter(item => item.description.toLowerCase().includes(data.value?.toLowerCase() || data.toLowerCase()));
    }
    displayFn(option) {
        return option?.description || '';
    }
    /**
     *
     */
    applySavedFilters(filters) {
        // Limpiamos los filtros aplicados y aplicamos los nuevos
        this.filters = this.filters.filter(f => f.hidden);
        filters.filters.forEach(f => this.filters.push(f));
        // Mostramos/ocultamos las columnas
        this.savedColumnsSchema = this.savedColumnsSchema.map(_scs => {
            let _ = _scs;
            filters.columns.forEach((_fc) => {
                if (_scs.key === _fc.idColumn) {
                    _scs.isHidden = !_fc.isShowDefault;
                    _ = _scs;
                }
            });
            return _;
        });
        this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));
        // seteamos los observables tras el JSON.parse
        this.initializeAutocomplete();
        this.savedFiltersStatus = 'loaded';
        this.selectedSavedFilter = filters;
        this.rebuildTable();
    }
    /**
     *
     */
    async saveSavedFilters() {
        const _data = await this.nameFilterDialog();
        if (!_data || !_data.name)
            return;
        const _name = _data.name;
        const _default = _data.default;
        const _priv = await this.confirmPrivateFDialog();
        if (typeof _priv === 'undefined')
            return;
        const sFilter = {
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
                    .subscribe((_res) => {
                    if (_res) {
                        this.$saveSavedFilters.emit(sFilter);
                        this.savedFiltersStatus = 'loaded';
                        this.selectedSavedFilter = sFilter;
                    }
                });
        }
        else {
            this.$saveSavedFilters.emit(sFilter);
            this.savedFiltersStatus = 'loaded';
            this.selectedSavedFilter = sFilter;
        }
        this._changeDetector.detectChanges();
    }
    /**
     *
     */
    deleteSavedFilters() {
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
                .subscribe((_res) => {
                if (_res) {
                    if (this.selectedSavedFilter && this.selectedSavedFilter.idDatatableFilter)
                        this.$deleteSavedFilters.emit(this.selectedSavedFilter);
                    else
                        this.$deleteSavedFilters.emit(this.savedFilters.reverse().find(_ => this.selectedSavedFilter?.nombre === _.nombre));
                    this.savedFiltersStatus = '';
                    this.selectedSavedFilter = null;
                }
            });
        }
    }
    async nameFilterDialog() {
        return new Promise(resolve => {
            this.arqDialog.open({}, ArqDTBANameFilterDialogComponent).subscribe((data) => {
                resolve(data);
            });
        });
    }
    async confirmPrivateFDialog() {
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
                .subscribe((priv) => resolve(priv));
        });
    }
    initializeAutocomplete() {
        this.columnsSchema
            .filter(column => column.data && column.type === 'autocomplete')
            .forEach(column => (column.dataFn = of(column.data)));
    }
}
ArqDTBusquedaAvanzadaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.MatDialog }, { token: i2.ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqDTBusquedaAvanzadaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDTBusquedaAvanzadaComponent, selector: "arq-dt-busqueda-avanzada", inputs: { schema: "schema", loadedData$: ["loadedData", "loadedData$"], refreshData$: ["refreshData", "refreshData$"], componentConfig: "componentConfig", filters: "filters", forceRebuild$: ["forceRebuild", "forceRebuild$"], _refreshComboFn: ["refreshComboFn", "_refreshComboFn"], savedFilters: "savedFilters" }, outputs: { loadDataEvent$: "loadDataEvent", $selectEvent: "selectEvent", $actionEvent: "actionEvent", filtersChange: "filtersChange", $saveSavedFilters: "saveSavedFilters", $deleteSavedFilters: "deleteSavedFilters" }, usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"columnsSchema && tableLoaded\">\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'normal'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'inverted'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyButtons'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyFilters'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- DATATABLE -->\r\n  <arq-datatable\r\n    *ngIf=\"columnsSchema\"\r\n    [loadedData]=\"loadedData$\"\r\n    [refreshData]=\"refreshData$\"\r\n    (loadDataEvent)=\"requireData($event)\"\r\n    [columnsSchema]=\"columnsSchema\"\r\n    [tableConfig]=\"componentConfig.datatable\"\r\n    (selectEvent)=\"handleSelectEvent($event)\"></arq-datatable>\r\n</div>\r\n\r\n<!-- BUTTON TOOLBAR -->\r\n<ng-template #tButtons>\r\n  <mat-toolbar>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"showHideSelect\" color=\"primary\">\r\n      {{ 'DT-BA.SHOW-HIDE-COLS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"savedFiltersM\" color=\"primary\">\r\n      {{ 'DT-BA.SAVED-FILTERS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n\r\n    <mat-chip-listbox *ngIf=\"savedFiltersStatus === 'loaded'\" style=\"margin-left: 0.5em; margin-right: 1em\">\r\n      <mat-chip\r\n        ><b>{{ 'DT-BA.FILTERS' | transloco }}:</b> {{ selectedSavedFilter?.nombre }}</mat-chip\r\n      >\r\n    </mat-chip-listbox>\r\n\r\n    <button *ngIf=\"savedFiltersStatus === 'loaded'\" mat-raised-button (click)=\"deleteSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.DELETE-FILTERS' | transloco }}\r\n    </button>\r\n    <button *ngIf=\"savedFiltersStatus === 'modified'\" mat-raised-button (click)=\"saveSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.SAVE-FILTERS' | transloco }}\r\n    </button>\r\n\r\n    <span class=\"toolbar-spacer\"></span>\r\n\r\n    <button\r\n      *ngIf=\"componentConfig.cleanFiltersButton && componentConfig.headerToolbarsPos !== 'onlyFilters'\"\r\n      mat-raised-button\r\n      (click)=\"cleanFilters()\"\r\n      color=\"primary\">\r\n      {{ 'DT-BA.CLEAN-FILTERS' | transloco }}\r\n    </button>\r\n    <button\r\n      *ngFor=\"let btn of componentConfig.headerButtons\"\r\n      mat-raised-button\r\n      (click)=\"emitActionEvent(btn.id, btn.value || null)\"\r\n      [color]=\"btn.color ? btn.color : 'primary'\"\r\n      [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\">\r\n      {{ btn.label }}\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <br />\r\n\r\n  <mat-menu #showHideSelect=\"matMenu\">\r\n    <button *ngFor=\"let col of savedColumnsSchema\" mat-menu-item (click)=\"showHideCol(col)\">\r\n      <mat-icon *ngIf=\"col.isHidden\" class=\"empty\">check_box_outline_blank</mat-icon>\r\n      <mat-icon *ngIf=\"!col.isHidden\" class=\"checked\">check_box</mat-icon>\r\n      {{ col.label }}\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #savedFiltersM=\"matMenu\">\r\n    <ng-container *ngIf=\"savedFilters.length\">\r\n      <button *ngFor=\"let sf of savedFilters\" mat-menu-item (click)=\"applySavedFilters(sf)\">\r\n        <span>{{ sf.nombre }}</span>\r\n        <mat-icon [style.color]=\"sf.isPredeterminado ? 'gold' : 'grey'\">{{\r\n          sf.isPublico ? 'public' : 'person'\r\n        }}</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!savedFilters.length\">\r\n      <button mat-menu-item style=\"font-style: italic\">{{ 'DT-BA.NOT-SAVED-FILTERS' | transloco }}</button>\r\n    </ng-container>\r\n  </mat-menu>\r\n</ng-template>\r\n\r\n<!-- FILTERS TOOLBAR -->\r\n<ng-template #tFilters>\r\n  <mat-toolbar class=\"dt-filter-toolbar\">\r\n    <button mat-raised-button color=\"basic\" (click)=\"openAdvFilters()\">\r\n      <mat-icon>tune</mat-icon> {{ 'DT-BA.ADVANCED' | transloco }}\r\n    </button>\r\n\r\n    <mat-form-field>\r\n      <mat-select\r\n        placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\"\r\n        [(value)]=\"addFilterForm.column\"\r\n        (selectionChange)=\"selectionChange()\">\r\n        <mat-option *ngFor=\"let col of filterCols(allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <ng-container *ngIf=\"addFilterForm.column\" [ngSwitch]=\"addFilterForm.column.type\">\r\n      <mat-form-field>\r\n        <input\r\n          *ngSwitchDefault\r\n          matInput\r\n          type=\"text\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <input\r\n          *ngSwitchCase=\"'number'\"\r\n          matInput\r\n          type=\"number\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <mat-select *ngSwitchCase=\"'boolean'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option [value]=\"true\">&#10003;</mat-option>\r\n          <mat-option [value]=\"false\">&#10005;</mat-option>\r\n        </mat-select>\r\n        <mat-select *ngSwitchCase=\"'select'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <input\r\n            matInput\r\n            [type]=\"'text'\"\r\n            [matAutocomplete]=\"auto\"\r\n            [(ngModel)]=\"addFilterForm.data[0]\"\r\n            (ngModelChange)=\"doFilter(addFilterForm)\" />\r\n          <mat-autocomplete\r\n            autoActiveFirstOption\r\n            #auto=\"matAutocomplete\"\r\n            class=\"arq-autocomplete\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let col of addFilterForm.column.dataFn | async\" [value]=\"col\">\r\n              {{ col.description }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'date'\">\r\n          <input\r\n            matInput\r\n            placeholder=\"DD/MM/AAAA\"\r\n            [matDatepicker]=\"picker\"\r\n            (dateChange)=\"addFilterForm.data[0] = $event.value\"\r\n            (click)=\"picker.open()\" />\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </ng-container>\r\n        <mat-select *ngSwitchCase=\"'image'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br />\r\n    </ng-container>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"addFilter()\">\r\n      <mat-icon>add</mat-icon> {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n\r\n    <mat-chip-listbox>\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <mat-chip *ngIf=\"i < 3\">\r\n          <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          <span matChipRemove style=\"margin-left: 0em\"><mat-icon (click)=\"removeFilter(filter)\">cancel</mat-icon></span>\r\n        </mat-chip>\r\n        <mat-chip *ngIf=\"i === 3\">\r\n          <b>+{{ hiddenFilters(filters).length - 3 }}</b>\r\n          <span matChipRemove style=\"margin-left: 0em\">\r\n            <mat-icon [matMenuTriggerFor]=\"moreFilters\">more_horiz</mat-icon>\r\n          </span>\r\n        </mat-chip>\r\n      </ng-container>\r\n    </mat-chip-listbox>\r\n\r\n    <mat-menu #moreFilters=\"matMenu\">\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <button mat-menu-item (click)=\"removeFilter(filter)\" *ngIf=\"i > 2\">\r\n          <mat-chip>\r\n            <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          </mat-chip>\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  <br />\r\n</ng-template>\r\n", styles: ["table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d!important;background-color:#e0e0e0!important;border:2px solid;border-color:#fff}.mat-button.mat-small{min-width:1%}.mat-menu-item .mat-icon.checked{display:none;pointer-events:none}.mat-menu-item .mat-icon.empty{pointer-events:none}.mat-menu-item.selected .mat-icon.empty{display:none}.mat-menu-item.selected .mat-icon.checked{display:unset}.toolbar-spacer{flex:1 1 auto}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i5.ArqDatatableComponent, selector: "arq-datatable", inputs: ["columnsSchema", "tableConfig", "loadedData", "loadDataFn", "refreshData", "form", "isEditing", "itemsPerPageLabel", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range", "loadDataMantFn"], outputs: ["loadDataEvent", "selectEvent"] }, { kind: "component", type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i7.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i11.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i12.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i13.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i13.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i13.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: i14.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i15.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i15.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i16.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i16.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "directive", type: i16.MatChipRemove, selector: "[matChipRemove]" }, { kind: "directive", type: i17.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i18.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-dt-busqueda-avanzada', template: "<div *ngIf=\"columnsSchema && tableLoaded\">\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'normal'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'inverted'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyButtons'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyFilters'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- DATATABLE -->\r\n  <arq-datatable\r\n    *ngIf=\"columnsSchema\"\r\n    [loadedData]=\"loadedData$\"\r\n    [refreshData]=\"refreshData$\"\r\n    (loadDataEvent)=\"requireData($event)\"\r\n    [columnsSchema]=\"columnsSchema\"\r\n    [tableConfig]=\"componentConfig.datatable\"\r\n    (selectEvent)=\"handleSelectEvent($event)\"></arq-datatable>\r\n</div>\r\n\r\n<!-- BUTTON TOOLBAR -->\r\n<ng-template #tButtons>\r\n  <mat-toolbar>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"showHideSelect\" color=\"primary\">\r\n      {{ 'DT-BA.SHOW-HIDE-COLS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"savedFiltersM\" color=\"primary\">\r\n      {{ 'DT-BA.SAVED-FILTERS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n\r\n    <mat-chip-listbox *ngIf=\"savedFiltersStatus === 'loaded'\" style=\"margin-left: 0.5em; margin-right: 1em\">\r\n      <mat-chip\r\n        ><b>{{ 'DT-BA.FILTERS' | transloco }}:</b> {{ selectedSavedFilter?.nombre }}</mat-chip\r\n      >\r\n    </mat-chip-listbox>\r\n\r\n    <button *ngIf=\"savedFiltersStatus === 'loaded'\" mat-raised-button (click)=\"deleteSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.DELETE-FILTERS' | transloco }}\r\n    </button>\r\n    <button *ngIf=\"savedFiltersStatus === 'modified'\" mat-raised-button (click)=\"saveSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.SAVE-FILTERS' | transloco }}\r\n    </button>\r\n\r\n    <span class=\"toolbar-spacer\"></span>\r\n\r\n    <button\r\n      *ngIf=\"componentConfig.cleanFiltersButton && componentConfig.headerToolbarsPos !== 'onlyFilters'\"\r\n      mat-raised-button\r\n      (click)=\"cleanFilters()\"\r\n      color=\"primary\">\r\n      {{ 'DT-BA.CLEAN-FILTERS' | transloco }}\r\n    </button>\r\n    <button\r\n      *ngFor=\"let btn of componentConfig.headerButtons\"\r\n      mat-raised-button\r\n      (click)=\"emitActionEvent(btn.id, btn.value || null)\"\r\n      [color]=\"btn.color ? btn.color : 'primary'\"\r\n      [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\">\r\n      {{ btn.label }}\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <br />\r\n\r\n  <mat-menu #showHideSelect=\"matMenu\">\r\n    <button *ngFor=\"let col of savedColumnsSchema\" mat-menu-item (click)=\"showHideCol(col)\">\r\n      <mat-icon *ngIf=\"col.isHidden\" class=\"empty\">check_box_outline_blank</mat-icon>\r\n      <mat-icon *ngIf=\"!col.isHidden\" class=\"checked\">check_box</mat-icon>\r\n      {{ col.label }}\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #savedFiltersM=\"matMenu\">\r\n    <ng-container *ngIf=\"savedFilters.length\">\r\n      <button *ngFor=\"let sf of savedFilters\" mat-menu-item (click)=\"applySavedFilters(sf)\">\r\n        <span>{{ sf.nombre }}</span>\r\n        <mat-icon [style.color]=\"sf.isPredeterminado ? 'gold' : 'grey'\">{{\r\n          sf.isPublico ? 'public' : 'person'\r\n        }}</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!savedFilters.length\">\r\n      <button mat-menu-item style=\"font-style: italic\">{{ 'DT-BA.NOT-SAVED-FILTERS' | transloco }}</button>\r\n    </ng-container>\r\n  </mat-menu>\r\n</ng-template>\r\n\r\n<!-- FILTERS TOOLBAR -->\r\n<ng-template #tFilters>\r\n  <mat-toolbar class=\"dt-filter-toolbar\">\r\n    <button mat-raised-button color=\"basic\" (click)=\"openAdvFilters()\">\r\n      <mat-icon>tune</mat-icon> {{ 'DT-BA.ADVANCED' | transloco }}\r\n    </button>\r\n\r\n    <mat-form-field>\r\n      <mat-select\r\n        placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\"\r\n        [(value)]=\"addFilterForm.column\"\r\n        (selectionChange)=\"selectionChange()\">\r\n        <mat-option *ngFor=\"let col of filterCols(allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <ng-container *ngIf=\"addFilterForm.column\" [ngSwitch]=\"addFilterForm.column.type\">\r\n      <mat-form-field>\r\n        <input\r\n          *ngSwitchDefault\r\n          matInput\r\n          type=\"text\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <input\r\n          *ngSwitchCase=\"'number'\"\r\n          matInput\r\n          type=\"number\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <mat-select *ngSwitchCase=\"'boolean'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option [value]=\"true\">&#10003;</mat-option>\r\n          <mat-option [value]=\"false\">&#10005;</mat-option>\r\n        </mat-select>\r\n        <mat-select *ngSwitchCase=\"'select'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <input\r\n            matInput\r\n            [type]=\"'text'\"\r\n            [matAutocomplete]=\"auto\"\r\n            [(ngModel)]=\"addFilterForm.data[0]\"\r\n            (ngModelChange)=\"doFilter(addFilterForm)\" />\r\n          <mat-autocomplete\r\n            autoActiveFirstOption\r\n            #auto=\"matAutocomplete\"\r\n            class=\"arq-autocomplete\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let col of addFilterForm.column.dataFn | async\" [value]=\"col\">\r\n              {{ col.description }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'date'\">\r\n          <input\r\n            matInput\r\n            placeholder=\"DD/MM/AAAA\"\r\n            [matDatepicker]=\"picker\"\r\n            (dateChange)=\"addFilterForm.data[0] = $event.value\"\r\n            (click)=\"picker.open()\" />\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </ng-container>\r\n        <mat-select *ngSwitchCase=\"'image'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br />\r\n    </ng-container>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"addFilter()\">\r\n      <mat-icon>add</mat-icon> {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n\r\n    <mat-chip-listbox>\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <mat-chip *ngIf=\"i < 3\">\r\n          <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          <span matChipRemove style=\"margin-left: 0em\"><mat-icon (click)=\"removeFilter(filter)\">cancel</mat-icon></span>\r\n        </mat-chip>\r\n        <mat-chip *ngIf=\"i === 3\">\r\n          <b>+{{ hiddenFilters(filters).length - 3 }}</b>\r\n          <span matChipRemove style=\"margin-left: 0em\">\r\n            <mat-icon [matMenuTriggerFor]=\"moreFilters\">more_horiz</mat-icon>\r\n          </span>\r\n        </mat-chip>\r\n      </ng-container>\r\n    </mat-chip-listbox>\r\n\r\n    <mat-menu #moreFilters=\"matMenu\">\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <button mat-menu-item (click)=\"removeFilter(filter)\" *ngIf=\"i > 2\">\r\n          <mat-chip>\r\n            <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          </mat-chip>\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  <br />\r\n</ng-template>\r\n", styles: ["table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d!important;background-color:#e0e0e0!important;border:2px solid;border-color:#fff}.mat-button.mat-small{min-width:1%}.mat-menu-item .mat-icon.checked{display:none;pointer-events:none}.mat-menu-item .mat-icon.empty{pointer-events:none}.mat-menu-item.selected .mat-icon.empty{display:none}.mat-menu-item.selected .mat-icon.checked{display:unset}.toolbar-spacer{flex:1 1 auto}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.MatDialog }, { type: i2.ArqDialogService }]; }, propDecorators: { schema: [{
                type: Input,
                args: ['schema']
            }], loadedData$: [{
                type: Input,
                args: ['loadedData']
            }], refreshData$: [{
                type: Input,
                args: ['refreshData']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], $selectEvent: [{
                type: Output,
                args: ['selectEvent']
            }], $actionEvent: [{
                type: Output,
                args: ['actionEvent']
            }], componentConfig: [{
                type: Input,
                args: ['componentConfig']
            }], filters: [{
                type: Input
            }], filtersChange: [{
                type: Output
            }], forceRebuild$: [{
                type: Input,
                args: ['forceRebuild']
            }], _refreshComboFn: [{
                type: Input,
                args: ['refreshComboFn']
            }], savedFilters: [{
                type: Input,
                args: ['savedFilters']
            }], $saveSavedFilters: [{
                type: Output,
                args: ['saveSavedFilters']
            }], $deleteSavedFilters: [{
                type: Output,
                args: ['deleteSavedFilters']
            }] } });
export class ArqDTBANameFilterDialogComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.fDefault = false;
    }
    closeDialog() {
        this.dialogService.confirmed({ name: this.fName, default: this.fDefault });
    }
    toggleDefault() {
        this.fDefault = !this.fDefault;
    }
}
ArqDTBANameFilterDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBANameFilterDialogComponent, deps: [{ token: i2.ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqDTBANameFilterDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDTBANameFilterDialogComponent, selector: "arq-dt-ba-namefilter-dialog", ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i19.ArqButtonComponent, selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "component", type: i7.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBANameFilterDialogComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i2.ArqDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWR0LWJ1c3F1ZWRhLWF2YW56YWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1kdC1idXNxdWVkYS1hdmFuemFkYS9hcnEtZHQtYnVzcXVlZGEtYXZhbnphZGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWR0LWJ1c3F1ZWRhLWF2YW56YWRhL2FycS1kdC1idXNxdWVkYS1hdmFuemFkYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQVUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbkYsT0FBTyxFQUdMLGdCQUFnQixFQUlqQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFNTCxpQkFBaUIsRUFDbEIsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hHLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxnQkFBZ0I7SUFDbEUsSUFBNEIsTUFBTSxDQUFDLEdBQTBCO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxvRkFBb0Y7UUFDcEYsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFD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UUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBpc09ic2VydmFibGUsIG1hcCwgb2YsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFycVBhZ2VhYmxlUmVxdWVzdCxcclxuICBBcnFQYWdlYWJsZVJlc3BvbnNlLFxyXG4gIEFycUJhc2VDb21wb25lbnQsXHJcbiAgQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYSxcclxuICBBcnFMaXN0LFxyXG4gIEFycURpYWxvZ1NlcnZpY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMtYXBpJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQXJxRFRCdXNxdWVkYUF2YW56YWRhQ29sdW1ucyxcclxuICBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFDb21ib0R5bmFtLFxyXG4gIEFycURUQnVzcXVlZGFBdmFuemFkYUNvbmZpZyxcclxuICBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzLFxyXG4gIEFycURUQnVzcXVlZGFBdmFuemFkYVNhdmVkRmlsdGVyLFxyXG4gIERlZmF1bHRGaWx0ZXJUeXBlXHJcbn0gZnJvbSAnLi9hcnEtZHQtYnVzcXVlZGEtYXZhbnphZGEuaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IEFycUFkdkZpbHRlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9ncy9hZHYtZmlsdGVyL2Fkdi1maWx0ZXItZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFycVByZWZpbHRlcnNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZ3MvcHJlZmlsdGVycy9wcmVmaWx0ZXJzLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtZHQtYnVzcXVlZGEtYXZhbnphZGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtZHQtYnVzcXVlZGEtYXZhbnphZGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FycS1kdC1idXNxdWVkYS1hdmFuemFkYS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFDb21wb25lbnQgZXh0ZW5kcyBBcnFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3NjaGVtYScpIHB1YmxpYyBzZXQgc2NoZW1hKHZhbDogYW55IHwgT2JzZXJ2YWJsZTxhbnk+KSB7XHJcbiAgICBpZiAoIWlzT2JzZXJ2YWJsZSh2YWwpKSB2YWwgPSBvZih2YWwpO1xyXG5cclxuICAgIC8vIE9idGllbmUgbGFzIGNvbHVtbmFzLCBsYXMgdHJhZHVjZSBjb24gZWwgc2VydmljaW8geSBsYXMgYWxtYWNlbmEgZW4gY29sdW1uc1NjaGVtYVxyXG4gICAgdmFsLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChfc2NoZW1hOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCFfc2NoZW1hKSByZXR1cm47XHJcbiAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IF9zY2hlbWEuY29sdW1ucztcclxuICAgICAgW3RoaXMuc2F2ZWRDb2x1bW5zU2NoZW1hLCB0aGlzLnBrQ29sdW1ucywgdGhpcy5hbGxDb2x1bW5zU2NoZW1hXSA9IHRoaXMudHJhbnNsYXRlQ29sdW1ucyh0aGlzLmFsbENvbHVtbnMpO1xyXG5cclxuICAgICAgdGhpcy5wa0tleXMgPSB0aGlzLnBrQ29sdW1ucy5tYXAoY29sdW1uID0+IGNvbHVtbi5rZXkpO1xyXG4gICAgICB0aGlzLmNvbHVtbnNTY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2F2ZWRDb2x1bW5zU2NoZW1hKSk7XHJcbiAgICAgIC8vIHNldGVhbW9zIGxvcyBvYnNlcnZhYmxlcyB0cmFzIGVsIEpTT04ucGFyc2VcclxuICAgICAgdGhpcy5pbml0aWFsaXplQXV0b2NvbXBsZXRlKCk7XHJcbiAgICAgIHRoaXMuaWREYXRhdGFibGUgPSBfc2NoZW1hLmlkRGF0YXRhYmxlO1xyXG5cclxuICAgICAgLy8gU2V0IGJhY2tlbmQgY29tcG9uZW50Q29uZmlnIHNldHRpbmdzXHJcbiAgICAgIHRoaXMuY29tcG9uZW50Q29uZmlnLmRhdGF0YWJsZS5wYWdlU2l6ZSA9IF9zY2hlbWEucm93TnVtYmVyID8gX3NjaGVtYS5yb3dOdW1iZXIgOiAxMDtcclxuICAgICAgaWYgKF9zY2hlbWEuc2VsZWN0aW9uVHlwZSkgdGhpcy5jb21wb25lbnRDb25maWcuZGF0YXRhYmxlLnNlbGVjdENvbHVtbiA9IHRydWU7XHJcblxyXG4gICAgICAvLyBMb2FkIGRlZmF1bHQgcHJlZmlsdGVyc1xyXG4gICAgICBjb25zdCBwcmVmaWx0ZXJzID0gdGhpcy5hbGxDb2x1bW5zU2NoZW1hLmZpbHRlcigoY29sOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hKSA9PiBjb2wuaXNEZWZhdWx0RmlsdGVyKTtcclxuICAgICAgaWYgKHByZWZpbHRlcnMubGVuZ3RoKSB0aGlzLmxvYWRQcmVmaWx0ZXJzKHByZWZpbHRlcnMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2F2ZWRGaWx0ZXJzICYmIHRoaXMuc2F2ZWRGaWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0U2F2ZWRGaWx0ZXI6IEFycURUQnVzcXVlZGFBdmFuemFkYVNhdmVkRmlsdGVyIHwgdW5kZWZpbmVkID0gdGhpcy5zYXZlZEZpbHRlcnMuZmluZChcclxuICAgICAgICAgIGZpbHRlciA9PiBmaWx0ZXIuaXNQcmVkZXRlcm1pbmFkb1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRTYXZlZEZpbHRlcikge1xyXG4gICAgICAgICAgdGhpcy5hcHBseVNhdmVkRmlsdGVycyhkZWZhdWx0U2F2ZWRGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWJ1aWxkVGFibGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdsb2FkZWREYXRhJykgcHVibGljIGxvYWRlZERhdGEkITogT2JzZXJ2YWJsZTxBcnFQYWdlYWJsZVJlc3BvbnNlPjtcclxuICBASW5wdXQoJ3JlZnJlc2hEYXRhJykgcHVibGljIHJlZnJlc2hEYXRhJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBAT3V0cHV0KCdsb2FkRGF0YUV2ZW50JykgcHVibGljIGxvYWREYXRhRXZlbnQkID0gbmV3IEV2ZW50RW1pdHRlcjx7XHJcbiAgICByZXF1ZXN0OiBBcnFQYWdlYWJsZVJlcXVlc3Q7XHJcbiAgICBmaWx0ZXJzOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzW107XHJcbiAgfT4oKTtcclxuXHJcbiAgQE91dHB1dCgnc2VsZWN0RXZlbnQnKSBwdWJsaWMgJHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoJ2FjdGlvbkV2ZW50JykgcHVibGljICRhY3Rpb25FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyB2YWx1ZTogYW55IH0+KCk7XHJcblxyXG4gIEBJbnB1dCgnY29tcG9uZW50Q29uZmlnJykgcHVibGljIGNvbXBvbmVudENvbmZpZzogQXJxRFRCdXNxdWVkYUF2YW56YWRhQ29uZmlnID0geyBkYXRhdGFibGU6IHt9IH07XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJzOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcHVibGljIGZpbHRlcnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFycURUQnVzcXVlZGFBdmFuemFkYUZpbHRlcnNbXT4oKTtcclxuXHJcbiAgQElucHV0KCdmb3JjZVJlYnVpbGQnKSBwdWJsaWMgZm9yY2VSZWJ1aWxkJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgQElucHV0KCdyZWZyZXNoQ29tYm9GbicpIHB1YmxpYyBfcmVmcmVzaENvbWJvRm4hOiAoXHJcbiAgICBmaWx0ZXJDb21ib0R5bmFtOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFDb21ib0R5bmFtXHJcbiAgKSA9PiBPYnNlcnZhYmxlPEFycUxpc3RbXT47XHJcblxyXG4gIEBJbnB1dCgnc2F2ZWRGaWx0ZXJzJykgcHVibGljIHNhdmVkRmlsdGVyczogQXJxRFRCdXNxdWVkYUF2YW56YWRhU2F2ZWRGaWx0ZXJbXSA9IFtdO1xyXG4gIEBPdXRwdXQoJ3NhdmVTYXZlZEZpbHRlcnMnKSBwdWJsaWMgJHNhdmVTYXZlZEZpbHRlcnMgPSBuZXcgRXZlbnRFbWl0dGVyPEFycURUQnVzcXVlZGFBdmFuemFkYVNhdmVkRmlsdGVyPigpO1xyXG4gIEBPdXRwdXQoJ2RlbGV0ZVNhdmVkRmlsdGVycycpIHB1YmxpYyAkZGVsZXRlU2F2ZWRGaWx0ZXJzID0gbmV3IEV2ZW50RW1pdHRlcjxBcnFEVEJ1c3F1ZWRhQXZhbnphZGFTYXZlZEZpbHRlcj4oKTtcclxuXHJcbiAgcHVibGljIGFkZEZpbHRlckZvcm06IHsgZGF0YTogQXJyYXk8c3RyaW5nPjsgY29sdW1uOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hIHwgbnVsbCB9ID0ge1xyXG4gICAgZGF0YTogWycnXSxcclxuICAgIGNvbHVtbjogbnVsbFxyXG4gIH07XHJcbiAgcHJpdmF0ZSBsYXN0UmVxdWVzdCE6IEFycVBhZ2VhYmxlUmVxdWVzdDtcclxuICBwdWJsaWMgYWxsQ29sdW1ucyE6IEFycURUQnVzcXVlZGFBdmFuemFkYUNvbHVtbnNbXTtcclxuICBwdWJsaWMgYWxsQ29sdW1uc1NjaGVtYSE6IEFycURhdGF0YWJsZUNvbHVtbnNTY2hlbWFbXTtcclxuICBwdWJsaWMgc2F2ZWRDb2x1bW5zU2NoZW1hITogQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYVtdO1xyXG4gIHB1YmxpYyBjb2x1bW5zU2NoZW1hITogQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYVtdO1xyXG4gIHByaXZhdGUgaWREYXRhdGFibGUhOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwa0NvbHVtbnMhOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hW107XHJcbiAgcHJpdmF0ZSBwa0tleXMhOiBzdHJpbmdbXTtcclxuXHJcbiAgcHVibGljIGZEaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgdGFibGVMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2F2ZWRGaWx0ZXJzU3RhdHVzOiAnJyB8ICdsb2FkZWQnIHwgJ21vZGlmaWVkJyA9ICcnO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFNhdmVkRmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFTYXZlZEZpbHRlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBhcnFEaWFsb2c6IEFycURpYWxvZ1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRlZERhdGEkID0gdGhpcy5sb2FkZWREYXRhJC5waXBlKFxyXG4gICAgICBtYXAoKGRhdGE6IEFycVBhZ2VhYmxlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkYXRhLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwQ29sOiBhbnkgPSB7fTtcclxuICAgICAgICAgIHJvdy5jb2x1bW5zLmZvckVhY2goKGNvbDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHBDb2xbY29sLm5hbWVDb2x1bW5HcmlkXSA9IGNvbC52YWx1ZUNvbHVtbkdyaWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBwQ29sO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gRXN0YWJsZWNlIGxhcyBjb25maWd1cmFjaW9uZXMgcG9yIGRlZmVjdG9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb21wb25lbnRDb25maWcuaGVhZGVyQnV0dG9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29tcG9uZW50Q29uZmlnLmhlYWRlckJ1dHRvbnMgPSBbXTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb21wb25lbnRDb25maWcuY2xlYW5GaWx0ZXJzQnV0dG9uID09PSAndW5kZWZpbmVkJykgdGhpcy5jb21wb25lbnRDb25maWcuY2xlYW5GaWx0ZXJzQnV0dG9uID0gdHJ1ZTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb21wb25lbnRDb25maWcuaGVhZGVyVG9vbGJhcnNQb3MgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICB0aGlzLmNvbXBvbmVudENvbmZpZy5oZWFkZXJUb29sYmFyc1BvcyA9ICdub3JtYWwnO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbXBvbmVudENvbmZpZy5kYXRhdGFibGUuc2VsZWN0Q29sdW1uID09PSAndW5kZWZpbmVkJylcclxuICAgICAgdGhpcy5jb21wb25lbnRDb25maWcuZGF0YXRhYmxlLnNlbGVjdENvbHVtbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFNpIGV4aXN0ZSBlc3RlIG9ic2VydmFibGUgc2Ugc3Vic2NyaWJlIGEgZWxcclxuICAgIGlmICh0aGlzLmZvcmNlUmVidWlsZCQpIHRoaXMuZm9yY2VSZWJ1aWxkJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShfID0+IHRoaXMucmVidWlsZFRhYmxlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2xhdGVDb2x1bW5zKGNvbHVtbnM6IEFycURUQnVzcXVlZGFBdmFuemFkYUNvbHVtbnNbXSk6IEFycmF5PEFycURhdGF0YWJsZUNvbHVtbnNTY2hlbWFbXT4ge1xyXG4gICAgY29uc3QgdHJhbnNsYXRlZENvbHVtbnMgPSBjb2x1bW5zXHJcbiAgICAgIC5zb3J0KCh4LCB5KSA9PiB4Lm9yZGVyIC0geS5vcmRlcilcclxuICAgICAgLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBrZXk6IGNvbHVtbi5pZENvbHVtbixcclxuICAgICAgICAgIHR5cGU6IGNvbHVtbi50eXBlLFxyXG4gICAgICAgICAgbGFiZWw6IGNvbHVtbi5sYWJlbCxcclxuICAgICAgICAgIGRhdGE6IGNvbHVtbi5jb21ib0l0ZW1MaXN0LFxyXG4gICAgICAgICAgZGF0YUZuOiBjb2x1bW4udHlwZSA9PT0gJ2F1dG9jb21wbGV0ZScgPyBvZihjb2x1bW4uY29tYm9JdGVtTGlzdCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBmb3JtYXQ6IGNvbHVtbi5mb3JtYXQsXHJcbiAgICAgICAgICBlZGl0SW5wdXRTaXplOiBjb2x1bW4uc2l6ZUNvbCA/IGNvbHVtbi5zaXplQ29sIDogJzE1MHB4JyxcclxuICAgICAgICAgIGlzSGlkZGVuOiAhKGNvbHVtbi5zaG93RGVmYXVsdCA/PyB0cnVlKSxcclxuICAgICAgICAgIGlzRmlsdGVyYWJsZTogY29sdW1uLnNob3dIZWFkZXIgPz8gdHJ1ZSxcclxuICAgICAgICAgIGlzUGs6IGNvbHVtbi5wa0NvbHVtbixcclxuICAgICAgICAgIGlzRGVmYXVsdEZpbHRlcjpcclxuICAgICAgICAgICAgY29sdW1uLmRlZmF1bHRGaWx0ZXIgPT09IERlZmF1bHRGaWx0ZXJUeXBlLlJFUVVFUklETyB8fFxyXG4gICAgICAgICAgICBjb2x1bW4uZGVmYXVsdEZpbHRlciA9PT0gRGVmYXVsdEZpbHRlclR5cGUuTk9fUkVRVUVSSURPLFxyXG4gICAgICAgICAgaXNSZXF1aXJlZDogY29sdW1uLmRlZmF1bHRGaWx0ZXIgPT09IERlZmF1bHRGaWx0ZXJUeXBlLlJFUVVFUklETyxcclxuICAgICAgICAgIGlzT25seUZpbHRlcjogY29sdW1uLmlzT25seUZpbHRlcixcclxuICAgICAgICAgIGRlcGVuZHNPbjogY29sdW1uLmRlcGVuZHNPbiA/IFtjb2x1bW4uZGVwZW5kc09uXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIH0gYXMgQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdHJhbnNsYXRlZENvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiAhY29sdW1uLmlzT25seUZpbHRlciAmJiAhY29sdW1uLmlzUGspLFxyXG4gICAgICB0cmFuc2xhdGVkQ29sdW1ucy5maWx0ZXIoY29sdW1uID0+ICFjb2x1bW4uaXNPbmx5RmlsdGVyICYmIGNvbHVtbi5pc1BrKSxcclxuICAgICAgdHJhbnNsYXRlZENvbHVtbnNcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRQcmVmaWx0ZXJzKHByZWZpbHRlcnM6IEFycURhdGF0YWJsZUNvbHVtbnNTY2hlbWFbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBcnFQcmVmaWx0ZXJzRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIG1heFdpZHRoOiAnOTAwcHgnLFxyXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcclxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7IGlkRGF0YXRhYmxlOiB0aGlzLmlkRGF0YXRhYmxlLCBwcmVmaWx0ZXJzOiBwcmVmaWx0ZXJzLCByZWZyZXNoQ29tYm9GbjogdGhpcy5fcmVmcmVzaENvbWJvRm4gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmXHJcbiAgICAgIC5hZnRlckNsb3NlZCgpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKF9maWx0ZXJGb3JtczogeyBkYXRhOiBBcnJheTxzdHJpbmc+OyBjb2x1bW46IEFycURhdGF0YWJsZUNvbHVtbnNTY2hlbWEgfCBudWxsIH1bXSkgPT4ge1xyXG4gICAgICAgIGlmICghX2ZpbHRlckZvcm1zIHx8IF9maWx0ZXJGb3Jtcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBfZmlsdGVyRm9ybXNcclxuICAgICAgICAgIC5maWx0ZXIoKGZpbHRlckZvcm06IGFueSkgPT4gdGhpcy5pc1ZhbGlkRmlsdGVyKGZpbHRlckZvcm0pKVxyXG4gICAgICAgICAgLmZvckVhY2goKGZpbHRlckZvcm06IGFueSkgPT4gdGhpcy5maWx0ZXJzLnB1c2godGhpcy5nZW5lcmF0ZUZpbHRlcihmaWx0ZXJGb3JtKSkpO1xyXG4gICAgICAgIHRoaXMucmVxdWlyZURhdGEodGhpcy5sYXN0UmVxdWVzdCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkRmlsdGVyKGZpbHRlcjogeyBkYXRhOiBBcnJheTxzdHJpbmc+OyBjb2x1bW46IEFycURhdGF0YWJsZUNvbHVtbnNTY2hlbWEgfCBudWxsIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICEhZmlsdGVyLmRhdGFbMF0gJiZcclxuICAgICAgISFmaWx0ZXIuY29sdW1uICYmXHJcbiAgICAgIChmaWx0ZXIuY29sdW1uIS50eXBlICE9PSAnYXV0b2NvbXBsZXRlJyB8fFxyXG4gICAgICAgIChmaWx0ZXIuY29sdW1uIS50eXBlID09PSAnYXV0b2NvbXBsZXRlJyAmJiBmaWx0ZXIuZGF0YVswXS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gVFdPLVdBWSBCSU5ESU5HIFRBQkxFIERBVEEgTE9HSUNcclxuICBwdWJsaWMgcmVxdWlyZURhdGEocmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWREYXRhRXZlbnQkLmVtaXQoeyByZXF1ZXN0OiB0aGlzLmdlbmVyYXRlUGFnZWFibGUocmVxdWVzdCksIGZpbHRlcnM6IHRoaXMuZmlsdGVycyB9KTtcclxuICAgIHRoaXMubGFzdFJlcXVlc3QgPSByZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVBhZ2VhYmxlKHJlcXVlc3Q6IEFycVBhZ2VhYmxlUmVxdWVzdCk6IEFycVBhZ2VhYmxlUmVxdWVzdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlOiByZXF1ZXN0LnBhZ2UgPyByZXF1ZXN0LnBhZ2UgOiAwLFxyXG4gICAgICBzaXplOiByZXF1ZXN0LnNpemUgPyByZXF1ZXN0LnNpemUgOiAxMCxcclxuICAgICAgc29ydE5hbWU6IHJlcXVlc3Quc29ydD8uc3BsaXQoJywnKVswXSxcclxuICAgICAgc29ydERpcmVjdGlvbjogcmVxdWVzdC5zb3J0Py5zcGxpdCgnLCcpWzFdLnRvVXBwZXJDYXNlKClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYnVpbGRUYWJsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGVMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBHZW5lcmEgbGFzIGNvbHVtbmFzIGxhIHRhYmxhIGRlIGZpbHRyb3NcclxuICAgIHRoaXMuZkRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnNTY2hlbWE/Lm1hcCgoY29sOiB7IGtleTogYW55IH0pID0+IGNvbC5rZXkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhYmxlTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0hpZGVDb2woY29sOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbC5pc0hpZGRlbiA9IGNvbC5pc0hpZGRlbiA/ICFjb2wuaXNIaWRkZW4gOiB0cnVlO1xyXG4gICAgdGhpcy5hbGxDb2x1bW5zW3RoaXMuYWxsQ29sdW1ucy5maW5kSW5kZXgoX2NvbCA9PiBfY29sLmlkQ29sdW1uID09PSBjb2wua2V5KV0uc2hvd0RlZmF1bHQgPSAhY29sLmlzSGlkZGVuO1xyXG4gICAgdGhpcy5jb2x1bW5zU2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNhdmVkQ29sdW1uc1NjaGVtYS5maWx0ZXIoX2NvbCA9PiAhX2NvbC5pc0hpZGRlbikpKTtcclxuICAgIC8vIHNldGVhbW9zIGxvcyBvYnNlcnZhYmxlcyB0cmFzIGVsIEpTT04ucGFyc2VcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUF1dG9jb21wbGV0ZSgpO1xyXG4gICAgLy8gQ2FtYmlhIGVsIGVzdGFkbyBkZSBsb3MgZmlsdHJvcyBwYXJhIG1vc3RyYXIgZWwgYm90b24gZGUgZ3VhcmRhZG9cclxuICAgIHRoaXMuc2F2ZWRGaWx0ZXJzU3RhdHVzID0gJ21vZGlmaWVkJztcclxuXHJcbiAgICB0aGlzLnJlYnVpbGRUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVtaXRBY3Rpb25FdmVudChpZDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLiRhY3Rpb25FdmVudC5lbWl0KHsgaWQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVNlbGVjdEV2ZW50KGV2OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuJHNlbGVjdEV2ZW50LmVtaXQoZXYpO1xyXG4gIH1cclxuXHJcbiAgLy8gRklMVEVSUyBGVU5DVElPTlNcclxuICBwdWJsaWMgY2xlYW5GaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuZmlsdGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuZmlsdGVyc1tpXS5oaWRkZW4pIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDYW1iaWEgZWwgZXN0YWRvIGRlIGxvcyBmaWx0cm9zIHBhcmEgbW9zdHJhciBlbCBib3RvbiBkZSBndWFyZGFkb1xyXG4gICAgdGhpcy5zYXZlZEZpbHRlcnNTdGF0dXMgPSAnJztcclxuXHJcbiAgICB0aGlzLnJlYnVpbGRUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEZpbHRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkRmlsdGVyKHRoaXMuYWRkRmlsdGVyRm9ybSkpIHJldHVybjtcclxuICAgIGNvbnN0IGZpbHRlcjogQXJxRFRCdXNxdWVkYUF2YW56YWRhRmlsdGVycyA9IHRoaXMuZ2VuZXJhdGVGaWx0ZXIodGhpcy5hZGRGaWx0ZXJGb3JtKTtcclxuICAgIHRoaXMuY2hlY2tEZXBlbmRlbnQoZmlsdGVyLCBmYWxzZSk7XHJcbiAgICB0aGlzLmZpbHRlcnMucHVzaChmaWx0ZXIpO1xyXG4gICAgdGhpcy5hZGRGaWx0ZXJGb3JtID0geyBkYXRhOiBbJyddLCBjb2x1bW46IG51bGwgfTtcclxuICAgIC8vIENhbWJpYSBlbCBlc3RhZG8gZGUgbG9zIGZpbHRyb3MgcGFyYSBtb3N0cmFyIGVsIGJvdG9uIGRlIGd1YXJkYWRvXHJcbiAgICB0aGlzLnNhdmVkRmlsdGVyc1N0YXR1cyA9ICdtb2RpZmllZCc7XHJcblxyXG4gICAgdGhpcy5yZXF1aXJlRGF0YSh0aGlzLmxhc3RSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVGaWx0ZXIoXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgZGF0YTogQXJyYXk8c3RyaW5nPjtcclxuICAgICAgY29sdW1uOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hIHwgbnVsbDtcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJUeXBlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxyXG4gICk6IEFycURUQnVzcXVlZGFBdmFuemFkYUZpbHRlcnMge1xyXG4gICAgLy8gVE9ETzogU2FjYXIgZnVuY2lvbiBhIHNlcnZpY2lvXHJcbiAgICBjb25zdCBkYXRhQ29sID0gdGhpcy5hbGxDb2x1bW5zU2NoZW1hLmZpbmQoKF86IGFueSkgPT4gXy5rZXkgPT09IGZpbHRlci5jb2x1bW4/LmtleSk7XHJcbiAgICBjb25zdCBnRmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzID0ge1xyXG4gICAgICBpZERhdGF0YWJsZTogdGhpcy5pZERhdGF0YWJsZSxcclxuICAgICAgaWRDb2x1bW46IGRhdGFDb2w/LmtleSA/PyAndGV4dCcsXHJcbiAgICAgIHR5cGU6IGRhdGFDb2w/LnR5cGU/LnRvVXBwZXJDYXNlKCkgPz8gJ1RFWFQnLFxyXG4gICAgICBvcHRpb246ICdCQVNFJyxcclxuICAgICAgZm9ybWF0Q29sdW1uOiBkYXRhQ29sPy5mb3JtYXQsXHJcbiAgICAgIGRlcGVuZHNPbjogZGF0YUNvbD8uZGVwZW5kc09uLFxyXG4gICAgICBoaWRkZW46IGRhdGFDb2w/LmlzUmVxdWlyZWRcclxuICAgIH07XHJcbiAgICBpZiAoIWZpbHRlclR5cGUpIHtcclxuICAgICAgc3dpdGNoIChkYXRhQ29sPy50eXBlPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGdGaWx0ZXIuYmFzZUZpbHRlclRleHQgPSBmaWx0ZXIuZGF0YVswXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICBnRmlsdGVyLmJhc2VGaWx0ZXJOdW1iZXIgPSArZmlsdGVyLmRhdGFbMF07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIGdGaWx0ZXIuYmFzZUZpbHRlckRhdGUgPSBuZXcgRGF0ZShmaWx0ZXIuZGF0YVswXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgIGdGaWx0ZXIuYmFzZUZpbHRlckNvbWJvID0gW2ZpbHRlci5kYXRhWzBdXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F1dG9jb21wbGV0ZSc6XHJcbiAgICAgICAgICBnRmlsdGVyLmJhc2VGaWx0ZXJDb21ibyA9IFsoZmlsdGVyLmRhdGFbMF0gYXMgYW55KS52YWx1ZV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGdGaWx0ZXIuYmFzZUZpbHRlclRleHQgPSBmaWx0ZXIuZGF0YVswXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2luZm9ybWVkJzpcclxuICAgICAgICAgIGdGaWx0ZXIub3B0aW9uID0gZmlsdGVyLmRhdGFbMF0gPT09ICdmYWxzZScgPyAnSVNfTlVMTCcgOiAnTk9UX05VTEwnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGF0ZXJhbmdlJzpcclxuICAgICAgICAgIGdGaWx0ZXIub3B0aW9uID0gJ1JBTkdFUyc7XHJcbiAgICAgICAgICBnRmlsdGVyLmZyb21EYXRlID0gbmV3IERhdGUoZmlsdGVyLmRhdGFbMF0pO1xyXG4gICAgICAgICAgZ0ZpbHRlci51bnRpbERhdGUgPSBuZXcgRGF0ZShmaWx0ZXIuZGF0YVsxXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdudW1iZXJyYW5nZSc6XHJcbiAgICAgICAgICBnRmlsdGVyLm9wdGlvbiA9ICdSQU5HRVMnO1xyXG4gICAgICAgICAgZ0ZpbHRlci5mcm9tTnVtYmVyID0gK2ZpbHRlci5kYXRhWzBdO1xyXG4gICAgICAgICAgZ0ZpbHRlci51bnRpbE51bWJlciA9ICtmaWx0ZXIuZGF0YVsxXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlbGVjdG11bHRpcGxlJzpcclxuICAgICAgICBjYXNlICdhdXRvY29tcGxldGVtdWx0aXBsZSc6XHJcbiAgICAgICAgICBnRmlsdGVyLm9wdGlvbiA9ICdNVUxUSVBMRSc7XHJcbiAgICAgICAgICBnRmlsdGVyLmJhc2VGaWx0ZXJDb21ibyA9IGZpbHRlci5kYXRhO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndGV4dG11bHRpcGxlJzpcclxuICAgICAgICAgIGdGaWx0ZXIub3B0aW9uID0gJ01VTFRJUExFJztcclxuICAgICAgICAgIGdGaWx0ZXIuYmFzZUZpbHRlclRleHQgPSBmaWx0ZXIuZGF0YS5qb2luKCcsJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdGaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlRmlsdGVyKHJtRmx0cjogQXJxRFRCdXNxdWVkYUF2YW56YWRhRmlsdGVycyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldENvbHVtblNjaGVtYShybUZsdHIpO1xyXG5cclxuICAgIC8vIENhbWJpYSBlbCBlc3RhZG8gZGUgbG9zIGZpbHRyb3MgcGFyYSBtb3N0cmFyIGVsIGJvdG9uIGRlIGd1YXJkYWRvXHJcbiAgICB0aGlzLnNhdmVkRmlsdGVyc1N0YXR1cyA9ICdtb2RpZmllZCc7XHJcblxyXG4gICAgdGhpcy5jaGVja0RlcGVuZGVudChybUZsdHIsIHRydWUpO1xyXG4gICAgdGhpcy5maWx0ZXJzLnNwbGljZShcclxuICAgICAgdGhpcy5maWx0ZXJzLmZpbmRJbmRleChmaWx0ZXIgPT4gZmlsdGVyLmlkQ29sdW1uID09PSBybUZsdHIuaWRDb2x1bW4pLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXF1aXJlRGF0YSh0aGlzLmxhc3RSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRDb2x1bW5TY2hlbWEoZmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzKTogdm9pZCB7XHJcbiAgICBmaWx0ZXIuYmFzZUZpbHRlckNvbWJvID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnYXV0b2NvbXBsZXRlJykge1xyXG4gICAgICBjb25zdCBjb2x1bW5TY2hlbWEgPSB0aGlzLmFsbENvbHVtbnNTY2hlbWEuZmluZChjb2xTY2hlbWEgPT4gY29sU2NoZW1hLmtleSA9PT0gZmlsdGVyLmlkQ29sdW1uKSE7XHJcbiAgICAgIGNvbHVtblNjaGVtYS5kYXRhRm4gPSBvZihjb2x1bW5TY2hlbWEuZGF0YSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0RlcGVuZGVudChmaWx0ZXI6IEFycURUQnVzcXVlZGFBdmFuemFkYUZpbHRlcnMsIHJlbW92ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgZGVwZW5kZW50Q29sczogQXJxRFRCdXNxdWVkYUF2YW56YWRhQ29sdW1uc1tdID0gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihcclxuICAgICAgY29sID0+IGNvbC5kZXBlbmRzT24gPT09IGZpbHRlci5pZENvbHVtblxyXG4gICAgKTtcclxuICAgIGRlcGVuZGVudENvbHMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICBjb25zdCBjb2x1bW5TY2hlbWEgPSB0aGlzLmFsbENvbHVtbnNTY2hlbWEuZmluZChjb2xTY2hlbWEgPT4gY29sU2NoZW1hLmtleSA9PT0gY29sLmlkQ29sdW1uKTtcclxuICAgICAgaWYgKCFjb2x1bW5TY2hlbWEpIHJldHVybjtcclxuICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgIGNvbHVtblNjaGVtYSEuZGF0YUZuID0gb2YoY29sdW1uU2NoZW1hLmRhdGEhKTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKFxyXG4gICAgICAgICAgdGhpcy5maWx0ZXJzLmZpbmRJbmRleChmaWx0ZXIgPT4gZmlsdGVyLmlkQ29sdW1uID09PSBjb2wuaWRDb2x1bW4pLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsdGVyQ29tYm9EeW5hbTogQXJxRFRCdXNxdWVkYUF2YW56YWRhQ29tYm9EeW5hbSA9IHtcclxuICAgICAgICBpZENvbHVtbjogY29sLmlkQ29sdW1uLFxyXG4gICAgICAgIGlkRGF0YXRhYmxlOiBjb2wuaWREYXRhdGFibGUsXHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHsgW2ZpbHRlci5pZENvbHVtbl06IGZpbHRlci5iYXNlRmlsdGVyQ29tYm8/LmpvaW4oJywnKSB8fCAnJyB9XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3JlZnJlc2hDb21ib0ZuKGZpbHRlckNvbWJvRHluYW0pLnN1YnNjcmliZSgoZGF0YTogQXJxTGlzdFtdKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjb2x1bW5TY2hlbWE/LnR5cGU/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgIGNvbHVtblNjaGVtYSEuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXV0b2NvbXBsZXRlJzpcclxuICAgICAgICAgICAgY29sdW1uU2NoZW1hIS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgY29sdW1uU2NoZW1hIS5kYXRhRm4gPSBvZihkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBlbCBtb2RhbCBkZSBzZWxlY2Npb24gZGUgZmlsdHJvcyBhdmFuemFkb3MgeSBnZW5lcmEgZWwgZmlsdHJvIGNvbiBsYSByZXNwdWVzdGFcclxuICAgKi9cclxuICBwdWJsaWMgb3BlbkFkdkZpbHRlcnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFycUFkdkZpbHRlckRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnNzUwcHgnLFxyXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHNlbGVjdGVkQ29sOiB0aGlzLmFkZEZpbHRlckZvcm0uY29sdW1uLFxyXG4gICAgICAgIGZpbHRlckNvbHM6IHRoaXMuZmlsdGVyQ29scyxcclxuICAgICAgICBhbGxDb2x1bW5zU2NoZW1hOiB0aGlzLmFsbENvbHVtbnNTY2hlbWFcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmXHJcbiAgICAgIC5hZnRlckNsb3NlZCgpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoX2ZpbHRlciA9PiB7XHJcbiAgICAgICAgaWYgKCFfZmlsdGVyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzID0gdGhpcy5nZW5lcmF0ZUZpbHRlcihfZmlsdGVyLCBfZmlsdGVyLnR5cGUpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgdGhpcy5zYXZlZEZpbHRlcnNTdGF0dXMgPSAnbW9kaWZpZWQnO1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXBlbmRlbnQoZmlsdGVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXJGb3JtID0geyBkYXRhOiBbJyddLCBjb2x1bW46IG51bGwgfTtcclxuICAgICAgICB0aGlzLnJlcXVpcmVEYXRhKHRoaXMubGFzdFJlcXVlc3QpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIEZvciBIVE1MIEZ1bmNpb25zICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRyYSBsYXMgY29sdW1uYXMgcmVjaWJpZGFzLCBlbGltaW5hZG8gbGFzIHF1ZSBubyBzb24gZmlsdHJhYmxlcyB5IGxhcyBxdWUgeWEgZXN0YW4gdXRpbGl6YWRhc1xyXG4gICAqIEBwYXJhbSBmaWx0ZXJDb2xzIEFycmF5IGRlIGNvbHVtbmFzXHJcbiAgICogQHJldHVybnMgQXJyYXkgY29uIGxhcyBjb2x1bW5hcyBmaWx0cmFkYXNcclxuICAgKi9cclxuICBwdWJsaWMgZmlsdGVyQ29scyA9IChmaWx0ZXJDb2xzOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hW10pOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hW10gPT5cclxuICAgIGZpbHRlckNvbHNcclxuICAgICAgLmZpbHRlcihmaWx0ZXJDb2wgPT4gZmlsdGVyQ29sLmlzRmlsdGVyYWJsZSlcclxuICAgICAgLmZpbHRlcihmaWx0ZXJDb2wgPT4gdGhpcy5maWx0ZXJzLmZpbHRlcihfID0+IGZpbHRlckNvbC5rZXkgPT09IF8uaWRDb2x1bW4pLmxlbmd0aCA9PT0gMCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIC1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q2hpcE5hbWUgPSAoZmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNvbE5hbWU6IHN0cmluZyA9IHRoaXMuYWxsQ29sdW1uc1NjaGVtYS5maW5kKGNvbCA9PiBjb2wua2V5ID09PSBmaWx0ZXIuaWRDb2x1bW4pPy5sYWJlbCA/PyAnKioqJztcclxuICAgIGxldCBmaWx0ZXJEYXRhOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBzd2l0Y2ggKGZpbHRlci5vcHRpb24pIHtcclxuICAgICAgY2FzZSAnQkFTRSc6XHJcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIudHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBmaWx0ZXJEYXRhID0gU3RyaW5nKGZpbHRlci5iYXNlRmlsdGVyVGV4dCB8fCAnKioqJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgZmlsdGVyRGF0YSA9IFN0cmluZyhmaWx0ZXIuYmFzZUZpbHRlck51bWJlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgICAgIGZpbHRlckRhdGEgPSBmaWx0ZXIuYmFzZUZpbHRlckRhdGVcclxuICAgICAgICAgICAgICA/IG5ldyBEYXRlKGZpbHRlci5iYXNlRmlsdGVyRGF0ZSkudG9Mb2NhbGVTdHJpbmcoKS5zbGljZSgwLCAxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpXHJcbiAgICAgICAgICAgICAgOiBTdHJpbmcoZmlsdGVyLmJhc2VGaWx0ZXJEYXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnYXV0b2NvbXBsZXRlJzpcclxuICAgICAgICAgICAgZmlsdGVyRGF0YSA9IFN0cmluZyhmaWx0ZXIuYmFzZUZpbHRlckNvbWJvPy5qb2luKCcsICcpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnSVNfTlVMTCc6XHJcbiAgICAgICAgZmlsdGVyRGF0YSA9ICdObyBpbmZvcm1hZG8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdOT1RfTlVMTCc6XHJcbiAgICAgICAgZmlsdGVyRGF0YSA9ICdJbmZvcm1hZG8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdSQU5HRVMnOlxyXG4gICAgICAgIGZpbHRlckRhdGEgPVxyXG4gICAgICAgICAgYGRlc2RlICR7ZmlsdGVyLmZyb21EYXRlIHx8IGZpbHRlci5mcm9tTnVtYmVyIHx8ICcqJ30gYCArXHJcbiAgICAgICAgICBgaGFzdGEgJHtmaWx0ZXIudW50aWxEYXRlIHx8IGZpbHRlci51bnRpbE51bWJlciB8fCAnKid9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnTVVMVElQTEUnOlxyXG4gICAgICAgIGZpbHRlckRhdGEgPSBmaWx0ZXIuYmFzZUZpbHRlclRleHQ/LnNwbGl0KCcsJykuam9pbignLCAnKSB8fCAnJztcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZmlsdGVyRGF0YSA9ICcoQURWKSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChjb2xOYW1lICsgZmlsdGVyRGF0YSkubGVuZ3RoIDwgMjUpIHJldHVybiBgPGI+JHtjb2xOYW1lfTo8L2I+ICR7ZmlsdGVyRGF0YX1gO1xyXG4gICAgZWxzZSByZXR1cm4gYDxiPiR7Y29sTmFtZX08L2I+YDtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWRkZW5GaWx0ZXJzID0gKF9maWx0ZXJzOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzW10pOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFGaWx0ZXJzW10gPT5cclxuICAgIF9maWx0ZXJzLmZpbHRlcihmID0+ICFmLmhpZGRlbik7XHJcblxyXG4gIHB1YmxpYyBzZWxlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hZGRGaWx0ZXJGb3JtLmNvbHVtbj8udHlwZSA9PT0gJ2F1dG9jb21wbGV0ZScpIHtcclxuICAgICAgdGhpcy5hZGRGaWx0ZXJGb3JtLmNvbHVtbi5kYXRhRm4gPSBvZih0aGlzLmFkZEZpbHRlckZvcm0uY29sdW1uLmRhdGEhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGRvRmlsdGVyKGZpbHRlcjogeyBkYXRhOiBhbnk7IGNvbHVtbjogQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYSB8IG51bGwgfSk6IHZvaWQge1xyXG4gICAgZmlsdGVyLmNvbHVtbiEuZGF0YUZuID0gZmlsdGVyLmNvbHVtbiEuZGF0YUZuIS5waXBlKG1hcCh2YWwgPT4gdGhpcy5maWx0ZXIodmFsLCBmaWx0ZXIuZGF0YVswXSEpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlcih2YWw6IEFycUxpc3RbXSwgZGF0YTogYW55KTogQXJxTGlzdFtdIHtcclxuICAgIGlmICghdmFsKSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gdmFsLmZpbHRlcihpdGVtID0+IGl0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkYXRhLnZhbHVlPy50b0xvd2VyQ2FzZSgpIHx8IGRhdGEudG9Mb3dlckNhc2UoKSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BsYXlGbihvcHRpb246IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uPy5kZXNjcmlwdGlvbiB8fCAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcHVibGljIGFwcGx5U2F2ZWRGaWx0ZXJzKGZpbHRlcnM6IEFycURUQnVzcXVlZGFBdmFuemFkYVNhdmVkRmlsdGVyKTogdm9pZCB7XHJcbiAgICAvLyBMaW1waWFtb3MgbG9zIGZpbHRyb3MgYXBsaWNhZG9zIHkgYXBsaWNhbW9zIGxvcyBudWV2b3NcclxuICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycy5maWx0ZXIoZiA9PiBmLmhpZGRlbik7XHJcbiAgICBmaWx0ZXJzLmZpbHRlcnMuZm9yRWFjaChmID0+IHRoaXMuZmlsdGVycy5wdXNoKGYpKTtcclxuXHJcbiAgICAvLyBNb3N0cmFtb3Mvb2N1bHRhbW9zIGxhcyBjb2x1bW5hc1xyXG4gICAgdGhpcy5zYXZlZENvbHVtbnNTY2hlbWEgPSB0aGlzLnNhdmVkQ29sdW1uc1NjaGVtYS5tYXAoX3NjcyA9PiB7XHJcbiAgICAgIGxldCBfID0gX3NjcztcclxuICAgICAgZmlsdGVycy5jb2x1bW5zLmZvckVhY2goKF9mYzogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKF9zY3Mua2V5ID09PSBfZmMuaWRDb2x1bW4pIHtcclxuICAgICAgICAgIF9zY3MuaXNIaWRkZW4gPSAhX2ZjLmlzU2hvd0RlZmF1bHQ7XHJcbiAgICAgICAgICBfID0gX3NjcztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gXztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb2x1bW5zU2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNhdmVkQ29sdW1uc1NjaGVtYS5maWx0ZXIoX2NvbCA9PiAhX2NvbC5pc0hpZGRlbikpKTtcclxuICAgIC8vIHNldGVhbW9zIGxvcyBvYnNlcnZhYmxlcyB0cmFzIGVsIEpTT04ucGFyc2VcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUF1dG9jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRoaXMuc2F2ZWRGaWx0ZXJzU3RhdHVzID0gJ2xvYWRlZCc7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2F2ZWRGaWx0ZXIgPSBmaWx0ZXJzO1xyXG5cclxuICAgIHRoaXMucmVidWlsZFRhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBzYXZlU2F2ZWRGaWx0ZXJzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgX2RhdGE6IGFueSA9IGF3YWl0IHRoaXMubmFtZUZpbHRlckRpYWxvZygpO1xyXG4gICAgaWYgKCFfZGF0YSB8fCAhX2RhdGEubmFtZSkgcmV0dXJuO1xyXG4gICAgY29uc3QgX25hbWUgPSBfZGF0YS5uYW1lO1xyXG4gICAgY29uc3QgX2RlZmF1bHQgPSBfZGF0YS5kZWZhdWx0O1xyXG4gICAgY29uc3QgX3ByaXYgPSBhd2FpdCB0aGlzLmNvbmZpcm1Qcml2YXRlRkRpYWxvZygpO1xyXG4gICAgaWYgKHR5cGVvZiBfcHJpdiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBzRmlsdGVyOiBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFTYXZlZEZpbHRlciA9IHtcclxuICAgICAgY29sdW1uczogdGhpcy5zYXZlZENvbHVtbnNTY2hlbWEubWFwKGNvbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkQ29sdW1uOiBjb2wua2V5LFxyXG4gICAgICAgICAgaXNTaG93RGVmYXVsdDogIWNvbC5pc0hpZGRlblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMuZmlsdGVyKF8gPT4gIV8uaGlkZGVuKSxcclxuICAgICAgaWREYXRhdGFibGU6IHRoaXMuaWREYXRhdGFibGUsXHJcbiAgICAgIG5vbWJyZTogX25hbWUsXHJcbiAgICAgIGlzUHJlZGV0ZXJtaW5hZG86IF9kZWZhdWx0LFxyXG4gICAgICBpc1B1YmxpY286ICFfcHJpdlxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc0ZpbHRlci5pc1B1YmxpY28gJiYgc0ZpbHRlci5pc1ByZWRldGVybWluYWRvKSB7XHJcbiAgICAgIHRoaXMuYXJxRGlhbG9nLm9wZW4oe1xyXG4gICAgICAgIGNvbmZpcm1CdG46IHRydWUsXHJcbiAgICAgICAgbWVzc2FnZTogJ05vIHNlIHB1ZWRlIGNyZWFyIHVuIGZpbHRybyBwdWJsaWNvIHB1YmxpY28gcG9yIGRlZmVjdG8nLFxyXG4gICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgIHR5cGU6ICdhbGVydCcsXHJcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgIGNvbG9yOiAndGV4dC13YXJuaW5nJyxcclxuICAgICAgICB0ZXh0Q29uZmlybTogJ0NvbnRpbnVhcidcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIQU5ETEVSXHJcbiAgICBjb25zdCBfZmlsdGVyID0gdGhpcy5zYXZlZEZpbHRlcnMuZmluZChfID0+IF8ubm9tYnJlID09PSBzRmlsdGVyLm5vbWJyZSk7XHJcblxyXG4gICAgaWYgKF9maWx0ZXIpIHtcclxuICAgICAgaWYgKF9maWx0ZXIuaXNQdWJsaWNvKVxyXG4gICAgICAgIHRoaXMuYXJxRGlhbG9nLm9wZW4oe1xyXG4gICAgICAgICAgY29uZmlybUJ0bjogdHJ1ZSxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdFbCBmaWx0cm8geWEgZXhpc3RlIHkgbm8gc2UgcHVlZGUgc29icmVlc2NyaWJpciB1biBmaWx0cm8gcHVibGljbycsXHJcbiAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcclxuICAgICAgICAgIHR5cGU6ICdhbGVydCcsXHJcbiAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICBjb2xvcjogJ3RleHQtd2FybmluZycsXHJcbiAgICAgICAgICB0ZXh0Q29uZmlybTogJ0NvbnRpbnVhcidcclxuICAgICAgICB9KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuYXJxRGlhbG9nXHJcbiAgICAgICAgICAub3Blbih7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ0bjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ0bjogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0VsIGZpbHRybyB5YSBleGlzdGUgeSBzZSB2YSBhIHNvYnJlZXNjcmliaXIuIMK/RGVzZWFzIGNvbnRpbnVhcj8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0d1YXJkYWRvIGRlIGZpbHRybycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydCcsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgY29sb3I6ICd0ZXh0LXdhcm5pbmcnLFxyXG4gICAgICAgICAgICB0ZXh0Q29uZmlybTogJ0FjZXB0YXInLFxyXG4gICAgICAgICAgICB0ZXh0Q2FuY2VsOiAnQ2FuY2VsYXInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoX3JlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfcmVzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc2F2ZVNhdmVkRmlsdGVycy5lbWl0KHNGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2F2ZWRGaWx0ZXJzU3RhdHVzID0gJ2xvYWRlZCc7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNhdmVkRmlsdGVyID0gc0ZpbHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiRzYXZlU2F2ZWRGaWx0ZXJzLmVtaXQoc0ZpbHRlcik7XHJcbiAgICAgIHRoaXMuc2F2ZWRGaWx0ZXJzU3RhdHVzID0gJ2xvYWRlZCc7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRTYXZlZEZpbHRlciA9IHNGaWx0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBwdWJsaWMgZGVsZXRlU2F2ZWRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTYXZlZEZpbHRlciAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmFycURpYWxvZ1xyXG4gICAgICAgIC5vcGVuKHtcclxuICAgICAgICAgIGNhbmNlbEJ0bjogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpcm1CdG46IHRydWUsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnVmFzIGEgYm9ycmFyIGVsIGZpbHRybyBzZWxlY2Npb25hZG8gKCcgKyB0aGlzLnNlbGVjdGVkU2F2ZWRGaWx0ZXIubm9tYnJlICsgJykuIMK/RGVzZWFzIGNvbnRpbnVhcj8nLFxyXG4gICAgICAgICAgdGl0bGU6ICdCb3JyYXIgZmlsdHJvIGd1YXJkYWRvJyxcclxuICAgICAgICAgIHR5cGU6ICdhbGVydCcsXHJcbiAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICBjb2xvcjogJ3RleHQtd2FybmluZycsXHJcbiAgICAgICAgICB0ZXh0Q29uZmlybTogJ0FjZXB0YXInLFxyXG4gICAgICAgICAgdGV4dENhbmNlbDogJ0NhbmNlbGFyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1YnNjcmliZSgoX3JlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoX3Jlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNhdmVkRmlsdGVyICYmIHRoaXMuc2VsZWN0ZWRTYXZlZEZpbHRlci5pZERhdGF0YWJsZUZpbHRlcilcclxuICAgICAgICAgICAgICB0aGlzLiRkZWxldGVTYXZlZEZpbHRlcnMuZW1pdCh0aGlzLnNlbGVjdGVkU2F2ZWRGaWx0ZXIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdGhpcy4kZGVsZXRlU2F2ZWRGaWx0ZXJzLmVtaXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkRmlsdGVycy5yZXZlcnNlKCkuZmluZChfID0+IHRoaXMuc2VsZWN0ZWRTYXZlZEZpbHRlcj8ubm9tYnJlID09PSBfLm5vbWJyZSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVkRmlsdGVyc1N0YXR1cyA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2F2ZWRGaWx0ZXIgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBuYW1lRmlsdGVyRGlhbG9nKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuYXJxRGlhbG9nLm9wZW4oe30sIEFycURUQkFOYW1lRmlsdGVyRGlhbG9nQ29tcG9uZW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGNvbmZpcm1Qcml2YXRlRkRpYWxvZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5hcnFEaWFsb2dcclxuICAgICAgICAub3Blbih7XHJcbiAgICAgICAgICBjYW5jZWxCdG46IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnRuOiB0cnVlLFxyXG4gICAgICAgICAgbWVzc2FnZTogJ8K/UXVpZXJlcyBxdWUgZWwgZmlsdHJvIHNlYSBwcml2YWRvIG8gcMO6YmxpY28/JyxcclxuICAgICAgICAgIHRpdGxlOiAnR3VhcmRhZG8gZGUgZmlsdHJvJyxcclxuICAgICAgICAgIHR5cGU6ICdhbGVydCcsXHJcbiAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICBjb2xvcjogJ3RleHQtd2FybmluZycsXHJcbiAgICAgICAgICB0ZXh0Q29uZmlybTogJ1ByaXZhZG8nLFxyXG4gICAgICAgICAgdGV4dENhbmNlbDogJ1B1YmxpY28nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3Vic2NyaWJlKChwcml2OiBhbnkpID0+IHJlc29sdmUocHJpdikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVBdXRvY29tcGxldGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbHVtbnNTY2hlbWFcclxuICAgICAgLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLmRhdGEgJiYgY29sdW1uLnR5cGUgPT09ICdhdXRvY29tcGxldGUnKVxyXG4gICAgICAuZm9yRWFjaChjb2x1bW4gPT4gKGNvbHVtbi5kYXRhRm4gPSBvZihjb2x1bW4uZGF0YSEpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FycS1kdC1iYS1uYW1lZmlsdGVyLWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwLTNcIj5cclxuICAgICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+R3VhcmRhZG8gZGUgZmlsdHJvPC9oMT5cclxuICAgICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICAgICAgPHA+SW5zZXJ0YSBub21icmUgZGVsIGZpbHRybyBwYXJhIGd1YXJkYXI8L3A+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTm9tYnJlIGRlbCBmaWx0cm9cIiBbKG5nTW9kZWwpXT1cImZOYW1lXCIgLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgc3R5bGU9XCJwYWRkaW5nLXRvcDogMHB4O1wiPlxyXG4gICAgICAgIDxzcGFuPkZpbHRybyBwb3IgZGVmZWN0byA8L3NwYW4+XHJcbiAgICAgICAgPG1hdC1pY29uXHJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRGVmYXVsdCgpXCJcclxuICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyOyBjb2xvcjoge3sgZkRlZmF1bHQgPyAnZ29sZCcgOiAnZ3JleScgfX07IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XHJcbiAgICAgICAgICBzdGFyXHJcbiAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGFycS1idXR0b24gKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBsYWJlbD1cIkNhbmNlbGFyXCI+PC9hcnEtYnV0dG9uPlxyXG4gICAgICAgIDxhcnEtYnV0dG9uIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgY29sb3I9XCJwcmltYXJ5XCIgbGFiZWw9XCJHdWFyZGFyXCI+PC9hcnEtYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycURUQkFOYW1lRmlsdGVyRGlhbG9nQ29tcG9uZW50IHtcclxuICBwdWJsaWMgZk5hbWUhOiBzdHJpbmc7XHJcbiAgcHVibGljIGZEZWZhdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nU2VydmljZTogQXJxRGlhbG9nU2VydmljZSkgeyB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nU2VydmljZS5jb25maXJtZWQoeyBuYW1lOiB0aGlzLmZOYW1lLCBkZWZhdWx0OiB0aGlzLmZEZWZhdWx0IH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURlZmF1bHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZEZWZhdWx0ID0gIXRoaXMuZkRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJjb2x1bW5zU2NoZW1hICYmIHRhYmxlTG9hZGVkXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbXBvbmVudENvbmZpZy5oZWFkZXJUb29sYmFyc1BvcyA9PT0gJ25vcm1hbCdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0QnV0dG9uc1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRGaWx0ZXJzXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb21wb25lbnRDb25maWcuaGVhZGVyVG9vbGJhcnNQb3MgPT09ICdpbnZlcnRlZCdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0RmlsdGVyc1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRCdXR0b25zXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb21wb25lbnRDb25maWcuaGVhZGVyVG9vbGJhcnNQb3MgPT09ICdvbmx5QnV0dG9ucydcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0QnV0dG9uc1wiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29tcG9uZW50Q29uZmlnLmhlYWRlclRvb2xiYXJzUG9zID09PSAnb25seUZpbHRlcnMnXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidEZpbHRlcnNcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPCEtLSBEQVRBVEFCTEUgLS0+XHJcbiAgPGFycS1kYXRhdGFibGVcclxuICAgICpuZ0lmPVwiY29sdW1uc1NjaGVtYVwiXHJcbiAgICBbbG9hZGVkRGF0YV09XCJsb2FkZWREYXRhJFwiXHJcbiAgICBbcmVmcmVzaERhdGFdPVwicmVmcmVzaERhdGEkXCJcclxuICAgIChsb2FkRGF0YUV2ZW50KT1cInJlcXVpcmVEYXRhKCRldmVudClcIlxyXG4gICAgW2NvbHVtbnNTY2hlbWFdPVwiY29sdW1uc1NjaGVtYVwiXHJcbiAgICBbdGFibGVDb25maWddPVwiY29tcG9uZW50Q29uZmlnLmRhdGF0YWJsZVwiXHJcbiAgICAoc2VsZWN0RXZlbnQpPVwiaGFuZGxlU2VsZWN0RXZlbnQoJGV2ZW50KVwiPjwvYXJxLWRhdGF0YWJsZT5cclxuPC9kaXY+XHJcblxyXG48IS0tIEJVVFRPTiBUT09MQkFSIC0tPlxyXG48bmctdGVtcGxhdGUgI3RCdXR0b25zPlxyXG4gIDxtYXQtdG9vbGJhcj5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJtZW51VHJpZ2dlclwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJzaG93SGlkZVNlbGVjdFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICB7eyAnRFQtQkEuU0hPVy1ISURFLUNPTFMnIHwgdHJhbnNsb2NvIH19IDxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibWVudVRyaWdnZXJcIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2F2ZWRGaWx0ZXJzTVwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICB7eyAnRFQtQkEuU0FWRUQtRklMVEVSUycgfCB0cmFuc2xvY28gfX0gPG1hdC1pY29uPmFycm93X2Ryb3BfZG93bjwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8bWF0LWNoaXAtbGlzdGJveCAqbmdJZj1cInNhdmVkRmlsdGVyc1N0YXR1cyA9PT0gJ2xvYWRlZCdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwLjVlbTsgbWFyZ2luLXJpZ2h0OiAxZW1cIj5cclxuICAgICAgPG1hdC1jaGlwXHJcbiAgICAgICAgPjxiPnt7ICdEVC1CQS5GSUxURVJTJyB8IHRyYW5zbG9jbyB9fTo8L2I+IHt7IHNlbGVjdGVkU2F2ZWRGaWx0ZXI/Lm5vbWJyZSB9fTwvbWF0LWNoaXBcclxuICAgICAgPlxyXG4gICAgPC9tYXQtY2hpcC1saXN0Ym94PlxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCJzYXZlZEZpbHRlcnNTdGF0dXMgPT09ICdsb2FkZWQnXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImRlbGV0ZVNhdmVkRmlsdGVycygpXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgIHt7ICdEVC1CQS5ERUxFVEUtRklMVEVSUycgfCB0cmFuc2xvY28gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cInNhdmVkRmlsdGVyc1N0YXR1cyA9PT0gJ21vZGlmaWVkJ1wiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlU2F2ZWRGaWx0ZXJzKClcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAge3sgJ0RULUJBLlNBVkUtRklMVEVSUycgfCB0cmFuc2xvY28gfX1cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwidG9vbGJhci1zcGFjZXJcIj48L3NwYW4+XHJcblxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdJZj1cImNvbXBvbmVudENvbmZpZy5jbGVhbkZpbHRlcnNCdXR0b24gJiYgY29tcG9uZW50Q29uZmlnLmhlYWRlclRvb2xiYXJzUG9zICE9PSAnb25seUZpbHRlcnMnXCJcclxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgKGNsaWNrKT1cImNsZWFuRmlsdGVycygpXCJcclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgIHt7ICdEVC1CQS5DTEVBTi1GSUxURVJTJyB8IHRyYW5zbG9jbyB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICpuZ0Zvcj1cImxldCBidG4gb2YgY29tcG9uZW50Q29uZmlnLmhlYWRlckJ1dHRvbnNcIlxyXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAoY2xpY2spPVwiZW1pdEFjdGlvbkV2ZW50KGJ0bi5pZCwgYnRuLnZhbHVlIHx8IG51bGwpXCJcclxuICAgICAgW2NvbG9yXT1cImJ0bi5jb2xvciA/IGJ0bi5jb2xvciA6ICdwcmltYXJ5J1wiXHJcbiAgICAgIFttYXRUb29sdGlwXT1cImJ0bi50b29sdGlwID8gYnRuLnRvb2x0aXAgOiAnJ1wiPlxyXG4gICAgICB7eyBidG4ubGFiZWwgfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcblxyXG4gIDxiciAvPlxyXG5cclxuICA8bWF0LW1lbnUgI3Nob3dIaWRlU2VsZWN0PVwibWF0TWVudVwiPlxyXG4gICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgY29sIG9mIHNhdmVkQ29sdW1uc1NjaGVtYVwiIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cInNob3dIaWRlQ29sKGNvbClcIj5cclxuICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY29sLmlzSGlkZGVuXCIgY2xhc3M9XCJlbXB0eVwiPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC9tYXQtaWNvbj5cclxuICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNvbC5pc0hpZGRlblwiIGNsYXNzPVwiY2hlY2tlZFwiPmNoZWNrX2JveDwvbWF0LWljb24+XHJcbiAgICAgIHt7IGNvbC5sYWJlbCB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9tYXQtbWVudT5cclxuXHJcbiAgPG1hdC1tZW51ICNzYXZlZEZpbHRlcnNNPVwibWF0TWVudVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNhdmVkRmlsdGVycy5sZW5ndGhcIj5cclxuICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgc2Ygb2Ygc2F2ZWRGaWx0ZXJzXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiYXBwbHlTYXZlZEZpbHRlcnMoc2YpXCI+XHJcbiAgICAgICAgPHNwYW4+e3sgc2Yubm9tYnJlIH19PC9zcGFuPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwic2YuaXNQcmVkZXRlcm1pbmFkbyA/ICdnb2xkJyA6ICdncmV5J1wiPnt7XHJcbiAgICAgICAgICBzZi5pc1B1YmxpY28gPyAncHVibGljJyA6ICdwZXJzb24nXHJcbiAgICAgICAgfX08L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzYXZlZEZpbHRlcnMubGVuZ3RoXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSBzdHlsZT1cImZvbnQtc3R5bGU6IGl0YWxpY1wiPnt7ICdEVC1CQS5OT1QtU0FWRUQtRklMVEVSUycgfCB0cmFuc2xvY28gfX08L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbWF0LW1lbnU+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIEZJTFRFUlMgVE9PTEJBUiAtLT5cclxuPG5nLXRlbXBsYXRlICN0RmlsdGVycz5cclxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJkdC1maWx0ZXItdG9vbGJhclwiPlxyXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImJhc2ljXCIgKGNsaWNrKT1cIm9wZW5BZHZGaWx0ZXJzKClcIj5cclxuICAgICAgPG1hdC1pY29uPnR1bmU8L21hdC1pY29uPiB7eyAnRFQtQkEuQURWQU5DRUQnIHwgdHJhbnNsb2NvIH19XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnRFQtQkEuQ09MVU1OJyB8IHRyYW5zbG9jbyB9fVwiXHJcbiAgICAgICAgWyh2YWx1ZSldPVwiYWRkRmlsdGVyRm9ybS5jb2x1bW5cIlxyXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0aW9uQ2hhbmdlKClcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY29sIG9mIGZpbHRlckNvbHMoYWxsQ29sdW1uc1NjaGVtYSlcIiBbdmFsdWVdPVwiY29sXCI+e3sgY29sLmxhYmVsIH19PC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZGRGaWx0ZXJGb3JtLmNvbHVtblwiIFtuZ1N3aXRjaF09XCJhZGRGaWx0ZXJGb3JtLmNvbHVtbi50eXBlXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdEVC1CQS5GSUxURVInIHwgdHJhbnNsb2NvIH19XCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwiYWRkRmlsdGVyRm9ybS5kYXRhWzBdXCIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiXHJcbiAgICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdEVC1CQS5GSUxURVInIHwgdHJhbnNsb2NvIH19XCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwiYWRkRmlsdGVyRm9ybS5kYXRhWzBdXCIgLz5cclxuICAgICAgICA8bWF0LXNlbGVjdCAqbmdTd2l0Y2hDYXNlPVwiJ2Jvb2xlYW4nXCIgWyhuZ01vZGVsKV09XCJhZGRGaWx0ZXJGb3JtLmRhdGFbMF1cIj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJudWxsXCI+PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRydWVcIj4mIzEwMDAzOzwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJmYWxzZVwiPiYjMTAwMDU7PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8bWF0LXNlbGVjdCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBbKG5nTW9kZWwpXT1cImFkZEZpbHRlckZvcm0uZGF0YVswXVwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm51bGxcIj48L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY29sIG9mIGFkZEZpbHRlckZvcm0uY29sdW1uLmRhdGFcIiBbdmFsdWVdPVwiY29sLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIHt7IGNvbC5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInYXV0b2NvbXBsZXRlJ1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICAgIFt0eXBlXT1cIid0ZXh0J1wiXHJcbiAgICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiYWRkRmlsdGVyRm9ybS5kYXRhWzBdXCJcclxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZG9GaWx0ZXIoYWRkRmlsdGVyRm9ybSlcIiAvPlxyXG4gICAgICAgICAgPG1hdC1hdXRvY29tcGxldGVcclxuICAgICAgICAgICAgYXV0b0FjdGl2ZUZpcnN0T3B0aW9uXHJcbiAgICAgICAgICAgICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJhcnEtYXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAgICAgW2Rpc3BsYXlXaXRoXT1cImRpc3BsYXlGblwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY29sIG9mIGFkZEZpbHRlckZvcm0uY29sdW1uLmRhdGFGbiB8IGFzeW5jXCIgW3ZhbHVlXT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgIHt7IGNvbC5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJERC9NTS9BQUFBXCJcclxuICAgICAgICAgICAgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcclxuICAgICAgICAgICAgKGRhdGVDaGFuZ2UpPVwiYWRkRmlsdGVyRm9ybS5kYXRhWzBdID0gJGV2ZW50LnZhbHVlXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInBpY2tlci5vcGVuKClcIiAvPlxyXG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bWF0LXNlbGVjdCAqbmdTd2l0Y2hDYXNlPVwiJ2ltYWdlJ1wiIFsobmdNb2RlbCldPVwiYWRkRmlsdGVyRm9ybS5kYXRhWzBdXCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwibnVsbFwiPjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBjb2wgb2YgYWRkRmlsdGVyRm9ybS5jb2x1bW4uZGF0YVwiIFt2YWx1ZV09XCJjb2wudmFsdWVcIj5cclxuICAgICAgICAgICAge3sgY29sLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZpbHRlcigpXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPiB7eyAnRFQtQkEuRklMVEVSVicgfCB0cmFuc2xvY28gfX1cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxtYXQtY2hpcC1saXN0Ym94PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgaGlkZGVuRmlsdGVycyhmaWx0ZXJzKTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxtYXQtY2hpcCAqbmdJZj1cImkgPCAzXCI+XHJcbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdldENoaXBOYW1lKGZpbHRlcilcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBtYXRDaGlwUmVtb3ZlIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBlbVwiPjxtYXQtaWNvbiAoY2xpY2spPVwicmVtb3ZlRmlsdGVyKGZpbHRlcilcIj5jYW5jZWw8L21hdC1pY29uPjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgIDxtYXQtY2hpcCAqbmdJZj1cImkgPT09IDNcIj5cclxuICAgICAgICAgIDxiPit7eyBoaWRkZW5GaWx0ZXJzKGZpbHRlcnMpLmxlbmd0aCAtIDMgfX08L2I+XHJcbiAgICAgICAgICA8c3BhbiBtYXRDaGlwUmVtb3ZlIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBlbVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1vcmVGaWx0ZXJzXCI+bW9yZV9ob3JpejwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2hpcD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L21hdC1jaGlwLWxpc3Rib3g+XHJcblxyXG4gICAgPG1hdC1tZW51ICNtb3JlRmlsdGVycz1cIm1hdE1lbnVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGhpZGRlbkZpbHRlcnMoZmlsdGVycyk7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cInJlbW92ZUZpbHRlcihmaWx0ZXIpXCIgKm5nSWY9XCJpID4gMlwiPlxyXG4gICAgICAgICAgPG1hdC1jaGlwPlxyXG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdldENoaXBOYW1lKGZpbHRlcilcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmNhbmNlbDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICA8L21hdC10b29sYmFyPlxyXG4gIDxiciAvPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=