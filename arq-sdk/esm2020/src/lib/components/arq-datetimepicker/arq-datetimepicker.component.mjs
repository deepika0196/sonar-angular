import { DatePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { isMoment } from 'moment';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@ng-matero/extensions/datetimepicker";
import * as i6 from "../arq-form-control-error/arq-form-control-error.component";
export const MY_FORMATS_TIME = {
    parse: {
        dateInput: 'DD/MM/YYYY',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'DD/MM/YYYY HH:mm'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'DD/MM/YYYY HH:mm',
        popupHeaderDateLabel: 'MMM DD, ddd'
    }
};
export const dateTimeProviders = [
    { provide: MTX_DATETIME_FORMATS, useValue: MY_FORMATS_TIME },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } }
];
export class ArqDateTimepickerComponent extends ArqGenericInputComponent {
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
        this.withHours = false;
        this.type = 'datetime';
        this.mode = 'portrait';
        this.multiYearSelector = false;
        this.startView = 'month';
        this.twelvehour = false;
        this.timeInterval = 1;
        this.touchUi = false;
        this.timeInput = true;
    }
    ngOnInit() {
        this.validateDate();
        let formControl = this.getValue();
        formControl.valueChanges.subscribe((value) => {
            if (value && isMoment(value)) {
                // Por defecto, usa la fecha seleccionada como UTC y le suma +1/+2 al convertir a date.
                // De esta manera forzamos que la fecha seleccionada sea realmente la local.
                //
                // No devuelve bien las fechas configurando MAT_DATE_LOCALE, ni estableciendo el locale
                // de moment, ni DateAdapter en constructor.
                formControl.setValue(new Date(value.year(), value.month(), value.date(), value.hour(), value.minute(), value.second(), value.millisecond()), { emitEvent: false });
                this.ngChanges();
            }
        });
        // Disable funcionality
        if (typeof this.disabled === 'string')
            this.fGroup.controls[this.value].disable();
        else if (typeof this.disabled === 'boolean' && this.disabled)
            this.fGroup.controls[this.value].disable();
    }
    ngSetValue(evt) {
        this.setValue(evt);
        this.ngChanges();
    }
    isDisabled() {
        if (this.fGroup) {
            return this.fGroup.controls[this.value].disabled;
        }
        return false;
    }
    comprobarEntradas() { }
}
ArqDateTimepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerComponent, deps: [{ token: i1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
ArqDateTimepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDateTimepickerComponent, selector: "arq-datetimepicker", inputs: { withHours: "withHours", hint: "hint", disabled: "disabled" }, providers: [dateTimeProviders, DatePipe], usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" *ngIf=\"this.getValue()\" [class]=\"sizeInput\" class=\"type-date pb-0\">\r\n  <mtx-datetimepicker\r\n    #datetimePicker\r\n    [type]=\"type\"\r\n    [mode]=\"mode\"\r\n    [multiYearSelector]=\"multiYearSelector\"\r\n    [startView]=\"startView\"\r\n    [twelvehour]=\"twelvehour\"\r\n    [timeInterval]=\"timeInterval\"\r\n    [touchUi]=\"touchUi\"\r\n    [timeInput]=\"timeInput\"\r\n    [disabled]=\"this.isDisabled()\"\r\n    (blur)=\"validateValue()\">\r\n  </mtx-datetimepicker>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <input [mtxDatetimepicker]=\"datetimePicker\" matInput [formControl]=\"this.getValue()\" />\r\n  <mtx-datetimepicker-toggle [for]=\"datetimePicker\" matSuffix></mtx-datetimepicker-toggle>\r\n</mat-form-field>\r\n", styles: [".mat-mdc-form-field{display:block!important}svg{display:block;width:1em!important;height:1em!important}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i5.MtxDatetimepicker, selector: "mtx-datetimepicker", inputs: ["multiYearSelector", "twelvehour", "startView", "mode", "timeInterval", "preventSameDateTimeSelection", "panelClass", "opened", "color", "startAt", "type", "touchUi", "timeInput", "disabled", "xPosition", "yPosition", "restoreFocus"], outputs: ["selectedChanged", "opened", "closed", "viewChanged"], exportAs: ["mtxDatetimepicker"] }, { kind: "component", type: i5.MtxDatetimepickerToggle, selector: "mtx-datetimepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["mtxDatetimepickerToggle"] }, { kind: "directive", type: i5.MtxDatetimepickerInput, selector: "input[mtxDatetimepicker]", inputs: ["mtxDatetimepicker", "mtxDatetimepickerFilter", "value", "min", "max", "disabled"], outputs: ["dateChange", "dateInput"], exportAs: ["mtxDatetimepickerInput"] }, { kind: "component", type: i6.ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datetimepicker', encapsulation: ViewEncapsulation.None, providers: [dateTimeProviders, DatePipe], template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" *ngIf=\"this.getValue()\" [class]=\"sizeInput\" class=\"type-date pb-0\">\r\n  <mtx-datetimepicker\r\n    #datetimePicker\r\n    [type]=\"type\"\r\n    [mode]=\"mode\"\r\n    [multiYearSelector]=\"multiYearSelector\"\r\n    [startView]=\"startView\"\r\n    [twelvehour]=\"twelvehour\"\r\n    [timeInterval]=\"timeInterval\"\r\n    [touchUi]=\"touchUi\"\r\n    [timeInput]=\"timeInput\"\r\n    [disabled]=\"this.isDisabled()\"\r\n    (blur)=\"validateValue()\">\r\n  </mtx-datetimepicker>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <input [mtxDatetimepicker]=\"datetimePicker\" matInput [formControl]=\"this.getValue()\" />\r\n  <mtx-datetimepicker-toggle [for]=\"datetimePicker\" matSuffix></mtx-datetimepicker-toggle>\r\n</mat-form-field>\r\n", styles: [".mat-mdc-form-field{display:block!important}svg{display:block;width:1em!important;height:1em!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DatePipe }]; }, propDecorators: { withHours: [{
                type: Input
            }], hint: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGV0aW1lcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1kYXRldGltZXBpY2tlci9hcnEtZGF0ZXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRhdGV0aW1lcGlja2VyL2FycS1kYXRldGltZXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFbEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7Ozs7O0FBRXZHLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsWUFBWTtRQUN2QixVQUFVLEVBQUUsTUFBTTtRQUNsQixTQUFTLEVBQUUsTUFBTTtRQUNqQixTQUFTLEVBQUUsT0FBTztRQUNsQixhQUFhLEVBQUUsa0JBQWtCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFlBQVk7UUFDdkIsY0FBYyxFQUFFLFdBQVc7UUFDM0IsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsV0FBVztRQUMvQixVQUFVLEVBQUUsTUFBTTtRQUNsQixTQUFTLEVBQUUsTUFBTTtR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dUhBOUR4QiwwQkFBMEI7MkdBQTFCLDBCQUEwQixxSEFGMUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsaURDMUMxQyw0aUNBdUJBOzJGRHFCYSwwQkFBMEI7a0JBUHRDLFNBQVM7K0JBQ0Usb0JBQW9CLGlCQUdmLGlCQUFpQixDQUFDLElBQUksYUFDMUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUM7K0ZBR3hCLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkFFVSxRQUFRO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7IE1UWF9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSAnQG5nLW1hdGVyby9leHRlbnNpb25zL2NvcmUnO1xyXG5pbXBvcnQgeyBNdHhDYWxlbmRhclZpZXcsIE10eERhdGV0aW1lcGlja2VyTW9kZSwgTXR4RGF0ZXRpbWVwaWNrZXJUeXBlIH0gZnJvbSAnQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0IHsgaXNNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgQXJxR2VuZXJpY0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcnEtZ2VuZXJpYy1pbnB1dC9hcnEtZ2VuZXJpYy1pbnB1dC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFNfVElNRSA9IHtcclxuICBwYXJzZToge1xyXG4gICAgZGF0ZUlucHV0OiAnREQvTU0vWVlZWScsXHJcbiAgICBtb250aElucHV0OiAnTU1NTScsXHJcbiAgICB5ZWFySW5wdXQ6ICdZWVlZJyxcclxuICAgIHRpbWVJbnB1dDogJ0hIOm1tJyxcclxuICAgIGRhdGV0aW1lSW5wdXQ6ICdERC9NTS9ZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiAnREQvTU0vWVlZWScsXHJcbiAgICBtb250aFllYXJMYWJlbDogJ01NTU0gWVlZWScsXHJcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcclxuICAgIG1vbnRoSW5wdXQ6ICdNTU1NJyxcclxuICAgIHllYXJJbnB1dDogJ1lZWVknLFxyXG4gICAgdGltZUlucHV0OiAnSEg6bW0nLFxyXG4gICAgZGF0ZXRpbWVJbnB1dDogJ0REL01NL1lZWVkgSEg6bW0nLFxyXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6ICdNTU0gREQsIGRkZCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZVRpbWVQcm92aWRlcnMgPSBbXHJcbiAgeyBwcm92aWRlOiBNVFhfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFNfVElNRSB9LFxyXG4gIHsgcHJvdmlkZTogTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUywgdXNlVmFsdWU6IHsgc3RyaWN0OiB0cnVlIH0gfSxcclxuICB7IHByb3ZpZGU6IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMsIHVzZVZhbHVlOiB7IHVzZVV0YzogZmFsc2UgfSB9XHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FycS1kYXRldGltZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS1kYXRldGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLWRhdGV0aW1lcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW2RhdGVUaW1lUHJvdmlkZXJzLCBEYXRlUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycURhdGVUaW1lcGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQXJxR2VuZXJpY0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgd2l0aEhvdXJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIGhpbnQhOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogdW5kZWZpbmVkIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHR5cGU6IE10eERhdGV0aW1lcGlja2VyVHlwZSA9ICdkYXRldGltZSc7XHJcbiAgcHVibGljIG1vZGU6IE10eERhdGV0aW1lcGlja2VyTW9kZSA9ICdwb3J0cmFpdCc7XHJcbiAgcHVibGljIG11bHRpWWVhclNlbGVjdG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN0YXJ0VmlldzogTXR4Q2FsZW5kYXJWaWV3ID0gJ21vbnRoJztcclxuICBwdWJsaWMgdHdlbHZlaG91cjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0aW1lSW50ZXJ2YWw6IGFueSA9IDE7XHJcbiAgcHVibGljIHRvdWNoVWk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdGltZUlucHV0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRlUGlwZTogRGF0ZVBpcGUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRGF0ZSgpO1xyXG4gICAgbGV0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgIGZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICYmIGlzTW9tZW50KHZhbHVlKSkge1xyXG4gICAgICAgIC8vIFBvciBkZWZlY3RvLCB1c2EgbGEgZmVjaGEgc2VsZWNjaW9uYWRhIGNvbW8gVVRDIHkgbGUgc3VtYSArMS8rMiBhbCBjb252ZXJ0aXIgYSBkYXRlLlxyXG4gICAgICAgIC8vIERlIGVzdGEgbWFuZXJhIGZvcnphbW9zIHF1ZSBsYSBmZWNoYSBzZWxlY2Npb25hZGEgc2VhIHJlYWxtZW50ZSBsYSBsb2NhbC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIE5vIGRldnVlbHZlIGJpZW4gbGFzIGZlY2hhcyBjb25maWd1cmFuZG8gTUFUX0RBVEVfTE9DQUxFLCBuaSBlc3RhYmxlY2llbmRvIGVsIGxvY2FsZVxyXG4gICAgICAgIC8vIGRlIG1vbWVudCwgbmkgRGF0ZUFkYXB0ZXIgZW4gY29uc3RydWN0b3IuXHJcbiAgICAgICAgZm9ybUNvbnRyb2wuc2V0VmFsdWUoXHJcbiAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgdmFsdWUueWVhcigpLFxyXG4gICAgICAgICAgICB2YWx1ZS5tb250aCgpLFxyXG4gICAgICAgICAgICB2YWx1ZS5kYXRlKCksXHJcbiAgICAgICAgICAgIHZhbHVlLmhvdXIoKSxcclxuICAgICAgICAgICAgdmFsdWUubWludXRlKCksXHJcbiAgICAgICAgICAgIHZhbHVlLnNlY29uZCgpLFxyXG4gICAgICAgICAgICB2YWx1ZS5taWxsaXNlY29uZCgpXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgeyBlbWl0RXZlbnQ6IGZhbHNlIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubmdDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERpc2FibGUgZnVuY2lvbmFsaXR5XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZGlzYWJsZWQgPT09ICdzdHJpbmcnKSB0aGlzLmZHcm91cC5jb250cm9sc1t0aGlzLnZhbHVlXS5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMuZGlzYWJsZWQpIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ1NldFZhbHVlKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKGV2dCk7XHJcbiAgICB0aGlzLm5nQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5mR3JvdXApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLmRpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXByb2JhckVudHJhZGFzKCk6IHZvaWQge31cclxufVxyXG4iLCI8bGFiZWwgKm5nSWY9XCJ0aGlzLmxhYmVsXCJcclxuICA+e3sgdGhpcy5sYWJlbCB9fVxyXG4gIDxzcGFuICpuZ0lmPVwidGhpcy5nZXRWYWxpZGF0aW9ucygpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPiAqIDwvc3Bhbj5cclxuPC9sYWJlbD5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgKm5nSWY9XCJ0aGlzLmdldFZhbHVlKClcIiBbY2xhc3NdPVwic2l6ZUlucHV0XCIgY2xhc3M9XCJ0eXBlLWRhdGUgcGItMFwiPlxyXG4gIDxtdHgtZGF0ZXRpbWVwaWNrZXJcclxuICAgICNkYXRldGltZVBpY2tlclxyXG4gICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgIFttdWx0aVllYXJTZWxlY3Rvcl09XCJtdWx0aVllYXJTZWxlY3RvclwiXHJcbiAgICBbc3RhcnRWaWV3XT1cInN0YXJ0Vmlld1wiXHJcbiAgICBbdHdlbHZlaG91cl09XCJ0d2VsdmVob3VyXCJcclxuICAgIFt0aW1lSW50ZXJ2YWxdPVwidGltZUludGVydmFsXCJcclxuICAgIFt0b3VjaFVpXT1cInRvdWNoVWlcIlxyXG4gICAgW3RpbWVJbnB1dF09XCJ0aW1lSW5wdXRcIlxyXG4gICAgW2Rpc2FibGVkXT1cInRoaXMuaXNEaXNhYmxlZCgpXCJcclxuICAgIChibHVyKT1cInZhbGlkYXRlVmFsdWUoKVwiPlxyXG4gIDwvbXR4LWRhdGV0aW1lcGlja2VyPlxyXG4gIDxtYXQtZXJyb3IgYXJxLWZvcm0tY29udHJvbC1lcnJvciBbbGFiZWxDb250cm9sXT1cInRoaXMubGFiZWxcIiBbZm9ybUNvbnRyb2xTaWJsaW5nXT1cInRoaXMuZ2V0VmFsdWUoKVwiPjwvbWF0LWVycm9yPlxyXG4gIDxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57eyB0aGlzLmhpbnQgfX08L21hdC1oaW50PlxyXG4gIDxpbnB1dCBbbXR4RGF0ZXRpbWVwaWNrZXJdPVwiZGF0ZXRpbWVQaWNrZXJcIiBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwidGhpcy5nZXRWYWx1ZSgpXCIgLz5cclxuICA8bXR4LWRhdGV0aW1lcGlja2VyLXRvZ2dsZSBbZm9yXT1cImRhdGV0aW1lUGlja2VyXCIgbWF0U3VmZml4PjwvbXR4LWRhdGV0aW1lcGlja2VyLXRvZ2dsZT5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19