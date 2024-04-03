import { OnInit } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqInputMoneyComponent extends ArqGenericInputComponent implements OnInit {
    maxLength: number;
    append: string;
    valor: string;
    constructor();
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqInputMoneyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqInputMoneyComponent, "arq-input-money", never, { "maxLength": "maxLength"; "append": "append"; }, {}, never, never, false, never>;
}
