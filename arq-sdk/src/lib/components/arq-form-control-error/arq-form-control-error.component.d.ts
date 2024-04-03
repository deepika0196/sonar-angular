import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import * as i0 from "@angular/core";
export declare const errorMapMessagesDefault: Map<string, string>;
export declare class ArqFormControlErrorComponent implements AfterViewInit {
    private _translocoService;
    labelControl: string | undefined;
    errorMapMessages: Map<string, string>;
    private _errorMessage;
    formControlSibling?: FormControl;
    constructor(_translocoService: TranslocoService);
    ngAfterViewInit(): void;
    private updateErrors;
    private getCustomLabel;
    private concatLabel;
    get errorMessage(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqFormControlErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqFormControlErrorComponent, "[arq-form-control-error]", never, { "labelControl": "labelControl"; "errorMapMessages": "errorMapMessages"; "formControlSibling": "formControlSibling"; }, {}, never, never, false, never>;
}
