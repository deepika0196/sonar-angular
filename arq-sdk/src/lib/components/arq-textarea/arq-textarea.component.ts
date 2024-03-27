import { Component, Input, ViewEncapsulation } from '@angular/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-textarea',
  templateUrl: './arq-textarea.component.html',
  styleUrls: ['./arq-textarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqTextareaComponent extends ArqGenericInputComponent {
  @Input()
  public maxLength?: number;

  @Input()
  public minHeight: number = 5;

  public constructor() {
    super();
    this.sizeInput = 'large';
  }

  comprobarEntradas(): void {}
}
