import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredFields } from '../../../core/utils/basic.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "../arq-form-control-error/arq-form-control-error.component";
export class ArqCheckboxComponent extends ArqGenericInputComponent {
    constructor() {
        super(...arguments);
        this.direction = 'column';
        this.checkbox_down = false;
        this.checkbox_sn = false;
    }
    comprobarEntradas() {
        checkRequiredFields(this.checkBoxes, 'checkBoxes');
    }
    ngOnInit() {
        this.copyCheckboxes = this.checkBoxes.slice();
    }
    setCheckBoxes(evt, item) {
        item.completed = evt;
        if (this.checkbox_sn) {
            this.copyCheckboxes.forEach((check) => {
                if (check.completed == true)
                    check.completed = 'S';
                if (check.completed == false)
                    check.completed = 'N';
            });
        }
        this.setValue(this.copyCheckboxes);
        this.ngChanges();
    }
}
ArqCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArqCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqCheckboxComponent, selector: "arq-checkbox", inputs: { color: "color", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", disableRipple: "disableRipple", checkBoxes: "checkBoxes", sectionClass: "sectionClass", spanClass: "spanClass", direction: "direction", checkbox_down: "checkbox_down", checkbox_sn: "checkbox_sn" }, usesInheritance: true, ngImport: i0, template: "<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <ul [ngClass]=\"{ row: direction === 'row' }\">\r\n      <li *ngFor=\"let checkBox of copyCheckboxes\">\r\n        <mat-checkbox\r\n          [color]=\"checkBox.color\"\r\n          [(ngModel)]=\"checkbox_sn ? (checkBox.completed == 'S' ? true : false) : checkBox.completed\"\r\n          [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n          (ngModelChange)=\"setCheckBoxes($event, checkBox)\">\r\n          {{ checkBox.name }}\r\n        </mat-checkbox>\r\n      </li>\r\n    </ul>\r\n  </span>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.row{display:flex;flex-direction:row}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i4.ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-checkbox', encapsulation: ViewEncapsulation.None, template: "<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <ul [ngClass]=\"{ row: direction === 'row' }\">\r\n      <li *ngFor=\"let checkBox of copyCheckboxes\">\r\n        <mat-checkbox\r\n          [color]=\"checkBox.color\"\r\n          [(ngModel)]=\"checkbox_sn ? (checkBox.completed == 'S' ? true : false) : checkBox.completed\"\r\n          [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n          (ngModelChange)=\"setCheckBoxes($event, checkBox)\">\r\n          {{ checkBox.name }}\r\n        </mat-checkbox>\r\n      </li>\r\n    </ul>\r\n  </span>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.row{display:flex;flex-direction:row}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], disableRipple: [{
                type: Input
            }], checkBoxes: [{
                type: Input
            }], sectionClass: [{
                type: Input
            }], spanClass: [{
                type: Input
            }], direction: [{
                type: Input
            }], checkbox_down: [{
                type: Input
            }], checkbox_sn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1jaGVja2JveC9hcnEtY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWNoZWNrYm94L2FycS1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBU3JFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBd0I7SUFObEU7O1FBZ0NFLGNBQVMsR0FBWSxRQUFRLENBQUM7UUFFckIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7S0FzQnZDO0lBbkJVLGlCQUFpQjtRQUN4QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFUSxRQUFRO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxhQUFhLENBQUMsR0FBUSxFQUFFLElBQVM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO2dCQUNqRCxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDbkQsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUs7b0JBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztpSEFuRFUsb0JBQW9CO3FHQUFwQixvQkFBb0IscVhDYmpDLDh2QkFvQkE7MkZEUGEsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLGNBQWMsaUJBR1QsaUJBQWlCLENBQUMsSUFBSTs4QkFJckMsS0FBSztzQkFESixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBR0csYUFBYTtzQkFBckIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcnFHZW5lcmljSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FycS1nZW5lcmljLWlucHV0L2FycS1nZW5lcmljLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNoZWNrUmVxdWlyZWRGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL2Jhc2ljLnV0aWwnO1xyXG5pbXBvcnQgeyBBcnFDaGVja2JveCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXJxLWNoZWNrYm94LmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FycS1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLWNoZWNrYm94LmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEFycUdlbmVyaWNJbnB1dENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBjb2xvcjogVGhlbWVQYWxldHRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlUmlwcGxlPzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBjaGVja0JveGVzITogQXJxQ2hlY2tib3hbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZWN0aW9uQ2xhc3M/OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3BhbkNsYXNzPzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpcmVjdGlvbj86IHN0cmluZyA9ICdjb2x1bW4nO1xyXG5cclxuICBASW5wdXQoKSBjaGVja2JveF9kb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGNoZWNrYm94X3NuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29weUNoZWNrYm94ZXMhOiBBcnFDaGVja2JveFtdO1xyXG5cclxuICBvdmVycmlkZSBjb21wcm9iYXJFbnRyYWRhcygpIHtcclxuICAgIGNoZWNrUmVxdWlyZWRGaWVsZHModGhpcy5jaGVja0JveGVzLCAnY2hlY2tCb3hlcycpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvcHlDaGVja2JveGVzID0gdGhpcy5jaGVja0JveGVzLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2hlY2tCb3hlcyhldnQ6IGFueSwgaXRlbTogYW55KSB7XHJcbiAgICBpdGVtLmNvbXBsZXRlZCA9IGV2dDtcclxuICAgIGlmICh0aGlzLmNoZWNrYm94X3NuKSB7XHJcbiAgICAgIHRoaXMuY29weUNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2s6IEFycUNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNrLmNvbXBsZXRlZCA9PSB0cnVlKSBjaGVjay5jb21wbGV0ZWQgPSAnUyc7XHJcbiAgICAgICAgaWYgKGNoZWNrLmNvbXBsZXRlZCA9PSBmYWxzZSkgY2hlY2suY29tcGxldGVkID0gJ04nO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jb3B5Q2hlY2tib3hlcyk7XHJcbiAgICB0aGlzLm5nQ2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cclxuICAgIDx1bCBbbmdDbGFzc109XCJ7IHJvdzogZGlyZWN0aW9uID09PSAncm93JyB9XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY2hlY2tCb3ggb2YgY29weUNoZWNrYm94ZXNcIj5cclxuICAgICAgICA8bWF0LWNoZWNrYm94XHJcbiAgICAgICAgICBbY29sb3JdPVwiY2hlY2tCb3guY29sb3JcIlxyXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJjaGVja2JveF9zbiA/IChjaGVja0JveC5jb21wbGV0ZWQgPT0gJ1MnID8gdHJ1ZSA6IGZhbHNlKSA6IGNoZWNrQm94LmNvbXBsZXRlZFwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7IGNoZWNrYm94X2Rvd246IGNoZWNrYm94X2Rvd24gPT0gdHJ1ZSB9XCJcclxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldENoZWNrQm94ZXMoJGV2ZW50LCBjaGVja0JveClcIj5cclxuICAgICAgICAgIHt7IGNoZWNrQm94Lm5hbWUgfX1cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9zcGFuPlxyXG4gIDxtYXQtZXJyb3JcclxuICAgIGFycS1mb3JtLWNvbnRyb2wtZXJyb3JcclxuICAgIFtsYWJlbENvbnRyb2xdPVwidGhpcy5sYWJlbFwiXHJcbiAgICBbZm9ybUNvbnRyb2xTaWJsaW5nXT1cInRoaXMuZ2V0VmFsdWUoKVwiXHJcbiAgPjwvbWF0LWVycm9yPlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==