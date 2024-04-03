import { EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { ArqList } from '../../../lib/interfaces/arq-list.interface';
import * as i0 from "@angular/core";
export declare class ArqSelectComponent extends ArqGenericInputComponent implements OnInit {
    disabled: boolean;
    selectOptionsList?: Observable<ArqList[]> | any;
    emptyOption?: boolean;
    fullObject?: boolean;
    multiple?: boolean;
    selectionChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    private changeObjectWithArrayPropertiesToNull;
    private checkInitValue;
    compareFunction(o1: any, o2: any): boolean;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSelectComponent, "arq-select", never, { "disabled": "disabled"; "selectOptionsList": "selectOptionsList"; "emptyOption": "emptyOption"; "fullObject": "fullObject"; "multiple": "multiple"; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
}
