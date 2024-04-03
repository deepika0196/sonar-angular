import { TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArqStepItemLabelComponent } from '../arq-step-item-label/arq-step-item-label.component';
import * as i0 from "@angular/core";
export declare class ArqStepItemComponent {
    contentTemplate: TemplateRef<any>;
    itemLabel: ArqStepItemLabelComponent;
    title: string;
    btnNext: boolean;
    btnBack: boolean;
    control: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqStepItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqStepItemComponent, "arq-step-item", never, { "title": "title"; "btnNext": "btnNext"; "btnBack": "btnBack"; "control": "control"; }, {}, ["itemLabel"], ["arq-step-item-content"], false, never>;
}
