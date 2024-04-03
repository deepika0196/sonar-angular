import { BooleanInput } from '@angular/cdk/coercion';
import { OnInit } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqSliderToggleComponent extends ArqGenericInputComponent implements OnInit {
    checked: BooleanInput;
    constructor();
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSliderToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSliderToggleComponent, "arq-slider-toggle", never, { "checked": "checked"; }, {}, never, never, false, never>;
}
