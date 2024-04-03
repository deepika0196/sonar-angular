import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { customValidators } from './validator';
import * as i0 from "@angular/core";
export class ArqSchemaService {
    constructor() { }
    /**
     * Generate Form Group with schema validations.
     */
    _parseSchema(schemaObject, customValidations) {
        const bindigProperties = {};
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
                if (schemaObject.properties[propNames[i]].type === 'array' &&
                    !('$ref' in schemaObject.properties[propNames[i]].items)) {
                    if (schemaObject.properties[propNames[i]].items?.properties) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNjaGVtYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL3NlcnZpY2VzL2FycS1zY2hlbWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUcvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLGdCQUFzQixDQUFDO0lBRXZCOztPQUVHO0lBQ0ksWUFBWSxDQUFDLFlBQWlCLEVBQUUsaUJBQXNCO1FBQzNELE1BQU0sZ0JBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksTUFBTSxJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25ELHdCQUF3QjtvQkFDeEI7OzBCQUVNO29CQUNOLFNBQVM7aUJBQ1Y7Z0JBRUQsSUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPO29CQUN0RCxDQUFDLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ3hEO29CQUNBLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFT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QUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkg7UUFFRCxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM1QixlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsT0FBTyxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssbUJBQW1CLENBQUMsTUFBVyxFQUFFLFFBQWE7UUFDcEQsT0FBTyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSwwQkFBMEIsQ0FBQyxLQUFVLEVBQUUsTUFBVztRQUN2RCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7OzZHQWpLVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgY3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFycVNjaGVtYVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIEZvcm0gR3JvdXAgd2l0aCBzY2hlbWEgdmFsaWRhdGlvbnMuXHJcbiAgICovXHJcbiAgcHVibGljIF9wYXJzZVNjaGVtYShzY2hlbWFPYmplY3Q6IGFueSwgY3VzdG9tVmFsaWRhdGlvbnM6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBiaW5kaWdQcm9wZXJ0aWVzOiBhbnkgPSB7fTtcclxuICAgIGlmIChzY2hlbWFPYmplY3QpIHtcclxuICAgICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2NoZW1hT2JqZWN0Py5wcm9wZXJ0aWVzKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoJyRyZWYnIGluIHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0pIHtcclxuICAgICAgICAgIC8vQnVzY2Ftb3MgbGEgcmVmZXJlbmNpYVxyXG4gICAgICAgICAgLypiaW5kaWdQcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0gPSBbXHJcbiAgICAgICAgICAgICAgdGhpcy5fcGFyc2VTY2hlbWEodGhpcy5maW5kUmVmKHNjaGVtYU9iamVjdCwgcHJvcE5hbWVzW2ldKSwgY3VzdG9tVmFsaWRhdGlvbnMpXHJcbiAgICAgICAgICAgIF07Ki9cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2NoZW1hT2JqZWN0LnByb3BlcnRpZXNbcHJvcE5hbWVzW2ldXS50eXBlID09PSAnYXJyYXknICYmXHJcbiAgICAgICAgICAhKCckcmVmJyBpbiBzY2hlbWFPYmplY3QucHJvcGVydGllc1twcm9wTmFtZXNbaV1dLml0ZW1zKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0uaXRlbXM/LnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgYmluZGlnUHJvcGVydGllc1twcm9wTmFtZXNbaV1dID0gW1xyXG4gICAgICAgICAgICAgIHRoaXMuX3BhcnNlU2NoZW1hKHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0uaXRlbXMsIGN1c3RvbVZhbGlkYXRpb25zKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmluZGlnUHJvcGVydGllc1twcm9wTmFtZXNbaV1dID0gW3RoaXMuX2NyZWF0ZVZhbGlkYXRpb24ocHJvcE5hbWVzW2ldLCBbXSwgc2NoZW1hT2JqZWN0LCBbXSldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzY2hlbWFPYmplY3QucHJvcGVydGllc1twcm9wTmFtZXNbaV1dLnR5cGUgIT09ICdvYmplY3QnIHx8XHJcbiAgICAgICAgICB0aGlzLl9pc0xpc3RBbmd1bGFyRHRvKHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBsZXQgQWRkVmFsaWRhdGlvbnM6IGFueSA9IG51bGw7XHJcbiAgICAgICAgICBpZiAoY3VzdG9tVmFsaWRhdGlvbnMgJiYgY3VzdG9tVmFsaWRhdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcE5hbWVzW2ldKSkge1xyXG4gICAgICAgICAgICBBZGRWYWxpZGF0aW9ucyA9IGN1c3RvbVZhbGlkYXRpb25zW3Byb3BOYW1lc1tpXV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBiaW5kaWdQcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0gPSB0aGlzLl9jcmVhdGVWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBwcm9wTmFtZXNbaV0sXHJcbiAgICAgICAgICAgIHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0sXHJcbiAgICAgICAgICAgIHNjaGVtYU9iamVjdCxcclxuICAgICAgICAgICAgQWRkVmFsaWRhdGlvbnNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmluZGlnUHJvcGVydGllc1twcm9wTmFtZXNbaV1dID0gdGhpcy5fY29sbGVjdChcclxuICAgICAgICAgIHRoaXMuX3BhcnNlU2NoZW1hKHNjaGVtYU9iamVjdC5wcm9wZXJ0aWVzW3Byb3BOYW1lc1tpXV0sIGN1c3RvbVZhbGlkYXRpb25zKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmluZGlnUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIF9pc0xpc3RBbmd1bGFyRHRvKHByb3BlcnR5OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BlcnR5LnR5cGUgPT09ICdvYmplY3QnICYmXHJcbiAgICAgIHByb3BlcnR5LnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiZcclxuICAgICAgcHJvcGVydHkucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nKSAmJlxyXG4gICAgICBwcm9wZXJ0eS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvblYnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbGxlY3QoYmluZGluZ1Byb3BlcnRpcmVzPzogYW55LCBzY2hlbWFPYmplY3Q/OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcCBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICByZXRbcF0gPSBhcmd1bWVudHNbaV1bcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdGlvbihwcm9wZXJ0eTogYW55LCBwcm9wZXJ0aWVzOiBhbnksIHNjaGVtYTogYW55LCBjdXN0b21WYWxpZGF0aW9uczogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xyXG4gICAgbGV0IHZhbGlkYXRpb25SdWxlczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGlmIChjdXN0b21WYWxpZGF0aW9ucykge1xyXG4gICAgICB2YWxpZGF0aW9uUnVsZXMgPSBjdXN0b21WYWxpZGF0aW9ucztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc1Byb3BlcnR5UmVxdWlyZWQoc2NoZW1hLCBwcm9wZXJ0eSkpIHtcclxuICAgICAgdmFsaWRhdGlvblJ1bGVzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcGVydGllc1snbWluTGVuZ3RoJ10gIT0gbnVsbCkge1xyXG4gICAgICB2YWxpZGF0aW9uUnVsZXMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChwcm9wZXJ0aWVzWydtaW5MZW5ndGgnXSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ21heExlbmd0aCddKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHByb3BlcnRpZXNbJ21heExlbmd0aCddKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcGVydGllc1snbWF4aW11bSddKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKFZhbGlkYXRvcnMubWF4KHByb3BlcnRpZXNbJ21heGltdW0nXSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ21pbmltdW0nXSAhPSBudWxsKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKFZhbGlkYXRvcnMubWluKHByb3BlcnRpZXNbJ21pbmltdW0nXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzWydyZWFkT25seSddKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKChjb250cm9sOiBGb3JtQ29udHJvbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ2Zvcm1hdCddKSB7XHJcbiAgICAgIGlmIChwcm9wZXJ0aWVzWydmb3JtYXQnXSA9PT0gJ2VtYWlsJykge1xyXG4gICAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKFZhbGlkYXRvcnMucGF0dGVybigvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw2fSQvaSkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRPRE86IGFkZCBkYXRlIHZhbGlkYXRpb25cclxuICAgICAgLy8gdmFsaWRhdGlvblJ1bGVzLnB1c2goVmFsaWRhdG9ycy5taW4ocHJvcGVydGllc1tcIm1pbmltdW1zXCJdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ3BhdHRlcm4nXSkge1xyXG4gICAgICB2YWxpZGF0aW9uUnVsZXMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4ocHJvcGVydGllc1sncGF0dGVybiddKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ21pbkl0ZW1zJ10pIHtcclxuICAgICAgdmFsaWRhdGlvblJ1bGVzLnB1c2goY3VzdG9tVmFsaWRhdG9ycy5hcnJheU1pbkl0ZW1zKHByb3BlcnRpZXNbJ21pbkl0ZW1zJ10sIHByb3BlcnRpZXNbJ3R5cGUnXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzWydtYXhJdGVtcyddKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKGN1c3RvbVZhbGlkYXRvcnMuYXJyYXlNYXhJdGVtcyhwcm9wZXJ0aWVzWydtYXhJdGVtcyddLCBwcm9wZXJ0aWVzWyd0eXBlJ10pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcGVydGllc1sndW5pcXVlSXRlbXMnXSkge1xyXG4gICAgICB2YWxpZGF0aW9uUnVsZXMucHVzaChjdXN0b21WYWxpZGF0b3JzLmFycmF5VW5pcXVlSXRlbXMocHJvcGVydGllc1sndW5pcXVlSXRlbXMnXSwgcHJvcGVydGllc1sndHlwZSddKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXNbJ2V4Y2x1c2l2ZU1heGltdW0nXSkge1xyXG4gICAgICB2YWxpZGF0aW9uUnVsZXMucHVzaChjdXN0b21WYWxpZGF0b3JzLm51bWJlckV4Y2x1c2l2ZU1heGltdW0ocHJvcGVydGllc1snZXhjbHVzaXZlTWF4aW11bSddLCBwcm9wZXJ0aWVzWyd0eXBlJ10pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcGVydGllc1snZXhjbHVzaXZlTWluaW11bSddKSB7XHJcbiAgICAgIHZhbGlkYXRpb25SdWxlcy5wdXNoKGN1c3RvbVZhbGlkYXRvcnMubnVtYmVyRXhjbHVzaXZlTWluaW11bShwcm9wZXJ0aWVzWydleGNsdXNpdmVNaW5pbXVtJ10sIHByb3BlcnRpZXNbJ3R5cGUnXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzWydtdWx0aXBsZU9mJ10pIHtcclxuICAgICAgdmFsaWRhdGlvblJ1bGVzLnB1c2goY3VzdG9tVmFsaWRhdG9ycy5udW1iZXJNdWx0aXBsZU9mKHByb3BlcnRpZXNbJ211bHRpcGxlT2YnXSwgcHJvcGVydGllc1sndHlwZSddKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsnJywgdmFsaWRhdGlvblJ1bGVzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzY2hlbWFcclxuICAgKiBAcGFyYW0gcHJvcGVydHlcclxuICAgKi9cclxuICBwcml2YXRlIF9pc1Byb3BlcnR5UmVxdWlyZWQoc2NoZW1hOiBhbnksIHByb3BlcnR5OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzY2hlbWEucmVxdWlyZWQgJiYgc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YocHJvcGVydHkpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsTW9kZWxXaXRoRGVmYXVsdFZhbHVlcyhtb2RlbDogYW55LCBzY2hlbWE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoc2NoZW1hKSB7XHJcbiAgICAgIG1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgc2NoZW1hLnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2luIHZhbG9yICdlbXB0eSdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGZpbmRSZWYoc2NoZW1hT2JqZWN0OmFueSwgcHJvcGllZGFkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vICAgbGV0IGRlZiA9IHByb3BpZWRhZC5zcGxpdCgnLycpO1xyXG4gIC8vICAgY29uc29sZS5sb2coZGVmKVxyXG4gIC8vICAgY29uc29sZS5sb2coc2NoZW1hT2JqZWN0LiRkZWZzKVxyXG4gIC8vICAgY29uc29sZS5sb2coZGVmW2RlZi5sZW5ndGggLSAxXSlcclxuICAvLyAgIGNvbnNvbGUubG9nKHNjaGVtYU9iamVjdC4kZGVmc1tkZWZbZGVmLmxlbmd0aCAtIDFdXSlcclxuICAvLyAgIGNvbnNvbGUubG9nKHNjaGVtYU9iamVjdC4kZGVmc1tkZWZbZGVmLmxlbmd0aCAtIDFdXSlcclxuXHJcbiAgLy8gICByZXR1cm4gXCJ2YXlhIHhEXCI7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4vKntcclxuICAgIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hXCIsXHJcbiAgICBcIiRkZWZzXCI6IHtcclxuICAgICAgICBcIkRhdGVcIjoge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInR5cGVcIjogXCJlcy5ndmEuY29yZS5kYXRhLmluZHVzdHJpYS5jb21tb24uRW1wcmVzYUluc3RhbGFkb3JhQWN0aXZpZGFkRFRPXCIsXHJcbiAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgIFwiYWVpRWVpRWFNYXF1aW5hXCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmVjaGFBbHRhXCI6IHtcclxuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy8kZGVmcy9EYXRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmVjaGFBbHRhU2lzdGVtYVwiOiB7XHJcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvJGRlZnMvRGF0ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZlY2hhQmFqYVwiOiB7XHJcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvJGRlZnMvRGF0ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZlY2hhQ2FkdWNpZGFkXCI6IHtcclxuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy8kZGVmcy9EYXRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmVjaGFVbHRpbWFSZW5vdlwiOiB7XHJcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvJGRlZnMvRGF0ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZlY2hhZmluU3VzcFwiOiB7XHJcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvJGRlZnMvRGF0ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlkXCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvZGlnb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIm1hcXVpbmFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJudW1lcm9JbnRlcm5vXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gIFwiZW1wdHlcIjogXCJlcy5ndmEuY29yZS5kYXRhLmluZHVzdHJpYS5jb21tb24uRW1wcmVzYUluc3RhbGFkb3JhQWN0aXZpZGFkRFRPQDY0NzFkMmYzXCJcclxufSovXHJcbiJdfQ==