import { OnInit } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqTextInputComponent extends ArqGenericInputComponent implements OnInit {
    maxLength: number;
    append: string;
    disabled: boolean;
    constructor();
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqTextInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqTextInputComponent, "arq-text-input", never, { "maxLength": "maxLength"; "append": "append"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
