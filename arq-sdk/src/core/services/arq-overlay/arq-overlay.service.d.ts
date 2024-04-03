import { Overlay, OverlayConfig, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ArqOverlayService {
    private overlay;
    constructor(overlay: Overlay);
    createOverlay(config: OverlayConfig): OverlayRef;
    attachTemplatePortal(overlayRef: OverlayRef, templateRef: TemplateRef<any>, vcRef: ViewContainerRef): void;
    positionGloballyCenter(): PositionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqOverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqOverlayService>;
}
