import { Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class ArqTabItemHeaderComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
ArqTabItemHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTabItemHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTabItemHeaderComponent, selector: "arq-tab-item-header", inputs: { title: "title" }, viewQueries: [{ propertyName: "headerTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  <span class=\"title\"> {{ title }}</span>\r\n</ng-template>\r\n", styles: [".title{font-size:17px;font-weight:700}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-tab-item-header', encapsulation: ViewEncapsulation.None, template: "<ng-template>\r\n  <span class=\"title\"> {{ title }}</span>\r\n</ng-template>\r\n", styles: [".title{font-size:17px;font-weight:700}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { headerTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXRhYi1pdGVtLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtdGFiL2FycS10YWItaXRlbS1oZWFkZXIvYXJxLXRhYi1pdGVtLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtdGFiL2FycS10YWItaXRlbS1oZWFkZXIvYXJxLXRhYi1pdGVtLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVFwRyxNQUFNLE9BQU8seUJBQXlCO0lBTXBDO1FBRkEsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVKLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7O3NIQVJGLHlCQUF5QjswR0FBekIseUJBQXlCLHVJQUN6QixXQUFXLGdEQ1R4QixvRkFHQTsyRkRLYSx5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UscUJBQXFCLGlCQUdoQixpQkFBaUIsQ0FBQyxJQUFJOzBFQUk5QixjQUFjO3NCQURwQixTQUFTO3VCQUFDLFdBQVc7Z0JBR3RCLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLXRhYi1pdGVtLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS10YWItaXRlbS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FycS10YWItaXRlbS1oZWFkZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVRhYkl0ZW1IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIGhlYWRlclRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwidGl0bGVcIj4ge3sgdGl0bGUgfX08L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==