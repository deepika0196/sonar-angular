import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ArqStepItemLabelComponent } from '../arq-step-item-label/arq-step-item-label.component';
import * as i0 from "@angular/core";
export class ArqStepItemComponent {
    constructor() {
        this.title = '';
    }
}
ArqStepItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqStepItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqStepItemComponent, selector: "arq-step-item", inputs: { title: "title", btnNext: "btnNext", btnBack: "btnBack", control: "control" }, queries: [{ propertyName: "itemLabel", first: true, predicate: ArqStepItemLabelComponent, descendants: true }], viewQueries: [{ propertyName: "contentTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  <ng-content select=\"arq-step-item-content\"> </ng-content>\r\n</ng-template>\r\n", encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-step-item', encapsulation: ViewEncapsulation.None, template: "<ng-template>\r\n  <ng-content select=\"arq-step-item-content\"> </ng-content>\r\n</ng-template>\r\n" }]
        }], propDecorators: { contentTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }], itemLabel: [{
                type: ContentChild,
                args: [ArqStepItemLabelComponent]
            }], title: [{
                type: Input
            }], btnNext: [{
                type: Input
            }], btnBack: [{
                type: Input
            }], control: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXN0ZXAtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtc3RlcHBlci9hcnEtc3RlcC1pdGVtL2FycS1zdGVwLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXN0ZXBwZXIvYXJxLXN0ZXAtaXRlbS9hcnEtc3RlcC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztBQU1qRyxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBU1csVUFBSyxHQUFXLEVBQUUsQ0FBQztLQU83Qjs7aUhBWFksb0JBQW9CO3FHQUFwQixvQkFBb0Isb0xBRWpCLHlCQUF5QixpR0FENUIsV0FBVyxnRENUeEIsc0dBR0E7MkZES2Esb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGVBQWUsaUJBRVYsaUJBQWlCLENBQUMsSUFBSTs4QkFHTixlQUFlO3NCQUE3QyxTQUFTO3VCQUFDLFdBQVc7Z0JBQzBCLFNBQVM7c0JBQXhELFlBQVk7dUJBQUMseUJBQXlCO2dCQUU5QixLQUFLO3NCQUFiLEtBQUs7Z0JBRU4sT0FBTztzQkFETixLQUFLO2dCQUdOLE9BQU87c0JBRE4sS0FBSztnQkFHTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXJxU3RlcEl0ZW1MYWJlbENvbXBvbmVudCB9IGZyb20gJy4uL2FycS1zdGVwLWl0ZW0tbGFiZWwvYXJxLXN0ZXAtaXRlbS1sYWJlbC5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FycS1zdGVwLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtc3RlcC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFTdGVwSXRlbUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIGNvbnRlbnRUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChBcnFTdGVwSXRlbUxhYmVsQ29tcG9uZW50KSBwdWJsaWMgaXRlbUxhYmVsITogQXJxU3RlcEl0ZW1MYWJlbENvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpXHJcbiAgYnRuTmV4dCE6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBidG5CYWNrITogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbnRyb2whOiBGb3JtR3JvdXA7XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImFycS1zdGVwLWl0ZW0tY29udGVudFwiPiA8L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==