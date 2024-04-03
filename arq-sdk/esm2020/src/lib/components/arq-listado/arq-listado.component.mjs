import { Component, EventEmitter, Input, Output, Pipe, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { ArqBaseComponent } from '../../utils/arq-base.component';
import * as i0 from "@angular/core";
import * as i1 from "./../../services/arq-http-client.service";
import * as i2 from "@angular/common";
import * as i3 from "../arq-text-input/arq-text-input.component";
import * as i4 from "../arq-select/arq-select.component";
import * as i5 from "../arq-button/arq-button.component";
import * as i6 from "../arq-datepicker-range/arq-datepicker-range.component";
import * as i7 from "../arq-datepicker/arq-datepicker.component";
import * as i8 from "../arq-input-money/arq-input-money.component";
import * as i9 from "../arq-input-number/arq-input-number.component";
import * as i10 from "../arq-checkbox-basic/arq-checkbox-basic.component";
import * as i11 from "../arq-autocomplete/arq-autocomplete.component";
import * as i12 from "@angular/material/grid-list";
import * as i13 from "../arq-fieldset/arq-fieldset.component";
export class ArqListadoComponent extends ArqBaseComponent {
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
                // Recuperamos el control modificado
                switch (campo.htmlTipo) {
                    case this.DATEPICKER_STR:
                        campo.value = this.fGroup.controls[campo.idCampo].value?.toDate().toString();
                        break;
                    case this.DATEPICKER_RANGE_STR:
                        // TODO comprobar funcionamiento
                        campo.value =
                            campo.value && !campo.value?.includes(this.SEPARATOR_DP_RANGE)
                                ? campo.value +
                                    this.SEPARATOR_DP_RANGE +
                                    this.fGroup.controls[campo.idCampo + this.NAME_FC_DP_RANGE].value?.toDate().toString()
                                : this.fGroup.controls[campo.idCampo].value?.toDate().toString();
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
        return this.fGroup.controls[idCampo].value?.hasOwnProperty('value')
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
ArqListadoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadoComponent, deps: [{ token: i1.ArqHttpClient }], target: i0.ɵɵFactoryTarget.Component });
ArqListadoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqListadoComponent, selector: "arq-listado", inputs: { urlBaseBack: "urlBaseBack", observableData: "observableData", numCols: "numCols", rowHeight: "rowHeight", label: "label", subLabel: "subLabel", lang: "lang", showBtnExport: "showBtnExport", labelBtnExport: "labelBtnExport", colorBtnExport: "colorBtnExport", typeBtnExport: "typeBtnExport", iconBtnExport: "iconBtnExport", _btnExportFn: ["btnExportFn", "_btnExportFn"], showBtnSearch: "showBtnSearch", labelBtnSearch: "labelBtnSearch", colorBtnSearch: "colorBtnSearch", typeBtnSearch: "typeBtnSearch", iconBtnSearch: "iconBtnSearch", _btnSearchFn: ["btnSearchFn", "_btnSearchFn"], msgError: "msgError", colorCheckboxBasic: "colorCheckboxBasic", checkedCheckboxBasic: "checkedCheckboxBasic", loadedData$: ["loadedData", "loadedData$"], _tableConfig: ["tableConfig", "_tableConfig"] }, outputs: { dataEvent$: "dataEvent$", loadDataEvent$: "loadDataEvent" }, usesInheritance: true, ngImport: i0, template: "<label *ngIf=\"this.subLabel\">{{ this.subLabel }}</label>\r\n<h2 *ngIf=\"this.datos\">{{ this.datos.formulario.denominacion }}</h2>\r\n<div *ngFor=\"let grupo of this.grupos\">\r\n  <arq-fieldset [legend]=\"grupo\">\r\n    <mat-grid-list\r\n      *ngIf=\"this.datos\"\r\n      [cols]=\"this.datos.formulario.numColumnas || this.numCols\"\r\n      [rowHeight]=\"this.rowHeight\">\r\n      <mat-grid-tile *ngFor=\"let campo of this.datos.campos | filterByGrupo : grupo\" [colspan]=\"campo.anchoColumna\">\r\n        <arq-text-input\r\n          *ngIf=\"campo.htmlTipo === 'input-text'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-text-input>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"true\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n\r\n        <arq-datepicker-range\r\n          *ngIf=\"campo.htmlTipo === 'datepicker-range'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [fechaFin]=\"campo.idCampo + this.NAME_FC_DP_RANGE\"\r\n          [visibleRange]=\"false\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-datepicker-range>\r\n\r\n        <arq-datepicker\r\n          *ngIf=\"campo.htmlTipo === 'datepicker'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [placeholder]=\"'DD/MM/YYYY'\"></arq-datepicker>\r\n\r\n        <arq-input-money\r\n          *ngIf=\"campo.htmlTipo === 'input-money'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-money>\r\n\r\n        <arq-input-number\r\n          *ngIf=\"campo.htmlTipo === 'input-number'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-number>\r\n\r\n        <arq-checkbox-basic\r\n          *ngIf=\"campo.htmlTipo === 'checkbox-basic'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [color]=\"this.colorCheckboxBasic\"\r\n          [checked]=\"this.checkedCheckboxBasic\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-checkbox-basic>\r\n\r\n        <arq-autocomplete\r\n          *ngIf=\"campo.htmlTipo === 'autocomplete'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [options]=\"this.autocompletetOptionsArray.get(campo.idCampo)\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-autocomplete>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select-multiple'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"false\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [multiple]=\"true\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </arq-fieldset>\r\n</div>\r\n\r\n<div style=\"padding-top: 20px\">\r\n  <arq-button\r\n    *ngIf=\"this.showBtnSearch\"\r\n    [label]=\"this.labelBtnSearch\"\r\n    [color]=\"this.colorBtnSearch\"\r\n    [type]=\"this.typeBtnSearch\"\r\n    [icon]=\"this.iconBtnSearch\"\r\n    (click)=\"this.search()\">\r\n  </arq-button>\r\n\r\n  <arq-button\r\n    *ngIf=\"this.showBtnExport\"\r\n    [label]=\"this.labelBtnExport\"\r\n    [color]=\"this.colorBtnExport\"\r\n    [type]=\"this.typeBtnExport\"\r\n    [icon]=\"this.iconBtnExport\"\r\n    (click)=\"this.export()\">\r\n  </arq-button>\r\n</div>\r\n", styles: [".mat-grid-tile-content>*{width:95%}arq-datatable:last-child{display:block;margin-top:20px}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i2.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i2.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i2.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i3.ArqTextInputComponent; }), selector: "arq-text-input", inputs: ["maxLength", "append", "disabled"] }, { kind: "component", type: i0.forwardRef(function () { return i4.ArqSelectComponent; }), selector: "arq-select", inputs: ["disabled", "selectOptionsList", "emptyOption", "fullObject", "multiple"], outputs: ["selectionChange"] }, { kind: "component", type: i0.forwardRef(function () { return i5.ArqButtonComponent; }), selector: "arq-button", inputs: ["readonly", "label", "color", "type", "icon", "tipoButton", "btnName"] }, { kind: "component", type: i0.forwardRef(function () { return i6.ArqDatepickerRangeComponent; }), selector: "arq-datepicker-range", inputs: ["labelErrorStart", "labelErrorEnd", "visibleRange", "rangeLabel", "placeholderStart", "placeholderEnd", "fechaFin"], outputs: ["selectionChange"] }, { kind: "component", type: i0.forwardRef(function () { return i7.ArqDatepickerComponent; }), selector: "arq-datepicker", inputs: ["label", "hint", "disabled"] }, { kind: "component", type: i0.forwardRef(function () { return i8.ArqInputMoneyComponent; }), selector: "arq-input-money", inputs: ["maxLength", "append"] }, { kind: "component", type: i0.forwardRef(function () { return i9.ArqInputNumberComponent; }), selector: "arq-input-number", inputs: ["maxLength", "append"] }, { kind: "component", type: i0.forwardRef(function () { return i10.ArqCheckboxBasicComponent; }), selector: "arq-checkbox-basic", inputs: ["color", "checked", "disabled", "sectionClass", "spanClass", "checkbox_down", "checkbox_sn"] }, { kind: "component", type: i0.forwardRef(function () { return i11.ArqAutocompleteComponent; }), selector: "arq-autocomplete", inputs: ["ariaLabel", "autoActiveFirstOption", "autoSelectActiveOption", "panelWidth", "nameOptions", "type", "options", "dependsOn", "filterBack", "defaultSize", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range"], outputs: ["closed", "opened", "emitValue"] }, { kind: "component", type: i0.forwardRef(function () { return i12.MatGridList; }), selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i0.forwardRef(function () { return i12.MatGridTile; }), selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "component", type: i0.forwardRef(function () { return i13.ArqFieldsetComponent; }), selector: "arq-fieldset", inputs: ["legend"] }, { kind: "pipe", type: i0.forwardRef(function () { return FilterByGrupoPipe; }), name: "filterByGrupo" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-listado', encapsulation: ViewEncapsulation.None, template: "<label *ngIf=\"this.subLabel\">{{ this.subLabel }}</label>\r\n<h2 *ngIf=\"this.datos\">{{ this.datos.formulario.denominacion }}</h2>\r\n<div *ngFor=\"let grupo of this.grupos\">\r\n  <arq-fieldset [legend]=\"grupo\">\r\n    <mat-grid-list\r\n      *ngIf=\"this.datos\"\r\n      [cols]=\"this.datos.formulario.numColumnas || this.numCols\"\r\n      [rowHeight]=\"this.rowHeight\">\r\n      <mat-grid-tile *ngFor=\"let campo of this.datos.campos | filterByGrupo : grupo\" [colspan]=\"campo.anchoColumna\">\r\n        <arq-text-input\r\n          *ngIf=\"campo.htmlTipo === 'input-text'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-text-input>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"true\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n\r\n        <arq-datepicker-range\r\n          *ngIf=\"campo.htmlTipo === 'datepicker-range'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [fechaFin]=\"campo.idCampo + this.NAME_FC_DP_RANGE\"\r\n          [visibleRange]=\"false\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-datepicker-range>\r\n\r\n        <arq-datepicker\r\n          *ngIf=\"campo.htmlTipo === 'datepicker'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [placeholder]=\"'DD/MM/YYYY'\"></arq-datepicker>\r\n\r\n        <arq-input-money\r\n          *ngIf=\"campo.htmlTipo === 'input-money'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-money>\r\n\r\n        <arq-input-number\r\n          *ngIf=\"campo.htmlTipo === 'input-number'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [maxLength]=\"campo.htmlTamanyoMax\"></arq-input-number>\r\n\r\n        <arq-checkbox-basic\r\n          *ngIf=\"campo.htmlTipo === 'checkbox-basic'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [color]=\"this.colorCheckboxBasic\"\r\n          [checked]=\"this.checkedCheckboxBasic\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-checkbox-basic>\r\n\r\n        <arq-autocomplete\r\n          *ngIf=\"campo.htmlTipo === 'autocomplete'\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [value]=\"campo.idCampo\"\r\n          [options]=\"this.autocompletetOptionsArray.get(campo.idCampo)\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\">\r\n        </arq-autocomplete>\r\n\r\n        <arq-select\r\n          *ngIf=\"campo.htmlTipo === 'select-multiple'\"\r\n          [label]=\"this.lang === this.LANG_ES ? campo.htmlLabel : campo.htmlLabelVal\"\r\n          [emptyOption]=\"false\"\r\n          [fGroup]=\"this.fGroup\"\r\n          [value]=\"campo.idCampo\"\r\n          [ngClass]=\"campo.cssClass !== null ? campo.cssClass : ''\"\r\n          [fullObject]=\"false\"\r\n          [multiple]=\"true\"\r\n          [selectOptionsList]=\"this.selectOptionsArray.get(campo.idCampo)\">\r\n        </arq-select>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </arq-fieldset>\r\n</div>\r\n\r\n<div style=\"padding-top: 20px\">\r\n  <arq-button\r\n    *ngIf=\"this.showBtnSearch\"\r\n    [label]=\"this.labelBtnSearch\"\r\n    [color]=\"this.colorBtnSearch\"\r\n    [type]=\"this.typeBtnSearch\"\r\n    [icon]=\"this.iconBtnSearch\"\r\n    (click)=\"this.search()\">\r\n  </arq-button>\r\n\r\n  <arq-button\r\n    *ngIf=\"this.showBtnExport\"\r\n    [label]=\"this.labelBtnExport\"\r\n    [color]=\"this.colorBtnExport\"\r\n    [type]=\"this.typeBtnExport\"\r\n    [icon]=\"this.iconBtnExport\"\r\n    (click)=\"this.export()\">\r\n  </arq-button>\r\n</div>\r\n", styles: [".mat-grid-tile-content>*{width:95%}arq-datatable:last-child{display:block;margin-top:20px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ArqHttpClient }]; }, propDecorators: { urlBaseBack: [{
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
export class FilterByGrupoPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWxpc3RhZG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWxpc3RhZG8vYXJxLWxpc3RhZG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWxpc3RhZG8vYXJxLWxpc3RhZG8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixJQUFJLEVBRUosaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWVsRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBZ0d2RCxZQUE2QixjQUE2QjtRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQURtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQS9GMUMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsa0JBQWtCLENBQUM7UUFDMUMsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0Qix3QkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN4QyxxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcs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QWM7c0JBRHBCLEtBQUs7Z0JBR0MsY0FBYztzQkFEcEIsS0FBSztnQkFHQyxhQUFhO3NCQURuQixLQUFLO2dCQUdDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBR0MsWUFBWTtzQkFEbEIsS0FBSzt1QkFBQyxhQUFhO2dCQUtiLGFBQWE7c0JBRG5CLEtBQUs7Z0JBR0MsY0FBYztzQkFEcEIsS0FBSztnQkFHQyxjQUFjO3NCQURwQixLQUFLO2dCQUdDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBR0MsYUFBYTtzQkFEbkIsS0FBSztnQkFHQyxZQUFZO3NCQURsQixLQUFLO3VCQUFDLGFBQWE7Z0JBS2IsUUFBUTtzQkFEZCxLQUFLO2dCQUtDLGtCQUFrQjtzQkFEeEIsS0FBSztnQkFHQyxvQkFBb0I7c0JBRDFCLEtBQUs7Z0JBS0MsV0FBVztzQkFEakIsS0FBSzt1QkFBQyxZQUFZO2dCQUdaLGNBQWM7c0JBRHBCLE1BQU07dUJBQUMsZUFBZTtnQkFHaEIsWUFBWTtzQkFEbEIsS0FBSzt1QkFBQyxhQUFhOztBQTBSdEIsTUFBTSxPQUFPLGlCQUFpQjtJQUNyQixTQUFTLENBQUMsTUFBa0IsRUFBRSxLQUFhO1FBQ2hELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OEdBSFUsaUJBQWlCOzRHQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFEN0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUGlwZSxcclxuICBQaXBlVHJhbnNmb3JtLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFycUNhbXBvLCBBcnFEeW5hbWljIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcnEtZHluYW1pYy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBcnFMaXN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcnEtbGlzdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBcnFCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJxLWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYSwgQXJxRGF0YXRhYmxlQ29uZmlnIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgQXJxQXV0b2NvbXBsZXRlU2VhcmNoRm4sXHJcbiAgQXJxUGFnZWFibGVSZXF1ZXN0LFxyXG4gIEFycVBhZ2VhYmxlUmVzcG9uc2VcclxufSBmcm9tICcuLy4uLy4uL2ludGVyZmFjZXMvYXJxLWJhc2ljLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFycUh0dHBDbGllbnQgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2FycS1odHRwLWNsaWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXJxLWxpc3RhZG8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtbGlzdGFkby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLWxpc3RhZG8uY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUxpc3RhZG9Db21wb25lbnQgZXh0ZW5kcyBBcnFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyByZWFkb25seSBMQU5HX0VTID0gJ2VzJztcclxuICBwdWJsaWMgcmVhZG9ubHkgTkFNRV9GQ19EUF9SQU5HRSA9ICdfMic7XHJcbiAgcHVibGljIHJlYWRvbmx5IFNFUEFSQVRPUl9EUF9SQU5HRSA9ICctJztcclxuICBwdWJsaWMgcmVhZG9ubHkgUkVRVUVSSURPX1MgPSAnUyc7XHJcbiAgcHVibGljIHJlYWRvbmx5IERBVEVQSUNLRVJfU1RSID0gJ2RhdGVwaWNrZXInO1xyXG4gIHB1YmxpYyByZWFkb25seSBEQVRFUElDS0VSX1JBTkdFX1NUUiA9ICdkYXRlcGlja2VyLXJhbmdlJztcclxuICBwdWJsaWMgcmVhZG9ubHkgU0VMRUNUX1NUUiA9ICdzZWxlY3QnO1xyXG4gIHB1YmxpYyByZWFkb25seSBTRUxFQ1RfTVVMVElQTEVfU1RSID0gJ3NlbGVjdC1tdWx0aXBsZSc7XHJcbiAgcHVibGljIHJlYWRvbmx5IEFVVE9DT01QTEVURV9TVFIgPSAnYXV0b2NvbXBsZXRlJztcclxuICBwdWJsaWMgcmVhZG9ubHkgQ0hFQ0tCT1hfQkFTSUNfU1RSID0gJ2NoZWNrYm94LWJhc2ljJztcclxuICBwdWJsaWMgcmVhZG9ubHkgSU5QVVRfTU9ORVlfU1RSID0gJ2lucHV0LW1vbmV5JztcclxuICBwdWJsaWMgcmVhZG9ubHkgSU5QVVRfTlVNQkVSX1NUUiA9ICdpbnB1dC1udW1iZXInO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgREVQRU5ESUVOVEVfUkVRVUVSSURPOiBzdHJpbmcgPSAnISc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBTRVBBUkFET1I6IHN0cmluZyA9ICcsJztcclxuICBwcml2YXRlIHJlYWRvbmx5IFBBUkFNX1JFR0VYUCA9IC97XFxkK30vZztcclxuXHJcbiAgcHVibGljIGZHcm91cCE6IEZvcm1Hcm91cDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdXJsQmFzZUJhY2shOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGRhdGFFdmVudCQgPSBuZXcgRXZlbnRFbWl0dGVyPEFycUR5bmFtaWM+KCk7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgb2JzZXJ2YWJsZURhdGEhOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8vU3R5bGVcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBudW1Db2xzOiBzdHJpbmcgPSAnMyc7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm93SGVpZ2h0OiBzdHJpbmcgPSAnNDoxJztcclxuXHJcbiAgLy8gVGl0dWxvcyBnZW5lcmFsZXNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdWJMYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYW5nOiBzdHJpbmcgPSB0aGlzLkxBTkdfRVM7XHJcblxyXG4gIC8vIEJ1dHRvbiBFeHBvcnRcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93QnRuRXhwb3J0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGFiZWxCdG5FeHBvcnQhOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29sb3JCdG5FeHBvcnQ6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0eXBlQnRuRXhwb3J0OiBzdHJpbmcgPSAnc3VibWl0JztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpY29uQnRuRXhwb3J0OiBzdHJpbmcgPSAnc2F2ZV9hbHQnO1xyXG4gIEBJbnB1dCgnYnRuRXhwb3J0Rm4nKVxyXG4gIHB1YmxpYyBfYnRuRXhwb3J0Rm4hOiAoKSA9PiBhbnk7XHJcblxyXG4gIC8vIEJ1dHRvbiBTZWFyY2hcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93QnRuU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGFiZWxCdG5TZWFyY2ghOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29sb3JCdG5TZWFyY2g6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0eXBlQnRuU2VhcmNoOiBzdHJpbmcgPSAnc3VibWl0JztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpY29uQnRuU2VhcmNoOiBzdHJpbmcgPSAnc2VhcmNoJztcclxuICBASW5wdXQoJ2J0blNlYXJjaEZuJylcclxuICBwdWJsaWMgX2J0blNlYXJjaEZuITogKCkgPT4gYW55O1xyXG5cclxuICAvLyBJbnB1dHNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtc2dFcnJvcjogc3RyaW5nID0gJ0VsIGNhbXBvIGVzIG9ibGlnYXRvcmlvJztcclxuXHJcbiAgLy8gQ2hlY2tib3gtYmFzaWNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjb2xvckNoZWNrYm94QmFzaWM6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjaGVja2VkQ2hlY2tib3hCYXNpYz86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gRGF0YXRhYmxlXHJcbiAgQElucHV0KCdsb2FkZWREYXRhJylcclxuICBwdWJsaWMgbG9hZGVkRGF0YSQhOiBPYnNlcnZhYmxlPEFycVBhZ2VhYmxlUmVzcG9uc2U+O1xyXG4gIEBPdXRwdXQoJ2xvYWREYXRhRXZlbnQnKVxyXG4gIHB1YmxpYyBsb2FkRGF0YUV2ZW50JCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJxUGFnZWFibGVSZXF1ZXN0PigpO1xyXG4gIEBJbnB1dCgndGFibGVDb25maWcnKVxyXG4gIHB1YmxpYyBfdGFibGVDb25maWchOiBBcnFEYXRhdGFibGVDb25maWc7XHJcblxyXG4gIHB1YmxpYyBjb2x1bW5zU2NoZW1hOiBBcnFEYXRhdGFibGVDb2x1bW5zU2NoZW1hW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGRhdG9zITogQXJxRHluYW1pYztcclxuXHJcbiAgcHVibGljIHNlbGVjdE9wdGlvbnNBcnJheSA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPEFycUxpc3RbXT4+KCk7XHJcblxyXG4gIHB1YmxpYyBhdXRvY29tcGxldGV0T3B0aW9uc0FycmF5ID0gbmV3IE1hcDxTdHJpbmcsIEFycUF1dG9jb21wbGV0ZVNlYXJjaEZuPigpO1xyXG5cclxuICBwdWJsaWMgZ3J1cG9zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIF9hcnFIdHRwQ2xpZW50OiBBcnFIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vYnNlcnZhYmxlRGF0YS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZGF0YTogQXJxRHluYW1pYykgPT4ge1xyXG4gICAgICB0aGlzLmRhdG9zID0gZGF0YTtcclxuICAgICAgdGhpcy5kYXRvcy5jYW1wb3Muc29ydCgoYSwgYikgPT4gYS5vcmRlbiAtIGIub3JkZW4pO1xyXG4gICAgICB0aGlzLnJlbGxlbmFySWRzKCk7XHJcbiAgICAgIHRoaXMub2J0ZW5lckdydXBvcygpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZvcm1Hcm91cChkYXRhLmNhbXBvcyk7XHJcbiAgICAgIHRoaXMuY2FyZ2FyTGlzdGFkb3MoZGF0YS5jYW1wb3MpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUNvbHVtblNjaGVtYShkYXRhLmNhbXBvcyk7XHJcbiAgICAgIHRoaXMuZXZlbnRSZWxsZW5hclZhbHVlc0Zvcm0oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogQ3JlYW1vcyB1biBpZCBkZSB0aXBvIHN0cmluZyBjb25jYXRlbmFuZG8gZWwgaWQgZGVsIGZvcm11bGFyaW8gY29uIGVsIG9yZGVuICovXHJcbiAgcHJpdmF0ZSByZWxsZW5hcklkcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0b3MuY2FtcG9zLmZvckVhY2goY2FtcG8gPT4gKGNhbXBvLmlkQ2FtcG8gPSBgJHtjYW1wby5pZH0jJHtjYW1wby5vcmRlbn1gKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9idGVuZXJHcnVwb3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBncnVwb3NVbmljb3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHRoaXMuZGF0b3MuY2FtcG9zLmZvckVhY2goY2FtcG8gPT4ge1xyXG4gICAgICBncnVwb3NVbmljb3MuYWRkKGNhbXBvLmdydXBvKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ncnVwb3MgPSBBcnJheS5mcm9tKGdydXBvc1VuaWNvcyk7XHJcbiAgfVxyXG5cclxuICAvKiBSZWxsZW5hIGxvcyB2YWx1ZXMgZGVsIEFycUR5bmFtaWMgcXVlIGxsZWdhIGRlbCBiYWNrIGNvbiBsb3MgdmFsb3JlcyBxdWUgdGllbmVuIGxvcyBjb250cm9sZXMgZGVsIGZvcm11bGFyaW9cclxuICBjYWRhIHZleiBxdWUgc2UgYWN0dWFsaXphIHVubyAqL1xyXG4gIHByaXZhdGUgZXZlbnRSZWxsZW5hclZhbHVlc0Zvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdG9zLmNhbXBvcy5mb3JFYWNoKChjYW1wbzogQXJxQ2FtcG8pID0+IHtcclxuICAgICAgdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10udmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyBSZWN1cGVyYW1vcyBlbCBjb250cm9sIG1vZGlmaWNhZG9cclxuICAgICAgICBzd2l0Y2ggKGNhbXBvLmh0bWxUaXBvKSB7XHJcbiAgICAgICAgICBjYXNlIHRoaXMuREFURVBJQ0tFUl9TVFI6XHJcbiAgICAgICAgICAgIGNhbXBvLnZhbHVlID0gdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10udmFsdWU/LnRvRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSB0aGlzLkRBVEVQSUNLRVJfUkFOR0VfU1RSOlxyXG4gICAgICAgICAgICAvLyBUT0RPIGNvbXByb2JhciBmdW5jaW9uYW1pZW50b1xyXG4gICAgICAgICAgICBjYW1wby52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgY2FtcG8udmFsdWUgJiYgIWNhbXBvLnZhbHVlPy5pbmNsdWRlcyh0aGlzLlNFUEFSQVRPUl9EUF9SQU5HRSlcclxuICAgICAgICAgICAgICAgID8gY2FtcG8udmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLlNFUEFSQVRPUl9EUF9SQU5HRSArXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZkdyb3VwLmNvbnRyb2xzW2NhbXBvLmlkQ2FtcG8gKyB0aGlzLk5BTUVfRkNfRFBfUkFOR0VdLnZhbHVlPy50b0RhdGUoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuZkdyb3VwLmNvbnRyb2xzW2NhbXBvLmlkQ2FtcG9dLnZhbHVlPy50b0RhdGUoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgdGhpcy5TRUxFQ1RfU1RSOlxyXG4gICAgICAgICAgY2FzZSB0aGlzLkFVVE9DT01QTEVURV9TVFI6XHJcbiAgICAgICAgICBjYXNlIHRoaXMuU0VMRUNUX01VTFRJUExFX1NUUjpcclxuICAgICAgICAgICAgaWYgKGNhbXBvLmxpc3RhRGVwZW5kaWVudGUgJiYgY2FtcG8udmFsdWUgIT0gdGhpcy5nZXRDb250cm9sVmFsdWUoY2FtcG8uaWRDYW1wbykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkZXBlbmRpZW50ZXM6IHN0cmluZ1tdID0gY2FtcG8ubGlzdGFEZXBlbmRpZW50ZS5zcGxpdCh0aGlzLlNFUEFSQURPUik7XHJcbiAgICAgICAgICAgICAgZGVwZW5kaWVudGVzLmZvckVhY2goZGVwZW5kaWVudGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVyaWRvID0gZGVwZW5kaWVudGUuaW5jbHVkZXModGhpcy5ERVBFTkRJRU5URV9SRVFVRVJJRE8pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FtcG9EZXBlbmRpZW50ZSA9IHRoaXMuZGF0b3MuY2FtcG9zLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgIGMgPT5cclxuICAgICAgICAgICAgICAgICAgICBjLm9yZGVuLnRvU3RyaW5nKCkgPT0gKHJlcXVlcmlkbyA/IGRlcGVuZGllbnRlLnNwbGl0KHRoaXMuREVQRU5ESUVOVEVfUkVRVUVSSURPKVswXSA6IGRlcGVuZGllbnRlKVxyXG4gICAgICAgICAgICAgICAgKSE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZHcm91cC5jb250cm9sc1tjYW1wb0RlcGVuZGllbnRlLmlkQ2FtcG9dLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVyaWRvKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1ZWRlSGFiaWxpdGFyRGVwZW5kaWVudGUoY2FtcG9EZXBlbmRpZW50ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZHcm91cC5jb250cm9sc1tjYW1wb0RlcGVuZGllbnRlIS5pZENhbXBvXS5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmdhckxpc3RhZG8oY2FtcG9EZXBlbmRpZW50ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLmZHcm91cC5jb250cm9sc1tjYW1wb0RlcGVuZGllbnRlLmlkQ2FtcG9dLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FyTGlzdGFkbyhjYW1wb0RlcGVuZGllbnRlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW1wby52YWx1ZSA9IHRoaXMuZ2V0Q29udHJvbFZhbHVlKGNhbXBvLmlkQ2FtcG8pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhbXBvLnZhbHVlID0gdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10udmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFFdmVudCQuZW1pdCh0aGlzLmRhdG9zKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29udHJvbFZhbHVlKGlkQ2FtcG86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mR3JvdXAuY29udHJvbHNbaWRDYW1wb10udmFsdWU/Lmhhc093blByb3BlcnR5KCd2YWx1ZScpXHJcbiAgICAgID8gdGhpcy5mR3JvdXAuY29udHJvbHNbaWRDYW1wb10udmFsdWUudmFsdWVcclxuICAgICAgOiB0aGlzLmZHcm91cC5jb250cm9sc1tpZENhbXBvXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHVlZGVIYWJpbGl0YXJEZXBlbmRpZW50ZShjYW1wbzogQXJxQ2FtcG8pOiBib29sZWFuIHtcclxuICAgIGxldCBoYWJpbGl0YXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29uc3QgcGFkcmVzOiBBcnFDYW1wb1tdID0gdGhpcy5kYXRvcy5jYW1wb3MuZmlsdGVyKGMgPT4ge1xyXG4gICAgICBjb25zdCBjYW1wb1JlcXVlcmlkbzogc3RyaW5nID0gYCR7Y2FtcG8ub3JkZW59JHt0aGlzLkRFUEVORElFTlRFX1JFUVVFUklET31gO1xyXG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeJHtjYW1wb1JlcXVlcmlkb318W14wLTldJHtjYW1wb1JlcXVlcmlkb31gKTtcclxuICAgICAgcmV0dXJuIHJlZ2V4cC50ZXN0KGMubGlzdGFEZXBlbmRpZW50ZSk7XHJcbiAgICB9KTtcclxuICAgIHBhZHJlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLmdldENvbnRyb2xWYWx1ZShjLmlkQ2FtcG8pO1xyXG4gICAgICBpZiAoIWNvbnRyb2xWYWx1ZSB8fCAoQXJyYXkuaXNBcnJheShjb250cm9sVmFsdWUpICYmIGNvbnRyb2xWYWx1ZS5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgICAgLy8gU2kgZWwgY29udHJvbCBubyB0aWVuZSB2YWx1ZSwgZGVzaGFiaWxpdGFtb3NcclxuICAgICAgICBoYWJpbGl0YXIgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb25kaWNpb246IHN0cmluZyB8IG51bGwgPSB0aGlzLmV4dHJhZXJDb25kaWNpb24oYy5saXN0YURlcGVuZGllbnRlLCBjYW1wby5vcmRlbik7XHJcbiAgICAgIGlmIChjb25kaWNpb24gJiYgIWNvbmRpY2lvbi5zcGxpdCh0aGlzLlNFUEFSQURPUikuaW5jbHVkZXMoY29udHJvbFZhbHVlKSkge1xyXG4gICAgICAgIC8vIHNpIG5vIGN1bXBsZSBsYSBjb25kaWNpw7NuLCBkZXNoYWJpbGl0YW1vc1xyXG4gICAgICAgIGhhYmlsaXRhciA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBoYWJpbGl0YXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhZXJDb25kaWNpb24oZGVwZW5kaWVudGVzOiBzdHJpbmcsIG9yZGVuOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtvcmRlbn0hXFxcXFsoW15cXFxcXV0rKVxcXFxdYCk7XHJcbiAgICBjb25zdCBjb2luY2lkZW5jaWEgPSBkZXBlbmRpZW50ZXMubWF0Y2gocmVnZXgpO1xyXG4gICAgaWYgKGNvaW5jaWRlbmNpYSAmJiBjb2luY2lkZW5jaWFbMV0pIHtcclxuICAgICAgcmV0dXJuIGNvaW5jaWRlbmNpYVsxXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVFdPLVdBWSBCSU5ESU5HIFRBQkxFIERBVEEgTE9HSUNcclxuICBwdWJsaWMgcmVxdWlyZURhdGEocmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWREYXRhRXZlbnQkLmVtaXQocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhcmdhckxpc3RhZG9zKGNhbXBvczogQXJxQ2FtcG9bXSk6IHZvaWQge1xyXG4gICAgY2FtcG9zLmZvckVhY2goKGNhbXBvOiBBcnFDYW1wbykgPT4gdGhpcy5jYXJnYXJMaXN0YWRvKGNhbXBvLCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYXJnYXJMaXN0YWRvKGNhbXBvOiBBcnFDYW1wbywgcmVjYXJnYXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIG1pcmFtb3Mgc2kgc2UgZXN0w6EgcmVjYXJnYW5kbyBlbCBjYW1wbyB5IG5vIGV4aXN0ZSBkYXRvIHZhcmlhYmxlXHJcbiAgICBpZiAocmVjYXJnYXIgJiYgIXRoaXMuUEFSQU1fUkVHRVhQLnRlc3QoY2FtcG8ub3JpZ2VuRGF0b3MpKSByZXR1cm47XHJcbiAgICBzd2l0Y2ggKGNhbXBvLmh0bWxUaXBvKSB7XHJcbiAgICAgIGNhc2UgdGhpcy5TRUxFQ1RfU1RSOlxyXG4gICAgICBjYXNlIHRoaXMuU0VMRUNUX01VTFRJUExFX1NUUjpcclxuICAgICAgICAvLyByZWxsZW5hbW9zIGxvcyBwb3NpYmxlcyBwYXJhbWV0cm9zIHF1ZSB2ZW5nYW4gZW4gbGEgdXJsXHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnJlbGxlbmFyUGFyYW1ldHJvc1VybCh0aGlzLnVybEJhc2VCYWNrICsgY2FtcG8ub3JpZ2VuRGF0b3MpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uc0FycmF5LnNldChjYW1wby5pZENhbXBvLCB0aGlzLl9hcnFIdHRwQ2xpZW50LmdldDxBcnFMaXN0W10+KGVuZHBvaW50KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgdGhpcy5BVVRPQ09NUExFVEVfU1RSOlxyXG4gICAgICAgIC8vIHJlbGxlbmFtb3MgbG9zIHBvc2libGVzIHBhcmFtZXRyb3MgcXVlIHZlbmdhbiBlbiBsYSB1cmwgeSBhbnlhZGltb3MgbG9zIGRlIGxhIHBhZ2luYWNpb25cclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZXRPcHRpb25zQXJyYXkuc2V0KGNhbXBvLmlkQ2FtcG8sIChyZXF1ZXN0OiBBcnFQYWdlYWJsZVJlcXVlc3QpID0+IHtcclxuICAgICAgICAgIGxldCBlbmRwb2ludCA9IHRoaXMucmVsbGVuYXJQYXJhbWV0cm9zVXJsKHRoaXMudXJsQmFzZUJhY2sgKyBjYW1wby5vcmlnZW5EYXRvcyk7XHJcbiAgICAgICAgICBlbmRwb2ludCArPSAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgKyB0aGlzLmdldFVybFBhcmFtc0Zyb21SZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FycUh0dHBDbGllbnQuZ2V0PEFycVBhZ2VhYmxlUmVzcG9uc2U+KGVuZHBvaW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVsbGVuYXJQYXJhbWV0cm9zVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLlBBUkFNX1JFR0VYUC50ZXN0KHVybCkpIHtcclxuICAgICAgY29uc3QgbWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSA9IHVybC5tYXRjaCh0aGlzLlBBUkFNX1JFR0VYUCkhO1xyXG4gICAgICBmb3IgKHZhciBtYXRjaCBvZiBtYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc3QgY2FtcG9GaWx0cm8gPSB0aGlzLmRhdG9zLmNhbXBvcy5maW5kKGMgPT4gYy5vcmRlbi50b1N0cmluZygpID09PSBtYXRjaC5yZXBsYWNlKC9be31dL2csICcnKSk7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UobWF0Y2gsIGNhbXBvRmlsdHJvID8gdGhpcy5nZXRDb250cm9sVmFsdWUoY2FtcG9GaWx0cm8uaWRDYW1wbykgfHwgJycgOiAnJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVybFBhcmFtc0Zyb21SZXF1ZXN0KHJlcXVlc3Q6IEFycVBhZ2VhYmxlUmVxdWVzdCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocmVxdWVzdClcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9PSR7dmFsdWV9YClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29sdW1uU2NoZW1hKGNhbXBvczogQXJxQ2FtcG9bXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gdGhpcy5MQU5HX0VTKSB7XHJcbiAgICAgIGNhbXBvcy5mb3JFYWNoKChjYW1wbzogQXJxQ2FtcG8pID0+IHtcclxuICAgICAgICB0aGlzLmFkZENvbHVtblNjaGVtYShjYW1wbywgY2FtcG8uaHRtbExhYmVsLCB0aGlzLmFkZFR5cGVDb2x1bW5TY2hlbWEoY2FtcG8pKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW1wb3MuZm9yRWFjaCgoY2FtcG86IEFycUNhbXBvKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRDb2x1bW5TY2hlbWEoY2FtcG8sIGNhbXBvLmh0bWxMYWJlbFZhbCwgdGhpcy5hZGRUeXBlQ29sdW1uU2NoZW1hKGNhbXBvKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUeXBlQ29sdW1uU2NoZW1hKGNhbXBvOiBBcnFDYW1wbyk6IHN0cmluZyB7XHJcbiAgICBsZXQgdHlwZTtcclxuICAgIHN3aXRjaCAoY2FtcG8uaHRtbFRpcG8pIHtcclxuICAgICAgY2FzZSB0aGlzLklOUFVUX01PTkVZX1NUUjpcclxuICAgICAgY2FzZSB0aGlzLklOUFVUX05VTUJFUl9TVFI6XHJcbiAgICAgICAgdHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHRoaXMuREFURVBJQ0tFUl9SQU5HRV9TVFI6XHJcbiAgICAgIGNhc2UgdGhpcy5EQVRFUElDS0VSX1NUUjpcclxuICAgICAgICB0eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHRoaXMuQ0hFQ0tCT1hfQkFTSUNfU1RSOlxyXG4gICAgICAgIHR5cGUgPSAnYm9vbGVhbic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRDb2x1bW5TY2hlbWEoY2FtcG86IEFycUNhbXBvLCBsYWJlbDogc3RyaW5nLCB0eXBlOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtblNjaGVtYTogQXJxRGF0YXRhYmxlQ29sdW1uc1NjaGVtYSA9IHtcclxuICAgICAga2V5OiBjYW1wby5odG1sVGlwbyxcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgbGFiZWw6IGxhYmVsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29sdW1uc1NjaGVtYS5wdXNoKGNvbHVtblNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUZvcm1Hcm91cChjYW1wb3M6IEFycUNhbXBvW10pOiB2b2lkIHtcclxuICAgIHRoaXMuZkdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgICBjYW1wb3MuZm9yRWFjaCgoY2FtcG86IEFycUNhbXBvKSA9PiB7XHJcbiAgICAgIGlmIChjYW1wby5odG1sVGlwbyA9PT0gdGhpcy5TRUxFQ1RfTVVMVElQTEVfU1RSICYmIGNhbXBvLnZhbHVlKSB7XHJcbiAgICAgICAgY2FtcG8udmFsdWUgPSBjYW1wby52YWx1ZS5zcGxpdCh0aGlzLlNFUEFSQURPUik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mR3JvdXAuYWRkQ29udHJvbChcclxuICAgICAgICBjYW1wby5pZENhbXBvLFxyXG4gICAgICAgIG5ldyBGb3JtQ29udHJvbChjYW1wby52YWx1ZSwgW1xyXG4gICAgICAgICAgY2FtcG8uaHRtbFJlcXVlcmlkbyA9PT0gdGhpcy5SRVFVRVJJRE9fUyA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JcclxuICAgICAgICBdKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gU2kgZXMgZGF0ZXBpY2tlci1yYW5nZSBzZSBhw7FhZGUgdW4gZm9ybUNvbnRyb2wgbcOhcyBwYXJhIGxhIGZlY2hhIGZpblxyXG4gICAgICBpZiAoY2FtcG8uaHRtbFRpcG8gPT09IHRoaXMuREFURVBJQ0tFUl9SQU5HRV9TVFIpIHtcclxuICAgICAgICB0aGlzLmZHcm91cC5hZGRDb250cm9sKFxyXG4gICAgICAgICAgY2FtcG8uaWRDYW1wbyArIHRoaXMuTkFNRV9GQ19EUF9SQU5HRSxcclxuICAgICAgICAgIG5ldyBGb3JtQ29udHJvbChjYW1wby52YWx1ZSwgW1xyXG4gICAgICAgICAgICBjYW1wby5odG1sUmVxdWVyaWRvID09PSB0aGlzLlJFUVVFUklET19TID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvclxyXG4gICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvbXByb2JhbW9zIHNpIGVzIGRlcGVuZGllbnRlIGRlIG90cm8gY2FtcG8geSBlc3RlIGVzIHJlcXVlcmlkb1xyXG4gICAgICBjb25zdCBjYW1wb1JlcXVlcmlkbzogc3RyaW5nID0gYCR7Y2FtcG8ub3JkZW59JHt0aGlzLkRFUEVORElFTlRFX1JFUVVFUklET31gO1xyXG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeJHtjYW1wb1JlcXVlcmlkb318W14wLTldJHtjYW1wb1JlcXVlcmlkb31gKTtcclxuICAgICAgY29uc3QgcGFkcmVSZXF1ZXJpZG8gPSB0aGlzLmRhdG9zLmNhbXBvcy5zb21lKGMgPT4gcmVnZXhwLnRlc3QoYy5saXN0YURlcGVuZGllbnRlKSk7XHJcbiAgICAgIC8vIERlc2hhYmlsaXRhbW9zIGVsIGNhbXBvIHNpIHByb2NlZGVcclxuICAgICAgaWYgKGNhbXBvLmRpc2FibGVkIHx8IHBhZHJlUmVxdWVyaWRvKSB7XHJcbiAgICAgICAgdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10uZGlzYWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdG9zLmNhbXBvcy5mb3JFYWNoKGNhbXBvID0+IHtcclxuICAgICAgdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmZHcm91cC5jb250cm9sc1tjYW1wby5pZENhbXBvXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmZHcm91cC52YWxpZCkge1xyXG4gICAgICB0aGlzLl9idG5TZWFyY2hGbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yZXMgZW4gbGEgdmFsaWRhY2nDs24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHBvcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdG9zLmNhbXBvcy5mb3JFYWNoKGNhbXBvID0+IHtcclxuICAgICAgdGhpcy5mR3JvdXAuY29udHJvbHNbY2FtcG8uaWRDYW1wb10ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmZHcm91cC5jb250cm9sc1tjYW1wby5pZENhbXBvXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmZHcm91cC52YWxpZCkge1xyXG4gICAgICB0aGlzLl9idG5FeHBvcnRGbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yZXMgZW4gbGEgdmFsaWRhY2nDs24nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ2ZpbHRlckJ5R3J1cG8nIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJCeUdydXBvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyB0cmFuc2Zvcm0oY2FtcG9zOiBBcnFDYW1wb1tdLCBncnVwbzogc3RyaW5nKTogQXJxQ2FtcG9bXSB7XHJcbiAgICByZXR1cm4gY2FtcG9zLmZpbHRlcihjYW1wbyA9PiBjYW1wby5ncnVwbyA9PT0gZ3J1cG8pO1xyXG4gIH1cclxufVxyXG4iLCI8bGFiZWwgKm5nSWY9XCJ0aGlzLnN1YkxhYmVsXCI+e3sgdGhpcy5zdWJMYWJlbCB9fTwvbGFiZWw+XHJcbjxoMiAqbmdJZj1cInRoaXMuZGF0b3NcIj57eyB0aGlzLmRhdG9zLmZvcm11bGFyaW8uZGVub21pbmFjaW9uIH19PC9oMj5cclxuPGRpdiAqbmdGb3I9XCJsZXQgZ3J1cG8gb2YgdGhpcy5ncnVwb3NcIj5cclxuICA8YXJxLWZpZWxkc2V0IFtsZWdlbmRdPVwiZ3J1cG9cIj5cclxuICAgIDxtYXQtZ3JpZC1saXN0XHJcbiAgICAgICpuZ0lmPVwidGhpcy5kYXRvc1wiXHJcbiAgICAgIFtjb2xzXT1cInRoaXMuZGF0b3MuZm9ybXVsYXJpby5udW1Db2x1bW5hcyB8fCB0aGlzLm51bUNvbHNcIlxyXG4gICAgICBbcm93SGVpZ2h0XT1cInRoaXMucm93SGVpZ2h0XCI+XHJcbiAgICAgIDxtYXQtZ3JpZC10aWxlICpuZ0Zvcj1cImxldCBjYW1wbyBvZiB0aGlzLmRhdG9zLmNhbXBvcyB8IGZpbHRlckJ5R3J1cG8gOiBncnVwb1wiIFtjb2xzcGFuXT1cImNhbXBvLmFuY2hvQ29sdW1uYVwiPlxyXG4gICAgICAgIDxhcnEtdGV4dC1pbnB1dFxyXG4gICAgICAgICAgKm5nSWY9XCJjYW1wby5odG1sVGlwbyA9PT0gJ2lucHV0LXRleHQnXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJ0aGlzLmxhbmcgPT09IHRoaXMuTEFOR19FUyA/IGNhbXBvLmh0bWxMYWJlbCA6IGNhbXBvLmh0bWxMYWJlbFZhbFwiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbXBvLmNzc0NsYXNzICE9PSBudWxsID8gY2FtcG8uY3NzQ2xhc3MgOiAnJ1wiXHJcbiAgICAgICAgICBbbWF4TGVuZ3RoXT1cImNhbXBvLmh0bWxUYW1hbnlvTWF4XCI+PC9hcnEtdGV4dC1pbnB1dD5cclxuXHJcbiAgICAgICAgPGFycS1zZWxlY3RcclxuICAgICAgICAgICpuZ0lmPVwiY2FtcG8uaHRtbFRpcG8gPT09ICdzZWxlY3QnXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJ0aGlzLmxhbmcgPT09IHRoaXMuTEFOR19FUyA/IGNhbXBvLmh0bWxMYWJlbCA6IGNhbXBvLmh0bWxMYWJlbFZhbFwiXHJcbiAgICAgICAgICBbZW1wdHlPcHRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbXBvLmNzc0NsYXNzICE9PSBudWxsID8gY2FtcG8uY3NzQ2xhc3MgOiAnJ1wiXHJcbiAgICAgICAgICBbZnVsbE9iamVjdF09XCJmYWxzZVwiXHJcbiAgICAgICAgICBbc2VsZWN0T3B0aW9uc0xpc3RdPVwidGhpcy5zZWxlY3RPcHRpb25zQXJyYXkuZ2V0KGNhbXBvLmlkQ2FtcG8pXCI+XHJcbiAgICAgICAgPC9hcnEtc2VsZWN0PlxyXG5cclxuICAgICAgICA8YXJxLWRhdGVwaWNrZXItcmFuZ2VcclxuICAgICAgICAgICpuZ0lmPVwiY2FtcG8uaHRtbFRpcG8gPT09ICdkYXRlcGlja2VyLXJhbmdlJ1wiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJ0aGlzLmxhbmcgPT09IHRoaXMuTEFOR19FUyA/IGNhbXBvLmh0bWxMYWJlbCA6IGNhbXBvLmh0bWxMYWJlbFZhbFwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiY2FtcG8uaWRDYW1wb1wiXHJcbiAgICAgICAgICBbZmVjaGFGaW5dPVwiY2FtcG8uaWRDYW1wbyArIHRoaXMuTkFNRV9GQ19EUF9SQU5HRVwiXHJcbiAgICAgICAgICBbdmlzaWJsZVJhbmdlXT1cImZhbHNlXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbXBvLmNzc0NsYXNzICE9PSBudWxsID8gY2FtcG8uY3NzQ2xhc3MgOiAnJ1wiPlxyXG4gICAgICAgIDwvYXJxLWRhdGVwaWNrZXItcmFuZ2U+XHJcblxyXG4gICAgICAgIDxhcnEtZGF0ZXBpY2tlclxyXG4gICAgICAgICAgKm5nSWY9XCJjYW1wby5odG1sVGlwbyA9PT0gJ2RhdGVwaWNrZXInXCJcclxuICAgICAgICAgIFtmR3JvdXBdPVwidGhpcy5mR3JvdXBcIlxyXG4gICAgICAgICAgW2xhYmVsXT1cInRoaXMubGFuZyA9PT0gdGhpcy5MQU5HX0VTID8gY2FtcG8uaHRtbExhYmVsIDogY2FtcG8uaHRtbExhYmVsVmFsXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInREQvTU0vWVlZWSdcIj48L2FycS1kYXRlcGlja2VyPlxyXG5cclxuICAgICAgICA8YXJxLWlucHV0LW1vbmV5XHJcbiAgICAgICAgICAqbmdJZj1cImNhbXBvLmh0bWxUaXBvID09PSAnaW5wdXQtbW9uZXknXCJcclxuICAgICAgICAgIFtmR3JvdXBdPVwidGhpcy5mR3JvdXBcIlxyXG4gICAgICAgICAgW2xhYmVsXT1cInRoaXMubGFuZyA9PT0gdGhpcy5MQU5HX0VTID8gY2FtcG8uaHRtbExhYmVsIDogY2FtcG8uaHRtbExhYmVsVmFsXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbXBvLmNzc0NsYXNzICE9PSBudWxsID8gY2FtcG8uY3NzQ2xhc3MgOiAnJ1wiXHJcbiAgICAgICAgICBbbWF4TGVuZ3RoXT1cImNhbXBvLmh0bWxUYW1hbnlvTWF4XCI+PC9hcnEtaW5wdXQtbW9uZXk+XHJcblxyXG4gICAgICAgIDxhcnEtaW5wdXQtbnVtYmVyXHJcbiAgICAgICAgICAqbmdJZj1cImNhbXBvLmh0bWxUaXBvID09PSAnaW5wdXQtbnVtYmVyJ1wiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJ0aGlzLmxhbmcgPT09IHRoaXMuTEFOR19FUyA/IGNhbXBvLmh0bWxMYWJlbCA6IGNhbXBvLmh0bWxMYWJlbFZhbFwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiY2FtcG8uaWRDYW1wb1wiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJjYW1wby5jc3NDbGFzcyAhPT0gbnVsbCA/IGNhbXBvLmNzc0NsYXNzIDogJydcIlxyXG4gICAgICAgICAgW21heExlbmd0aF09XCJjYW1wby5odG1sVGFtYW55b01heFwiPjwvYXJxLWlucHV0LW51bWJlcj5cclxuXHJcbiAgICAgICAgPGFycS1jaGVja2JveC1iYXNpY1xyXG4gICAgICAgICAgKm5nSWY9XCJjYW1wby5odG1sVGlwbyA9PT0gJ2NoZWNrYm94LWJhc2ljJ1wiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJ0aGlzLmxhbmcgPT09IHRoaXMuTEFOR19FUyA/IGNhbXBvLmh0bWxMYWJlbCA6IGNhbXBvLmh0bWxMYWJlbFZhbFwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiY2FtcG8uaWRDYW1wb1wiXHJcbiAgICAgICAgICBbY29sb3JdPVwidGhpcy5jb2xvckNoZWNrYm94QmFzaWNcIlxyXG4gICAgICAgICAgW2NoZWNrZWRdPVwidGhpcy5jaGVja2VkQ2hlY2tib3hCYXNpY1wiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJjYW1wby5jc3NDbGFzcyAhPT0gbnVsbCA/IGNhbXBvLmNzc0NsYXNzIDogJydcIj5cclxuICAgICAgICA8L2FycS1jaGVja2JveC1iYXNpYz5cclxuXHJcbiAgICAgICAgPGFycS1hdXRvY29tcGxldGVcclxuICAgICAgICAgICpuZ0lmPVwiY2FtcG8uaHRtbFRpcG8gPT09ICdhdXRvY29tcGxldGUnXCJcclxuICAgICAgICAgIFtmR3JvdXBdPVwidGhpcy5mR3JvdXBcIlxyXG4gICAgICAgICAgW2xhYmVsXT1cInRoaXMubGFuZyA9PT0gdGhpcy5MQU5HX0VTID8gY2FtcG8uaHRtbExhYmVsIDogY2FtcG8uaHRtbExhYmVsVmFsXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtvcHRpb25zXT1cInRoaXMuYXV0b2NvbXBsZXRldE9wdGlvbnNBcnJheS5nZXQoY2FtcG8uaWRDYW1wbylcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiY2FtcG8uY3NzQ2xhc3MgIT09IG51bGwgPyBjYW1wby5jc3NDbGFzcyA6ICcnXCI+XHJcbiAgICAgICAgPC9hcnEtYXV0b2NvbXBsZXRlPlxyXG5cclxuICAgICAgICA8YXJxLXNlbGVjdFxyXG4gICAgICAgICAgKm5nSWY9XCJjYW1wby5odG1sVGlwbyA9PT0gJ3NlbGVjdC1tdWx0aXBsZSdcIlxyXG4gICAgICAgICAgW2xhYmVsXT1cInRoaXMubGFuZyA9PT0gdGhpcy5MQU5HX0VTID8gY2FtcG8uaHRtbExhYmVsIDogY2FtcG8uaHRtbExhYmVsVmFsXCJcclxuICAgICAgICAgIFtlbXB0eU9wdGlvbl09XCJmYWxzZVwiXHJcbiAgICAgICAgICBbZkdyb3VwXT1cInRoaXMuZkdyb3VwXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJjYW1wby5pZENhbXBvXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbXBvLmNzc0NsYXNzICE9PSBudWxsID8gY2FtcG8uY3NzQ2xhc3MgOiAnJ1wiXHJcbiAgICAgICAgICBbZnVsbE9iamVjdF09XCJmYWxzZVwiXHJcbiAgICAgICAgICBbbXVsdGlwbGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbc2VsZWN0T3B0aW9uc0xpc3RdPVwidGhpcy5zZWxlY3RPcHRpb25zQXJyYXkuZ2V0KGNhbXBvLmlkQ2FtcG8pXCI+XHJcbiAgICAgICAgPC9hcnEtc2VsZWN0PlxyXG4gICAgICA8L21hdC1ncmlkLXRpbGU+XHJcbiAgICA8L21hdC1ncmlkLWxpc3Q+XHJcbiAgPC9hcnEtZmllbGRzZXQ+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBzdHlsZT1cInBhZGRpbmctdG9wOiAyMHB4XCI+XHJcbiAgPGFycS1idXR0b25cclxuICAgICpuZ0lmPVwidGhpcy5zaG93QnRuU2VhcmNoXCJcclxuICAgIFtsYWJlbF09XCJ0aGlzLmxhYmVsQnRuU2VhcmNoXCJcclxuICAgIFtjb2xvcl09XCJ0aGlzLmNvbG9yQnRuU2VhcmNoXCJcclxuICAgIFt0eXBlXT1cInRoaXMudHlwZUJ0blNlYXJjaFwiXHJcbiAgICBbaWNvbl09XCJ0aGlzLmljb25CdG5TZWFyY2hcIlxyXG4gICAgKGNsaWNrKT1cInRoaXMuc2VhcmNoKClcIj5cclxuICA8L2FycS1idXR0b24+XHJcblxyXG4gIDxhcnEtYnV0dG9uXHJcbiAgICAqbmdJZj1cInRoaXMuc2hvd0J0bkV4cG9ydFwiXHJcbiAgICBbbGFiZWxdPVwidGhpcy5sYWJlbEJ0bkV4cG9ydFwiXHJcbiAgICBbY29sb3JdPVwidGhpcy5jb2xvckJ0bkV4cG9ydFwiXHJcbiAgICBbdHlwZV09XCJ0aGlzLnR5cGVCdG5FeHBvcnRcIlxyXG4gICAgW2ljb25dPVwidGhpcy5pY29uQnRuRXhwb3J0XCJcclxuICAgIChjbGljayk9XCJ0aGlzLmV4cG9ydCgpXCI+XHJcbiAgPC9hcnEtYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19