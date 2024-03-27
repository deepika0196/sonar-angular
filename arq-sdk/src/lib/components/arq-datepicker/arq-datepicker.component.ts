import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { DatePipe } from '@angular/common';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

export const dateProviders = [
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
];

@Component({
  selector: 'arq-datepicker',
  templateUrl: './arq-datepicker.component.html',
  styleUrls: ['./arq-datepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqDatepickerComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  override label!: string;

  @Input()
  hint!: string;

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

  public isDisabled(): boolean {
    if (this.fGroup) {
      return this.fGroup.controls[this.value].disabled;
    }
    return false;
  }

  comprobarEntradas(): void {}
}
