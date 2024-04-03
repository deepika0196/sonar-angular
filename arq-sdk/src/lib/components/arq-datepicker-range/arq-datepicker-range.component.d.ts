import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArqDatepickerComponent } from '../arq-datepicker/arq-datepicker.component';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class ArqDatepickerRangeComponent extends ArqDatepickerComponent implements OnInit, OnChanges {
    datePipe: DatePipe;
    labelErrorStart: string;
    labelErrorEnd: string;
    visibleRange: boolean;
    rangeLabel: string;
    placeholderStart: string;
    placeholderEnd: string;
    fechaFin: string;
    selectionChange: EventEmitter<any>;
    fechaFinCntr: FormControl;
    constructor(datePipe: DatePipe);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    addControEnd(): void;
    dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement): void;
    protected getFechaFinCntr(): FormControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDatepickerRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDatepickerRangeComponent, "arq-datepicker-range", never, { "labelErrorStart": "labelErrorStart"; "labelErrorEnd": "labelErrorEnd"; "visibleRange": "visibleRange"; "rangeLabel": "rangeLabel"; "placeholderStart": "placeholderStart"; "placeholderEnd": "placeholderEnd"; "fechaFin": "fechaFin"; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
}
