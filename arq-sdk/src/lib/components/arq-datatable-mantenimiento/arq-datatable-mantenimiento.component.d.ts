import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqPageableRequest, ArqPageableResponse, ArqDatatableConfig, ArqDatatableMantenimientoTable, ArqBaseComponent, ArqDatatableComponent } from '../../../../public-api';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ArqDatatableMantenimientoComponent extends ArqBaseComponent implements OnInit {
    private _changeDetector;
    private fb;
    $tableList: Observable<ArqDatatableMantenimientoTable[]>;
    tableConfig: ArqDatatableConfig;
    _selectedTableChange: (_table: string) => any;
    _loadDataMantFn: (request: ArqPageableRequest, table?: string) => Observable<ArqPageableResponse>;
    loadDataEvent$: EventEmitter<{
        request: ArqPageableRequest;
        table: string;
    }>;
    datatable: ArqDatatableComponent;
    dataRequest: ArqPageableRequest;
    selectedTable: ArqDatatableMantenimientoTable | undefined;
    tableList: ArqDatatableMantenimientoTable[];
    tableLoaded: boolean;
    fGroup: FormGroup;
    editing: boolean;
    constructor(_changeDetector: ChangeDetectorRef, fb: FormBuilder);
    ngOnInit(): void;
    changeTable(_table: string): void;
    requireData(request: ArqPageableRequest): void;
    action(): (row: any) => any;
    generateForm(): void;
    loadDataMantFn(): (request: ArqPageableRequest) => Observable<ArqPageableResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDatatableMantenimientoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDatatableMantenimientoComponent, "arq-datatable-mantenimiento", never, { "$tableList": "tableList"; "tableConfig": "tableConfig"; "_selectedTableChange": "selectedTableChange"; "_loadDataMantFn": "loadDataMantFn"; }, { "loadDataEvent$": "loadDataEvent"; }, never, never, false, never>;
}
