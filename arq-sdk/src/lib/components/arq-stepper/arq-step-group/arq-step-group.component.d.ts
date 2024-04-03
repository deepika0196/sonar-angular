import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { EventEmitter, QueryList } from '@angular/core';
import { ArqGenericInputComponent } from '../../../../core/arq-generic-input/arq-generic-input.component';
import { ArqStepItemComponent } from '../arq-step-item/arq-step-item.component';
import * as i0 from "@angular/core";
export declare class ArqStepGroupComponent extends ArqGenericInputComponent {
    duration: string;
    linear: boolean;
    orientation: StepperOrientation;
    isEditable: boolean;
    position: 'top' | 'bottom';
    labelPosition: 'bottom' | 'end';
    isOptional: boolean;
    emitValue: EventEmitter<any>;
    private contentItems?;
    appItems?: QueryList<ArqStepItemComponent>;
    ngAfterContentInit(): void;
    selectionChange(evt: StepperSelectionEvent): void;
    next(control: any): void;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqStepGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqStepGroupComponent, "arq-step-group", never, { "duration": "duration"; "linear": "linear"; "orientation": "orientation"; "isEditable": "isEditable"; "position": "position"; "labelPosition": "labelPosition"; "isOptional": "isOptional"; }, { "emitValue": "emitValue"; }, ["contentItems"], never, false, never>;
}
