import { Component, Input, OnInit } from '@angular/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-text-input',
  templateUrl: './arq-text-input.component.html',
  styleUrls: ['./arq-text-input.component.css']
})
export class ArqTextInputComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  public maxLength = 100;

  @Input()
  public append!: string;

  @Input()
  public disabled: boolean = false;

  public constructor() {
    super();
  }
  comprobarEntradas(): void {}
}
