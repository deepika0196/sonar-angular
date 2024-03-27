import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-slider',
  templateUrl: './arq-slider.component.html',
  styleUrls: ['./arq-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqSliderComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  disabled: BooleanInput;

  @Input()
  max: NumberInput;

  @Input()
  min: NumberInput;

  @Input()
  step: NumberInput;

  @Input()
  barraLabel: BooleanInput;

  constructor() {
    super();
  }

  comprobarEntradas(): void {}
}
