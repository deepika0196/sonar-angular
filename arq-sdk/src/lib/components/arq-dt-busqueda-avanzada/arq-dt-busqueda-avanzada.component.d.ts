import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ArqPageableRequest, ArqPageableResponse, ArqBaseComponent, ArqDatatableColumnsSchema, ArqList, ArqDialogService } from '../../../../public-api';
import { ArqDTBusquedaAvanzadaColumns, ArqDTBusquedaAvanzadaComboDynam, ArqDTBusquedaAvanzadaConfig, ArqDTBusquedaAvanzadaFilters, ArqDTBusquedaAvanzadaSavedFilter } from './arq-dt-busqueda-avanzada.interface';
import * as i0 from "@angular/core";
export declare class ArqDTBusquedaAvanzadaComponent extends ArqBaseComponent implements OnInit {
    private _changeDetector;
    private dialog;
    private arqDialog;
    set schema(val: any | Observable<any>);
    loadedData$: Observable<ArqPageableResponse>;
    refreshData$: Subject<any>;
    loadDataEvent$: EventEmitter<{
        request: ArqPageableRequest;
        filters: ArqDTBusquedaAvanzadaFilters[];
    }>;
    $selectEvent: EventEmitter<any>;
    $actionEvent: EventEmitter<{
        id: string;
        value: any;
    }>;
    componentConfig: ArqDTBusquedaAvanzadaConfig;
    filters: ArqDTBusquedaAvanzadaFilters[];
    filtersChange: EventEmitter<ArqDTBusquedaAvanzadaFilters[]>;
    forceRebuild$: Subject<any>;
    _refreshComboFn: (filterComboDynam: ArqDTBusquedaAvanzadaComboDynam) => Observable<ArqList[]>;
    savedFilters: ArqDTBusquedaAvanzadaSavedFilter[];
    $saveSavedFilters: EventEmitter<ArqDTBusquedaAvanzadaSavedFilter>;
    $deleteSavedFilters: EventEmitter<ArqDTBusquedaAvanzadaSavedFilter>;
    addFilterForm: {
        data: Array<string>;
        column: ArqDatatableColumnsSchema | null;
    };
    private lastRequest;
    allColumns: ArqDTBusquedaAvanzadaColumns[];
    allColumnsSchema: ArqDatatableColumnsSchema[];
    savedColumnsSchema: ArqDatatableColumnsSchema[];
    columnsSchema: ArqDatatableColumnsSchema[];
    private idDatatable;
    private pkColumns;
    private pkKeys;
    fDisplayedColumns: string[];
    tableLoaded: boolean;
    savedFiltersStatus: '' | 'loaded' | 'modified';
    selectedSavedFilter: ArqDTBusquedaAvanzadaSavedFilter | null;
    constructor(_changeDetector: ChangeDetectorRef, dialog: MatDialog, arqDialog: ArqDialogService);
    ngOnInit(): void;
    private translateColumns;
    private loadPrefilters;
    private isValidFilter;
    requireData(request: ArqPageableRequest): void;
    private generatePageable;
    private rebuildTable;
    showHideCol(col: any): void;
    emitActionEvent(id: string, value: any): void;
    handleSelectEvent(ev: any): void;
    cleanFilters(): void;
    addFilter(): void;
    private generateFilter;
    removeFilter(rmFltr: ArqDTBusquedaAvanzadaFilters): void;
    private resetColumnSchema;
    private checkDependent;
    /**
     * Abre el modal de seleccion de filtros avanzados y genera el filtro con la respuesta
     */
    openAdvFilters(): void;
    /**
     * Filtra las columnas recibidas, eliminado las que no son filtrables y las que ya estan utilizadas
     * @param filterCols Array de columnas
     * @returns Array con las columnas filtradas
     */
    filterCols: (filterCols: ArqDatatableColumnsSchema[]) => ArqDatatableColumnsSchema[];
    /**
     * -
     */
    getChipName: (filter: ArqDTBusquedaAvanzadaFilters) => string;
    /**
     *
     */
    hiddenFilters: (_filters: ArqDTBusquedaAvanzadaFilters[]) => ArqDTBusquedaAvanzadaFilters[];
    selectionChange(): void;
    doFilter(filter: {
        data: any;
        column: ArqDatatableColumnsSchema | null;
    }): void;
    private filter;
    displayFn(option: any): string;
    /**
     *
     */
    applySavedFilters(filters: ArqDTBusquedaAvanzadaSavedFilter): void;
    /**
     *
     */
    saveSavedFilters(): Promise<void>;
    /**
     *
     */
    deleteSavedFilters(): void;
    private nameFilterDialog;
    private confirmPrivateFDialog;
    private initializeAutocomplete;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDTBusquedaAvanzadaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDTBusquedaAvanzadaComponent, "arq-dt-busqueda-avanzada", never, { "schema": "schema"; "loadedData$": "loadedData"; "refreshData$": "refreshData"; "componentConfig": "componentConfig"; "filters": "filters"; "forceRebuild$": "forceRebuild"; "_refreshComboFn": "refreshComboFn"; "savedFilters": "savedFilters"; }, { "loadDataEvent$": "loadDataEvent"; "$selectEvent": "selectEvent"; "$actionEvent": "actionEvent"; "filtersChange": "filtersChange"; "$saveSavedFilters": "saveSavedFilters"; "$deleteSavedFilters": "deleteSavedFilters"; }, never, never, false, never>;
}
export declare class ArqDTBANameFilterDialogComponent {
    private dialogService;
    fName: string;
    fDefault: boolean;
    constructor(dialogService: ArqDialogService);
    closeDialog(): void;
    toggleDefault(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDTBANameFilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDTBANameFilterDialogComponent, "arq-dt-ba-namefilter-dialog", never, {}, {}, never, never, false, never>;
}
