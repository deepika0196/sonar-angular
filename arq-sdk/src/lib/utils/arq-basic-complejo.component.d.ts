import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArqBasicComponent } from './arq-basic.component';
import { ArqPageableRequest, ArqPageableResponse } from '../interfaces/arq-basic.interface';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ArqBasicComplejoComponent extends ArqBasicComponent implements OnInit {
    private validations;
    protected prepareSchema(): void;
    fillFormAplanado(editForm: FormGroup, entity: any): FormGroup;
    fillEntityAplanado(editForm: FormGroup, listadosObjetos?: any): any;
    private fillEntityInterno;
    getObjectProperties(properties: any, data: any, validations?: any, controles?: any, parent?: string): any;
    private _fillForm;
    recuperarListados(data: any): any;
    private _recuperarListados;
    getSubFormularios(): {
        [key: string]: FormGroup;
    };
    private _getSubFormularios;
    UtilDatatableInMemory: () => {
        requireData: (request: ArqPageableRequest, arrayToPaginate: any[]) => Observable<ArqPageableResponse>;
        editRowInMemory: (row: any, arrayToEdit: any[]) => void;
        deleteRowInMemory: (row: any, arrayToEdit: any[]) => void;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqBasicComplejoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqBasicComplejoComponent, "arq-basic-componentt-form", never, {}, {}, never, never, false, never>;
}
