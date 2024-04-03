import { EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { ArqList } from '../../interfaces/arq-list.interface';
import * as i0 from "@angular/core";
export declare class ArqSelectMultipleComponent extends ArqGenericInputComponent implements OnInit {
    disabled: boolean;
    selectedValue?: any;
    selectOptionsList: Observable<ArqList[]> | any;
    selectionChange: EventEmitter<any>;
    hint: string;
    optionsList: any[];
    constructor();
    ngOnInit(): void;
    reset(): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSelectMultipleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSelectMultipleComponent, "arq-select-multiple", never, { "disabled": "disabled"; "selectedValue": "selectedValue"; "selectOptionsList": "selectOptionsList"; "hint": "hint"; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
}
