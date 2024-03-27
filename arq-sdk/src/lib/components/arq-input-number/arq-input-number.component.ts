import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-input-number',
  templateUrl: './arq-input-number.component.html',
  styleUrls: ['./arq-input-number.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqInputNumberComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  public maxLength = 100;

  @Input()
  public append!: string;

  public constructor() {
    super();
  }

  comprobarEntradas(): void {}
}
