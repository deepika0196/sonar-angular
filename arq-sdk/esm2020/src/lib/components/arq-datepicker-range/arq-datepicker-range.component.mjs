import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ArqDatepickerComponent, dateProviders } from '../arq-datepicker/arq-datepicker.component';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "../arq-form-control-error/arq-form-control-error.component";
export class ArqDatepickerRangeComponent extends ArqDatepickerComponent {
    constructor(datePipe) {
        super(datePipe);
        this.datePipe = datePipe;
        this.visibleRange = true;
        this.rangeLabel = '';
        this.selectionChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes)
            this.setValueDate();
    }
    ngOnInit() {
        this.addControEnd();
        this.validateDate();
        // Disable funcionality
        if (typeof this.disabled === 'string') {
            this.fGroup.controls[this.value].disable();
            this.fGroup.controls[this.fechaFin].disable();
        }
        else if (typeof this.disabled === 'boolean' && this.disabled) {
            this.fGroup.controls[this.value].disable();
            this.fGroup.controls[this.fechaFin].disable();
        }
    }
    addControEnd() {
        this.setFG(this.fechaFin);
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        this.selectionChange.emit({
            start: dateRangeStart.value,
            end: dateRangeEnd.value
        });
    }
    getFechaFinCntr() {
        if (this.fGroup?.controls[this.fechaFin].value) {
            this.fGroup?.controls[this.fechaFin].setValue(new Date(this.fGroup?.controls[this.fechaFin].value));
        }
        return this.fGroup?.controls[this.fechaFin];
    }
}
ArqDatepickerRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeComponent, deps: [{ token: i1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
ArqDatepickerRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatepickerRangeComponent, selector: "arq-datepicker-range", inputs: { labelErrorStart: "labelErrorStart", labelErrorEnd: "labelErrorEnd", visibleRange: "visibleRange", rangeLabel: "rangeLabel", placeholderStart: "placeholderStart", placeholderEnd: "placeholderEnd", fechaFin: "fechaFin" }, outputs: { selectionChange: "selectionChange" }, providers: [dateProviders, DatePipe], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input\r\n      matStartDate\r\n      [formControl]=\"this.getValue()\"\r\n      [placeholder]=\"placeholderStart\"\r\n      #dateRangeStart\r\n      #tooltip=\"matTooltip\"\r\n      [matTooltip]=\"this.message\"\r\n      [matTooltipPosition]=\"this.positionTooltip\"\r\n      [matTooltipHideDelay]=\"this.hideDelay\" />\r\n    <input\r\n      matEndDate\r\n      [formControl]=\"this.getFechaFinCntr()\"\r\n      [placeholder]=\"placeholderEnd\"\r\n      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\r\n      (blur)=\"validateValue()\"\r\n      #dateRangeEnd />\r\n  </mat-date-range-input>\r\n\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }} - {{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker [disabled]=\"this.isDisabled()\"></mat-date-range-picker>\r\n\r\n  <!-- TODO este componente esta todo comentado por lo que doy por echo que esta a medias,\r\n    dejo aqui la manera en la que se estaban controlando los errores hasta ahora por si se necesitase\r\n    probar\r\n  <mat-error *ngIf=\"this.getValue()?.hasError('matStartDateInvalid')\">{{ this.labelErrorStart }}</mat-error>\r\n  <mat-error *ngIf=\"this.fechaFinCntr?.hasError('matEndDateInvalid')\">{{ this.labelErrorEnd }}</mat-error>\r\n  -->\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n<p *ngIf=\"this.visibleRange && this.getValue()\">\r\n  {{ this.rangeLabel }}: {{ this.getValue().value | date : 'dd/MM/yyyy' }} -\r\n  {{ this.fechaFinCntr.value | date : 'dd/MM/yyyy' }}\r\n</p>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i6.ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datepicker-range', encapsulation: ViewEncapsulation.None, providers: [dateProviders, DatePipe], template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input\r\n      matStartDate\r\n      [formControl]=\"this.getValue()\"\r\n      [placeholder]=\"placeholderStart\"\r\n      #dateRangeStart\r\n      #tooltip=\"matTooltip\"\r\n      [matTooltip]=\"this.message\"\r\n      [matTooltipPosition]=\"this.positionTooltip\"\r\n      [matTooltipHideDelay]=\"this.hideDelay\" />\r\n    <input\r\n      matEndDate\r\n      [formControl]=\"this.getFechaFinCntr()\"\r\n      [placeholder]=\"placeholderEnd\"\r\n      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\r\n      (blur)=\"validateValue()\"\r\n      #dateRangeEnd />\r\n  </mat-date-range-input>\r\n\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }} - {{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker [disabled]=\"this.isDisabled()\"></mat-date-range-picker>\r\n\r\n  <!-- TODO este componente esta todo comentado por lo que doy por echo que esta a medias,\r\n    dejo aqui la manera en la que se estaban controlando los errores hasta ahora por si se necesitase\r\n    probar\r\n  <mat-error *ngIf=\"this.getValue()?.hasError('matStartDateInvalid')\">{{ this.labelErrorStart }}</mat-error>\r\n  <mat-error *ngIf=\"this.fechaFinCntr?.hasError('matEndDateInvalid')\">{{ this.labelErrorEnd }}</mat-error>\r\n  -->\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n<p *ngIf=\"this.visibleRange && this.getValue()\">\r\n  {{ this.rangeLabel }}: {{ this.getValue().value | date : 'dd/MM/yyyy' }} -\r\n  {{ this.fechaFinCntr.value | date : 'dd/MM/yyyy' }}\r\n</p>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DatePipe }]; }, propDecorators: { labelErrorStart: [{
                type: Input
            }], labelErrorEnd: [{
                type: Input
            }], visibleRange: [{
                type: Input
            }], rangeLabel: [{
                type: Input
            }], placeholderStart: [{
                type: Input
            }], placeholderEnd: [{
                type: Input
            }], fechaFin: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRhdGVwaWNrZXItcmFuZ2UvYXJxLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRhdGVwaWNrZXItcmFuZ2UvYXJxLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7QUFTM0MsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHNCQUFzQjtJQW1CckUsWUFBbUMsUUFBa0I7UUFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRGlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFkckMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQVF2QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNdEQsQ0FBQztJQUVlLFdBQVcsQ0FBQyxPQUFzQjtRQUNoRCxJQUFJLE9BQU87WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVlLFFBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQix1QkFBdUI7UUFDdkIsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0M7YUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxjQUFnQyxFQUFFLFlBQThCO1FBQ3JGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSztZQUMzQixHQUFHLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLGVBQWU7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckc7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQWdCLENBQUM7SUFDN0QsQ0FBQzs7d0hBekRVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLHNVQUYzQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsc0VDbkJ0QyxxOERBd0NBOzJGRG5CYSwyQkFBMkI7a0JBUHZDLFNBQVM7K0JBQ0Usc0JBQXNCLGlCQUdqQixpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzsrRkFHcEIsZUFBZTtzQkFBOUIsS0FBSztnQkFFVSxhQUFhO3NCQUE1QixLQUFLO2dCQUVVLFlBQVk7c0JBQTNCLEtBQUs7Z0JBRVUsVUFBVTtzQkFBekIsS0FBSztnQkFFVSxnQkFBZ0I7c0JBQS9CLEtBQUs7Z0JBRVUsY0FBYztzQkFBN0IsS0FBSztnQkFFVSxRQUFRO3NCQUF2QixLQUFLO2dCQUVXLGVBQWU7c0JBQS9CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXJxRGF0ZXBpY2tlckNvbXBvbmVudCwgZGF0ZVByb3ZpZGVycyB9IGZyb20gJy4uL2FycS1kYXRlcGlja2VyL2FycS1kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLWRhdGVwaWNrZXItcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbZGF0ZVByb3ZpZGVycywgRGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEYXRlcGlja2VyUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBBcnFEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbEVycm9yU3RhcnQhOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbEVycm9yRW5kITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmlzaWJsZVJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHJhbmdlTGFiZWw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXJTdGFydCE6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyRW5kITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZmVjaGFGaW4hOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgZmVjaGFGaW5DbnRyITogRm9ybUNvbnRyb2w7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgb3ZlcnJpZGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7XHJcbiAgICBzdXBlcihkYXRlUGlwZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMpIHRoaXMuc2V0VmFsdWVEYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZENvbnRyb0VuZCgpO1xyXG4gICAgdGhpcy52YWxpZGF0ZURhdGUoKTtcclxuXHJcbiAgICAvLyBEaXNhYmxlIGZ1bmNpb25hbGl0eVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRpc2FibGVkID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmZHcm91cC5jb250cm9sc1t0aGlzLnZhbHVlXS5kaXNhYmxlKCk7XHJcbiAgICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMuZmVjaGFGaW5dLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuZGlzYWJsZWQgPT09ICdib29sZWFuJyAmJiB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLmRpc2FibGUoKTtcclxuICAgICAgdGhpcy5mR3JvdXAuY29udHJvbHNbdGhpcy5mZWNoYUZpbl0uZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENvbnRyb0VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RkcodGhpcy5mZWNoYUZpbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGF0ZVJhbmdlQ2hhbmdlKGRhdGVSYW5nZVN0YXJ0OiBIVE1MSW5wdXRFbGVtZW50LCBkYXRlUmFuZ2VFbmQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICBzdGFydDogZGF0ZVJhbmdlU3RhcnQudmFsdWUsXHJcbiAgICAgIGVuZDogZGF0ZVJhbmdlRW5kLnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRGZWNoYUZpbkNudHIoKTogRm9ybUNvbnRyb2wge1xyXG4gICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLmZlY2hhRmluXS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy5mZWNoYUZpbl0uc2V0VmFsdWUobmV3IERhdGUodGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMuZmVjaGFGaW5dLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMuZmVjaGFGaW5dIGFzIEZvcm1Db250cm9sO1xyXG4gIH1cclxufVxyXG4iLCI8bGFiZWwgKm5nSWY9XCJ0aGlzLmxhYmVsXCJcclxuICA+e3sgdGhpcy5sYWJlbCB9fVxyXG4gIDxzcGFuICpuZ0lmPVwidGhpcy5nZXRWYWxpZGF0aW9ucygpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPiAqIDwvc3Bhbj5cclxuPC9sYWJlbD5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY2xhc3M9XCJmdWxsLXdpZHRoIHR5cGUtZGF0ZSBwYi0wXCIgW2NsYXNzXT1cInNpemVJbnB1dFwiICpuZ0lmPVwidGhpcy5nZXRWYWx1ZSgpXCI+XHJcbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBtYXRTdGFydERhdGVcclxuICAgICAgW2Zvcm1Db250cm9sXT1cInRoaXMuZ2V0VmFsdWUoKVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclN0YXJ0XCJcclxuICAgICAgI2RhdGVSYW5nZVN0YXJ0XHJcbiAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXHJcbiAgICAgIFttYXRUb29sdGlwXT1cInRoaXMubWVzc2FnZVwiXHJcbiAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwidGhpcy5wb3NpdGlvblRvb2x0aXBcIlxyXG4gICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCJ0aGlzLmhpZGVEZWxheVwiIC8+XHJcbiAgICA8aW5wdXRcclxuICAgICAgbWF0RW5kRGF0ZVxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwidGhpcy5nZXRGZWNoYUZpbkNudHIoKVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlckVuZFwiXHJcbiAgICAgIChkYXRlQ2hhbmdlKT1cImRhdGVSYW5nZUNoYW5nZShkYXRlUmFuZ2VTdGFydCwgZGF0ZVJhbmdlRW5kKVwiXHJcbiAgICAgIChibHVyKT1cInZhbGlkYXRlVmFsdWUoKVwiXHJcbiAgICAgICNkYXRlUmFuZ2VFbmQgLz5cclxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxyXG5cclxuICA8bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3sgdGhpcy5oaW50IH19IC0ge3sgdGhpcy5oaW50IH19PC9tYXQtaGludD5cclxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlciBbZGlzYWJsZWRdPVwidGhpcy5pc0Rpc2FibGVkKClcIj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cclxuXHJcbiAgPCEtLSBUT0RPIGVzdGUgY29tcG9uZW50ZSBlc3RhIHRvZG8gY29tZW50YWRvIHBvciBsbyBxdWUgZG95IHBvciBlY2hvIHF1ZSBlc3RhIGEgbWVkaWFzLFxyXG4gICAgZGVqbyBhcXVpIGxhIG1hbmVyYSBlbiBsYSBxdWUgc2UgZXN0YWJhbiBjb250cm9sYW5kbyBsb3MgZXJyb3JlcyBoYXN0YSBhaG9yYSBwb3Igc2kgc2UgbmVjZXNpdGFzZVxyXG4gICAgcHJvYmFyXHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cInRoaXMuZ2V0VmFsdWUoKT8uaGFzRXJyb3IoJ21hdFN0YXJ0RGF0ZUludmFsaWQnKVwiPnt7IHRoaXMubGFiZWxFcnJvclN0YXJ0IH19PC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cInRoaXMuZmVjaGFGaW5DbnRyPy5oYXNFcnJvcignbWF0RW5kRGF0ZUludmFsaWQnKVwiPnt7IHRoaXMubGFiZWxFcnJvckVuZCB9fTwvbWF0LWVycm9yPlxyXG4gIC0tPlxyXG4gIDxtYXQtZXJyb3IgYXJxLWZvcm0tY29udHJvbC1lcnJvciBbbGFiZWxDb250cm9sXT1cInRoaXMubGFiZWxcIiBbZm9ybUNvbnRyb2xTaWJsaW5nXT1cInRoaXMuZ2V0VmFsdWUoKVwiPjwvbWF0LWVycm9yPlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48cCAqbmdJZj1cInRoaXMudmlzaWJsZVJhbmdlICYmIHRoaXMuZ2V0VmFsdWUoKVwiPlxyXG4gIHt7IHRoaXMucmFuZ2VMYWJlbCB9fToge3sgdGhpcy5nZXRWYWx1ZSgpLnZhbHVlIHwgZGF0ZSA6ICdkZC9NTS95eXl5JyB9fSAtXHJcbiAge3sgdGhpcy5mZWNoYUZpbkNudHIudmFsdWUgfCBkYXRlIDogJ2RkL01NL3l5eXknIH19XHJcbjwvcD5cclxuIl19