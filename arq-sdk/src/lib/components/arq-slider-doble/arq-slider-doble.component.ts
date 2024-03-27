import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-slider-doble',
  templateUrl: './arq-slider-doble.component.html',
  styleUrls: ['./arq-slider-doble.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqSliderDobleComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  max: NumberInput;

  @Input()
  min: NumberInput;

  @Input()
  step: NumberInput;

  @Input()
  barraLabel: BooleanInput;

  @Input()
  formControlFinal!: FormControl;

  constructor() {
    super();
  }

  cambioValorInicio(event: Event) {
    return this.fGroup?.controls[this.value].setValue((event.target as HTMLInputElement).value);
  }

  cambioValorFin(event: Event) {
    this.formControlFinal.setValue((event.target as HTMLInputElement).value);
  }

  comprobarEntradas(): void {}
}
