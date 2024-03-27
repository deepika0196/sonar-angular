import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxCalendarView, MtxDatetimepickerMode, MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { DatePipe } from '@angular/common';

export const MY_FORMATS_TIME = {
  parse: {
    dateInput: 'DD/MM/YYYY',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    timeInput: 'HH:mm',
    datetimeInput: 'DD/MM/YYYY HH:mm'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    timeInput: 'HH:mm',
    datetimeInput: 'DD/MM/YYYY HH:mm',
    popupHeaderDateLabel: 'MMM DD, ddd'
  }
};

export const dateTimeProviders = [
  { provide: MTX_DATETIME_FORMATS, useValue: MY_FORMATS_TIME },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } }
];

@Component({
  selector: 'arq-datetimepicker',
  templateUrl: './arq-datetimepicker.component.html',
  styleUrls: ['./arq-datetimepicker.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [dateTimeProviders, DatePipe]
})
export class ArqDateTimepickerComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  withHours: boolean = false;

  @Input()
  hint!: string;

  type: MtxDatetimepickerType = 'datetime';
  mode: MtxDatetimepickerMode = 'portrait';
  multiYearSelector: boolean = false;
  startView: MtxCalendarView = 'month';
  twelvehour: boolean = false;
  timeInterval: any = 1;
  touchUi: boolean = false;
  timeInput: boolean = true;

  constructor(public datePipe: DatePipe) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setValueDate();
    }
  }

  override ngOnInit(): void {
    this.validateDate();
  }

  public ngSetValue(evt: any) {
    this.setValue(evt);
    this.ngChanges();
  }

  public isDisabled(): boolean {
    if (this.fGroup) {
      return this.fGroup.controls[this.value].disabled;
    }
    return false;
  }

  comprobarEntradas(): void {}
}
