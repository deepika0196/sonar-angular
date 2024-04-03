import * as i0 from '@angular/core';
import { Component, Input, NgModule, EventEmitter, ViewEncapsulation, Output, Injectable, ViewChild, HostBinding, ChangeDetectionStrategy, Optional, Inject, HostListener, isDevMode, forwardRef, Directive, TemplateRef, ContentChild, ContentChildren, InjectionToken, inject, Pipe } from '@angular/core';
import * as i2 from '@ngneat/transloco';
import { TranslocoModule, TRANSLOCO_CONFIG, translocoConfig, TRANSLOCO_LOADER } from '@ngneat/transloco';
import * as i2$1 from '@angular/common';
import { CommonModule, DatePipe, formatNumber, DecimalPipe } from '@angular/common';
import * as i2$2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { of, Subject, Observable, debounceTime, map, distinctUntilChanged, timer, BehaviorSubject, EMPTY, forkJoin, tap, finalize, takeUntil, isObservable, take as take$1, catchError as catchError$1, shareReplay } from 'rxjs';
import * as i3 from '@angular/forms';
import { FormControl, Validators, ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';
import * as i2$3 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i11 from '@angular/material/autocomplete';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i6 from '@angular/material/core';
import { MAT_DATE_FORMATS, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MatRippleModule } from '@angular/material/core';
import * as i5 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule, MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import * as i2$4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import * as i3$1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i3$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2$5 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i1$2 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as i4$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { isMoment } from 'moment';
import * as i5$1 from '@ng-matero/extensions/datetimepicker';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
import * as i1$3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { take, filter, map as map$1, catchError } from 'rxjs/operators';
import * as i1$4 from '@angular/common/http';
import { HttpContextToken, HttpClient, HttpContext, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import * as i2$6 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i3$3 from '@angular/material/radio';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import * as i4$2 from '@ng-matero/extensions/select';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import * as i4$3 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3$4 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i3$5 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i1$5 from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import * as i1$6 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i3$6 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import * as i12 from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i3$7 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i21 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i2$7 from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import * as i14 from '@angular/material/table';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import * as i2$8 from '@angular/material/tabs';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import * as i4$4 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import * as i2$9 from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as i4$5 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i1$7 from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import * as i4$6 from 'ngx-cookie-service';
import { Observable as Observable$1 } from 'rxjs/internal/Observable';
import { __awaiter } from 'tslib';

const errorMapMessagesDefault = new Map([
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
class ArqFormControlErrorComponent {
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
                            params = Object.assign(Object.assign({}, params), { min: controlErrors[keyError].min });
                            this.concatLabel(keyError, params);
                            break;
                        case 'max':
                            params = Object.assign(Object.assign({}, params), { max: controlErrors[keyError].max });
                            this.concatLabel(keyError, params);
                            break;
                        case 'minlength':
                        case 'maxlength':
                            params = Object.assign(Object.assign({}, params), { length: controlErrors[keyError].requiredLength });
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
                            params = Object.assign(Object.assign({}, params), { format: controlErrors[keyError] });
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
ArqFormControlErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorComponent, deps: [{ token: i2.TranslocoService }], target: i0.ɵɵFactoryTarget.Component });
ArqFormControlErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: { labelControl: "labelControl", errorMapMessages: "errorMapMessages", formControlSibling: "formControlSibling" }, ngImport: i0, template: "<span>\r\n  <span\r\n    *ngIf=\"errorMessage\"\r\n    [matTooltip]=\"errorMessage\">\r\n    {{ errorMessage }}\r\n  </span>\r\n</span>\r\n\r\n", styles: ["span{width:auto;max-width:95%}span span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '[arq-form-control-error]', template: "<span>\r\n  <span\r\n    *ngIf=\"errorMessage\"\r\n    [matTooltip]=\"errorMessage\">\r\n    {{ errorMessage }}\r\n  </span>\r\n</span>\r\n\r\n", styles: ["span{width:auto;max-width:95%}span span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.TranslocoService }]; }, propDecorators: { labelControl: [{
                type: Input
            }], errorMapMessages: [{
                type: Input
            }], formControlSibling: [{
                type: Input
            }] } });

class ArqFormControlErrorModule {
}
ArqFormControlErrorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqFormControlErrorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorModule, declarations: [ArqFormControlErrorComponent], imports: [CommonModule,
        MatTooltipModule], exports: [ArqFormControlErrorComponent] });
ArqFormControlErrorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorModule, imports: [CommonModule,
        MatTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFormControlErrorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ArqFormControlErrorComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatTooltipModule,
                    ],
                    exports: [
                        ArqFormControlErrorComponent,
                    ],
                }]
        }] });

class ArqGenericInputComponent {
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
        var _a;
        (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].setValue('');
    }
    ngChanges(evt, elem) {
        var _a;
        this.changeEvent.emit((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].value);
    }
    validateValue() {
        var _a, _b;
        (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].updateValueAndValidity();
        (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].clearAsyncValidators();
    }
    ngSetChanges() {
        var _a, _b, _c, _d, _e, _f;
        if ((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value]) {
            if (((_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].value) == true)
                (_c = this.fGroup) === null || _c === void 0 ? void 0 : _c.controls[this.value].setValue('S');
            if (((_d = this.fGroup) === null || _d === void 0 ? void 0 : _d.controls[this.value].value) == false)
                (_e = this.fGroup) === null || _e === void 0 ? void 0 : _e.controls[this.value].setValue('N');
        }
        this.changeEvent.emit((_f = this.fGroup) === null || _f === void 0 ? void 0 : _f.controls[this.value].value);
    }
    getValue() {
        var _a, _b;
        if (!((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value])) {
            console.error(`ERROR: El FormControl ${this.value} no existe!!`);
        }
        return (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value];
    }
    setValueCheckbox() {
        var _a, _b, _c, _d, _e;
        if ((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value]) {
            if (((_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].value) == 'S')
                (_c = this.fGroup) === null || _c === void 0 ? void 0 : _c.controls[this.value].setValue(true);
            if (((_d = this.fGroup) === null || _d === void 0 ? void 0 : _d.controls[this.value].value) == 'N')
                (_e = this.fGroup) === null || _e === void 0 ? void 0 : _e.controls[this.value].setValue(false);
        }
    }
    setValue(value) {
        var _a, _b;
        if ((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value]) {
            (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].setValue(value);
        }
    }
    setValueDate() {
        this.fGroup.controls[this.value].valueChanges.subscribe(x => {
            this.validateDate();
        });
    }
    validateDate() {
        var _a, _b, _c;
        const value = (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].value;
        if ((_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].value) {
            if (typeof value == 'number') {
                this.fGroup.controls[this.value].setValue(new Date(value));
            }
            else if (typeof value == 'string') {
                const regEx = /^\d{4}-\d{2}-\d{2}$/;
                if (((_c = value === null || value === void 0 ? void 0 : value.toString()) === null || _c === void 0 ? void 0 : _c.match(regEx)) == null) {
                    this.fGroup.controls[this.value].setValue(new Date(Number(value)));
                }
            }
        }
    }
    setFG(control) {
        this.fGroup.addControl(control, new FormControl(''));
    }
    getValidations() {
        var _a;
        if (!((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value])) {
            console.error(`ERROR: El FormControl ${this.value} no existe!!`);
        }
        return this.fGroup.controls[this.value].hasValidator(Validators.required);
    }
    onFocusOutEvent(event) {
        var _a;
        //console.log(event.target.value);
        (_a = this.getValue()) === null || _a === void 0 ? void 0 : _a.markAsDirty();
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

class ArqAutocompleteService {
    constructor() { }
    _filter(options, value, lang) {
        const filterValue = value ? value.toString().toLowerCase() : '';
        let result = [];
        options.forEach((opt) => {
            opt.forEach((el) => {
                var _a, _b;
                if (lang == 'ca') {
                    if ((_a = el === null || el === void 0 ? void 0 : el.descriptionV) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue)) {
                        result.push(el);
                    }
                }
                else {
                    if ((_b = el === null || el === void 0 ? void 0 : el.description) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(filterValue)) {
                        result.push(el);
                    }
                }
            });
        });
        return of(result);
    }
}
ArqAutocompleteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqAutocompleteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const DEBOUNCE_TIME$1 = 500;
class ArqAutocompleteComponent extends ArqGenericInputComponent {
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
        this.searchSubject.pipe(debounceTime(DEBOUNCE_TIME$1)).subscribe(value => this.getData(value));
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
                    var _a, _b;
                    this.totalElements = result.totalElements;
                    this.request.size = (_a = result.pageable) === null || _a === void 0 ? void 0 : _a.pageSize;
                    this.request.page = (_b = result.pageable) === null || _b === void 0 ? void 0 : _b.pageNumber;
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
        var _a;
        if (Array.isArray((_a = this.getValue().value) === null || _a === void 0 ? void 0 : _a.value) || this.getValue().value === '') {
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
        value = (value === null || value === void 0 ? void 0 : value.value) !== undefined ? value.value : value;
        return value;
    }
    isFirstChange() {
        var _a;
        return ((_a = this.getStringValue()) === null || _a === void 0 ? void 0 : _a.length) > 0 && !this.firstChangeLoaded;
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
ArqAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteComponent, deps: [{ token: ArqAutocompleteService }, { token: i2$3.MatPaginatorIntl }], target: i0.ɵɵFactoryTarget.Component });
ArqAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqAutocompleteComponent, selector: "arq-autocomplete", inputs: { ariaLabel: "ariaLabel", autoActiveFirstOption: "autoActiveFirstOption", autoSelectActiveOption: "autoSelectActiveOption", panelWidth: "panelWidth", nameOptions: "nameOptions", type: "type", options: "options", dependsOn: "dependsOn", filterBack: "filterBack", defaultSize: "defaultSize", nextPageLabel: "nextPageLabel", firstPageLabel: "firstPageLabel", lastPageLabel: "lastPageLabel", previousPageLabel: "previousPageLabel", range: "range" }, outputs: { closed: "closed", opened: "opened", emitValue: "emitValue" }, viewQueries: [{ propertyName: "ac", first: true, predicate: MatAutocomplete, descendants: true }, { propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [formControl]=\"this.getValue()\"\r\n    [type]=\"this.type\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [matAutocomplete]=\"auto\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (keyup)=\"ngGetValue($event)\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-autocomplete\r\n    class=\"arq-autocomplete\"\r\n    autoActiveFirstOption\r\n    #auto=\"matAutocomplete\"\r\n    [displayWith]=\"displayFn\"\r\n    (optionSelected)=\"ngChanges($event)\">\r\n    <mat-paginator\r\n      *ngIf=\"this.totalElements > this.request.size\"\r\n      showFirstLastButtons\r\n      hidePageSize\r\n      [length]=\"this.totalElements\"\r\n      [pageSize]=\"this.request.size\"\r\n      (page)=\"onPageChange($event)\"\r\n      (click)=\"clickEvent($event)\">\r\n    </mat-paginator>\r\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n  <mat-icon matSuffix>search</mat-icon>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{background-color:#d3d3d3}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i11.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i11.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2$3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-autocomplete', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [formControl]=\"this.getValue()\"\r\n    [type]=\"this.type\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [matAutocomplete]=\"auto\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (keyup)=\"ngGetValue($event)\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-autocomplete\r\n    class=\"arq-autocomplete\"\r\n    autoActiveFirstOption\r\n    #auto=\"matAutocomplete\"\r\n    [displayWith]=\"displayFn\"\r\n    (optionSelected)=\"ngChanges($event)\">\r\n    <mat-paginator\r\n      *ngIf=\"this.totalElements > this.request.size\"\r\n      showFirstLastButtons\r\n      hidePageSize\r\n      [length]=\"this.totalElements\"\r\n      [pageSize]=\"this.request.size\"\r\n      (page)=\"onPageChange($event)\"\r\n      (click)=\"clickEvent($event)\">\r\n    </mat-paginator>\r\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n  <mat-icon matSuffix>search</mat-icon>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{background-color:#d3d3d3}\n"] }]
        }], ctorParameters: function () { return [{ type: ArqAutocompleteService }, { type: i2$3.MatPaginatorIntl }]; }, propDecorators: { ariaLabel: [{
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

class ArqAutocompleteModule {
}
ArqAutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqAutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteModule, declarations: [ArqAutocompleteComponent], imports: [ReactiveFormsModule,
        CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        ArqFormControlErrorModule], exports: [ArqAutocompleteComponent] });
ArqAutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteModule, imports: [ReactiveFormsModule,
        CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqAutocompleteComponent],
                    exports: [ArqAutocompleteComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatAutocompleteModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatIconModule,
                        MatPaginatorModule,
                        ArqFormControlErrorModule
                    ]
                }]
        }] });

function checkRequiredFields(input, name) {
    if (input == null) {
        throw new Error('El elemento "' + name + '" es obligatorio');
    }
}
function checkRequired2Fields(input, name, input2) {
    if (input == null && input2 == null) {
        throw new Error('El elemento "' + name + '" es obligatorio');
    }
}
function checkRequiredListFields(input, name) {
    input.forEach(function (value, i) {
        checkRequiredFields(value, name[i]);
    });
}

class ArqBadgeComponent extends ArqGenericInputComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        checkRequiredListFields([this.content, this.description, this.icon], ['content', 'description', 'icon']);
    }
    comprobarEntradas() { }
}
ArqBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBadgeComponent, selector: "arq-bagde", inputs: { color: "color", content: "content", description: "description", disabled: "disabled", hidden: "hidden", overlap: "overlap", position: "position", size: "size", icon: "icon" }, usesInheritance: true, ngImport: i0, template: "<div class=\"demo-section\">\r\n  {{ this.description }}\r\n  <mat-icon [matBadge]=\"this.content\" [matBadgeColor]=\"this.color\">{{ this.icon }}</mat-icon>\r\n  <!-- Include text description of the icon's meaning for screen-readers -->\r\n  <span class=\"cdk-visually-hidden\"> </span>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], encapsulation: i0.ViewEncapsulation.None });
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

class ArqBadgeModule {
}
ArqBadgeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqBadgeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, declarations: [ArqBadgeComponent], imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule], exports: [ArqBadgeComponent] });
ArqBadgeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqBadgeComponent],
                    exports: [ArqBadgeComponent],
                    imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule]
                }]
        }] });

class ArqButtonToggleMultipleComponent extends ArqGenericInputComponent {
    constructor() {
        super(...arguments);
        this.selectionChange = new EventEmitter();
    }
    onValChange(value) {
        this.selectionChange.emit(value);
    }
    comprobarEntradas() {
        checkRequiredFields(this.toggleOptions, 'toggleOptions');
    }
}
ArqButtonToggleMultipleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArqButtonToggleMultipleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqButtonToggleMultipleComponent, selector: "arq-button-toggle-multiple", inputs: { toggleOptions: "toggleOptions" }, outputs: { selectionChange: "selectionChange" }, usesInheritance: true, ngImport: i0, template: "<mat-button-toggle-group multiple [formControl]=\"this.getValue()\" (change)=\"onValChange($event.value)\">\r\n  <mat-button-toggle *ngFor=\"let op of toggleOptions | async\" [value]=\"op.value\">\r\n    {{ op.description }}\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", styles: [".mat-button-toggle-appearance-standard{background-color:#9d9b9a;color:#fff;border-radius:0}.mat-button-toggle-checked{background-color:#11799b;color:#fff;border-radius:0}.bg-red:nth-child(1){background-color:red;color:#fff}.bg-green:nth-child(2){background-color:green;color:#fff}.bg-blue:nth-child(3){background-color:#00f!important;color:#fff}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3$1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i3$1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-button-toggle-multiple', encapsulation: ViewEncapsulation.None, template: "<mat-button-toggle-group multiple [formControl]=\"this.getValue()\" (change)=\"onValChange($event.value)\">\r\n  <mat-button-toggle *ngFor=\"let op of toggleOptions | async\" [value]=\"op.value\">\r\n    {{ op.description }}\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", styles: [".mat-button-toggle-appearance-standard{background-color:#9d9b9a;color:#fff;border-radius:0}.mat-button-toggle-checked{background-color:#11799b;color:#fff;border-radius:0}.bg-red:nth-child(1){background-color:red;color:#fff}.bg-green:nth-child(2){background-color:green;color:#fff}.bg-blue:nth-child(3){background-color:#00f!important;color:#fff}\n"] }]
        }], propDecorators: { toggleOptions: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });

class ArqButtonToggleMultipleModule {
}
ArqButtonToggleMultipleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqButtonToggleMultipleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleModule, declarations: [ArqButtonToggleMultipleComponent], imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonToggleModule], exports: [ArqButtonToggleMultipleComponent] });
ArqButtonToggleMultipleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleModule, imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonToggleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonToggleMultipleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqButtonToggleMultipleComponent],
                    exports: [ArqButtonToggleMultipleComponent],
                    imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonToggleModule]
                }]
        }] });

class ArqButtonComponent {
    constructor() {
        this.readonly = false;
    }
    get className() {
        return this.readonly;
    }
}
ArqButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqButtonComponent, selector: "arq-button", inputs: { readonly: "readonly", label: "label", color: "color", type: "type", icon: "icon", tipoButton: "tipoButton", btnName: "btnName" }, host: { properties: { "class.parent-disabled": "this.className" } }, ngImport: i0, template: "<ng-container [ngSwitch]=\"tipoButton\">\r\n  <button\r\n    *ngSwitchDefault\r\n    class=\"btn-marte\"\r\n    mat-raised-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'raised'\"\r\n    class=\"btn-marte\"\r\n    mat-raised-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'stroked'\"\r\n    mat-stroked-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'flat'\"\r\n    mat-flat-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'icon'\"\r\n    mat-icon-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'fab'\"\r\n    mat-fab\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'mini-fab'\"\r\n    mat-mini-fab\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n</ng-container>\r\n", styles: [".btn-marte{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}.btn-marte:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}.btn-marte[disabled]{color:#1e1d1d;background-color:#acacac}:host.parent-disabled{pointer-events:none}\n"], dependencies: [{ kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$2.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$2.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-button', template: "<ng-container [ngSwitch]=\"tipoButton\">\r\n  <button\r\n    *ngSwitchDefault\r\n    class=\"btn-marte\"\r\n    mat-raised-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'raised'\"\r\n    class=\"btn-marte\"\r\n    mat-raised-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'stroked'\"\r\n    mat-stroked-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'flat'\"\r\n    mat-flat-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'icon'\"\r\n    mat-icon-button\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'fab'\"\r\n    mat-fab\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n  <button\r\n    *ngSwitchCase=\"'mini-fab'\"\r\n    mat-mini-fab\r\n    [color]=\"this.color\"\r\n    [disabled]=\"this.readonly\"\r\n    [type]=\"this.type\"\r\n    [attr.name]=\"this.btnName ? this.btnName : null\"\r\n    >\r\n    <mat-icon *ngIf=\"this.icon\">{{ this.icon }}</mat-icon>\r\n    {{ this.label }}\r\n  </button>\r\n</ng-container>\r\n", styles: [".btn-marte{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}.btn-marte:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}.btn-marte[disabled]{color:#1e1d1d;background-color:#acacac}:host.parent-disabled{pointer-events:none}\n"] }]
        }], propDecorators: { readonly: [{
                type: Input
            }], label: [{
                type: Input
            }], color: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], tipoButton: [{
                type: Input
            }], btnName: [{
                type: Input
            }], className: [{
                type: HostBinding,
                args: ['class.parent-disabled']
            }] } });

class ArqButtonModule {
}
ArqButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonModule, declarations: [ArqButtonComponent], imports: [MatButtonModule, MatIconModule, CommonModule], exports: [ArqButtonComponent] });
ArqButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonModule, imports: [MatButtonModule, MatIconModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqButtonComponent],
                    exports: [ArqButtonComponent],
                    imports: [MatButtonModule, MatIconModule, CommonModule]
                }]
        }] });

class ArqCardComponent {
    constructor() { }
    ngOnInit() {
        checkRequiredFields(this.content, 'Content');
        checkRequiredFields(this.title, 'title');
        checkRequiredFields(this.src, 'src');
    }
}
ArqCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqCardComponent, selector: "arq-card", inputs: { title: "title", subtitle: "subtitle", content: "content", src: "src", image: "image", alt: "alt", buttonsSchema: "buttonsSchema", extraClass: "extraClass" }, ngImport: i0, template: "<mat-card appearance=\"outlined\" class=\"{{ this.extraClass }}\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{ this.title }}</mat-card-title>\r\n    <mat-card-subtitle>{{ this.subtitle }}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img mat-card-image *ngIf=\"this.src\" src=\"{{ this.src }}\" alt=\"{{ this.alt }}\" />\r\n  <mat-card-content>\r\n    <p>\r\n      {{ this.content }}\r\n      <ng-content></ng-content>\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions *ngIf=\"buttonsSchema\">\r\n    <ng-container *ngFor=\"let btn of buttonsSchema\">\r\n      <button mat-button [color]=\"btn.color\" (click)=\"btn.action()\">{{ btn.title }}</button>\r\n    </ng-container>\r\n  </mat-card-actions>\r\n</mat-card>\r\n", styles: [".example-card{max-width:400px}mat-card img{object-fit:cover;width:10%;height:10%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2$5.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i2$5.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i2$5.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i2$5.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i2$5.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { kind: "directive", type: i2$5.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i2$5.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-card', encapsulation: ViewEncapsulation.None, template: "<mat-card appearance=\"outlined\" class=\"{{ this.extraClass }}\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{ this.title }}</mat-card-title>\r\n    <mat-card-subtitle>{{ this.subtitle }}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img mat-card-image *ngIf=\"this.src\" src=\"{{ this.src }}\" alt=\"{{ this.alt }}\" />\r\n  <mat-card-content>\r\n    <p>\r\n      {{ this.content }}\r\n      <ng-content></ng-content>\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions *ngIf=\"buttonsSchema\">\r\n    <ng-container *ngFor=\"let btn of buttonsSchema\">\r\n      <button mat-button [color]=\"btn.color\" (click)=\"btn.action()\">{{ btn.title }}</button>\r\n    </ng-container>\r\n  </mat-card-actions>\r\n</mat-card>\r\n", styles: [".example-card{max-width:400px}mat-card img{object-fit:cover;width:10%;height:10%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], content: [{
                type: Input
            }], src: [{
                type: Input
            }], image: [{
                type: Input
            }], alt: [{
                type: Input
            }], buttonsSchema: [{
                type: Input
            }], extraClass: [{
                type: Input
            }] } });

class ArqCardModule {
}
ArqCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqCardModule, declarations: [ArqCardComponent], imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule], exports: [ArqCardComponent] });
ArqCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCardModule, imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqCardComponent],
                    exports: [ArqCardComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule]
                }]
        }] });

class ArqCheckboxBasicComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.color = 'primary';
        this.checkbox_down = false;
        this.checkbox_sn = false;
    }
    ngOnChanges(changes) {
        if (changes) {
            this.verifyCheckbox();
        }
    }
    ngOnInit() {
        this.verifyCheckbox();
    }
    verifyCheckbox() {
        if (this.getValue() && this.checkbox_sn) {
            this.setValueCheckbox();
        }
    }
    comprobarEntradas() { }
}
ArqCheckboxBasicComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqCheckboxBasicComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqCheckboxBasicComponent, selector: "arq-checkbox-basic", inputs: { color: "color", checked: "checked", disabled: "disabled", sectionClass: "sectionClass", spanClass: "spanClass", checkbox_down: "checkbox_down", checkbox_sn: "checkbox_sn" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<section class=\"example-section\" *ngIf=\"this.getValue()\">\r\n  <mat-checkbox\r\n    [color]=\"color\"\r\n    [formControl]=\"this.getValue()\"\r\n    [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n    (change)=\"checkbox_sn ? this.ngSetChanges() : this.ngChanges()\">\r\n    {{ label }}\r\n  </mat-checkbox>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"], dependencies: [{ kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-checkbox-basic', encapsulation: ViewEncapsulation.None, template: "<section class=\"example-section\" *ngIf=\"this.getValue()\">\r\n  <mat-checkbox\r\n    [color]=\"color\"\r\n    [formControl]=\"this.getValue()\"\r\n    [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n    (change)=\"checkbox_sn ? this.ngSetChanges() : this.ngChanges()\">\r\n    {{ label }}\r\n  </mat-checkbox>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], sectionClass: [{
                type: Input
            }], spanClass: [{
                type: Input
            }], checkbox_down: [{
                type: Input
            }], checkbox_sn: [{
                type: Input
            }] } });

class ArqCheckboxBasicModule {
}
ArqCheckboxBasicModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqCheckboxBasicModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicModule, declarations: [ArqCheckboxBasicComponent], imports: [MatCheckboxModule,
        ReactiveFormsModule,
        CommonModule,
        ArqFormControlErrorModule], exports: [ArqCheckboxBasicComponent] });
ArqCheckboxBasicModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicModule, imports: [MatCheckboxModule,
        ReactiveFormsModule,
        CommonModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxBasicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqCheckboxBasicComponent],
                    exports: [ArqCheckboxBasicComponent],
                    imports: [
                        MatCheckboxModule,
                        ReactiveFormsModule,
                        CommonModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqCheckboxComponent extends ArqGenericInputComponent {
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
ArqCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqCheckboxComponent, selector: "arq-checkbox", inputs: { color: "color", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", disableRipple: "disableRipple", checkBoxes: "checkBoxes", sectionClass: "sectionClass", spanClass: "spanClass", direction: "direction", checkbox_down: "checkbox_down", checkbox_sn: "checkbox_sn" }, usesInheritance: true, ngImport: i0, template: "<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <ul [ngClass]=\"{ row: direction === 'row' }\">\r\n      <li *ngFor=\"let checkBox of copyCheckboxes\">\r\n        <mat-checkbox\r\n          [color]=\"checkBox.color\"\r\n          [(ngModel)]=\"checkbox_sn ? (checkBox.completed == 'S' ? true : false) : checkBox.completed\"\r\n          [ngClass]=\"{ checkbox_down: checkbox_down == true }\"\r\n          (ngModelChange)=\"setCheckBoxes($event, checkBox)\">\r\n          {{ checkBox.name }}\r\n        </mat-checkbox>\r\n      </li>\r\n    </ul>\r\n  </span>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</section>\r\n", styles: ["ul{list-style-type:none;margin-top:4px}.row{display:flex;flex-direction:row}.checkbox_down .mdc-form-field{flex-direction:column-reverse!important}.checkbox_down .mdc-form-field>label{padding-left:0;width:100%;text-align:center}.mat-mdc-checkbox label{margin-bottom:0}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
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

class ArqCheckboxModule {
}
ArqCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxModule, declarations: [ArqCheckboxComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        ArqFormControlErrorModule], exports: [ArqCheckboxComponent] });
ArqCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqCheckboxComponent],
                    exports: [ArqCheckboxComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatCheckboxModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqChipsComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.selectable = true;
        this.removable = true;
        this.selectableChip = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
    }
    add(event) {
        var _a, _b, _c, _d;
        const input = event.chipInput;
        const value = event.value;
        if ((value || '').trim()) {
            let val = this.value && ((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].value) ? (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].value : [];
            (_c = this.fGroup) === null || _c === void 0 ? void 0 : _c.controls[this.value].setValue([...val, value.trim()]);
            (_d = this.fGroup) === null || _d === void 0 ? void 0 : _d.controls[this.value].updateValueAndValidity();
            this.ngChanges();
        }
    }
    remove(elem) {
        var _a, _b, _c;
        const index = (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].value.indexOf(elem);
        if (index >= 0) {
            (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.value].value.splice(index, 1);
            (_c = this.fGroup) === null || _c === void 0 ? void 0 : _c.controls[this.value].updateValueAndValidity();
            this.ngChanges();
        }
    }
    comprobarEntradas() { }
}
ArqChipsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqChipsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqChipsComponent, selector: "arq-chips", inputs: { placeholderadd: "placeholderadd", compareWith: "compareWith", selectable: "selectable", role: "role", multiple: "multiple", color: "color", disabled: "disabled", removable: "removable", roleChip: "roleChip", selectableChip: "selectableChip" }, viewQueries: [{ propertyName: "chipInput", first: true, predicate: ["chipInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\">{{ this.label }}</label>\r\n<mat-form-field appearance=\"outline\" class=\"chip-list\">\r\n  <mat-chip-grid #chipList aria-label=\"this.label\" [formControl]=\"this.getValue()\" multiple>\r\n    <mat-chip-row\r\n      *ngFor=\"let chip of this.getValue()?.value\"\r\n      [editable]=\"!removable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(chip)\"\r\n      color=\"primary\">\r\n      {{ chip }}\r\n      <button matChipRemove>\r\n        <mat-icon>cancel</mat-icon>\r\n      </button>\r\n    </mat-chip-row>\r\n    <input\r\n      #chipInput\r\n      placeholder=\"{{ this.placeholderadd }}\"\r\n      [matChipInputFor]=\"chipList\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\"\r\n      (matChipInputTokenEnd)=\"add($event)\" />\r\n  </mat-chip-grid>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</mat-form-field>\r\n", styles: [".chip-list{width:100%}.button-container>button{margin:0 12px}.mat-chip-selected{background-color:#000!important;color:#fff}.assigned-chip{background-color:#000;color:#fff}.mat-mdc-chip.mat-mdc-standard-chip{background-color:#11799b;color:#fff}\n"], dependencies: [{ kind: "component", type: i1$2.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-chips', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\">{{ this.label }}</label>\r\n<mat-form-field appearance=\"outline\" class=\"chip-list\">\r\n  <mat-chip-grid #chipList aria-label=\"this.label\" [formControl]=\"this.getValue()\" multiple>\r\n    <mat-chip-row\r\n      *ngFor=\"let chip of this.getValue()?.value\"\r\n      [editable]=\"!removable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(chip)\"\r\n      color=\"primary\">\r\n      {{ chip }}\r\n      <button matChipRemove>\r\n        <mat-icon>cancel</mat-icon>\r\n      </button>\r\n    </mat-chip-row>\r\n    <input\r\n      #chipInput\r\n      placeholder=\"{{ this.placeholderadd }}\"\r\n      [matChipInputFor]=\"chipList\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\"\r\n      (matChipInputTokenEnd)=\"add($event)\" />\r\n  </mat-chip-grid>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</mat-form-field>\r\n", styles: [".chip-list{width:100%}.button-container>button{margin:0 12px}.mat-chip-selected{background-color:#000!important;color:#fff}.assigned-chip{background-color:#000;color:#fff}.mat-mdc-chip.mat-mdc-standard-chip{background-color:#11799b;color:#fff}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholderadd: [{
                type: Input
            }], compareWith: [{
                type: Input
            }], selectable: [{
                type: Input
            }], role: [{
                type: Input
            }], multiple: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], removable: [{
                type: Input
            }], roleChip: [{
                type: Input
            }], selectableChip: [{
                type: Input
            }], chipInput: [{
                type: ViewChild,
                args: ['chipInput']
            }] } });

class ArqChipsModule {
}
ArqChipsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqChipsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsModule, declarations: [ArqChipsComponent], imports: [MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        ArqFormControlErrorModule], exports: [ArqChipsComponent] });
ArqChipsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsModule, imports: [MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqChipsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqChipsComponent],
                    exports: [ArqChipsComponent],
                    imports: [
                        MatChipsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ReactiveFormsModule,
                        CommonModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqContextMenuComponent {
    constructor() {
        this.onContextMenuItemClick = new EventEmitter();
    }
    onContextMenuClick(event, data) {
        this.onContextMenuItemClick.emit({
            event,
            data
        });
    }
}
ArqContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqContextMenuComponent, selector: "arq-context-menu", inputs: { contextMenuItems: "contextMenuItems", menuPositions: "menuPositions" }, outputs: { onContextMenuItemClick: "onContextMenuItemClick" }, ngImport: i0, template: "<ng-container>\r\n  <div class=\"container-links\" [ngStyle]=\"{ 'left.px': menuPositions.x, 'top.px': menuPositions.y }\">\r\n    <div\r\n      class=\"menu-link\"\r\n      *ngFor=\"let menuItem of contextMenuItems; index as i\"\r\n      (click)=\"onContextMenuClick($event, menuItem)\">\r\n      {{ menuItem.menuText }}\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n", styles: [".container-links{min-width:112px;max-width:280px;overflow:auto;background:white;border:1px solid rgb(0 0 0 / 10%);z-index:8;padding:.7em;position:fixed}.menu-link{cursor:pointer;padding:.5em 0}.menu-link:hover{background:rgba(0,0,0,.04)}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-context-menu', encapsulation: ViewEncapsulation.None, template: "<ng-container>\r\n  <div class=\"container-links\" [ngStyle]=\"{ 'left.px': menuPositions.x, 'top.px': menuPositions.y }\">\r\n    <div\r\n      class=\"menu-link\"\r\n      *ngFor=\"let menuItem of contextMenuItems; index as i\"\r\n      (click)=\"onContextMenuClick($event, menuItem)\">\r\n      {{ menuItem.menuText }}\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n", styles: [".container-links{min-width:112px;max-width:280px;overflow:auto;background:white;border:1px solid rgb(0 0 0 / 10%);z-index:8;padding:.7em;position:fixed}.menu-link{cursor:pointer;padding:.5em 0}.menu-link:hover{background:rgba(0,0,0,.04)}\n"] }]
        }], propDecorators: { contextMenuItems: [{
                type: Input
            }], menuPositions: [{
                type: Input
            }], onContextMenuItemClick: [{
                type: Output
            }] } });

class ArqContextMenuModule {
}
ArqContextMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqContextMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuModule, declarations: [ArqContextMenuComponent], imports: [ReactiveFormsModule, CommonModule], exports: [ArqContextMenuComponent] });
ArqContextMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuModule, imports: [ReactiveFormsModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqContextMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqContextMenuComponent],
                    exports: [ArqContextMenuComponent],
                    imports: [ReactiveFormsModule, CommonModule]
                }]
        }] });

const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
const dateProviders = [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
];
class ArqDatepickerComponent extends ArqGenericInputComponent {
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
    }
    ngOnChanges(changes) {
        if (changes)
            this.setValueDate();
    }
    ngOnInit() {
        this.validateDate();
        // Disable funcionality
        if (typeof this.disabled === 'string')
            this.fGroup.controls[this.value].disable();
        else if (typeof this.disabled === 'boolean' && this.disabled)
            this.fGroup.controls[this.value].disable();
    }
    isDisabled() {
        if (this.fGroup) {
            return this.fGroup.controls[this.value].disabled;
        }
        return false;
    }
    comprobarEntradas() { }
}
ArqDatepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerComponent, deps: [{ token: i2$1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
ArqDatepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatepickerComponent, selector: "arq-datepicker", inputs: { label: "label", hint: "hint", disabled: "disabled" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [matDatepicker]=\"picker\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [placeholder]=\"placeholder\"\r\n    (dateChange)=\"ngChanges()\"\r\n    (blur)=\"validateValue()\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [disabled]=\"this.isDisabled()\"></mat-datepicker>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i4$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i4$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datepicker', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <input\r\n    matInput\r\n    [matDatepicker]=\"picker\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [placeholder]=\"placeholder\"\r\n    (dateChange)=\"ngChanges()\"\r\n    (blur)=\"validateValue()\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [disabled]=\"this.isDisabled()\"></mat-datepicker>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i2$1.DatePipe }]; }, propDecorators: { label: [{
                type: Input
            }], hint: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class ArqDatepickerRangeComponent extends ArqDatepickerComponent {
    constructor(datePipe) {
        super(datePipe);
        this.datePipe = datePipe;
        this.visibleRange = true;
        this.rangeLabel = '';
        this.selectionChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes)
            this.setValueDate();
    }
    ngOnInit() {
        this.addControEnd();
        this.validateDate();
        // Disable funcionality
        if (typeof this.disabled === 'string') {
            this.fGroup.controls[this.value].disable();
            this.fGroup.controls[this.fechaFin].disable();
        }
        else if (typeof this.disabled === 'boolean' && this.disabled) {
            this.fGroup.controls[this.value].disable();
            this.fGroup.controls[this.fechaFin].disable();
        }
    }
    addControEnd() {
        this.setFG(this.fechaFin);
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        this.selectionChange.emit({
            start: dateRangeStart.value,
            end: dateRangeEnd.value
        });
    }
    getFechaFinCntr() {
        var _a, _b, _c, _d;
        if ((_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.fechaFin].value) {
            (_b = this.fGroup) === null || _b === void 0 ? void 0 : _b.controls[this.fechaFin].setValue(new Date((_c = this.fGroup) === null || _c === void 0 ? void 0 : _c.controls[this.fechaFin].value));
        }
        return (_d = this.fGroup) === null || _d === void 0 ? void 0 : _d.controls[this.fechaFin];
    }
}
ArqDatepickerRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeComponent, deps: [{ token: i2$1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
ArqDatepickerRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatepickerRangeComponent, selector: "arq-datepicker-range", inputs: { labelErrorStart: "labelErrorStart", labelErrorEnd: "labelErrorEnd", visibleRange: "visibleRange", rangeLabel: "rangeLabel", placeholderStart: "placeholderStart", placeholderEnd: "placeholderEnd", fechaFin: "fechaFin" }, outputs: { selectionChange: "selectionChange" }, providers: [dateProviders, DatePipe], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input\r\n      matStartDate\r\n      [formControl]=\"this.getValue()\"\r\n      [placeholder]=\"placeholderStart\"\r\n      #dateRangeStart\r\n      #tooltip=\"matTooltip\"\r\n      [matTooltip]=\"this.message\"\r\n      [matTooltipPosition]=\"this.positionTooltip\"\r\n      [matTooltipHideDelay]=\"this.hideDelay\" />\r\n    <input\r\n      matEndDate\r\n      [formControl]=\"this.getFechaFinCntr()\"\r\n      [placeholder]=\"placeholderEnd\"\r\n      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\r\n      (blur)=\"validateValue()\"\r\n      #dateRangeEnd />\r\n  </mat-date-range-input>\r\n\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }} - {{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker [disabled]=\"this.isDisabled()\"></mat-date-range-picker>\r\n\r\n  <!-- TODO este componente esta todo comentado por lo que doy por echo que esta a medias,\r\n    dejo aqui la manera en la que se estaban controlando los errores hasta ahora por si se necesitase\r\n    probar\r\n  <mat-error *ngIf=\"this.getValue()?.hasError('matStartDateInvalid')\">{{ this.labelErrorStart }}</mat-error>\r\n  <mat-error *ngIf=\"this.fechaFinCntr?.hasError('matEndDateInvalid')\">{{ this.labelErrorEnd }}</mat-error>\r\n  -->\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n<p *ngIf=\"this.visibleRange && this.getValue()\">\r\n  {{ this.rangeLabel }}: {{ this.getValue().value | date : 'dd/MM/yyyy' }} -\r\n  {{ this.fechaFinCntr.value | date : 'dd/MM/yyyy' }}\r\n</p>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i4$1.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i4$1.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i4$1.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i4$1.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i2$1.DatePipe, name: "date" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datepicker-range', encapsulation: ViewEncapsulation.None, providers: [dateProviders, DatePipe], template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width type-date pb-0\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input\r\n      matStartDate\r\n      [formControl]=\"this.getValue()\"\r\n      [placeholder]=\"placeholderStart\"\r\n      #dateRangeStart\r\n      #tooltip=\"matTooltip\"\r\n      [matTooltip]=\"this.message\"\r\n      [matTooltipPosition]=\"this.positionTooltip\"\r\n      [matTooltipHideDelay]=\"this.hideDelay\" />\r\n    <input\r\n      matEndDate\r\n      [formControl]=\"this.getFechaFinCntr()\"\r\n      [placeholder]=\"placeholderEnd\"\r\n      (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\"\r\n      (blur)=\"validateValue()\"\r\n      #dateRangeEnd />\r\n  </mat-date-range-input>\r\n\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }} - {{ this.hint }}</mat-hint>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker [disabled]=\"this.isDisabled()\"></mat-date-range-picker>\r\n\r\n  <!-- TODO este componente esta todo comentado por lo que doy por echo que esta a medias,\r\n    dejo aqui la manera en la que se estaban controlando los errores hasta ahora por si se necesitase\r\n    probar\r\n  <mat-error *ngIf=\"this.getValue()?.hasError('matStartDateInvalid')\">{{ this.labelErrorStart }}</mat-error>\r\n  <mat-error *ngIf=\"this.fechaFinCntr?.hasError('matEndDateInvalid')\">{{ this.labelErrorEnd }}</mat-error>\r\n  -->\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n<p *ngIf=\"this.visibleRange && this.getValue()\">\r\n  {{ this.rangeLabel }}: {{ this.getValue().value | date : 'dd/MM/yyyy' }} -\r\n  {{ this.fechaFinCntr.value | date : 'dd/MM/yyyy' }}\r\n</p>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i2$1.DatePipe }]; }, propDecorators: { labelErrorStart: [{
                type: Input
            }], labelErrorEnd: [{
                type: Input
            }], visibleRange: [{
                type: Input
            }], rangeLabel: [{
                type: Input
            }], placeholderStart: [{
                type: Input
            }], placeholderEnd: [{
                type: Input
            }], fechaFin: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });

class ArqDatepickerRangeModule {
}
ArqDatepickerRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatepickerRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeModule, declarations: [ArqDatepickerRangeComponent], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule], exports: [ArqDatepickerRangeComponent] });
ArqDatepickerRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeModule, providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatepickerRangeComponent],
                    exports: [ArqDatepickerRangeComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatNativeDateModule,
                        MatMomentDateModule,
                        ArqFormControlErrorModule
                    ],
                    providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
                }]
        }] });

class ArqDatepickerModule {
}
ArqDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, declarations: [ArqDatepickerComponent], imports: [CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule], exports: [ArqDatepickerComponent] });
ArqDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, providers: [DatePipe, dateProviders, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }], imports: [CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatepickerComponent],
                    exports: [ArqDatepickerComponent],
                    imports: [
                        CommonModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatMomentDateModule,
                        ArqFormControlErrorModule
                    ],
                    providers: [DatePipe, dateProviders, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
                }]
        }] });

const MY_FORMATS_TIME = {
    parse: {
        dateInput: 'DD/MM/YYYY',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'DD/MM/YYYY HH:mm'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'DD/MM/YYYY HH:mm',
        popupHeaderDateLabel: 'MMM DD, ddd'
    }
};
const dateTimeProviders = [
    { provide: MTX_DATETIME_FORMATS, useValue: MY_FORMATS_TIME },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } }
];
class ArqDateTimepickerComponent extends ArqGenericInputComponent {
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
        this.withHours = false;
        this.type = 'datetime';
        this.mode = 'portrait';
        this.multiYearSelector = false;
        this.startView = 'month';
        this.twelvehour = false;
        this.timeInterval = 1;
        this.touchUi = false;
        this.timeInput = true;
    }
    ngOnInit() {
        this.validateDate();
        let formControl = this.getValue();
        formControl.valueChanges.subscribe((value) => {
            if (value && isMoment(value)) {
                // Por defecto, usa la fecha seleccionada como UTC y le suma +1/+2 al convertir a date.
                // De esta manera forzamos que la fecha seleccionada sea realmente la local.
                //
                // No devuelve bien las fechas configurando MAT_DATE_LOCALE, ni estableciendo el locale
                // de moment, ni DateAdapter en constructor.
                formControl.setValue(new Date(value.year(), value.month(), value.date(), value.hour(), value.minute(), value.second(), value.millisecond()), { emitEvent: false });
                this.ngChanges();
            }
        });
        // Disable funcionality
        if (typeof this.disabled === 'string')
            this.fGroup.controls[this.value].disable();
        else if (typeof this.disabled === 'boolean' && this.disabled)
            this.fGroup.controls[this.value].disable();
    }
    ngSetValue(evt) {
        this.setValue(evt);
        this.ngChanges();
    }
    isDisabled() {
        if (this.fGroup) {
            return this.fGroup.controls[this.value].disabled;
        }
        return false;
    }
    comprobarEntradas() { }
}
ArqDateTimepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerComponent, deps: [{ token: i2$1.DatePipe }], target: i0.ɵɵFactoryTarget.Component });
ArqDateTimepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDateTimepickerComponent, selector: "arq-datetimepicker", inputs: { withHours: "withHours", hint: "hint", disabled: "disabled" }, providers: [dateTimeProviders, DatePipe], usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" *ngIf=\"this.getValue()\" [class]=\"sizeInput\" class=\"type-date pb-0\">\r\n  <mtx-datetimepicker\r\n    #datetimePicker\r\n    [type]=\"type\"\r\n    [mode]=\"mode\"\r\n    [multiYearSelector]=\"multiYearSelector\"\r\n    [startView]=\"startView\"\r\n    [twelvehour]=\"twelvehour\"\r\n    [timeInterval]=\"timeInterval\"\r\n    [touchUi]=\"touchUi\"\r\n    [timeInput]=\"timeInput\"\r\n    [disabled]=\"this.isDisabled()\"\r\n    (blur)=\"validateValue()\">\r\n  </mtx-datetimepicker>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <input [mtxDatetimepicker]=\"datetimePicker\" matInput [formControl]=\"this.getValue()\" />\r\n  <mtx-datetimepicker-toggle [for]=\"datetimePicker\" matSuffix></mtx-datetimepicker-toggle>\r\n</mat-form-field>\r\n", styles: [".mat-mdc-form-field{display:block!important}svg{display:block;width:1em!important;height:1em!important}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i5$1.MtxDatetimepicker, selector: "mtx-datetimepicker", inputs: ["multiYearSelector", "twelvehour", "startView", "mode", "timeInterval", "preventSameDateTimeSelection", "panelClass", "opened", "color", "startAt", "type", "touchUi", "timeInput", "disabled", "xPosition", "yPosition", "restoreFocus"], outputs: ["selectedChanged", "opened", "closed", "viewChanged"], exportAs: ["mtxDatetimepicker"] }, { kind: "component", type: i5$1.MtxDatetimepickerToggle, selector: "mtx-datetimepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["mtxDatetimepickerToggle"] }, { kind: "directive", type: i5$1.MtxDatetimepickerInput, selector: "input[mtxDatetimepicker]", inputs: ["mtxDatetimepicker", "mtxDatetimepickerFilter", "value", "min", "max", "disabled"], outputs: ["dateChange", "dateInput"], exportAs: ["mtxDatetimepickerInput"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datetimepicker', encapsulation: ViewEncapsulation.None, providers: [dateTimeProviders, DatePipe], template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" *ngIf=\"this.getValue()\" [class]=\"sizeInput\" class=\"type-date pb-0\">\r\n  <mtx-datetimepicker\r\n    #datetimePicker\r\n    [type]=\"type\"\r\n    [mode]=\"mode\"\r\n    [multiYearSelector]=\"multiYearSelector\"\r\n    [startView]=\"startView\"\r\n    [twelvehour]=\"twelvehour\"\r\n    [timeInterval]=\"timeInterval\"\r\n    [touchUi]=\"touchUi\"\r\n    [timeInput]=\"timeInput\"\r\n    [disabled]=\"this.isDisabled()\"\r\n    (blur)=\"validateValue()\">\r\n  </mtx-datetimepicker>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <mat-hint *ngIf=\"hint\">{{ this.hint }}</mat-hint>\r\n  <input [mtxDatetimepicker]=\"datetimePicker\" matInput [formControl]=\"this.getValue()\" />\r\n  <mtx-datetimepicker-toggle [for]=\"datetimePicker\" matSuffix></mtx-datetimepicker-toggle>\r\n</mat-form-field>\r\n", styles: [".mat-mdc-form-field{display:block!important}svg{display:block;width:1em!important;height:1em!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i2$1.DatePipe }]; }, propDecorators: { withHours: [{
                type: Input
            }], hint: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class ArqDateTimepickerModule {
}
ArqDateTimepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDateTimepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, declarations: [ArqDateTimepickerComponent], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MtxMomentDatetimeModule,
        MtxDatetimepickerModule,
        ArqFormControlErrorModule], exports: [ArqDateTimepickerComponent] });
ArqDateTimepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MtxMomentDatetimeModule,
        MtxDatetimepickerModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDateTimepickerComponent],
                    exports: [ArqDateTimepickerComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatTooltipModule,
                        MtxMomentDatetimeModule,
                        MtxDatetimepickerModule,
                        ArqFormControlErrorModule
                    ],
                    providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
                }]
        }] });

class ArqDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
    }
    cancel() {
        this.close(false);
    }
    close(value) {
        this.mdDialogRef.close(value);
    }
    confirm() {
        this.close(true);
    }
    onEsc() {
        this.close(false);
    }
}
ArqDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogComponent, deps: [{ token: MAT_DIALOG_DATA, optional: true }, { token: i1$3.MatDialogRef, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ArqDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDialogComponent, selector: "arq-dialog", host: { listeners: { "keydown.esc": "onEsc()" } }, ngImport: i0, template: "<div class=\"custom-class-dialog p-3\" *ngIf=\"data\">\r\n  <div class=\"d-flex justify-content-center align-items-center mb-2\">\r\n    <div class=\"col-2 px-0\" *ngIf=\"data?.icon\">\r\n      <mat-icon [class]=\"data.color\" class=\"icon-dialog\">{{ data.icon }}</mat-icon>\r\n    </div>\r\n    <div *ngIf=\"data?.icon\" class=\"col-10\" [ngClass]=\"{ 'px-0': data.icon.length > 0 }\">\r\n      <h2 class=\"mb-1\">{{ data.title }}</h2>\r\n      <p class=\"dialog-message mb-0\">{{ data.message }}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data?.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data?.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}.custom-class-dialog .icon-dialog{font-size:3em;height:100%;width:100%}.custom-class-dialog h2{line-height:1.5em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}.custom-class-dialog .icon-dialog{font-size:2em;height:100%;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, selector: 'arq-dialog', encapsulation: ViewEncapsulation.None, template: "<div class=\"custom-class-dialog p-3\" *ngIf=\"data\">\r\n  <div class=\"d-flex justify-content-center align-items-center mb-2\">\r\n    <div class=\"col-2 px-0\" *ngIf=\"data?.icon\">\r\n      <mat-icon [class]=\"data.color\" class=\"icon-dialog\">{{ data.icon }}</mat-icon>\r\n    </div>\r\n    <div *ngIf=\"data?.icon\" class=\"col-10\" [ngClass]=\"{ 'px-0': data.icon.length > 0 }\">\r\n      <h2 class=\"mb-1\">{{ data.title }}</h2>\r\n      <p class=\"dialog-message mb-0\">{{ data.message }}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data?.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data?.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}.custom-class-dialog .icon-dialog{font-size:3em;height:100%;width:100%}.custom-class-dialog h2{line-height:1.5em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}.custom-class-dialog .icon-dialog{font-size:2em;height:100%;width:100%}}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$3.MatDialogRef, decorators: [{
                        type: Optional
                    }] }];
    }, propDecorators: { onEsc: [{
                type: HostListener,
                args: ['keydown.esc']
            }] } });

class ArqDialogService {
    constructor(dialog, transloco) {
        this.dialog = dialog;
        this.transloco = transloco;
        this.dialogRef = [];
    }
    /**
     * Crea y muestra el dialog
     * @param data
     * @param component
     * @param width
     * @returns Devuelve el observable que retorna dialogRef
     */
    open(data, component = null, opciones) {
        if (!component)
            component = ArqDialogComponent;
        this.popClosedDialogs();
        this.dialogRef.push(this.dialog.open(component, Object.assign({ autoFocus: false, data: data, panelClass: 'custom-class-dialog', disableClose: true }, opciones)));
        return this.dialogRef[this.dialogRef.length - 1].afterClosed().pipe(take(1));
    }
    /**
     * Cierra y elimina el ultimo dialog, dando por confirmado y mandando los datos
     * @param data
     */
    confirmed(data) {
        this.popClosedDialogs();
        this.dialogRef[this.dialogRef.length - 1].close(data);
        this.dialogRef.pop();
    }
    /**
     * Cierra y elimina el ultimo dialog
     */
    close() {
        this.popClosedDialogs();
        this.dialogRef[this.dialogRef.length - 1].close();
        this.dialogRef.pop();
    }
    /**
     * Elimina los dialogs cerrados del array
     */
    popClosedDialogs() {
        this.dialogRef.forEach((dialog, index) => {
            if (dialog.getState() !== 0 /* MatDialogState.OPEN */) {
                this.dialogRef.splice(index, 1);
            }
        });
    }
    /********************/
    // FEATURED DIALOGS //
    /********************/
    /**
     * Crea y muestra un modal de exito sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openSuccess(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.SUCCESS'),
            type: 'success',
            icon: 'done',
            color: 'text-success',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openAlert(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ALERT'),
            type: 'alert',
            icon: 'warning',
            color: 'text-warning',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openError(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ERROR'),
            type: 'error',
            icon: 'error',
            color: 'text-danger',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de confirmacion sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openConfirm(_message, _title) {
        return this.open({
            cancelBtn: true,
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ATTENTION'),
            type: 'alert',
            icon: 'help',
            color: 'text-warning',
            textConfirm: this.transloco.translate('GENERIC.ACCEPT'),
            textCancel: this.transloco.translate('GENERIC.CANCEL')
        });
    }
    /**
     * Crea y muestra un modal de prompt sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openPrompt(_message, _title) {
        return this.open({ message: _message, title: _title || '' }, ArqPromptDialogComponent);
    }
}
ArqDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, deps: [{ token: i1$3.MatDialog }, { token: i2.TranslocoService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }, { type: i2.TranslocoService }]; } });

class ArqPromptDialogComponent {
    constructor(data, dialogService) {
        this.data = data;
        this.dialogService = dialogService;
    }
    cancelDialog() {
        this.dialogService.close();
    }
    closeDialog() {
        this.dialogService.confirmed(this.fValue);
    }
}
ArqPromptDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPromptDialogComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqPromptDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqPromptDialogComponent, selector: "arq-dt-prompt-dialog", ngImport: i0, template: `
    <div class="p-3">
      <h1 mat-dialog-title>{{ data.title }}</h1>

      <div mat-dialog-content>
        <p>{{ data.message }}</p>
        <mat-form-field>
          <input matInput [(ngModel)]="fValue" />
        </mat-form-field>
      </div>

      <div mat-dialog-actions align="end">
        <arq-button (click)="cancelDialog()" [label]="'GENERIC.CANCEL' | transloco"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" [label]="'GENERIC.CONTINUE' | transloco"></arq-button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: ArqButtonComponent, selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "pipe", type: i2.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPromptDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-dt-prompt-dialog',
                    template: `
    <div class="p-3">
      <h1 mat-dialog-title>{{ data.title }}</h1>

      <div mat-dialog-content>
        <p>{{ data.message }}</p>
        <mat-form-field>
          <input matInput [(ngModel)]="fValue" />
        </mat-form-field>
      </div>

      <div mat-dialog-actions align="end">
        <arq-button (click)="cancelDialog()" [label]="'GENERIC.CANCEL' | transloco"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" [label]="'GENERIC.CONTINUE' | transloco"></arq-button>
      </div>
    </div>
  `
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: ArqDialogService }];
    } });

class TranslocoHttpLoader {
    // TODO: cambiar a ArqHttpClient
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`./assets/i18n/${lang}.json`);
    }
}
TranslocoHttpLoader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, deps: [{ token: i1$4.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
TranslocoHttpLoader.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1$4.HttpClient }]; } });
class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TranslocoRootModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, exports: [TranslocoModule] });
TranslocoRootModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: ['es', 'ca'],
                defaultLang: 'es',
                fallbackLang: 'es',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode()
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ], imports: [TranslocoModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [TranslocoModule],
                    providers: [
                        {
                            provide: TRANSLOCO_CONFIG,
                            useValue: translocoConfig({
                                availableLangs: ['es', 'ca'],
                                defaultLang: 'es',
                                fallbackLang: 'es',
                                // Remove this option if your application doesn't support changing language in runtime.
                                reRenderOnLangChange: true,
                                prodMode: !isDevMode()
                            })
                        },
                        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
                    ]
                }]
        }] });

class ArqDialogModule {
}
ArqDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, declarations: [ArqDialogComponent, ArqPromptDialogComponent], imports: [CommonModule,
        FormsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ArqButtonModule,
        TranslocoModule,
        TranslocoRootModule], exports: [ArqDialogComponent, ArqPromptDialogComponent] });
ArqDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, imports: [CommonModule,
        FormsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ArqButtonModule,
        TranslocoModule,
        TranslocoRootModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatInputModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ArqButtonModule,
                        TranslocoModule,
                        TranslocoRootModule
                    ],
                    declarations: [ArqDialogComponent, ArqPromptDialogComponent],
                    exports: [ArqDialogComponent, ArqPromptDialogComponent],
                    entryComponents: [ArqDialogComponent]
                }]
        }] });

class ArqExpansionPanelComponent {
    constructor() {
        this.panelOpenState = false;
        this.expanded = this.panelOpenState;
    }
}
ArqExpansionPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqExpansionPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqExpansionPanelComponent, selector: "arq-expansion-panel", inputs: { title: "title", description: "description", content: "content", expanded: "expanded" }, ngImport: i0, template: "<!-- Dinamicos para que cargue en una lista -->\r\n<div class=\"item-accordion\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel #panel [expanded]=\"expanded\" hideToggle>\r\n      <mat-expansion-panel-header class=\"panel-background-header\">\r\n        <mat-panel-title>{{ this.title }}</mat-panel-title>\r\n        <mat-panel-description\r\n          *ngIf=\"this.description\"\r\n        >\r\n          {{ this.description }}\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <ng-content class=\"panel-body\"></ng-content>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n", styles: [".item-accordion{margin-bottom:10px!important}.mat-expansion-panel-header{height:37px}.mat-expansion-panel-header.mat-expanded{height:45px}.panel-background-header,.mat-expansion-panel-header.mat-expanded:focus{background-color:#e3e3e3!important;border-radius:0%!important}.panel-background-header:hover{background-color:#939393!important;border-radius:0%!important}.panel-body{background-color:#fff}.mat-expansion-panel{box-sizing:border-box!important}.mat-expansion-panel-header-title{font-size:18px;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$6.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i2$6.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i2$6.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i2$6.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i2$6.MatExpansionPanelDescription, selector: "mat-panel-description" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-expansion-panel', encapsulation: ViewEncapsulation.None, template: "<!-- Dinamicos para que cargue en una lista -->\r\n<div class=\"item-accordion\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel #panel [expanded]=\"expanded\" hideToggle>\r\n      <mat-expansion-panel-header class=\"panel-background-header\">\r\n        <mat-panel-title>{{ this.title }}</mat-panel-title>\r\n        <mat-panel-description\r\n          *ngIf=\"this.description\"\r\n        >\r\n          {{ this.description }}\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <ng-content class=\"panel-body\"></ng-content>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n", styles: [".item-accordion{margin-bottom:10px!important}.mat-expansion-panel-header{height:37px}.mat-expansion-panel-header.mat-expanded{height:45px}.panel-background-header,.mat-expansion-panel-header.mat-expanded:focus{background-color:#e3e3e3!important;border-radius:0%!important}.panel-background-header:hover{background-color:#939393!important;border-radius:0%!important}.panel-body{background-color:#fff}.mat-expansion-panel{box-sizing:border-box!important}.mat-expansion-panel-header-title{font-size:18px;font-weight:700}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], content: [{
                type: Input
            }], expanded: [{
                type: Input
            }] } });

class ArqExpansionPanelModule {
}
ArqExpansionPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqExpansionPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelModule, declarations: [ArqExpansionPanelComponent], imports: [CommonModule, MatExpansionModule], exports: [ArqExpansionPanelComponent] });
ArqExpansionPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelModule, imports: [CommonModule, MatExpansionModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqExpansionPanelComponent],
                    exports: [ArqExpansionPanelComponent],
                    imports: [CommonModule, MatExpansionModule]
                }]
        }] });

class LocalizedNumericInputDirective {
    constructor(element) {
        this.element = element;
        this.locale = 'es';
        this.valorChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    set valor(valor) {
        if (!valor) {
            valor = '0';
        }
        this.formatValue(valor.toString());
    }
    input(value) {
        const re = /^[0-9]+([.])?([0-9]+)?$/;
        const test = re.test(value);
        if (test) {
            value = value.replace('.', ',');
        }
        //Find all numerics, decimal marker(, or .) and -
        //It will delete thousandSeparator cos it's always opposite to decimal marker
        const regExp = new RegExp(`[^\\d${this.decimalMarker}-]`, 'g');
        //Separate value on before and after decimal marker
        let [integer, decimal] = value.replace(regExp, '').split(this.decimalMarker);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        //Send non localized value, with dot as decimalMarker to API
        this._value = decimal ? integer.concat(',', decimal) : integer;
        // If decimal separator is last character don't update
        // because it will delete . || ,
        if (this.isLastCharacterDecimalSeparator(value)) {
            this._value = value;
        }
        // here to notify Angular Validators
        this._onChange(this._value);
    }
    _onBlur() {
        /**
         * Adding thousand separators
         */
        this.formatValue(this._value);
        this.valorChange.emit(this._value ? this._value : '');
    }
    onFocus() {
        this.unFormatValue();
    }
    _onChange(value) { }
    /**
     * @param value
     * apply formatting on value assignment
     */
    writeValue(value) {
        if (typeof value == 'number') {
            value = value.toString();
            if (value) {
                value = value.replace('.', ',');
            }
        }
        this._value = value;
        this.formatValue(this._value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() { }
    isLastCharacterDecimalSeparator(value) {
        return isNaN(value[value.length - 1]);
    }
    formatValue(value) {
        if (value === null) {
            this.element.nativeElement.value = '';
            return;
        }
        // if (this.isLastCharacterDecimalSeparator(value.toString())) {
        //   this.element.nativeElement.value = value;
        //   return;
        // }
        // Conclude the decimal and thousand separators from locale
        const [thousandSeparator, decimalMarker] = formatNumber(1000.99, this.locale).replace(/\d/g, '');
        this.decimalMarker = decimalMarker;
        //Here value should always come with . as decimal marker thus any other behavior is bug
        let [integer, decimal] = value.toString().split(',');
        // console.log(decimal);
        integer = integer ? integer.toString().replace(/[^0-9.]/g, '') : '';
        decimal = decimal ? decimal.toString().replace(/[^0-9.]/g, '') : '';
        // console.log(decimal);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        // console.log(decimal);
        if (!isNaN(Number(decimal))) {
            let numero;
            numero = Math.round(Number('0.' + decimal) * 100) / 100;
            if (numero == 0) {
                decimal = '0.00';
            }
            else if (numero == 1) {
                decimal = '0.00';
                integer = (!isNaN(Number(integer)) ? Number(integer) + 1 : 0).toLocaleString();
            }
            else {
                decimal = numero.toLocaleString();
            }
            decimal = decimal.substring(2, decimal.length);
        }
        //Group every three elements, and add thousandSeparator after them
        this.element.nativeElement.value = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        //Add decimals and decimalMarker if any
        if (decimal) {
            this.element.nativeElement.value = this.element.nativeElement.value.concat(decimalMarker, decimal);
        }
        this._value = this.element.nativeElement.value;
    }
    unFormatValue() {
        const value = this.element.nativeElement.value;
        if (this.isLastCharacterDecimalSeparator(value)) {
            return;
        }
        const regExp = new RegExp(`[^\\d${this.decimalMarker}-]`, 'g');
        let [integer, decimal] = value.replace(regExp, '').split(this.decimalMarker);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        this._value = integer.concat(',', decimal);
        if (value) {
            this.element.nativeElement.value = this._value;
        }
        else {
            this.element.nativeElement.value = '';
        }
    }
}
LocalizedNumericInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LocalizedNumericInputDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
LocalizedNumericInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: LocalizedNumericInputDirective, selector: "input[localizedNumericInput]", inputs: { value: "value", valor: ["localizedNumericInput", "valor"], objeto: "objeto", propiedad: "propiedad" }, outputs: { valorChange: "localizedNumericInputChange" }, host: { listeners: { "input": "input($event.target.value)", "blur": "_onBlur()", "focus": "onFocus()" } }, providers: [
        {
            provide: MAT_INPUT_VALUE_ACCESSOR,
            useExisting: LocalizedNumericInputDirective
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LocalizedNumericInputDirective),
            multi: true
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LocalizedNumericInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[localizedNumericInput]',
                    providers: [
                        {
                            provide: MAT_INPUT_VALUE_ACCESSOR,
                            useExisting: LocalizedNumericInputDirective
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => LocalizedNumericInputDirective),
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input,
                args: ['value']
            }], valor: [{
                type: Input,
                args: ['localizedNumericInput']
            }], valorChange: [{
                type: Output,
                args: ['localizedNumericInputChange']
            }], objeto: [{
                type: Input,
                args: ['objeto']
            }], propiedad: [{
                type: Input,
                args: ['propiedad']
            }], input: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], _onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }] } });

class ArqInputMoneyComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.maxLength = 100;
    }
    comprobarEntradas() { }
}
ArqInputMoneyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqInputMoneyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqInputMoneyComponent, selector: "arq-input-money", inputs: { maxLength: "maxLength", append: "append" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-money\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    type=\"text\"\r\n    matInput\r\n    [(localizedNumericInput)]=\"this.valor\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>euro_symbol</mat-icon>\r\n\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-money{border-radius:0%;width:100%;border:3px}.full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "directive", type: LocalizedNumericInputDirective, selector: "input[localizedNumericInput]", inputs: ["value", "localizedNumericInput", "objeto", "propiedad"], outputs: ["localizedNumericInputChange"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-input-money', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-money\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    type=\"text\"\r\n    matInput\r\n    [(localizedNumericInput)]=\"this.valor\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>euro_symbol</mat-icon>\r\n\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-money{border-radius:0%;width:100%;border:3px}.full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { maxLength: [{
                type: Input
            }], append: [{
                type: Input
            }] } });

class ArqGenericInputModule {
}
ArqGenericInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqGenericInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputModule, imports: [MatTooltipModule, ReactiveFormsModule], exports: [MatTooltipModule, ReactiveFormsModule] });
ArqGenericInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputModule, imports: [MatTooltipModule, ReactiveFormsModule, MatTooltipModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGenericInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    exports: [MatTooltipModule, ReactiveFormsModule],
                    imports: [MatTooltipModule, ReactiveFormsModule]
                }]
        }] });

class ArqInputMoneyModule {
}
ArqInputMoneyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqInputMoneyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, declarations: [ArqInputMoneyComponent, LocalizedNumericInputDirective], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule], exports: [ArqInputMoneyComponent, LocalizedNumericInputDirective] });
ArqInputMoneyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, providers: [DecimalPipe], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqInputMoneyComponent, LocalizedNumericInputDirective],
                    exports: [ArqInputMoneyComponent, LocalizedNumericInputDirective],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        ArqFormControlErrorModule,
                    ],
                    providers: [DecimalPipe]
                }]
        }] });

class ArqInputNumberComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.maxLength = 100;
    }
    comprobarEntradas() { }
}
ArqInputNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqInputNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqInputNumberComponent, selector: "arq-input-number", inputs: { maxLength: "maxLength", append: "append" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-number\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    matInput\r\n    type=\"number\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-number{border-radius:0%;width:100%;border:3px}.full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-input-number', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-number\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    matInput\r\n    type=\"number\"\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-number{border-radius:0%;width:100%;border:3px}.full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { maxLength: [{
                type: Input
            }], append: [{
                type: Input
            }] } });

class ArqInputNumberModule {
}
ArqInputNumberModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqInputNumberModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, declarations: [ArqInputNumberComponent], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule], exports: [ArqInputNumberComponent] });
ArqInputNumberModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqInputNumberComponent],
                    exports: [ArqInputNumberComponent],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqRadioButtonComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.disabled = true;
        this.labelPosition = 'before';
        this.name = 'radio-group-example';
        this.checked = false;
        this.disabledRadio = false;
        this.direction = 'column';
    }
    ngOnInit() {
        checkRequiredFields(this.radioOptionsList, 'radioOptionsList');
        checkRequiredFields(this.label, 'label');
    }
    comprobarEntradas() { }
}
ArqRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqRadioButtonComponent, selector: "arq-radio-button", inputs: { color: "color", disabled: "disabled", labelPosition: "labelPosition", name: "name", checked: "checked", colorRadio: "colorRadio", disabledRadio: "disabledRadio", id: "id", class: "class", radioOptionsList: "radioOptionsList", selectedValue: "selectedValue", direction: "direction" }, usesInheritance: true, ngImport: i0, template: "<div [ngClass]=\"{ 'd-flex': direction == 'row' }\">\r\n  <div class=\"d-flex align-items-center\">\r\n    <label [ngClass]=\"{ 'mb-0': direction == 'row' }\" *ngIf=\"this.label\">{{ this.label }}</label>\r\n    <p [ngClass]=\"{ 'mb-0': direction == 'row' }\" *ngIf=\"this.label\"></p>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"this.getValue()\">\r\n    <mat-radio-group class=\"{{ this.class }}\" [formControl]=\"this.getValue()\">\r\n      <mat-radio-button\r\n        class=\"radio-button-arq\"\r\n        *ngFor=\"let radio of radioOptionsList | async\"\r\n        [value]=\"radio.value\"\r\n        [checked]=\"radio.value == this.selectedValue\">\r\n        {{ radio.description }}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n    <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  </ng-container>\r\n</div>\r\n", styles: [".radio-group-col{display:flex;flex-direction:column;margin:15px 0;align-items:flex-start}.radio-group-row{display:flex;flex-direction:row;margin:15px 0;align-items:flex-start}.radio-button-arq{margin:5px}.mdc-form-field>label{margin-bottom:0}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3$3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3$3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-radio-button', encapsulation: ViewEncapsulation.None, template: "<div [ngClass]=\"{ 'd-flex': direction == 'row' }\">\r\n  <div class=\"d-flex align-items-center\">\r\n    <label [ngClass]=\"{ 'mb-0': direction == 'row' }\" *ngIf=\"this.label\">{{ this.label }}</label>\r\n    <p [ngClass]=\"{ 'mb-0': direction == 'row' }\" *ngIf=\"this.label\"></p>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"this.getValue()\">\r\n    <mat-radio-group class=\"{{ this.class }}\" [formControl]=\"this.getValue()\">\r\n      <mat-radio-button\r\n        class=\"radio-button-arq\"\r\n        *ngFor=\"let radio of radioOptionsList | async\"\r\n        [value]=\"radio.value\"\r\n        [checked]=\"radio.value == this.selectedValue\">\r\n        {{ radio.description }}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n    <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  </ng-container>\r\n</div>\r\n", styles: [".radio-group-col{display:flex;flex-direction:column;margin:15px 0;align-items:flex-start}.radio-group-row{display:flex;flex-direction:row;margin:15px 0;align-items:flex-start}.radio-button-arq{margin:5px}.mdc-form-field>label{margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], name: [{
                type: Input
            }], checked: [{
                type: Input
            }], colorRadio: [{
                type: Input
            }], disabledRadio: [{
                type: Input
            }], id: [{
                type: Input
            }], class: [{
                type: Input
            }], radioOptionsList: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], direction: [{
                type: Input
            }] } });

class ArqRadioButtonModule {
}
ArqRadioButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqRadioButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, declarations: [ArqRadioButtonComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatRadioModule,
        ArqFormControlErrorModule], exports: [ArqRadioButtonComponent] });
ArqRadioButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' }
        }
    ], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatRadioModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqRadioButtonComponent],
                    exports: [ArqRadioButtonComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatRadioModule,
                        ArqFormControlErrorModule,
                    ],
                    providers: [
                        {
                            provide: MAT_RADIO_DEFAULT_OPTIONS,
                            useValue: { color: 'primary' }
                        }
                    ]
                }]
        }] });

class ArqSelectMultipleComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.disabled = false;
        this.selectionChange = new EventEmitter();
        this.hint = '';
        this.optionsList = [];
    }
    ngOnInit() {
        var _a;
        checkRequiredListFields([this.selectOptionsList], ['selectOptionsList']);
        if (Array.isArray(this.selectOptionsList)) {
            this.selectOptionsList = of(this.selectOptionsList);
        }
        this.selectOptionsList.subscribe((data) => {
            this.optionsList = data;
        });
        if (this.selectedValue) {
            (_a = this.getValue()) === null || _a === void 0 ? void 0 : _a.setValue(this.selectedValue);
        }
    }
    reset() {
        this.selectedValue = '';
    }
    comprobarEntradas() { }
}
ArqSelectMultipleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSelectMultipleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSelectMultipleComponent, selector: "arq-select-multiple", inputs: { disabled: "disabled", selectedValue: "selectedValue", selectOptionsList: "selectOptionsList", hint: "hint" }, outputs: { selectionChange: "selectionChange" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"this.getValue()\">\r\n  <mtx-select\r\n    [formControl]=\"this.getValue()\"\r\n    [items]=\"this.optionsList\"\r\n    [bindLabel]=\"this.lang === this.LANG_ES ? 'description' : 'descriptionV'\"\r\n    bindValue=\"value\"\r\n    [multiple]=\"true\"\r\n    (change)=\"ngChanges()\">\r\n  </mtx-select>\r\n\r\n  <mat-hint>{{ this.hint }}</mat-hint>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$2.MtxSelect, selector: "mtx-select", inputs: ["disabled", "addTag", "addTagText", "appearance", "appendTo", "bindLabel", "bindValue", "closeOnSelect", "clearAllText", "clearable", "clearOnBackspace", "compareWith", "dropdownPosition", "groupBy", "groupValue", "selectableGroup", "selectableGroupAsModel", "hideSelected", "isOpen", "loading", "loadingText", "labelForId", "markFirst", "maxSelectedItems", "multiple", "notFoundText", "searchable", "readonly", "searchFn", "searchWhileComposing", "selectOnTab", "trackByFn", "inputAttrs", "tabIndex", "openOnEnter", "minTermLength", "editableSearchTerm", "keyDownFn", "virtualScroll", "typeToSearchText", "typeahead", "clearSearchOnAdd", "items", "value", "id", "placeholder", "required", "errorStateMatcher", "aria-label", "aria-labelledby"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"], exportAs: ["mtxSelect"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-select-multiple', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"this.getValue()\">\r\n  <mtx-select\r\n    [formControl]=\"this.getValue()\"\r\n    [items]=\"this.optionsList\"\r\n    [bindLabel]=\"this.lang === this.LANG_ES ? 'description' : 'descriptionV'\"\r\n    bindValue=\"value\"\r\n    [multiple]=\"true\"\r\n    (change)=\"ngChanges()\">\r\n  </mtx-select>\r\n\r\n  <mat-hint>{{ this.hint }}</mat-hint>\r\n  <mat-error\r\n    arq-form-control-error\r\n    [labelControl]=\"this.label\"\r\n    [formControlSibling]=\"this.getValue()\"\r\n  ></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], selectOptionsList: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], hint: [{
                type: Input
            }] } });

class ArqSelectMultipleModule {
}
ArqSelectMultipleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSelectMultipleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, declarations: [ArqSelectMultipleComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MtxSelectModule,
        ArqFormControlErrorModule], exports: [ArqSelectMultipleComponent] });
ArqSelectMultipleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MtxSelectModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSelectMultipleComponent],
                    exports: [ArqSelectMultipleComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatFormFieldModule,
                        MtxSelectModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqSelectComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.emptyOption = false;
        this.fullObject = true;
        this.multiple = false;
        this.selectionChange = new EventEmitter();
    }
    ngOnInit() {
        checkRequiredListFields([this.selectOptionsList, this.placeholder, this.required], ['selectOptionsList', 'placeholder', 'required']);
        if (Array.isArray(this.selectOptionsList)) {
            this.selectOptionsList = of(this.selectOptionsList);
        }
        this.getValue().valueChanges.subscribe(value => {
            if (value === undefined || value === '') {
                this.setValue(null);
            }
            // caso select fullObject false, no multiple
            if (!this.fullObject && !this.multiple && (value === null || value === void 0 ? void 0 : value.value)) {
                this.setValue(value.value);
            }
            // caso select fullObject false, multiple
            if (!this.fullObject && this.multiple && Array.isArray(value) && value.length > 0 && value[0].value) {
                this.setValue(value.map((obj) => obj.value));
            }
        });
        this.changeObjectWithArrayPropertiesToNull();
        this.checkInitValue();
    }
    changeObjectWithArrayPropertiesToNull() {
        var _a;
        if (this.fullObject && Array.isArray((_a = this.getValue().value) === null || _a === void 0 ? void 0 : _a.value)) {
            this.setValue(null);
        }
    }
    checkInitValue() {
        var _a;
        if (this.fullObject) {
            if (this.getValue().value && !((_a = this.getValue().value) === null || _a === void 0 ? void 0 : _a.value)) {
                throw new Error('El valor del select debe heredar de ArqList (con propiedades value, description, descriptionV)');
            }
        }
        else if (this.multiple) {
            if (this.getValue().value && !Array.isArray(this.getValue().value)) {
                throw new Error('Al ser un select múltiple, el valor del select debe ser un array');
            }
        }
        else {
            if (typeof this.getValue().value === 'object' && this.getValue().value !== null) {
                throw new Error('El valor del select no acepta objetos, solo valores primitivos');
            }
        }
    }
    compareFunction(o1, o2) {
        let val1 = (o1 === null || o1 === void 0 ? void 0 : o1.value) ? o1.value : o1;
        let val2 = (o2 === null || o2 === void 0 ? void 0 : o2.value) ? o2.value : o2;
        return val1 === val2;
    }
    comprobarEntradas() { }
}
ArqSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSelectComponent, selector: "arq-select", inputs: { disabled: "disabled", selectOptionsList: "selectOptionsList", emptyOption: "emptyOption", fullObject: "fullObject", multiple: "multiple" }, outputs: { selectionChange: "selectionChange" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-select\r\n    [formControl]=\"this.getValue()\"\r\n    name=\"selected\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [compareWith]=\"compareFunction\"\r\n    [multiple]=\"this.multiple\"\r\n    (selectionChange)=\"ngChanges()\">\r\n    <mat-option *ngIf=\"emptyOption\"></mat-option>\r\n    <mat-option *ngFor=\"let option of selectOptionsList | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-select>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%;display:block}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-select', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field appearance=\"outline\" class=\"full-width\" [class]=\"sizeInput\" *ngIf=\"this.getValue()\">\r\n  <mat-select\r\n    [formControl]=\"this.getValue()\"\r\n    name=\"selected\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [compareWith]=\"compareFunction\"\r\n    [multiple]=\"this.multiple\"\r\n    (selectionChange)=\"ngChanges()\">\r\n    <mat-option *ngIf=\"emptyOption\"></mat-option>\r\n    <mat-option *ngFor=\"let option of selectOptionsList | async\" [value]=\"option\">\r\n      <ng-container *ngIf=\"lang === 'ca'; else elseTemplateDescription\">\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.descriptionV }}\r\n      </ng-container>\r\n      <ng-template #elseTemplateDescription>\r\n        <span *ngIf=\"showValue\">{{ option?.value }} - </span> {{ option?.description }}\r\n      </ng-template>\r\n    </mat-option>\r\n  </mat-select>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%;display:block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], selectOptionsList: [{
                type: Input
            }], emptyOption: [{
                type: Input
            }], fullObject: [{
                type: Input
            }], multiple: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });

class ArqSelectModule {
}
ArqSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, declarations: [ArqSelectComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        ArqFormControlErrorModule], exports: [ArqSelectComponent] });
ArqSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSelectComponent],
                    exports: [ArqSelectComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        ArqFormControlErrorModule
                    ]
                }]
        }] });

class ArqSliderDobleComponent extends ArqGenericInputComponent {
    constructor() {
        super();
    }
    cambioValorInicio(event) {
        var _a;
        return (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[this.value].setValue(event.target.value);
    }
    cambioValorFin(event) {
        this.formControlFinal.setValue(event.target.value);
    }
    comprobarEntradas() { }
}
ArqSliderDobleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSliderDobleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSliderDobleComponent, selector: "arq-slider-doble", inputs: { max: "max", min: "min", step: "step", barraLabel: "barraLabel", formControlFinal: "formControlFinal" }, usesInheritance: true, ngImport: i0, template: "<mat-slider *ngIf=\"this.getValue()\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [discrete]=\"barraLabel\">\r\n  <input matSliderStartThumb [formControl]=\"this.getValue()\" (change)=\"this.cambioValorInicio($event)\" />\r\n  <input matSliderEndThumb [formControl]=\"this.formControlFinal\" (change)=\"this.cambioValorFin($event)\" />\r\n</mat-slider>\r\n", styles: ["mat-slider{width:100%}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$4.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i3$4.MatSliderRangeThumb, selector: "input[matSliderStartThumb], input[matSliderEndThumb]", exportAs: ["matSliderRangeThumb"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-slider-doble', encapsulation: ViewEncapsulation.None, template: "<mat-slider *ngIf=\"this.getValue()\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [discrete]=\"barraLabel\">\r\n  <input matSliderStartThumb [formControl]=\"this.getValue()\" (change)=\"this.cambioValorInicio($event)\" />\r\n  <input matSliderEndThumb [formControl]=\"this.formControlFinal\" (change)=\"this.cambioValorFin($event)\" />\r\n</mat-slider>\r\n", styles: ["mat-slider{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { max: [{
                type: Input
            }], min: [{
                type: Input
            }], step: [{
                type: Input
            }], barraLabel: [{
                type: Input
            }], formControlFinal: [{
                type: Input
            }] } });

class ArqSliderDobleModule {
}
ArqSliderDobleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSliderDobleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleModule, declarations: [ArqSliderDobleComponent], imports: [ReactiveFormsModule, CommonModule, MatSliderModule], exports: [ArqSliderDobleComponent] });
ArqSliderDobleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleModule, imports: [ReactiveFormsModule, CommonModule, MatSliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderDobleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSliderDobleComponent],
                    exports: [ArqSliderDobleComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatSliderModule]
                }]
        }] });

class ArqSliderToggleComponent extends ArqGenericInputComponent {
    constructor() {
        super();
    }
    comprobarEntradas() { }
}
ArqSliderToggleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSliderToggleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSliderToggleComponent, selector: "arq-slider-toggle", inputs: { checked: "checked" }, usesInheritance: true, ngImport: i0, template: "<mat-slide-toggle *ngIf=\"this.getValue()\" [formControl]=\"this.getValue()\" [checked]=\"this.getValue().value\">{{\r\n  this.label\r\n}}</mat-slide-toggle>\r\n", styles: ["mat-slider{width:100%}\n"], dependencies: [{ kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$5.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-slider-toggle', encapsulation: ViewEncapsulation.None, template: "<mat-slide-toggle *ngIf=\"this.getValue()\" [formControl]=\"this.getValue()\" [checked]=\"this.getValue().value\">{{\r\n  this.label\r\n}}</mat-slide-toggle>\r\n", styles: ["mat-slider{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { checked: [{
                type: Input
            }] } });

class ArqSliderToggleModule {
}
ArqSliderToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSliderToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleModule, declarations: [ArqSliderToggleComponent], imports: [ReactiveFormsModule, CommonModule, MatSlideToggleModule], exports: [ArqSliderToggleComponent] });
ArqSliderToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleModule, imports: [ReactiveFormsModule, CommonModule, MatSlideToggleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSliderToggleComponent],
                    exports: [ArqSliderToggleComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatSlideToggleModule]
                }]
        }] });

class ArqSliderComponent extends ArqGenericInputComponent {
    constructor() {
        super();
    }
    comprobarEntradas() { }
}
ArqSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSliderComponent, selector: "arq-slider", inputs: { disabled: "disabled", max: "max", min: "min", step: "step", barraLabel: "barraLabel" }, usesInheritance: true, ngImport: i0, template: "<mat-slider\r\n  *ngIf=\"this.getValue()\"\r\n  [disabled]=\"this.disabled\"\r\n  [max]=\"max\"\r\n  [min]=\"min\"\r\n  [step]=\"step\"\r\n  [discrete]=\"barraLabel\">\r\n  <input matSliderThumb [formControl]=\"this.getValue()\" />\r\n</mat-slider>\r\n", styles: ["mat-slider{width:100%}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$4.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i3$4.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-slider', encapsulation: ViewEncapsulation.None, template: "<mat-slider\r\n  *ngIf=\"this.getValue()\"\r\n  [disabled]=\"this.disabled\"\r\n  [max]=\"max\"\r\n  [min]=\"min\"\r\n  [step]=\"step\"\r\n  [discrete]=\"barraLabel\">\r\n  <input matSliderThumb [formControl]=\"this.getValue()\" />\r\n</mat-slider>\r\n", styles: ["mat-slider{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], max: [{
                type: Input
            }], min: [{
                type: Input
            }], step: [{
                type: Input
            }], barraLabel: [{
                type: Input
            }] } });

class ArqSliderModule {
}
ArqSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderModule, declarations: [ArqSliderComponent], imports: [ReactiveFormsModule, CommonModule, MatSliderModule], exports: [ArqSliderComponent] });
ArqSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderModule, imports: [ReactiveFormsModule, CommonModule, MatSliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSliderComponent],
                    exports: [ArqSliderComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatSliderModule]
                }]
        }] });

class ArqSnackBarComponent {
}
ArqSnackBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSnackBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSnackBarComponent, selector: "arq-snackbar", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-snackbar', template: "" }]
        }] });

class ArqSnackBarModule {
}
ArqSnackBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSnackBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, declarations: [ArqSnackBarComponent], imports: [CommonModule, BrowserAnimationsModule, i1$5.ToastrModule], exports: [ArqSnackBarComponent] });
ArqSnackBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSnackBarComponent],
                    exports: [ArqSnackBarComponent],
                    imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
                    entryComponents: [ArqSnackBarComponent]
                }]
        }] });

class ArqOverlayService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    createOverlay(config) {
        return this.overlay.create(config);
    }
    attachTemplatePortal(overlayRef, templateRef, vcRef) {
        let templatePortal = new TemplatePortal(templateRef, vcRef);
        // console.log(templatePortal);
        overlayRef.attach(templatePortal);
    }
    positionGloballyCenter() {
        return this.overlay.position().global().centerHorizontally().centerVertically();
    }
}
ArqOverlayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService, deps: [{ token: i1$6.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
ArqOverlayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$6.Overlay }]; } });

class ArqSpinnerService {
    constructor() {
        this.loading = new Subject();
    }
    show() {
        this.loading.next(true);
    }
    hide() {
        setTimeout(() => {
            this.loading.next(false);
        }, 500);
    }
    state() {
        return this.loading.asObservable().pipe(distinctUntilChanged());
    }
}
ArqSpinnerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqSpinnerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class ArqSpinnerComponent {
    constructor(vcRef, overlayService, spinnerService, _changeDetector) {
        this.vcRef = vcRef;
        this.overlayService = overlayService;
        this.spinnerService = spinnerService;
        this._changeDetector = _changeDetector;
        this.diameter = 100;
        this.mode = 'determinate';
        this.backdropEnabled = true;
        this.positionGloballyCenter = true;
        this.displayProgressSpinner = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // Config for Overlay Service
        this.progressSpinnerOverlayConfig = {
            hasBackdrop: this.backdropEnabled
        };
        if (this.positionGloballyCenter) {
            this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
        }
        // Create Overlay for progress spinner
        this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
        // console.log(this.overlayRef);
        this.spinnerService.state().subscribe((observer) => {
            // console.log(observer);
            // this.displayProgressSpinner = observer;
            // this._changeDetector.detectChanges();
            this.spinnerShow(observer);
        });
    }
    ngDoCheck() {
        // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
        // this.spinnerShow();
    }
    spinnerShow(val) {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.detach();
        if (val && this.progressSpinnerRef) {
            this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
        }
    }
}
ArqSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerComponent, deps: [{ token: i0.ViewContainerRef }, { token: ArqOverlayService }, { token: ArqSpinnerService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ArqSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSpinnerComponent, selector: "arq-spinner", inputs: { color: "color", diameter: "diameter", mode: "mode", value: "value", backdropEnabled: "backdropEnabled", positionGloballyCenter: "positionGloballyCenter", displayProgressSpinner: "displayProgressSpinner" }, viewQueries: [{ propertyName: "progressSpinnerRef", first: true, predicate: ["progressSpinnerRef"], descendants: true }], ngImport: i0, template: "<ng-template #progressSpinnerRef>\r\n  <mat-progress-spinner [color]=\"color\" [diameter]=\"diameter\" [mode]=\"mode\" [value]=\"value\"> </mat-progress-spinner>\r\n</ng-template>\r\n", dependencies: [{ kind: "component", type: i3$6.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-spinner', encapsulation: ViewEncapsulation.None, template: "<ng-template #progressSpinnerRef>\r\n  <mat-progress-spinner [color]=\"color\" [diameter]=\"diameter\" [mode]=\"mode\" [value]=\"value\"> </mat-progress-spinner>\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: ArqOverlayService }, { type: ArqSpinnerService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { color: [{
                type: Input
            }], diameter: [{
                type: Input
            }], mode: [{
                type: Input
            }], value: [{
                type: Input
            }], backdropEnabled: [{
                type: Input
            }], positionGloballyCenter: [{
                type: Input
            }], displayProgressSpinner: [{
                type: Input
            }], progressSpinnerRef: [{
                type: ViewChild,
                args: ['progressSpinnerRef']
            }] } });

class ArqSpinnerModule {
}
ArqSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerModule, declarations: [ArqSpinnerComponent], imports: [ReactiveFormsModule,
        CommonModule,
        MatProgressSpinnerModule,
        OverlayModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        ClipboardModule,
        CdkMenuModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatStepperModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatGridListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
        DialogModule,
        MatDatepickerModule,
        MtxDatetimepickerModule,
        MtxMomentDatetimeModule,
        MatCardModule,
        MatTabsModule,
        MatChipsModule], exports: [ArqSpinnerComponent] });
ArqSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerModule, providers: [ArqSpinnerService, ArqOverlayService], imports: [ReactiveFormsModule,
        CommonModule,
        MatProgressSpinnerModule,
        OverlayModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        ClipboardModule,
        CdkMenuModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatStepperModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatGridListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
        DialogModule,
        MatDatepickerModule,
        MtxDatetimepickerModule,
        MtxMomentDatetimeModule,
        MatCardModule,
        MatTabsModule,
        MatChipsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSpinnerComponent],
                    exports: [ArqSpinnerComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatProgressSpinnerModule,
                        OverlayModule,
                        BrowserAnimationsModule,
                        CdkAccordionModule,
                        ClipboardModule,
                        CdkMenuModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatBadgeModule,
                        MatCheckboxModule,
                        MatStepperModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatGridListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressSpinnerModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatDividerModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTableModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        OverlayModule,
                        PortalModule,
                        ScrollingModule,
                        DialogModule,
                        MatDatepickerModule,
                        MtxDatetimepickerModule,
                        MtxMomentDatetimeModule,
                        MatCardModule,
                        MatTabsModule,
                        MatChipsModule
                    ],
                    providers: [ArqSpinnerService, ArqOverlayService]
                }]
        }] });

class ArqStepItemLabelComponent {
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

class ArqStepItemComponent {
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

class ArqStepGroupComponent extends ArqGenericInputComponent {
    constructor() {
        super(...arguments);
        this.duration = '2000';
        this.linear = false;
        this.orientation = 'horizontal';
        this.isEditable = false;
        this.position = 'top';
        this.labelPosition = 'bottom';
        this.isOptional = false;
        this.emitValue = new EventEmitter();
    }
    ngAfterContentInit() {
        this.appItems = this.contentItems;
    }
    selectionChange(evt) {
        this.emitValue.emit(evt);
    }
    next(control) {
        if (control && this.linear && !control.valid) {
            control.markAllAsTouched();
        }
    }
    comprobarEntradas() { }
}
ArqStepGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArqStepGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqStepGroupComponent, selector: "arq-step-group", inputs: { duration: "duration", linear: "linear", orientation: "orientation", isEditable: "isEditable", position: "position", labelPosition: "labelPosition", isOptional: "isOptional" }, outputs: { emitValue: "emitValue" }, queries: [{ propertyName: "contentItems", predicate: ArqStepItemComponent }], usesInheritance: true, ngImport: i0, template: "<mat-stepper\r\n  #stepper\r\n  [linear]=\"linear\"\r\n  [animationDuration]=\"duration\"\r\n  [headerPosition]=\"position\"\r\n  [labelPosition]=\"labelPosition\"\r\n  [orientation]=\"orientation\"\r\n  (selectionChange)=\"selectionChange($event)\">\r\n  <ng-template ngFor let-item [ngForOf]=\"appItems\" let-i=\"index\">\r\n    <mat-step [stepControl]=\"item.control\" [editable]=\"isEditable\">\r\n      <ng-template matStepLabel>\r\n        <ng-container *ngTemplateOutlet=\"item.itemLabel.labelTemplate\"></ng-container>\r\n      </ng-template>\r\n      <ng-template matStepContent>\r\n        <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n        <button *ngIf=\"item.btnBack\" mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"item.btnNext\" mat-button matStepperNext (click)=\"next(item.control)\">Next</button>\r\n      </ng-template>\r\n    </mat-step>\r\n  </ng-template>\r\n</mat-stepper>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2$7.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2$7.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2$7.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2$7.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2$7.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i2$7.MatStepContent, selector: "ng-template[matStepContent]" }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-step-group', encapsulation: ViewEncapsulation.None, template: "<mat-stepper\r\n  #stepper\r\n  [linear]=\"linear\"\r\n  [animationDuration]=\"duration\"\r\n  [headerPosition]=\"position\"\r\n  [labelPosition]=\"labelPosition\"\r\n  [orientation]=\"orientation\"\r\n  (selectionChange)=\"selectionChange($event)\">\r\n  <ng-template ngFor let-item [ngForOf]=\"appItems\" let-i=\"index\">\r\n    <mat-step [stepControl]=\"item.control\" [editable]=\"isEditable\">\r\n      <ng-template matStepLabel>\r\n        <ng-container *ngTemplateOutlet=\"item.itemLabel.labelTemplate\"></ng-container>\r\n      </ng-template>\r\n      <ng-template matStepContent>\r\n        <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n        <button *ngIf=\"item.btnBack\" mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"item.btnNext\" mat-button matStepperNext (click)=\"next(item.control)\">Next</button>\r\n      </ng-template>\r\n    </mat-step>\r\n  </ng-template>\r\n</mat-stepper>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], propDecorators: { duration: [{
                type: Input
            }], linear: [{
                type: Input
            }], orientation: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], position: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], isOptional: [{
                type: Input
            }], emitValue: [{
                type: Output
            }], contentItems: [{
                type: ContentChildren,
                args: [ArqStepItemComponent]
            }] } });

class ArqStepItemContentComponent {
}
ArqStepItemContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqStepItemContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqStepItemContentComponent, selector: "arq-step-item-content", ngImport: i0, template: "<div class=\"py-4\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepItemContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-step-item-content', encapsulation: ViewEncapsulation.None, template: "<div class=\"py-4\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }] });

class ArqStepperModule {
}
ArqStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqStepperModule, declarations: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent], imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatStepperModule, MatButtonModule], exports: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent] });
ArqStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepperModule, imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatStepperModule, MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent],
                    exports: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent],
                    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatStepperModule, MatButtonModule]
                }]
        }] });

class ArqTabItemHeaderComponent {
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

class ArqTabItemComponent {
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

class ArqTabGroupComponent {
    constructor() {
        this.selectedTabChangeOutput = new EventEmitter();
        this.selectedIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        timer(0).subscribe(() => {
            this.appItems = this.contentItems;
        });
    }
    changeTab(tabIdx) {
        this.tabGroup.selectedIndex = tabIdx;
    }
    getSelectedIndex() {
        var _a;
        return ((_a = this.tabGroup) === null || _a === void 0 ? void 0 : _a.selectedIndex) || 0;
    }
    selectedTabChange($event) {
        this.selectedTabChangeOutput.emit($event.index);
        if (this._selectedTabChange) {
            this._selectedTabChange($event.index);
        }
    }
}
ArqTabGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTabGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTabGroupComponent, selector: "arq-tab-group", inputs: { _selectedTabChange: ["selectedTabChange", "_selectedTabChange"] }, outputs: { selectedTabChangeOutput: "selectedTabChangeOutput", selectedIndexChange: "selectedIndexChange" }, queries: [{ propertyName: "contentItems", predicate: ArqTabItemComponent }], viewQueries: [{ propertyName: "tabGroup", first: true, predicate: MatTabGroup, descendants: true }], ngImport: i0, template: "<mat-tab-group\r\n  (selectedTabChange)=\"this.selectedTabChange($event)\"\r\n  (selectedIndexChange)=\"selectedIndexChange.next($event)\">\r\n  <mat-tab *ngFor=\"let item of appItems\">\r\n    <ng-template mat-tab-label>\r\n      <ng-container *ngTemplateOutlet=\"item.itemHeader.headerTemplate\"></ng-container>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mdc-tab-indicator--active>.mdc-tab-indicator{border:1px #11799b solid}.mat-mdc-tab-body{border-top:1px #11799b solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:0}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border:none}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$8.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i2$8.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2$8.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-tab-group', encapsulation: ViewEncapsulation.None, template: "<mat-tab-group\r\n  (selectedTabChange)=\"this.selectedTabChange($event)\"\r\n  (selectedIndexChange)=\"selectedIndexChange.next($event)\">\r\n  <mat-tab *ngFor=\"let item of appItems\">\r\n    <ng-template mat-tab-label>\r\n      <ng-container *ngTemplateOutlet=\"item.itemHeader.headerTemplate\"></ng-container>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mdc-tab-indicator--active>.mdc-tab-indicator{border:1px #11799b solid}.mat-mdc-tab-body{border-top:1px #11799b solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:0}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { contentItems: [{
                type: ContentChildren,
                args: [ArqTabItemComponent]
            }], _selectedTabChange: [{
                type: Input,
                args: ['selectedTabChange']
            }], selectedTabChangeOutput: [{
                type: Output,
                args: ['selectedTabChangeOutput']
            }], selectedIndexChange: [{
                type: Output,
                args: ['selectedIndexChange']
            }], tabGroup: [{
                type: ViewChild,
                args: [MatTabGroup]
            }] } });

class ArqTabItemContentComponent {
    constructor() { }
    ngOnInit() { }
}
ArqTabItemContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTabItemContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTabItemContentComponent, selector: "arq-tab-item-content", ngImport: i0, template: "<div class=\"py-4\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [""], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabItemContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-tab-item-content', encapsulation: ViewEncapsulation.None, template: "<div class=\"py-4\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; } });

class ArqTabModule {
}
ArqTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqTabModule, declarations: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent], imports: [ReactiveFormsModule, CommonModule, MatTabsModule], exports: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent] });
ArqTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabModule, imports: [ReactiveFormsModule, CommonModule, MatTabsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent],
                    exports: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatTabsModule]
                }]
        }] });

class ArqTextInputComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.maxLength = 100;
        this.disabled = false;
    }
    comprobarEntradas() { }
}
ArqTextInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTextInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTextInputComponent, selector: "arq-text-input", inputs: { maxLength: "maxLength", append: "append", disabled: "disabled" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-text\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly || this.disabled }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    class=\"input-text\"\r\n    matInput\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [disabled]=\"this.disabled\"\r\n    [formControl]=\"this.getValue()\"\r\n    [maxLength]=\"this.maxLength\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-text{border-radius:0%;width:100%;border:3px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-text-input', template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"input-text\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly || this.disabled }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <span *ngIf=\"!iconPrefix\" matPrefix>{{ prefix }}</span>\r\n  <mat-icon *ngIf=\"iconPrefix\" matPrefix>{{ prefix }}</mat-icon>\r\n  <input\r\n    class=\"input-text\"\r\n    matInput\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [disabled]=\"this.disabled\"\r\n    [formControl]=\"this.getValue()\"\r\n    [maxLength]=\"this.maxLength\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\" />\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n  <span *ngIf=\"!iconSuffix\" matSuffix>{{ suffix }}</span>\r\n  <mat-icon *ngIf=\"iconSuffix\" matSuffix>{{ suffix }}</mat-icon>\r\n</mat-form-field>\r\n", styles: [".input-text{border-radius:0%;width:100%;border:3px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { maxLength: [{
                type: Input
            }], append: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class ArqTextInputModule {
}
ArqTextInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqTextInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputModule, declarations: [ArqTextInputComponent], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule], exports: [ArqTextInputComponent] });
ArqTextInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputModule, imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqTextInputComponent],
                    exports: [ArqTextInputComponent],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqTextareaComponent extends ArqGenericInputComponent {
    constructor() {
        super();
        this.minHeight = 5;
        this.sizeInput = 'large';
    }
    comprobarEntradas() { }
}
ArqTextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTextareaComponent, selector: "arq-textarea", inputs: { maxLength: "maxLength", minHeight: "minHeight" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<p *ngIf=\"this.label\"></p>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"full-width\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <textarea\r\n    matInput\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    [attr.maxLength]=\"this.maxLength\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [rows]=\"this.minHeight\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\"></textarea>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: ArqFormControlErrorComponent, selector: "[arq-form-control-error]", inputs: ["labelControl", "errorMapMessages", "formControlSibling"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-textarea', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.label\"\r\n  >{{ this.label }}\r\n  <span *ngIf=\"this.getValidations()\" class=\"text-danger\"> * </span>\r\n</label>\r\n<p *ngIf=\"this.label\"></p>\r\n<mat-form-field\r\n  appearance=\"outline\"\r\n  class=\"full-width\"\r\n  [class]=\"sizeInput\"\r\n  [ngClass]=\"{ inputReadOnly: this.readonly }\"\r\n  *ngIf=\"this.getValue()\">\r\n  <textarea\r\n    matInput\r\n    [placeholder]=\"this.placeholder\"\r\n    [readonly]=\"this.readonly\"\r\n    [formControl]=\"this.getValue()\"\r\n    [attr.maxLength]=\"this.maxLength\"\r\n    #tooltip=\"matTooltip\"\r\n    [matTooltip]=\"this.message\"\r\n    [matTooltipPosition]=\"this.positionTooltip\"\r\n    [matTooltipHideDelay]=\"this.hideDelay\"\r\n    [rows]=\"this.minHeight\"\r\n    (change)=\"this.ngChanges()\"\r\n    (focusOut)=\"this.onFocusOutEvent($event)\"></textarea>\r\n  <mat-error arq-form-control-error [labelControl]=\"this.label\" [formControlSibling]=\"this.getValue()\"></mat-error>\r\n</mat-form-field>\r\n", styles: [".full-width{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { maxLength: [{
                type: Input
            }], minHeight: [{
                type: Input
            }] } });

class ArqTextareaModule {
}
ArqTextareaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqTextareaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, declarations: [ArqTextareaComponent], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        ArqFormControlErrorModule], exports: [ArqTextareaComponent] });
ArqTextareaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqTextareaComponent],
                    exports: [ArqTextareaComponent],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });

class ArqSubMenuComponent {
    constructor() {
        this.SelectedMenu = new EventEmitter();
    }
    ngOnInit() { }
    clickeventhandler(menu) {
        this.SelectedMenu.emit(menu);
    }
}
ArqSubMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSubMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSubMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSubMenuComponent, selector: "arq-submenu", inputs: { SubMenuItems: "SubMenuItems" }, outputs: { SelectedMenu: "SelectedMenu" }, viewQueries: [{ propertyName: "Submenuitem", first: true, predicate: ["Submenuitem"], descendants: true }], ngImport: i0, template: "<mat-menu #Submenuitem=\"matMenu\" [overlapTrigger]=\"false\" class=\"customize-mat-menu\">\r\n  <div *ngFor=\"let submenu of SubMenuItems\">\r\n    <span *ngIf=\"submenu.subItems && submenu.subItems.length > 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item [matMenuTriggerFor]=\"secondsubmenu.Submenuitem\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n      <arq-submenu (SelectedMenu)=\"clickeventhandler($event)\" #secondsubmenu [SubMenuItems]=\"submenu.subItems\">\r\n      </arq-submenu>\r\n    </span>\r\n    <span *ngIf=\"!submenu.subItems || submenu.subItems.length === 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item (click)=\"clickeventhandler(submenu)\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</mat-menu>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3$7.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3$7.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3$7.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: ArqSubMenuComponent, selector: "arq-submenu", inputs: ["SubMenuItems"], outputs: ["SelectedMenu"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSubMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-submenu', template: "<mat-menu #Submenuitem=\"matMenu\" [overlapTrigger]=\"false\" class=\"customize-mat-menu\">\r\n  <div *ngFor=\"let submenu of SubMenuItems\">\r\n    <span *ngIf=\"submenu.subItems && submenu.subItems.length > 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item [matMenuTriggerFor]=\"secondsubmenu.Submenuitem\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n      <arq-submenu (SelectedMenu)=\"clickeventhandler($event)\" #secondsubmenu [SubMenuItems]=\"submenu.subItems\">\r\n      </arq-submenu>\r\n    </span>\r\n    <span *ngIf=\"!submenu.subItems || submenu.subItems.length === 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item (click)=\"clickeventhandler(submenu)\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</mat-menu>\r\n" }]
        }], propDecorators: { SubMenuItems: [{
                type: Input
            }], Submenuitem: [{
                type: ViewChild,
                args: ['Submenuitem']
            }], SelectedMenu: [{
                type: Output
            }] } });

class ArqToolbarComponent {
    constructor(router, translocoService) {
        this.router = router;
        this.translocoService = translocoService;
        this.titleAlign = 'center';
        this.reloadOnLangChange = true;
        this.selectedEvent = new EventEmitter();
    }
    setSelectedItem(item) {
        if (item.routerLink) {
            this.router.navigate([item.routerLink]);
        }
        else {
            item.event();
        }
    }
    changeLang(lang) {
        var _a;
        localStorage.setItem('user-lang', lang.code);
        (_a = this.translocoService) === null || _a === void 0 ? void 0 : _a.setActiveLang(lang.code || 'es');
        if (this.reloadOnLangChange)
            location.reload();
        this.selectedEvent.emit(lang);
    }
    ngLogout() { }
}
ArqToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarComponent, deps: [{ token: i2$9.Router }, { token: i2.TranslocoService }], target: i0.ɵɵFactoryTarget.Component });
ArqToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqToolbarComponent, selector: "arq-toolbar", inputs: { menuItems: "menuItems", languages: "languages", title: "title", titleAlign: "titleAlign", user: "user", reloadOnLangChange: "reloadOnLangChange" }, outputs: { selectedEvent: "selectedEvent" }, ngImport: i0, template: "<mat-toolbar class=\"menu-bar mat-elevation-z1\">\r\n  <ng-container *ngIf=\"titleAlign == 'left' && title\">\r\n    <span>{{ title }}</span>\r\n    <span class=\"example-spacer\"></span>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"menuItems\">\r\n    <ng-container *ngFor=\"let basemenu of menuItems\">\r\n      <div *ngIf=\"basemenu.subItems && basemenu.subItems.length > 0; else elseMatMenu\">\r\n        <button mat-button class=\"btn-marte-menu\" [matMenuTriggerFor]=\"submenu.Submenuitem\">\r\n          <mat-icon *ngIf=\"basemenu.icon\" class=\"mr-1\">{{ basemenu.icon }}</mat-icon>\r\n          <span>{{ basemenu.label }}</span>\r\n        </button>\r\n        <arq-submenu #submenu (SelectedMenu)=\"setSelectedItem($event)\" [SubMenuItems]=\"basemenu.subItems\"></arq-submenu>\r\n      </div>\r\n      <ng-template #elseMatMenu>\r\n        <button mat-button class=\"btn-marte-menu\" (click)=\"setSelectedItem(basemenu)\">\r\n          <mat-icon class=\"mr-1\" *ngIf=\"basemenu.icon\">{{ basemenu.icon }}</mat-icon>\r\n          <span>{{ basemenu.label }}</span>\r\n        </button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"titleAlign == 'center' && title\">\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <span>{{ title }}</span>\r\n  </ng-container>\r\n\r\n  <span class=\"example-spacer\"></span>\r\n\r\n  <ng-container *ngIf=\"languages\">\r\n    <ng-container *ngFor=\"let language of languages\">\r\n      <a\r\n        class=\"item-lang\"\r\n        [ngClass]=\"{ 'border-lang': language.check, 'p-bottom': !language.check }\"\r\n        (click)=\"changeLang(language)\"\r\n        >{{ language.label }}\r\n      </a>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"titleAlign == 'right' && title\">\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <span>{{ title }}</span>\r\n  </ng-container>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"logout\">\r\n    <mat-icon>account_circle</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <ng-template ngFor let-item [ngForOf]=\"user\" let-i=\"index\">\r\n      <button mat-menu-item (click)=\"item.event()\">\r\n        <mat-icon>{{ item.icon }}</mat-icon>\r\n        <span>{{ item.text }}</span>\r\n      </button>\r\n    </ng-template>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n", styles: [".example-spacer{flex:1 1 auto}.menu-bar{background-color:#19aee0;color:#fff}.menu-arq{height:7%;background-color:#19aee0}.btn-marte-menu{display:flex;justify-content:center;align-items:center;font-size:18px;color:#fff;background-color:#19aee0;border-radius:0;margin:0 5px 0 0}.btn-marte-menu:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}.btn-marte-menu[disabled]{color:#fff;background-color:#acacac}.item-lang{font-size:16px;padding:0 7px;cursor:pointer;color:#fff}.item-lang:hover{color:#fff;text-decoration:none;background-color:#0c556d}.border-lang{border-bottom:2px solid}.border-lang:hover{background-color:transparent}.p-bottom{padding-bottom:2px}.customize-mat-menu .mat-mdc-menu-content .mat-mdc-menu-item .mdc-list-item__primary-text{font-size:16px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4$4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3$7.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3$7.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3$7.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: ArqSubMenuComponent, selector: "arq-submenu", inputs: ["SubMenuItems"], outputs: ["SelectedMenu"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-toolbar', encapsulation: ViewEncapsulation.None, template: "<mat-toolbar class=\"menu-bar mat-elevation-z1\">\r\n  <ng-container *ngIf=\"titleAlign == 'left' && title\">\r\n    <span>{{ title }}</span>\r\n    <span class=\"example-spacer\"></span>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"menuItems\">\r\n    <ng-container *ngFor=\"let basemenu of menuItems\">\r\n      <div *ngIf=\"basemenu.subItems && basemenu.subItems.length > 0; else elseMatMenu\">\r\n        <button mat-button class=\"btn-marte-menu\" [matMenuTriggerFor]=\"submenu.Submenuitem\">\r\n          <mat-icon *ngIf=\"basemenu.icon\" class=\"mr-1\">{{ basemenu.icon }}</mat-icon>\r\n          <span>{{ basemenu.label }}</span>\r\n        </button>\r\n        <arq-submenu #submenu (SelectedMenu)=\"setSelectedItem($event)\" [SubMenuItems]=\"basemenu.subItems\"></arq-submenu>\r\n      </div>\r\n      <ng-template #elseMatMenu>\r\n        <button mat-button class=\"btn-marte-menu\" (click)=\"setSelectedItem(basemenu)\">\r\n          <mat-icon class=\"mr-1\" *ngIf=\"basemenu.icon\">{{ basemenu.icon }}</mat-icon>\r\n          <span>{{ basemenu.label }}</span>\r\n        </button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"titleAlign == 'center' && title\">\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <span>{{ title }}</span>\r\n  </ng-container>\r\n\r\n  <span class=\"example-spacer\"></span>\r\n\r\n  <ng-container *ngIf=\"languages\">\r\n    <ng-container *ngFor=\"let language of languages\">\r\n      <a\r\n        class=\"item-lang\"\r\n        [ngClass]=\"{ 'border-lang': language.check, 'p-bottom': !language.check }\"\r\n        (click)=\"changeLang(language)\"\r\n        >{{ language.label }}\r\n      </a>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"titleAlign == 'right' && title\">\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <span>{{ title }}</span>\r\n  </ng-container>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"logout\">\r\n    <mat-icon>account_circle</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <ng-template ngFor let-item [ngForOf]=\"user\" let-i=\"index\">\r\n      <button mat-menu-item (click)=\"item.event()\">\r\n        <mat-icon>{{ item.icon }}</mat-icon>\r\n        <span>{{ item.text }}</span>\r\n      </button>\r\n    </ng-template>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n", styles: [".example-spacer{flex:1 1 auto}.menu-bar{background-color:#19aee0;color:#fff}.menu-arq{height:7%;background-color:#19aee0}.btn-marte-menu{display:flex;justify-content:center;align-items:center;font-size:18px;color:#fff;background-color:#19aee0;border-radius:0;margin:0 5px 0 0}.btn-marte-menu:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}.btn-marte-menu[disabled]{color:#fff;background-color:#acacac}.item-lang{font-size:16px;padding:0 7px;cursor:pointer;color:#fff}.item-lang:hover{color:#fff;text-decoration:none;background-color:#0c556d}.border-lang{border-bottom:2px solid}.border-lang:hover{background-color:transparent}.p-bottom{padding-bottom:2px}.customize-mat-menu .mat-mdc-menu-content .mat-mdc-menu-item .mdc-list-item__primary-text{font-size:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: i2$9.Router }, { type: i2.TranslocoService }]; }, propDecorators: { menuItems: [{
                type: Input
            }], languages: [{
                type: Input
            }], title: [{
                type: Input
            }], titleAlign: [{
                type: Input
            }], user: [{
                type: Input
            }], reloadOnLangChange: [{
                type: Input
            }], selectedEvent: [{
                type: Output
            }] } });

class ArqToolbarModule {
}
ArqToolbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqToolbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarModule, declarations: [ArqToolbarComponent, ArqSubMenuComponent], imports: [ReactiveFormsModule, CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule], exports: [ArqToolbarComponent, ArqSubMenuComponent] });
ArqToolbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarModule, imports: [ReactiveFormsModule, CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqToolbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqToolbarComponent, ArqSubMenuComponent],
                    exports: [ArqToolbarComponent, ArqSubMenuComponent],
                    imports: [ReactiveFormsModule, CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule]
                }]
        }] });

class ArqUploadFilesComponent {
    constructor() {
        this.multiple = true;
        this.selectedFiles = [];
        this.showProgress = false;
    }
    ngOnInit() { }
    selectFiles(event) {
        var _a;
        this.selectedFiles = event.target.files;
        this.txtLabel = this.customLabel((_a = this.selectedFiles) === null || _a === void 0 ? void 0 : _a.length);
    }
    cancelUpload() {
        this.selectedFiles = [];
        this.showProgress = false;
        this.config.cancelUpload();
    }
    uploadFiles() {
        this.showProgress = true;
        if (this.selectedFiles) {
            const formData = new FormData();
            for (var i = 0; i < this.selectedFiles.length; i++) {
                formData.append('file', this.selectedFiles[i]);
            }
            this.upload(formData);
        }
    }
    upload(files) {
        if (files) {
            this.config.uploadFile(files).subscribe((resp) => {
                this.response = resp;
                this.selectedFiles = [];
                this.showProgress = false;
            });
        }
    }
    customLabel(num) {
        const str = num > 1 ? ' archivos' : ' archivo';
        const label = num + str;
        return label;
    }
}
ArqUploadFilesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqUploadFilesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqUploadFilesComponent, selector: "arq-upload-files", inputs: { config: "config", label: "label", multiple: "multiple" }, ngImport: i0, template: "<div class=\"row align-items-center\">\r\n  <div class=\"col-8\">\r\n    <input #file type=\"file\" [multiple]=\"multiple\" (change)=\"selectFiles($event)\" class=\"file-input\" />\r\n\r\n    <div class=\"file-upload\">\r\n      <button mat-mini-fab color=\"primary\" class=\"upload-btn\" (click)=\"file.click()\">\r\n        <mat-icon>attach_file</mat-icon>\r\n      </button>\r\n      <div *ngIf=\"selectedFiles?.length == 0; else elseBlock\">\r\n        <span class=\"d-flex justify-content-center align-items-center name\">{{ label }}</span>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <span class=\"d-flex justify-content-center align-items-center\">{{ txtLabel }}</span>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4\">\r\n    <button\r\n      mat-raised-button\r\n      class=\"btn btn-success btn-sm\"\r\n      [disabled]=\"selectedFiles.length == 0\"\r\n      (click)=\"uploadFiles()\">\r\n      Subir archivos\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showProgress\" class=\"mt-4\">\r\n  <div *ngFor=\"let item of selectedFiles\" class=\"d-flex align-items-center my-2\">\r\n    <span> {{ item.name }} </span>\r\n  </div>\r\n  <div class=\"progress\">\r\n    <mat-progress-bar class=\"progress-bar\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-icon class=\"cancel-upload\" (click)=\"cancelUpload()\">delete_forever</mat-icon>\r\n  </div>\r\n</div>\r\n", styles: [".file-input{display:none}.progress{display:flex;justify-content:center;align-items:center}.file-upload{display:flex;align-items:center}.file-upload .name{padding-left:1em}.cancel-upload{cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$2.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-upload-files', encapsulation: ViewEncapsulation.None, template: "<div class=\"row align-items-center\">\r\n  <div class=\"col-8\">\r\n    <input #file type=\"file\" [multiple]=\"multiple\" (change)=\"selectFiles($event)\" class=\"file-input\" />\r\n\r\n    <div class=\"file-upload\">\r\n      <button mat-mini-fab color=\"primary\" class=\"upload-btn\" (click)=\"file.click()\">\r\n        <mat-icon>attach_file</mat-icon>\r\n      </button>\r\n      <div *ngIf=\"selectedFiles?.length == 0; else elseBlock\">\r\n        <span class=\"d-flex justify-content-center align-items-center name\">{{ label }}</span>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <span class=\"d-flex justify-content-center align-items-center\">{{ txtLabel }}</span>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-4\">\r\n    <button\r\n      mat-raised-button\r\n      class=\"btn btn-success btn-sm\"\r\n      [disabled]=\"selectedFiles.length == 0\"\r\n      (click)=\"uploadFiles()\">\r\n      Subir archivos\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showProgress\" class=\"mt-4\">\r\n  <div *ngFor=\"let item of selectedFiles\" class=\"d-flex align-items-center my-2\">\r\n    <span> {{ item.name }} </span>\r\n  </div>\r\n  <div class=\"progress\">\r\n    <mat-progress-bar class=\"progress-bar\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-icon class=\"cancel-upload\" (click)=\"cancelUpload()\">delete_forever</mat-icon>\r\n  </div>\r\n</div>\r\n", styles: [".file-input{display:none}.progress{display:flex;justify-content:center;align-items:center}.file-upload{display:flex;align-items:center}.file-upload .name{padding-left:1em}.cancel-upload{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], label: [{
                type: Input
            }], multiple: [{
                type: Input
            }] } });

class ArqUploadFilesDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
    }
    cancel() {
        this.close(false);
    }
    close(value) {
        this.mdDialogRef.close(value);
    }
    confirm() {
        this.close(true);
    }
    onEsc() {
        this.close(false);
    }
}
ArqUploadFilesDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogComponent, deps: [{ token: MAT_DIALOG_DATA, optional: true }, { token: i1$3.MatDialogRef, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ArqUploadFilesDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqUploadFilesDialogComponent, selector: "arq-upload-files-dialog", inputs: { config: "config" }, host: { listeners: { "keydown.esc": "onEsc()" } }, ngImport: i0, template: "<div class=\"custom-class-dialog p-3\">\r\n  <div class=\"my-4\">\r\n    <arq-upload-files [config]=\"data.config\" [label]=\"data.label\"></arq-upload-files>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: ArqUploadFilesComponent, selector: "arq-upload-files", inputs: ["config", "label", "multiple"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-upload-files-dialog', encapsulation: ViewEncapsulation.None, template: "<div class=\"custom-class-dialog p-3\">\r\n  <div class=\"my-4\">\r\n    <arq-upload-files [config]=\"data.config\" [label]=\"data.label\"></arq-upload-files>\r\n  </div>\r\n\r\n  <div align=\"end\">\r\n    <button mat-button *ngIf=\"data.cancelBtn\" class=\"btn btn-cancel\" style=\"margin-right: 10px\" (click)=\"cancel()\">\r\n      {{ data.textCancel }}\r\n    </button>\r\n    <button mat-raised-button *ngIf=\"data.confirmBtn\" color=\"primary\" class=\"btn\" (click)=\"confirm()\" cdkFocusInitial>\r\n      {{ data.textConfirm }}\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [".custom-class-dialog{min-width:30em}@media screen and (max-width: 768px){.custom-class-dialog{min-width:17em}}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: i1$3.MatDialogRef, decorators: [{
                        type: Optional
                    }] }];
    }, propDecorators: { config: [{
                type: Input
            }], onEsc: [{
                type: HostListener,
                args: ['keydown.esc']
            }] } });

class ArqUploadFilesModule {
}
ArqUploadFilesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqUploadFilesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesModule, declarations: [ArqUploadFilesComponent], imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule], exports: [ArqUploadFilesComponent] });
ArqUploadFilesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesModule, imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqUploadFilesComponent],
                    exports: [ArqUploadFilesComponent],
                    imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule]
                }]
        }] });

class ArqUploadFilesDialogModule {
}
ArqUploadFilesDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqUploadFilesDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogModule, declarations: [ArqUploadFilesDialogComponent], imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, ArqUploadFilesModule], exports: [ArqUploadFilesDialogComponent] });
ArqUploadFilesDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogModule, imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, ArqUploadFilesModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqUploadFilesDialogComponent],
                    exports: [ArqUploadFilesDialogComponent],
                    imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, ArqUploadFilesModule]
                }]
        }] });

class customValidators {
    static arrayMinItems(min, type) {
        return (control) => {
            if (type == 'array' && control.value !== undefined && (isNaN(control.value) || control.value.length < min)) {
                return { 'minItems': true };
            }
            return null;
        };
    }
    static arrayMaxItems(max, type) {
        return (control) => {
            if (type == 'array' && control.value !== undefined && (isNaN(control.value) || control.value.length > max)) {
                return { 'maxItems': true };
            }
            return null;
        };
    }
    static arrayUniqueItems(unique, type) {
        return (control) => {
            if (control.value !== undefined && unique && (checkIfDuplicateExists(control.value))) {
                return { 'maxItems': true };
            }
            return null;
        };
    }
    static numberExclusiveMaximum(max, type) {
        return (control) => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value >= max)) {
                return { 'exclusiveMaximum': true };
            }
            return null;
        };
    }
    static numberExclusiveMinimum(min, type) {
        return (control) => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value <= min)) {
                return { 'exclusiveMinimum': true };
            }
            return null;
        };
    }
    static numberMinimum(min, type) {
        return (control) => {
            console.log(isNaN(control.value) || control.value >= min);
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value < min)) {
                return { 'minimum': true };
            }
            return null;
        };
    }
    static numberMaximum(max, type) {
        return (control) => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value > max)) {
                return { 'maximum': true };
            }
            return null;
        };
    }
    static numberMultipleOf(multiplo, type) {
        return (control) => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value % multiplo != 0)) {
                return { 'multipleOf': true };
            }
            return null;
        };
    }
}
function checkIfDuplicateExists(arr) {
    return new Set(arr).size != arr.length;
}

class ArqSchemaService {
    constructor() { }
    /**
     * Generate Form Group with schema validations.
     */
    _parseSchema(schemaObject, customValidations) {
        var _a;
        const bindigProperties = {};
        if (schemaObject) {
            const propNames = Object.getOwnPropertyNames(schemaObject === null || schemaObject === void 0 ? void 0 : schemaObject.properties);
            for (let i = 0; i < propNames.length; i++) {
                if ('$ref' in schemaObject.properties[propNames[i]]) {
                    //Buscamos la referencia
                    /*bindigProperties[propNames[i]] = [
                        this._parseSchema(this.findRef(schemaObject, propNames[i]), customValidations)
                      ];*/
                    continue;
                }
                if (schemaObject.properties[propNames[i]].type === 'array' &&
                    !('$ref' in schemaObject.properties[propNames[i]].items)) {
                    if ((_a = schemaObject.properties[propNames[i]].items) === null || _a === void 0 ? void 0 : _a.properties) {
                        bindigProperties[propNames[i]] = [
                            this._parseSchema(schemaObject.properties[propNames[i]].items, customValidations)
                        ];
                    }
                    else {
                        bindigProperties[propNames[i]] = [this._createValidation(propNames[i], [], schemaObject, [])];
                    }
                    continue;
                }
                if (schemaObject.properties[propNames[i]].type !== 'object' ||
                    this._isListAngularDto(schemaObject.properties[propNames[i]])) {
                    let AddValidations = null;
                    if (customValidations && customValidations.hasOwnProperty(propNames[i])) {
                        AddValidations = customValidations[propNames[i]];
                    }
                    bindigProperties[propNames[i]] = this._createValidation(propNames[i], schemaObject.properties[propNames[i]], schemaObject, AddValidations);
                    continue;
                }
                bindigProperties[propNames[i]] = this._collect(this._parseSchema(schemaObject.properties[propNames[i]], customValidations));
            }
        }
        return bindigProperties;
    }
    _isListAngularDto(property) {
        return (property.type === 'object' &&
            property.properties.hasOwnProperty('value') &&
            property.properties.hasOwnProperty('description') &&
            property.properties.hasOwnProperty('descriptionV'));
    }
    _collect(bindingPropertires, schemaObject) {
        const ret = {};
        const len = arguments.length;
        for (let i = 0; i < len; i++) {
            for (const p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    }
    _createValidation(property, properties, schema, customValidations) {
        let validationRules = [];
        if (customValidations) {
            validationRules = customValidations;
        }
        if (this._isPropertyRequired(schema, property)) {
            validationRules.push(Validators.required);
        }
        if (properties['minLength'] != null) {
            validationRules.push(Validators.minLength(properties['minLength']));
        }
        if (properties['maxLength']) {
            validationRules.push(Validators.maxLength(properties['maxLength']));
        }
        if (properties['maximum']) {
            validationRules.push(Validators.max(properties['maximum']));
        }
        if (properties['minimum'] != null) {
            validationRules.push(Validators.min(properties['minimum']));
        }
        if (properties['readOnly']) {
            validationRules.push((control) => {
                return control.disable();
            });
        }
        if (properties['format']) {
            if (properties['format'] === 'email') {
                validationRules.push(Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i));
            }
            // TODO: add date validation
            // validationRules.push(Validators.min(properties["minimums"]));
        }
        if (properties['pattern']) {
            validationRules.push(Validators.pattern(properties['pattern']));
        }
        if (properties['minItems']) {
            validationRules.push(customValidators.arrayMinItems(properties['minItems'], properties['type']));
        }
        if (properties['maxItems']) {
            validationRules.push(customValidators.arrayMaxItems(properties['maxItems'], properties['type']));
        }
        if (properties['uniqueItems']) {
            validationRules.push(customValidators.arrayUniqueItems(properties['uniqueItems'], properties['type']));
        }
        if (properties['exclusiveMaximum']) {
            validationRules.push(customValidators.numberExclusiveMaximum(properties['exclusiveMaximum'], properties['type']));
        }
        if (properties['exclusiveMinimum']) {
            validationRules.push(customValidators.numberExclusiveMinimum(properties['exclusiveMinimum'], properties['type']));
        }
        if (properties['multipleOf']) {
            validationRules.push(customValidators.numberMultipleOf(properties['multipleOf'], properties['type']));
        }
        return ['', validationRules];
    }
    /**
     * @param schema
     * @param property
     */
    _isPropertyRequired(schema, property) {
        return schema.required && schema.required.indexOf(property) !== -1;
    }
    fillModelWithDefaultValues(model, schema) {
        if (schema) {
            model = Object.assign(model, schema.value);
        }
        else {
            console.log("Sin valor 'empty'");
        }
    }
}
ArqSchemaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSchemaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqSchemaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSchemaService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSchemaService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AuthService {
    constructor() {
        this.user$ = new BehaviorSubject(undefined);
    }
    /** Cierra la sesión del usuario activo */
    logout(gvLoginUrl, urlRedirect) {
        //TODO: se utiliza es en la version 7.2 this.user$.next(undefined);
        this.user$.closed;
    }
    /**
     * Obtiene un stream que emite el usuario con la sesión activa
     * @returns Observable que emite el usuario activo
     */
    getUser() {
        return this.user$.asObservable();
    }
    /**
     * Comprueba si el usuario activo posee alguno de los roles indicados
     * @param roles Lista de roles a comprobar
     */
    hasAnyRole(roles) {
        const currentUser = this.user$.value;
        return currentUser !== undefined && currentUser.roles.some(userRole => roles.includes(userRole.codigo));
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const TOKEN_KEY = 'gvlogin-token';
const TOKEN_MARTE = 'peticion-marte';
const TOKEN_MARTE_FORMULARIO_SELECCION = 'peticion-marte-formulario-seleccion';
const TOKEN_PERSONALIZADO = 'token-personalizado';
const IDPET = 'idPet';
const IDSEL = 'idSel';
// const GVLOGIN_DESA: string = 'https://gvlogin-dsa.gva.es/gvlogin';
// const GVLOGIN_PRE: string = 'https://gvlogin-pre.gva.es/gvlogin';
// const GVLOGIN_PROD: string = 'https://gvlogin.gva.es/gvlogin';
class ArqGvloginService extends AuthService {
    //environment.gvlogin.url
    //environment.gvlogin.aplicacion
    constructor(jwtHelper, activatedRoute, router, _apiService, cookieservice) {
        super();
        this.jwtHelper = jwtHelper;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._apiService = _apiService;
        this.cookieservice = cookieservice;
        this.cargarToken();
    }
    cargarToken() {
        this.activatedRoute.queryParams.pipe(filter(params => !!params['token'])).subscribe(params => {
            this.setToken(params['token']);
            this.cleanUrl(params, 'token', this.router.url);
        });
        const existingToken = localStorage.getItem(TOKEN_KEY);
        if (existingToken) {
            this.setToken(existingToken);
        }
    }
    isLogged() {
        return !!this.user$.value;
    }
    /**
     * Redirige a la aplicación de gvLogin para iniciar sesión
     */
    login(url, nombreApp, gvloginUrl, urlRedirect) {
        //Obtener entorno + Obtener nombre APP
        // let entorno = '';
        // let nombreApp = url
        //   .split('/')[3] //nos quedamos con la segunda parte de la URL
        //   .split(/(?:\/|-|\.)+/)[0]
        //   .toUpperCase();
        // let gvloginUrl = GVLOGIN_DESA;
        // console.log(url);
        // if (url.includes('dsa') || url.includes('localhost')) {
        //   gvloginUrl = GVLOGIN_DESA;
        // } else if (url.includes('pre')) {
        //   gvloginUrl = GVLOGIN_PRE;
        // } else {
        //   gvloginUrl = GVLOGIN_PROD;
        // }
        // console.log(nombreApp);
        const redirectURI = urlRedirect ? urlRedirect : encodeURIComponent(window.location.href);
        const gvloginFinalUrl = `${gvloginUrl}/login.xhtml?jwt=true&app=${nombreApp}&url=${redirectURI}`;
        //console.log(gvloginFinalUrl);
        if (nombreApp) {
            localStorage.removeItem(TOKEN_MARTE);
            window.location.href = gvloginFinalUrl;
        }
    }
    /**
     * Cierra la sesión del usuario
     */
    logout(gvLoginUrl, urlRedirect) {
        super.logout(gvLoginUrl, urlRedirect);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_MARTE);
        this.cookieservice.deleteAll('/', '.gva.es');
        const redirectURI = urlRedirect ? urlRedirect : encodeURIComponent(window.location.href);
        const gvloginUrl = `${gvLoginUrl}/logout?callbackUrl=${redirectURI}`;
        window.location.href = gvloginUrl;
    }
    setToken(token) {
        this.storeToken(token);
        const tokenData = this.extractTokenData(token);
        this.setCurrentUser(tokenData);
    }
    cleanUrl(params, param, url) {
        const queryParams = Object.assign({}, params);
        delete queryParams[param];
        this.router.navigate([url === null || url === void 0 ? void 0 : url.split('?')[0]], { queryParams });
    }
    storeToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }
    getTokenPetMarte() {
        let token = localStorage.getItem(TOKEN_MARTE);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getTokenSelMarte() {
        let token = localStorage.getItem(TOKEN_MARTE_FORMULARIO_SELECCION);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getTokenPersonalizado() {
        let token = localStorage.getItem(TOKEN_PERSONALIZADO);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getToken() {
        let token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getIdPet() {
        let idPet = localStorage.getItem(IDPET);
        if (!idPet) {
            idPet = 'NO ID PET';
        }
        return idPet;
    }
    getIdSel() {
        let idSel = localStorage.getItem(IDSEL);
        if (!idSel) {
            idSel = 'NO ID SEL';
        }
        return idSel;
    }
    storeTokenPetMarte(token) {
        if (token) {
            localStorage.setItem(TOKEN_MARTE, token);
        }
    }
    storeTokenPetMarteFormularioSeleccion(token) {
        if (token) {
            localStorage.setItem(TOKEN_MARTE_FORMULARIO_SELECCION, token);
        }
    }
    storeIdPetMarte(idpet) {
        if (idpet) {
            localStorage.setItem(IDPET, idpet);
        }
    }
    storeIdSelMarte(idsel) {
        if (idsel) {
            localStorage.setItem(IDPET, idsel);
        }
    }
    storeTokenPersonalizado(token) {
        if (token) {
            localStorage.setItem(TOKEN_PERSONALIZADO, token);
        }
    }
    extractTokenData(token) {
        return this.jwtHelper.decodeToken(token);
    }
    setCurrentUser(data) {
        if (data) {
            const user = {
                nombre: data.given_name,
                apellidos: data.family_name,
                email: data.email,
                roles: data.rol || []
            };
            this.user$.next(user);
        }
    }
    mostrarInfoTokenMarte(host) {
        return this._apiService.get(host + '/api/marte/v1/peticiontokeninfo');
    }
    buscarTokenJWT(nombreApp, gvLoginUrl) {
        if (nombreApp && gvLoginUrl) {
            let datos = {
                idAplicacion: nombreApp,
                tokenSSO: this.cookieservice.get('gvlogin.login.GVLOGIN_COOKIE')
            };
            this._apiService
                .post(gvLoginUrl + '-ws/rest/restJwt/crearTokenJwtSSO', datos) //data['gvloginUrl']
                .pipe(map$1((token) => {
                console.log(token.tokenJwt);
                // sustituir el token de GVLogin por el de esta respuesta
                if (token.tokenJwt) {
                    this.setToken(token.tokenJwt);
                }
            }), catchError((err, caught) => {
                console.log(err);
                return EMPTY;
            }))
                .subscribe();
        }
    }
}
ArqGvloginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService, deps: [{ token: i1$7.JwtHelperService }, { token: i2$9.ActivatedRoute }, { token: i2$9.Router }, { token: ArqApiService }, { token: i4$6.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqGvloginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$7.JwtHelperService }, { type: i2$9.ActivatedRoute }, { type: i2$9.Router }, { type: ArqApiService }, { type: i4$6.CookieService }]; } });

const nombreApp = new HttpContextToken(() => '');
const gvloginUrl = new HttpContextToken(() => '');
const enableJWT = new HttpContextToken(() => true);
const urlRedirect = new HttpContextToken(() => '');
const tokenPerso = new HttpContextToken(() => '');
const enable = new HttpContextToken(() => true);
class ArqGvloginInterceptorService {
    constructor(auth, injector, jwtHelper, _translocoService, cookieservice) {
        this.auth = auth;
        this.injector = injector;
        this.jwtHelper = jwtHelper;
        this._translocoService = _translocoService;
        this.cookieservice = cookieservice;
    }
    intercept(request, next) {
        var _a;
        if (this.isRefreshNeeded(request)) {
            if (request.context.get(enable)) {
                if (this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') &&
                    request.context.get(enableJWT) &&
                    !this.isTokenExpired()) {
                    this.auth.buscarTokenJWT(request.context.get(nombreApp), request.context.get(gvloginUrl));
                }
                else {
                    this.auth.login(request.url, request.context.get(nombreApp), request.context.get(gvloginUrl), request.context.get(urlRedirect));
                }
            }
        }
        if (request.url.includes('/api')) {
            //Anyadimos el token de Marte
            const clonedRequest = request.clone({
                headers: request.headers
                    .set('x-peticion-marte', this.auth.getTokenPetMarte())
                    .set('x-peticion-marte-formulario-seleccion', this.auth.getTokenSelMarte())
                    .set('x-token-personalizado', this.auth.getTokenPersonalizado())
                    .set('Authorization', 'Bearer ' + this.auth.getToken())
                    .set('Content-Language', ((_a = this._translocoService) === null || _a === void 0 ? void 0 : _a.getActiveLang()) == 'ca' ? 'ca-ES' : 'es-ES')
            });
            return next.handle(clonedRequest);
        }
        return next.handle(request);
    }
    isRefreshNeeded(request) {
        const isRefreshNeeded = this.auth.getToken() == 'NO TOKEN' || this.isTokenExpired(); //&&
        // environment.gvlogin.whitelistedDomains.some(domain => request.url.includes(domain));
        // &&
        return isRefreshNeeded;
    }
    isTokenExpired() {
        if (this.auth.getToken() === 'NO TOKEN') {
            return false;
        }
        return this.jwtHelper.isTokenExpired(this.auth.getToken());
    }
}
ArqGvloginInterceptorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService, deps: [{ token: ArqGvloginService }, { token: i0.Injector }, { token: i1$7.JwtHelperService }, { token: i2.TranslocoService }, { token: i4$6.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqGvloginInterceptorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ArqGvloginService }, { type: i0.Injector }, { type: i1$7.JwtHelperService }, { type: i2.TranslocoService }, { type: i4$6.CookieService }]; } });

/**
 * Base service for every CRUD Service
 */
class Service {
    constructor() { }
    getURIEntityBase(host, params) {
        return host + '/api/' + this.getURIEntity(params);
    }
    getURIEntityBasePublica(host, params) {
        return host + '/apipublica/' + this.getURIEntity(params);
    }
}
Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const DEBOUNCE_TIME = 500; // Tiempo para que no salten mensajes duplicados automáticamente
class ArqSnackbarEmitedMessage {
    constructor(_message, _title) {
        this._message = _message;
        this._title = _title;
        this._lastTime = 0;
    }
    shouldEmit(message, title) {
        let currentTime = new Date().getTime();
        const emited = this._message === message && this._title === title && currentTime - this._lastTime < DEBOUNCE_TIME;
        if (!emited) {
            this.register(currentTime, message, title);
        }
        return !emited;
    }
    register(currentTime, message, title) {
        this._lastTime = currentTime;
        this._message = message;
        this._title = title;
    }
}

class ArqSnackBarService {
    constructor(toastr) {
        this.toastr = toastr;
        this.optionsDefault = {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right'
        };
        this.lastSuccess = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastError = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastInfo = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastWarning = new ArqSnackbarEmitedMessage(undefined, undefined);
    }
    showSuccess(message, title, options) {
        if (this.lastSuccess.shouldEmit(message, title)) {
            this.toastr.success(message, title, options ? options : this.optionsDefault);
        }
    }
    showError(message, title, options) {
        if (this.lastError.shouldEmit(message, title)) {
            this.toastr.error(message, title, options ? options : this.optionsDefault);
        }
    }
    showInfo(message, title, options) {
        if (this.lastInfo.shouldEmit(message, title)) {
            this.toastr.info(message, title, options ? options : this.optionsDefault);
        }
    }
    showWarning(message, title, options) {
        if (this.lastWarning.shouldEmit(message, title)) {
            this.toastr.warning(message, title, options ? options : this.optionsDefault);
        }
    }
}
ArqSnackBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, deps: [{ token: i1$5.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqSnackBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$5.ToastrService }]; } });

const NOM_APP = new InjectionToken('NOM_APP');
const GVLOGIN = new InjectionToken('GVLOGIN');
class ArqApiService extends Service {
    getURIEntity(params) {
        throw new Error('El metodo "getURIEntity" debe ser sobreescrito');
    }
    schema(idBloque) {
        throw new Error('El metodo "schema" debe ser sobreescrito');
    }
    validations(controls) {
        throw new Error('El metodo "validations" debe ser sobreescrito');
    }
    constructor(_spinnerParam, _httpParam, _snackbarParam) {
        super();
        this._spinnerParam = _spinnerParam;
        this._httpParam = _httpParam;
        this._snackbarParam = _snackbarParam;
        this._spinner = _spinnerParam ? _spinnerParam : inject(ArqSpinnerService);
        this._http = _httpParam ? _httpParam : inject(HttpClient);
        this._snackbar = _snackbarParam ? _snackbarParam : inject(ArqSnackBarService);
    }
    getUrlParams(params) {
        return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
     */
    get(url, params, tipoRespuesta) {
        let data = new Observable();
        const resp = tipoRespuesta ? tipoRespuesta : 'json';
        if (tipoRespuesta && !['arraybuffer', 'blob', 'json', 'text'].includes(tipoRespuesta)) {
            console.error("Tipo de respuesta NO ADMITIDO. Los valores admitidos son 'arraybuffer','blob','json','text' ");
            return of();
        }
        if (url) {
            if (params) {
                url += '?' + this.getUrlParams(params);
            }
            this.preRequest();
            data = new Observable(observer => {
                this._http
                    .get(url, {
                    //observe: 'response',
                    responseType: resp,
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, false);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return data;
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
     */
    getText(url, params) {
        let data = new Observable();
        if (url) {
            if (params) {
                url += this.getUrlParams(params);
            }
            this.preRequest();
            data = new Observable(observer => {
                this._http
                    .get(url, {
                    observe: 'response',
                    responseType: 'text',
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, false);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return data;
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.post()`
     */
    post(url, data, tipoRespuesta) {
        let obs = new Observable();
        const resp = tipoRespuesta ? tipoRespuesta : 'json';
        if (tipoRespuesta && !['arraybuffer', 'blob', 'json', 'text'].includes(tipoRespuesta)) {
            console.error("Tipo de respuesta NO ADMITID. Los valores admitidos son 'arraybuffer','blob','json','text' ");
            return of();
        }
        if (url) {
            this.preRequest();
            obs = new Observable(observer => {
                this._http
                    .post(url, data, {
                    //observe: 'response',
                    responseType: resp,
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, true);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return obs;
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.patch()`
     */
    patch(url, data) {
        let obs = new Observable();
        if (url) {
            this.preRequest();
            obs = new Observable(observer => {
                this._http
                    .patch(url, data, {
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, true);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return obs;
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.put()`
     */
    put(url, data) {
        let obs = new Observable();
        if (url) {
            this.preRequest();
            obs = new Observable(observer => {
                this._http
                    .put(url, data, {
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, true);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return obs;
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.delete()`
     */
    delete(url, data) {
        let obs = new Observable();
        if (url) {
            this.preRequest();
            obs = new Observable(observer => {
                this._http
                    .delete(url + `/${data}`, {
                    context: new HttpContext()
                        .set(nombreApp, this.nombreApp)
                        .set(gvloginUrl, this.gvloginUrl)
                        .set(enableJWT, this.enableJWT)
                        .set(enable, this.enable)
                        .set(urlRedirect, this.urlRedirect)
                        .set(tokenPerso, this.tokenPerso)
                })
                    .subscribe({
                    next: result => {
                        this.handleSuccess(observer, result, true);
                    },
                    error: error => {
                        this.handleError(observer, error);
                    }
                });
            });
        }
        return obs;
    }
    preRequest() {
        // console.log('preRequest' + this.nombreApp);
        // console.log('preRequest' + this.gvloginUrl);
        this._spinner.show();
    }
    handleSuccess(observer, result, successMsg) {
        this._spinner.hide();
        observer.next(result);
        observer.complete();
        if (successMsg) {
            this._snackbar.showSuccess('Datos guardados correctamente', '');
        }
    }
    handleError(observer, error) {
        var _a, _b, _c;
        this._spinner.hide();
        observer.error(error);
        if (error === null || error === void 0 ? void 0 : error.error) {
            this._snackbar.showError(((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) + ': ' + ((_c = (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c.join(',')), 'ERROR');
        }
        else {
            this._snackbar.showError('Error inesperado', 'ERROR');
        }
    }
}
ArqApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService, deps: [{ token: ArqSpinnerService }, { token: i1$4.HttpClient }, { token: ArqSnackBarService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ArqSpinnerService }, { type: i1$4.HttpClient }, { type: ArqSnackBarService }]; } });

class ArqBasicComponent {
    constructor(_schemaService, _apiService) {
        this._schemaService = _schemaService;
        this._apiService = _apiService;
        this.entidad = {};
        this.fillForm$ = new Subject();
        this._route = inject(ActivatedRoute);
        this.preparar();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (!this._apiService) {
            this.inicializar();
        }
    }
    preparar() {
        this.schema = this._route.snapshot.data['schema'];
        if (!this.idBloque)
            this.idBloque = this._route.snapshot.paramMap.has('idBloque')
                ? this._route.snapshot.paramMap.get('idBloque')
                : this.idBloque;
        if (this.schema) {
            this.prepareSchema();
        }
        else if (this._apiService) {
            this._apiService.schema(this.idBloque).subscribe((schema) => {
                this.schema = schema;
                this.prepareSchema();
            });
        }
    }
    prepareSchema() {
        var _a;
        const validations = this._schemaService._parseSchema(this.schema, this.addCustomValidationRules());
        this.formGroup = this.prepareFormGroup(validations);
        this._schemaService.fillModelWithDefaultValues(this.entidad, this.formGroup); //schema
        (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
        this.inicializar();
    }
    prepareFormGroup(validations) {
        let _formBuilder = new FormBuilder();
        let fGroup = _formBuilder.group(validations);
        let property;
        for (property in validations) {
            let valor = validations[property];
            if (this.isListAngularDto(valor)) {
                fGroup.setControl(property, new FormControl(null));
            }
            else if (!Array.isArray(valor)) {
                let anidadoGroup = this.prepareFormGroup(valor);
                fGroup.setControl(property, anidadoGroup);
            }
        }
        return fGroup;
    }
    isListAngularDto(valor) {
        if (!valor) {
            return false;
        }
        return valor.hasOwnProperty('value') && valor.hasOwnProperty('description') && valor.hasOwnProperty('descriptionV');
    }
    inicializar() { }
    /**
     * Add custom validation rules
     * Override if we need to set
     */
    addCustomValidationRules() {
        const validators = {};
        return validators;
    }
    fillForm(editForm, entity, emitFillForm = true) {
        const recursivePatchValue = (form, data) => {
            Object.keys(form.controls).forEach(keycontrol => {
                var _a;
                const control = form.controls[keycontrol];
                const value = (data === null || data === void 0 ? void 0 : data.hasOwnProperty(keycontrol)) ? data[keycontrol] : undefined;
                if (control instanceof FormGroup) {
                    // Si el control es un FormGroup, llama recursivamente a recursivePatchValue
                    recursivePatchValue(control, value);
                }
                else if (value !== undefined && control) {
                    let schemaProperty = (_a = this.schema) === null || _a === void 0 ? void 0 : _a.properties[keycontrol];
                    // Aplica patchValue solo si el valor no es undefined y no emite evento
                    // Si el estado del control es invalid y es un numero, se trata de una fecha
                    if ((schemaProperty === null || schemaProperty === void 0 ? void 0 : schemaProperty.$type) && (schemaProperty === null || schemaProperty === void 0 ? void 0 : schemaProperty.$type) == 'java.util.Date' && typeof value == 'number') {
                        control.patchValue(new Date(value), { emitEvent: false });
                    }
                    else {
                        control.patchValue(value, { emitEvent: false });
                    }
                }
            });
        };
        recursivePatchValue(editForm, entity);
        if (emitFillForm)
            this.fillForm$.next();
        return editForm;
    }
    fillEntity(editForm, onlyDirty) {
        let entity = {};
        Object.keys(editForm.controls).forEach(keycontrol => {
            var _a, _b;
            const control = editForm.controls[keycontrol];
            let incluirSoloCambios = true;
            if (onlyDirty) {
                incluirSoloCambios = control.dirty;
            }
            if (control instanceof FormControl && incluirSoloCambios) {
                let value = control.value;
                let schemaProperty = (_a = this.schema) === null || _a === void 0 ? void 0 : _a.properties[keycontrol];
                if ((schemaProperty === null || schemaProperty === void 0 ? void 0 : schemaProperty.properties) && this.isListAngularDto(schemaProperty.properties)) {
                    value = ((_b = control.value) === null || _b === void 0 ? void 0 : _b.value) ? control.value : null;
                }
                Object.defineProperty(entity, keycontrol, {
                    value: value,
                    enumerable: true
                });
            }
            if (control instanceof FormGroup) {
                Object.defineProperty(entity, keycontrol, {
                    value: this.fillEntity(control),
                    enumerable: true
                });
            }
        }, this);
        return onlyDirty ? entity : Object.assign(Object.assign({}, editForm === null || editForm === void 0 ? void 0 : editForm.value), entity);
    }
    /**
     * Obtiene el formControl, solo dentro del formGroup inicial
     */
    getBasicFormControl(control) {
        return this.formGroup.controls[control];
    }
    /**
     * Obtiene el formControl busca dentro de todo el objeto
     */
    getFormControl(controlStr) {
        return this.getFormControlFromForm(this.formGroup, controlStr);
    }
    /**
     * Obtiene el formControl busca a partir del FormGroup pasado
     */
    getFormControlFromForm(form, controlStr) {
        let formControl = new FormControl();
        Object.keys(form.controls).forEach(keycontrol => {
            const control = this.formGroup.controls[keycontrol];
            if (control.constructor.name === 'FormControl' && keycontrol == controlStr) {
                formControl = control;
            }
            else if (control.constructor.name === 'FormGroup') {
                this.getFormControl(controlStr);
            }
        }, this);
        return formControl;
    }
    /**
     * Pasando el formGroup y el mapa de errores se pintas los marcos en rojo y se muestran los errores
     */
    setErrors(form, errors) {
        Object.keys(form.controls).forEach(keycontrol => {
            form.controls[keycontrol].setErrors(null);
        }, this);
        // Ordenamos los errores para agruparlos por formControl por si viniesen desordenados
        errors.sort();
        // declaramos variables auxiliares externas al bucle
        let keyControlActivo = '';
        let errorsMap = {};
        for (let errCount = 0; errCount < errors.length; errCount++) {
            const errorSinPadre = errors[errCount].substring(errors[errCount].indexOf('.') + 1);
            const keyControlError = errorSinPadre.substring(0, errorSinPadre.indexOf(':'));
            const valueControlError = errorSinPadre.substring(errorSinPadre.indexOf(':') + 1).trim();
            if (errCount == 0) {
                keyControlActivo = keyControlError;
            }
            if (keyControlActivo !== keyControlError) {
                // damos por finalizado el actual mapa y se lo pasamos al formControl
                // activo hasta el momento
                form.controls[keyControlActivo].setErrors(errorsMap);
                // cambiamos el keyControlActivo y reiniciamos el mapa de errores
                keyControlActivo = keyControlError;
                errorsMap = {};
            }
            // en cualquier vuelta del bucle anyadimos el error al mapa de errores
            errorsMap['error_validacion_' + errCount] = valueControlError;
            // si es la ultima vuelta anyadimos el ultimo mapa
            if (errCount === errors.length - 1) {
                form.controls[keyControlActivo].setErrors(errorsMap);
            }
        }
    }
    /**
     * Por algun motivo los formControl con errores tienen status valid hasta que se produce un evento onBlur
     * por lo que se da el caso de formGroup invalid que no muestra errores hasta que se interactua con el formControl
     *
     * Pasando el formGroup se fuerza la evaluacion de de la validez de los campos y asi mostramos los errores de cliente
     */
    refreshClientValidations(form) {
        Object.keys(form.controls).forEach(keyControl => {
            // Los select dependientes dan errores con el refresco porque detectan cambios en los padres
            // y eso hace que limpie de valor los hijos. Por lo que solo refrescamos los controles que angular diga
            // que contienen errores.
            if (form.controls[keyControl].status == 'INVALID') {
                form.controls[keyControl].updateValueAndValidity({ onlySelf: true });
            }
        });
    }
    markAllAndRefresh(form) {
        Object.keys(form.controls).forEach(keyControl => {
            form.controls[keyControl].markAsTouched();
        });
        // Utilizamos el refresco nuestro porque que tiene el control de status para evitar el bug de los
        // select dependientes.
        this.refreshClientValidations(form);
    }
    /**
     * Similar a refreshClientValidations, pero para casos en los que el formulario dice que es válido.
     * Esto suele sucecer cuando se guarda sin tocar nada o si se quiere mostrar las validaciones según
     * se carga la pantalla.
     */
    forceValidation(formGroup) {
        Object.keys(formGroup.controls).forEach(controlName => {
            const control = formGroup.controls[controlName];
            if (control instanceof FormGroup) {
                this.forceValidation(control);
            }
            else {
                control.markAsTouched();
                control.markAsDirty();
                control.updateValueAndValidity({ emitEvent: false });
            }
        });
    }
}
ArqBasicComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComponent, deps: [{ token: ArqSchemaService }, { token: ArqApiService }], target: i0.ɵɵFactoryTarget.Component });
ArqBasicComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBasicComponent, selector: "arq-basic-component-form", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-basic-component-form',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: ArqSchemaService }, { type: ArqApiService }]; } });

class ArqDependentInputsComponent extends ArqBasicComponent {
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
                values[inp.control] = (value === null || value === void 0 ? void 0 : value.value) ? value.value : value;
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
ArqDependentInputsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsComponent, deps: [{ token: ArqSchemaService }], target: i0.ɵɵFactoryTarget.Component });
ArqDependentInputsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDependentInputsComponent, selector: "arq-dependent-inputs", inputs: { inputs: "inputs", _form: ["form", "_form"], sizeInput: "sizeInput", loadedEvent: "loadedEvent" }, usesInheritance: true, ngImport: i0, template: "<div class=\"d-flex flex-wrap\">\r\n  <ng-template ngFor let-item [ngForOf]=\"inputs\" let-i=\"index\">\r\n    <div class=\"col-md-{{ item.col || 3 }} col-12\">\r\n      <container-element [ngSwitch]=\"item.type\">\r\n        <ng-container *ngSwitchCase=\"'select'\">\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <arq-autocomplete\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [options]=\"item.options\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [filterBack]=\"item.filterBack\"\r\n            [panelWidth]=\"item.panelWidth\"\r\n            (changeEvent)=\"ngChanges($event, item)\"\r\n            (keyup)=\"evtKeyPress($event, item)\">\r\n          </arq-autocomplete>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n      </container-element>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: ArqSelectComponent, selector: "arq-select", inputs: ["disabled", "selectOptionsList", "emptyOption", "fullObject", "multiple"], outputs: ["selectionChange"] }, { kind: "component", type: ArqAutocompleteComponent, selector: "arq-autocomplete", inputs: ["ariaLabel", "autoActiveFirstOption", "autoSelectActiveOption", "panelWidth", "nameOptions", "type", "options", "dependsOn", "filterBack", "defaultSize", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range"], outputs: ["closed", "opened", "emitValue"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-dependent-inputs', encapsulation: ViewEncapsulation.None, template: "<div class=\"d-flex flex-wrap\">\r\n  <ng-template ngFor let-item [ngForOf]=\"inputs\" let-i=\"index\">\r\n    <div class=\"col-md-{{ item.col || 3 }} col-12\">\r\n      <container-element [ngSwitch]=\"item.type\">\r\n        <ng-container *ngSwitchCase=\"'select'\">\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <arq-autocomplete\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [options]=\"item.options\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [filterBack]=\"item.filterBack\"\r\n            [panelWidth]=\"item.panelWidth\"\r\n            (changeEvent)=\"ngChanges($event, item)\"\r\n            (keyup)=\"evtKeyPress($event, item)\">\r\n          </arq-autocomplete>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n          <arq-select\r\n            label=\"{{ item.label }}\"\r\n            placeholder=\"{{ item.label }}\"\r\n            [emptyOption]=\"true\"\r\n            [value]=\"item.control\"\r\n            [fGroup]=\"this._form\"\r\n            [selectOptionsList]=\"item.options\"\r\n            [sizeInput]=\"item.sizeInput\"\r\n            [fullObject]=\"item.fullObject\"\r\n            (changeEvent)=\"ngChanges($event, item)\">\r\n          </arq-select>\r\n        </ng-container>\r\n      </container-element>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: ArqSchemaService }]; }, propDecorators: { inputs: [{
                type: Input
            }], _form: [{
                type: Input,
                args: ['form']
            }], sizeInput: [{
                type: Input
            }], loadedEvent: [{
                type: Input
            }] } });

class ArqDependentInputsModule {
}
ArqDependentInputsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDependentInputsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsModule, declarations: [ArqDependentInputsComponent], imports: [CommonModule, ReactiveFormsModule, ArqSelectModule, ArqAutocompleteModule], exports: [ArqDependentInputsComponent] });
ArqDependentInputsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsModule, imports: [CommonModule, ReactiveFormsModule, ArqSelectModule, ArqAutocompleteModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDependentInputsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDependentInputsComponent],
                    exports: [ArqDependentInputsComponent],
                    imports: [CommonModule, ReactiveFormsModule, ArqSelectModule, ArqAutocompleteModule]
                }]
        }] });

class ArqBaseComponent {
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ArqBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqBaseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBaseComponent, selector: "arq-base-component", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBaseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-base-component',
                    template: ''
                }]
        }], ctorParameters: function () { return []; } });

class ArqBasicComplejoComponent extends ArqBasicComponent {
    constructor() {
        super(...arguments);
        this.UtilDatatableInMemory = () => {
            const requireDataInMemory = (request, arrayToPaginate = []) => {
                return new Observable(subscriber => {
                    of(arrayToPaginate).subscribe({
                        next: (value) => {
                            const startIndex = request.page * request.size;
                            const endIndex = startIndex + request.size;
                            const paginatedArray = value.slice(startIndex, endIndex);
                            const totalPages = Math.ceil(value.length / request.size);
                            const totalElements = value.length;
                            const numberOfElements = paginatedArray.length;
                            const transformedObject = {
                                content: paginatedArray,
                                pageable: {
                                    sort: {
                                        sorted: false,
                                        unsorted: true,
                                        empty: true
                                    },
                                    offset: startIndex,
                                    pageNumber: request.page,
                                    pageSize: request.size,
                                    unpaged: false,
                                    paged: true
                                },
                                last: request.page === totalPages,
                                totalPages: totalPages,
                                totalElements: totalElements,
                                size: request.size,
                                number: request.page - 1,
                                sort: {
                                    sorted: false,
                                    unsorted: true,
                                    empty: true
                                },
                                first: request.page === 1,
                                numberOfElements: numberOfElements,
                                empty: numberOfElements === 0
                            };
                            subscriber.next(transformedObject);
                            subscriber.complete();
                        }
                    });
                });
            };
            const editRow = (row, arrayToEdit = []) => {
                if (row.newRow) {
                    arrayToEdit.push(Object.assign(Object.assign({}, row), { newRow: false, isCreate: false }));
                }
                else {
                    const objIndex = arrayToEdit.findIndex(obj => obj.id == row.id);
                    arrayToEdit[objIndex] = Object.assign(Object.assign({}, row), { isEdit: false });
                }
            };
            const deleteRow = (row, arrayToDelete = []) => {
                arrayToDelete.splice(arrayToDelete.findIndex(obj => obj.id == row.id), 1);
            };
            return { editRowInMemory: editRow, requireData: requireDataInMemory, deleteRowInMemory: deleteRow };
        };
    }
    prepareSchema() {
        var _a;
        this.validations = this._schemaService._parseSchema(this.schema, this.addCustomValidationRules());
        let controles = this.getObjectProperties(this.schema.properties, this.entidad);
        this.formGroup = new FormGroup(controles);
        (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
        this.inicializar();
    }
    fillFormAplanado(editForm, entity) {
        return this._fillForm(editForm, this.schema.properties, entity);
    }
    fillEntityAplanado(editForm, listadosObjetos) {
        return this.fillEntityInterno(editForm, this.schema.properties, listadosObjetos);
    }
    fillEntityInterno(editForm, properties = this.schema.properties, listadosObjetos, objetoRecompuesto = {}, parent) {
        Object.keys(properties).forEach(e => {
            const concatenado = parent ? parent.concat('.').concat(e) : e;
            if (properties[e].type === 'object') {
                objetoRecompuesto = Object.assign(Object.assign({}, objetoRecompuesto), { [e]: Object.assign({}, this.fillEntityInterno(editForm, properties[e].properties, listadosObjetos, {}, concatenado)) });
            }
            else if (properties[e].type === 'array') {
                if (listadosObjetos && listadosObjetos[e]) {
                    objetoRecompuesto = Object.assign(Object.assign({}, objetoRecompuesto), { [e]: listadosObjetos[e] });
                }
                this.fillEntityInterno(editForm, properties[e].items.properties, listadosObjetos, objetoRecompuesto, concatenado);
            }
            else {
                Object.keys(editForm.getRawValue()).forEach(keyForm => {
                    if (concatenado === keyForm) {
                        objetoRecompuesto = Object.assign(Object.assign({}, objetoRecompuesto), { [e]: editForm.getRawValue()[keyForm] });
                    }
                });
            }
        });
        return objetoRecompuesto;
    }
    getObjectProperties(properties, data, validations = this.validations, controles = {}, parent) {
        Object.keys(properties).forEach((e) => {
            const concatenado = parent ? parent.concat('.').concat(e) : e;
            if (properties[e].type === 'object') {
                controles = this.getObjectProperties(properties[e].properties, data ? data[e] : undefined, validations[e], controles, concatenado);
            }
            else if (properties[e].type !== 'array') {
                controles = Object.assign(Object.assign({}, controles), { [concatenado]: new FormControl(data ? data[e] : undefined, validations[e] ? validations[e][1] : []) });
            }
        });
        return controles;
    }
    _fillForm(editForm, properties, data, parent) {
        properties &&
            Object.keys(properties).forEach((e) => {
                const concatenado = parent ? parent.concat('.').concat(e) : e;
                if (properties[e].type === 'object') {
                    data && this._fillForm(editForm, properties[e].properties, data[e], concatenado);
                }
                else if (properties[e].type !== 'array') {
                    Object.keys(editForm.controls).forEach(keyForm => {
                        var _a;
                        if (concatenado === keyForm) {
                            if (((_a = properties[e]) === null || _a === void 0 ? void 0 : _a.$type) == 'java.util.Date' && data && typeof data[e] == 'number') {
                                editForm.controls[keyForm].setValue(new Date(data[e]));
                            }
                            else {
                                editForm.controls[keyForm].setValue(data && data[e] ? data[e] : undefined);
                            }
                        }
                    });
                }
            });
        return editForm;
    }
    recuperarListados(data) {
        return this._recuperarListados(this.schema.properties, data);
    }
    _recuperarListados(properties, data, listadosObjeto = {}, parent) {
        properties &&
            Object.keys(properties).forEach((e) => {
                const concatenado = parent ? parent.concat('.').concat(e) : e;
                if (properties[e].type === 'object') {
                    data && this._recuperarListados(properties[e].properties, data[e], listadosObjeto, concatenado);
                }
                else if (properties[e].type === 'array') {
                    listadosObjeto = Object.assign(Object.assign({}, listadosObjeto), { [e]: data && data[e] ? [...data[e]] : [] });
                    this._recuperarListados(properties[e].items.properties, data ? data[e] : undefined, listadosObjeto, concatenado);
                }
            });
        return listadosObjeto;
    }
    getSubFormularios() {
        return this._getSubFormularios(this.schema.properties, this.validations);
    }
    _getSubFormularios(properties, validations = this.validations, subformularios = {}, parent) {
        Object.keys(properties).forEach((e) => {
            const concatenado = parent ? parent.concat('.').concat(e) : e;
            if (properties[e].type === 'object') {
                subformularios = this._getSubFormularios(properties[e].properties, validations[e], subformularios, concatenado);
            }
            else if (properties[e].type === 'array') {
                let controles = this.getObjectProperties(properties[e].items.properties, undefined, validations[e] ? validations[e][0] : []);
                subformularios = Object.assign(Object.assign({}, subformularios), { [e]: new FormGroup(controles) });
                this._getSubFormularios(properties[e].items.properties, validations, subformularios, concatenado);
            }
        });
        return subformularios;
    }
}
ArqBasicComplejoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComplejoComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArqBasicComplejoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBasicComplejoComponent, selector: "arq-basic-componentt-form", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComplejoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-basic-componentt-form',
                    template: ''
                }]
        }] });

class ArqBasicModule {
}
ArqBasicModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqBasicModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicModule, declarations: [ArqBasicComponent, ArqBasicComplejoComponent], imports: [ReactiveFormsModule, CommonModule], exports: [ArqBasicComponent, ArqBasicComplejoComponent] });
ArqBasicModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicModule, imports: [ReactiveFormsModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqBasicComponent, ArqBasicComplejoComponent],
                    exports: [ArqBasicComponent, ArqBasicComplejoComponent],
                    imports: [ReactiveFormsModule, CommonModule]
                }]
        }] });

class ArqDownloadFileService {
    constructor() {
        this._arqSpinnerService = inject(ArqSpinnerService);
    }
    textFileDownload(config) {
        if (config) {
            config.action().subscribe((res) => {
                this.writeContents(res, `${config.name}.${config.type}`, config.contentType);
            });
        }
    }
    writeContents(content, fileName, contentType) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    textFileDownloadMultiple(configs, showSpinner = true) {
        if (showSpinner) {
            this._arqSpinnerService.show();
        }
        return forkJoin(configs.map((config) => config.action().pipe(tap((res) => {
            this.writeContents(res, `${config.name}.${config.type}`, config.contentType);
        })))).pipe(finalize(() => {
            if (showSpinner) {
                this._arqSpinnerService.hide();
            }
        }));
    }
}
ArqDownloadFileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqDownloadFileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ArqUploadFilesDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(options) {
        this.dialogRef = this.dialog.open(ArqUploadFilesDialogComponent, {
            data: {
                cancelBtn: options.cancelBtn,
                confirmBtn: options.confirmBtn,
                textCancel: options.textCancel,
                textConfirm: options.textConfirm,
                config: options.config,
                label: options.label
            }
        });
    }
    confirmed() {
        return this.dialogRef.afterClosed().pipe(take(1), map$1(res => {
            return res;
        }));
    }
    close() {
        this.dialogRef.close();
    }
}
ArqUploadFilesDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, deps: [{ token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
ArqUploadFilesDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$3.MatDialog }]; } });

class ArqHttpClient {
    constructor(_httpClient, _env) {
        this._httpClient = _httpClient;
        this._env = _env;
    }
    _addGvLoginContext(context) {
        if (!context) {
            context = new HttpContext();
        }
        context.set(nombreApp, this._env.gvlogin.aplicacion);
        context.set(gvloginUrl, this._env.gvlogin.url);
        context.set(enable, this._env.gvlogin.enable);
        return context;
    }
    request(method, url, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.request(method, url, options);
    }
    delete(url, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.delete(url, options);
    }
    get(url, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.get(url, options);
    }
    head(url, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.head(url, options);
    }
    jsonp(url, callbackParam) {
        // implementation
        return this._httpClient.jsonp(url, callbackParam);
    }
    options(url, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.options(url, options);
    }
    patch(url, body, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.patch(url, body, options);
    }
    post(url, body, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.post(url, body, options);
    }
    put(url, body, options = {}) {
        // implementation
        options = Object.assign(Object.assign({}, options), { context: this._addGvLoginContext(options.context) });
        return this._httpClient.put(url, body, options);
    }
}
ArqHttpClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqHttpClient, deps: [{ token: i1$4.HttpClient }, { token: 'env' }], target: i0.ɵɵFactoryTarget.Injectable });
ArqHttpClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqHttpClient, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqHttpClient, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1$4.HttpClient }, { type: undefined, decorators: [{
                        type: Inject,
                        args: ['env']
                    }] }];
    } });

const securityProviders = [
    // Servicios de gvLogin
    { provide: ArqGvloginService, useClass: ArqGvloginService },
    //{ provide: AuthService, useClass: GvloginService, multi: true },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ArqGvloginInterceptorService,
        multi: true
    }
];
function jwtOptionsFactory() {
    return {
        //whitelistedDomains: environment.gvlogin.whitelistedDomains,
        tokenGetter: tokenGetter
    };
}
function tokenGetter() {
    return localStorage.getItem('gvlogin-token');
}
class ArqGvLoginModule {
    static forRoot() {
        return {
            ngModule: ArqGvLoginModule,
            providers: securityProviders
        };
    }
}
ArqGvLoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqGvLoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule, i1$7.JwtModule] });
ArqGvLoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory
            }
        })] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    exports: [],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                        JwtModule.forRoot({
                            jwtOptionsProvider: {
                                provide: JWT_OPTIONS,
                                useFactory: jwtOptionsFactory
                            }
                        })
                    ]
                }]
        }] });

const DEFAULT_CONFIG = {
    filterType: 'hide',
    filterPlaceholder: 'Filtrar...',
    filterLabel: 'Filtrar',
    noDataString: 'No hay datos',
    actions: [],
    actionsInContextMenu: false,
    actionColLabel: '',
    newRowInActionsTH: false,
    newRowInModal: false,
    disabled: false,
    disablePagination: false,
    pageSize: 5,
    selectColumn: false,
    editCallback: row => { },
    eventRow: row => { },
    eventNewRow: row => { },
    prepareFormGroup: formGroup => { }
};
class ArqDatatableComponent extends ArqBaseComponent {
    constructor(formBuilder, serviceDialog, arqSpinnerService) {
        super();
        this.formBuilder = formBuilder;
        this.serviceDialog = serviceDialog;
        this.arqSpinnerService = arqSpinnerService;
        // Component inputs
        this._columnsSchema = [];
        this.loadDataEvent$ = new EventEmitter();
        this.selectEvent$ = new EventEmitter();
        this._isEditing = false;
        this.itemsPerPageLabel = 'Items por página';
        this.nextPageLabel = 'Siguiente';
        this.firstPageLabel = 'Primera';
        this.lastPageLabel = 'Última';
        this.previousPageLabel = 'Anterior';
        this.range = 'de';
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = [];
        this.tableConfig = DEFAULT_CONFIG;
        this.dataRequest = { page: 0, size: 5 };
        this.totalElements = 0;
        this.isLoading = false;
        // ??
        this.valid = {};
        this.activeQueryFilter = '';
        this.activeFilter = {};
        this.displayedColumnsStatic = ['codigo', 'descripcion'];
        // Context Menu
        this.isDisplayContextMenu = false;
        this.rightClickMenuItems = [];
        // Select funcionality
        this.selectedRows = [];
        this.checkSelectedRow = (row) => !!this.selectedRows.filter(_ => row.id === _.id).length;
        // Template Functions
        this.iterateAndF = (_) => _.map((a) => a + 'f'); // Añade el sufijo 'f' a cada elemento del array
        this.toOf = (_) => of(_);
        this.findValue = (value, data, lang, type) => {
            var _a;
            const description = lang == 'ca' ? 'descriptionV' : 'description';
            let dataNew;
            // Si tenemos objeto en select o autocomplete no necesitamos buscar en el filtro
            if ((type == 'select' || type == 'autocomplete') && (value === null || value === void 0 ? void 0 : value.value)) {
                return value[description];
            }
            if (type == 'select' && data && !Array.isArray(data)) {
                data.subscribe((e) => (dataNew = e));
            }
            else {
                dataNew = data;
            }
            // prettier-ignore
            return (((_a = dataNew === null || dataNew === void 0 ? void 0 : dataNew.find((_) => {
                if (!value)
                    return false;
                else
                    return (typeof value !== 'string') ? (_.value === value.value) : (_.value === value);
            })) === null || _a === void 0 ? void 0 : _a[description]) || value);
        };
        this.findSrc = (value, data) => {
            var _a;
            // prettier-ignore
            return (((_a = data.find((_) => {
                if (!value)
                    return false;
                else
                    return _.value === value;
            })) === null || _a === void 0 ? void 0 : _a.src) || value);
        };
        this.hideIcon = false;
    }
    ngAfterViewInit() {
        this.customPaginator();
    }
    ngOnInit() {
        this.fg = Object.assign({}, this._form);
        this.fgCopy = Object.assign({}, this._form);
        this._columnsSchema.forEach(col => {
            if (col.fullObject === undefined) {
                col.fullObject = true;
            }
            if (col.isEditable === undefined) {
                col.isEditable = true;
            }
            if (!col.defaultValue) {
                col.defaultValue = null;
            }
            if (col.dataFnReq) {
                col.dataFnReq({ page: 0, size: 10 }).subscribe(res => (col.data = res.content));
            }
            if (col.dataFn) {
                col.dataFn.subscribe((e) => (col.data = e));
            }
            if (col.type == 'calc') {
                col.isEditable = false;
                col.isCreable = false;
                col.isSortable = false;
                if (!col.calculate) {
                    console.error('calculate function is required for calc type');
                }
            }
        });
        if (!this.loadedData$ && !this.loadDataEvent$)
            checkRequiredFields(this._loadDataFn || this._loadDataMantFn, 'loadDataFn');
        if (!this._loadDataFn && !this._loadDataMantFn) {
            checkRequiredFields(this.loadedData$, 'loadedData');
            checkRequiredFields(this.loadDataEvent$, 'loadDataEvent');
        }
        checkRequiredFields(this._columnsSchema, 'columnsSchema');
        this.initializeDatatable();
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        if (changes) {
            this.displayedColumns = (_a = this._columnsSchema) === null || _a === void 0 ? void 0 : _a.filter((col) => col.isHidden != true).map((col) => col.key);
            if (((_c = (_b = this.tableConfig) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c.length) && !((_d = this.tableConfig) === null || _d === void 0 ? void 0 : _d.actionsInContextMenu))
                this.showActionsCol();
            if (changes['_tableConfig'] &&
                changes['_tableConfig']['currentValue'] &&
                changes['_tableConfig']['currentValue']['selectColumn']) {
                this._tableConfig.selectColumn = changes['_tableConfig']['currentValue']['selectColumn'];
                this.tableConfig.selectColumn = changes['_tableConfig']['currentValue']['selectColumn'];
                this.showSelectCol(changes['_tableConfig']['currentValue']['selectColumn']);
            }
        }
    }
    enable() {
        this.readonly = false;
    }
    disable() {
        this.readonly = true;
        this.stopEditing();
    }
    action() {
        return (row) => {
            var _a, _b;
            row.isEdit = !row.isEdit;
            for (const key in row) {
                if (Object.prototype.hasOwnProperty.call(row, key)) {
                    (_b = (_a = this._form) === null || _a === void 0 ? void 0 : _a.controls[key]) === null || _b === void 0 ? void 0 : _b.setValue(row[key], { emitEvent: false });
                }
            }
            if (this.tableConfig.prepareFormGroup && this._form) {
                this.tableConfig.prepareFormGroup(this._form);
                this._form.updateValueAndValidity({ emitEvent: false });
            }
            this._isEditing = true;
            row.newRow = false;
        };
    }
    initializeDatatable() {
        var _a, _b, _c, _d, _e;
        this.setTableConfig();
        this.showFilters = this.tableConfig.filterType == 'both' || this.tableConfig.filterType == 'column';
        this.displayedColumns = (_a = this._columnsSchema) === null || _a === void 0 ? void 0 : _a.filter((col) => col.isHidden != true).map((col) => col.key);
        if (((_b = this.tableConfig.actions) === null || _b === void 0 ? void 0 : _b.length) && !this.tableConfig.actionsInContextMenu)
            this.showActionsCol();
        this.showSelectCol(!!this.tableConfig.selectColumn);
        if (this.loadedData$) {
            this.loadedData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
                next: (res) => {
                    res = this.addIdsIfNecesary(res);
                    this.dataSource.data = res.content;
                    this.totalElements = res.totalElements;
                    this.stopLoading();
                },
                error: () => this.stopLoading()
            });
        }
        if (this.refreshData$)
            this.refreshData$.pipe(takeUntil(this.unsubscribe$)).subscribe(_ => this.refreshData());
        this.originalFilterType = (_c = this.tableConfig) === null || _c === void 0 ? void 0 : _c.filterType;
        (_e = (_d = this.tableConfig) === null || _d === void 0 ? void 0 : _d.actions) === null || _e === void 0 ? void 0 : _e.forEach((element) => {
            if (element.inline) {
                element.action = this.action();
            }
        });
        this.refreshData();
    }
    refreshData() {
        this.startLoading();
        this.stopEditingAllRows();
        if (this.loadDataEvent$.observers.length) {
            this.loadDataEvent$.emit(this.dataRequest);
        }
        else {
            if (this._loadDataFn) {
                this._isEditing = true;
                this._loadDataFn(this.dataRequest)
                    .pipe(finalize(() => {
                    this._isEditing = false;
                    this.stopLoading();
                }))
                    .subscribe(res => {
                    res = this.addIdsIfNecesary(res);
                    this.dataSource.data = res.content;
                    this.totalElements = res.totalElements;
                });
            }
            else {
                this._loadDataMantFn(this.dataRequest)
                    .pipe(finalize(() => {
                    this._isEditing = false;
                    this.stopLoading();
                }))
                    .subscribe(res => {
                    res = this.addIdsIfNecesary(res);
                    this.dataSource.data = res.content;
                    this.totalElements = res.totalElements;
                });
            }
        }
    }
    startLoading() {
        this.isLoading = true;
        this.arqSpinnerService.show();
    }
    stopLoading() {
        this.isLoading = false;
        this.arqSpinnerService.hide();
    }
    addIdsIfNecesary(res) {
        res.content = res.content.map((column, index) => {
            if (!Object.keys(column).includes('id'))
                column.id = index;
            return column;
        });
        return res;
    }
    setTableConfig() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        this.tableConfig = {
            filterType: ((_a = this._tableConfig) === null || _a === void 0 ? void 0 : _a.filterType) ? (_b = this._tableConfig) === null || _b === void 0 ? void 0 : _b.filterType : DEFAULT_CONFIG.filterType,
            filterPlaceholder: ((_c = this._tableConfig) === null || _c === void 0 ? void 0 : _c.filterPlaceholder)
                ? this._tableConfig.filterPlaceholder
                : DEFAULT_CONFIG.filterPlaceholder,
            filterLabel: ((_d = this._tableConfig) === null || _d === void 0 ? void 0 : _d.filterLabel) ? (_e = this._tableConfig) === null || _e === void 0 ? void 0 : _e.filterLabel : DEFAULT_CONFIG.filterLabel,
            noDataString: ((_f = this._tableConfig) === null || _f === void 0 ? void 0 : _f.noDataString) ? (_g = this._tableConfig) === null || _g === void 0 ? void 0 : _g.noDataString : DEFAULT_CONFIG.noDataString,
            footerTable: ((_h = this._tableConfig) === null || _h === void 0 ? void 0 : _h.footerTable) ? (_j = this._tableConfig) === null || _j === void 0 ? void 0 : _j.footerTable : DEFAULT_CONFIG.footerTable,
            footerTableString: ((_k = this._tableConfig) === null || _k === void 0 ? void 0 : _k.footerTableString)
                ? (_l = this._tableConfig) === null || _l === void 0 ? void 0 : _l.footerTableString
                : DEFAULT_CONFIG.footerTableString,
            headerTable: ((_m = this._tableConfig) === null || _m === void 0 ? void 0 : _m.headerTable) ? (_o = this._tableConfig) === null || _o === void 0 ? void 0 : _o.headerTable : DEFAULT_CONFIG.headerTable,
            headerTableString: ((_p = this._tableConfig) === null || _p === void 0 ? void 0 : _p.headerTableString)
                ? (_q = this._tableConfig) === null || _q === void 0 ? void 0 : _q.headerTableString
                : DEFAULT_CONFIG.headerTableString,
            actions: ((_r = this._tableConfig) === null || _r === void 0 ? void 0 : _r.actions) ? (_s = this._tableConfig) === null || _s === void 0 ? void 0 : _s.actions : DEFAULT_CONFIG.actions,
            actionsInContextMenu: ((_t = this._tableConfig) === null || _t === void 0 ? void 0 : _t.actionsInContextMenu)
                ? (_u = this._tableConfig) === null || _u === void 0 ? void 0 : _u.actionsInContextMenu
                : DEFAULT_CONFIG.actionsInContextMenu,
            actionColLabel: ((_v = this._tableConfig) === null || _v === void 0 ? void 0 : _v.actionColLabel)
                ? (_w = this._tableConfig) === null || _w === void 0 ? void 0 : _w.actionColLabel
                : DEFAULT_CONFIG.actionColLabel,
            newRowInActionsTH: ((_x = this._tableConfig) === null || _x === void 0 ? void 0 : _x.newRowInActionsTH)
                ? (_y = this._tableConfig) === null || _y === void 0 ? void 0 : _y.newRowInActionsTH
                : DEFAULT_CONFIG.newRowInActionsTH,
            newRowInModal: ((_z = this._tableConfig) === null || _z === void 0 ? void 0 : _z.newRowInModal) ? (_0 = this._tableConfig) === null || _0 === void 0 ? void 0 : _0.newRowInModal : DEFAULT_CONFIG.newRowInModal,
            disablePagination: ((_1 = this._tableConfig) === null || _1 === void 0 ? void 0 : _1.disablePagination)
                ? (_2 = this._tableConfig) === null || _2 === void 0 ? void 0 : _2.disablePagination
                : DEFAULT_CONFIG.disablePagination,
            disableSorting: ((_3 = this._tableConfig) === null || _3 === void 0 ? void 0 : _3.disableSorting)
                ? (_4 = this._tableConfig) === null || _4 === void 0 ? void 0 : _4.disableSorting
                : DEFAULT_CONFIG.disableSorting,
            pageSize: ((_5 = this._tableConfig) === null || _5 === void 0 ? void 0 : _5.pageSize) ? (_6 = this._tableConfig) === null || _6 === void 0 ? void 0 : _6.pageSize : DEFAULT_CONFIG.pageSize,
            editCallback: ((_7 = this._tableConfig) === null || _7 === void 0 ? void 0 : _7.editCallback) ? (_8 = this._tableConfig) === null || _8 === void 0 ? void 0 : _8.editCallback : DEFAULT_CONFIG.editCallback,
            eventRow: ((_9 = this._tableConfig) === null || _9 === void 0 ? void 0 : _9.eventRow) ? (_10 = this._tableConfig) === null || _10 === void 0 ? void 0 : _10.eventRow : DEFAULT_CONFIG.eventRow,
            eventNewRow: ((_11 = this._tableConfig) === null || _11 === void 0 ? void 0 : _11.eventNewRow) ? (_12 = this._tableConfig) === null || _12 === void 0 ? void 0 : _12.eventNewRow : DEFAULT_CONFIG.eventNewRow,
            selectColumn: this._tableConfig.selectColumn ? this._tableConfig.selectColumn : DEFAULT_CONFIG.selectColumn,
            prepareFormGroup: ((_13 = this._tableConfig) === null || _13 === void 0 ? void 0 : _13.prepareFormGroup)
                ? (_14 = this._tableConfig) === null || _14 === void 0 ? void 0 : _14.prepareFormGroup
                : DEFAULT_CONFIG.prepareFormGroup
        };
        if ((_15 = this._tableConfig) === null || _15 === void 0 ? void 0 : _15.disabled) {
            this.readonly = (_16 = this._tableConfig) === null || _16 === void 0 ? void 0 : _16.disabled;
            this._isEditing = false;
            this._columnsSchema.forEach((col) => {
                col.isEditable = false;
                col.isCreable = false;
            });
        }
        this.dataRequest.size = ((_17 = this.tableConfig) === null || _17 === void 0 ? void 0 : _17.pageSize) || 5;
    }
    customPaginator() {
        this.paginator._intl.itemsPerPageLabel = this.itemsPerPageLabel;
        this.paginator._intl.firstPageLabel = this.firstPageLabel;
        this.paginator._intl.lastPageLabel = this.lastPageLabel;
        this.paginator._intl.nextPageLabel = this.nextPageLabel;
        this.paginator._intl.previousPageLabel = this.previousPageLabel;
        this.paginator._intl.getRangeLabel = (page, pageSize, length) => {
            const start = page * pageSize + 1;
            const end = (page + 1) * pageSize;
            return `${start} - ${end} ${this.range} ${length}`;
        };
    }
    nextPage(event) {
        this.dataRequest.page = +event.pageIndex.toString();
        this.dataRequest.size = +event.pageSize.toString();
        this.refreshData();
    }
    autocFilter(data, value) {
        let dataNew;
        if (data) {
            if (typeof data == 'function') {
                return data;
            }
            else {
                if (Array.isArray(data)) {
                    dataNew = data;
                }
                else {
                    data.subscribe((e) => (dataNew = e));
                }
            }
            return dataNew === null || dataNew === void 0 ? void 0 : dataNew.filter((_) => _.description.toLowerCase().includes((typeof value == 'string' ? value : value.description).toLowerCase()));
        }
    }
    editCol(col, row) {
        if (typeof col.isEditable == 'boolean') {
            return col.isEditable;
        }
        return col.isEditable(row);
    }
    editRow(row) {
        let form = row.newRow ? this.fg : this._form;
        form.updateValueAndValidity();
        if (this.tableConfig.editCallback) {
            const editCallback = this.tableConfig.editCallback(Object.assign(Object.assign({}, row), form.value), form);
            if (editCallback instanceof Observable$1) {
                editCallback === null || editCallback === void 0 ? void 0 : editCallback.subscribe({
                    next: () => {
                        this.readonly = false;
                        this._isEditing = false;
                        row.isEdit = false;
                        row.isCreate = false;
                        this.refreshData();
                    }
                });
            }
            else {
                this.readonly = false;
                this._isEditing = false;
                row.isEdit = false;
                row.isCreate = false;
                this.refreshData();
            }
        }
        else {
            console.error('Not edit callback defined');
        }
    }
    showActionsCol(show = true) {
        if (show) {
            if (!this.displayedColumns.includes('actions'))
                this.displayedColumns.push('actions');
        }
        else {
            if (this.tableConfig.actionsInContextMenu)
                this.displayedColumns = this.displayedColumns.filter((col) => col !== 'actions');
        }
    }
    hideFilter(b) {
        this.hideIcon = !b;
        this.tableConfig.filterType = this.originalFilterType;
        if (this.hideIcon) {
            this.tableConfig.filterType = 'hide';
        }
    }
    inputHandler(e, id, key) {
        if (!this.valid[id])
            this.valid[id] = {};
        this.valid[id][key] = e;
    }
    addNewRow() {
        this.readonly = true;
        this.fg = this.cloneFormGroup();
        if (this.tableConfig.prepareFormGroup) {
            this.tableConfig.prepareFormGroup(this.fg);
        }
        let el = {};
        el = this.fg.value;
        el.newRow = true;
        el.isCreate = true;
        el.isEdit = false;
        if (this.tableConfig.newRowInModal) {
            this.openDialog(el);
        }
        else {
            this._isEditing = true;
            this.dataSource.data.unshift(el);
            this.dataSource.data = this.dataSource.data;
        }
    }
    openDialog(el) {
        const resp = this.tableConfig.eventNewRow ? this.tableConfig.eventNewRow(el) : null;
        if (resp) {
            this.serviceDialog.open(resp.data, resp.component).subscribe((res) => {
                if (res) {
                    this.dataSource.data.unshift(res);
                    this.dataSource.data = this.dataSource.data;
                }
            });
        }
        this.readonly = false;
    }
    showSelectCol(show = true) {
        if (show) {
            if (!this.displayedColumns.includes('selectColumn'))
                this.displayedColumns.unshift('selectColumn');
        }
        else {
            this.displayedColumns = this.displayedColumns.filter((col) => col !== 'selectColumn');
        }
    }
    // Context Menu
    displayContextMenu(event, row) {
        var _a;
        if (this.tableConfig.actionsInContextMenu) {
            this.rightClickMenuItems = [];
            (_a = this.tableConfig.actions) === null || _a === void 0 ? void 0 : _a.forEach((action) => {
                this.rightClickMenuItems.push({ menuText: action.tooltip, action: action.action, row: row });
            });
            this.isDisplayContextMenu = true;
            this.rightClickMenuPositions = {
                x: event.clientX,
                y: event.clientY
            };
        }
    }
    event() {
        this.isDisplayContextMenu = false;
    }
    // Sorting
    sortHandler(ev) {
        if (this._isEditing)
            return;
        if (ev.direction !== '') {
            this.dataRequest.sort = ev.active + ',' + ev.direction;
        }
        else {
            delete this.dataRequest.sort;
        }
        this.refreshData();
    }
    // Filtering
    filterHandler(ev, col) {
        if (ev.keyCode !== 13)
            return;
        if (ev.target.value !== '') {
            this.dataRequest.filter = ev.target.value;
            this.dataRequest.filterCol = col;
        }
        else {
            delete this.dataRequest.filter;
            delete this.dataRequest.filterCol;
        }
        this.refreshData();
    }
    obtenerElemento(obj, prop) {
        if (typeof obj !== 'object')
            throw 'getProp: obj is not an object';
        if (typeof prop !== 'string')
            throw 'getProp: prop is not a string';
        // Replace [] notation with dot notation
        prop = prop.replace(/\[["'`](.*)["'`]\]/g, '.$1');
        return prop.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : undefined;
        }, obj || self);
    }
    cloneFormGroup() {
        let el = {};
        this._columnsSchema.forEach((col) => {
            el[col.key] = col.defaultValue;
        });
        return this.formBuilder.group(el);
    }
    eventRow(row) {
        if (this.rowClicked === row.id)
            this.rowClicked = -1;
        else
            this.rowClicked = row.id;
        this.tableConfig.eventRow && !row.isEdit
            ? this.tableConfig.eventRow(row)
            : console.error('Not edit callback defined');
    }
    // Select funcionality
    toggleSelectRow(row) {
        if (this.checkSelectedRow(row))
            this.selectedRows = this.selectedRows.filter(_ => _.id !== row.id);
        else
            this.selectedRows.push(row);
        this.selectEvent$.emit({ selected: this.selectedRows, lastSelection: row });
    }
    cleanSelectionRows() {
        this.selectedRows = [];
        this.selectEvent$.emit({ selected: this.selectedRows, lastSelection: [] });
    }
    stopEditing(row) {
        this._isEditing = false;
        if (row) {
            this.stopEditingRow(row);
        }
        else {
            this.stopEditingAllRows();
        }
    }
    stopEditingAllRows() {
        this.dataSource.data.forEach((row) => {
            this.stopEditingRow(row);
        });
    }
    stopEditingRow(row) {
        row.isEdit = false;
        row.isCreate = false;
        if (row.newRow) {
            this.dataSource.data.shift();
        }
        row.newRow = false;
    }
    desactivarItems(action) {
        if (action.inline) {
            this._isEditing = true;
        }
    }
    actionHandler(action, element) {
        this.stopEditingAllRows();
        const result = action.action(element);
        if (result instanceof Observable$1) {
            result === null || result === void 0 ? void 0 : result.subscribe({
                next: () => this.refreshData()
            });
        }
        this.desactivarItems(action);
    }
}
ArqDatatableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableComponent, deps: [{ token: i3.FormBuilder }, { token: ArqDialogService }, { token: ArqSpinnerService }], target: i0.ɵɵFactoryTarget.Component });
ArqDatatableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatatableComponent, selector: "arq-datatable", inputs: { _columnsSchema: ["columnsSchema", "_columnsSchema"], _tableConfig: ["tableConfig", "_tableConfig"], loadedData$: ["loadedData", "loadedData$"], _loadDataFn: ["loadDataFn", "_loadDataFn"], refreshData$: ["refreshData", "refreshData$"], _form: ["form", "_form"], _isEditing: ["isEditing", "_isEditing"], itemsPerPageLabel: "itemsPerPageLabel", nextPageLabel: "nextPageLabel", firstPageLabel: "firstPageLabel", lastPageLabel: "lastPageLabel", previousPageLabel: "previousPageLabel", range: "range", _loadDataMantFn: ["loadDataMantFn", "_loadDataMantFn"] }, outputs: { loadDataEvent$: "loadDataEvent", selectEvent$: "selectEvent" }, host: { listeners: { "document:click": "event()", "document:scroll": "event($event)" } }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"mat-elevation-z8\">\r\n  <!-- TABLE HEADER  -->\r\n  <div *ngIf=\"tableConfig.headerTableString\" [innerHTML]=\"tableConfig.headerTableString\"></div>\r\n  <div *ngIf=\"tableConfig.headerTable\" style=\"margin: 1em; display: flex; justify-content: flex-end\">\r\n    <ng-container>\r\n      <button\r\n        style=\"margin-left: 1em; margin-top: 1em\"\r\n        mat-raised-button\r\n        type=\"button\"\r\n        *ngFor=\"let btn of tableConfig.headerTable\"\r\n        [color]=\"btn.color ? btn.color : 'primary'\"\r\n        [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\"\r\n        (click)=\"btn.action(this)\">\r\n        <mat-icon *ngIf=\"btn.icon\">{{ btn.icon }}</mat-icon>\r\n        {{ btn.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <!-- FILTER -->\r\n  <mat-form-field\r\n    appearance=\"outline\"\r\n    subscriptSizing=\"dynamic\"\r\n    class=\"table-filter\"\r\n    *ngIf=\"tableConfig.filterType === 'global' || tableConfig.filterType === 'both'\">\r\n    <mat-label>{{ tableConfig.filterLabel }}</mat-label>\r\n    <input\r\n      matInput\r\n      (keyup)=\"filterHandler($event, 'global')\"\r\n      placeholder=\"{{ tableConfig.filterPlaceholder }}\"\r\n      #input />\r\n  </mat-form-field>\r\n\r\n  <!-- TABLE -->\r\n  <table\r\n    #table\r\n    mat-table\r\n    [dataSource]=\"dataSource\"\r\n    class=\"mat-elevation-z8\"\r\n    matSort\r\n    (matSortChange)=\"sortHandler($event)\">\r\n    <!-- Select column -->\r\n    <ng-container matColumnDef=\"selectColumn\" *ngIf=\"tableConfig.selectColumn\">\r\n      <th\r\n        mat-header-cell\r\n        class=\"header-datatable\"\r\n        *matHeaderCellDef\r\n        style=\"cursor: pointer !important\"\r\n        (click)=\"cleanSelectionRows()\">\r\n        <!-- <mat-checkbox [checked]=\"false\" [disabled]=\"true\"></mat-checkbox> -->\r\n        ({{ selectedRows.length }})\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"toggleSelectRow(element)\">\r\n        <mat-checkbox [checked]=\"checkSelectedRow(element)\" [disabled]=\"true\"></mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Dynamic Columns -->\r\n    <ng-container [matColumnDef]=\"col.key\" *ngFor=\"let col of _columnsSchema\">\r\n      <ng-container *ngIf=\"tableConfig.disableSorting || col.isSortable === false\">\r\n        <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef>{{ col.label }}</th>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!tableConfig.disableSorting && col.isSortable !== false\">\r\n        <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef mat-sort-header>\r\n          {{ col.label }}\r\n        </th>\r\n      </ng-container>\r\n      <!-- Data rows -->\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"eventRow(element)\">\r\n        <!-- Normal rows -->\r\n        <div\r\n          [ngSwitch]=\"col.type\"\r\n          *ngIf=\"!element.isEdit && !element.isCreate\"\r\n          (contextmenu)=\"displayContextMenu($event, element); (false)\">\r\n          <span *ngSwitchCase=\"'date'\">\r\n            {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'datetimepicker'\">\r\n            {{ element[col.key] | date : 'dd/MM/yyyy HH:mm' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'boolean'\">\r\n            {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'select'\">\r\n            {{ findValue(element[col.key], col.data, col.lang, col.type) }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'autocomplete'\">\r\n            {{ findValue(element[col.key], col.data, col.lang, col.type) }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'image'\">\r\n            <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n          </span>\r\n          <span *ngSwitchCase=\"'calc'\">\r\n            {{ col?.calculate(element) }}\r\n          </span>\r\n          <span *ngSwitchDefault>\r\n            {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n          </span>\r\n        </div>\r\n\r\n        <!-- Editing rows -->\r\n\r\n        <div [ngSwitch]=\"col.type\" *ngIf=\"element.isEdit && _form\" class=\"inputs-edit\">\r\n          <div *ngSwitchCase=\"'date'\" [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-datepicker [fGroup]=\"_form\" [value]=\"col.key\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'datetimepicker'\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-datetimepicker [value]=\"col.key\" [fGroup]=\"_form\"></arq-datetimepicker>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'boolean'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-checkbox-basic [value]=\"col.key\" [fGroup]=\"this._form\"></arq-checkbox-basic>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'select'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-select\r\n                [emptyOption]=\"true\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                [selectOptionsList]=\"col.data || col.dataFn\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [fullObject]=\"col.fullObject\"\r\n                [lang]=\"col.lang\">\r\n              </arq-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'autocomplete'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-autocomplete\r\n                [options]=\"autocFilter(col.dataFnReq, element[col.key])\"\r\n                [panelWidth]=\"col.panelWidth || 'auto'\"\r\n                [dependsOn]=\"col.dependsOn\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\"\r\n                [defaultSize]=\"col.defaultSize || 10\">\r\n              </arq-autocomplete>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'number'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-input-number\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-input-number>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-text-input\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                [maxLength]=\"col.maxLength ? col.maxLength : 100\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-text-input>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #elseBlockNoEditable>\r\n            <div [ngSwitch]=\"col.type\">\r\n              <span *ngSwitchCase=\"'date'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'datetimepicker'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'boolean'\">\r\n                {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'select'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFn, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'autocomplete'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFnReq, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'image'\">\r\n                <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n              </span>\r\n              <span *ngSwitchDefault>\r\n                {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n              </span>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div [ngSwitch]=\"col.type\" *ngIf=\"element.isCreate && fg\" class=\"inputs-edit\">\r\n          <div *ngSwitchCase=\"'date'\" [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-datepicker [fGroup]=\"fg\" [value]=\"col.key\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'datetimepicker'\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-datetimepicker [value]=\"col.key\" [fGroup]=\"fg\"></arq-datetimepicker>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'boolean'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-checkbox-basic [value]=\"col.key\" [fGroup]=\"fg\"></arq-checkbox-basic>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'select'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-select\r\n                [fullObject]=\"col.fullObject\"\r\n                [emptyOption]=\"true\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                [selectOptionsList]=\"col.data || col.dataFn\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\">\r\n              </arq-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'autocomplete'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-autocomplete\r\n                [options]=\"autocFilter(col.dataFnReq, element[col.key])\"\r\n                [panelWidth]=\"col.panelWidth || 'auto'\"\r\n                [dependsOn]=\"col.dependsOn\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\"\r\n                [defaultSize]=\"col.defaultSize || 10\">\r\n              </arq-autocomplete>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'number'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-input-number [value]=\"col.key\" [fGroup]=\"fg\" (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-input-number>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-text-input\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                [maxLength]=\"col.maxLength ? col.maxLength : 100\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-text-input>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #elseBlockShow>\r\n            <div [ngSwitch]=\"col.type\">\r\n              <span *ngSwitchCase=\"'date'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'datetimepicker'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'boolean'\">\r\n                {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'select'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFn, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'autocomplete'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFnReq, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'image'\">\r\n                <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n              </span>\r\n              <span *ngSwitchDefault>\r\n                {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n              </span>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions Columns -->\r\n    <ng-container matColumnDef=\"actions\" *ngIf=\"tableConfig.actions?.length\">\r\n      <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef>\r\n        {{ tableConfig.actionColLabel }}\r\n        <arq-button\r\n          *ngIf=\"tableConfig.newRowInActionsTH\"\r\n          class=\"material-icons arq-toolbar-menu add-button\"\r\n          [ngClass]=\"{ disabled: readonly || _isEditing }\"\r\n          (click)=\"addNewRow()\"\r\n          [matTooltip]=\"readonly ? '' : 'Crear'\"\r\n          color=\"primary\"\r\n          [icon]=\"'add_box'\"\r\n          [tipoButton]=\"'icon'\"\r\n          [readonly]=\"readonly || _isEditing\">\r\n        </arq-button>\r\n\r\n        <ng-template [ngIf]=\"tableConfig.newRowInActionsTH && showFilters\">\r\n          <arq-button\r\n            *ngIf=\"hideIcon\"\r\n            class=\"material-icons arq-toolbar-menu add-button\"\r\n            (click)=\"hideFilter(true)\"\r\n            matTooltip=\"ocultar filtros\"\r\n            color=\"primary\"\r\n            [icon]=\"'visibility'\"\r\n            [tipoButton]=\"'icon'\">\r\n          </arq-button>\r\n          <arq-button\r\n            *ngIf=\"!hideIcon\"\r\n            class=\"material-icons arq-toolbar-menu add-button\"\r\n            (click)=\"hideFilter(false)\"\r\n            matTooltip=\"ocultar filtros\"\r\n            color=\"primary\"\r\n            [icon]=\"'visibility_off'\"\r\n            [tipoButton]=\"'icon'\">\r\n          </arq-button>\r\n        </ng-template>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"noCursor\">\r\n        <div class=\"action-buttons\" style=\"display: flex\">\r\n          <ng-container *ngIf=\"!element.isEdit && !element.isCreate\">\r\n            <ng-container *ngFor=\"let action of tableConfig.actions\">\r\n              <ng-container *ngIf=\"action.displayWhenDisabled || (!action.displayWhenDisabled && !readonly)\">\r\n                <button\r\n                  mat-button\r\n                  *ngIf=\"!(action.displayCondition && !action.displayCondition(element)); else hiddenButton\"\r\n                  class=\"btn-strech\"\r\n                  (click)=\"this.actionHandler(action, element)\"\r\n                  [matTooltip]=\"action.tooltip\"\r\n                  [color]=\"action.color || 'primary'\"\r\n                  [disabled]=\"!(element.isCreate || element.isEdit) && _isEditing\">\r\n                  <mat-icon *ngIf=\"!action.label\">{{ action.icon }}</mat-icon>\r\n                  <span *ngIf=\"action.label\">{{ action.label }}</span>\r\n                </button>\r\n              </ng-container>\r\n              <ng-template #hiddenButton>\r\n                <button mat-button mat-button class=\"hidden\" class=\"hidden\"></button>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"(element.isEdit || element.isCreate) && _isEditing\">\r\n            <div class=\"btn-edit\">\r\n              <arq-button\r\n                class=\"material-icons arq-toolbar-menu save-button\"\r\n                (click)=\"editRow(element); showActionsCol(false)\"\r\n                matTooltip=\"Guardar Cambios\"\r\n                color=\"primary\"\r\n                [icon]=\"'check_circle'\"\r\n                [tipoButton]=\"'icon'\"></arq-button>\r\n              <arq-button\r\n                class=\"material-icons arq-toolbar-menu cancel-button\"\r\n                (click)=\"showActionsCol(false); stopEditing(element)\"\r\n                matTooltip=\"Cancelar\"\r\n                color=\"warn\"\r\n                [icon]=\"'cancel'\"\r\n                [tipoButton]=\"'icon'\"></arq-button>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Filter Rows -->\r\n    <ng-container [matColumnDef]=\"'selectColumnf'\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n    </ng-container>\r\n    <ng-container [matColumnDef]=\"col.key + 'f'\" *ngFor=\"let col of _columnsSchema\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <ng-container\r\n          *ngIf=\"\r\n            col.isFilterable !== false &&\r\n            (tableConfig.filterType === 'column' || tableConfig.filterType === 'both') &&\r\n            col.key !== 'selectColumn' &&\r\n            col.key !== 'actions'\r\n          \">\r\n          <mat-form-field\r\n            class=\"filter-toolbar\"\r\n            subscriptSizing=\"dynamic\"\r\n            [ngClass]=\"{ small: true }\"\r\n            appearance=\"outline\">\r\n            <input\r\n              matInput\r\n              [disabled]=\"this._isEditing\"\r\n              (keyup)=\"filterHandler($event, col.key)\"\r\n              placeholder=\"{{ tableConfig.filterLabel }}\" />\r\n          </mat-form-field>\r\n        </ng-container>\r\n      </th>\r\n    </ng-container>\r\n    <ng-container [matColumnDef]=\"'actionsf'\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n    </ng-container>\r\n\r\n    <!-- HEADERS AND FILTERS -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr\r\n      mat-header-row\r\n      *matHeaderRowDef=\"iterateAndF(displayedColumns)\"\r\n      [ngClass]=\"{ hidden_row: tableConfig.filterType === 'hide' }\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedColumns\"\r\n      [style.background-color]=\"rowClicked === row.id ? '#f2f2f2' : ''\"></tr>\r\n\r\n    <!-- Row shown when there is no matching data. -->\r\n    <tr class=\"mat-row\" *matNoDataRow>\r\n      <td *ngIf=\"!isLoading\" class=\"mat-cell\" colspan=\"4\">{{ tableConfig.noDataString }}</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <!-- PAGINATOR -->\r\n  <mat-paginator\r\n    [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n    showFirstLastButtons\r\n    [pageSize]=\"tableConfig.pageSize\"\r\n    [length]=\"totalElements\"\r\n    (page)=\"nextPage($event)\">\r\n  </mat-paginator>\r\n\r\n  <!-- TABLE FOOTER  -->\r\n  <div *ngIf=\"tableConfig.footerTableString\" [innerHTML]=\"tableConfig.footerTableString\"></div>\r\n  <div *ngIf=\"tableConfig.footerTable\" style=\"margin: 1em; display: flex; justify-content: flex-end\">\r\n    <ng-container>\r\n      <button\r\n        mat-stroked-button\r\n        *ngFor=\"let btn of tableConfig.footerTable\"\r\n        [color]=\"btn.color ? btn.color : 'primary'\"\r\n        [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\"\r\n        (click)=\"btn.action()\">\r\n        <mat-icon *ngIf=\"btn.icon\">{{ btn.icon }}</mat-icon>\r\n        {{ btn.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONTEXT-MENU -->\r\n<arq-context-menu\r\n  *ngIf=\"rightClickMenuItems.length > 0 && isDisplayContextMenu\"\r\n  [contextMenuItems]=\"rightClickMenuItems\"\r\n  (onContextMenuItemClick)=\"$event.data.action($event.data.row); showActionsCol()\"\r\n  [menuPositions]=\"rightClickMenuPositions\">\r\n</arq-context-menu>\r\n", styles: ["table{overflow:scroll}table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d;background-color:#e0e0e0!important;border:2px solid;border-color:#fff;text-transform:uppercase}.header-datatable:hover{background-color:#0c556d!important;color:#fff}.mat-button.mat-small{min-width:1%}.hidden_row{display:none}.disabled{cursor:not-allowed}.hidden{opacity:0;pointer-events:none}.mat-mdc-row:hover .mat-mdc-cell{background-color:#e0e0e0}.mat-mdc-row .mat-mdc-cell{cursor:pointer}.noCursor{cursor:default!important}.mat-mdc-table .mdc-data-table__header-row{height:30px}.mat-mdc-icon-button.mat-mdc-button-base{height:auto}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:7px!important}.filter-toolbar,.filter-toolbar .mat-mdc-form-field-infix{width:100%}.inputs-edit .type-date.mat-mdc-form-field{padding-bottom:0!important}.scroll-custom p:not(:last-child){margin-bottom:1rem}.scroll-custom::-webkit-scrollbar{height:8px;width:8px;border:4px solid #d5d5d5}.scroll-custom::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}.scroll-custom::-webkit-scrollbar-thumb:active{background-color:#999}.scroll-custom::-webkit-scrollbar-thumb:hover{background:#b3b3b3;box-shadow:0 0 2px 1px #0003}.scroll-custom::-webkit-scrollbar-track{background:#e1e1e1;border-radius:4px}.scroll-custom::-webkit-scrollbar-track:hover,.scroll-custom::-webkit-scrollbar-track:active{background:#d4d4d4}.scroll-custom::-webkit-scrollbar-thumb:horizontal{border-radius:10px}.btn-strech{padding-top:0!important;padding-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: ArqButtonComponent, selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "component", type: ArqContextMenuComponent, selector: "arq-context-menu", inputs: ["contextMenuItems", "menuPositions"], outputs: ["onContextMenuItemClick"] }, { kind: "component", type: ArqDatepickerComponent, selector: "arq-datepicker", inputs: ["label", "hint", "disabled"] }, { kind: "component", type: ArqTextInputComponent, selector: "arq-text-input", inputs: ["maxLength", "append", "disabled"] }, { kind: "component", type: ArqCheckboxBasicComponent, selector: "arq-checkbox-basic", inputs: ["color", "checked", "disabled", "sectionClass", "spanClass", "checkbox_down", "checkbox_sn"] }, { kind: "component", type: ArqSelectComponent, selector: "arq-select", inputs: ["disabled", "selectOptionsList", "emptyOption", "fullObject", "multiple"], outputs: ["selectionChange"] }, { kind: "component", type: ArqAutocompleteComponent, selector: "arq-autocomplete", inputs: ["ariaLabel", "autoActiveFirstOption", "autoSelectActiveOption", "panelWidth", "nameOptions", "type", "options", "dependsOn", "filterBack", "defaultSize", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range"], outputs: ["closed", "opened", "emitValue"] }, { kind: "component", type: ArqDateTimepickerComponent, selector: "arq-datetimepicker", inputs: ["withHours", "hint", "disabled"] }, { kind: "component", type: ArqInputNumberComponent, selector: "arq-input-number", inputs: ["maxLength", "append"] }, { kind: "component", type: i14.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i14.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i14.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i14.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i14.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i14.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i14.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i14.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i14.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i14.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i14.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i2$3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i21.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i21.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "pipe", type: i2$1.DatePipe, name: "date" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datatable', encapsulation: ViewEncapsulation.None, template: "<div class=\"mat-elevation-z8\">\r\n  <!-- TABLE HEADER  -->\r\n  <div *ngIf=\"tableConfig.headerTableString\" [innerHTML]=\"tableConfig.headerTableString\"></div>\r\n  <div *ngIf=\"tableConfig.headerTable\" style=\"margin: 1em; display: flex; justify-content: flex-end\">\r\n    <ng-container>\r\n      <button\r\n        style=\"margin-left: 1em; margin-top: 1em\"\r\n        mat-raised-button\r\n        type=\"button\"\r\n        *ngFor=\"let btn of tableConfig.headerTable\"\r\n        [color]=\"btn.color ? btn.color : 'primary'\"\r\n        [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\"\r\n        (click)=\"btn.action(this)\">\r\n        <mat-icon *ngIf=\"btn.icon\">{{ btn.icon }}</mat-icon>\r\n        {{ btn.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <!-- FILTER -->\r\n  <mat-form-field\r\n    appearance=\"outline\"\r\n    subscriptSizing=\"dynamic\"\r\n    class=\"table-filter\"\r\n    *ngIf=\"tableConfig.filterType === 'global' || tableConfig.filterType === 'both'\">\r\n    <mat-label>{{ tableConfig.filterLabel }}</mat-label>\r\n    <input\r\n      matInput\r\n      (keyup)=\"filterHandler($event, 'global')\"\r\n      placeholder=\"{{ tableConfig.filterPlaceholder }}\"\r\n      #input />\r\n  </mat-form-field>\r\n\r\n  <!-- TABLE -->\r\n  <table\r\n    #table\r\n    mat-table\r\n    [dataSource]=\"dataSource\"\r\n    class=\"mat-elevation-z8\"\r\n    matSort\r\n    (matSortChange)=\"sortHandler($event)\">\r\n    <!-- Select column -->\r\n    <ng-container matColumnDef=\"selectColumn\" *ngIf=\"tableConfig.selectColumn\">\r\n      <th\r\n        mat-header-cell\r\n        class=\"header-datatable\"\r\n        *matHeaderCellDef\r\n        style=\"cursor: pointer !important\"\r\n        (click)=\"cleanSelectionRows()\">\r\n        <!-- <mat-checkbox [checked]=\"false\" [disabled]=\"true\"></mat-checkbox> -->\r\n        ({{ selectedRows.length }})\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"toggleSelectRow(element)\">\r\n        <mat-checkbox [checked]=\"checkSelectedRow(element)\" [disabled]=\"true\"></mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Dynamic Columns -->\r\n    <ng-container [matColumnDef]=\"col.key\" *ngFor=\"let col of _columnsSchema\">\r\n      <ng-container *ngIf=\"tableConfig.disableSorting || col.isSortable === false\">\r\n        <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef>{{ col.label }}</th>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!tableConfig.disableSorting && col.isSortable !== false\">\r\n        <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef mat-sort-header>\r\n          {{ col.label }}\r\n        </th>\r\n      </ng-container>\r\n      <!-- Data rows -->\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"eventRow(element)\">\r\n        <!-- Normal rows -->\r\n        <div\r\n          [ngSwitch]=\"col.type\"\r\n          *ngIf=\"!element.isEdit && !element.isCreate\"\r\n          (contextmenu)=\"displayContextMenu($event, element); (false)\">\r\n          <span *ngSwitchCase=\"'date'\">\r\n            {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'datetimepicker'\">\r\n            {{ element[col.key] | date : 'dd/MM/yyyy HH:mm' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'boolean'\">\r\n            {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'select'\">\r\n            {{ findValue(element[col.key], col.data, col.lang, col.type) }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'autocomplete'\">\r\n            {{ findValue(element[col.key], col.data, col.lang, col.type) }}\r\n          </span>\r\n          <span *ngSwitchCase=\"'image'\">\r\n            <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n          </span>\r\n          <span *ngSwitchCase=\"'calc'\">\r\n            {{ col?.calculate(element) }}\r\n          </span>\r\n          <span *ngSwitchDefault>\r\n            {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n          </span>\r\n        </div>\r\n\r\n        <!-- Editing rows -->\r\n\r\n        <div [ngSwitch]=\"col.type\" *ngIf=\"element.isEdit && _form\" class=\"inputs-edit\">\r\n          <div *ngSwitchCase=\"'date'\" [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-datepicker [fGroup]=\"_form\" [value]=\"col.key\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'datetimepicker'\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-datetimepicker [value]=\"col.key\" [fGroup]=\"_form\"></arq-datetimepicker>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'boolean'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-checkbox-basic [value]=\"col.key\" [fGroup]=\"this._form\"></arq-checkbox-basic>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'select'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-select\r\n                [emptyOption]=\"true\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                [selectOptionsList]=\"col.data || col.dataFn\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [fullObject]=\"col.fullObject\"\r\n                [lang]=\"col.lang\">\r\n              </arq-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'autocomplete'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-autocomplete\r\n                [options]=\"autocFilter(col.dataFnReq, element[col.key])\"\r\n                [panelWidth]=\"col.panelWidth || 'auto'\"\r\n                [dependsOn]=\"col.dependsOn\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\"\r\n                [defaultSize]=\"col.defaultSize || 10\">\r\n              </arq-autocomplete>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'number'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-input-number\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-input-number>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"editCol(col, element) && !col.subkey; else elseBlockNoEditable\">\r\n              <arq-text-input\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"this._form\"\r\n                [maxLength]=\"col.maxLength ? col.maxLength : 100\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-text-input>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #elseBlockNoEditable>\r\n            <div [ngSwitch]=\"col.type\">\r\n              <span *ngSwitchCase=\"'date'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'datetimepicker'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'boolean'\">\r\n                {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'select'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFn, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'autocomplete'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFnReq, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'image'\">\r\n                <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n              </span>\r\n              <span *ngSwitchDefault>\r\n                {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n              </span>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div [ngSwitch]=\"col.type\" *ngIf=\"element.isCreate && fg\" class=\"inputs-edit\">\r\n          <div *ngSwitchCase=\"'date'\" [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-datepicker [fGroup]=\"fg\" [value]=\"col.key\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'datetimepicker'\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-datetimepicker [value]=\"col.key\" [fGroup]=\"fg\"></arq-datetimepicker>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'boolean'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-checkbox-basic [value]=\"col.key\" [fGroup]=\"fg\"></arq-checkbox-basic>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'select'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-select\r\n                [fullObject]=\"col.fullObject\"\r\n                [emptyOption]=\"true\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                [selectOptionsList]=\"col.data || col.dataFn\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\">\r\n              </arq-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'autocomplete'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-autocomplete\r\n                [options]=\"autocFilter(col.dataFnReq, element[col.key])\"\r\n                [panelWidth]=\"col.panelWidth || 'auto'\"\r\n                [dependsOn]=\"col.dependsOn\"\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\"\r\n                [lang]=\"col.lang\"\r\n                [defaultSize]=\"col.defaultSize || 10\">\r\n              </arq-autocomplete>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"'number'\"\r\n            appearance=\"outline\"\r\n            [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-input-number [value]=\"col.key\" [fGroup]=\"fg\" (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-input-number>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchDefault [style]=\"col.editInputSize ? 'width: ' + col.editInputSize + ' !important' : ''\">\r\n            <div *ngIf=\"col.isCreable !== false && !col.subkey; else elseBlockShow\">\r\n              <arq-text-input\r\n                [value]=\"col.key\"\r\n                [fGroup]=\"fg\"\r\n                [maxLength]=\"col.maxLength ? col.maxLength : 100\"\r\n                (change)=\"inputHandler($event, element.id, col.key)\">\r\n              </arq-text-input>\r\n            </div>\r\n          </div>\r\n\r\n          <ng-template #elseBlockShow>\r\n            <div [ngSwitch]=\"col.type\">\r\n              <span *ngSwitchCase=\"'date'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'datetimepicker'\">\r\n                {{ element[col.key] | date : 'dd/MM/yyyy' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'boolean'\">\r\n                {{ element[col.key] ? '&#10003;' : '&#10005;' }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'select'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFn, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'autocomplete'\">\r\n                {{ findValue(element[col.key], col.data || col.dataFnReq, col.lang, col.type) }}\r\n              </span>\r\n              <span *ngSwitchCase=\"'image'\">\r\n                <img [src]=\"findSrc(element[col.key], col.data)\" />\r\n              </span>\r\n              <span *ngSwitchDefault>\r\n                {{ col.subkey ? this.obtenerElemento(element, col.key) : element[col.key] }}\r\n              </span>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions Columns -->\r\n    <ng-container matColumnDef=\"actions\" *ngIf=\"tableConfig.actions?.length\">\r\n      <th mat-header-cell class=\"header-datatable\" *matHeaderCellDef>\r\n        {{ tableConfig.actionColLabel }}\r\n        <arq-button\r\n          *ngIf=\"tableConfig.newRowInActionsTH\"\r\n          class=\"material-icons arq-toolbar-menu add-button\"\r\n          [ngClass]=\"{ disabled: readonly || _isEditing }\"\r\n          (click)=\"addNewRow()\"\r\n          [matTooltip]=\"readonly ? '' : 'Crear'\"\r\n          color=\"primary\"\r\n          [icon]=\"'add_box'\"\r\n          [tipoButton]=\"'icon'\"\r\n          [readonly]=\"readonly || _isEditing\">\r\n        </arq-button>\r\n\r\n        <ng-template [ngIf]=\"tableConfig.newRowInActionsTH && showFilters\">\r\n          <arq-button\r\n            *ngIf=\"hideIcon\"\r\n            class=\"material-icons arq-toolbar-menu add-button\"\r\n            (click)=\"hideFilter(true)\"\r\n            matTooltip=\"ocultar filtros\"\r\n            color=\"primary\"\r\n            [icon]=\"'visibility'\"\r\n            [tipoButton]=\"'icon'\">\r\n          </arq-button>\r\n          <arq-button\r\n            *ngIf=\"!hideIcon\"\r\n            class=\"material-icons arq-toolbar-menu add-button\"\r\n            (click)=\"hideFilter(false)\"\r\n            matTooltip=\"ocultar filtros\"\r\n            color=\"primary\"\r\n            [icon]=\"'visibility_off'\"\r\n            [tipoButton]=\"'icon'\">\r\n          </arq-button>\r\n        </ng-template>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"noCursor\">\r\n        <div class=\"action-buttons\" style=\"display: flex\">\r\n          <ng-container *ngIf=\"!element.isEdit && !element.isCreate\">\r\n            <ng-container *ngFor=\"let action of tableConfig.actions\">\r\n              <ng-container *ngIf=\"action.displayWhenDisabled || (!action.displayWhenDisabled && !readonly)\">\r\n                <button\r\n                  mat-button\r\n                  *ngIf=\"!(action.displayCondition && !action.displayCondition(element)); else hiddenButton\"\r\n                  class=\"btn-strech\"\r\n                  (click)=\"this.actionHandler(action, element)\"\r\n                  [matTooltip]=\"action.tooltip\"\r\n                  [color]=\"action.color || 'primary'\"\r\n                  [disabled]=\"!(element.isCreate || element.isEdit) && _isEditing\">\r\n                  <mat-icon *ngIf=\"!action.label\">{{ action.icon }}</mat-icon>\r\n                  <span *ngIf=\"action.label\">{{ action.label }}</span>\r\n                </button>\r\n              </ng-container>\r\n              <ng-template #hiddenButton>\r\n                <button mat-button mat-button class=\"hidden\" class=\"hidden\"></button>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"(element.isEdit || element.isCreate) && _isEditing\">\r\n            <div class=\"btn-edit\">\r\n              <arq-button\r\n                class=\"material-icons arq-toolbar-menu save-button\"\r\n                (click)=\"editRow(element); showActionsCol(false)\"\r\n                matTooltip=\"Guardar Cambios\"\r\n                color=\"primary\"\r\n                [icon]=\"'check_circle'\"\r\n                [tipoButton]=\"'icon'\"></arq-button>\r\n              <arq-button\r\n                class=\"material-icons arq-toolbar-menu cancel-button\"\r\n                (click)=\"showActionsCol(false); stopEditing(element)\"\r\n                matTooltip=\"Cancelar\"\r\n                color=\"warn\"\r\n                [icon]=\"'cancel'\"\r\n                [tipoButton]=\"'icon'\"></arq-button>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Filter Rows -->\r\n    <ng-container [matColumnDef]=\"'selectColumnf'\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n    </ng-container>\r\n    <ng-container [matColumnDef]=\"col.key + 'f'\" *ngFor=\"let col of _columnsSchema\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <ng-container\r\n          *ngIf=\"\r\n            col.isFilterable !== false &&\r\n            (tableConfig.filterType === 'column' || tableConfig.filterType === 'both') &&\r\n            col.key !== 'selectColumn' &&\r\n            col.key !== 'actions'\r\n          \">\r\n          <mat-form-field\r\n            class=\"filter-toolbar\"\r\n            subscriptSizing=\"dynamic\"\r\n            [ngClass]=\"{ small: true }\"\r\n            appearance=\"outline\">\r\n            <input\r\n              matInput\r\n              [disabled]=\"this._isEditing\"\r\n              (keyup)=\"filterHandler($event, col.key)\"\r\n              placeholder=\"{{ tableConfig.filterLabel }}\" />\r\n          </mat-form-field>\r\n        </ng-container>\r\n      </th>\r\n    </ng-container>\r\n    <ng-container [matColumnDef]=\"'actionsf'\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n    </ng-container>\r\n\r\n    <!-- HEADERS AND FILTERS -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr\r\n      mat-header-row\r\n      *matHeaderRowDef=\"iterateAndF(displayedColumns)\"\r\n      [ngClass]=\"{ hidden_row: tableConfig.filterType === 'hide' }\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedColumns\"\r\n      [style.background-color]=\"rowClicked === row.id ? '#f2f2f2' : ''\"></tr>\r\n\r\n    <!-- Row shown when there is no matching data. -->\r\n    <tr class=\"mat-row\" *matNoDataRow>\r\n      <td *ngIf=\"!isLoading\" class=\"mat-cell\" colspan=\"4\">{{ tableConfig.noDataString }}</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <!-- PAGINATOR -->\r\n  <mat-paginator\r\n    [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n    showFirstLastButtons\r\n    [pageSize]=\"tableConfig.pageSize\"\r\n    [length]=\"totalElements\"\r\n    (page)=\"nextPage($event)\">\r\n  </mat-paginator>\r\n\r\n  <!-- TABLE FOOTER  -->\r\n  <div *ngIf=\"tableConfig.footerTableString\" [innerHTML]=\"tableConfig.footerTableString\"></div>\r\n  <div *ngIf=\"tableConfig.footerTable\" style=\"margin: 1em; display: flex; justify-content: flex-end\">\r\n    <ng-container>\r\n      <button\r\n        mat-stroked-button\r\n        *ngFor=\"let btn of tableConfig.footerTable\"\r\n        [color]=\"btn.color ? btn.color : 'primary'\"\r\n        [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\"\r\n        (click)=\"btn.action()\">\r\n        <mat-icon *ngIf=\"btn.icon\">{{ btn.icon }}</mat-icon>\r\n        {{ btn.label }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<!-- CONTEXT-MENU -->\r\n<arq-context-menu\r\n  *ngIf=\"rightClickMenuItems.length > 0 && isDisplayContextMenu\"\r\n  [contextMenuItems]=\"rightClickMenuItems\"\r\n  (onContextMenuItemClick)=\"$event.data.action($event.data.row); showActionsCol()\"\r\n  [menuPositions]=\"rightClickMenuPositions\">\r\n</arq-context-menu>\r\n", styles: ["table{overflow:scroll}table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d;background-color:#e0e0e0!important;border:2px solid;border-color:#fff;text-transform:uppercase}.header-datatable:hover{background-color:#0c556d!important;color:#fff}.mat-button.mat-small{min-width:1%}.hidden_row{display:none}.disabled{cursor:not-allowed}.hidden{opacity:0;pointer-events:none}.mat-mdc-row:hover .mat-mdc-cell{background-color:#e0e0e0}.mat-mdc-row .mat-mdc-cell{cursor:pointer}.noCursor{cursor:default!important}.mat-mdc-table .mdc-data-table__header-row{height:30px}.mat-mdc-icon-button.mat-mdc-button-base{height:auto}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:7px!important}.filter-toolbar,.filter-toolbar .mat-mdc-form-field-infix{width:100%}.inputs-edit .type-date.mat-mdc-form-field{padding-bottom:0!important}.scroll-custom p:not(:last-child){margin-bottom:1rem}.scroll-custom::-webkit-scrollbar{height:8px;width:8px;border:4px solid #d5d5d5}.scroll-custom::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}.scroll-custom::-webkit-scrollbar-thumb:active{background-color:#999}.scroll-custom::-webkit-scrollbar-thumb:hover{background:#b3b3b3;box-shadow:0 0 2px 1px #0003}.scroll-custom::-webkit-scrollbar-track{background:#e1e1e1;border-radius:4px}.scroll-custom::-webkit-scrollbar-track:hover,.scroll-custom::-webkit-scrollbar-track:active{background:#d4d4d4}.scroll-custom::-webkit-scrollbar-thumb:horizontal{border-radius:10px}.btn-strech{padding-top:0!important;padding-bottom:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.FormBuilder }, { type: ArqDialogService }, { type: ArqSpinnerService }]; }, propDecorators: { _columnsSchema: [{
                type: Input,
                args: ['columnsSchema']
            }], _tableConfig: [{
                type: Input,
                args: ['tableConfig']
            }], loadedData$: [{
                type: Input,
                args: ['loadedData']
            }], _loadDataFn: [{
                type: Input,
                args: ['loadDataFn']
            }], refreshData$: [{
                type: Input,
                args: ['refreshData']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], selectEvent$: [{
                type: Output,
                args: ['selectEvent']
            }], _form: [{
                type: Input,
                args: ['form']
            }], _isEditing: [{
                type: Input,
                args: ['isEditing']
            }], itemsPerPageLabel: [{
                type: Input,
                args: ['itemsPerPageLabel']
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
            }], _loadDataMantFn: [{
                type: Input,
                args: ['loadDataMantFn']
            }], paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], event: [{
                type: HostListener,
                args: ['document:click']
            }, {
                type: HostListener,
                args: ['document:scroll', ['$event']]
            }] } });

class ArqDatatableMantenimientoComponent extends ArqBaseComponent {
    constructor(_changeDetector, fb) {
        super();
        this._changeDetector = _changeDetector;
        this.fb = fb;
        this.tableConfig = {};
        this.loadDataEvent$ = new EventEmitter();
        this.dataRequest = { page: 0, size: this.tableConfig.pageSize || 5 };
        this.tableLoaded = false;
    }
    ngOnInit() {
        var _a, _b;
        this.$tableList.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
            this.tableList = res;
            this.selectedTable = res[0];
            this.generateForm();
            this.tableLoaded = true;
        });
        (_b = (_a = this.tableConfig) === null || _a === void 0 ? void 0 : _a.actions) === null || _b === void 0 ? void 0 : _b.forEach((element) => {
            if (element.inline) {
                element.action = this.action();
            }
        });
    }
    changeTable(_table) {
        this.tableLoaded = false;
        this.editing = false;
        this.selectedTable = this.tableList.find(_ => _.value === _table);
        this.generateForm();
        setTimeout(() => {
            this.tableLoaded = true;
            // Al ejecutar el change detector se provoca el loadData en el datatable
            this._changeDetector.detectChanges();
            if (this._selectedTableChange) {
                this._selectedTableChange(_table);
            }
        }, 1);
    }
    requireData(request) {
        var _a;
        this.loadDataEvent$.emit({ request, table: ((_a = this.selectedTable) === null || _a === void 0 ? void 0 : _a.value) || '' });
    }
    action() {
        return (row) => {
            var _a, _b;
            row.isEdit = !row.isEdit;
            for (const key in row) {
                if (Object.prototype.hasOwnProperty.call(row, key)) {
                    (_b = (_a = this.fGroup) === null || _a === void 0 ? void 0 : _a.controls[key]) === null || _b === void 0 ? void 0 : _b.setValue(row[key]);
                }
            }
            this.editing = true;
            row.newRow = false;
        };
    }
    generateForm() {
        var _a;
        this.fGroup = new FormGroup({});
        (_a = this.selectedTable) === null || _a === void 0 ? void 0 : _a.columnsSchema.forEach(fg => {
            this.fGroup.addControl(fg.key, new FormControl(''));
        });
        if (this.datatable) {
            //TODO: Si cambian fg y fgCopy a privado se produce un error.
            this.datatable.fg = this.fGroup;
            this.datatable.fgCopy = this.fGroup;
        }
    }
    loadDataMantFn() {
        var _a;
        let loadDataMantFnInherited = this._loadDataMantFn;
        let table = (_a = this.selectedTable) === null || _a === void 0 ? void 0 : _a.value;
        return (request) => {
            return loadDataMantFnInherited(request, table);
        };
    }
}
ArqDatatableMantenimientoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i3.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
ArqDatatableMantenimientoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatatableMantenimientoComponent, selector: "arq-datatable-mantenimiento", inputs: { $tableList: ["tableList", "$tableList"], tableConfig: "tableConfig", _selectedTableChange: ["selectedTableChange", "_selectedTableChange"], _loadDataMantFn: ["loadDataMantFn", "_loadDataMantFn"] }, outputs: { loadDataEvent$: "loadDataEvent" }, viewQueries: [{ propertyName: "datatable", first: true, predicate: ArqDatatableComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"tableList\">\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Select table</mat-label>\r\n    <mat-select placeholder=\"Select table\" (selectionChange)=\"changeTable($event.value)\" [value]=\"selectedTable?.value\">\r\n      <mat-option *ngFor=\"let table of tableList\" [value]=\"table.value\">\r\n        {{ table.description }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <arq-datatable\r\n    *ngIf=\"selectedTable && tableLoaded\"\r\n    [loadDataMantFn]=\"loadDataMantFn()\"\r\n    [columnsSchema]=\"selectedTable.columnsSchema\"\r\n    [tableConfig]=\"tableConfig\"\r\n    [isEditing]=\"editing\"\r\n    [form]=\"fGroup\">\r\n  </arq-datatable>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ArqDatatableComponent, selector: "arq-datatable", inputs: ["columnsSchema", "tableConfig", "loadedData", "loadDataFn", "refreshData", "form", "isEditing", "itemsPerPageLabel", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range", "loadDataMantFn"], outputs: ["loadDataEvent", "selectEvent"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i4$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datatable-mantenimiento', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"tableList\">\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Select table</mat-label>\r\n    <mat-select placeholder=\"Select table\" (selectionChange)=\"changeTable($event.value)\" [value]=\"selectedTable?.value\">\r\n      <mat-option *ngFor=\"let table of tableList\" [value]=\"table.value\">\r\n        {{ table.description }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <arq-datatable\r\n    *ngIf=\"selectedTable && tableLoaded\"\r\n    [loadDataMantFn]=\"loadDataMantFn()\"\r\n    [columnsSchema]=\"selectedTable.columnsSchema\"\r\n    [tableConfig]=\"tableConfig\"\r\n    [isEditing]=\"editing\"\r\n    [form]=\"fGroup\">\r\n  </arq-datatable>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.FormBuilder }]; }, propDecorators: { $tableList: [{
                type: Input,
                args: ['tableList']
            }], tableConfig: [{
                type: Input
            }], _selectedTableChange: [{
                type: Input,
                args: ['selectedTableChange']
            }], _loadDataMantFn: [{
                type: Input,
                args: ['loadDataMantFn']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], datatable: [{
                type: ViewChild,
                args: [ArqDatatableComponent]
            }] } });

class ArqDatatableModule {
}
ArqDatatableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatatableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, declarations: [ArqDatatableComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqButtonModule,
        ArqContextMenuModule,
        ArqDatepickerModule,
        ArqTextInputModule,
        ArqCheckboxBasicModule,
        ArqSelectModule,
        ArqAutocompleteModule,
        ArqDateTimepickerModule,
        ArqInputNumberModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSortModule,
        MatButtonModule], exports: [ArqDatatableComponent] });
ArqDatatableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqButtonModule,
        ArqContextMenuModule,
        ArqDatepickerModule,
        ArqTextInputModule,
        ArqCheckboxBasicModule,
        ArqSelectModule,
        ArqAutocompleteModule,
        ArqDateTimepickerModule,
        ArqInputNumberModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSortModule,
        MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatatableComponent],
                    exports: [ArqDatatableComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        ArqButtonModule,
                        ArqContextMenuModule,
                        ArqDatepickerModule,
                        ArqTextInputModule,
                        ArqCheckboxBasicModule,
                        ArqSelectModule,
                        ArqAutocompleteModule,
                        ArqDateTimepickerModule,
                        ArqInputNumberModule,
                        MatTableModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatCardModule,
                        MatSelectModule,
                        MatProgressSpinnerModule,
                        MatPaginatorModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatTooltipModule,
                        MatAutocompleteModule,
                        MatSortModule,
                        MatButtonModule
                    ],
                    providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }]
                    // entryComponents: [DialogContent]
                }]
        }] });

class ArqDatatableMantenimientoModule {
}
ArqDatatableMantenimientoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatatableMantenimientoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoModule, declarations: [ArqDatatableMantenimientoComponent], imports: [ReactiveFormsModule, CommonModule, ArqDatatableModule, ArqSelectModule, MatSelectModule], exports: [ArqDatatableMantenimientoComponent] });
ArqDatatableMantenimientoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoModule, imports: [ReactiveFormsModule, CommonModule, ArqDatatableModule, ArqSelectModule, MatSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatatableMantenimientoComponent],
                    exports: [ArqDatatableMantenimientoComponent],
                    imports: [ReactiveFormsModule, CommonModule, ArqDatatableModule, ArqSelectModule, MatSelectModule]
                }]
        }] });

var DefaultFilterType;
(function (DefaultFilterType) {
    DefaultFilterType[DefaultFilterType["NO"] = 0] = "NO";
    DefaultFilterType[DefaultFilterType["NO_REQUERIDO"] = 1] = "NO_REQUERIDO";
    DefaultFilterType[DefaultFilterType["REQUERIDO"] = 2] = "REQUERIDO";
})(DefaultFilterType || (DefaultFilterType = {}));

class ArqAdvFilterDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.filter = { type: null, data: [] };
        this.filterTypes = FILTER_TYPES['text'];
        this.separatorKeysCodes = [ENTER, COMMA];
        if (data.selectedCol)
            this.colChanged(data.selectedCol);
    }
    colChanged(col) {
        this.filterTypes = FILTER_TYPES[col.type];
        if (col.type === 'autocomplete') {
            col.dataFn = of(col.data);
        }
    }
    generateFilter() {
        let _type = this.filter.type;
        let _data = this.filter.data;
        if (['null', 'notnull'].includes(this.filter.type)) {
            _type = 'informed';
            _data = this.filter.type === 'null' ? ['false'] : ['true'];
        }
        if (this.filter.type === 'autocompletemultiple') {
            _data = this.filter.data.map(data => data.value);
        }
        return {
            column: this.data.selectedCol,
            type: _type,
            data: _data
        };
    }
    addTx(event) {
        if (event.value)
            this.filter.data.push(event.value.trim());
        event.chipInput.clear();
    }
    removeTx(tx) {
        const index = this.filter.data.indexOf(tx);
        if (index >= 0)
            this.filter.data.splice(index, 1);
    }
    doFilter() {
        if (!this.filterData)
            return;
        if (this.filterData.hasOwnProperty('value')) {
            this.filter.data.push(this.filterData);
            this.filterData = '';
            this.chipInput.nativeElement.value = '';
        }
        this.data.selectedCol.dataFn = this.data.selectedCol.dataFn.pipe(map((val) => this.filterVal(val, this.filterData)));
    }
    filterVal(val, data) {
        if (!val)
            return [];
        return val.filter(item => item.description.toLowerCase().includes(this.getValue(data).toLowerCase()) && !this.filter.data.includes(item));
    }
    getValue(data) {
        return typeof data === 'string' ? data : data.value;
    }
}
ArqAdvFilterDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAdvFilterDialogComponent, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
ArqAdvFilterDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqAdvFilterDialogComponent, selector: "arq-adv-filter-dialog", viewQueries: [{ propertyName: "chipInput", first: true, predicate: ["chipInput"], descendants: true }], ngImport: i0, template: "<h2 mat-dialog-title>{{ 'DT-BA.ADV-FILTER.TITLE' | transloco }}</h2>\r\n\r\n<mat-dialog-content>\r\n  <h4>{{ 'DT-BA.COLUMN' | transloco }}</h4>\r\n  <mat-form-field>\r\n    <mat-select\r\n      [placeholder]=\"'DT-BA.COLUMN' | transloco\"\r\n      [(value)]=\"data.selectedCol\"\r\n      (selectionChange)=\"colChanged($event.value)\">\r\n      <mat-option *ngFor=\"let col of data.filterCols(data.allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <h4>{{ 'DT-BA.FILTERS' | transloco }}</h4>\r\n  <i *ngIf=\"!data.selectedCol\">{{ 'DT-BA.ADV-FILTER.NO-COL-SEL' | transloco }}</i>\r\n  <ng-container *ngIf=\"data.selectedCol\">\r\n    <mat-form-field>\r\n      <mat-select [placeholder]=\"'DT-BA.TYPE' | transloco\" [(value)]=\"filter.type\">\r\n        <mat-option *ngFor=\"let type of filterTypes\" [value]=\"type[0]\">{{ type[1] }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"filter.type\" [ngSwitch]=\"data.selectedCol.type\">\r\n      <br />\r\n      <ng-container *ngSwitchCase=\"'date'\">\r\n        <ng-container *ngTemplateOutlet=\"date\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'number'\">\r\n        <ng-container *ngTemplateOutlet=\"number\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'select'\">\r\n        <ng-container *ngTemplateOutlet=\"select\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n        <ng-container *ngTemplateOutlet=\"autocomplete\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'text'\">\r\n        <ng-container *ngTemplateOutlet=\"text\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"warn\" mat-dialog-close>{{ 'GENERIC.CANCEL' | transloco }}</button>\r\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"generateFilter()\" cdkFocusInitial>\r\n    {{ 'DT-BA.FILTERV' | transloco }}\r\n  </button>\r\n</mat-dialog-actions>\r\n\r\n<ng-template #date>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'daterange'\">\r\n      <mat-form-field>\r\n        <mat-date-range-input [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input\r\n            matStartDate\r\n            placeholder=\"{{ 'GENERIC.SINCE' | transloco }}\"\r\n            (dateChange)=\"filter.data[0] = $event.value.toDate()\" />\r\n          <input\r\n            matEndDate\r\n            placeholder=\"{{ 'GENERIC.TO' | transloco }}\"\r\n            (dateChange)=\"filter.data[1] = $event.value.toDate()\" />\r\n        </mat-date-range-input>\r\n        <mat-date-range-picker #picker></mat-date-range-picker>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #number>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'numberrange'\">\r\n      <mat-form-field>\r\n        <mat-label>{{ 'GENERIC.SINCE' | transloco }}</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"filter.data[0]\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"ml-1\">\r\n        <mat-label>{{ 'GENERIC.TO' | transloco }}</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"filter.data[1]\" />\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #select>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'selectmultiple'\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"filter.data\" multiple>\r\n          <mat-option *ngFor=\"let col of data.selectedCol.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #autocomplete>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'autocompletemultiple'\">\r\n      <mat-form-field>\r\n        <mat-chip-grid #chipGrid aria-label=\"selection\">\r\n          <mat-chip-row *ngFor=\"let chip of filter.data\" [value]=\"$any(chip).value\" (removed)=\"removeTx(chip)\">\r\n            {{ $any(chip).description }}\r\n            <button matChipRemove [attr.aria-label]=\"'remove ' + data\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </mat-chip-row>\r\n        </mat-chip-grid>\r\n        <input\r\n          #chipInput\r\n          [type]=\"'text'\"\r\n          [matChipInputFor]=\"chipGrid\"\r\n          [matAutocomplete]=\"auto\"\r\n          [(ngModel)]=\"filterData\"\r\n          (ngModelChange)=\"doFilter()\" />\r\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" class=\"arq-autocomplete\">\r\n          <mat-option *ngFor=\"let col of data.selectedCol.dataFn | async\" [value]=\"col\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #text>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'textmultiple'\">\r\n      <mat-form-field>\r\n        <mat-chip-grid #chipGrid>\r\n          <mat-chip-row *ngFor=\"let tx of filter.data\" (removed)=\"removeTx(tx)\">\r\n            {{ tx }}\r\n            <button matChipRemove><mat-icon>cancel</mat-icon></button>\r\n          </mat-chip-row>\r\n          <input\r\n            [placeholder]=\"'DT-BA.ADV-FILTER.ADD-TEXTS' | transloco\"\r\n            [matChipInputFor]=\"chipGrid\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            [matChipInputAddOnBlur]=\"true\"\r\n            (matChipInputTokenEnd)=\"addTx($event)\" />\r\n        </mat-chip-grid>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n", styles: ["button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i4$1.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i4$1.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i4$1.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i4$1.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i11.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i11.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i1$2.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "directive", type: i1$3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAdvFilterDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-adv-filter-dialog', template: "<h2 mat-dialog-title>{{ 'DT-BA.ADV-FILTER.TITLE' | transloco }}</h2>\r\n\r\n<mat-dialog-content>\r\n  <h4>{{ 'DT-BA.COLUMN' | transloco }}</h4>\r\n  <mat-form-field>\r\n    <mat-select\r\n      [placeholder]=\"'DT-BA.COLUMN' | transloco\"\r\n      [(value)]=\"data.selectedCol\"\r\n      (selectionChange)=\"colChanged($event.value)\">\r\n      <mat-option *ngFor=\"let col of data.filterCols(data.allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <h4>{{ 'DT-BA.FILTERS' | transloco }}</h4>\r\n  <i *ngIf=\"!data.selectedCol\">{{ 'DT-BA.ADV-FILTER.NO-COL-SEL' | transloco }}</i>\r\n  <ng-container *ngIf=\"data.selectedCol\">\r\n    <mat-form-field>\r\n      <mat-select [placeholder]=\"'DT-BA.TYPE' | transloco\" [(value)]=\"filter.type\">\r\n        <mat-option *ngFor=\"let type of filterTypes\" [value]=\"type[0]\">{{ type[1] }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"filter.type\" [ngSwitch]=\"data.selectedCol.type\">\r\n      <br />\r\n      <ng-container *ngSwitchCase=\"'date'\">\r\n        <ng-container *ngTemplateOutlet=\"date\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'number'\">\r\n        <ng-container *ngTemplateOutlet=\"number\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'select'\">\r\n        <ng-container *ngTemplateOutlet=\"select\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n        <ng-container *ngTemplateOutlet=\"autocomplete\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"'text'\">\r\n        <ng-container *ngTemplateOutlet=\"text\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"warn\" mat-dialog-close>{{ 'GENERIC.CANCEL' | transloco }}</button>\r\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"generateFilter()\" cdkFocusInitial>\r\n    {{ 'DT-BA.FILTERV' | transloco }}\r\n  </button>\r\n</mat-dialog-actions>\r\n\r\n<ng-template #date>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'daterange'\">\r\n      <mat-form-field>\r\n        <mat-date-range-input [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input\r\n            matStartDate\r\n            placeholder=\"{{ 'GENERIC.SINCE' | transloco }}\"\r\n            (dateChange)=\"filter.data[0] = $event.value.toDate()\" />\r\n          <input\r\n            matEndDate\r\n            placeholder=\"{{ 'GENERIC.TO' | transloco }}\"\r\n            (dateChange)=\"filter.data[1] = $event.value.toDate()\" />\r\n        </mat-date-range-input>\r\n        <mat-date-range-picker #picker></mat-date-range-picker>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #number>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'numberrange'\">\r\n      <mat-form-field>\r\n        <mat-label>{{ 'GENERIC.SINCE' | transloco }}</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"filter.data[0]\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"ml-1\">\r\n        <mat-label>{{ 'GENERIC.TO' | transloco }}</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"filter.data[1]\" />\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #select>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'selectmultiple'\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"filter.data\" multiple>\r\n          <mat-option *ngFor=\"let col of data.selectedCol.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #autocomplete>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'autocompletemultiple'\">\r\n      <mat-form-field>\r\n        <mat-chip-grid #chipGrid aria-label=\"selection\">\r\n          <mat-chip-row *ngFor=\"let chip of filter.data\" [value]=\"$any(chip).value\" (removed)=\"removeTx(chip)\">\r\n            {{ $any(chip).description }}\r\n            <button matChipRemove [attr.aria-label]=\"'remove ' + data\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </mat-chip-row>\r\n        </mat-chip-grid>\r\n        <input\r\n          #chipInput\r\n          [type]=\"'text'\"\r\n          [matChipInputFor]=\"chipGrid\"\r\n          [matAutocomplete]=\"auto\"\r\n          [(ngModel)]=\"filterData\"\r\n          (ngModelChange)=\"doFilter()\" />\r\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" class=\"arq-autocomplete\">\r\n          <mat-option *ngFor=\"let col of data.selectedCol.dataFn | async\" [value]=\"col\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #text>\r\n  <ng-container [ngSwitch]=\"filter.type\">\r\n    <ng-container *ngSwitchDefault></ng-container>\r\n    <ng-container *ngSwitchCase=\"'textmultiple'\">\r\n      <mat-form-field>\r\n        <mat-chip-grid #chipGrid>\r\n          <mat-chip-row *ngFor=\"let tx of filter.data\" (removed)=\"removeTx(tx)\">\r\n            {{ tx }}\r\n            <button matChipRemove><mat-icon>cancel</mat-icon></button>\r\n          </mat-chip-row>\r\n          <input\r\n            [placeholder]=\"'DT-BA.ADV-FILTER.ADD-TEXTS' | transloco\"\r\n            [matChipInputFor]=\"chipGrid\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            [matChipInputAddOnBlur]=\"true\"\r\n            (matChipInputTokenEnd)=\"addTx($event)\" />\r\n        </mat-chip-grid>\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n", styles: ["button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    }, propDecorators: { chipInput: [{
                type: ViewChild,
                args: ['chipInput']
            }] } });
const FILTER_TYPES = {
    text: [
        ['notnull', 'Informado'],
        ['null', 'No informado'],
        ['textmultiple', 'Multiple']
    ],
    number: [
        ['notnull', 'Informado'],
        ['null', 'No informado'],
        ['numberrange', 'Rango']
    ],
    date: [
        ['notnull', 'Informado'],
        ['null', 'No informado'],
        ['daterange', 'Rango']
    ],
    datetimepicker: [
        ['notnull', 'Informado'],
        ['null', 'No informado']
    ],
    boolean: [
        ['notnull', 'Informado'],
        ['null', 'No informado']
    ],
    select: [
        ['notnull', 'Informado'],
        ['null', 'No informado'],
        ['selectmultiple', 'Multiple']
    ],
    autocomplete: [
        ['notnull', 'Informado'],
        ['null', 'No informado'],
        ['autocompletemultiple', 'Multiple']
    ],
    image: [
        ['notnull', 'Informado'],
        ['null', 'No informado']
    ]
};

class ArqPrefiltersDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.idDatatable = this.data.idDatatable || '';
        this.prefilters = this.data.prefilters || [];
        this.refreshComboFn = this.data.refreshComboFn || function () { };
        this.fixedCol = (colId) => this.prefilters.filter((prefilter) => prefilter.key === colId) || this.prefilters[0];
        const controls = {};
        this.prefilters.forEach((prefilter) => (controls[prefilter.key] = ['', prefilter.isRequired ? [Validators.required] : []]));
        this.formGroup = new FormBuilder().group(controls);
    }
    displayFn(option) {
        return (option === null || option === void 0 ? void 0 : option.description) || '';
    }
    doFilter(evt, column) {
        if (evt.keyCode === 13) {
            return;
        }
        column.dataFn = column.dataFn.pipe(map(val => this.filter(val, this.formGroup.controls[column.key].value)));
    }
    optionSelected(column) {
        this.checkDependent(column);
    }
    filter(val, data) {
        if (!val)
            return [];
        return val.filter(item => item.description.toLowerCase().includes(this.getValue(data).toLowerCase()));
    }
    checkDependent(column) {
        const dependentCols = this.prefilters.filter(prefilter => prefilter.dependsOn && prefilter.dependsOn[0] === column.key);
        dependentCols.forEach(col => {
            const columnSchema = this.prefilters.find(colSchema => colSchema.key === col.key);
            if (!columnSchema)
                return;
            const dependentFilter = this.prefilters.find(prefilter => prefilter.key === columnSchema.key);
            if (dependentFilter)
                this.formGroup.controls[dependentFilter.key].reset();
            this.refrescarCombo({
                idColumn: col.key,
                idDatatable: this.idDatatable,
                queryParams: { [column.key]: this.getValue(this.formGroup.controls[column.key].value) }
            }, columnSchema);
        });
    }
    refrescarCombo(filterComboDynam, columnSchema) {
        this.refreshComboFn(filterComboDynam).subscribe((data) => {
            var _a;
            switch ((_a = columnSchema === null || columnSchema === void 0 ? void 0 : columnSchema.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'select':
                case 'image':
                    columnSchema.data = data;
                    break;
                case 'autocomplete':
                    columnSchema.data = data;
                    columnSchema.dataFn = of(data);
                    break;
            }
        });
    }
    getValue(data) {
        return data.value || data;
    }
    onSubmit() {
        // Si hay un autocomplete, tiene que tener un objeto como value, si no lo reseteamos
        this.checkAutocompleteValue();
        // comprobamos el estado del formgroup
        if (this.formGroup.invalid) {
            this.refreshClientValidations(this.formGroup);
            return;
        }
        const addFilterForm = [];
        this.prefilters.forEach(prefilter => {
            var _a, _b, _c;
            if ((_a = this.formGroup.controls[prefilter.key]) === null || _a === void 0 ? void 0 : _a.value) {
                if (prefilter.type === 'autocomplete') {
                    // en el autocomplete pasamos el objeto
                    addFilterForm.push({ data: [(_b = this.formGroup.controls[prefilter.key]) === null || _b === void 0 ? void 0 : _b.value], column: prefilter });
                }
                else {
                    addFilterForm.push({
                        data: [this.getValue((_c = this.formGroup.controls[prefilter.key]) === null || _c === void 0 ? void 0 : _c.value)],
                        column: prefilter
                    });
                }
            }
        });
        this.dialogRef.close(addFilterForm);
    }
    checkAutocompleteValue() {
        this.prefilters
            .filter(prefilter => prefilter.type === 'autocomplete')
            .forEach(prefilter => {
            var _a;
            if (!((_a = this.formGroup.controls[prefilter.key].value) === null || _a === void 0 ? void 0 : _a.value)) {
                this.formGroup.controls[prefilter.key].reset();
                prefilter.dataFn = of(prefilter.data);
            }
        });
    }
    refreshClientValidations(form) {
        Object.keys(form.controls).forEach(keyControl => {
            if (form.controls[keyControl].status == 'INVALID') {
                form.controls[keyControl].updateValueAndValidity({ onlySelf: true });
                form.controls[keyControl].markAsTouched();
            }
        });
    }
}
ArqPrefiltersDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPrefiltersDialogComponent, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
ArqPrefiltersDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqPrefiltersDialogComponent, selector: "arq-prefilters-dialog", ngImport: i0, template: "<h2 mat-dialog-title>{{ 'DT-BA.PREFILTERS.TITLE' | transloco }}</h2>\r\n<form [formGroup]=\"this.formGroup\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-dialog-content>\r\n    <ng-container *ngFor=\"let prefilter of data.prefilters; let i = index\">\r\n      <mat-toolbar class=\"dt-filter-toolbar\">\r\n        <mat-form-field subscriptSizing=\"dynamic\">\r\n          <mat-select placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\" [(value)]=\"data.prefilters[i]\">\r\n            <mat-option *ngFor=\"let col of fixedCol(prefilter.key)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n          </mat-select>\r\n          <mat-hint\r\n            class=\"mat-warn\"\r\n            *ngIf=\"formGroup.controls[prefilter.key].touched && formGroup.controls[prefilter.key].errors\"></mat-hint>\r\n        </mat-form-field>\r\n\r\n        <ng-container *ngIf=\"prefilter\" [ngSwitch]=\"prefilter.type\">\r\n          <mat-form-field subscriptSizing=\"dynamic\">\r\n            <input\r\n              *ngSwitchDefault\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              matInput\r\n              type=\"text\"\r\n              [required]=\"true\"\r\n              placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\" />\r\n            <input\r\n              *ngSwitchCase=\"'number'\"\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              matInput\r\n              type=\"number\"\r\n              placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\" />\r\n            <mat-select *ngSwitchCase=\"'boolean'\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option [value]=\"true\">&#10003;</mat-option>\r\n              <mat-option [value]=\"false\">&#10005;</mat-option>\r\n            </mat-select>\r\n            <mat-select\r\n              *ngSwitchCase=\"'select'\"\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              (selectionChange)=\"optionSelected(prefilter)\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option *ngFor=\"let col of prefilter.data\" [value]=\"col.value\">\r\n                {{ col.description }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n              <input\r\n                matInput\r\n                formControlName=\"{{ prefilter.key }}\"\r\n                [type]=\"'text'\"\r\n                [matAutocomplete]=\"auto\"\r\n                (keyup)=\"doFilter($event, prefilter)\" />\r\n              <mat-autocomplete\r\n                autoActiveFirstOption\r\n                #auto=\"matAutocomplete\"\r\n                class=\"arq-autocomplete\"\r\n                [displayWith]=\"displayFn\"\r\n                (optionSelected)=\"optionSelected(prefilter)\">\r\n                <mat-option *ngFor=\"let col of prefilter.dataFn | async\" [value]=\"col\">\r\n                  {{ col.description }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'date'\">\r\n              <input\r\n                matInput\r\n                formControlName=\"{{ prefilter.key }}\"\r\n                placeholder=\"DD/MM/AAAA\"\r\n                [matDatepicker]=\"picker\"\r\n                (click)=\"picker.open()\" />\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </ng-container>\r\n            <mat-select *ngSwitchCase=\"'image'\" formControlName=\"{{ prefilter.key }}\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option *ngFor=\"let col of prefilter.data\" [value]=\"col.value\">\r\n                {{ col.description }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-hint\r\n              style=\"color: red\"\r\n              *ngIf=\"formGroup.controls[prefilter.key].touched && formGroup.controls[prefilter.key].errors\">\r\n              {{ 'DT-BA.PREFILTERS.REQUIRED' | transloco }}\r\n            </mat-hint>\r\n          </mat-form-field>\r\n          <br />\r\n        </ng-container>\r\n      </mat-toolbar>\r\n    </ng-container>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button type=\"submit\">\r\n      {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n  </mat-dialog-actions>\r\n</form>\r\n", styles: [".dt-filter-toolbar{background-color:#fff}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i4$4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i11.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i11.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqPrefiltersDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-prefilters-dialog', template: "<h2 mat-dialog-title>{{ 'DT-BA.PREFILTERS.TITLE' | transloco }}</h2>\r\n<form [formGroup]=\"this.formGroup\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-dialog-content>\r\n    <ng-container *ngFor=\"let prefilter of data.prefilters; let i = index\">\r\n      <mat-toolbar class=\"dt-filter-toolbar\">\r\n        <mat-form-field subscriptSizing=\"dynamic\">\r\n          <mat-select placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\" [(value)]=\"data.prefilters[i]\">\r\n            <mat-option *ngFor=\"let col of fixedCol(prefilter.key)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n          </mat-select>\r\n          <mat-hint\r\n            class=\"mat-warn\"\r\n            *ngIf=\"formGroup.controls[prefilter.key].touched && formGroup.controls[prefilter.key].errors\"></mat-hint>\r\n        </mat-form-field>\r\n\r\n        <ng-container *ngIf=\"prefilter\" [ngSwitch]=\"prefilter.type\">\r\n          <mat-form-field subscriptSizing=\"dynamic\">\r\n            <input\r\n              *ngSwitchDefault\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              matInput\r\n              type=\"text\"\r\n              [required]=\"true\"\r\n              placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\" />\r\n            <input\r\n              *ngSwitchCase=\"'number'\"\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              matInput\r\n              type=\"number\"\r\n              placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\" />\r\n            <mat-select *ngSwitchCase=\"'boolean'\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option [value]=\"true\">&#10003;</mat-option>\r\n              <mat-option [value]=\"false\">&#10005;</mat-option>\r\n            </mat-select>\r\n            <mat-select\r\n              *ngSwitchCase=\"'select'\"\r\n              formControlName=\"{{ prefilter.key }}\"\r\n              (selectionChange)=\"optionSelected(prefilter)\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option *ngFor=\"let col of prefilter.data\" [value]=\"col.value\">\r\n                {{ col.description }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n              <input\r\n                matInput\r\n                formControlName=\"{{ prefilter.key }}\"\r\n                [type]=\"'text'\"\r\n                [matAutocomplete]=\"auto\"\r\n                (keyup)=\"doFilter($event, prefilter)\" />\r\n              <mat-autocomplete\r\n                autoActiveFirstOption\r\n                #auto=\"matAutocomplete\"\r\n                class=\"arq-autocomplete\"\r\n                [displayWith]=\"displayFn\"\r\n                (optionSelected)=\"optionSelected(prefilter)\">\r\n                <mat-option *ngFor=\"let col of prefilter.dataFn | async\" [value]=\"col\">\r\n                  {{ col.description }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'date'\">\r\n              <input\r\n                matInput\r\n                formControlName=\"{{ prefilter.key }}\"\r\n                placeholder=\"DD/MM/AAAA\"\r\n                [matDatepicker]=\"picker\"\r\n                (click)=\"picker.open()\" />\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </ng-container>\r\n            <mat-select *ngSwitchCase=\"'image'\" formControlName=\"{{ prefilter.key }}\">\r\n              <mat-option [value]=\"null\"></mat-option>\r\n              <mat-option *ngFor=\"let col of prefilter.data\" [value]=\"col.value\">\r\n                {{ col.description }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-hint\r\n              style=\"color: red\"\r\n              *ngIf=\"formGroup.controls[prefilter.key].touched && formGroup.controls[prefilter.key].errors\">\r\n              {{ 'DT-BA.PREFILTERS.REQUIRED' | transloco }}\r\n            </mat-hint>\r\n          </mat-form-field>\r\n          <br />\r\n        </ng-container>\r\n      </mat-toolbar>\r\n    </ng-container>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button type=\"submit\">\r\n      {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n  </mat-dialog-actions>\r\n</form>\r\n", styles: [".dt-filter-toolbar{background-color:#fff}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }];
    } });

class ArqDTBusquedaAvanzadaComponent extends ArqBaseComponent {
    set schema(val) {
        if (!isObservable(val))
            val = of(val);
        // Obtiene las columnas, las traduce con el servicio y las almacena en columnsSchema
        val.pipe(take$1(1)).subscribe((_schema) => {
            if (!_schema)
                return;
            this.allColumns = _schema.columns;
            [this.savedColumnsSchema, this.pkColumns, this.allColumnsSchema] = this.translateColumns(this.allColumns);
            this.pkKeys = this.pkColumns.map(column => column.key);
            this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema));
            // seteamos los observables tras el JSON.parse
            this.initializeAutocomplete();
            this.idDatatable = _schema.idDatatable;
            // Set backend componentConfig settings
            this.componentConfig.datatable.pageSize = _schema.rowNumber ? _schema.rowNumber : 10;
            if (_schema.selectionType)
                this.componentConfig.datatable.selectColumn = true;
            // Load default prefilters
            const prefilters = this.allColumnsSchema.filter((col) => col.isDefaultFilter);
            if (prefilters.length)
                this.loadPrefilters(prefilters);
            if (this.savedFilters && this.savedFilters.length > 0) {
                const defaultSavedFilter = this.savedFilters.find(filter => filter.isPredeterminado);
                if (defaultSavedFilter) {
                    this.applySavedFilters(defaultSavedFilter);
                }
            }
            this.rebuildTable();
        });
    }
    constructor(_changeDetector, dialog, arqDialog) {
        super();
        this._changeDetector = _changeDetector;
        this.dialog = dialog;
        this.arqDialog = arqDialog;
        this.refreshData$ = new Subject();
        this.loadDataEvent$ = new EventEmitter();
        this.$selectEvent = new EventEmitter();
        this.$actionEvent = new EventEmitter();
        this.componentConfig = { datatable: {} };
        this.filters = [];
        this.filtersChange = new EventEmitter();
        this.forceRebuild$ = new Subject();
        this.savedFilters = [];
        this.$saveSavedFilters = new EventEmitter();
        this.$deleteSavedFilters = new EventEmitter();
        this.addFilterForm = {
            data: [''],
            column: null
        };
        this.fDisplayedColumns = [];
        this.tableLoaded = false;
        this.savedFiltersStatus = '';
        this.selectedSavedFilter = null;
        /* For HTML Funcions */
        /**
         * Filtra las columnas recibidas, eliminado las que no son filtrables y las que ya estan utilizadas
         * @param filterCols Array de columnas
         * @returns Array con las columnas filtradas
         */
        this.filterCols = (filterCols) => filterCols
            .filter(filterCol => filterCol.isFilterable)
            .filter(filterCol => this.filters.filter(_ => filterCol.key === _.idColumn).length === 0);
        /**
         * -
         */
        this.getChipName = (filter) => {
            var _a, _b, _c, _d;
            const colName = (_b = (_a = this.allColumnsSchema.find(col => col.key === filter.idColumn)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : '***';
            let filterData = '';
            switch (filter.option) {
                case 'BASE':
                    switch (filter.type.toLowerCase()) {
                        default:
                            filterData = String(filter.baseFilterText || '***');
                            break;
                        case 'number':
                            filterData = String(filter.baseFilterNumber);
                            break;
                        case 'date':
                            filterData = filter.baseFilterDate
                                ? new Date(filter.baseFilterDate).toLocaleString().slice(0, 10).split('-').reverse().join('/')
                                : String(filter.baseFilterDate);
                            break;
                        case 'select':
                        case 'image':
                        case 'autocomplete':
                            filterData = String((_c = filter.baseFilterCombo) === null || _c === void 0 ? void 0 : _c.join(', '));
                            break;
                    }
                    break;
                case 'IS_NULL':
                    filterData = 'No informado';
                    break;
                case 'NOT_NULL':
                    filterData = 'Informado';
                    break;
                case 'RANGES':
                    filterData =
                        `desde ${filter.fromDate || filter.fromNumber || '*'} ` +
                            `hasta ${filter.untilDate || filter.untilNumber || '*'}`;
                    break;
                case 'MULTIPLE':
                    filterData = ((_d = filter.baseFilterText) === null || _d === void 0 ? void 0 : _d.split(',').join(', ')) || '';
                    break;
                default:
                    filterData = '(ADV)';
                    break;
            }
            if ((colName + filterData).length < 25)
                return `<b>${colName}:</b> ${filterData}`;
            else
                return `<b>${colName}</b>`;
        };
        /**
         *
         */
        this.hiddenFilters = (_filters) => _filters.filter(f => !f.hidden);
    }
    ngOnInit() {
        this.loadedData$ = this.loadedData$.pipe(map((data) => {
            data.content = data.content.map(row => {
                const pCol = {};
                row.columns.forEach((col) => {
                    pCol[col.nameColumnGrid] = col.valueColumnGrid;
                });
                return pCol;
            });
            return data;
        }));
        // Establece las configuraciones por defecto
        if (typeof this.componentConfig.headerButtons === 'undefined')
            this.componentConfig.headerButtons = [];
        if (typeof this.componentConfig.cleanFiltersButton === 'undefined')
            this.componentConfig.cleanFiltersButton = true;
        if (typeof this.componentConfig.headerToolbarsPos === 'undefined')
            this.componentConfig.headerToolbarsPos = 'normal';
        if (typeof this.componentConfig.datatable.selectColumn === 'undefined')
            this.componentConfig.datatable.selectColumn = false;
        // Si existe este observable se subscribe a el
        if (this.forceRebuild$)
            this.forceRebuild$.pipe(takeUntil(this.unsubscribe$)).subscribe(_ => this.rebuildTable());
    }
    translateColumns(columns) {
        const translatedColumns = columns
            .sort((x, y) => x.order - y.order)
            .map(column => {
            var _a, _b;
            return {
                key: column.idColumn,
                type: column.type,
                label: column.label,
                data: column.comboItemList,
                dataFn: column.type === 'autocomplete' ? of(column.comboItemList) : undefined,
                format: column.format,
                editInputSize: column.sizeCol ? column.sizeCol : '150px',
                isHidden: !((_a = column.showDefault) !== null && _a !== void 0 ? _a : true),
                isFilterable: (_b = column.showHeader) !== null && _b !== void 0 ? _b : true,
                isPk: column.pkColumn,
                isDefaultFilter: column.defaultFilter === DefaultFilterType.REQUERIDO ||
                    column.defaultFilter === DefaultFilterType.NO_REQUERIDO,
                isRequired: column.defaultFilter === DefaultFilterType.REQUERIDO,
                isOnlyFilter: column.isOnlyFilter,
                dependsOn: column.dependsOn ? [column.dependsOn] : undefined
            };
        });
        return [
            translatedColumns.filter(column => !column.isOnlyFilter && !column.isPk),
            translatedColumns.filter(column => !column.isOnlyFilter && column.isPk),
            translatedColumns
        ];
    }
    loadPrefilters(prefilters) {
        const dialogRef = this.dialog.open(ArqPrefiltersDialogComponent, {
            maxWidth: '900px',
            minWidth: '400px',
            disableClose: true,
            data: { idDatatable: this.idDatatable, prefilters: prefilters, refreshComboFn: this._refreshComboFn }
        });
        dialogRef
            .afterClosed()
            .pipe(take$1(1))
            .subscribe((_filterForms) => {
            if (!_filterForms || _filterForms.length === 0)
                return;
            _filterForms
                .filter((filterForm) => this.isValidFilter(filterForm))
                .forEach((filterForm) => this.filters.push(this.generateFilter(filterForm)));
            this.requireData(this.lastRequest);
        });
    }
    isValidFilter(filter) {
        return (!!filter.data[0] &&
            !!filter.column &&
            (filter.column.type !== 'autocomplete' ||
                (filter.column.type === 'autocomplete' && filter.data[0].hasOwnProperty('value'))));
    }
    // TWO-WAY BINDING TABLE DATA LOGIC
    requireData(request) {
        this.loadDataEvent$.emit({ request: this.generatePageable(request), filters: this.filters });
        this.lastRequest = request;
    }
    generatePageable(request) {
        var _a, _b;
        return {
            page: request.page ? request.page : 0,
            size: request.size ? request.size : 10,
            sortName: (_a = request.sort) === null || _a === void 0 ? void 0 : _a.split(',')[0],
            sortDirection: (_b = request.sort) === null || _b === void 0 ? void 0 : _b.split(',')[1].toUpperCase()
        };
    }
    rebuildTable() {
        var _a;
        this.tableLoaded = false;
        // Genera las columnas la tabla de filtros
        this.fDisplayedColumns = (_a = this.columnsSchema) === null || _a === void 0 ? void 0 : _a.map((col) => col.key);
        setTimeout(() => {
            this.tableLoaded = true;
            this._changeDetector.detectChanges();
        }, 1);
    }
    showHideCol(col) {
        col.isHidden = col.isHidden ? !col.isHidden : true;
        this.allColumns[this.allColumns.findIndex(_col => _col.idColumn === col.key)].showDefault = !col.isHidden;
        this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));
        // seteamos los observables tras el JSON.parse
        this.initializeAutocomplete();
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.rebuildTable();
    }
    emitActionEvent(id, value) {
        this.$actionEvent.emit({ id, value });
    }
    handleSelectEvent(ev) {
        this.$selectEvent.emit(ev);
    }
    // FILTERS FUNCTIONS
    cleanFilters() {
        for (let i = this.filters.length - 1; i >= 0; i--) {
            if (!this.filters[i].hidden) {
                this.filters.splice(i, 1);
            }
        }
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = '';
        this.rebuildTable();
    }
    addFilter() {
        if (!this.isValidFilter(this.addFilterForm))
            return;
        const filter = this.generateFilter(this.addFilterForm);
        this.checkDependent(filter, false);
        this.filters.push(filter);
        this.addFilterForm = { data: [''], column: null };
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.requireData(this.lastRequest);
    }
    generateFilter(filter, filterType = null) {
        var _a, _b, _c, _d;
        // TODO: Sacar funcion a servicio
        const dataCol = this.allColumnsSchema.find((_) => { var _a; return _.key === ((_a = filter.column) === null || _a === void 0 ? void 0 : _a.key); });
        const gFilter = {
            idDatatable: this.idDatatable,
            idColumn: (_a = dataCol === null || dataCol === void 0 ? void 0 : dataCol.key) !== null && _a !== void 0 ? _a : 'text',
            type: (_c = (_b = dataCol === null || dataCol === void 0 ? void 0 : dataCol.type) === null || _b === void 0 ? void 0 : _b.toUpperCase()) !== null && _c !== void 0 ? _c : 'TEXT',
            option: 'BASE',
            formatColumn: dataCol === null || dataCol === void 0 ? void 0 : dataCol.format,
            dependsOn: dataCol === null || dataCol === void 0 ? void 0 : dataCol.dependsOn,
            hidden: dataCol === null || dataCol === void 0 ? void 0 : dataCol.isRequired
        };
        if (!filterType) {
            switch ((_d = dataCol === null || dataCol === void 0 ? void 0 : dataCol.type) === null || _d === void 0 ? void 0 : _d.toLowerCase()) {
                default:
                    gFilter.baseFilterText = filter.data[0];
                    break;
                case 'number':
                    gFilter.baseFilterNumber = +filter.data[0];
                    break;
                case 'date':
                    gFilter.baseFilterDate = new Date(filter.data[0]);
                    break;
                case 'select':
                case 'image':
                    gFilter.baseFilterCombo = [filter.data[0]];
                    break;
                case 'autocomplete':
                    gFilter.baseFilterCombo = [filter.data[0].value];
                    break;
            }
        }
        else {
            switch (filterType) {
                default:
                    gFilter.baseFilterText = filter.data[0];
                    break;
                case 'informed':
                    gFilter.option = filter.data[0] === 'false' ? 'IS_NULL' : 'NOT_NULL';
                    break;
                case 'daterange':
                    gFilter.option = 'RANGES';
                    gFilter.fromDate = new Date(filter.data[0]);
                    gFilter.untilDate = new Date(filter.data[1]);
                    break;
                case 'numberrange':
                    gFilter.option = 'RANGES';
                    gFilter.fromNumber = +filter.data[0];
                    gFilter.untilNumber = +filter.data[1];
                    break;
                case 'selectmultiple':
                case 'autocompletemultiple':
                    gFilter.option = 'MULTIPLE';
                    gFilter.baseFilterCombo = filter.data;
                    break;
                case 'textmultiple':
                    gFilter.option = 'MULTIPLE';
                    gFilter.baseFilterText = filter.data.join(',');
                    break;
            }
        }
        return gFilter;
    }
    removeFilter(rmFltr) {
        this.resetColumnSchema(rmFltr);
        // Cambia el estado de los filtros para mostrar el boton de guardado
        this.savedFiltersStatus = 'modified';
        this.checkDependent(rmFltr, true);
        this.filters.splice(this.filters.findIndex(filter => filter.idColumn === rmFltr.idColumn), 1);
        this.requireData(this.lastRequest);
    }
    resetColumnSchema(filter) {
        filter.baseFilterCombo = undefined;
        if (filter.type === 'autocomplete') {
            const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === filter.idColumn);
            columnSchema.dataFn = of(columnSchema.data);
        }
    }
    checkDependent(filter, remove) {
        const dependentCols = this.allColumns.filter(col => col.dependsOn === filter.idColumn);
        dependentCols.forEach(col => {
            var _a;
            const columnSchema = this.allColumnsSchema.find(colSchema => colSchema.key === col.idColumn);
            if (!columnSchema)
                return;
            if (remove) {
                columnSchema.dataFn = of(columnSchema.data);
                this.filters.splice(this.filters.findIndex(filter => filter.idColumn === col.idColumn), 1);
            }
            const filterComboDynam = {
                idColumn: col.idColumn,
                idDatatable: col.idDatatable,
                queryParams: { [filter.idColumn]: ((_a = filter.baseFilterCombo) === null || _a === void 0 ? void 0 : _a.join(',')) || '' }
            };
            this._refreshComboFn(filterComboDynam).subscribe((data) => {
                var _a;
                switch ((_a = columnSchema === null || columnSchema === void 0 ? void 0 : columnSchema.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                    case 'select':
                    case 'image':
                        columnSchema.data = data;
                        break;
                    case 'autocomplete':
                        columnSchema.data = data;
                        columnSchema.dataFn = of(data);
                        break;
                }
            });
        });
    }
    /**
     * Abre el modal de seleccion de filtros avanzados y genera el filtro con la respuesta
     */
    openAdvFilters() {
        const dialogRef = this.dialog.open(ArqAdvFilterDialogComponent, {
            width: '50%',
            maxWidth: '750px',
            minWidth: '400px',
            data: {
                selectedCol: this.addFilterForm.column,
                filterCols: this.filterCols,
                allColumnsSchema: this.allColumnsSchema
            }
        });
        dialogRef
            .afterClosed()
            .pipe(take$1(1))
            .subscribe(_filter => {
            if (!_filter)
                return;
            const filter = this.generateFilter(_filter, _filter.type);
            this.filters.push(filter);
            this.savedFiltersStatus = 'modified';
            this.checkDependent(filter, false);
            this.addFilterForm = { data: [''], column: null };
            this.requireData(this.lastRequest);
        });
    }
    selectionChange() {
        var _a;
        if (((_a = this.addFilterForm.column) === null || _a === void 0 ? void 0 : _a.type) === 'autocomplete') {
            this.addFilterForm.column.dataFn = of(this.addFilterForm.column.data);
        }
    }
    doFilter(filter) {
        filter.column.dataFn = filter.column.dataFn.pipe(map(val => this.filter(val, filter.data[0])));
    }
    filter(val, data) {
        if (!val)
            return [];
        return val.filter(item => { var _a; return item.description.toLowerCase().includes(((_a = data.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || data.toLowerCase()); });
    }
    displayFn(option) {
        return (option === null || option === void 0 ? void 0 : option.description) || '';
    }
    /**
     *
     */
    applySavedFilters(filters) {
        // Limpiamos los filtros aplicados y aplicamos los nuevos
        this.filters = this.filters.filter(f => f.hidden);
        filters.filters.forEach(f => this.filters.push(f));
        // Mostramos/ocultamos las columnas
        this.savedColumnsSchema = this.savedColumnsSchema.map(_scs => {
            let _ = _scs;
            filters.columns.forEach((_fc) => {
                if (_scs.key === _fc.idColumn) {
                    _scs.isHidden = !_fc.isShowDefault;
                    _ = _scs;
                }
            });
            return _;
        });
        this.columnsSchema = JSON.parse(JSON.stringify(this.savedColumnsSchema.filter(_col => !_col.isHidden)));
        // seteamos los observables tras el JSON.parse
        this.initializeAutocomplete();
        this.savedFiltersStatus = 'loaded';
        this.selectedSavedFilter = filters;
        this.rebuildTable();
    }
    /**
     *
     */
    saveSavedFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield this.nameFilterDialog();
            if (!_data || !_data.name)
                return;
            const _name = _data.name;
            const _default = _data.default;
            const _priv = yield this.confirmPrivateFDialog();
            if (typeof _priv === 'undefined')
                return;
            const sFilter = {
                columns: this.savedColumnsSchema.map(col => {
                    return {
                        idColumn: col.key,
                        isShowDefault: !col.isHidden
                    };
                }),
                filters: this.filters.filter(_ => !_.hidden),
                idDatatable: this.idDatatable,
                nombre: _name,
                isPredeterminado: _default,
                isPublico: !_priv
            };
            if (sFilter.isPublico && sFilter.isPredeterminado) {
                this.arqDialog.open({
                    confirmBtn: true,
                    message: 'No se puede crear un filtro publico publico por defecto',
                    title: 'Error',
                    type: 'alert',
                    icon: 'warning',
                    color: 'text-warning',
                    textConfirm: 'Continuar'
                });
                return;
            }
            // HANDLER
            const _filter = this.savedFilters.find(_ => _.nombre === sFilter.nombre);
            if (_filter) {
                if (_filter.isPublico)
                    this.arqDialog.open({
                        confirmBtn: true,
                        message: 'El filtro ya existe y no se puede sobreescribir un filtro publico',
                        title: 'Error',
                        type: 'alert',
                        icon: 'warning',
                        color: 'text-warning',
                        textConfirm: 'Continuar'
                    });
                else
                    this.arqDialog
                        .open({
                        cancelBtn: true,
                        confirmBtn: true,
                        message: 'El filtro ya existe y se va a sobreescribir. ¿Deseas continuar?',
                        title: 'Guardado de filtro',
                        type: 'alert',
                        icon: 'warning',
                        color: 'text-warning',
                        textConfirm: 'Aceptar',
                        textCancel: 'Cancelar'
                    })
                        .subscribe((_res) => {
                        if (_res) {
                            this.$saveSavedFilters.emit(sFilter);
                            this.savedFiltersStatus = 'loaded';
                            this.selectedSavedFilter = sFilter;
                        }
                    });
            }
            else {
                this.$saveSavedFilters.emit(sFilter);
                this.savedFiltersStatus = 'loaded';
                this.selectedSavedFilter = sFilter;
            }
            this._changeDetector.detectChanges();
        });
    }
    /**
     *
     */
    deleteSavedFilters() {
        if (this.selectedSavedFilter !== null) {
            this.arqDialog
                .open({
                cancelBtn: true,
                confirmBtn: true,
                message: 'Vas a borrar el filtro seleccionado (' + this.selectedSavedFilter.nombre + '). ¿Deseas continuar?',
                title: 'Borrar filtro guardado',
                type: 'alert',
                icon: 'warning',
                color: 'text-warning',
                textConfirm: 'Aceptar',
                textCancel: 'Cancelar'
            })
                .subscribe((_res) => {
                if (_res) {
                    if (this.selectedSavedFilter && this.selectedSavedFilter.idDatatableFilter)
                        this.$deleteSavedFilters.emit(this.selectedSavedFilter);
                    else
                        this.$deleteSavedFilters.emit(this.savedFilters.reverse().find(_ => { var _a; return ((_a = this.selectedSavedFilter) === null || _a === void 0 ? void 0 : _a.nombre) === _.nombre; }));
                    this.savedFiltersStatus = '';
                    this.selectedSavedFilter = null;
                }
            });
        }
    }
    nameFilterDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.arqDialog.open({}, ArqDTBANameFilterDialogComponent).subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    confirmPrivateFDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.arqDialog
                    .open({
                    cancelBtn: true,
                    confirmBtn: true,
                    message: '¿Quieres que el filtro sea privado o público?',
                    title: 'Guardado de filtro',
                    type: 'alert',
                    icon: 'warning',
                    color: 'text-warning',
                    textConfirm: 'Privado',
                    textCancel: 'Publico'
                })
                    .subscribe((priv) => resolve(priv));
            });
        });
    }
    initializeAutocomplete() {
        this.columnsSchema
            .filter(column => column.data && column.type === 'autocomplete')
            .forEach(column => (column.dataFn = of(column.data)));
    }
}
ArqDTBusquedaAvanzadaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$3.MatDialog }, { token: ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqDTBusquedaAvanzadaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDTBusquedaAvanzadaComponent, selector: "arq-dt-busqueda-avanzada", inputs: { schema: "schema", loadedData$: ["loadedData", "loadedData$"], refreshData$: ["refreshData", "refreshData$"], componentConfig: "componentConfig", filters: "filters", forceRebuild$: ["forceRebuild", "forceRebuild$"], _refreshComboFn: ["refreshComboFn", "_refreshComboFn"], savedFilters: "savedFilters" }, outputs: { loadDataEvent$: "loadDataEvent", $selectEvent: "selectEvent", $actionEvent: "actionEvent", filtersChange: "filtersChange", $saveSavedFilters: "saveSavedFilters", $deleteSavedFilters: "deleteSavedFilters" }, usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"columnsSchema && tableLoaded\">\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'normal'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'inverted'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyButtons'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyFilters'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- DATATABLE -->\r\n  <arq-datatable\r\n    *ngIf=\"columnsSchema\"\r\n    [loadedData]=\"loadedData$\"\r\n    [refreshData]=\"refreshData$\"\r\n    (loadDataEvent)=\"requireData($event)\"\r\n    [columnsSchema]=\"columnsSchema\"\r\n    [tableConfig]=\"componentConfig.datatable\"\r\n    (selectEvent)=\"handleSelectEvent($event)\"></arq-datatable>\r\n</div>\r\n\r\n<!-- BUTTON TOOLBAR -->\r\n<ng-template #tButtons>\r\n  <mat-toolbar>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"showHideSelect\" color=\"primary\">\r\n      {{ 'DT-BA.SHOW-HIDE-COLS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"savedFiltersM\" color=\"primary\">\r\n      {{ 'DT-BA.SAVED-FILTERS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n\r\n    <mat-chip-listbox *ngIf=\"savedFiltersStatus === 'loaded'\" style=\"margin-left: 0.5em; margin-right: 1em\">\r\n      <mat-chip\r\n        ><b>{{ 'DT-BA.FILTERS' | transloco }}:</b> {{ selectedSavedFilter?.nombre }}</mat-chip\r\n      >\r\n    </mat-chip-listbox>\r\n\r\n    <button *ngIf=\"savedFiltersStatus === 'loaded'\" mat-raised-button (click)=\"deleteSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.DELETE-FILTERS' | transloco }}\r\n    </button>\r\n    <button *ngIf=\"savedFiltersStatus === 'modified'\" mat-raised-button (click)=\"saveSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.SAVE-FILTERS' | transloco }}\r\n    </button>\r\n\r\n    <span class=\"toolbar-spacer\"></span>\r\n\r\n    <button\r\n      *ngIf=\"componentConfig.cleanFiltersButton && componentConfig.headerToolbarsPos !== 'onlyFilters'\"\r\n      mat-raised-button\r\n      (click)=\"cleanFilters()\"\r\n      color=\"primary\">\r\n      {{ 'DT-BA.CLEAN-FILTERS' | transloco }}\r\n    </button>\r\n    <button\r\n      *ngFor=\"let btn of componentConfig.headerButtons\"\r\n      mat-raised-button\r\n      (click)=\"emitActionEvent(btn.id, btn.value || null)\"\r\n      [color]=\"btn.color ? btn.color : 'primary'\"\r\n      [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\">\r\n      {{ btn.label }}\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <br />\r\n\r\n  <mat-menu #showHideSelect=\"matMenu\">\r\n    <button *ngFor=\"let col of savedColumnsSchema\" mat-menu-item (click)=\"showHideCol(col)\">\r\n      <mat-icon *ngIf=\"col.isHidden\" class=\"empty\">check_box_outline_blank</mat-icon>\r\n      <mat-icon *ngIf=\"!col.isHidden\" class=\"checked\">check_box</mat-icon>\r\n      {{ col.label }}\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #savedFiltersM=\"matMenu\">\r\n    <ng-container *ngIf=\"savedFilters.length\">\r\n      <button *ngFor=\"let sf of savedFilters\" mat-menu-item (click)=\"applySavedFilters(sf)\">\r\n        <span>{{ sf.nombre }}</span>\r\n        <mat-icon [style.color]=\"sf.isPredeterminado ? 'gold' : 'grey'\">{{\r\n          sf.isPublico ? 'public' : 'person'\r\n        }}</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!savedFilters.length\">\r\n      <button mat-menu-item style=\"font-style: italic\">{{ 'DT-BA.NOT-SAVED-FILTERS' | transloco }}</button>\r\n    </ng-container>\r\n  </mat-menu>\r\n</ng-template>\r\n\r\n<!-- FILTERS TOOLBAR -->\r\n<ng-template #tFilters>\r\n  <mat-toolbar class=\"dt-filter-toolbar\">\r\n    <button mat-raised-button color=\"basic\" (click)=\"openAdvFilters()\">\r\n      <mat-icon>tune</mat-icon> {{ 'DT-BA.ADVANCED' | transloco }}\r\n    </button>\r\n\r\n    <mat-form-field>\r\n      <mat-select\r\n        placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\"\r\n        [(value)]=\"addFilterForm.column\"\r\n        (selectionChange)=\"selectionChange()\">\r\n        <mat-option *ngFor=\"let col of filterCols(allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <ng-container *ngIf=\"addFilterForm.column\" [ngSwitch]=\"addFilterForm.column.type\">\r\n      <mat-form-field>\r\n        <input\r\n          *ngSwitchDefault\r\n          matInput\r\n          type=\"text\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <input\r\n          *ngSwitchCase=\"'number'\"\r\n          matInput\r\n          type=\"number\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <mat-select *ngSwitchCase=\"'boolean'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option [value]=\"true\">&#10003;</mat-option>\r\n          <mat-option [value]=\"false\">&#10005;</mat-option>\r\n        </mat-select>\r\n        <mat-select *ngSwitchCase=\"'select'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <input\r\n            matInput\r\n            [type]=\"'text'\"\r\n            [matAutocomplete]=\"auto\"\r\n            [(ngModel)]=\"addFilterForm.data[0]\"\r\n            (ngModelChange)=\"doFilter(addFilterForm)\" />\r\n          <mat-autocomplete\r\n            autoActiveFirstOption\r\n            #auto=\"matAutocomplete\"\r\n            class=\"arq-autocomplete\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let col of addFilterForm.column.dataFn | async\" [value]=\"col\">\r\n              {{ col.description }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'date'\">\r\n          <input\r\n            matInput\r\n            placeholder=\"DD/MM/AAAA\"\r\n            [matDatepicker]=\"picker\"\r\n            (dateChange)=\"addFilterForm.data[0] = $event.value\"\r\n            (click)=\"picker.open()\" />\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </ng-container>\r\n        <mat-select *ngSwitchCase=\"'image'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br />\r\n    </ng-container>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"addFilter()\">\r\n      <mat-icon>add</mat-icon> {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n\r\n    <mat-chip-listbox>\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <mat-chip *ngIf=\"i < 3\">\r\n          <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          <span matChipRemove style=\"margin-left: 0em\"><mat-icon (click)=\"removeFilter(filter)\">cancel</mat-icon></span>\r\n        </mat-chip>\r\n        <mat-chip *ngIf=\"i === 3\">\r\n          <b>+{{ hiddenFilters(filters).length - 3 }}</b>\r\n          <span matChipRemove style=\"margin-left: 0em\">\r\n            <mat-icon [matMenuTriggerFor]=\"moreFilters\">more_horiz</mat-icon>\r\n          </span>\r\n        </mat-chip>\r\n      </ng-container>\r\n    </mat-chip-listbox>\r\n\r\n    <mat-menu #moreFilters=\"matMenu\">\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <button mat-menu-item (click)=\"removeFilter(filter)\" *ngIf=\"i > 2\">\r\n          <mat-chip>\r\n            <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          </mat-chip>\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  <br />\r\n</ng-template>\r\n", styles: ["table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d!important;background-color:#e0e0e0!important;border:2px solid;border-color:#fff}.mat-button.mat-small{min-width:1%}.mat-menu-item .mat-icon.checked{display:none;pointer-events:none}.mat-menu-item .mat-icon.empty{pointer-events:none}.mat-menu-item.selected .mat-icon.empty{display:none}.mat-menu-item.selected .mat-icon.checked{display:unset}.toolbar-spacer{flex:1 1 auto}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: ArqDatatableComponent, selector: "arq-datatable", inputs: ["columnsSchema", "tableConfig", "loadedData", "loadDataFn", "refreshData", "form", "isEditing", "itemsPerPageLabel", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range", "loadDataMantFn"], outputs: ["loadDataEvent", "selectEvent"] }, { kind: "component", type: i4$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i3$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i3$7.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3$7.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3$7.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: i4$4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i11.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i11.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i1$2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i1$2.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "directive", type: i1$2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.TranslocoPipe, name: "transloco" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-dt-busqueda-avanzada', template: "<div *ngIf=\"columnsSchema && tableLoaded\">\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'normal'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'inverted'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyButtons'\">\r\n    <ng-container *ngTemplateOutlet=\"tButtons\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"componentConfig.headerToolbarsPos === 'onlyFilters'\">\r\n    <ng-container *ngTemplateOutlet=\"tFilters\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- DATATABLE -->\r\n  <arq-datatable\r\n    *ngIf=\"columnsSchema\"\r\n    [loadedData]=\"loadedData$\"\r\n    [refreshData]=\"refreshData$\"\r\n    (loadDataEvent)=\"requireData($event)\"\r\n    [columnsSchema]=\"columnsSchema\"\r\n    [tableConfig]=\"componentConfig.datatable\"\r\n    (selectEvent)=\"handleSelectEvent($event)\"></arq-datatable>\r\n</div>\r\n\r\n<!-- BUTTON TOOLBAR -->\r\n<ng-template #tButtons>\r\n  <mat-toolbar>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"showHideSelect\" color=\"primary\">\r\n      {{ 'DT-BA.SHOW-HIDE-COLS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n    <button mat-raised-button class=\"menuTrigger\" [matMenuTriggerFor]=\"savedFiltersM\" color=\"primary\">\r\n      {{ 'DT-BA.SAVED-FILTERS' | transloco }} <mat-icon>arrow_drop_down</mat-icon>\r\n    </button>\r\n\r\n    <mat-chip-listbox *ngIf=\"savedFiltersStatus === 'loaded'\" style=\"margin-left: 0.5em; margin-right: 1em\">\r\n      <mat-chip\r\n        ><b>{{ 'DT-BA.FILTERS' | transloco }}:</b> {{ selectedSavedFilter?.nombre }}</mat-chip\r\n      >\r\n    </mat-chip-listbox>\r\n\r\n    <button *ngIf=\"savedFiltersStatus === 'loaded'\" mat-raised-button (click)=\"deleteSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.DELETE-FILTERS' | transloco }}\r\n    </button>\r\n    <button *ngIf=\"savedFiltersStatus === 'modified'\" mat-raised-button (click)=\"saveSavedFilters()\" color=\"primary\">\r\n      {{ 'DT-BA.SAVE-FILTERS' | transloco }}\r\n    </button>\r\n\r\n    <span class=\"toolbar-spacer\"></span>\r\n\r\n    <button\r\n      *ngIf=\"componentConfig.cleanFiltersButton && componentConfig.headerToolbarsPos !== 'onlyFilters'\"\r\n      mat-raised-button\r\n      (click)=\"cleanFilters()\"\r\n      color=\"primary\">\r\n      {{ 'DT-BA.CLEAN-FILTERS' | transloco }}\r\n    </button>\r\n    <button\r\n      *ngFor=\"let btn of componentConfig.headerButtons\"\r\n      mat-raised-button\r\n      (click)=\"emitActionEvent(btn.id, btn.value || null)\"\r\n      [color]=\"btn.color ? btn.color : 'primary'\"\r\n      [matTooltip]=\"btn.tooltip ? btn.tooltip : ''\">\r\n      {{ btn.label }}\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <br />\r\n\r\n  <mat-menu #showHideSelect=\"matMenu\">\r\n    <button *ngFor=\"let col of savedColumnsSchema\" mat-menu-item (click)=\"showHideCol(col)\">\r\n      <mat-icon *ngIf=\"col.isHidden\" class=\"empty\">check_box_outline_blank</mat-icon>\r\n      <mat-icon *ngIf=\"!col.isHidden\" class=\"checked\">check_box</mat-icon>\r\n      {{ col.label }}\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #savedFiltersM=\"matMenu\">\r\n    <ng-container *ngIf=\"savedFilters.length\">\r\n      <button *ngFor=\"let sf of savedFilters\" mat-menu-item (click)=\"applySavedFilters(sf)\">\r\n        <span>{{ sf.nombre }}</span>\r\n        <mat-icon [style.color]=\"sf.isPredeterminado ? 'gold' : 'grey'\">{{\r\n          sf.isPublico ? 'public' : 'person'\r\n        }}</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!savedFilters.length\">\r\n      <button mat-menu-item style=\"font-style: italic\">{{ 'DT-BA.NOT-SAVED-FILTERS' | transloco }}</button>\r\n    </ng-container>\r\n  </mat-menu>\r\n</ng-template>\r\n\r\n<!-- FILTERS TOOLBAR -->\r\n<ng-template #tFilters>\r\n  <mat-toolbar class=\"dt-filter-toolbar\">\r\n    <button mat-raised-button color=\"basic\" (click)=\"openAdvFilters()\">\r\n      <mat-icon>tune</mat-icon> {{ 'DT-BA.ADVANCED' | transloco }}\r\n    </button>\r\n\r\n    <mat-form-field>\r\n      <mat-select\r\n        placeholder=\"{{ 'DT-BA.COLUMN' | transloco }}\"\r\n        [(value)]=\"addFilterForm.column\"\r\n        (selectionChange)=\"selectionChange()\">\r\n        <mat-option *ngFor=\"let col of filterCols(allColumnsSchema)\" [value]=\"col\">{{ col.label }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <ng-container *ngIf=\"addFilterForm.column\" [ngSwitch]=\"addFilterForm.column.type\">\r\n      <mat-form-field>\r\n        <input\r\n          *ngSwitchDefault\r\n          matInput\r\n          type=\"text\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <input\r\n          *ngSwitchCase=\"'number'\"\r\n          matInput\r\n          type=\"number\"\r\n          placeholder=\"{{ 'DT-BA.FILTER' | transloco }}\"\r\n          [(ngModel)]=\"addFilterForm.data[0]\" />\r\n        <mat-select *ngSwitchCase=\"'boolean'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option [value]=\"true\">&#10003;</mat-option>\r\n          <mat-option [value]=\"false\">&#10005;</mat-option>\r\n        </mat-select>\r\n        <mat-select *ngSwitchCase=\"'select'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n        <ng-container *ngSwitchCase=\"'autocomplete'\">\r\n          <input\r\n            matInput\r\n            [type]=\"'text'\"\r\n            [matAutocomplete]=\"auto\"\r\n            [(ngModel)]=\"addFilterForm.data[0]\"\r\n            (ngModelChange)=\"doFilter(addFilterForm)\" />\r\n          <mat-autocomplete\r\n            autoActiveFirstOption\r\n            #auto=\"matAutocomplete\"\r\n            class=\"arq-autocomplete\"\r\n            [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let col of addFilterForm.column.dataFn | async\" [value]=\"col\">\r\n              {{ col.description }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'date'\">\r\n          <input\r\n            matInput\r\n            placeholder=\"DD/MM/AAAA\"\r\n            [matDatepicker]=\"picker\"\r\n            (dateChange)=\"addFilterForm.data[0] = $event.value\"\r\n            (click)=\"picker.open()\" />\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </ng-container>\r\n        <mat-select *ngSwitchCase=\"'image'\" [(ngModel)]=\"addFilterForm.data[0]\">\r\n          <mat-option [value]=\"null\"></mat-option>\r\n          <mat-option *ngFor=\"let col of addFilterForm.column.data\" [value]=\"col.value\">\r\n            {{ col.description }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br />\r\n    </ng-container>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"addFilter()\">\r\n      <mat-icon>add</mat-icon> {{ 'DT-BA.FILTERV' | transloco }}\r\n    </button>\r\n\r\n    <mat-chip-listbox>\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <mat-chip *ngIf=\"i < 3\">\r\n          <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          <span matChipRemove style=\"margin-left: 0em\"><mat-icon (click)=\"removeFilter(filter)\">cancel</mat-icon></span>\r\n        </mat-chip>\r\n        <mat-chip *ngIf=\"i === 3\">\r\n          <b>+{{ hiddenFilters(filters).length - 3 }}</b>\r\n          <span matChipRemove style=\"margin-left: 0em\">\r\n            <mat-icon [matMenuTriggerFor]=\"moreFilters\">more_horiz</mat-icon>\r\n          </span>\r\n        </mat-chip>\r\n      </ng-container>\r\n    </mat-chip-listbox>\r\n\r\n    <mat-menu #moreFilters=\"matMenu\">\r\n      <ng-container *ngFor=\"let filter of hiddenFilters(filters); let i = index\">\r\n        <button mat-menu-item (click)=\"removeFilter(filter)\" *ngIf=\"i > 2\">\r\n          <mat-chip>\r\n            <span [innerHTML]=\"getChipName(filter)\"></span>\r\n          </mat-chip>\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  <br />\r\n</ng-template>\r\n", styles: ["table,.table-filter{width:98%}.header-datatable{font-weight:700;text-align:left;font-size:.9em;color:#1e1d1d!important;background-color:#e0e0e0!important;border:2px solid;border-color:#fff}.mat-button.mat-small{min-width:1%}.mat-menu-item .mat-icon.checked{display:none;pointer-events:none}.mat-menu-item .mat-icon.empty{pointer-events:none}.mat-menu-item.selected .mat-icon.empty{display:none}.mat-menu-item.selected .mat-icon.checked{display:unset}.toolbar-spacer{flex:1 1 auto}mat-toolbar button{margin-right:.5em}.dt-filter-toolbar mat-form-field,.dt-filter-toolbar button{margin-right:1em}.dt-filter-toolbar mat-form-field{margin-top:1.5em}.dt-filter-toolbar mat-form-field ::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:.8em!important;padding-bottom:.8em!important}.dt-filter-toolbar mat-form-field ::ng-deep .mat-mdc-form-field-infix{min-height:0!important}button{border-radius:0!important;height:2.6em;min-height:2.6em;font-size:16px}button:not([disabled]):hover{background-color:#0c556d;color:#fff;border-radius:0}button[disabled]{color:#1e1d1d;background-color:#acacac}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$3.MatDialog }, { type: ArqDialogService }]; }, propDecorators: { schema: [{
                type: Input,
                args: ['schema']
            }], loadedData$: [{
                type: Input,
                args: ['loadedData']
            }], refreshData$: [{
                type: Input,
                args: ['refreshData']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], $selectEvent: [{
                type: Output,
                args: ['selectEvent']
            }], $actionEvent: [{
                type: Output,
                args: ['actionEvent']
            }], componentConfig: [{
                type: Input,
                args: ['componentConfig']
            }], filters: [{
                type: Input
            }], filtersChange: [{
                type: Output
            }], forceRebuild$: [{
                type: Input,
                args: ['forceRebuild']
            }], _refreshComboFn: [{
                type: Input,
                args: ['refreshComboFn']
            }], savedFilters: [{
                type: Input,
                args: ['savedFilters']
            }], $saveSavedFilters: [{
                type: Output,
                args: ['saveSavedFilters']
            }], $deleteSavedFilters: [{
                type: Output,
                args: ['deleteSavedFilters']
            }] } });
class ArqDTBANameFilterDialogComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.fDefault = false;
    }
    closeDialog() {
        this.dialogService.confirmed({ name: this.fName, default: this.fDefault });
    }
    toggleDefault() {
        this.fDefault = !this.fDefault;
    }
}
ArqDTBANameFilterDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBANameFilterDialogComponent, deps: [{ token: ArqDialogService }], target: i0.ɵɵFactoryTarget.Component });
ArqDTBANameFilterDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDTBANameFilterDialogComponent, selector: "arq-dt-ba-namefilter-dialog", ngImport: i0, template: `
    <div class="p-3">
      <h1 mat-dialog-title>Guardado de filtro</h1>
      <div mat-dialog-content>
        <p>Inserta nombre del filtro para guardar</p>
        <mat-form-field>
          <input matInput placeholder="Nombre del filtro" [(ngModel)]="fName" />
        </mat-form-field>
      </div>
      <div mat-dialog-content style="padding-top: 0px;">
        <span>Filtro por defecto </span>
        <mat-icon
          (click)="toggleDefault()"
          style="cursor: pointer; color: {{ fDefault ? 'gold' : 'grey' }}; vertical-align: middle;">
          star
        </mat-icon>
      </div>
      <div mat-dialog-actions align="end">
        <arq-button (click)="closeDialog()" label="Cancelar"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" label="Guardar"></arq-button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: ArqButtonComponent, selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i2$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i1$3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1$3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBANameFilterDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-dt-ba-namefilter-dialog',
                    template: `
    <div class="p-3">
      <h1 mat-dialog-title>Guardado de filtro</h1>
      <div mat-dialog-content>
        <p>Inserta nombre del filtro para guardar</p>
        <mat-form-field>
          <input matInput placeholder="Nombre del filtro" [(ngModel)]="fName" />
        </mat-form-field>
      </div>
      <div mat-dialog-content style="padding-top: 0px;">
        <span>Filtro por defecto </span>
        <mat-icon
          (click)="toggleDefault()"
          style="cursor: pointer; color: {{ fDefault ? 'gold' : 'grey' }}; vertical-align: middle;">
          star
        </mat-icon>
      </div>
      <div mat-dialog-actions align="end">
        <arq-button (click)="closeDialog()" label="Cancelar"></arq-button>
        <arq-button (click)="closeDialog()" color="primary" label="Guardar"></arq-button>
      </div>
    </div>
  `
                }]
        }], ctorParameters: function () { return [{ type: ArqDialogService }]; } });

class ArqDTBusquedaAvanzadaModule {
}
ArqDTBusquedaAvanzadaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDTBusquedaAvanzadaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, declarations: [ArqDTBusquedaAvanzadaComponent,
        ArqAdvFilterDialogComponent,
        ArqPrefiltersDialogComponent,
        ArqDTBANameFilterDialogComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,
        TranslocoRootModule,
        ArqDatatableModule,
        ArqButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule], exports: [ArqDTBusquedaAvanzadaComponent,
        ArqAdvFilterDialogComponent,
        ArqPrefiltersDialogComponent,
        ArqDTBANameFilterDialogComponent] });
ArqDTBusquedaAvanzadaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,
        TranslocoRootModule,
        ArqDatatableModule,
        ArqButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ArqDTBusquedaAvanzadaComponent,
                        ArqAdvFilterDialogComponent,
                        ArqPrefiltersDialogComponent,
                        ArqDTBANameFilterDialogComponent
                    ],
                    exports: [
                        ArqDTBusquedaAvanzadaComponent,
                        ArqAdvFilterDialogComponent,
                        ArqPrefiltersDialogComponent,
                        ArqDTBANameFilterDialogComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslocoModule,
                        TranslocoRootModule,
                        ArqDatatableModule,
                        ArqButtonModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatTableModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatMenuModule,
                        MatToolbarModule,
                        MatAutocompleteModule,
                        MatChipsModule,
                        MatTooltipModule,
                        MatDialogModule
                    ]
                }]
        }] });

class ArqFieldsetComponent {
    constructor() {
        this.legend = undefined;
    }
}
ArqFieldsetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqFieldsetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqFieldsetComponent, selector: "arq-fieldset", inputs: { legend: "legend" }, ngImport: i0, template: "<fieldset>\r\n  <legend\r\n    *ngIf=\"legend\">\r\n    <span\r\n      [matTooltip]=\"legend\">\r\n      {{ legend }}</span>\r\n  </legend>\r\n  <ng-content></ng-content>\r\n</fieldset>\r\n", styles: ["fieldset{width:100%;display:inline-block;padding:20px;box-sizing:border-box;border:solid 1px darkgray;border-radius:8px}legend{width:auto;max-width:80%}legend span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-fieldset', template: "<fieldset>\r\n  <legend\r\n    *ngIf=\"legend\">\r\n    <span\r\n      [matTooltip]=\"legend\">\r\n      {{ legend }}</span>\r\n  </legend>\r\n  <ng-content></ng-content>\r\n</fieldset>\r\n", styles: ["fieldset{width:100%;display:inline-block;padding:20px;box-sizing:border-box;border:solid 1px darkgray;border-radius:8px}legend{width:auto;max-width:80%}legend span{display:inline-block;width:100%;padding:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}\n"] }]
        }], propDecorators: { legend: [{
                type: Input
            }] } });

class ArqFieldsetModule {
}
ArqFieldsetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqFieldsetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetModule, declarations: [ArqFieldsetComponent], imports: [CommonModule,
        MatTooltipModule], exports: [ArqFieldsetComponent] });
ArqFieldsetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetModule, imports: [CommonModule,
        MatTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqFieldsetModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ArqFieldsetComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatTooltipModule,
                    ],
                    exports: [
                        ArqFieldsetComponent,
                    ]
                }]
        }] });

class ArqListadoComponent extends ArqBaseComponent {
    constructor(_arqHttpClient) {
        super();
        this._arqHttpClient = _arqHttpClient;
        this.LANG_ES = 'es';
        this.NAME_FC_DP_RANGE = '_2';
        this.SEPARATOR_DP_RANGE = '-';
        this.REQUERIDO_S = 'S';
        this.DATEPICKER_STR = 'datepicker';
        this.DATEPICKER_RANGE_STR = 'datepicker-range';
        this.SELECT_STR = 'select';
        this.SELECT_MULTIPLE_STR = 'select-multiple';
        this.AUTOCOMPLETE_STR = 'autocomplete';
        this.CHECKBOX_BASIC_STR = 'checkbox-basic';
        this.INPUT_MONEY_STR = 'input-money';
        this.INPUT_NUMBER_STR = 'input-number';
        this.DEPENDIENTE_REQUERIDO = '!';
        this.SEPARADOR = ',';
        this.PARAM_REGEXP = /{\d+}/g;
        this.dataEvent$ = new EventEmitter();
        //Style
        this.numCols = '3';
        this.rowHeight = '4:1';
        this.lang = this.LANG_ES;
        // Button Export
        this.showBtnExport = false;
        this.colorBtnExport = 'primary';
        this.typeBtnExport = 'submit';
        this.iconBtnExport = 'save_alt';
        // Button Search
        this.showBtnSearch = false;
        this.colorBtnSearch = 'primary';
        this.typeBtnSearch = 'submit';
        this.iconBtnSearch = 'search';
        // Inputs
        this.msgError = 'El campo es obligatorio';
        // Checkbox-basic
        this.colorCheckboxBasic = 'primary';
        this.checkedCheckboxBasic = false;
        this.loadDataEvent$ = new EventEmitter();
        this.columnsSchema = [];
        this.selectOptionsArray = new Map();
        this.autocompletetOptionsArray = new Map();
        this.grupos = [];
    }
    ngOnInit() {
        this.observableData.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
            this.datos = data;
            this.datos.campos.sort((a, b) => a.orden - b.orden);
            this.rellenarIds();
            this.obtenerGrupos();
            this.createFormGroup(data.campos);
            this.cargarListados(data.campos);
            this.createColumnSchema(data.campos);
            this.eventRellenarValuesForm();
        });
    }
    /* Creamos un id de tipo string concatenando el id del formulario con el orden */
    rellenarIds() {
        this.datos.campos.forEach(campo => (campo.idCampo = `${campo.id}#${campo.orden}`));
    }
    obtenerGrupos() {
        const gruposUnicos = new Set();
        this.datos.campos.forEach(campo => {
            gruposUnicos.add(campo.grupo);
        });
        this.grupos = Array.from(gruposUnicos);
    }
    /* Rellena los values del ArqDynamic que llega del back con los valores que tienen los controles del formulario
    cada vez que se actualiza uno */
    eventRellenarValuesForm() {
        this.datos.campos.forEach((campo) => {
            this.fGroup.controls[campo.idCampo].valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
                var _a, _b, _c, _d;
                // Recuperamos el control modificado
                switch (campo.htmlTipo) {
                    case this.DATEPICKER_STR:
                        campo.value = (_a = this.fGroup.controls[campo.idCampo].value) === null || _a === void 0 ? void 0 : _a.toDate().toString();
                        break;
                    case this.DATEPICKER_RANGE_STR:
                        // TODO comprobar funcionamiento
                        campo.value =
                            campo.value && !((_b = campo.value) === null || _b === void 0 ? void 0 : _b.includes(this.SEPARATOR_DP_RANGE))
                                ? campo.value +
                                    this.SEPARATOR_DP_RANGE +
                                    ((_c = this.fGroup.controls[campo.idCampo + this.NAME_FC_DP_RANGE].value) === null || _c === void 0 ? void 0 : _c.toDate().toString())
                                : (_d = this.fGroup.controls[campo.idCampo].value) === null || _d === void 0 ? void 0 : _d.toDate().toString();
                        break;
                    case this.SELECT_STR:
                    case this.AUTOCOMPLETE_STR:
                    case this.SELECT_MULTIPLE_STR:
                        if (campo.listaDependiente && campo.value != this.getControlValue(campo.idCampo)) {
                            const dependientes = campo.listaDependiente.split(this.SEPARADOR);
                            dependientes.forEach(dependiente => {
                                const requerido = dependiente.includes(this.DEPENDIENTE_REQUERIDO);
                                const campoDependiente = this.datos.campos.find(c => c.orden.toString() == (requerido ? dependiente.split(this.DEPENDIENTE_REQUERIDO)[0] : dependiente));
                                this.fGroup.controls[campoDependiente.idCampo].reset();
                                if (requerido) {
                                    if (this.puedeHabilitarDependiente(campoDependiente)) {
                                        this.fGroup.controls[campoDependiente.idCampo].enable();
                                        this.cargarListado(campoDependiente, true);
                                    }
                                    else
                                        this.fGroup.controls[campoDependiente.idCampo].disable();
                                }
                                else {
                                    this.cargarListado(campoDependiente, true);
                                }
                            });
                        }
                        campo.value = this.getControlValue(campo.idCampo);
                        break;
                    default:
                        campo.value = this.fGroup.controls[campo.idCampo].value;
                        break;
                }
                this.dataEvent$.emit(this.datos);
            });
        });
    }
    getControlValue(idCampo) {
        var _a;
        return ((_a = this.fGroup.controls[idCampo].value) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('value'))
            ? this.fGroup.controls[idCampo].value.value
            : this.fGroup.controls[idCampo].value;
    }
    puedeHabilitarDependiente(campo) {
        let habilitar = true;
        const padres = this.datos.campos.filter(c => {
            const campoRequerido = `${campo.orden}${this.DEPENDIENTE_REQUERIDO}`;
            const regexp = new RegExp(`^${campoRequerido}|[^0-9]${campoRequerido}`);
            return regexp.test(c.listaDependiente);
        });
        padres.forEach(c => {
            const controlValue = this.getControlValue(c.idCampo);
            if (!controlValue || (Array.isArray(controlValue) && controlValue.length === 0)) {
                // Si el control no tiene value, deshabilitamos
                habilitar = false;
            }
            const condicion = this.extraerCondicion(c.listaDependiente, campo.orden);
            if (condicion && !condicion.split(this.SEPARADOR).includes(controlValue)) {
                // si no cumple la condición, deshabilitamos
                habilitar = false;
            }
        });
        return habilitar;
    }
    extraerCondicion(dependientes, orden) {
        const regex = new RegExp(`${orden}!\\[([^\\]]+)\\]`);
        const coincidencia = dependientes.match(regex);
        if (coincidencia && coincidencia[1]) {
            return coincidencia[1];
        }
        else {
            return null;
        }
    }
    // TWO-WAY BINDING TABLE DATA LOGIC
    requireData(request) {
        this.loadDataEvent$.emit(request);
    }
    cargarListados(campos) {
        campos.forEach((campo) => this.cargarListado(campo, false));
    }
    cargarListado(campo, recargar) {
        // miramos si se está recargando el campo y no existe dato variable
        if (recargar && !this.PARAM_REGEXP.test(campo.origenDatos))
            return;
        switch (campo.htmlTipo) {
            case this.SELECT_STR:
            case this.SELECT_MULTIPLE_STR:
                // rellenamos los posibles parametros que vengan en la url
                const endpoint = this.rellenarParametrosUrl(this.urlBaseBack + campo.origenDatos);
                this.selectOptionsArray.set(campo.idCampo, this._arqHttpClient.get(endpoint));
                break;
            case this.AUTOCOMPLETE_STR:
                // rellenamos los posibles parametros que vengan en la url y anyadimos los de la paginacion
                this.autocompletetOptionsArray.set(campo.idCampo, (request) => {
                    let endpoint = this.rellenarParametrosUrl(this.urlBaseBack + campo.origenDatos);
                    endpoint += (endpoint.includes('?') ? '&' : '?') + this.getUrlParamsFromRequest(request);
                    return this._arqHttpClient.get(endpoint);
                });
                break;
        }
    }
    rellenarParametrosUrl(url) {
        if (this.PARAM_REGEXP.test(url)) {
            const matches = url.match(this.PARAM_REGEXP);
            for (var match of matches) {
                const campoFiltro = this.datos.campos.find(c => c.orden.toString() === match.replace(/[{}]/g, ''));
                url = url.replace(match, campoFiltro ? this.getControlValue(campoFiltro.idCampo) || '' : '');
            }
        }
        return url;
    }
    getUrlParamsFromRequest(request) {
        return Object.entries(request)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
    }
    createColumnSchema(campos) {
        if (this.lang === this.LANG_ES) {
            campos.forEach((campo) => {
                this.addColumnSchema(campo, campo.htmlLabel, this.addTypeColumnSchema(campo));
            });
        }
        else {
            campos.forEach((campo) => {
                this.addColumnSchema(campo, campo.htmlLabelVal, this.addTypeColumnSchema(campo));
            });
        }
    }
    addTypeColumnSchema(campo) {
        let type;
        switch (campo.htmlTipo) {
            case this.INPUT_MONEY_STR:
            case this.INPUT_NUMBER_STR:
                type = 'number';
                break;
            case this.DATEPICKER_RANGE_STR:
            case this.DATEPICKER_STR:
                type = 'date';
                break;
            case this.CHECKBOX_BASIC_STR:
                type = 'boolean';
                break;
            default:
                type = 'text';
                break;
        }
        return type;
    }
    addColumnSchema(campo, label, type) {
        const columnSchema = {
            key: campo.htmlTipo,
            type: type,
            label: label
        };
        this.columnsSchema.push(columnSchema);
    }
    createFormGroup(campos) {
        this.fGroup = new FormGroup({});
        campos.forEach((campo) => {
            if (campo.htmlTipo === this.SELECT_MULTIPLE_STR && campo.value) {
                campo.value = campo.value.split(this.SEPARADOR);
            }
            this.fGroup.addControl(campo.idCampo, new FormControl(campo.value, [
                campo.htmlRequerido === this.REQUERIDO_S ? Validators.required : Validators.nullValidator
            ]));
            // Si es datepicker-range se añade un formControl más para la fecha fin
            if (campo.htmlTipo === this.DATEPICKER_RANGE_STR) {
                this.fGroup.addControl(campo.idCampo + this.NAME_FC_DP_RANGE, new FormControl(campo.value, [
                    campo.htmlRequerido === this.REQUERIDO_S ? Validators.required : Validators.nullValidator
                ]));
            }
            // comprobamos si es dependiente de otro campo y este es requerido
            const campoRequerido = `${campo.orden}${this.DEPENDIENTE_REQUERIDO}`;
            const regexp = new RegExp(`^${campoRequerido}|[^0-9]${campoRequerido}`);
            const padreRequerido = this.datos.campos.some(c => regexp.test(c.listaDependiente));
            // Deshabilitamos el campo si procede
            if (campo.disabled || padreRequerido) {
                this.fGroup.controls[campo.idCampo].disable();
            }
        });
    }
    search() {
        this.datos.campos.forEach(campo => {
            this.fGroup.controls[campo.idCampo].markAsTouched();
            this.fGroup.controls[campo.idCampo].updateValueAndValidity();
        });
        if (this.fGroup.valid) {
            this._btnSearchFn();
        }
        else {
            console.log('Errores en la validación');
        }
    }
    export() {
        this.datos.campos.forEach(campo => {
            this.fGroup.controls[campo.idCampo].markAsTouched();
            this.fGroup.controls[campo.idCampo].updateValueAndValidity();
        });
        if (this.fGroup.valid) {
            this._btnExportFn();
        }
        else {
            console.log('Errores en la validación');
        }
    }
}
ArqListadoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadoComponent, deps: [{ token: ArqHttpClient }], target: i0.ɵɵFactoryTarget.Component });
ArqListadoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqListadoComponent, selector: "arq-listado", inputs: { urlBaseBack: "urlBaseBack", observableData: "observableData", numCols: "numCols", rowHeight: "rowHeight", label: "label", subLabel: "subLabel", lang: "lang", showBtnExport: "showBtnExport", labelBtnExport: "labelBtnExport", colorBtnExport: "colorBtnExport", typeBtnExport: "typeBtnExport", iconBtnExport: "iconBtnExport", _btnExportFn: ["btnExportFn", "_btnExportFn"], showBtnSearch: "showBtnSearch", labelBtnSearch: "labelBtnSearch", colorBtnSearch: "colorBtnSearch", typeBtnSearch: "typeBtnSearch", iconBtnSearch: "iconBtnSearch", _btnSearchFn: ["btnSearchFn", "_btnSearchFn"], msgError: "msgError", colorCheckboxBasic: "colorCheckboxBasic", checkedCheckboxBasic: "checkedCheckboxBasic", loadedData$: ["loadedData", "loadedData$"], _tableConfig: ["tableConfig", "_tableConfig"] }, outputs: { dataEvent$: "dataEvent$", loadDataEvent$: "loadDataEvent" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.subLabel\">{{ this.subLabel }}</label>\r\n<h2 *ngIf=\"this.datos\">{{ this.datos.formulario.denominacion }}</h2>\r\n<div *ngFor=\"let grupo of this.grupos\">\r\n  <arq-fieldset [legend]=\"grupo\">\r\n    <mat-grid-list\r\n      *ngIf=\"this.datos\"\r\n      [cols]=\"this.datos.formulario.numColumnas || this.numCols\"\r\n      [rowHeight]=\"this.rowHeight\">\r\n      <mat-grid-tile *ngFor=\"let campo of this.datos.campos | filterByGrupo : grupo\" [colspan]=\"campo.anchoColumna\">\r\n        <arq-text-input\r\n          *ngIf=\"campo.htmlTipo === 'input-text'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-text-input>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"true\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n\r\n        <arq-datepicker-range\r\n          *ngIf=\"campo.htmlTipo === 'datepicker-range'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [fechaFin]=\"campo.idCampo + this.NAME_FC_DP_RANGE\"\r\n          [visibleRange]=\"false\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-datepicker-range>\r\n\r\n        <arq-datepicker\r\n          *ngIf=\"campo.htmlTipo === 'datepicker'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [placeholder]=\"'DD/MM/YYYY'\"></arq-datepicker>\r\n\r\n        <arq-input-money\r\n          *ngIf=\"campo.htmlTipo === 'input-money'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-money>\r\n\r\n        <arq-input-number\r\n          *ngIf=\"campo.htmlTipo === 'input-number'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-number>\r\n\r\n        <arq-checkbox-basic\r\n          *ngIf=\"campo.htmlTipo === 'checkbox-basic'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [color]=\"this.colorCheckboxBasic\"\r\n          [checked]=\"this.checkedCheckboxBasic\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-checkbox-basic>\r\n\r\n        <arq-autocomplete\r\n          *ngIf=\"campo.htmlTipo === 'autocomplete'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [options]=\"this.autocompletetOptionsArray.get(campo.idCampo)\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-autocomplete>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select-multiple'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"false\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [multiple]=\"true\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </arq-fieldset>\r\n</div>\r\n\r\n<div style=\"padding-top: 20px\">\r\n  <arq-button\r\n    *ngIf=\"this.showBtnSearch\"\r\n    [label]=\"this.labelBtnSearch\"\r\n    [color]=\"this.colorBtnSearch\"\r\n    [type]=\"this.typeBtnSearch\"\r\n    [icon]=\"this.iconBtnSearch\"\r\n    (click)=\"this.search()\">\r\n  </arq-button>\r\n\r\n  <arq-button\r\n    *ngIf=\"this.showBtnExport\"\r\n    [label]=\"this.labelBtnExport\"\r\n    [color]=\"this.colorBtnExport\"\r\n    [type]=\"this.typeBtnExport\"\r\n    [icon]=\"this.iconBtnExport\"\r\n    (click)=\"this.export()\">\r\n  </arq-button>\r\n</div>\r\n", styles: [".mat-grid-tile-content>*{width:95%}arq-datatable:last-child{display:block;margin-top:20px}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i2$1.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i2$1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i2$1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return ArqTextInputComponent; }), selector: "arq-text-input", inputs: ["maxLength", "append", "disabled"] }, { kind: "component", type: i0.forwardRef(function () { return ArqSelectComponent; }), selector: "arq-select", inputs: ["disabled", "selectOptionsList", "emptyOption", "fullObject", "multiple"], outputs: ["selectionChange"] }, { kind: "component", type: i0.forwardRef(function () { return ArqButtonComponent; }), selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "component", type: i0.forwardRef(function () { return ArqDatepickerRangeComponent; }), selector: "arq-datepicker-range", inputs: ["labelErrorStart", "labelErrorEnd", "visibleRange", "rangeLabel", "placeholderStart", "placeholderEnd", "fechaFin"], outputs: ["selectionChange"] }, { kind: "component", type: i0.forwardRef(function () { return ArqDatepickerComponent; }), selector: "arq-datepicker", inputs: ["label", "hint", "disabled"] }, { kind: "component", type: i0.forwardRef(function () { return ArqInputMoneyComponent; }), selector: "arq-input-money", inputs: ["maxLength", "append"] }, { kind: "component", type: i0.forwardRef(function () { return ArqInputNumberComponent; }), selector: "arq-input-number", inputs: ["maxLength", "append"] }, { kind: "component", type: i0.forwardRef(function () { return ArqCheckboxBasicComponent; }), selector: "arq-checkbox-basic", inputs: ["color", "checked", "disabled", "sectionClass", "spanClass", "checkbox_down", "checkbox_sn"] }, { kind: "component", type: i0.forwardRef(function () { return ArqAutocompleteComponent; }), selector: "arq-autocomplete", inputs: ["ariaLabel", "autoActiveFirstOption", "autoSelectActiveOption", "panelWidth", "nameOptions", "type", "options", "dependsOn", "filterBack", "defaultSize", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range"], outputs: ["closed", "opened", "emitValue"] }, { kind: "component", type: i0.forwardRef(function () { return i12.MatGridList; }), selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i0.forwardRef(function () { return i12.MatGridTile; }), selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "component", type: i0.forwardRef(function () { return ArqFieldsetComponent; }), selector: "arq-fieldset", inputs: ["legend"] }, { kind: "pipe", type: i0.forwardRef(function () { return FilterByGrupoPipe; }), name: "filterByGrupo" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-listado', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.subLabel\">{{ this.subLabel }}</label>\r\n<h2 *ngIf=\"this.datos\">{{ this.datos.formulario.denominacion }}</h2>\r\n<div *ngFor=\"let grupo of this.grupos\">\r\n  <arq-fieldset [legend]=\"grupo\">\r\n    <mat-grid-list\r\n      *ngIf=\"this.datos\"\r\n      [cols]=\"this.datos.formulario.numColumnas || this.numCols\"\r\n      [rowHeight]=\"this.rowHeight\">\r\n      <mat-grid-tile *ngFor=\"let campo of this.datos.campos | filterByGrupo : grupo\" [colspan]=\"campo.anchoColumna\">\r\n        <arq-text-input\r\n          *ngIf=\"campo.htmlTipo === 'input-text'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-text-input>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"true\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n\r\n        <arq-datepicker-range\r\n          *ngIf=\"campo.htmlTipo === 'datepicker-range'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [fechaFin]=\"campo.idCampo + this.NAME_FC_DP_RANGE\"\r\n          [visibleRange]=\"false\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-datepicker-range>\r\n\r\n        <arq-datepicker\r\n          *ngIf=\"campo.htmlTipo === 'datepicker'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [placeholder]=\"'DD/MM/YYYY'\"></arq-datepicker>\r\n\r\n        <arq-input-money\r\n          *ngIf=\"campo.htmlTipo === 'input-money'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-money>\r\n\r\n        <arq-input-number\r\n          *ngIf=\"campo.htmlTipo === 'input-number'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-number>\r\n\r\n        <arq-checkbox-basic\r\n          *ngIf=\"campo.htmlTipo === 'checkbox-basic'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [color]=\"this.colorCheckboxBasic\"\r\n          [checked]=\"this.checkedCheckboxBasic\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-checkbox-basic>\r\n\r\n        <arq-autocomplete\r\n          *ngIf=\"campo.htmlTipo === 'autocomplete'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [options]=\"this.autocompletetOptionsArray.get(campo.idCampo)\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-autocomplete>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select-multiple'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"false\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [multiple]=\"true\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </arq-fieldset>\r\n</div>\r\n\r\n<div style=\"padding-top: 20px\">\r\n  <arq-button\r\n    *ngIf=\"this.showBtnSearch\"\r\n    [label]=\"this.labelBtnSearch\"\r\n    [color]=\"this.colorBtnSearch\"\r\n    [type]=\"this.typeBtnSearch\"\r\n    [icon]=\"this.iconBtnSearch\"\r\n    (click)=\"this.search()\">\r\n  </arq-button>\r\n\r\n  <arq-button\r\n    *ngIf=\"this.showBtnExport\"\r\n    [label]=\"this.labelBtnExport\"\r\n    [color]=\"this.colorBtnExport\"\r\n    [type]=\"this.typeBtnExport\"\r\n    [icon]=\"this.iconBtnExport\"\r\n    (click)=\"this.export()\">\r\n  </arq-button>\r\n</div>\r\n", styles: [".mat-grid-tile-content>*{width:95%}arq-datatable:last-child{display:block;margin-top:20px}\n"] }]
        }], ctorParameters: function () { return [{ type: ArqHttpClient }]; }, propDecorators: { urlBaseBack: [{
                type: Input
            }], dataEvent$: [{
                type: Output
            }], observableData: [{
                type: Input
            }], numCols: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], label: [{
                type: Input
            }], subLabel: [{
                type: Input
            }], lang: [{
                type: Input
            }], showBtnExport: [{
                type: Input
            }], labelBtnExport: [{
                type: Input
            }], colorBtnExport: [{
                type: Input
            }], typeBtnExport: [{
                type: Input
            }], iconBtnExport: [{
                type: Input
            }], _btnExportFn: [{
                type: Input,
                args: ['btnExportFn']
            }], showBtnSearch: [{
                type: Input
            }], labelBtnSearch: [{
                type: Input
            }], colorBtnSearch: [{
                type: Input
            }], typeBtnSearch: [{
                type: Input
            }], iconBtnSearch: [{
                type: Input
            }], _btnSearchFn: [{
                type: Input,
                args: ['btnSearchFn']
            }], msgError: [{
                type: Input
            }], colorCheckboxBasic: [{
                type: Input
            }], checkedCheckboxBasic: [{
                type: Input
            }], loadedData$: [{
                type: Input,
                args: ['loadedData']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], _tableConfig: [{
                type: Input,
                args: ['tableConfig']
            }] } });
class FilterByGrupoPipe {
    transform(campos, grupo) {
        return campos.filter(campo => campo.grupo === grupo);
    }
}
FilterByGrupoPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FilterByGrupoPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FilterByGrupoPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: FilterByGrupoPipe, name: "filterByGrupo" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FilterByGrupoPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filterByGrupo' }]
        }] });

class ArqListadosModule {
}
ArqListadosModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqListadosModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, declarations: [ArqListadoComponent, FilterByGrupoPipe], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqTextInputModule,
        ArqSelectModule,
        ArqGenericInputModule,
        MatInputModule,
        MatIconModule,
        ArqButtonModule,
        ArqDatepickerRangeModule,
        ArqDatepickerModule,
        ArqInputMoneyModule,
        ArqInputNumberModule,
        ArqCheckboxBasicModule,
        ArqAutocompleteModule,
        MatGridListModule,
        ArqDatatableModule,
        ArqFieldsetModule], exports: [ArqListadoComponent] });
ArqListadosModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, providers: [ArqApiService], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqTextInputModule,
        ArqSelectModule,
        ArqGenericInputModule,
        MatInputModule,
        MatIconModule,
        ArqButtonModule,
        ArqDatepickerRangeModule,
        ArqDatepickerModule,
        ArqInputMoneyModule,
        ArqInputNumberModule,
        ArqCheckboxBasicModule,
        ArqAutocompleteModule,
        MatGridListModule,
        ArqDatatableModule,
        ArqFieldsetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqListadoComponent, FilterByGrupoPipe],
                    exports: [ArqListadoComponent],
                    providers: [ArqApiService],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        ArqTextInputModule,
                        ArqSelectModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        MatIconModule,
                        ArqButtonModule,
                        ArqDatepickerRangeModule,
                        ArqDatepickerModule,
                        ArqInputMoneyModule,
                        ArqInputNumberModule,
                        ArqCheckboxBasicModule,
                        ArqAutocompleteModule,
                        MatGridListModule,
                        ArqDatatableModule,
                        ArqFieldsetModule
                    ]
                }]
        }] });

const USER_LANG = 'user-lang';
class ArqRoleGuard {
    constructor(auth, _arqHttpClient, _translocoService, cookieservice) {
        this.auth = auth;
        this._arqHttpClient = _arqHttpClient;
        this._translocoService = _translocoService;
        this.cookieservice = cookieservice;
    }
    canActivateChild(next, state) {
        var _a, _b;
        return this.accesoOk(next, state, ((_a = next.parent) === null || _a === void 0 ? void 0 : _a.data) ? (_b = next.parent) === null || _b === void 0 ? void 0 : _b.data : next.data);
    }
    canActivate(next, state) {
        return this.accesoOk(next, state, next.data);
    }
    accesoOk(next, state, data) {
        var _a;
        if (next.queryParams[USER_LANG]) {
            const lang = next.queryParams[USER_LANG];
            localStorage.setItem('user-lang', lang);
            (_a = this._translocoService) === null || _a === void 0 ? void 0 : _a.setActiveLang(lang);
        }
        // console.log('cookies:', this.cookieservice.getAll());
        if (next.queryParams['token']) {
            // existe el token de gvlogin en la url, lo almacenamos en el localStorage
            localStorage.setItem('gvlogin-token', next.queryParams['token']);
            this.auth.cargarToken();
        }
        else if (!this.auth.isLogged()) {
            if (this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') && data['enableJWT']) {
                this.auth.buscarTokenJWT(data['nombreApp'], data['gvloginUrl']);
            }
            else {
                // Redirigir a Gvlogin para obligar al loggeo
                if (data['enable']) {
                    this.auth.login(window.location.pathname, data['nombreApp'], data['gvloginUrl'], data['urlRedirect']);
                }
            }
        }
        if (data['tokenPerso']) {
            this._arqHttpClient
                .get(data['tokenPerso'], {
                observe: 'response',
                responseType: 'text'
            })
                .subscribe({
                next: (response) => {
                    console.log(response);
                    this.auth.storeTokenPersonalizado(response.headers.get('x-token-personalizado'));
                },
                error: (err) => {
                    console.log('peta token perso ', err);
                }
            });
        }
        return this.comprobarMarte(next, state.url, data['host']);
    }
    comprobarMarte(next, state, host) {
        let idPet = next.queryParams['idPet'];
        let idSel = next.queryParams['idSel'];
        if (idPet || idSel) {
            if (!host || !host.startsWith('htt')) {
                console.error('El host no es correcto!!');
            }
            return this.realizarPeticionMarte({ idSel, idPet, host, next, state });
        }
        else {
            return of(true);
        }
    }
    realizarPeticionMarte({ idSel, idPet, host, next, state }) {
        let endpoint = host + '/api/marte/v1/';
        if (idSel) {
            this.auth.storeIdSelMarte(idSel);
            endpoint += `peticionsel/${idSel}`;
        }
        else {
            this.auth.storeIdPetMarte(idPet);
            endpoint += `peticion/${idPet}`;
        }
        return this._arqHttpClient
            .get(endpoint, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe(map((token) => {
            var _a, _b;
            const lang = ((_a = token.headers.get('Content-Language')) === null || _a === void 0 ? void 0 : _a.split('-')[0]) || 'es';
            localStorage.setItem(USER_LANG, lang);
            (_b = this._translocoService) === null || _b === void 0 ? void 0 : _b.setActiveLang(lang);
            if (idSel) {
                this.auth.storeTokenPetMarteFormularioSeleccion(token.headers.get('x-peticion-marte-formulario-seleccion'));
                this.auth.cleanUrl(next.queryParams, 'idSel', state);
            }
            else {
                this.auth.storeTokenPetMarte(token.headers.get('x-peticion-marte'));
                this.auth.cleanUrl(next.queryParams, 'idPet', state);
            }
            return true;
        }), catchError$1(err => {
            console.log('error al recuperar el token de Marte: ', err);
            return of(true);
        }));
    }
}
ArqRoleGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, deps: [{ token: ArqGvloginService }, { token: ArqHttpClient }, { token: i2.TranslocoService }, { token: i4$6.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqRoleGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: ArqGvloginService }, { type: ArqHttpClient }, { type: i2.TranslocoService }, { type: i4$6.CookieService }]; } });

// end::securityAnexoGvloginTokenData[]

// end::securityUserModel[]

var ArqErrorTypeEnum;
(function (ArqErrorTypeEnum) {
    ArqErrorTypeEnum["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(ArqErrorTypeEnum || (ArqErrorTypeEnum = {}));

const arqApiResolver = (service) => {
    let schema$;
    return {
        schema: (route, state) => {
            let idBloque = undefined;
            if (route.paramMap.has('idBloque')) {
                idBloque = route.paramMap.get('idBloque');
            }
            if (!schema$) {
                schema$ = service.schema(idBloque).pipe(shareReplay(1));
            }
            return schema$;
        },
        findOne: (route, state) => {
            if (!service.findOne) {
                return null;
            }
            return service.findOne().pipe(catchError$1((error) => of(error)));
        },
        findById: (route, state) => {
            if (!service.findById) {
                return null;
            }
            let id = route.params['id'];
            return service.findById(id).pipe(catchError$1((error) => of(error)));
        }
    };
};

function preloadUser(transloco, environment) {
    return function () {
        const lang = localStorage.getItem('user-lang') || environment.locale.default;
        transloco.setActiveLang(lang);
        return transloco.load(lang).toPromise();
    };
}

const ARQ_SDK = 'ARQ_SDK';
/********************************************************************************
 *                        ¡¡¡ DON'T MODIFY THIS FILE !!!                        *
 * Los componentes se importan directamente en src/lib/components/component.ts  *
 ********************************************************************************/

/**
 * Generated bundle index. Do not edit.
 */

export { ARQ_SDK, ArqAdvFilterDialogComponent, ArqApiService, ArqAutocompleteComponent, ArqAutocompleteModule, ArqBadgeComponent, ArqBadgeModule, ArqBaseComponent, ArqBasicComplejoComponent, ArqBasicComponent, ArqBasicModule, ArqButtonComponent, ArqButtonModule, ArqButtonToggleMultipleComponent, ArqButtonToggleMultipleModule, ArqCardComponent, ArqCardModule, ArqCheckboxBasicComponent, ArqCheckboxBasicModule, ArqCheckboxComponent, ArqCheckboxModule, ArqChipsComponent, ArqChipsModule, ArqContextMenuComponent, ArqContextMenuModule, ArqDTBANameFilterDialogComponent, ArqDTBusquedaAvanzadaComponent, ArqDTBusquedaAvanzadaModule, ArqDatatableComponent, ArqDatatableMantenimientoComponent, ArqDatatableMantenimientoModule, ArqDatatableModule, ArqDateTimepickerComponent, ArqDateTimepickerModule, ArqDatepickerComponent, ArqDatepickerModule, ArqDatepickerRangeComponent, ArqDatepickerRangeModule, ArqDependentInputsComponent, ArqDependentInputsModule, ArqDialogComponent, ArqDialogModule, ArqDialogService, ArqDownloadFileService, ArqErrorTypeEnum, ArqExpansionPanelComponent, ArqExpansionPanelModule, ArqFieldsetComponent, ArqFieldsetModule, ArqFormControlErrorComponent, ArqFormControlErrorModule, ArqGvLoginModule, ArqGvloginInterceptorService, ArqGvloginService, ArqHttpClient, ArqInputMoneyComponent, ArqInputMoneyModule, ArqInputNumberComponent, ArqInputNumberModule, ArqListadoComponent, ArqListadosModule, ArqPrefiltersDialogComponent, ArqPromptDialogComponent, ArqRadioButtonComponent, ArqRadioButtonModule, ArqRoleGuard, ArqSchemaService, ArqSelectComponent, ArqSelectModule, ArqSelectMultipleComponent, ArqSelectMultipleModule, ArqSliderComponent, ArqSliderDobleComponent, ArqSliderDobleModule, ArqSliderModule, ArqSliderToggleComponent, ArqSliderToggleModule, ArqSnackBarComponent, ArqSnackBarModule, ArqSnackBarService, ArqSpinnerComponent, ArqSpinnerModule, ArqSpinnerService, ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemContentComponent, ArqStepItemLabelComponent, ArqStepperModule, ArqSubMenuComponent, ArqTabGroupComponent, ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabModule, ArqTextInputComponent, ArqTextInputModule, ArqTextareaComponent, ArqTextareaModule, ArqToolbarComponent, ArqToolbarModule, ArqUploadFilesComponent, ArqUploadFilesDialogComponent, ArqUploadFilesDialogModule, ArqUploadFilesDialogService, ArqUploadFilesModule, AuthService, DefaultFilterType, FilterByGrupoPipe, GVLOGIN, LocalizedNumericInputDirective, MY_FORMATS, MY_FORMATS_TIME, NOM_APP, Service, arqApiResolver, dateProviders, dateTimeProviders, enable, enableJWT, errorMapMessagesDefault, gvloginUrl, jwtOptionsFactory, nombreApp, preloadUser, tokenGetter, tokenPerso, urlRedirect };
//# sourceMappingURL=arq-sdk.mjs.map
