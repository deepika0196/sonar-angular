import { OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ArqApiService } from '../services/arq-api.service';
import { ArqSchemaService } from '../services/arq-schema.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ArqBasicComponent implements OnInit {
    protected _schemaService: ArqSchemaService;
    protected _apiService?: ArqApiService | undefined;
    formGroup: FormGroup;
    entidad: Object;
    schema: any;
    idBloque?: string;
    fillForm$: Subject<void>;
    protected _route: ActivatedRoute;
    constructor(_schemaService: ArqSchemaService, _apiService?: ArqApiService | undefined);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    preparar(): void;
    protected prepareSchema(): void;
    prepareFormGroup(validations: any): FormGroup<any>;
    isListAngularDto(valor: any): boolean;
    protected inicializar(): void;
    /**
     * Add custom validation rules
     * Override if we need to set
     */
    protected addCustomValidationRules(): Object;
    fillForm(editForm: FormGroup, entity: any, emitFillForm?: boolean): FormGroup;
    fillEntity(editForm: FormGroup, onlyDirty?: boolean): any;
    /**
     * Obtiene el formControl, solo dentro del formGroup inicial
     */
    getBasicFormControl(control: string): AbstractControl;
    /**
     * Obtiene el formControl busca dentro de todo el objeto
     */
    getFormControl(controlStr: string): FormControl;
    /**
     * Obtiene el formControl busca a partir del FormGroup pasado
     */
    getFormControlFromForm(form: FormGroup, controlStr: string): FormControl;
    /**
     * Pasando el formGroup y el mapa de errores se pintas los marcos en rojo y se muestran los errores
     */
    protected setErrors(form: FormGroup, errors: string[]): void;
    /**
     * Por algun motivo los formControl con errores tienen status valid hasta que se produce un evento onBlur
     * por lo que se da el caso de formGroup invalid que no muestra errores hasta que se interactua con el formControl
     *
     * Pasando el formGroup se fuerza la evaluacion de de la validez de los campos y asi mostramos los errores de cliente
     */
    protected refreshClientValidations(form: FormGroup): void;
    protected markAllAndRefresh(form: FormGroup): void;
    /**
     * Similar a refreshClientValidations, pero para casos en los que el formulario dice que es válido.
     * Esto suele sucecer cuando se guarda sin tocar nada o si se quiere mostrar las validaciones según
     * se carga la pantalla.
     */
    protected forceValidation(formGroup: FormGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqBasicComponent, "arq-basic-component-form", never, {}, {}, never, never, false, never>;
}
