import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-slider-toggle',
  templateUrl: './arq-slider-toggle.component.html',
  styleUrls: ['./arq-slider-toggle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqSliderToggleComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  checked: BooleanInput;

  constructor() {
    super();
  }

  comprobarEntradas(): void {}
}
