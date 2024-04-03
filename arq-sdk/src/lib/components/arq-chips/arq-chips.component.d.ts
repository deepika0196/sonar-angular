import { ElementRef, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqChipsComponent extends ArqGenericInputComponent implements OnInit {
    placeholderadd: string;
    compareWith?: (o1: any, o2: any) => boolean;
    selectable: boolean;
    role?: string | null;
    multiple?: boolean;
    color: ThemePalette;
    disabled?: boolean;
    removable: boolean;
    roleChip?: string;
    selectableChip: boolean;
    chipInput?: ElementRef<HTMLInputElement>;
    addOnBlur: boolean;
    readonly separatorKeysCodes: number[];
    constructor();
    add(event: MatChipInputEvent): void;
    remove(elem: string): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqChipsComponent, "arq-chips", never, { "placeholderadd": "placeholderadd"; "compareWith": "compareWith"; "selectable": "selectable"; "role": "role"; "multiple": "multiple"; "color": "color"; "disabled": "disabled"; "removable": "removable"; "roleChip": "roleChip"; "selectableChip": "selectableChip"; }, {}, never, never, false, never>;
}
