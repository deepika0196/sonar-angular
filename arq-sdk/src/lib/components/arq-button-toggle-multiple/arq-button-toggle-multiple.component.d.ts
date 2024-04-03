import { EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { ArqList } from '../../interfaces/arq-list.interface';
import * as i0 from "@angular/core";
export declare class ArqButtonToggleMultipleComponent extends ArqGenericInputComponent implements OnInit {
    toggleOptions: Observable<ArqList[]>;
    selectionChange: EventEmitter<any>;
    onValChange(value: any): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqButtonToggleMultipleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqButtonToggleMultipleComponent, "arq-button-toggle-multiple", never, { "toggleOptions": "toggleOptions"; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
}
