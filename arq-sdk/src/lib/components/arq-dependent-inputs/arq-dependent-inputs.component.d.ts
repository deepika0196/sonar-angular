import { OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArqBasicComponent } from '../../utils/arq-basic.component';
import { ArqSchemaService } from '../../services/arq-schema.service';
import { Subject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ArqDependentInputsComponent extends ArqBasicComponent implements OnInit, OnDestroy {
    _schemaService: ArqSchemaService;
    inputs: any;
    _form: FormGroup;
    sizeInput: string;
    loadedEvent?: Subject<void>;
    inputSelect: any;
    constructor(_schemaService: ArqSchemaService);
    subscriptions: Subscription[];
    ngOnInit(): void;
    private prepareNextComponentOptions;
    ngChanges(value: any, item: any): void;
    getPreviousValues(id: string): any;
    setInputs(item: any, enable?: boolean): void;
    evtKeyPress(evt: any, item: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDependentInputsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDependentInputsComponent, "arq-dependent-inputs", never, { "inputs": "inputs"; "_form": "form"; "sizeInput": "sizeInput"; "loadedEvent": "loadedEvent"; }, {}, never, never, false, never>;
}
