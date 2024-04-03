import { Component, HostListener, Inject, Input, Optional, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "../arq-upload-files/arq-upload-files.component";
export class ArqUploadFilesDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
    }
    cancel() {
        this.close(false);
    }
    close(value) {
        this.mdDialogRef.close(value);
    }
    confirm() {
        this.close(true);
    }
    onEsc() {
        this.close(false);
    }
}
ArqUploadFilesDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogComponent, deps: [{ token: MAT_DIALOG_DATA, optional: true }, { token: i1.MatDialogRef, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ArqUploadFilesDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqUploadFilesDialogComponent, selector: "arq-upload-files-dialog", inputs: { config: "config" }, host: { listeners: { "keydown.esc": "onEsc()" } }, ngImport: i0, template: "<div class=\"custom-class-dialog p-3\">\r\n  <div class=\"my-4\">\r\n    <arq-upload-files [config]=\"data.config\" [label]=\"data.label\"></arq-upload-files>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.ArqUploadFilesComponent, selector: "arq-upload-files", inputs: ["config", "label", "multiple"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-upload-files-dialog', encapsulation: ViewEncapsulation.None, template: "<div class=\"custom-class-dialog p-3\">\r\n  <div class=\"my-4\">\r\n    <arq-upload-files [config]=\"data.config\" [label]=\"data.label\"></arq-upload-files>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { config: [{
                type: Input
            }], onEsc: [{
                type: HostListener,
                args: ['keydown.esc']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cvYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cvYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBUXpFLE1BQU0sT0FBTyw2QkFBNkI7SUFHeEMsWUFHUyxJQU9OLEVBQ21CLFdBQXdEO1FBUnJFLFNBQUksR0FBSixJQUFJLENBT1Y7UUFDbUIsZ0JBQVcsR0FBWCxXQUFXLENBQTZDO0lBQzNFLENBQUM7SUFFRyxNQUFNO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ00sS0FBSyxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDOzswSEE3QlUsNkJBQTZCLGtCQUs5QixlQUFlOzhHQUxkLDZCQUE2QixnSkNUMUMscWtCQWNBOzJGRExhLDZCQUE2QjtrQkFOekMsU0FBUzsrQkFDRSx5QkFBeUIsaUJBR3BCLGlCQUFpQixDQUFDLElBQUk7OzBCQU1sQyxRQUFROzswQkFDUixNQUFNOzJCQUFDLGVBQWU7OzBCQVN0QixRQUFROzRDQWJGLE1BQU07c0JBQWQsS0FBSztnQkEwQkMsS0FBSztzQkFEWCxZQUFZO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtdXBsb2FkLWZpbGVzLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVVwbG9hZEZpbGVzRGlhbG9nQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXHJcbiAgICBwdWJsaWMgZGF0YToge1xyXG4gICAgICBjYW5jZWxCdG46IGJvb2xlYW47XHJcbiAgICAgIGNvbmZpcm1CdG46IGJvb2xlYW47XHJcbiAgICAgIHRleHRDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgIHRleHRDYW5jZWw6IHN0cmluZztcclxuICAgICAgY29uZmlnOiBhbnk7XHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBtZERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFycVVwbG9hZEZpbGVzRGlhbG9nQ29tcG9uZW50PlxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgIHRoaXMuY2xvc2UoZmFsc2UpO1xyXG4gIH1cclxuICBwdWJsaWMgY2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubWREaWFsb2dSZWYuY2xvc2UodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIHRoaXMuY2xvc2UodHJ1ZSk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJylcclxuICBwdWJsaWMgb25Fc2MoKSB7XHJcbiAgICB0aGlzLmNsb3NlKGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImN1c3RvbS1jbGFzcy1kaWFsb2cgcC0zXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm15LTRcIj5cclxuICAgIDxhcnEtdXBsb2FkLWZpbGVzIFtjb25maWddPVwiZGF0YS5jb25maWdcIiBbbGFiZWxdPVwiZGF0YS5sYWJlbFwiPjwvYXJxLXVwbG9hZC1maWxlcz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBhbGlnbj1cImVuZFwiPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0lmPVwiZGF0YS5jYW5jZWxCdG5cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cclxuICAgICAge3sgZGF0YS50ZXh0Q2FuY2VsIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKm5nSWY9XCJkYXRhLmNvbmZpcm1CdG5cIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJjb25maXJtKClcIiBjZGtGb2N1c0luaXRpYWw+XHJcbiAgICAgIHt7IGRhdGEudGV4dENvbmZpcm0gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19