import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
export class ArqGenericInputComponent {
    //#endregion
    //#region  Constructor
    constructor() {
        this.LANG_ES = 'es';
        //#region Variables
        this.layout = 'h';
        this.columns = 12;
        this.value = '';
        this.required = false;
        this.readonly = false;
        this.placeholder = '';
        this.sizeInput = 'small';
        this.iconPrefix = false;
        this.iconSuffix = false;
        this.lang = this.LANG_ES;
        this.showValue = false;
        this.labelClass = '';
        this.inputClass = 'form-group';
        this.changeEvent = new EventEmitter();
    }
    //#endregion
    //#region  Angular lifecycle
    ngOnInit() {
        this.initcialitzarForm();
        this.comprobarEntradas();
    }
    //#region Initcialitzacio
    initcialitzarForm() { }
    vaciaInput() {
        this.fGroup?.controls[this.value].setValue('');
    }
    ngChanges(evt, elem) {
        this.changeEvent.emit(this.fGroup?.controls[this.value].value);
    }
    validateValue() {
        this.fGroup?.controls[this.value].updateValueAndValidity();
        this.fGroup?.controls[this.value].clearAsyncValidators();
    }
    ngSetChanges() {
        if (this.fGroup?.controls[this.value]) {
            if (this.fGroup?.controls[this.value].value == true)
                this.fGroup?.controls[this.value].setValue('S');
            if (this.fGroup?.controls[this.value].value == false)
                this.fGroup?.controls[this.value].setValue('N');
        }
        this.changeEvent.emit(this.fGroup?.controls[this.value].value);
    }
    getValue() {
        if (!this.fGroup?.controls[this.value]) {
            console.error(`ERROR: El FormControl ${this.value} no existe!!`);
        }
        return this.fGroup?.controls[this.value];
    }
    setValueCheckbox() {
        if (this.fGroup?.controls[this.value]) {
            if (this.fGroup?.controls[this.value].value == 'S')
                this.fGroup?.controls[this.value].setValue(true);
            if (this.fGroup?.controls[this.value].value == 'N')
                this.fGroup?.controls[this.value].setValue(false);
        }
    }
    setValue(value) {
        if (this.fGroup?.controls[this.value]) {
            this.fGroup?.controls[this.value].setValue(value);
        }
    }
    setValueDate() {
        this.fGroup.controls[this.value].valueChanges.subscribe(x => {
            this.validateDate();
        });
    }
    validateDate() {
        const value = this.fGroup?.controls[this.value].value;
        if (this.fGroup?.controls[this.value].value) {
            if (typeof value == 'number') {
                this.fGroup.controls[this.value].setValue(new Date(value));
            }
            else if (typeof value == 'string') {
                const regEx = /^\d{4}-\d{2}-\d{2}$/;
                if (value?.toString()?.match(regEx) == null) {
                    this.fGroup.controls[this.value].setValue(new Date(Number(value)));
                }
            }
        }
    }
    setFG(control) {
        this.fGroup.addControl(control, new FormControl(''));
    }
    getValidations() {
        if (!this.fGroup?.controls[this.value]) {
            console.error(`ERROR: El FormControl ${this.value} no existe!!`);
        }
        return this.fGroup.controls[this.value].hasValidator(Validators.required);
    }
    onFocusOutEvent(event) {
        //console.log(event.target.value);
        this.getValue()?.markAsDirty();
    }
}
ArqGenericInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqGenericInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqGenericInputComponent, selector: "ng-component", inputs: { layout: "layout", label: "label", columns: "columns", labelColumns: "labelColumns", value: "value", required: "required", readonly: "readonly", placeholder: "placeholder", sizeInput: "sizeInput", hideDelay: "hideDelay", message: "message", positionTooltip: "positionTooltip", msgError: "msgError", prefix: "prefix", suffix: "suffix", iconPrefix: "iconPrefix", iconSuffix: "iconSuffix", fGroup: "fGroup", lang: "lang", showValue: "showValue" }, outputs: { changeEvent: "changeEvent" }, ngImport: i0, template: '', isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { layout: [{
                type: Input
            }], label: [{
                type: Input
            }], columns: [{
                type: Input
            }], labelColumns: [{
                type: Input
            }], value: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], sizeInput: [{
                type: Input
            }], hideDelay: [{
                type: Input
            }], message: [{
                type: Input
            }], positionTooltip: [{
                type: Input
            }], msgError: [{
                type: Input
            }], prefix: [{
                type: Input
            }], suffix: [{
                type: Input
            }], iconPrefix: [{
                type: Input
            }], iconSuffix: [{
                type: Input
            }], fGroup: [{
                type: Input
            }], lang: [{
                type: Input
            }], showValue: [{
                type: Input
            }], changeEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWdlbmVyaWMtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvY29yZS9hcnEtZ2VuZXJpYy1pbnB1dC9hcnEtZ2VuZXJpYy1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRcEUsTUFBTSxPQUFnQix3QkFBd0I7SUEwRTVDLFlBQVk7SUFFWixzQkFBc0I7SUFDdEI7UUE1RWdCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFL0IsbUJBQW1CO1FBRVosV0FBTSxHQUFHLEdBQUcsQ0FBQztRQU1iLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFNYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdqQixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBc0I1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNbkMsU0FBSSxHQUF1QixJQUFJLENBQUMsT0FBTyxDQUFDO1FBR3hDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFRcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBSy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM3QyxDQUFDO0lBQ0QsWUFBWTtJQUVaLDRCQUE0QjtJQUNyQixRQUFRO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFB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aEIsS0FBSztnQkFJQyxVQUFVO3NCQURoQixLQUFLO2dCQUlDLE1BQU07c0JBRFosS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlJLFdBQVc7c0JBRHBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUb29sdGlwUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgcGFpcndpc2UsIHN0YXJ0V2l0aCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXJxR2VuZXJpY0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgTEFOR19FUyA9ICdlcyc7XHJcblxyXG4gIC8vI3JlZ2lvbiBWYXJpYWJsZXNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYXlvdXQgPSAnaCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNvbHVtbnMgPSAxMjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGFiZWxDb2x1bW5zOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGxhY2Vob2xkZXIgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2l6ZUlucHV0OiBzdHJpbmcgPSAnc21hbGwnO1xyXG5cclxuICAvL3Byb3BpZWRhZGVzIFRvb2x0aXBcclxuICBASW5wdXQoKVxyXG4gIGhpZGVEZWxheSE6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBtZXNzYWdlITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBvc2l0aW9uVG9vbHRpcCE6IFRvb2x0aXBQb3NpdGlvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBtc2dFcnJvciE6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJlZml4ITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdWZmaXghOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGljb25QcmVmaXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWNvblN1ZmZpeDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmR3JvdXAhOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGFuZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5MQU5HX0VTO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNob3dWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwcm90ZWN0ZWQgY2hhbmdlRXZlbnQhOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBpZGlvbWE6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGxhYmVsQ2xhc3MgPSAnJztcclxuXHJcbiAgcHVibGljIGlucHV0Q2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiAgQ29uc3RydWN0b3JcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gIEFuZ3VsYXIgbGlmZWN5Y2xlXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0Y2lhbGl0emFyRm9ybSgpO1xyXG4gICAgdGhpcy5jb21wcm9iYXJFbnRyYWRhcygpO1xyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbXByb2JhckVudHJhZGFzKCk6IGFueTtcclxuXHJcbiAgLy8jcmVnaW9uIEluaXRjaWFsaXR6YWNpb1xyXG4gIHByb3RlY3RlZCBpbml0Y2lhbGl0emFyRm9ybSgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB2YWNpYUlucHV0KCkge1xyXG4gICAgdGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMudmFsdWVdLnNldFZhbHVlKCcnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0NoYW5nZXMoZXZ0PzogYW55LCBlbGVtPzogYW55KSB7XHJcbiAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQodGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMudmFsdWVdLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMudmFsdWVdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS5jbGVhckFzeW5jVmFsaWRhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nU2V0Q2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0pIHtcclxuICAgICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS52YWx1ZSA9PSB0cnVlKSB0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0uc2V0VmFsdWUoJ1MnKTtcclxuICAgICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS52YWx1ZSA9PSBmYWxzZSkgdGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMudmFsdWVdLnNldFZhbHVlKCdOJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQodGhpcy5mR3JvdXA/LmNvbnRyb2xzW3RoaXMudmFsdWVdLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBGb3JtQ29udHJvbCB7XHJcbiAgICBpZiAoIXRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFUlJPUjogRWwgRm9ybUNvbnRyb2wgJHt0aGlzLnZhbHVlfSBubyBleGlzdGUhIWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0gYXMgRm9ybUNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0VmFsdWVDaGVja2JveCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0pIHtcclxuICAgICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS52YWx1ZSA9PSAnUycpIHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS5zZXRWYWx1ZSh0cnVlKTtcclxuICAgICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS52YWx1ZSA9PSAnTicpIHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS5zZXRWYWx1ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXSkge1xyXG4gICAgICB0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldFZhbHVlRGF0ZSgpIHtcclxuICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVEYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZURhdGUoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXS52YWx1ZTtcclxuICAgIGlmICh0aGlzLmZHcm91cD8uY29udHJvbHNbdGhpcy52YWx1ZV0udmFsdWUpIHtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLnNldFZhbHVlKG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgcmVnRXggPSAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC87XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZT8udG9TdHJpbmcoKT8ubWF0Y2gocmVnRXgpID09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLnNldFZhbHVlKG5ldyBEYXRlKE51bWJlcih2YWx1ZSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGRyhjb250cm9sOiBhbnkpIHtcclxuICAgIHRoaXMuZkdyb3VwLmFkZENvbnRyb2woY29udHJvbCwgbmV3IEZvcm1Db250cm9sKCcnKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmFsaWRhdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZkdyb3VwPy5jb250cm9sc1t0aGlzLnZhbHVlXSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFUlJPUjogRWwgRm9ybUNvbnRyb2wgJHt0aGlzLnZhbHVlfSBubyBleGlzdGUhIWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZkdyb3VwLmNvbnRyb2xzW3RoaXMudmFsdWVdLmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZvY3VzT3V0RXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgdGhpcy5nZXRWYWx1ZSgpPy5tYXJrQXNEaXJ0eSgpO1xyXG4gIH1cclxufVxyXG4iXX0=