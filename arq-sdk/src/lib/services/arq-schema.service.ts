import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { customValidators } from './validator';

@Injectable()
export class ArqSchemaService {
  public constructor() {}

  /**
   * Generate Form Group with schema validations.
   */
  public _parseSchema(schemaObject: any, customValidations: any): any {
    const bindigProperties: any = {};
    if (schemaObject) {
      const propNames = Object.getOwnPropertyNames(schemaObject?.properties);
      for (let i = 0; i < propNames.length; i++) {
        if ('$ref' in schemaObject.properties[propNames[i]]) {
          //Buscamos la referencia
          /*bindigProperties[propNames[i]] = [
              this._parseSchema(this.findRef(schemaObject, propNames[i]), customValidations)
            ];*/
          continue;
        }

        if (
          schemaObject.properties[propNames[i]].type === 'array' &&
          !('$ref' in schemaObject.properties[propNames[i]].items)
        ) {
          if (schemaObject.properties[propNames[i]].items?.properties) {
            bindigProperties[propNames[i]] = [
              this._parseSchema(schemaObject.properties[propNames[i]].items, customValidations)
            ];
          } else {
            bindigProperties[propNames[i]] = [this._createValidation(propNames[i], [], schemaObject, [])];
          }
          continue;
        }

        if (
          schemaObject.properties[propNames[i]].type !== 'object' ||
          this._isListAngularDto(schemaObject.properties[propNames[i]])
        ) {
          let AddValidations: any = null;
          if (customValidations && customValidations.hasOwnProperty(propNames[i])) {
            AddValidations = customValidations[propNames[i]];
          }
          bindigProperties[propNames[i]] = this._createValidation(
            propNames[i],
            schemaObject.properties[propNames[i]],
            schemaObject,
            AddValidations
          );
          continue;
        }
        bindigProperties[propNames[i]] = this._collect(
          this._parseSchema(schemaObject.properties[propNames[i]], customValidations)
        );
      }
    }

    return bindigProperties;
  }

  _isListAngularDto(property: any): boolean {
    return (
      property.type === 'object' &&
      property.properties.hasOwnProperty('value') &&
      property.properties.hasOwnProperty('description') &&
      property.properties.hasOwnProperty('descriptionV')
    );
  }

  private _collect(bindingPropertires?: any, schemaObject?: any): any {
    const ret: any = {};
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

  private _createValidation(property: any, properties: any, schema: any, customValidations: Array<any>): Array<any> {
    let validationRules: Array<any> = [];

    if (customValidations) {
      validationRules = customValidations;
    }
    if (this._isPropertyRequired(schema, property) || properties['required']) {
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
      validationRules.push((control: FormControl) => {
        return control.disable();
      });
    }

    if (properties['format']) {
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
  private _isPropertyRequired(schema: any, property: any): boolean {
    return schema.required && schema.required.indexOf(property) !== -1;
  }

  public fillModelWithDefaultValues(model: any, schema: any): any {
    if (schema) {
      model = Object.assign(model, schema.value);
    } else {
      console.log("Sin valor 'empty'");
    }
  }

  // private findRef(schemaObject:any, propiedad: string): string {
  //   let def = propiedad.split('/');
  //   console.log(def)
  //   console.log(schemaObject.$defs)
  //   console.log(def[def.length - 1])
  //   console.log(schemaObject.$defs[def[def.length - 1]])
  //   console.log(schemaObject.$defs[def[def.length - 1]])

  //   return "vaya xD";
  // }
}

/*{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$defs": {
        "Date": {
            "type": "object"
        }
    },
    "type": "es.gva.core.data.industria.common.EmpresaInstaladoraActividadDTO",
    "properties": {
        "aeiEeiEaMaquina": {
            "type": "string"
        },
        "fechaAlta": {
            "$ref": "#/$defs/Date"
        },
        "fechaAltaSistema": {
            "$ref": "#/$defs/Date"
        },
        "fechaBaja": {
            "$ref": "#/$defs/Date"
        },
        "fechaCaducidad": {
            "$ref": "#/$defs/Date"
        },
        "fechaUltimaRenov": {
            "$ref": "#/$defs/Date"
        },
        "fechafinSusp": {
            "$ref": "#/$defs/Date"
        },
        "id": {
            "type": "object",
            "properties": {
                "codigo": {
                    "type": "string"
                },
                "maquina": {
                    "type": "string"
                },
                "numeroInterno": {
                    "type": "integer"
                }
            }
        },
    },
  "empty": "es.gva.core.data.industria.common.EmpresaInstaladoraActividadDTO@6471d2f3"
}*/
