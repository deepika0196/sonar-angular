import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { OnInit } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqSliderComponent extends ArqGenericInputComponent implements OnInit {
    disabled: BooleanInput;
    max: NumberInput;
    min: NumberInput;
    step: NumberInput;
    barraLabel: BooleanInput;
    constructor();
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSliderComponent, "arq-slider", never, { "disabled": "disabled"; "max": "max"; "min": "min"; "step": "step"; "barraLabel": "barraLabel"; }, {}, never, never, false, never>;
}
