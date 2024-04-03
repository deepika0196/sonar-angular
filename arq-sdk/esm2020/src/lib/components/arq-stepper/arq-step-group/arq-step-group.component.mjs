import { Component, ContentChildren, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../../core/arq-generic-input/arq-generic-input.component';
import { ArqStepItemComponent } from '../arq-step-item/arq-step-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/button";
export class ArqStepGroupComponent extends ArqGenericInputComponent {
    constructor() {
        super(...arguments);
        this.duration = '2000';
        this.linear = false;
        this.orientation = 'horizontal';
        this.isEditable = false;
        this.position = 'top';
        this.labelPosition = 'bottom';
        this.isOptional = false;
        this.emitValue = new EventEmitter();
    }
    ngAfterContentInit() {
        this.appItems = this.contentItems;
    }
    selectionChange(evt) {
        this.emitValue.emit(evt);
    }
    next(control) {
        if (control && this.linear && !control.valid) {
            control.markAllAsTouched();
        }
    }
    comprobarEntradas() { }
}
ArqStepGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArqStepGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqStepGroupComponent, selector: "arq-step-group", inputs: { duration: "duration", linear: "linear", orientation: "orientation", isEditable: "isEditable", position: "position", labelPosition: "labelPosition", isOptional: "isOptional" }, outputs: { emitValue: "emitValue" }, queries: [{ propertyName: "contentItems", predicate: ArqStepItemComponent }], usesInheritance: true, ngImport: i0, template: "<mat-stepper\r\n  #stepper\r\n  [linear]=\"linear\"\r\n  [animationDuration]=\"duration\"\r\n  [headerPosition]=\"position\"\r\n  [labelPosition]=\"labelPosition\"\r\n  [orientation]=\"orientation\"\r\n  (selectionChange)=\"selectionChange($event)\">\r\n  <ng-template ngFor let-item [ngForOf]=\"appItems\" let-i=\"index\">\r\n    <mat-step [stepControl]=\"item.control\" [editable]=\"isEditable\">\r\n      <ng-template matStepLabel>\r\n        <ng-container *ngTemplateOutlet=\"item.itemLabel.labelTemplate\"></ng-container>\r\n      </ng-template>\r\n      <ng-template matStepContent>\r\n        <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n        <button *ngIf=\"item.btnBack\" mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"item.btnNext\" mat-button matStepperNext (click)=\"next(item.control)\">Next</button>\r\n      </ng-template>\r\n    </mat-step>\r\n  </ng-template>\r\n</mat-stepper>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepContent, selector: "ng-template[matStepContent]" }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-step-group', encapsulation: ViewEncapsulation.None, template: "<mat-stepper\r\n  #stepper\r\n  [linear]=\"linear\"\r\n  [animationDuration]=\"duration\"\r\n  [headerPosition]=\"position\"\r\n  [labelPosition]=\"labelPosition\"\r\n  [orientation]=\"orientation\"\r\n  (selectionChange)=\"selectionChange($event)\">\r\n  <ng-template ngFor let-item [ngForOf]=\"appItems\" let-i=\"index\">\r\n    <mat-step [stepControl]=\"item.control\" [editable]=\"isEditable\">\r\n      <ng-template matStepLabel>\r\n        <ng-container *ngTemplateOutlet=\"item.itemLabel.labelTemplate\"></ng-container>\r\n      </ng-template>\r\n      <ng-template matStepContent>\r\n        <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n        <button *ngIf=\"item.btnBack\" mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"item.btnNext\" mat-button matStepperNext (click)=\"next(item.control)\">Next</button>\r\n      </ng-template>\r\n    </mat-step>\r\n  </ng-template>\r\n</mat-stepper>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], propDecorators: { duration: [{
                type: Input
            }], linear: [{
                type: Input
            }], orientation: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], position: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], isOptional: [{
                type: Input
            }], emitValue: [{
                type: Output
            }], contentItems: [{
                type: ContentChildren,
                args: [ArqStepItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXN0ZXAtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXN0ZXBwZXIvYXJxLXN0ZXAtZ3JvdXAvYXJxLXN0ZXAtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXN0ZXBwZXIvYXJxLXN0ZXAtZ3JvdXAvYXJxLXN0ZXAtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7O0FBUWhGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx3QkFBd0I7SUFObkU7O1FBT2tCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFFbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGdCQUFXLEdBQXVCLFlBQVksQ0FBQztRQUUvQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGFBQVEsR0FBcUIsS0FBSyxDQUFDO1FBRW5DLGtCQUFhLEdBQXFCLFFBQVEsQ0FBQztRQUUzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBb0JyQztJQWZDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxHQUEwQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQVk7UUFDZixJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUM1QyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxpQkFBaUIsS0FBVSxDQUFDOztrSEFuQ2pCLHFCQUFxQjtzR0FBckIscUJBQXFCLGtUQWtCZixvQkFBb0Isb0RDOUJ2Qyw4N0JBcUJBOzJGRFRhLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSxnQkFBZ0IsaUJBR1gsaUJBQWlCLENBQUMsSUFBSTs4QkFHckIsUUFBUTtzQkFBdkIsS0FBSztnQkFFVSxNQUFNO3NCQUFyQixLQUFLO2dCQUVVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBRVUsVUFBVTtzQkFBekIsS0FBSztnQkFFVSxRQUFRO3NCQUF2QixLQUFLO2dCQUVVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBRVUsVUFBVTtzQkFBekIsS0FBSztnQkFHTixTQUFTO3NCQURSLE1BQU07Z0JBR3dDLFlBQVk7c0JBQTFELGVBQWU7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RlcHBlck9yaWVudGF0aW9uLCBTdGVwcGVyU2VsZWN0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFycUdlbmVyaWNJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXJxLWdlbmVyaWMtaW5wdXQvYXJxLWdlbmVyaWMtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxU3RlcEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hcnEtc3RlcC1pdGVtL2FycS1zdGVwLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLXN0ZXAtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtc3RlcC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLXN0ZXAtZ3JvdXAuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVN0ZXBHcm91cENvbXBvbmVudCBleHRlbmRzIEFycUdlbmVyaWNJbnB1dENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHVibGljIGR1cmF0aW9uID0gJzIwMDAnO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbGluZWFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcmllbnRhdGlvbjogU3RlcHBlck9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsUG9zaXRpb246ICdib3R0b20nIHwgJ2VuZCcgPSAnYm90dG9tJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGlzT3B0aW9uYWwgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZW1pdFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQXJxU3RlcEl0ZW1Db21wb25lbnQpIHByaXZhdGUgY29udGVudEl0ZW1zPzogUXVlcnlMaXN0PEFycVN0ZXBJdGVtQ29tcG9uZW50PjtcclxuICBwdWJsaWMgYXBwSXRlbXM/OiBRdWVyeUxpc3Q8QXJxU3RlcEl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLmFwcEl0ZW1zID0gdGhpcy5jb250ZW50SXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Rpb25DaGFuZ2UoZXZ0OiBTdGVwcGVyU2VsZWN0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuZW1pdFZhbHVlLmVtaXQoZXZ0KTtcclxuICB9XHJcblxyXG4gIG5leHQoY29udHJvbDogYW55KSB7XHJcbiAgICBpZiAoY29udHJvbCAmJiB0aGlzLmxpbmVhciAmJiAhY29udHJvbC52YWxpZCkge1xyXG4gICAgICBjb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXByb2JhckVudHJhZGFzKCk6IHZvaWQge31cclxufVxyXG4iLCI8bWF0LXN0ZXBwZXJcclxuICAjc3RlcHBlclxyXG4gIFtsaW5lYXJdPVwibGluZWFyXCJcclxuICBbYW5pbWF0aW9uRHVyYXRpb25dPVwiZHVyYXRpb25cIlxyXG4gIFtoZWFkZXJQb3NpdGlvbl09XCJwb3NpdGlvblwiXHJcbiAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXHJcbiAgW29yaWVudGF0aW9uXT1cIm9yaWVudGF0aW9uXCJcclxuICAoc2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cImFwcEl0ZW1zXCIgbGV0LWk9XCJpbmRleFwiPlxyXG4gICAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJpdGVtLmNvbnRyb2xcIiBbZWRpdGFibGVdPVwiaXNFZGl0YWJsZVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLml0ZW1MYWJlbC5sYWJlbFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwQ29udGVudD5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS5jb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXRlbS5idG5CYWNrXCIgbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpdGVtLmJ0bk5leHRcIiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0IChjbGljayk9XCJuZXh0KGl0ZW0uY29udHJvbClcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L21hdC1zdGVwPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvbWF0LXN0ZXBwZXI+XHJcbiJdfQ==