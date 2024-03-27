import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-input-money',
  templateUrl: './arq-input-money.component.html',
  styleUrls: ['./arq-input-money.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqInputMoneyComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  public maxLength = 100;

  @Input()
  public append!: string;

  public valor!: string;

  public constructor() {
    super();
  }

  comprobarEntradas(): void {}
}
