import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArqBasicComponent } from './arq-basic.component';
import { of, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export class ArqBasicComplejoComponent extends ArqBasicComponent {
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
                    arrayToEdit.push({ ...row, newRow: false, isCreate: false });
                }
                else {
                    const objIndex = arrayToEdit.findIndex(obj => obj.id == row.id);
                    arrayToEdit[objIndex] = { ...row, isEdit: false };
                }
            };
            const deleteRow = (row, arrayToDelete = []) => {
                arrayToDelete.splice(arrayToDelete.findIndex(obj => obj.id == row.id), 1);
            };
            return { editRowInMemory: editRow, requireData: requireDataInMemory, deleteRowInMemory: deleteRow };
        };
    }
    prepareSchema() {
        this.validations = this._schemaService._parseSchema(this.schema, this.addCustomValidationRules());
        let controles = this.getObjectProperties(this.schema.properties, this.entidad);
        this.formGroup = new FormGroup(controles);
        this.formGroup?.updateValueAndValidity();
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
                objetoRecompuesto = {
                    ...objetoRecompuesto,
                    [e]: {
                        ...this.fillEntityInterno(editForm, properties[e].properties, listadosObjetos, {}, concatenado)
                    }
                };
            }
            else if (properties[e].type === 'array') {
                if (listadosObjetos && listadosObjetos[e]) {
                    objetoRecompuesto = {
                        ...objetoRecompuesto,
                        [e]: listadosObjetos[e]
                    };
                }
                this.fillEntityInterno(editForm, properties[e].items.properties, listadosObjetos, objetoRecompuesto, concatenado);
            }
            else {
                Object.keys(editForm.getRawValue()).forEach(keyForm => {
                    if (concatenado === keyForm) {
                        objetoRecompuesto = { ...objetoRecompuesto, [e]: editForm.getRawValue()[keyForm] };
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
                controles = {
                    ...controles,
                    [concatenado]: new FormControl(data ? data[e] : undefined, validations[e] ? validations[e][1] : [])
                };
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
                        if (concatenado === keyForm) {
                            if (properties[e]?.$type == 'java.util.Date' && data && typeof data[e] == 'number') {
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
                    listadosObjeto = { ...listadosObjeto, [e]: data && data[e] ? [...data[e]] : [] };
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
                subformularios = { ...subformularios, [e]: new FormGroup(controles) };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWJhc2ljLWNvbXBsZWpvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi91dGlscy9hcnEtYmFzaWMtY29tcGxlam8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFNL0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUFpQjtJQUpoRTs7UUFvS1MsMEJBQXFCLEdBQUcsR0FJN0IsRUFBRTtZQUNGLE1BQU0sbUJBQW1CLEdBQUcsQ0FDMUIsT0FBMkIsRUFDM0Isa0JBQXlCLEVBQUUsRUFDTSxFQUFFO2dCQUNuQyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNqQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUM1QixJQUFJLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTs0QkFDbkIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUMvQyxNQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDM0MsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzFELE1B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LENBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ25HO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOztzSEE5SlUseUJBQXlCOzBHQUF6Qix5QkFBeUIsd0ZBRjFCLEVBQUU7MkZBRUQseUJBQXlCO2tCQUpyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXJxQmFzaWNDb21wb25lbnQgfSBmcm9tICcuL2FycS1iYXNpYy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnFQYWdlYWJsZVJlcXVlc3QsIEFycVBhZ2VhYmxlUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FycS1iYXNpYy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtYmFzaWMtY29tcG9uZW50dC1mb3JtJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUJhc2ljQ29tcGxlam9Db21wb25lbnQgZXh0ZW5kcyBBcnFCYXNpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0aW9uczogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcHJlcGFyZVNjaGVtYSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB0aGlzLl9zY2hlbWFTZXJ2aWNlLl9wYXJzZVNjaGVtYSh0aGlzLnNjaGVtYSwgdGhpcy5hZGRDdXN0b21WYWxpZGF0aW9uUnVsZXMoKSk7XHJcbiAgICBsZXQgY29udHJvbGVzID0gdGhpcy5nZXRPYmplY3RQcm9wZXJ0aWVzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMsIHRoaXMuZW50aWRhZCk7XHJcbiAgICB0aGlzLmZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoY29udHJvbGVzKTtcclxuICAgIHRoaXMuZm9ybUdyb3VwPy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB0aGlzLmluaWNpYWxpemFyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbEZvcm1BcGxhbmFkbyhlZGl0Rm9ybTogRm9ybUdyb3VwLCBlbnRpdHk6IGFueSk6IEZvcm1Hcm91cCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsbEZvcm0oZWRpdEZvcm0sIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMsIGVudGl0eSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbEVudGl0eUFwbGFuYWRvKGVkaXRGb3JtOiBGb3JtR3JvdXAsIGxpc3RhZG9zT2JqZXRvcz86IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWxsRW50aXR5SW50ZXJubyhlZGl0Rm9ybSwgdGhpcy5zY2hlbWEucHJvcGVydGllcywgbGlzdGFkb3NPYmpldG9zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbEVudGl0eUludGVybm8oXHJcbiAgICBlZGl0Rm9ybTogRm9ybUdyb3VwLFxyXG4gICAgcHJvcGVydGllczogYW55ID0gdGhpcy5zY2hlbWEucHJvcGVydGllcyxcclxuICAgIGxpc3RhZG9zT2JqZXRvcz86IGFueSxcclxuICAgIG9iamV0b1JlY29tcHVlc3RvOiBhbnkgPSB7fSxcclxuICAgIHBhcmVudD86IHN0cmluZ1xyXG4gICk6IGFueSB7XHJcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBjb25zdCBjb25jYXRlbmFkbyA9IHBhcmVudCA/IHBhcmVudC5jb25jYXQoJy4nKS5jb25jYXQoZSkgOiBlO1xyXG4gICAgICBpZiAocHJvcGVydGllc1tlXS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG9iamV0b1JlY29tcHVlc3RvID0ge1xyXG4gICAgICAgICAgLi4ub2JqZXRvUmVjb21wdWVzdG8sXHJcbiAgICAgICAgICBbZV06IHtcclxuICAgICAgICAgICAgLi4udGhpcy5maWxsRW50aXR5SW50ZXJubyhlZGl0Rm9ybSwgcHJvcGVydGllc1tlXS5wcm9wZXJ0aWVzLCBsaXN0YWRvc09iamV0b3MsIHt9LCBjb25jYXRlbmFkbylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNbZV0udHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICAgIGlmIChsaXN0YWRvc09iamV0b3MgJiYgbGlzdGFkb3NPYmpldG9zW2VdKSB7XHJcbiAgICAgICAgICBvYmpldG9SZWNvbXB1ZXN0byA9IHtcclxuICAgICAgICAgICAgLi4ub2JqZXRvUmVjb21wdWVzdG8sXHJcbiAgICAgICAgICAgIFtlXTogbGlzdGFkb3NPYmpldG9zW2VdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGxFbnRpdHlJbnRlcm5vKFxyXG4gICAgICAgICAgZWRpdEZvcm0sXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzW2VdLml0ZW1zLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBsaXN0YWRvc09iamV0b3MsXHJcbiAgICAgICAgICBvYmpldG9SZWNvbXB1ZXN0byxcclxuICAgICAgICAgIGNvbmNhdGVuYWRvXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhlZGl0Rm9ybS5nZXRSYXdWYWx1ZSgpKS5mb3JFYWNoKGtleUZvcm0gPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbmNhdGVuYWRvID09PSBrZXlGb3JtKSB7XHJcbiAgICAgICAgICAgIG9iamV0b1JlY29tcHVlc3RvID0geyAuLi5vYmpldG9SZWNvbXB1ZXN0bywgW2VdOiBlZGl0Rm9ybS5nZXRSYXdWYWx1ZSgpW2tleUZvcm1dIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iamV0b1JlY29tcHVlc3RvO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9iamVjdFByb3BlcnRpZXMoXHJcbiAgICBwcm9wZXJ0aWVzOiBhbnksXHJcbiAgICBkYXRhOiBhbnksXHJcbiAgICB2YWxpZGF0aW9uczogYW55ID0gdGhpcy52YWxpZGF0aW9ucyxcclxuICAgIGNvbnRyb2xlczogYW55ID0ge30sXHJcbiAgICBwYXJlbnQ/OiBzdHJpbmdcclxuICApOiBhbnkge1xyXG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmNhdGVuYWRvID0gcGFyZW50ID8gcGFyZW50LmNvbmNhdCgnLicpLmNvbmNhdChlKSA6IGU7XHJcbiAgICAgIGlmIChwcm9wZXJ0aWVzW2VdLnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29udHJvbGVzID0gdGhpcy5nZXRPYmplY3RQcm9wZXJ0aWVzKFxyXG4gICAgICAgICAgcHJvcGVydGllc1tlXS5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgZGF0YSA/IGRhdGFbZV0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB2YWxpZGF0aW9uc1tlXSxcclxuICAgICAgICAgIGNvbnRyb2xlcyxcclxuICAgICAgICAgIGNvbmNhdGVuYWRvXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2VdLnR5cGUgIT09ICdhcnJheScpIHtcclxuICAgICAgICBjb250cm9sZXMgPSB7XHJcbiAgICAgICAgICAuLi5jb250cm9sZXMsXHJcbiAgICAgICAgICBbY29uY2F0ZW5hZG9dOiBuZXcgRm9ybUNvbnRyb2woZGF0YSA/IGRhdGFbZV0gOiB1bmRlZmluZWQsIHZhbGlkYXRpb25zW2VdID8gdmFsaWRhdGlvbnNbZV1bMV0gOiBbXSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb250cm9sZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWxsRm9ybShlZGl0Rm9ybTogRm9ybUdyb3VwLCBwcm9wZXJ0aWVzOiBhbnksIGRhdGE6IGFueSwgcGFyZW50Pzogc3RyaW5nKTogYW55IHtcclxuICAgIHByb3BlcnRpZXMgJiZcclxuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uY2F0ZW5hZG8gPSBwYXJlbnQgPyBwYXJlbnQuY29uY2F0KCcuJykuY29uY2F0KGUpIDogZTtcclxuICAgICAgICBpZiAocHJvcGVydGllc1tlXS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgZGF0YSAmJiB0aGlzLl9maWxsRm9ybShlZGl0Rm9ybSwgcHJvcGVydGllc1tlXS5wcm9wZXJ0aWVzLCBkYXRhW2VdLCBjb25jYXRlbmFkbyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2VdLnR5cGUgIT09ICdhcnJheScpIHtcclxuICAgICAgICAgIE9iamVjdC5rZXlzKGVkaXRGb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleUZvcm0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29uY2F0ZW5hZG8gPT09IGtleUZvcm0pIHtcclxuICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1tlXT8uJHR5cGUgPT0gJ2phdmEudXRpbC5EYXRlJyAmJiBkYXRhICYmIHR5cGVvZiBkYXRhW2VdID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5jb250cm9sc1trZXlGb3JtXS5zZXRWYWx1ZShuZXcgRGF0ZShkYXRhW2VdKSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNvbnRyb2xzW2tleUZvcm1dLnNldFZhbHVlKGRhdGEgJiYgZGF0YVtlXSA/IGRhdGFbZV0gOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBlZGl0Rm9ybTtcclxuICB9XHJcbiAgcHVibGljIHJlY3VwZXJhckxpc3RhZG9zKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVjdXBlcmFyTGlzdGFkb3ModGhpcy5zY2hlbWEucHJvcGVydGllcywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZWN1cGVyYXJMaXN0YWRvcyhcclxuICAgIHByb3BlcnRpZXM6IGFueSxcclxuICAgIGRhdGE6IGFueSxcclxuICAgIGxpc3RhZG9zT2JqZXRvOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PGFueT4gfSA9IHt9LFxyXG4gICAgcGFyZW50Pzogc3RyaW5nXHJcbiAgKTogeyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0ge1xyXG4gICAgcHJvcGVydGllcyAmJlxyXG4gICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBjb25jYXRlbmFkbyA9IHBhcmVudCA/IHBhcmVudC5jb25jYXQoJy4nKS5jb25jYXQoZSkgOiBlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzW2VdLnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBkYXRhICYmIHRoaXMuX3JlY3VwZXJhckxpc3RhZG9zKHByb3BlcnRpZXNbZV0ucHJvcGVydGllcywgZGF0YVtlXSwgbGlzdGFkb3NPYmpldG8sIGNvbmNhdGVuYWRvKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNbZV0udHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICAgICAgbGlzdGFkb3NPYmpldG8gPSB7IC4uLmxpc3RhZG9zT2JqZXRvLCBbZV06IGRhdGEgJiYgZGF0YVtlXSA/IFsuLi5kYXRhW2VdXSA6IFtdIH07XHJcbiAgICAgICAgICB0aGlzLl9yZWN1cGVyYXJMaXN0YWRvcyhcclxuICAgICAgICAgICAgcHJvcGVydGllc1tlXS5pdGVtcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBkYXRhID8gZGF0YVtlXSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbGlzdGFkb3NPYmpldG8sXHJcbiAgICAgICAgICAgIGNvbmNhdGVuYWRvXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdGFkb3NPYmpldG87XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTdWJGb3JtdWxhcmlvcygpOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Hcm91cCB9IHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRTdWJGb3JtdWxhcmlvcyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLCB0aGlzLnZhbGlkYXRpb25zKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZ2V0U3ViRm9ybXVsYXJpb3MoXHJcbiAgICBwcm9wZXJ0aWVzOiBhbnksXHJcbiAgICB2YWxpZGF0aW9uczogYW55ID0gdGhpcy52YWxpZGF0aW9ucyxcclxuICAgIHN1YmZvcm11bGFyaW9zOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Hcm91cCB9ID0ge30sXHJcbiAgICBwYXJlbnQ/OiBzdHJpbmdcclxuICApOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Hcm91cCB9IHtcclxuICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjb25jYXRlbmFkbyA9IHBhcmVudCA/IHBhcmVudC5jb25jYXQoJy4nKS5jb25jYXQoZSkgOiBlO1xyXG4gICAgICBpZiAocHJvcGVydGllc1tlXS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHN1YmZvcm11bGFyaW9zID0gdGhpcy5fZ2V0U3ViRm9ybXVsYXJpb3MocHJvcGVydGllc1tlXS5wcm9wZXJ0aWVzLCB2YWxpZGF0aW9uc1tlXSwgc3ViZm9ybXVsYXJpb3MsIGNvbmNhdGVuYWRvKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2VdLnR5cGUgPT09ICdhcnJheScpIHtcclxuICAgICAgICBsZXQgY29udHJvbGVzID0gdGhpcy5nZXRPYmplY3RQcm9wZXJ0aWVzKFxyXG4gICAgICAgICAgcHJvcGVydGllc1tlXS5pdGVtcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbnNbZV0gPyB2YWxpZGF0aW9uc1tlXVswXSA6IFtdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdWJmb3JtdWxhcmlvcyA9IHsgLi4uc3ViZm9ybXVsYXJpb3MsIFtlXTogbmV3IEZvcm1Hcm91cChjb250cm9sZXMpIH07XHJcbiAgICAgICAgdGhpcy5fZ2V0U3ViRm9ybXVsYXJpb3MocHJvcGVydGllc1tlXS5pdGVtcy5wcm9wZXJ0aWVzLCB2YWxpZGF0aW9ucywgc3ViZm9ybXVsYXJpb3MsIGNvbmNhdGVuYWRvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3ViZm9ybXVsYXJpb3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgVXRpbERhdGF0YWJsZUluTWVtb3J5ID0gKCk6IHtcclxuICAgIHJlcXVpcmVEYXRhOiAocmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0LCBhcnJheVRvUGFnaW5hdGU6IGFueVtdKSA9PiBPYnNlcnZhYmxlPEFycVBhZ2VhYmxlUmVzcG9uc2U+O1xyXG4gICAgZWRpdFJvd0luTWVtb3J5OiAocm93OiBhbnksIGFycmF5VG9FZGl0OiBhbnlbXSkgPT4gdm9pZDtcclxuICAgIGRlbGV0ZVJvd0luTWVtb3J5OiAocm93OiBhbnksIGFycmF5VG9FZGl0OiBhbnlbXSkgPT4gdm9pZDtcclxuICB9ID0+IHtcclxuICAgIGNvbnN0IHJlcXVpcmVEYXRhSW5NZW1vcnkgPSAoXHJcbiAgICAgIHJlcXVlc3Q6IEFycVBhZ2VhYmxlUmVxdWVzdCxcclxuICAgICAgYXJyYXlUb1BhZ2luYXRlOiBhbnlbXSA9IFtdXHJcbiAgICApOiBPYnNlcnZhYmxlPEFycVBhZ2VhYmxlUmVzcG9uc2U+ID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICAgIG9mKGFycmF5VG9QYWdpbmF0ZSkuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSByZXF1ZXN0LnBhZ2UgKiByZXF1ZXN0LnNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHJlcXVlc3Quc2l6ZTtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGVkQXJyYXkgPSB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodmFsdWUubGVuZ3RoIC8gcmVxdWVzdC5zaXplKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxFbGVtZW50cyA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtZW50cyA9IHBhZ2luYXRlZEFycmF5Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRPYmplY3Q6IEFycVBhZ2VhYmxlUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogcGFnaW5hdGVkQXJyYXksXHJcbiAgICAgICAgICAgICAgcGFnZWFibGU6IHtcclxuICAgICAgICAgICAgICAgIHNvcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgc29ydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgdW5zb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGVtcHR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogcmVxdWVzdC5wYWdlLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHJlcXVlc3Quc2l6ZSxcclxuICAgICAgICAgICAgICAgIHVucGFnZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFnZWQ6IHRydWVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGxhc3Q6IHJlcXVlc3QucGFnZSA9PT0gdG90YWxQYWdlcyxcclxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgICAgIHRvdGFsRWxlbWVudHM6IHRvdGFsRWxlbWVudHMsXHJcbiAgICAgICAgICAgICAgc2l6ZTogcmVxdWVzdC5zaXplLFxyXG4gICAgICAgICAgICAgIG51bWJlcjogcmVxdWVzdC5wYWdlIC0gMSxcclxuICAgICAgICAgICAgICBzb3J0OiB7XHJcbiAgICAgICAgICAgICAgICBzb3J0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdW5zb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmlyc3Q6IHJlcXVlc3QucGFnZSA9PT0gMSxcclxuICAgICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzOiBudW1iZXJPZkVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgIGVtcHR5OiBudW1iZXJPZkVsZW1lbnRzID09PSAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0cmFuc2Zvcm1lZE9iamVjdCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRSb3cgPSAocm93OiBhbnksIGFycmF5VG9FZGl0OiBhbnlbXSA9IFtdKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmIChyb3cubmV3Um93KSB7XHJcbiAgICAgICAgYXJyYXlUb0VkaXQucHVzaCh7IC4uLnJvdywgbmV3Um93OiBmYWxzZSwgaXNDcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9iakluZGV4ID0gYXJyYXlUb0VkaXQuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT0gcm93LmlkKTtcclxuICAgICAgICBhcnJheVRvRWRpdFtvYmpJbmRleF0gPSB7IC4uLnJvdywgaXNFZGl0OiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGVsZXRlUm93ID0gKHJvdzogYW55LCBhcnJheVRvRGVsZXRlOiBhbnlbXSA9IFtdKTogdm9pZCA9PiB7XHJcbiAgICAgIGFycmF5VG9EZWxldGUuc3BsaWNlKFxyXG4gICAgICAgIGFycmF5VG9EZWxldGUuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT0gcm93LmlkKSxcclxuICAgICAgICAxXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgZWRpdFJvd0luTWVtb3J5OiBlZGl0Um93LCByZXF1aXJlRGF0YTogcmVxdWlyZURhdGFJbk1lbW9yeSwgZGVsZXRlUm93SW5NZW1vcnk6IGRlbGV0ZVJvdyB9O1xyXG4gIH07XHJcbn1cclxuIl19