import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredListFields } from '../../../core/utils/basic.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/icon";
export class ArqBadgeComponent extends ArqGenericInputComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        checkRequiredListFields([this.content, this.description, this.icon], ['content', 'description', 'icon']);
    }
    comprobarEntradas() { }
}
ArqBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBadgeComponent, selector: "arq-bagde", inputs: { color: "color", content: "content", description: "description", disabled: "disabled", hidden: "hidden", overlap: "overlap", position: "position", size: "size", icon: "icon" }, usesInheritance: true, ngImport: i0, template: "<div class=\"demo-section\">\r\n  {{ this.description }}\r\n  <mat-icon [matBadge]=\"this.content\" [matBadgeColor]=\"this.color\">{{ this.icon }}</mat-icon>\r\n  <!-- Include text description of the icon's meaning for screen-readers -->\r\n  <span class=\"cdk-visually-hidden\"> </span>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-bagde', encapsulation: ViewEncapsulation.None, template: "<div class=\"demo-section\">\r\n  {{ this.description }}\r\n  <mat-icon [matBadge]=\"this.content\" [matBadgeColor]=\"this.color\">{{ this.icon }}</mat-icon>\r\n  <!-- Include text description of the icon's meaning for screen-readers -->\r\n  <span class=\"cdk-visually-hidden\"> </span>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], content: [{
                type: Input
            }], description: [{
                type: Input
            }], disabled: [{
                type: Input
            }], hidden: [{
                type: Input
            }], overlap: [{
                type: Input
            }], position: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1iYWRnZS9hcnEtYmFkZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWJhZGdlL2FycS1iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQVF6RSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsd0JBQXdCO0lBNEI3RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVRLFFBQVE7UUFDZix1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVELGlCQUFpQixLQUFVLENBQUM7OzhHQXBDakIsaUJBQWlCO2tHQUFqQixpQkFBaUIsa1FDWjlCLCtTQU1BOzJGRE1hLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxXQUFXLGlCQUdOLGlCQUFpQixDQUFDLElBQUk7MEVBSXJDLEtBQUs7c0JBREosS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCYWRnZVBvc2l0aW9uLCBNYXRCYWRnZVNpemUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBBcnFHZW5lcmljSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FycS1nZW5lcmljLWlucHV0L2FycS1nZW5lcmljLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNoZWNrUmVxdWlyZWRMaXN0RmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9iYXNpYy51dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLWJhZ2RlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXJxLWJhZGdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcnEtYmFkZ2UuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUJhZGdlQ29tcG9uZW50IGV4dGVuZHMgQXJxR2VuZXJpY0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29udGVudDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGlkZGVuPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBvdmVybGFwPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwb3NpdGlvbj86IE1hdEJhZGdlUG9zaXRpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2l6ZT86IE1hdEJhZGdlU2l6ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNoZWNrUmVxdWlyZWRMaXN0RmllbGRzKFt0aGlzLmNvbnRlbnQsIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuaWNvbl0sIFsnY29udGVudCcsICdkZXNjcmlwdGlvbicsICdpY29uJ10pO1xyXG4gIH1cclxuXHJcbiAgY29tcHJvYmFyRW50cmFkYXMoKTogdm9pZCB7fVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJkZW1vLXNlY3Rpb25cIj5cclxuICB7eyB0aGlzLmRlc2NyaXB0aW9uIH19XHJcbiAgPG1hdC1pY29uIFttYXRCYWRnZV09XCJ0aGlzLmNvbnRlbnRcIiBbbWF0QmFkZ2VDb2xvcl09XCJ0aGlzLmNvbG9yXCI+e3sgdGhpcy5pY29uIH19PC9tYXQtaWNvbj5cclxuICA8IS0tIEluY2x1ZGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgaWNvbidzIG1lYW5pbmcgZm9yIHNjcmVlbi1yZWFkZXJzIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwiY2RrLXZpc3VhbGx5LWhpZGRlblwiPiA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=