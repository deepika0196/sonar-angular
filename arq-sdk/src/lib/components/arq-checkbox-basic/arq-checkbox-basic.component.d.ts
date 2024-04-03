import { OnInit, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqCheckboxBasicComponent extends ArqGenericInputComponent implements OnInit {
    color: ThemePalette;
    checked?: boolean;
    disabled?: boolean;
    sectionClass?: string;
    spanClass?: string;
    checkbox_down: boolean;
    checkbox_sn: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    verifyCheckbox(): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqCheckboxBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqCheckboxBasicComponent, "arq-checkbox-basic", never, { "color": "color"; "checked": "checked"; "disabled": "disabled"; "sectionClass": "sectionClass"; "spanClass": "spanClass"; "checkbox_down": "checkbox_down"; "checkbox_sn": "checkbox_sn"; }, {}, never, never, false, never>;
}
