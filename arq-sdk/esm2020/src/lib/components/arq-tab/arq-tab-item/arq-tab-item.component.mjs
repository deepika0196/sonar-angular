import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ArqTabItemHeaderComponent } from '../arq-tab-item-header/arq-tab-item-header.component';
import * as i0 from "@angular/core";
export class ArqTabItemComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
ArqTabItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTabItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTabItemComponent, selector: "arq-tab-item", inputs: { title: "title" }, queries: [{ propertyName: "itemHeader", first: true, predicate: ArqTabItemHeaderComponent, descendants: true }], viewQueries: [{ propertyName: "contentTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  <ng-content select=\"arq-tab-item-content\"></ng-content>\r\n</ng-template>\r\n", styles: [""], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-tab-item', encapsulation: ViewEncapsulation.None, template: "<ng-template>\r\n  <ng-content select=\"arq-tab-item-content\"></ng-content>\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { contentTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }], itemHeader: [{
                type: ContentChild,
                args: [ArqTabItemHeaderComponent]
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXRhYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS10YWIvYXJxLXRhYi1pdGVtL2FycS10YWItaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtdGFiL2FycS10YWItaXRlbS9hcnEtdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBUWpHLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFEUyxVQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQzs7Z0hBTlIsbUJBQW1CO29HQUFuQixtQkFBbUIsd0hBRWhCLHlCQUF5QixpR0FENUIsV0FBVyxnRENWeEIsb0dBR0E7MkZETWEsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLGNBQWMsaUJBR1QsaUJBQWlCLENBQUMsSUFBSTswRUFHTixlQUFlO3NCQUE3QyxTQUFTO3VCQUFDLFdBQVc7Z0JBQzBCLFVBQVU7c0JBQXpELFlBQVk7dUJBQUMseUJBQXlCO2dCQUM5QixLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXJxVGFiSXRlbUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2FycS10YWItaXRlbS1oZWFkZXIvYXJxLXRhYi1pdGVtLWhlYWRlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtdGFiLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtdGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FycS10YWItaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxVGFiSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIGNvbnRlbnRUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChBcnFUYWJJdGVtSGVhZGVyQ29tcG9uZW50KSBwdWJsaWMgaXRlbUhlYWRlciE6IEFycVRhYkl0ZW1IZWFkZXJDb21wb25lbnQ7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJhcnEtdGFiLWl0ZW0tY29udGVudFwiPjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19