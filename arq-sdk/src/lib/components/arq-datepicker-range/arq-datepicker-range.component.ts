import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArqDatepickerComponent, dateProviders } from '../arq-datepicker/arq-datepicker.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'arq-datepicker-range',
  templateUrl: './arq-datepicker-range.component.html',
  styleUrls: ['./arq-datepicker-range.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [dateProviders, DatePipe]
})
export class ArqDatepickerRangeComponent extends ArqDatepickerComponent implements OnInit {
  @Input()
  labelErrorStart!: string;

  @Input()
  labelErrorEnd!: string;

  @Input()
  visibleRange: boolean = true;

  @Input()
  rangeLabel: string = '';

  @Input()
  placeholderStart!: string;

  @Input()
  placeholderEnd!: string;

  @Input()
  public fechaFin!: string;

  @Output()
  selectionChange = new EventEmitter();

  public fechaFinCntr!: FormControl;

  constructor(override datePipe: DatePipe) {
    super(datePipe);
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setValueDate();
    }
  }

  override ngOnInit(): void {
    this.addControEnd();
    this.validateDate();
  }

  public addControEnd(): void {
    this.setFG(this.fechaFin);
  }

  public dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    // this.value.setValue({
    //   start: dateRangeStart.value,
    //   end: dateRangeEnd.value
    // });
    this.selectionChange.emit({
      start: dateRangeStart.value,
      end: dateRangeEnd.value
    });
  }

  protected getFechaFinCntr(): FormControl {
    if (this.fGroup?.controls[this.fechaFin].value) {
      this.fGroup?.controls[this.fechaFin].setValue(new Date(this.fGroup?.controls[this.fechaFin].value));
    }
    return this.fGroup?.controls[this.fechaFin] as FormControl;
  }
}
