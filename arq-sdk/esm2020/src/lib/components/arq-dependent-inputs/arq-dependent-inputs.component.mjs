import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ArqBasicComponent } from '../../utils/arq-basic.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/arq-schema.service";
import * as i2 from "@angular/common";
import * as i3 from "../arq-select/arq-select.component";
import * as i4 from "../arq-autocomplete/arq-autocomplete.component";
export class ArqDependentInputsComponent extends ArqBasicComponent {
    constructor(_schemaService) {
        super(_schemaService);
        this._schemaService = _schemaService;
        this.sizeInput = 'small';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.inputs.forEach((i) => {
            if (i.fullObject === undefined) {
                i.fullObject = true;
            }
            if (i.filterBack === undefined) {
                i.filterBack = true;
            }
            i.options = i.event();
            const getVal = this._form.controls[i.control].value;
            if (getVal != '' && getVal != null) {
                this.prepareNextComponentOptions(i);
            }
            if (!i.sizeInput) {
                i.sizeInput = 'small';
            }
        });
        this.inputs.forEach((i) => {
            this.subscriptions.push(this._form.controls[i.control].valueChanges.subscribe((value) => {
                if (this._form.value[i.control] != value) {
                    this.ngChanges(value, i);
                }
            }));
            const getVal = this._form.controls[i.control].value;
            if (i.next) {
                this.prepareNextComponentOptions(i);
            }
        });
        if (this.loadedEvent) {
            this.loadedEvent.subscribe(() => {
                this.inputs.forEach((i) => {
                    if (i.next) {
                        this.prepareNextComponentOptions(i);
                    }
                });
            });
        }
    }
    prepareNextComponentOptions(i) {
        this.inputs.forEach((inp) => {
            if (i.next == inp.id) {
                let previousValues = this.getPreviousValues(inp.id);
                inp.options = inp.event(previousValues);
                //this._form.controls[inp.control].enable();
            }
        });
    }
    ngChanges(value, item) {
        this.inputs.forEach((inp) => {
            if (item.next == inp.id) {
                let previousValues = this.getPreviousValues(inp.id);
                inp.options = inp.event(previousValues);
                this.setInputs(item, true);
            }
        });
    }
    getPreviousValues(id) {
        let values = {};
        this.inputs.forEach((inp) => {
            if (inp.id < id) {
                let value = this._form.controls[inp.control].value;
                values[inp.control] = value?.value ? value.value : value;
            }
        });
        return values;
    }
    setInputs(item, enable = false) {
        this.inputs.forEach((inp) => {
            if (item.next == inp.id) {
                if (enable)
                    this._form.controls[inp.control].enable();
                this._form.controls[inp.control].setValue(null);
                if (inp.next) {
                    this.setInputs(inp);
                }
            }
        });
    }
    evtKeyPress(evt, item) {
        const val = evt.target.value;
        if (val == '') {
            this.setInputs(item);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
ArqDependentInputsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsComponent, deps: [{ token: i1.ArqSchemaService }], target: i0.ɵɵFactoryTarget.Component });
ArqDependentInputsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDependentInputsComponent, selector: "arq-dependent-inputs", inputs: { inputs: "inputs", _form: ["form", "_form"], sizeInput: "sizeInput", loadedEvent: "loadedEvent" }, usesInheritance: true, ngImport: i0, template: "<div class=\"d-flex flex-wrap\">\r\n  <ng-template ngFor let-item [ngForOf]=\"inputs\" let-i=\"index\">\r\n    <div class=\"col-md-{{ item.col || 3 }} col-12\">\r\n      <container-element [ngSwitch]=\"item.type\">\r\n        <ng-container *ngSwitchCase=\"'select'\">\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <arq-autocomplete\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [options]=\"item.options\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [filterBack]=\"item.filterBack\"\r\n            [panelWidth]=\"item.panelWidth\"\r\n            (changeEvent)=\"ngChanges($event, item)\"\r\n            (keyup)=\"evtKeyPress($event, item)\">\r\n          </arq-autocomplete>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n      </container-element>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i3.ArqSelectComponent, selector: "arq-select", inputs: ["disabled", "selectOptionsList", "emptyOption", "fullObject", "multiple"], outputs: ["selectionChange"] }, { kind: "component", type: i4.ArqAutocompleteComponent, selector: "arq-autocomplete", inputs: ["ariaLabel", "autoActiveFirstOption", "autoSelectActiveOption", "panelWidth", "nameOptions", "type", "options", "dependsOn", "filterBack", "defaultSize", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range"], outputs: ["closed", "opened", "emitValue"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-dependent-inputs', encapsulation: ViewEncapsulation.None, template: "<div class=\"d-flex flex-wrap\">\r\n  <ng-template ngFor let-item [ngForOf]=\"inputs\" let-i=\"index\">\r\n    <div class=\"col-md-{{ item.col || 3 }} col-12\">\r\n      <container-element [ngSwitch]=\"item.type\">\r\n        <ng-container *ngSwitchCase=\"'select'\">\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <arq-autocomplete\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [options]=\"item.options\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [filterBack]=\"item.filterBack\"\r\n            [panelWidth]=\"item.panelWidth\"\r\n            (changeEvent)=\"ngChanges($event, item)\"\r\n            (keyup)=\"evtKeyPress($event, item)\">\r\n          </arq-autocomplete>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n      </container-element>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArqSchemaService }]; }, propDecorators: { inputs: [{
                type: Input
            }], _form: [{
                type: Input,
                args: ['form']
            }], sizeInput: [{
                type: Input
            }], loadedEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRlcGVuZGVudC1pbnB1dHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRlcGVuZGVudC1pbnB1dHMvYXJxLWRlcGVuZGVudC1pbnB1dHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRlcGVuZGVudC1pbnB1dHMvYXJxLWRlcGVuZGVudC1pbnB1dHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7QUFVcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGlCQUFpQjtJQVdoRSxZQUE0QixjQUFnQztRQUMxRCxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFESSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFONUMsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQVU1QyxrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFGbkMsQ0FBQztJQUlRLFFBQVE7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDckI7WUFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV0QixNQUFN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WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O3dIQWpIVSwyQkFBMkI7NEdBQTNCLDJCQUEyQiwrTENaeEMsbzhEQWlEQTsyRkRyQ2EsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLHNCQUFzQixpQkFHakIsaUJBQWlCLENBQUMsSUFBSTt1R0FHNUIsTUFBTTtzQkFBZCxLQUFLO2dCQUVnQixLQUFLO3NCQUExQixLQUFLO3VCQUFDLE1BQU07Z0JBRUcsU0FBUztzQkFBeEIsS0FBSztnQkFFVSxXQUFXO3NCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXJxQmFzaWNDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9hcnEtYmFzaWMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxU2NoZW1hU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FycS1zY2hlbWEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtZGVwZW5kZW50LWlucHV0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS1kZXBlbmRlbnQtaW5wdXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcnEtZGVwZW5kZW50LWlucHV0cy5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxRGVwZW5kZW50SW5wdXRzQ29tcG9uZW50IGV4dGVuZHMgQXJxQmFzaWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaW5wdXRzITogYW55O1xyXG5cclxuICBASW5wdXQoJ2Zvcm0nKSBwdWJsaWMgX2Zvcm0hOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaXplSW5wdXQ6IHN0cmluZyA9ICdzbWFsbCc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkZWRFdmVudD86IFN1YmplY3Q8dm9pZD47XHJcblxyXG4gIHB1YmxpYyBpbnB1dFNlbGVjdDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3ZlcnJpZGUgX3NjaGVtYVNlcnZpY2U6IEFycVNjaGVtYVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKF9zY2hlbWFTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpLmZ1bGxPYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGkuZnVsbE9iamVjdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGkuZmlsdGVyQmFjayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaS5maWx0ZXJCYWNrID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpLm9wdGlvbnMgPSBpLmV2ZW50KCk7XHJcblxyXG4gICAgICBjb25zdCBnZXRWYWwgPSB0aGlzLl9mb3JtLmNvbnRyb2xzW2kuY29udHJvbF0udmFsdWU7XHJcbiAgICAgIGlmIChnZXRWYWwgIT0gJycgJiYgZ2V0VmFsICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmVOZXh0Q29tcG9uZW50T3B0aW9ucyhpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWkuc2l6ZUlucHV0KSB7XHJcbiAgICAgICAgaS5zaXplSW5wdXQgPSAnc21hbGwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgdGhpcy5fZm9ybS5jb250cm9sc1tpLmNvbnRyb2xdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9mb3JtLnZhbHVlW2kuY29udHJvbF0gIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5uZ0NoYW5nZXModmFsdWUsIGkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGdldFZhbCA9IHRoaXMuX2Zvcm0uY29udHJvbHNbaS5jb250cm9sXS52YWx1ZTtcclxuICAgICAgaWYgKGkubmV4dCkge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZU5leHRDb21wb25lbnRPcHRpb25zKGkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmxvYWRlZEV2ZW50KSB7XHJcbiAgICAgIHRoaXMubG9hZGVkRXZlbnQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChpLm5leHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlTmV4dENvbXBvbmVudE9wdGlvbnMoaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlTmV4dENvbXBvbmVudE9wdGlvbnMoaTogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnA6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaS5uZXh0ID09IGlucC5pZCkge1xyXG4gICAgICAgIGxldCBwcmV2aW91c1ZhbHVlcyA9IHRoaXMuZ2V0UHJldmlvdXNWYWx1ZXMoaW5wLmlkKTtcclxuICAgICAgICBpbnAub3B0aW9ucyA9IGlucC5ldmVudChwcmV2aW91c1ZhbHVlcyk7XHJcbiAgICAgICAgLy90aGlzLl9mb3JtLmNvbnRyb2xzW2lucC5jb250cm9sXS5lbmFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0NoYW5nZXModmFsdWU6IGFueSwgaXRlbTogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnA6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5uZXh0ID09IGlucC5pZCkge1xyXG4gICAgICAgIGxldCBwcmV2aW91c1ZhbHVlcyA9IHRoaXMuZ2V0UHJldmlvdXNWYWx1ZXMoaW5wLmlkKTtcclxuICAgICAgICBpbnAub3B0aW9ucyA9IGlucC5ldmVudChwcmV2aW91c1ZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNWYWx1ZXMoaWQ6IHN0cmluZykge1xyXG4gICAgbGV0IHZhbHVlczogYW55ID0ge307XHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnA6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaW5wLmlkIDwgaWQpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLl9mb3JtLmNvbnRyb2xzW2lucC5jb250cm9sXS52YWx1ZTtcclxuICAgICAgICB2YWx1ZXNbaW5wLmNvbnRyb2xdID0gdmFsdWU/LnZhbHVlID8gdmFsdWUudmFsdWUgOiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRzKGl0ZW06IGFueSwgZW5hYmxlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLm5leHQgPT0gaW5wLmlkKSB7XHJcbiAgICAgICAgaWYgKGVuYWJsZSkgdGhpcy5fZm9ybS5jb250cm9sc1tpbnAuY29udHJvbF0uZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5jb250cm9sc1tpbnAuY29udHJvbF0uc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgaWYgKGlucC5uZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLnNldElucHV0cyhpbnApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBldnRLZXlQcmVzcyhldnQ6IGFueSwgaXRlbTogYW55KSB7XHJcbiAgICBjb25zdCB2YWwgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGlmICh2YWwgPT0gJycpIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dHMoaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXdyYXBcIj5cclxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwiaW5wdXRzXCIgbGV0LWk9XCJpbmRleFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC17eyBpdGVtLmNvbCB8fCAzIH19IGNvbC0xMlwiPlxyXG4gICAgICA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8YXJxLXNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbD1cInt7IGl0ZW0ubGFiZWwgfX1cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGl0ZW0ubGFiZWwgfX1cIlxyXG4gICAgICAgICAgICBbZW1wdHlPcHRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuX2Zvcm1cIlxyXG4gICAgICAgICAgICBbc2VsZWN0T3B0aW9uc0xpc3RdPVwiaXRlbS5vcHRpb25zXCJcclxuICAgICAgICAgICAgW3NpemVJbnB1dF09XCJpdGVtLnNpemVJbnB1dFwiXHJcbiAgICAgICAgICAgIFtmdWxsT2JqZWN0XT1cIml0ZW0uZnVsbE9iamVjdFwiXHJcbiAgICAgICAgICAgIChjaGFuZ2VFdmVudCk9XCJuZ0NoYW5nZXMoJGV2ZW50LCBpdGVtKVwiPlxyXG4gICAgICAgICAgPC9hcnEtc2VsZWN0PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidhdXRvY29tcGxldGUnXCI+XHJcbiAgICAgICAgICA8YXJxLWF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBsYWJlbD1cInt7IGl0ZW0ubGFiZWwgfX1cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGl0ZW0ubGFiZWwgfX1cIlxyXG4gICAgICAgICAgICBbc2l6ZUlucHV0XT1cIml0ZW0uc2l6ZUlucHV0XCJcclxuICAgICAgICAgICAgW29wdGlvbnNdPVwiaXRlbS5vcHRpb25zXCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgICAgIFtmR3JvdXBdPVwidGhpcy5fZm9ybVwiXHJcbiAgICAgICAgICAgIFtmaWx0ZXJCYWNrXT1cIml0ZW0uZmlsdGVyQmFja1wiXHJcbiAgICAgICAgICAgIFtwYW5lbFdpZHRoXT1cIml0ZW0ucGFuZWxXaWR0aFwiXHJcbiAgICAgICAgICAgIChjaGFuZ2VFdmVudCk9XCJuZ0NoYW5nZXMoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJldnRLZXlQcmVzcygkZXZlbnQsIGl0ZW0pXCI+XHJcbiAgICAgICAgICA8L2FycS1hdXRvY29tcGxldGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgIDxhcnEtc2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsPVwie3sgaXRlbS5sYWJlbCB9fVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgaXRlbS5sYWJlbCB9fVwiXHJcbiAgICAgICAgICAgIFtlbXB0eU9wdGlvbl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgICAgIFtmR3JvdXBdPVwidGhpcy5fZm9ybVwiXHJcbiAgICAgICAgICAgIFtzZWxlY3RPcHRpb25zTGlzdF09XCJpdGVtLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICBbc2l6ZUlucHV0XT1cIml0ZW0uc2l6ZUlucHV0XCJcclxuICAgICAgICAgICAgW2Z1bGxPYmplY3RdPVwiaXRlbS5mdWxsT2JqZWN0XCJcclxuICAgICAgICAgICAgKGNoYW5nZUV2ZW50KT1cIm5nQ2hhbmdlcygkZXZlbnQsIGl0ZW0pXCI+XHJcbiAgICAgICAgICA8L2FycS1zZWxlY3Q+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvY29udGFpbmVyLWVsZW1lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuIl19