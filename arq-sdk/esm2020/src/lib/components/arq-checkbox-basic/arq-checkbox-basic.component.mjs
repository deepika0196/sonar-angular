import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../arq-form-control-error/arq-form-control-error.component";
export class ArqCheckboxBasicComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.color = 'primary';
        this.checkbox_down = false;
        this.checkbox_sn = false;
    }
    ngOnChanges(changes) {
        if (changes) {
            this.verifyCheckbox();
        }
    }
    ngOnInit() {
        this.verifyCheckbox();
    }
    verifyCheckbox() {
        if (this.getValue() && this.checkbox_sn) {
            this.setValueCheckbox();
        }
    }
    comprobarEntradas() { }
}
ArqCheckboxBasicComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqCheckboxBasicComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqCheckboxBasicComponent, selector: "arq-checkbox-basic", inputs: { color: "color", checked: "checked", disabled: "disabled", sectionClass: "sectionClass", spanClass: "spanClass", checkbox_down: "checkbox_down", checkbox_sn: "checkbox_sn" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<section class=\"example-section\" *ngIf=\"this.getValue()\">\r\n  <mat-checkbox\r\n    [color]=\"color\"\r\n    [formControl]=\"this.getValue()\"\r\n    [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n    (change)=\"checkbox_sn ? this.ngSetChanges() : this.ngChanges()\">\r\n    {{ label }}\r\n  </mat-checkbox>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"], dependencies: [{ kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-checkbox-basic', encapsulation: ViewEncapsulation.None, template: "<section class=\"example-section\" *ngIf=\"this.getValue()\">\r\n  <mat-checkbox\r\n    [color]=\"color\"\r\n    [formControl]=\"this.getValue()\"\r\n    [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n    (change)=\"checkbox_sn ? this.ngSetChanges() : this.ngChanges()\">\r\n    {{ label }}\r\n  </mat-checkbox>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], sectionClass: [{
                type: Input
            }], spanClass: [{
                type: Input
            }], checkbox_down: [{
                type: Input
            }], checkbox_sn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWNoZWNrYm94LWJhc2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1jaGVja2JveC1iYXNpYy9hcnEtY2hlY2tib3gtYmFzaWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWNoZWNrYm94LWJhc2ljL2FycS1jaGVja2JveC1iYXNpYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7OztBQVF2RyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsd0JBQXdCO0lBb0JyRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBbkJWLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBY3ZCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBSXRDLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRVEsUUFBUTtRQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLEtBQVUsQ0FBQzs7c0hBeENqQix5QkFBeUI7MEdBQXpCLHlCQUF5Qiw4UkNWdEMsNGVBY0E7MkZESmEseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLG9CQUFvQixpQkFHZixpQkFBaUIsQ0FBQyxJQUFJOzBFQUlyQyxLQUFLO3NCQURKLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUdHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IEFycUdlbmVyaWNJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXJxLWdlbmVyaWMtaW5wdXQvYXJxLWdlbmVyaWMtaW5wdXQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLWNoZWNrYm94LWJhc2ljJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXJxLWNoZWNrYm94LWJhc2ljLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcnEtY2hlY2tib3gtYmFzaWMuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUNoZWNrYm94QmFzaWNDb21wb25lbnQgZXh0ZW5kcyBBcnFHZW5lcmljSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuXHJcbiAgQElucHV0KClcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2VjdGlvbkNsYXNzPzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNwYW5DbGFzcz86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgY2hlY2tib3hfZG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBjaGVja2JveF9zbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy52ZXJpZnlDaGVja2JveCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZlcmlmeUNoZWNrYm94KCk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlDaGVja2JveCgpIHtcclxuICAgIGlmICh0aGlzLmdldFZhbHVlKCkgJiYgdGhpcy5jaGVja2JveF9zbikge1xyXG4gICAgICB0aGlzLnNldFZhbHVlQ2hlY2tib3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXByb2JhckVudHJhZGFzKCk6IHZvaWQge31cclxufVxyXG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiICpuZ0lmPVwidGhpcy5nZXRWYWx1ZSgpXCI+XHJcbiAgPG1hdC1jaGVja2JveFxyXG4gICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLmdldFZhbHVlKClcIlxyXG4gICAgW25nQ2xhc3NdPVwieyBjaGVja2JveF9kb3duOiBjaGVja2JveF9kb3duID09IHRydWUgfVwiXHJcbiAgICAoY2hhbmdlKT1cImNoZWNrYm94X3NuID8gdGhpcy5uZ1NldENoYW5nZXMoKSA6IHRoaXMubmdDaGFuZ2VzKClcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgPC9tYXQtY2hlY2tib3g+XHJcbiAgPG1hdC1lcnJvclxyXG4gICAgYXJxLWZvcm0tY29udHJvbC1lcnJvclxyXG4gICAgW2xhYmVsQ29udHJvbF09XCJ0aGlzLmxhYmVsXCJcclxuICAgIFtmb3JtQ29udHJvbFNpYmxpbmddPVwidGhpcy5nZXRWYWx1ZSgpXCJcclxuICA+PC9tYXQtZXJyb3I+XHJcbjwvc2VjdGlvbj5cclxuIl19