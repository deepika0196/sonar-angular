import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { MtxCalendarView, MtxDatetimepickerMode, MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import * as i0 from "@angular/core";
export declare const MY_FORMATS_TIME: {
    parse: {
        dateInput: string;
        monthInput: string;
        yearInput: string;
        timeInput: string;
        datetimeInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
        monthInput: string;
        yearInput: string;
        timeInput: string;
        datetimeInput: string;
        popupHeaderDateLabel: string;
    };
};
export declare const dateTimeProviders: ({
    provide: import("@angular/core").InjectionToken<import("@ng-matero/extensions/core").MtxDatetimeFormats>;
    useValue: {
        parse: {
            dateInput: string;
            monthInput: string;
            yearInput: string;
            timeInput: string;
            datetimeInput: string;
        };
        display: {
            dateInput: string;
            monthYearLabel: string;
            dateA11yLabel: string;
            monthYearA11yLabel: string;
            monthInput: string;
            yearInput: string;
            timeInput: string;
            datetimeInput: string;
            popupHeaderDateLabel: string;
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
export declare class ArqDateTimepickerComponent extends ArqGenericInputComponent implements OnInit {
    datePipe: DatePipe;
    withHours: boolean;
    hint: string;
    disabled: undefined | string | boolean;
    type: MtxDatetimepickerType;
    mode: MtxDatetimepickerMode;
    multiYearSelector: boolean;
    startView: MtxCalendarView;
    twelvehour: boolean;
    timeInterval: any;
    touchUi: boolean;
    timeInput: boolean;
    constructor(datePipe: DatePipe);
    ngOnInit(): void;
    ngSetValue(evt: any): void;
    isDisabled(): boolean;
    comprobarEntradas(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDateTimepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDateTimepickerComponent, "arq-datetimepicker", never, { "withHours": "withHours"; "hint": "hint"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
