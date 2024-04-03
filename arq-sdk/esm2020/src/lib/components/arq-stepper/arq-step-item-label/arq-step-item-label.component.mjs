import { Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class ArqStepItemLabelComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
ArqStepItemLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemLabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqStepItemLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqStepItemLabelComponent, selector: "arq-step-item-label", inputs: { title: "title" }, viewQueries: [{ propertyName: "labelTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  {{ title }}\r\n</ng-template>\r\n", encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-step-item-label', encapsulation: ViewEncapsulation.None, template: "<ng-template>\r\n  {{ title }}\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { labelTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXN0ZXAtaXRlbS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtc3RlcHBlci9hcnEtc3RlcC1pdGVtLWxhYmVsL2FycS1zdGVwLWl0ZW0tbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXN0ZXBwZXIvYXJxLXN0ZXAtaXRlbS1sYWJlbC9hcnEtc3RlcC1pdGVtLWxhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3BHLE1BQU0sT0FBTyx5QkFBeUI7SUFNcEM7UUFGQSxVQUFLLEdBQVcsRUFBRSxDQUFDO0lBRUosQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7c0hBUkYseUJBQXlCOzBHQUF6Qix5QkFBeUIsc0lBQ3pCLFdBQVcsZ0RDUnhCLHNEQUdBOzJGRElhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxxQkFBcUIsaUJBRWhCLGlCQUFpQixDQUFDLElBQUk7MEVBSTlCLGFBQWE7c0JBRG5CLFNBQVM7dUJBQUMsV0FBVztnQkFHdEIsS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtc3RlcC1pdGVtLWxhYmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXJxLXN0ZXAtaXRlbS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxU3RlcEl0ZW1MYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcclxuICBwdWJsaWMgbGFiZWxUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICB0aXRsZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICB7eyB0aXRsZSB9fVxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=