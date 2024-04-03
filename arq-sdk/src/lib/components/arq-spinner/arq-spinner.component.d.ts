import { ChangeDetectorRef, OnInit, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ArqOverlayService } from '../../../core/services/arq-overlay/arq-overlay.service';
import { ArqSpinnerService } from '../../services/arq-spinner.service';
import * as i0 from "@angular/core";
export declare class ArqSpinnerComponent implements OnInit {
    private vcRef;
    private overlayService;
    private spinnerService;
    private _changeDetector;
    color?: ThemePalette;
    diameter?: number;
    mode: ProgressSpinnerMode;
    value?: number;
    backdropEnabled: boolean;
    positionGloballyCenter: boolean;
    displayProgressSpinner: boolean;
    private progressSpinnerRef;
    private progressSpinnerOverlayConfig;
    private overlayRef;
    constructor(vcRef: ViewContainerRef, overlayService: ArqOverlayService, spinnerService: ArqSpinnerService, _changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    spinnerShow(val: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSpinnerComponent, "arq-spinner", never, { "color": "color"; "diameter": "diameter"; "mode": "mode"; "value": "value"; "backdropEnabled": "backdropEnabled"; "positionGloballyCenter": "positionGloballyCenter"; "displayProgressSpinner": "displayProgressSpinner"; }, {}, never, never, false, never>;
}
