import { OnInit } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqInputNumberComponent extends ArqGenericInputComponent implements OnInit {
    maxLength: number;
    append: string;
    constructor();
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqInputNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqInputNumberComponent, "arq-input-number", never, { "maxLength": "maxLength"; "append": "append"; }, {}, never, never, false, never>;
}
