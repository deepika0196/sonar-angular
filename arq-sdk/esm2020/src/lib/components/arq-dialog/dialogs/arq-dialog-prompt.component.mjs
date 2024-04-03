import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/arq-dialog.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/dialog";
import * as i6 from "../../arq-button/arq-button.component";
import * as i7 from "@ngneat/transloco";
export class ArqPromptDialogComponent {
    constructor(data, dialogService) {
        this.data = data;
        this.dialogService = dialogService;
    }
    cancelDialog() {
        this.dialogService.close();
    }
    closeDialog() {
        this.dialogService.confirmed(this.fValue);
    }
}
ArqPromptDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPromptDialogComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqPromptDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqPromptDialogComponent, selector: "arq-dt-prompt-dialog", ngImport: i0, template: `
    <div class="p-3">
      <h1 mat-dialog-title>{{ data.title }}</h1>

      <div mat-dialog-content>
        <p>{{ data.message }}</p>
        <mat-form-field>
          <input matInput [(ngModel)]="fValue" />
        </mat-form-field>
      </div>

      <div mat-dialog-actions align="end">
        <arq-button (click)="cancelDialog()" [label]="'GENERIC.CANCEL' | transloco"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" [label]="'GENERIC.CONTINUE' | transloco"></arq-button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i5.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i5.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: i6.ArqButtonComponent, selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "pipe", type: i7.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPromptDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-dt-prompt-dialog',
                    template: `
    <div class="p-3">
      <h1 mat-dialog-title>{{ data.title }}</h1>

      <div mat-dialog-content>
        <p>{{ data.message }}</p>
        <mat-form-field>
          <input matInput [(ngModel)]="fValue" />
        </mat-form-field>
      </div>

      <div mat-dialog-actions align="end">
        <arq-button (click)="cancelDialog()" [label]="'GENERIC.CANCEL' | transloco"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" [label]="'GENERIC.CONTINUE' | transloco"></arq-button>
      </div>
    </div>
  `
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.ArqDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRpYWxvZy1wcm9tcHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRpYWxvZy9kaWFsb2dzL2FycS1kaWFsb2ctcHJvbXB0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQXNCM0QsTUFBTSxPQUFPLHdCQUF3QjtJQUduQyxZQUFtRCxJQUFTLEVBQVUsYUFBK0I7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUFHLENBQUM7SUFFbEcsWUFBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOztxSEFYVSx3QkFBd0Isa0JBR1IsZUFBZTt5R0FIL0Isd0JBQXdCLDREQWxCekI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7MkZBRVUsd0JBQXdCO2tCQXBCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7aUJBQ0Y7OzBCQUlxQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnFEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9hcnEtZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtZHQtcHJvbXB0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwLTNcIj5cclxuICAgICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3sgZGF0YS50aXRsZSB9fTwvaDE+XHJcblxyXG4gICAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cclxuICAgICAgICA8cD57eyBkYXRhLm1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwiZlZhbHVlXCIgLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGFycS1idXR0b24gKGNsaWNrKT1cImNhbmNlbERpYWxvZygpXCIgW2xhYmVsXT1cIidHRU5FUklDLkNBTkNFTCcgfCB0cmFuc2xvY29cIj48L2FycS1idXR0b24+XHJcbiAgICAgICAgPGFycS1idXR0b24gKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBjb2xvcj1cInByaW1hcnlcIiBbbGFiZWxdPVwiJ0dFTkVSSUMuQ09OVElOVUUnIHwgdHJhbnNsb2NvXCI+PC9hcnEtYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVByb21wdERpYWxvZ0NvbXBvbmVudCB7XHJcbiAgcHVibGljIGZWYWx1ZSE6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IEFycURpYWxvZ1NlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWxEaWFsb2coKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nU2VydmljZS5jb25maXJtZWQodGhpcy5mVmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=