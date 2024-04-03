import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare const dateProviders: ({
    provide: import("@angular/core").InjectionToken<import("@angular/material/core").MatDateFormats>;
    useValue: {
        parse: {
            dateInput: string;
        };
        display: {
            dateInput: string;
            monthYearLabel: string;
            dateA11yLabel: string;
            monthYearA11yLabel: string;
        };
    };
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/material-moment-adapter").MatMomentDateAdapterOptions>;
    useValue: {
        strict: boolean;
        useUtc?: undefined;
    };
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/material-moment-adapter").MatMomentDateAdapterOptions>;
    useValue: {
        useUtc: boolean;
        strict?: undefined;
    };
})[];
export declare class ArqDatepickerComponent extends ArqGenericInputComponent implements OnInit, OnChanges {
    datePipe: DatePipe;
    label: string;
    hint: string;
    disabled: undefined | string | boolean;
    constructor(datePipe: DatePipe);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    isDisabled(): boolean;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDatepickerComponent, "arq-datepicker", never, { "label": "label"; "hint": "hint"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
