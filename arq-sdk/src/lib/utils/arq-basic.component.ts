import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ArqApiService } from '../services/arq-api.service';
import { ArqSchemaService } from '../services/arq-schema.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'arq-basic-component-form',
  template: ''
})
export class ArqBasicComponent implements OnInit {
  public formGroup!: FormGroup;
  public entidad: Object = {};
  public schema: any;
  public fillForm$: Subject<void> = new Subject();
  protected _route!: ActivatedRoute;

  constructor(protected _schemaService: ArqSchemaService, protected _apiService?: ArqApiService) {
    this._route = inject(ActivatedRoute);
    this.preparar();
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    if (!this._apiService) {
      this.inicializar();
    }
  }

  public preparar(): void {
    this.schema = this._route.snapshot.data['schema'];
    if (this.schema) {
      this.prepareSchema();
    } else if (this._apiService) {
      this._apiService.schema().subscribe((schema: any) => {
        this.schema = schema;
        this.prepareSchema();
      });
    }
  }

  protected prepareSchema(): void {
    const validations = this._schemaService._parseSchema(this.schema, this.addCustomValidationRules());
    this.formGroup = this.prepareFormGroup(validations);
    this._schemaService.fillModelWithDefaultValues(this.entidad, this.formGroup); //schema
    this.formGroup?.updateValueAndValidity();
    this.inicializar();
  }

  prepareFormGroup(validations: any): FormGroup<any> {
    let _formBuilder = new FormBuilder();
    let fGroup: FormGroup = _formBuilder.group(validations);
    let property: keyof typeof validations;
    for (property in validations) {
      let valor = validations[property];
      if (this.isListAngularDto(valor)) {
        fGroup.setControl(property, new FormControl(null));
      } else if (!Array.isArray(valor)) {
        let anidadoGroup: FormGroup = this.prepareFormGroup(valor);
        fGroup.setControl(property, anidadoGroup);
      }
    }
    return fGroup;
  }

  isListAngularDto(valor: any): boolean {
    if (!valor) {
      return false;
    }
    return valor.hasOwnProperty('value') && valor.hasOwnProperty('description') && valor.hasOwnProperty('descriptionV');
  }

  protected inicializar(): void { }

  /**
   * Add custom validation rules
   * Override if we need to set
   */
  protected addCustomValidationRules(): Object {
    const validators: Object = {};
    return validators;
  }

  public fillForm(editForm: FormGroup, entity: any, emitFillForm: boolean = true): FormGroup {
    const recursivePatchValue = (form: FormGroup, data: any): void => {
      Object.keys(form.controls).forEach(keycontrol => {
        const control: AbstractControl = form.controls[keycontrol];
        const value = data?.hasOwnProperty(keycontrol) ? data[keycontrol] : undefined;
        if (control instanceof FormGroup) {
          // Si el control es un FormGroup, llama recursivamente a recursivePatchValue
          recursivePatchValue(control as FormGroup, value);
        } else if (value !== undefined && control) {
          let schemaProperty = this.schema?.properties[keycontrol];
          // Aplica patchValue solo si el valor no es undefined y no emite evento
          // Si el estado del control es invalid y es un numero, se trata de una fecha
          if (schemaProperty?.$type && schemaProperty?.$type == 'java.util.Date' && typeof value == 'number') {
            control.patchValue(new Date(value), { emitEvent: false });
          } else {
            control.patchValue(value, { emitEvent: false });
          }
        }
      });
    };
    recursivePatchValue(editForm, entity);
    if (emitFillForm) this.fillForm$.next();
    return editForm;
  }

  public fillEntity(editForm: FormGroup, onlyDirty?: boolean): any {
    let entity: Object = {};
    Object.keys(editForm.controls).forEach(keycontrol => {
      const control: AbstractControl = editForm.controls[keycontrol];

      let incluirSoloCambios = true;
      if (onlyDirty) {
        incluirSoloCambios = control.dirty;
      }

      if (control instanceof FormControl && incluirSoloCambios) {
        let value = control.value;
        let schemaProperty = this.schema?.properties[keycontrol];
        if (schemaProperty?.properties && this.isListAngularDto(schemaProperty.properties)) {
          value = control.value?.value ? control.value : null;
        }
        Object.defineProperty(entity, keycontrol, {
          value: value,
          enumerable: true
        });
      }

      if (control instanceof FormGroup) {
        Object.defineProperty(entity, keycontrol, {
          value: this.fillEntity(control as FormGroup),
          enumerable: true
        });
      }
    }, this);
    return onlyDirty ? entity : { ...editForm?.value, ...entity };
  }

  /**
   * Obtiene el formControl, solo dentro del formGroup inicial
   */
  public getBasicFormControl(control: string): AbstractControl {
    return this.formGroup.controls[control];
  }

  /**
   * Obtiene el formControl busca dentro de todo el objeto
   */
  public getFormControl(controlStr: string): FormControl {
    return this.getFormControlFromForm(this.formGroup, controlStr);
  }

  /**
   * Obtiene el formControl busca a partir del FormGroup pasado
   */
  public getFormControlFromForm(form: FormGroup, controlStr: string): FormControl {
    let formControl: FormControl = new FormControl();

    Object.keys(form.controls).forEach(keycontrol => {
      const control: AbstractControl = this.formGroup.controls[keycontrol];
      if (control.constructor.name === 'FormControl' && keycontrol == controlStr) {
        formControl = control as FormControl;
      } else if (control.constructor.name === 'FormGroup') {
        this.getFormControl(controlStr);
      }
    }, this);

    return formControl;
  }

  /**
   * Pasando el formGroup y el mapa de errores se pintas los marcos en rojo y se muestran los errores
   */
  protected setErrors(form: FormGroup, errors: string[]): void {
    Object.keys(form.controls).forEach(keycontrol => {
      form.controls[keycontrol].setErrors(null);
    }, this);
    // Ordenamos los errores para agruparlos por formControl por si viniesen desordenados
    errors.sort();
    // declaramos variables auxiliares externas al bucle
    let keyControlActivo: string = '';
    let errorsMap: Record<string, string> = {};
    for (let errCount: number = 0; errCount < errors.length; errCount++) {
      const errorSinPadre: string = errors[errCount].substring(errors[errCount].indexOf('.') + 1);
      const keyControlError: string = errorSinPadre.substring(0, errorSinPadre.indexOf(':'));
      const valueControlError: string = errorSinPadre.substring(errorSinPadre.indexOf(':') + 1).trim();
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
  protected refreshClientValidations(form: FormGroup): void {
    Object.keys(form.controls).forEach(keyControl => {
      // Los select dependientes dan errores con el refresco porque detectan cambios en los padres
      // y eso hace que limpie de valor los hijos. Por lo que solo refrescamos los controles que angular diga
      // que contienen errores.
      if (form.controls[keyControl].status == 'INVALID') {
        form.controls[keyControl].updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  protected markAllAndRefresh(form: FormGroup): void {
    Object.keys(form.controls).forEach(keyControl => {
      form.controls[keyControl].markAsTouched();
    });
    // Utilizamos el refresco nuestro porque que tiene el control de status para evitar el bug de los
    // select dependientes.
    this.refreshClientValidations(form);
  }
}
