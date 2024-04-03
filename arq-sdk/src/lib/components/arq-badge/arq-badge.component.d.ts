import { OnInit } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare class ArqBadgeComponent extends ArqGenericInputComponent implements OnInit {
    color: ThemePalette;
    content: string | number | undefined | null;
    description?: string;
    disabled?: boolean;
    hidden?: boolean;
    overlap?: boolean;
    position?: MatBadgePosition;
    size?: MatBadgeSize;
    icon?: string;
    constructor();
    ngOnInit(): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqBadgeComponent, "arq-bagde", never, { "color": "color"; "content": "content"; "description": "description"; "disabled": "disabled"; "hidden": "hidden"; "overlap": "overlap"; "position": "position"; "size": "size"; "icon": "icon"; }, {}, never, never, false, never>;
}
