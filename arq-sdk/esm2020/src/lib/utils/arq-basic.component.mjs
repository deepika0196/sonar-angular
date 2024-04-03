import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../services/arq-schema.service";
import * as i2 from "../services/arq-api.service";
export class ArqBasicComponent {
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
        const validations = this._schemaService._parseSchema(this.schema, this.addCustomValidationRules());
        this.formGroup = this.prepareFormGroup(validations);
        this._schemaService.fillModelWithDefaultValues(this.entidad, this.formGroup); //schema
        this.formGroup?.updateValueAndValidity();
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
                const control = form.controls[keycontrol];
                const value = data?.hasOwnProperty(keycontrol) ? data[keycontrol] : undefined;
                if (control instanceof FormGroup) {
                    // Si el control es un FormGroup, llama recursivamente a recursivePatchValue
                    recursivePatchValue(control, value);
                }
                else if (value !== undefined && control) {
                    let schemaProperty = this.schema?.properties[keycontrol];
                    // Aplica patchValue solo si el valor no es undefined y no emite evento
                    // Si el estado del control es invalid y es un numero, se trata de una fecha
                    if (schemaProperty?.$type && schemaProperty?.$type == 'java.util.Date' && typeof value == 'number') {
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
            const control = editForm.controls[keycontrol];
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
                    value: this.fillEntity(control),
                    enumerable: true
                });
            }
        }, this);
        return onlyDirty ? entity : { ...editForm?.value, ...entity };
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
ArqBasicComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComponent, deps: [{ token: i1.ArqSchemaService }, { token: i2.ArqApiService }], target: i0.ɵɵFactoryTarget.Component });
ArqBasicComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqBasicComponent, selector: "arq-basic-component-form", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBasicComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'arq-basic-component-form',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.ArqSchemaService }, { type: i2.ArqApiService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWJhc2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi91dGlscy9hcnEtYmFzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBbUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl0RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU1qRCxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLFlBQXNCLGNBQWdDLEVBQVksV0FBMkI7UUFBdkUsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQVksZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBTnRGLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHckIsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSTlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0s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NUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEdBdFBVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGdFQUZsQixFQUFFOzJGQUVELGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEFycUFwaVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcnEtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcnFTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXJxLXNjaGVtYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FycS1iYXNpYy1jb21wb25lbnQtZm9ybScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFCYXNpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGZvcm1Hcm91cCE6IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgZW50aWRhZDogT2JqZWN0ID0ge307XHJcbiAgcHVibGljIHNjaGVtYTogYW55O1xyXG4gIHB1YmxpYyBpZEJsb3F1ZT86IHN0cmluZztcclxuICBwdWJsaWMgZmlsbEZvcm0kOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcm90ZWN0ZWQgX3JvdXRlITogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfc2NoZW1hU2VydmljZTogQXJxU2NoZW1hU2VydmljZSwgcHJvdGVjdGVkIF9hcGlTZXJ2aWNlPzogQXJxQXBpU2VydmljZSkge1xyXG4gICAgdGhpcy5fcm91dGUgPSBpbmplY3QoQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgdGhpcy5wcmVwYXJhcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FwaVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5pbmljaWFsaXphcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXBhcmFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5kYXRhWydzY2hlbWEnXTtcclxuICAgIGlmICghdGhpcy5pZEJsb3F1ZSlcclxuICAgICAgdGhpcy5pZEJsb3F1ZSA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmhhcygnaWRCbG9xdWUnKVxyXG4gICAgICAgID8gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZEJsb3F1ZScpIVxyXG4gICAgICAgIDogdGhpcy5pZEJsb3F1ZTtcclxuICAgIGlmICh0aGlzLnNjaGVtYSkge1xyXG4gICAgICB0aGlzLnByZXBhcmVTY2hlbWEoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fYXBpU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnNjaGVtYSh0aGlzLmlkQmxvcXVlKS5zdWJzY3JpYmUoKHNjaGVtYTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlU2NoZW1hKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHByZXBhcmVTY2hlbWEoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IHRoaXMuX3NjaGVtYVNlcnZpY2UuX3BhcnNlU2NoZW1hKHRoaXMuc2NoZW1hLCB0aGlzLmFkZEN1c3RvbVZhbGlkYXRpb25SdWxlcygpKTtcclxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5wcmVwYXJlRm9ybUdyb3VwKHZhbGlkYXRpb25zKTtcclxuICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuZmlsbE1vZGVsV2l0aERlZmF1bHRWYWx1ZXModGhpcy5lbnRpZGFkLCB0aGlzLmZvcm1Hcm91cCk7IC8vc2NoZW1hXHJcbiAgICB0aGlzLmZvcm1Hcm91cD8udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgdGhpcy5pbmljaWFsaXphcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZUZvcm1Hcm91cCh2YWxpZGF0aW9uczogYW55KTogRm9ybUdyb3VwPGFueT4ge1xyXG4gICAgbGV0IF9mb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcigpO1xyXG4gICAgbGV0IGZHcm91cDogRm9ybUdyb3VwID0gX2Zvcm1CdWlsZGVyLmdyb3VwKHZhbGlkYXRpb25zKTtcclxuICAgIGxldCBwcm9wZXJ0eToga2V5b2YgdHlwZW9mIHZhbGlkYXRpb25zO1xyXG4gICAgZm9yIChwcm9wZXJ0eSBpbiB2YWxpZGF0aW9ucykge1xyXG4gICAgICBsZXQgdmFsb3IgPSB2YWxpZGF0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgIGlmICh0aGlzLmlzTGlzdEFuZ3VsYXJEdG8odmFsb3IpKSB7XHJcbiAgICAgICAgZkdyb3VwLnNldENvbnRyb2wocHJvcGVydHksIG5ldyBGb3JtQ29udHJvbChudWxsKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsb3IpKSB7XHJcbiAgICAgICAgbGV0IGFuaWRhZG9Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5wcmVwYXJlRm9ybUdyb3VwKHZhbG9yKTtcclxuICAgICAgICBmR3JvdXAuc2V0Q29udHJvbChwcm9wZXJ0eSwgYW5pZGFkb0dyb3VwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZHcm91cDtcclxuICB9XHJcblxyXG4gIGlzTGlzdEFuZ3VsYXJEdG8odmFsb3I6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF2YWxvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsb3IuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdmFsb3IuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJykgJiYgdmFsb3IuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uVicpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaWNpYWxpemFyKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGN1c3RvbSB2YWxpZGF0aW9uIHJ1bGVzXHJcbiAgICogT3ZlcnJpZGUgaWYgd2UgbmVlZCB0byBzZXRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgYWRkQ3VzdG9tVmFsaWRhdGlvblJ1bGVzKCk6IE9iamVjdCB7XHJcbiAgICBjb25zdCB2YWxpZGF0b3JzOiBPYmplY3QgPSB7fTtcclxuICAgIHJldHVybiB2YWxpZGF0b3JzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGxGb3JtKGVkaXRGb3JtOiBGb3JtR3JvdXAsIGVudGl0eTogYW55LCBlbWl0RmlsbEZvcm06IGJvb2xlYW4gPSB0cnVlKTogRm9ybUdyb3VwIHtcclxuICAgIGNvbnN0IHJlY3Vyc2l2ZVBhdGNoVmFsdWUgPSAoZm9ybTogRm9ybUdyb3VwLCBkYXRhOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaChrZXljb250cm9sID0+IHtcclxuICAgICAgICBjb25zdCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgPSBmb3JtLmNvbnRyb2xzW2tleWNvbnRyb2xdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YT8uaGFzT3duUHJvcGVydHkoa2V5Y29udHJvbCkgPyBkYXRhW2tleWNvbnRyb2xdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAvLyBTaSBlbCBjb250cm9sIGVzIHVuIEZvcm1Hcm91cCwgbGxhbWEgcmVjdXJzaXZhbWVudGUgYSByZWN1cnNpdmVQYXRjaFZhbHVlXHJcbiAgICAgICAgICByZWN1cnNpdmVQYXRjaFZhbHVlKGNvbnRyb2wgYXMgRm9ybUdyb3VwLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNvbnRyb2wpIHtcclxuICAgICAgICAgIGxldCBzY2hlbWFQcm9wZXJ0eSA9IHRoaXMuc2NoZW1hPy5wcm9wZXJ0aWVzW2tleWNvbnRyb2xdO1xyXG4gICAgICAgICAgLy8gQXBsaWNhIHBhdGNoVmFsdWUgc29sbyBzaSBlbCB2YWxvciBubyBlcyB1bmRlZmluZWQgeSBubyBlbWl0ZSBldmVudG9cclxuICAgICAgICAgIC8vIFNpIGVsIGVzdGFkbyBkZWwgY29udHJvbCBlcyBpbnZhbGlkIHkgZXMgdW4gbnVtZXJvLCBzZSB0cmF0YSBkZSB1bmEgZmVjaGFcclxuICAgICAgICAgIGlmIChzY2hlbWFQcm9wZXJ0eT8uJHR5cGUgJiYgc2NoZW1hUHJvcGVydHk/LiR0eXBlID09ICdqYXZhLnV0aWwuRGF0ZScgJiYgdHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wucGF0Y2hWYWx1ZShuZXcgRGF0ZSh2YWx1ZSksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmVjdXJzaXZlUGF0Y2hWYWx1ZShlZGl0Rm9ybSwgZW50aXR5KTtcclxuICAgIGlmIChlbWl0RmlsbEZvcm0pIHRoaXMuZmlsbEZvcm0kLm5leHQoKTtcclxuICAgIHJldHVybiBlZGl0Rm9ybTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsRW50aXR5KGVkaXRGb3JtOiBGb3JtR3JvdXAsIG9ubHlEaXJ0eT86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgbGV0IGVudGl0eTogT2JqZWN0ID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhlZGl0Rm9ybS5jb250cm9scykuZm9yRWFjaChrZXljb250cm9sID0+IHtcclxuICAgICAgY29uc3QgY29udHJvbDogQWJzdHJhY3RDb250cm9sID0gZWRpdEZvcm0uY29udHJvbHNba2V5Y29udHJvbF07XHJcblxyXG4gICAgICBsZXQgaW5jbHVpclNvbG9DYW1iaW9zID0gdHJ1ZTtcclxuICAgICAgaWYgKG9ubHlEaXJ0eSkge1xyXG4gICAgICAgIGluY2x1aXJTb2xvQ2FtYmlvcyA9IGNvbnRyb2wuZGlydHk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgJiYgaW5jbHVpclNvbG9DYW1iaW9zKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuICAgICAgICBsZXQgc2NoZW1hUHJvcGVydHkgPSB0aGlzLnNjaGVtYT8ucHJvcGVydGllc1trZXljb250cm9sXTtcclxuICAgICAgICBpZiAoc2NoZW1hUHJvcGVydHk/LnByb3BlcnRpZXMgJiYgdGhpcy5pc0xpc3RBbmd1bGFyRHRvKHNjaGVtYVByb3BlcnR5LnByb3BlcnRpZXMpKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRyb2wudmFsdWU/LnZhbHVlID8gY29udHJvbC52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksIGtleWNvbnRyb2wsIHtcclxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5LCBrZXljb250cm9sLCB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWxsRW50aXR5KGNvbnRyb2wgYXMgRm9ybUdyb3VwKSxcclxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICByZXR1cm4gb25seURpcnR5ID8gZW50aXR5IDogeyAuLi5lZGl0Rm9ybT8udmFsdWUsIC4uLmVudGl0eSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSBlbCBmb3JtQ29udHJvbCwgc29sbyBkZW50cm8gZGVsIGZvcm1Hcm91cCBpbmljaWFsXHJcbiAgICovXHJcbiAgcHVibGljIGdldEJhc2ljRm9ybUNvbnRyb2woY29udHJvbDogc3RyaW5nKTogQWJzdHJhY3RDb250cm9sIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgZWwgZm9ybUNvbnRyb2wgYnVzY2EgZGVudHJvIGRlIHRvZG8gZWwgb2JqZXRvXHJcbiAgICovXHJcbiAgcHVibGljIGdldEZvcm1Db250cm9sKGNvbnRyb2xTdHI6IHN0cmluZyk6IEZvcm1Db250cm9sIHtcclxuICAgIHJldHVybiB0aGlzLmdldEZvcm1Db250cm9sRnJvbUZvcm0odGhpcy5mb3JtR3JvdXAsIGNvbnRyb2xTdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSBlbCBmb3JtQ29udHJvbCBidXNjYSBhIHBhcnRpciBkZWwgRm9ybUdyb3VwIHBhc2Fkb1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtQ29udHJvbEZyb21Gb3JtKGZvcm06IEZvcm1Hcm91cCwgY29udHJvbFN0cjogc3RyaW5nKTogRm9ybUNvbnRyb2wge1xyXG4gICAgbGV0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5Y29udHJvbCA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleWNvbnRyb2xdO1xyXG4gICAgICBpZiAoY29udHJvbC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRm9ybUNvbnRyb2wnICYmIGtleWNvbnRyb2wgPT0gY29udHJvbFN0cikge1xyXG4gICAgICAgIGZvcm1Db250cm9sID0gY29udHJvbCBhcyBGb3JtQ29udHJvbDtcclxuICAgICAgfSBlbHNlIGlmIChjb250cm9sLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGb3JtR3JvdXAnKSB7XHJcbiAgICAgICAgdGhpcy5nZXRGb3JtQ29udHJvbChjb250cm9sU3RyKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1Db250cm9sO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFzYW5kbyBlbCBmb3JtR3JvdXAgeSBlbCBtYXBhIGRlIGVycm9yZXMgc2UgcGludGFzIGxvcyBtYXJjb3MgZW4gcm9qbyB5IHNlIG11ZXN0cmFuIGxvcyBlcnJvcmVzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNldEVycm9ycyhmb3JtOiBGb3JtR3JvdXAsIGVycm9yczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5Y29udHJvbCA9PiB7XHJcbiAgICAgIGZvcm0uY29udHJvbHNba2V5Y29udHJvbF0uc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICAvLyBPcmRlbmFtb3MgbG9zIGVycm9yZXMgcGFyYSBhZ3J1cGFybG9zIHBvciBmb3JtQ29udHJvbCBwb3Igc2kgdmluaWVzZW4gZGVzb3JkZW5hZG9zXHJcbiAgICBlcnJvcnMuc29ydCgpO1xyXG4gICAgLy8gZGVjbGFyYW1vcyB2YXJpYWJsZXMgYXV4aWxpYXJlcyBleHRlcm5hcyBhbCBidWNsZVxyXG4gICAgbGV0IGtleUNvbnRyb2xBY3Rpdm86IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IGVycm9yc01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgZm9yIChsZXQgZXJyQ291bnQ6IG51bWJlciA9IDA7IGVyckNvdW50IDwgZXJyb3JzLmxlbmd0aDsgZXJyQ291bnQrKykge1xyXG4gICAgICBjb25zdCBlcnJvclNpblBhZHJlOiBzdHJpbmcgPSBlcnJvcnNbZXJyQ291bnRdLnN1YnN0cmluZyhlcnJvcnNbZXJyQ291bnRdLmluZGV4T2YoJy4nKSArIDEpO1xyXG4gICAgICBjb25zdCBrZXlDb250cm9sRXJyb3I6IHN0cmluZyA9IGVycm9yU2luUGFkcmUuc3Vic3RyaW5nKDAsIGVycm9yU2luUGFkcmUuaW5kZXhPZignOicpKTtcclxuICAgICAgY29uc3QgdmFsdWVDb250cm9sRXJyb3I6IHN0cmluZyA9IGVycm9yU2luUGFkcmUuc3Vic3RyaW5nKGVycm9yU2luUGFkcmUuaW5kZXhPZignOicpICsgMSkudHJpbSgpO1xyXG4gICAgICBpZiAoZXJyQ291bnQgPT0gMCkge1xyXG4gICAgICAgIGtleUNvbnRyb2xBY3Rpdm8gPSBrZXlDb250cm9sRXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGtleUNvbnRyb2xBY3Rpdm8gIT09IGtleUNvbnRyb2xFcnJvcikge1xyXG4gICAgICAgIC8vIGRhbW9zIHBvciBmaW5hbGl6YWRvIGVsIGFjdHVhbCBtYXBhIHkgc2UgbG8gcGFzYW1vcyBhbCBmb3JtQ29udHJvbFxyXG4gICAgICAgIC8vIGFjdGl2byBoYXN0YSBlbCBtb21lbnRvXHJcbiAgICAgICAgZm9ybS5jb250cm9sc1trZXlDb250cm9sQWN0aXZvXS5zZXRFcnJvcnMoZXJyb3JzTWFwKTtcclxuICAgICAgICAvLyBjYW1iaWFtb3MgZWwga2V5Q29udHJvbEFjdGl2byB5IHJlaW5pY2lhbW9zIGVsIG1hcGEgZGUgZXJyb3Jlc1xyXG4gICAgICAgIGtleUNvbnRyb2xBY3Rpdm8gPSBrZXlDb250cm9sRXJyb3I7XHJcbiAgICAgICAgZXJyb3JzTWFwID0ge307XHJcbiAgICAgIH1cclxuICAgICAgLy8gZW4gY3VhbHF1aWVyIHZ1ZWx0YSBkZWwgYnVjbGUgYW55YWRpbW9zIGVsIGVycm9yIGFsIG1hcGEgZGUgZXJyb3Jlc1xyXG4gICAgICBlcnJvcnNNYXBbJ2Vycm9yX3ZhbGlkYWNpb25fJyArIGVyckNvdW50XSA9IHZhbHVlQ29udHJvbEVycm9yO1xyXG4gICAgICAvLyBzaSBlcyBsYSB1bHRpbWEgdnVlbHRhIGFueWFkaW1vcyBlbCB1bHRpbW8gbWFwYVxyXG4gICAgICBpZiAoZXJyQ291bnQgPT09IGVycm9ycy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgZm9ybS5jb250cm9sc1trZXlDb250cm9sQWN0aXZvXS5zZXRFcnJvcnMoZXJyb3JzTWFwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9yIGFsZ3VuIG1vdGl2byBsb3MgZm9ybUNvbnRyb2wgY29uIGVycm9yZXMgdGllbmVuIHN0YXR1cyB2YWxpZCBoYXN0YSBxdWUgc2UgcHJvZHVjZSB1biBldmVudG8gb25CbHVyXHJcbiAgICogcG9yIGxvIHF1ZSBzZSBkYSBlbCBjYXNvIGRlIGZvcm1Hcm91cCBpbnZhbGlkIHF1ZSBubyBtdWVzdHJhIGVycm9yZXMgaGFzdGEgcXVlIHNlIGludGVyYWN0dWEgY29uIGVsIGZvcm1Db250cm9sXHJcbiAgICpcclxuICAgKiBQYXNhbmRvIGVsIGZvcm1Hcm91cCBzZSBmdWVyemEgbGEgZXZhbHVhY2lvbiBkZSBkZSBsYSB2YWxpZGV6IGRlIGxvcyBjYW1wb3MgeSBhc2kgbW9zdHJhbW9zIGxvcyBlcnJvcmVzIGRlIGNsaWVudGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgcmVmcmVzaENsaWVudFZhbGlkYXRpb25zKGZvcm06IEZvcm1Hcm91cCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaChrZXlDb250cm9sID0+IHtcclxuICAgICAgLy8gTG9zIHNlbGVjdCBkZXBlbmRpZW50ZXMgZGFuIGVycm9yZXMgY29uIGVsIHJlZnJlc2NvIHBvcnF1ZSBkZXRlY3RhbiBjYW1iaW9zIGVuIGxvcyBwYWRyZXNcclxuICAgICAgLy8geSBlc28gaGFjZSBxdWUgbGltcGllIGRlIHZhbG9yIGxvcyBoaWpvcy4gUG9yIGxvIHF1ZSBzb2xvIHJlZnJlc2NhbW9zIGxvcyBjb250cm9sZXMgcXVlIGFuZ3VsYXIgZGlnYVxyXG4gICAgICAvLyBxdWUgY29udGllbmVuIGVycm9yZXMuXHJcbiAgICAgIGlmIChmb3JtLmNvbnRyb2xzW2tleUNvbnRyb2xdLnN0YXR1cyA9PSAnSU5WQUxJRCcpIHtcclxuICAgICAgICBmb3JtLmNvbnRyb2xzW2tleUNvbnRyb2xdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbWFya0FsbEFuZFJlZnJlc2goZm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhmb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleUNvbnRyb2wgPT4ge1xyXG4gICAgICBmb3JtLmNvbnRyb2xzW2tleUNvbnRyb2xdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH0pO1xyXG4gICAgLy8gVXRpbGl6YW1vcyBlbCByZWZyZXNjbyBudWVzdHJvIHBvcnF1ZSBxdWUgdGllbmUgZWwgY29udHJvbCBkZSBzdGF0dXMgcGFyYSBldml0YXIgZWwgYnVnIGRlIGxvc1xyXG4gICAgLy8gc2VsZWN0IGRlcGVuZGllbnRlcy5cclxuICAgIHRoaXMucmVmcmVzaENsaWVudFZhbGlkYXRpb25zKGZvcm0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2ltaWxhciBhIHJlZnJlc2hDbGllbnRWYWxpZGF0aW9ucywgcGVybyBwYXJhIGNhc29zIGVuIGxvcyBxdWUgZWwgZm9ybXVsYXJpbyBkaWNlIHF1ZSBlcyB2w6FsaWRvLlxyXG4gICAqIEVzdG8gc3VlbGUgc3VjZWNlciBjdWFuZG8gc2UgZ3VhcmRhIHNpbiB0b2NhciBuYWRhIG8gc2kgc2UgcXVpZXJlIG1vc3RyYXIgbGFzIHZhbGlkYWNpb25lcyBzZWfDum5cclxuICAgKiBzZSBjYXJnYSBsYSBwYW50YWxsYS5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZm9yY2VWYWxpZGF0aW9uKGZvcm1Hcm91cDogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcclxuICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcclxuICAgICAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbihjb250cm9sKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==