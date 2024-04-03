import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, map, Subject, debounceTime } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatAutocomplete } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "./arq-autocomplete.service";
import * as i2 from "@angular/material/paginator";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/icon";
import * as i11 from "../arq-form-control-error/arq-form-control-error.component";
const DEBOUNCE_TIME = 500;
export class ArqAutocompleteComponent extends ArqGenericInputComponent {
    constructor(service, _MatPaginatorIntl) {
        super();
        this.service = service;
        this._MatPaginatorIntl = _MatPaginatorIntl;
        this.firstChangeLoaded = false;
        this.autoActiveFirstOption = true;
        this.autoSelectActiveOption = false;
        this.nameOptions = 'auto';
        this.type = 'text';
        this.filterBack = true;
        this.defaultSize = 10;
        this.request = { page: 0, size: this.defaultSize };
        this.subscriptions = [];
        this.nextPageLabel = 'Siguiente';
        this.firstPageLabel = 'Primera';
        this.lastPageLabel = 'Última';
        this.previousPageLabel = 'Anterior';
        this.range = 'de';
        this.searchSubject = new Subject();
        this.oldValues = {};
        this.closed = new EventEmitter();
        this.opened = new EventEmitter();
        this.emitValue = new EventEmitter();
        this.filteredOptions = new Observable();
        this.configureMatPaginator(_MatPaginatorIntl);
    }
    ngOnChanges(changes) {
        if (changes) {
            this.getOptions();
        }
    }
    ngOnInit() {
        this.request = { page: 0, size: this.defaultSize };
        this.totalElements = this.defaultSize;
        this.configureDependents();
        this.changeObjectWithArrayPropertiesToNull();
        this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
        this.filteredOptions = this.getContent();
        this.searchSubject.pipe(debounceTime(DEBOUNCE_TIME)).subscribe(value => this.getData(value));
    }
    configureDependents() {
        if (!this.dependsOn || this.dependsOn.length == 0)
            return;
        this.prepareDependentsStringArray();
        this.dependsOn
            .filter((d) => d.watch)
            .forEach((d) => {
            const dependent = d.field;
            this.subscriptions.push(this.fGroup.controls[dependent].valueChanges.subscribe((value) => {
                if ((typeof value === 'string' && value.length > 0) || this.oldValues[dependent] == value) {
                    return;
                }
                this.oldValues[dependent] = value;
                this.request = {
                    page: 0,
                    size: this.defaultSize,
                    filter: ''
                };
                this.setValue(null);
                // forzamos que se resetee la paginacion
                this.totalElements = 0;
                this.filteredOptions = this.options(this.request, this.fGroup.value).pipe(map((result) => {
                    this.totalElements = result.totalElements;
                    this.request.size = result.pageable?.pageSize;
                    this.request.page = result.pageable?.pageNumber;
                    return result.content;
                }));
            }));
        });
    }
    prepareDependentsStringArray() {
        if (Array.isArray(this.dependsOn) && this.dependsOn.every((d) => typeof d === 'string')) {
            let dependents = [];
            this.dependsOn.forEach((d) => {
                dependents.push({ field: d, watch: false });
            });
            dependents[dependents.length - 1].watch = true;
            this.dependsOn = dependents;
        }
    }
    changeObjectWithArrayPropertiesToNull() {
        if (Array.isArray(this.getValue().value?.value) || this.getValue().value === '') {
            this.setValue(null);
        }
    }
    ngAfterViewInit() {
        if (this.panelWidth) {
            this.ac.panelWidth = this.panelWidth;
        }
    }
    getContent() {
        if (typeof this.options === 'function') {
            const response = this.options(this.request, this.fGroup.value).pipe(map(result => {
                this.totalElements = result.totalElements;
                return result.content;
            }));
            return response;
        }
        else if (this.options) {
            return this.options;
        }
    }
    displayFn(option) {
        if (!option) {
            return '';
        }
        return option.description;
    }
    getOptions() {
        if (!this.filterBack && this.options) {
            this.getValue().valueChanges.subscribe((value) => {
                if (this.options) {
                    this.filteredOptions = this.service._filter(this.getContent(), value, this.lang);
                }
            });
        }
        else {
            if (this.options) {
                if (this.isFirstChange()) {
                    this.loadFirstChange();
                }
                else {
                    this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
                    this.filteredOptions = this.getContent();
                }
            }
        }
    }
    loadFirstChange() {
        this.firstChangeLoaded = true;
        this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
        this.filteredOptions = this.getContent();
        this.filteredOptions.subscribe((result) => {
            if (result.length === 1) {
                this.setValue(result[0]);
            }
        });
    }
    getStringValue() {
        let value = this.getValue().value;
        value = value?.value !== undefined ? value.value : value;
        return value;
    }
    isFirstChange() {
        return this.getStringValue()?.length > 0 && !this.firstChangeLoaded;
    }
    ngGetValue(evt) {
        this.searchSubject.next(evt.key);
    }
    getData(key) {
        if (this.readonly)
            return;
        if (key === 'Enter') {
            return;
        }
        // forzamos que se resetee la paginacion
        this.totalElements = 0;
        this.request = {
            page: 0,
            size: this.defaultSize,
            filter: this.getValue().value
        };
        this.emitValue.emit(this.request);
        if (this.options) {
            this.loadPage();
        }
    }
    loadPage() {
        if (this.filterBack) {
            this.filteredOptions = this.getContent();
        }
        else {
            this.filteredOptions = this.service._filter(this.getContent(), this.request.filter ? this.request.filter : '', this.lang);
        }
    }
    onPageChange(event) {
        this.request.page = +event.pageIndex.toString();
        this.request.size = +event.pageSize.toString();
        this.loadPage();
    }
    clickEvent(evt) {
        evt.stopPropagation();
    }
    configureMatPaginator(paginatorInt1) {
        paginatorInt1.firstPageLabel = this.firstPageLabel;
        paginatorInt1.lastPageLabel = this.lastPageLabel;
        paginatorInt1.nextPageLabel = this.nextPageLabel;
        paginatorInt1.previousPageLabel = this.previousPageLabel;
        paginatorInt1.getRangeLabel = (page, pageSize, length) => {
            const start = page * pageSize + 1;
            let end = (page + 1) * pageSize;
            if (end > length) {
                end = length;
            }
            return `${start} - ${end} ${this.range} ${length}`;
        };
    }
    comprobarEntradas() { }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => {
            s.unsubscribe();
        });
    }
}
ArqAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteComponent, deps: [{ token: i1.ArqAutocompleteService }, { token: i2.MatPaginatorIntl }], target: i0.ɵɵFactoryTarget.Component });
ArqAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqAutocompleteComponent, selector: "arq-autocomplete", inputs: { ariaLabel: "ariaLabel", autoActiveFirstOption: "autoActiveFirstOption", autoSelectActiveOption: "autoSelectActiveOption", panelWidth: "panelWidth", nameOptions: "nameOptions", type: "type", options: "options", dependsOn: "dependsOn", filterBack: "filterBack", defaultSize: "defaultSize", nextPageLabel: "nextPageLabel", firstPageLabel: "firstPageLabel", lastPageLabel: "lastPageLabel", previousPageLabel: "previousPageLabel", range: "range" }, outputs: { closed: "closed", opened: "opened", emitValue: "emitValue" }, viewQueries: [{ propertyName: "ac", first: true, predicate: MatAutocomplete, descendants: true }, { propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [formControl]=\"this.getValue()\"\r\n    [type]=\"this.type\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [matAutocomplete]=\"auto\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (keyup)=\"ngGetValue($event)\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-autocomplete\r\n    class=\"arq-autocomplete\"\r\n    autoActiveFirstOption\r\n    #auto=\"matAutocomplete\"\r\n    [displayWith]=\"displayFn\"\r\n    (optionSelected)=\"ngChanges($event)\">\r\n    <mat-paginator\r\n      *ngIf=\"this.totalElements > this.request.size\"\r\n      showFirstLastButtons\r\n      hidePageSize\r\n      [length]=\"this.totalElements\"\r\n      [pageSize]=\"this.request.size\"\r\n      (page)=\"onPageChange($event)\"\r\n      (click)=\"clickEvent($event)\">\r\n    </mat-paginator>\r\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n  <mat-icon matSuffix>search</mat-icon>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{background-color:#d3d3d3}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i7.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i7.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i7.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i10.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i11.ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-autocomplete', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [formControl]=\"this.getValue()\"\r\n    [type]=\"this.type\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [matAutocomplete]=\"auto\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (keyup)=\"ngGetValue($event)\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-autocomplete\r\n    class=\"arq-autocomplete\"\r\n    autoActiveFirstOption\r\n    #auto=\"matAutocomplete\"\r\n    [displayWith]=\"displayFn\"\r\n    (optionSelected)=\"ngChanges($event)\">\r\n    <mat-paginator\r\n      *ngIf=\"this.totalElements > this.request.size\"\r\n      showFirstLastButtons\r\n      hidePageSize\r\n      [length]=\"this.totalElements\"\r\n      [pageSize]=\"this.request.size\"\r\n      (page)=\"onPageChange($event)\"\r\n      (click)=\"clickEvent($event)\">\r\n    </mat-paginator>\r\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n  <mat-icon matSuffix>search</mat-icon>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{background-color:#d3d3d3}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ArqAutocompleteService }, { type: i2.MatPaginatorIntl }]; }, propDecorators: { ariaLabel: [{
                type: Input
            }], autoActiveFirstOption: [{
                type: Input
            }], autoSelectActiveOption: [{
                type: Input
            }], panelWidth: [{
                type: Input
            }], nameOptions: [{
                type: Input
            }], type: [{
                type: Input
            }], options: [{
                type: Input
            }], dependsOn: [{
                type: Input
            }], filterBack: [{
                type: Input
            }], closed: [{
                type: Output
            }], opened: [{
                type: Output
            }], emitValue: [{
                type: Output
            }], defaultSize: [{
                type: Input
            }], ac: [{
                type: ViewChild,
                args: [MatAutocomplete]
            }], paginator: [{
                type: ViewChild,
                args: [MatPaginator, { static: true }]
            }], nextPageLabel: [{
                type: Input,
                args: ['nextPageLabel']
            }], firstPageLabel: [{
                type: Input,
                args: ['firstPageLabel']
            }], lastPageLabel: [{
                type: Input,
                args: ['lastPageLabel']
            }], previousPageLabel: [{
                type: Input,
                args: ['previousPageLabel']
            }], range: [{
                type: Input,
                args: ['range']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtYXV0b2NvbXBsZXRlL2FycS1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWF1dG9jb21wbGV0ZS9hcnEtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFnQixHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQVN2RyxPQUFPLEVBQUUsWUFBWSxFQUErQixNQUFNLDZCQUE2QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUVqRSxNQUFNLGFBQWEsR0FBVyxHQUFHLENBQUM7QUFRbEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHdCQUF3QjtJQWlFcEUsWUFBMEIsT0FBK0IsRUFBUyxpQkFBbUM7UUFDbkcsS0FBSyxFQUFFLENBQUM7UUFEZ0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBNURyRyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFNbkMsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBR3RDLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQU14QyxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUc3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c0JBRE4sS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLE1BQU07c0JBREwsTUFBTTtnQkFJUCxNQUFNO3NCQURMLE1BQU07Z0JBSVAsU0FBUztzQkFEUixNQUFNO2dCQUlQLFdBQVc7c0JBRFYsS0FBSztnQkFTc0IsRUFBRTtzQkFBN0IsU0FBUzt1QkFBQyxlQUFlO2dCQUVpQixTQUFTO3NCQUFuRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ1YsYUFBYTtzQkFBM0MsS0FBSzt1QkFBQyxlQUFlO2dCQUNVLGNBQWM7c0JBQTdDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUNRLGFBQWE7c0JBQTNDLEtBQUs7dUJBQUMsZUFBZTtnQkFDYSxpQkFBaUI7c0JBQW5ELEtBQUs7dUJBQUMsbUJBQW1CO2dCQUNILEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBtYXAsIFN1YmplY3QsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQXJxR2VuZXJpY0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcnEtZ2VuZXJpYy1pbnB1dC9hcnEtZ2VuZXJpYy1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFycUF1dG9jb21wbGV0ZVNlYXJjaEZuLFxyXG4gIEFycURlcGVuZGVudFdhdGNoLFxyXG4gIEFycVBhZ2VhYmxlUmVxdWVzdCxcclxuICBBcnFQYWdlYWJsZVJlc3BvbnNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vbGliL2ludGVyZmFjZXMvYXJxLWJhc2ljLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFycUxpc3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FycS1saXN0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFycUF1dG9jb21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuL2FycS1hdXRvY29tcGxldGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0UGFnaW5hdG9ySW50bCwgUGFnZUV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuXHJcbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDUwMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS1hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FycS1hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUF1dG9jb21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIEFycUdlbmVyaWNJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvL1RPRE86IGNyZWFyIGlucHV0IG1ldG9kbyBmaWx0cmFkb1xyXG5cclxuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8QXJxTGlzdFtdPjtcclxuXHJcbiAgZmlyc3RDaGFuZ2VMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhcmlhTGFiZWwhOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b0FjdGl2ZUZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdXRvU2VsZWN0QWN0aXZlT3B0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFuZWxXaWR0aDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5hbWVPcHRpb25zOiBzdHJpbmcgPSAnYXV0byc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM/OiBBcnFBdXRvY29tcGxldGVTZWFyY2hGbiB8IE9ic2VydmFibGU8QXJxTGlzdFtdPjtcclxuXHJcbiAgQElucHV0KClcclxuICBkZXBlbmRzT24/OiBhbnlbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBmaWx0ZXJCYWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBlbWl0VmFsdWU6IEV2ZW50RW1pdHRlcjxBcnFQYWdlYWJsZVJlcXVlc3Q+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHRTaXplOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgcmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0ID0geyBwYWdlOiAwLCBzaXplOiB0aGlzLmRlZmF1bHRTaXplIH07XHJcblxyXG4gIHRvdGFsRWxlbWVudHMhOiBudW1iZXI7XHJcblxyXG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlKSBhYyE6IE1hdEF1dG9jb21wbGV0ZTtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2luYXRvciE6IE1hdFBhZ2luYXRvcjtcclxuICBASW5wdXQoJ25leHRQYWdlTGFiZWwnKSBwdWJsaWMgbmV4dFBhZ2VMYWJlbDogc3RyaW5nID0gJ1NpZ3VpZW50ZSc7XHJcbiAgQElucHV0KCdmaXJzdFBhZ2VMYWJlbCcpIHB1YmxpYyBmaXJzdFBhZ2VMYWJlbDogc3RyaW5nID0gJ1ByaW1lcmEnO1xyXG4gIEBJbnB1dCgnbGFzdFBhZ2VMYWJlbCcpIHB1YmxpYyBsYXN0UGFnZUxhYmVsOiBzdHJpbmcgPSAnw5psdGltYSc7XHJcbiAgQElucHV0KCdwcmV2aW91c1BhZ2VMYWJlbCcpIHB1YmxpYyBwcmV2aW91c1BhZ2VMYWJlbDogc3RyaW5nID0gJ0FudGVyaW9yJztcclxuICBASW5wdXQoJ3JhbmdlJykgcHVibGljIHJhbmdlOiBzdHJpbmcgPSAnZGUnO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgb2xkVmFsdWVzPzogYW55ID0ge307XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQXJxQXV0b2NvbXBsZXRlU2VydmljZSwgcHVibGljIF9NYXRQYWdpbmF0b3JJbnRsOiBNYXRQYWdpbmF0b3JJbnRsKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHRoaXMub3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICB0aGlzLmVtaXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QXJxUGFnZWFibGVSZXF1ZXN0PigpO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5jb25maWd1cmVNYXRQYWdpbmF0b3IoX01hdFBhZ2luYXRvckludGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlcXVlc3QgPSB7IHBhZ2U6IDAsIHNpemU6IHRoaXMuZGVmYXVsdFNpemUgfTtcclxuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGVmYXVsdFNpemU7XHJcbiAgICB0aGlzLmNvbmZpZ3VyZURlcGVuZGVudHMoKTtcclxuICAgIHRoaXMuY2hhbmdlT2JqZWN0V2l0aEFycmF5UHJvcGVydGllc1RvTnVsbCgpO1xyXG4gICAgdGhpcy5yZXF1ZXN0LmZpbHRlciA9IHRoaXMuZ2V0U3RyaW5nVmFsdWUoKSA9PSBudWxsID8gJycgOiB0aGlzLmdldFN0cmluZ1ZhbHVlKCk7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZ2V0Q29udGVudCgpO1xyXG4gICAgdGhpcy5zZWFyY2hTdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpKS5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5nZXREYXRhKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVEZXBlbmRlbnRzKCkge1xyXG4gICAgaWYgKCF0aGlzLmRlcGVuZHNPbiB8fCB0aGlzLmRlcGVuZHNPbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5wcmVwYXJlRGVwZW5kZW50c1N0cmluZ0FycmF5KCk7XHJcbiAgICB0aGlzLmRlcGVuZHNPblxyXG4gICAgICAuZmlsdGVyKChkOiBhbnkpID0+ICg8QXJxRGVwZW5kZW50V2F0Y2g+ZCkud2F0Y2gpXHJcbiAgICAgIC5mb3JFYWNoKChkOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBkZXBlbmRlbnQ6IHN0cmluZyA9ICg8QXJxRGVwZW5kZW50V2F0Y2g+ZCkuZmllbGQ7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgICB0aGlzLmZHcm91cC5jb250cm9sc1tkZXBlbmRlbnRdLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHx8IHRoaXMub2xkVmFsdWVzW2RlcGVuZGVudF0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZXNbZGVwZW5kZW50XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICBzaXplOiB0aGlzLmRlZmF1bHRTaXplLFxyXG4gICAgICAgICAgICAgIGZpbHRlcjogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgLy8gZm9yemFtb3MgcXVlIHNlIHJlc2V0ZWUgbGEgcGFnaW5hY2lvblxyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9ICg8QXJxQXV0b2NvbXBsZXRlU2VhcmNoRm4+dGhpcy5vcHRpb25zKSh0aGlzLnJlcXVlc3QsIHRoaXMuZkdyb3VwLnZhbHVlKS5waXBlKFxyXG4gICAgICAgICAgICAgIG1hcCgocmVzdWx0OiBBcnFQYWdlYWJsZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSByZXN1bHQudG90YWxFbGVtZW50cztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdC5zaXplID0gcmVzdWx0LnBhZ2VhYmxlPy5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdC5wYWdlID0gcmVzdWx0LnBhZ2VhYmxlPy5wYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5jb250ZW50O1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlRGVwZW5kZW50c1N0cmluZ0FycmF5KCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kZXBlbmRzT24pICYmIHRoaXMuZGVwZW5kc09uLmV2ZXJ5KChkOiBhbnkpID0+IHR5cGVvZiBkID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgbGV0IGRlcGVuZGVudHM6IEFycURlcGVuZGVudFdhdGNoW10gPSBbXTtcclxuICAgICAgdGhpcy5kZXBlbmRzT24uZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgZGVwZW5kZW50cy5wdXNoKHsgZmllbGQ6IDxzdHJpbmc+ZCwgd2F0Y2g6IGZhbHNlIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGVwZW5kZW50c1tkZXBlbmRlbnRzLmxlbmd0aCAtIDFdLndhdGNoID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kZXBlbmRzT24gPSBkZXBlbmRlbnRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VPYmplY3RXaXRoQXJyYXlQcm9wZXJ0aWVzVG9OdWxsKCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5nZXRWYWx1ZSgpLnZhbHVlPy52YWx1ZSkgfHwgdGhpcy5nZXRWYWx1ZSgpLnZhbHVlID09PSAnJykge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMucGFuZWxXaWR0aCkge1xyXG4gICAgICB0aGlzLmFjLnBhbmVsV2lkdGggPSB0aGlzLnBhbmVsV2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29udGVudCgpOiBhbnkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLm9wdGlvbnModGhpcy5yZXF1ZXN0LCB0aGlzLmZHcm91cC52YWx1ZSkucGlwZShcclxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHJlc3VsdC50b3RhbEVsZW1lbnRzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5jb250ZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzcGxheUZuKG9wdGlvbjogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghb3B0aW9uKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsdGVyQmFjayAmJiB0aGlzLm9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5nZXRWYWx1ZSgpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuc2VydmljZS5fZmlsdGVyKHRoaXMuZ2V0Q29udGVudCgpLCB2YWx1ZSwgdGhpcy5sYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkRmlyc3RDaGFuZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0LmZpbHRlciA9IHRoaXMuZ2V0U3RyaW5nVmFsdWUoKSA9PSBudWxsID8gJycgOiB0aGlzLmdldFN0cmluZ1ZhbHVlKCk7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRmlyc3RDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmZpcnN0Q2hhbmdlTG9hZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMucmVxdWVzdC5maWx0ZXIgPSB0aGlzLmdldFN0cmluZ1ZhbHVlKCkgPT0gbnVsbCA/ICcnIDogdGhpcy5nZXRTdHJpbmdWYWx1ZSgpO1xyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zLnN1YnNjcmliZSgocmVzdWx0OiBBcnFMaXN0W10pID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHJlc3VsdFswXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0cmluZ1ZhbHVlKCk6IGFueSB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCkudmFsdWU7XHJcbiAgICB2YWx1ZSA9IHZhbHVlPy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUudmFsdWUgOiB2YWx1ZTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNGaXJzdENoYW5nZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ1ZhbHVlKCk/Lmxlbmd0aCA+IDAgJiYgIXRoaXMuZmlyc3RDaGFuZ2VMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdHZXRWYWx1ZShldnQ6IEtleWJvYXJkRXZlbnQpOiBhbnkge1xyXG4gICAgdGhpcy5zZWFyY2hTdWJqZWN0Lm5leHQoZXZ0LmtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmVhZG9ubHkpIHJldHVybjtcclxuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yemFtb3MgcXVlIHNlIHJlc2V0ZWUgbGEgcGFnaW5hY2lvblxyXG4gICAgdGhpcy50b3RhbEVsZW1lbnRzID0gMDtcclxuICAgIHRoaXMucmVxdWVzdCA9IHtcclxuICAgICAgcGFnZTogMCxcclxuICAgICAgc2l6ZTogdGhpcy5kZWZhdWx0U2l6ZSxcclxuICAgICAgZmlsdGVyOiB0aGlzLmdldFZhbHVlKCkudmFsdWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lbWl0VmFsdWUuZW1pdCh0aGlzLnJlcXVlc3QpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xyXG4gICAgICB0aGlzLmxvYWRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkUGFnZSgpIHtcclxuICAgIGlmICh0aGlzLmZpbHRlckJhY2spIHtcclxuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5zZXJ2aWNlLl9maWx0ZXIoXHJcbiAgICAgICAgdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0LmZpbHRlciA/IHRoaXMucmVxdWVzdC5maWx0ZXIgOiAnJyxcclxuICAgICAgICB0aGlzLmxhbmdcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBhZ2VDaGFuZ2UoZXZlbnQ6IFBhZ2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXF1ZXN0LnBhZ2UgPSArZXZlbnQucGFnZUluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLnJlcXVlc3Quc2l6ZSA9ICtldmVudC5wYWdlU2l6ZS50b1N0cmluZygpO1xyXG5cclxuICAgIHRoaXMubG9hZFBhZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlja0V2ZW50KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyZU1hdFBhZ2luYXRvcihwYWdpbmF0b3JJbnQxOiBNYXRQYWdpbmF0b3JJbnRsKTogdm9pZCB7XHJcbiAgICBwYWdpbmF0b3JJbnQxLmZpcnN0UGFnZUxhYmVsID0gdGhpcy5maXJzdFBhZ2VMYWJlbDtcclxuICAgIHBhZ2luYXRvckludDEubGFzdFBhZ2VMYWJlbCA9IHRoaXMubGFzdFBhZ2VMYWJlbDtcclxuICAgIHBhZ2luYXRvckludDEubmV4dFBhZ2VMYWJlbCA9IHRoaXMubmV4dFBhZ2VMYWJlbDtcclxuICAgIHBhZ2luYXRvckludDEucHJldmlvdXNQYWdlTGFiZWwgPSB0aGlzLnByZXZpb3VzUGFnZUxhYmVsO1xyXG4gICAgcGFnaW5hdG9ySW50MS5nZXRSYW5nZUxhYmVsID0gKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBhbnkgPT4ge1xyXG4gICAgICBjb25zdCBzdGFydCA9IHBhZ2UgKiBwYWdlU2l6ZSArIDE7XHJcbiAgICAgIGxldCBlbmQgPSAocGFnZSArIDEpICogcGFnZVNpemU7XHJcbiAgICAgIGlmIChlbmQgPiBsZW5ndGgpIHtcclxuICAgICAgICBlbmQgPSBsZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGAke3N0YXJ0fSAtICR7ZW5kfSAke3RoaXMucmFuZ2V9ICR7bGVuZ3RofWA7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXByb2JhckVudHJhZGFzKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHM6IFN1YnNjcmlwdGlvbikgPT4ge1xyXG4gICAgICBzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGxhYmVsICpuZ0lmPVwidGhpcy5sYWJlbFwiXHJcbiAgPnt7IHRoaXMubGFiZWwgfX1cclxuICA8c3BhbiAqbmdJZj1cInRoaXMuZ2V0VmFsaWRhdGlvbnMoKVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4gKiA8L3NwYW4+XHJcbjwvbGFiZWw+XHJcbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiIFtjbGFzc109XCJzaXplSW5wdXRcIiAqbmdJZj1cInRoaXMuZ2V0VmFsdWUoKVwiPlxyXG4gIDxpbnB1dFxyXG4gICAgbWF0SW5wdXRcclxuICAgIFtmb3JtQ29udHJvbF09XCJ0aGlzLmdldFZhbHVlKClcIlxyXG4gICAgW3R5cGVdPVwidGhpcy50eXBlXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJ0aGlzLnBsYWNlaG9sZGVyXCJcclxuICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxyXG4gICAgW21hdFRvb2x0aXBdPVwidGhpcy5tZXNzYWdlXCJcclxuICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwidGhpcy5wb3NpdGlvblRvb2x0aXBcIlxyXG4gICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwidGhpcy5oaWRlRGVsYXlcIlxyXG4gICAgKGtleXVwKT1cIm5nR2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAoZm9jdXNPdXQpPVwidGhpcy5vbkZvY3VzT3V0RXZlbnQoJGV2ZW50KVwiIC8+XHJcbiAgPG1hdC1lcnJvciBhcnEtZm9ybS1jb250cm9sLWVycm9yIFtsYWJlbENvbnRyb2xdPVwidGhpcy5sYWJlbFwiIFtmb3JtQ29udHJvbFNpYmxpbmddPVwidGhpcy5nZXRWYWx1ZSgpXCI+PC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1hdXRvY29tcGxldGVcclxuICAgIGNsYXNzPVwiYXJxLWF1dG9jb21wbGV0ZVwiXHJcbiAgICBhdXRvQWN0aXZlRmlyc3RPcHRpb25cclxuICAgICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCJcclxuICAgIFtkaXNwbGF5V2l0aF09XCJkaXNwbGF5Rm5cIlxyXG4gICAgKG9wdGlvblNlbGVjdGVkKT1cIm5nQ2hhbmdlcygkZXZlbnQpXCI+XHJcbiAgICA8bWF0LXBhZ2luYXRvclxyXG4gICAgICAqbmdJZj1cInRoaXMudG90YWxFbGVtZW50cyA+IHRoaXMucmVxdWVzdC5zaXplXCJcclxuICAgICAgc2hvd0ZpcnN0TGFzdEJ1dHRvbnNcclxuICAgICAgaGlkZVBhZ2VTaXplXHJcbiAgICAgIFtsZW5ndGhdPVwidGhpcy50b3RhbEVsZW1lbnRzXCJcclxuICAgICAgW3BhZ2VTaXplXT1cInRoaXMucmVxdWVzdC5zaXplXCJcclxuICAgICAgKHBhZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoY2xpY2spPVwiY2xpY2tFdmVudCgkZXZlbnQpXCI+XHJcbiAgICA8L21hdC1wYWdpbmF0b3I+XHJcbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGFuZyA9PT0gJ2NhJzsgZWxzZSBlbHNlVGVtcGxhdGVEZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbHVlXCI+e3sgb3B0aW9uPy52YWx1ZSB9fSAtIDwvc3Bhbj4ge3sgb3B0aW9uPy5kZXNjcmlwdGlvblYgfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsdWVcIj57eyBvcHRpb24/LnZhbHVlIH19IC0gPC9zcGFuPiB7eyBvcHRpb24/LmRlc2NyaXB0aW9uIH19XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L21hdC1vcHRpb24+XHJcbiAgPC9tYXQtYXV0b2NvbXBsZXRlPlxyXG4gIDxtYXQtaWNvbiBtYXRTdWZmaXg+c2VhcmNoPC9tYXQtaWNvbj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19