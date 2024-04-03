import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqSliderDobleComponent extends ArqGenericInputComponent implements OnInit {
    max: NumberInput;
    min: NumberInput;
    step: NumberInput;
    barraLabel: BooleanInput;
    formControlFinal: FormControl;
    constructor();
    cambioValorInicio(event: Event): void;
    cambioValorFin(event: Event): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSliderDobleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSliderDobleComponent, "arq-slider-doble", never, { "max": "max"; "min": "min"; "step": "step"; "barraLabel": "barraLabel"; "formControlFinal": "formControlFinal"; }, {}, never, never, false, never>;
}
