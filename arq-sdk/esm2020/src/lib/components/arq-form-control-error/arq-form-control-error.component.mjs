import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngneat/transloco";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tooltip";
export const errorMapMessagesDefault = new Map([
    ['required', 'arq.form-control-error.default-error-message.required'],
    ['readOnly', 'arq.form-control-error.default-error-message.readOnly'],
    ['minlength', 'arq.form-control-error.default-error-message.minlength'],
    ['maxlength', 'arq.form-control-error.default-error-message.maxlength'],
    ['pattern', 'arq.form-control-error.default-error-message.pattern'],
    ['min', 'arq.form-control-error.default-error-message.min'],
    ['max', 'arq.form-control-error.default-error-message.max'],
    ['format', 'arq.form-control-error.default-error-message.format'],
    ['matDatepickerParse', 'arq.form-control-error.default-error-message.matDatepickerParse'],
    ['matStartDateInvalid', 'arq.form-control-error.default-error-message.matStartDateInvalid'],
    ['mtxDatetimepickerParse', 'arq.form-control-error.default-error-message.mtxDatetimepickerParse']
]);
export class ArqFormControlErrorComponent {
    constructor(_translocoService) {
        this._translocoService = _translocoService;
        this.labelControl = '';
        this.errorMapMessages = errorMapMessagesDefault;
        this._errorMessage = '';
        this.updateErrors = (state) => {
            if (state === 'INVALID') {
                this._errorMessage = '';
                // recuperamos el mapa de errores
                const controlErrors = this.formControlSibling.errors;
                Object.keys(controlErrors).forEach(keyError => {
                    let params = {
                        labelControl: this.labelControl
                    };
                    switch (keyError) {
                        case 'min':
                            params = {
                                ...params,
                                min: controlErrors[keyError].min
                            };
                            this.concatLabel(keyError, params);
                            break;
                        case 'max':
                            params = {
                                ...params,
                                max: controlErrors[keyError].max
                            };
                            this.concatLabel(keyError, params);
                            break;
                        case 'minlength':
                        case 'maxlength':
                            params = {
                                ...params,
                                length: controlErrors[keyError].requiredLength
                            };
                            this.concatLabel(keyError, params);
                            break;
                        case 'readOnly':
                        case 'format':
                        case 'pattern':
                        case 'required':
                            this.concatLabel(keyError, params);
                            break;
                        case 'matDatepickerParse':
                        case 'matStartDateInvalid':
                        case 'mtxDatetimepickerParse':
                            params = {
                                ...params,
                                format: controlErrors[keyError]
                            };
                            this.concatLabel(keyError, params);
                            break;
                        default:
                            this._errorMessage += this.getCustomLabel(controlErrors[keyError]);
                            break;
                    }
                });
            }
        };
    }
    // hacemos todo esto despues del init cuando existan los elementos en el DOM
    ngAfterViewInit() {
        this.formControlSibling.statusChanges.subscribe(this.updateErrors);
    }
    getCustomLabel(keyLabel) {
        return this._translocoService.translate(keyLabel) + ' ';
    }
    concatLabel(keyError, params = {}) {
        const valueError = this.errorMapMessages.get(keyError);
        this._errorMessage += this._translocoService.translate(valueError, params) + ' ';
    }
    get errorMessage() {
        return this._errorMessage;
    }
}
ArqFormControlErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorComponent, deps: [{ token: i1.TranslocoService }], target: i0.ɵɵFactoryTarget.Component });
ArqFormControlErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: { labelControl: "labelControl", errorMapMessages: "errorMapMessages", formControlSibling: "formControlSibling" }, ngImport: i0, template: "<span>\r\n  <span\r\n    *ngIf=\"errorMessage\"\r\n    [matTooltip]=\"errorMessage\">\r\n    {{ errorMessage }}\r\n  </span>\r\n</span>\r\n\r\n", styles: ["span{width:auto;max-width:95%}span span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '[arq-form-control-error]', template: "<span>\r\n  <span\r\n    *ngIf=\"errorMessage\"\r\n    [matTooltip]=\"errorMessage\">\r\n    {{ errorMessage }}\r\n  </span>\r\n</span>\r\n\r\n", styles: ["span{width:auto;max-width:95%}span span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TranslocoService }]; }, propDecorators: { labelControl: [{
                type: Input
            }], errorMapMessages: [{
                type: Input
            }], formControlSibling: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWZvcm0tY29udHJvbC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtZm9ybS1jb250cm9sLWVycm9yL2FycS1mb3JtLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWZvcm0tY29udHJvbC1lcnJvci9hcnEtZm9ybS1jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFJaEUsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQXdCLElBQUksR0FBRyxDQUFDO0lBQ2xFLENBQUMsVUFBVSxFQUFFLHVEQUF1RCxDQUFDO0lBQ3JFLENBQUMsVUFBVSxFQUFFLHVEQUF1RCxDQUFDO0lBQ3JFLENBQUMsV0FBVyxFQUFFLHdEQUF3RCxDQUFDO0lBQ3ZFLENBQUMsV0FBVyxFQUFFLHdEQUF3RCxDQUFDO0lBQ3ZFLENBQUMsU0FBUyxFQUFFLHNEQUFzRCxDQUFDO0lBQ25FLENBQUMsS0FBSyxFQUFFLGtEQUFrRCxDQUFDO0lBQzNELENBQUMsS0FBSyxFQUFFLGtEQUFrRCxDQUFDO0lBQzNELENBQUMsUUFBUSxFQUFFLHFEQUFxRCxDQUFDO0lBQ2pFLENBQUMsb0JBQW9CLEVBQUUsaUVBQWlFLENBQUM7SUFDekYsQ0FBQyxxQkFBcUIsRUFBRSxrRUFBa0UsQ0FBQztJQUMzRixDQUFDLHdCQUF3QixFQUFFLHFFQUFxRSxDQUFDO0NBQ2xHLENBQUMsQ0FBQztBQU9ILE1BQU0sT0FBTyw0QkFBNEI7SUFZdkMsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFWaEQsaUJB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QUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbkYsQ0FBQztJQUVELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7eUhBdkZVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLDBMQ3ZCekMsaUpBUUE7MkZEZWEsNEJBQTRCO2tCQUx4QyxTQUFTOytCQUNFLDBCQUEwQjt1R0FNN0IsWUFBWTtzQkFEbEIsS0FBSztnQkFJQyxnQkFBZ0I7c0JBRHRCLEtBQUs7Z0JBTUMsa0JBQWtCO3NCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xTdGF0dXMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRyYW5zbG9jb1NlcnZpY2UgfSBmcm9tICdAbmduZWF0L3RyYW5zbG9jbyc7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNYXBNZXNzYWdlc0RlZmF1bHQ6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFtcclxuICBbJ3JlcXVpcmVkJywgJ2FycS5mb3JtLWNvbnRyb2wtZXJyb3IuZGVmYXVsdC1lcnJvci1tZXNzYWdlLnJlcXVpcmVkJ10sXHJcbiAgWydyZWFkT25seScsICdhcnEuZm9ybS1jb250cm9sLWVycm9yLmRlZmF1bHQtZXJyb3ItbWVzc2FnZS5yZWFkT25seSddLFxyXG4gIFsnbWlubGVuZ3RoJywgJ2FycS5mb3JtLWNvbnRyb2wtZXJyb3IuZGVmYXVsdC1lcnJvci1tZXNzYWdlLm1pbmxlbmd0aCddLFxyXG4gIFsnbWF4bGVuZ3RoJywgJ2FycS5mb3JtLWNvbnRyb2wtZXJyb3IuZGVmYXVsdC1lcnJvci1tZXNzYWdlLm1heGxlbmd0aCddLFxyXG4gIFsncGF0dGVybicsICdhcnEuZm9ybS1jb250cm9sLWVycm9yLmRlZmF1bHQtZXJyb3ItbWVzc2FnZS5wYXR0ZXJuJ10sXHJcbiAgWydtaW4nLCAnYXJxLmZvcm0tY29udHJvbC1lcnJvci5kZWZhdWx0LWVycm9yLW1lc3NhZ2UubWluJ10sXHJcbiAgWydtYXgnLCAnYXJxLmZvcm0tY29udHJvbC1lcnJvci5kZWZhdWx0LWVycm9yLW1lc3NhZ2UubWF4J10sXHJcbiAgWydmb3JtYXQnLCAnYXJxLmZvcm0tY29udHJvbC1lcnJvci5kZWZhdWx0LWVycm9yLW1lc3NhZ2UuZm9ybWF0J10sXHJcbiAgWydtYXREYXRlcGlja2VyUGFyc2UnLCAnYXJxLmZvcm0tY29udHJvbC1lcnJvci5kZWZhdWx0LWVycm9yLW1lc3NhZ2UubWF0RGF0ZXBpY2tlclBhcnNlJ10sXHJcbiAgWydtYXRTdGFydERhdGVJbnZhbGlkJywgJ2FycS5mb3JtLWNvbnRyb2wtZXJyb3IuZGVmYXVsdC1lcnJvci1tZXNzYWdlLm1hdFN0YXJ0RGF0ZUludmFsaWQnXSxcclxuICBbJ210eERhdGV0aW1lcGlja2VyUGFyc2UnLCAnYXJxLmZvcm0tY29udHJvbC1lcnJvci5kZWZhdWx0LWVycm9yLW1lc3NhZ2UubXR4RGF0ZXRpbWVwaWNrZXJQYXJzZSddXHJcbl0pO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYXJxLWZvcm0tY29udHJvbC1lcnJvcl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtZm9ybS1jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcnEtZm9ybS1jb250cm9sLWVycm9yLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxRm9ybUNvbnRyb2xFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhYmVsQ29udHJvbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVycm9yTWFwTWVzc2FnZXM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBlcnJvck1hcE1lc3NhZ2VzRGVmYXVsdDtcclxuXHJcbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybUNvbnRyb2xTaWJsaW5nPzogRm9ybUNvbnRyb2w7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyYW5zbG9jb1NlcnZpY2U6IFRyYW5zbG9jb1NlcnZpY2UpIHt9XHJcblxyXG4gIC8vIGhhY2Vtb3MgdG9kbyBlc3RvIGRlc3B1ZXMgZGVsIGluaXQgY3VhbmRvIGV4aXN0YW4gbG9zIGVsZW1lbnRvcyBlbiBlbCBET01cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sU2libGluZyEuc3RhdHVzQ2hhbmdlcyEuc3Vic2NyaWJlKHRoaXMudXBkYXRlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRXJyb3JzID0gKHN0YXRlOiBGb3JtQ29udHJvbFN0YXR1cyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHN0YXRlID09PSAnSU5WQUxJRCcpIHtcclxuICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIC8vIHJlY3VwZXJhbW9zIGVsIG1hcGEgZGUgZXJyb3Jlc1xyXG4gICAgICBjb25zdCBjb250cm9sRXJyb3JzID0gdGhpcy5mb3JtQ29udHJvbFNpYmxpbmchLmVycm9ycyE7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xFcnJvcnMpLmZvckVhY2goa2V5RXJyb3IgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICAgICAgICBsYWJlbENvbnRyb2w6IHRoaXMubGFiZWxDb250cm9sIVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN3aXRjaCAoa2V5RXJyb3IpIHtcclxuICAgICAgICAgIGNhc2UgJ21pbic6XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgbWluOiBjb250cm9sRXJyb3JzW2tleUVycm9yXS5taW5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb25jYXRMYWJlbChrZXlFcnJvciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdtYXgnOlxyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgIG1heDogY29udHJvbEVycm9yc1trZXlFcnJvcl0ubWF4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29uY2F0TGFiZWwoa2V5RXJyb3IsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbWlubGVuZ3RoJzpcclxuICAgICAgICAgIGNhc2UgJ21heGxlbmd0aCc6XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoOiBjb250cm9sRXJyb3JzW2tleUVycm9yXS5yZXF1aXJlZExlbmd0aFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbmNhdExhYmVsKGtleUVycm9yLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3JlYWRPbmx5JzpcclxuICAgICAgICAgIGNhc2UgJ2Zvcm1hdCc6XHJcbiAgICAgICAgICBjYXNlICdwYXR0ZXJuJzpcclxuICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgdGhpcy5jb25jYXRMYWJlbChrZXlFcnJvciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdtYXREYXRlcGlja2VyUGFyc2UnOlxyXG4gICAgICAgICAgY2FzZSAnbWF0U3RhcnREYXRlSW52YWxpZCc6XHJcbiAgICAgICAgICBjYXNlICdtdHhEYXRldGltZXBpY2tlclBhcnNlJzpcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICBmb3JtYXQ6IGNvbnRyb2xFcnJvcnNba2V5RXJyb3JdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmNhdExhYmVsKGtleUVycm9yLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yTWVzc2FnZSArPSB0aGlzLmdldEN1c3RvbUxhYmVsKGNvbnRyb2xFcnJvcnNba2V5RXJyb3JdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEN1c3RvbUxhYmVsKGtleUxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zbG9jb1NlcnZpY2UudHJhbnNsYXRlKGtleUxhYmVsKSArICcgJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uY2F0TGFiZWwoa2V5RXJyb3I6IHN0cmluZywgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge30pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlRXJyb3IgPSB0aGlzLmVycm9yTWFwTWVzc2FnZXMuZ2V0KGtleUVycm9yKSBhcyBzdHJpbmc7XHJcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2UgKz0gdGhpcy5fdHJhbnNsb2NvU2VydmljZS50cmFuc2xhdGUodmFsdWVFcnJvciwgcGFyYW1zKSArICcgJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCJcclxuICAgIFttYXRUb29sdGlwXT1cImVycm9yTWVzc2FnZVwiPlxyXG4gICAge3sgZXJyb3JNZXNzYWdlIH19XHJcbiAgPC9zcGFuPlxyXG48L3NwYW4+XHJcblxyXG4iXX0=