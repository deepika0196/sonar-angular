import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { ArqCheckbox } from '../../interfaces/arq-checkbox.interface';
import * as i0 from "@angular/core";
export declare class ArqCheckboxComponent extends ArqGenericInputComponent {
    color: ThemePalette;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    disableRipple?: boolean;
    checkBoxes: ArqCheckbox[];
    sectionClass?: string;
    spanClass?: string;
    direction?: string;
    checkbox_down: boolean;
    checkbox_sn: boolean;
    copyCheckboxes: ArqCheckbox[];
    comprobarEntradas(): void;
    ngOnInit(): void;
    setCheckBoxes(evt: any, item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqCheckboxComponent, "arq-checkbox", never, { "color": "color"; "checked": "checked"; "disabled": "disabled"; "indeterminate": "indeterminate"; "disableRipple": "disableRipple"; "checkBoxes": "checkBoxes"; "sectionClass": "sectionClass"; "spanClass": "spanClass"; "direction": "direction"; "checkbox_down": "checkbox_down"; "checkbox_sn": "checkbox_sn"; }, {}, never, never, false, never>;
}
