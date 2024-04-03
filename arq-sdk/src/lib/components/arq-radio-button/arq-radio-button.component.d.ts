import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { ArqList } from '../../interfaces/arq-list.interface';
import * as i0 from "@angular/core";
export declare class ArqRadioButtonComponent extends ArqGenericInputComponent implements OnInit {
    color: ThemePalette;
    disabled: boolean;
    labelPosition: 'before' | 'after';
    name: string;
    checked: boolean;
    colorRadio: ThemePalette;
    disabledRadio: boolean;
    id: string;
    class?: string;
    radioOptionsList?: Observable<ArqList[]>;
    selectedValue?: string;
    direction: string;
    constructor();
    ngOnInit(): void;
    protected comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqRadioButtonComponent, "arq-radio-button", never, { "color": "color"; "disabled": "disabled"; "labelPosition": "labelPosition"; "name": "name"; "checked": "checked"; "colorRadio": "colorRadio"; "disabledRadio": "disabledRadio"; "id": "id"; "class": "class"; "radioOptionsList": "radioOptionsList"; "selectedValue": "selectedValue"; "direction": "direction"; }, {}, never, never, false, never>;
}
