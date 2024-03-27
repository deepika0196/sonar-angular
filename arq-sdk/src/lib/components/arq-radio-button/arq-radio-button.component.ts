import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredFields } from '../../../core/utils/basic.util';
import { ArqList } from '../../interfaces/arq-list.interface';

@Component({
  selector: 'arq-radio-button',
  templateUrl: './arq-radio-button.component.html',
  styleUrls: ['./arq-radio-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqRadioButtonComponent extends ArqGenericInputComponent implements OnInit {
  //Add properties for the RadioGroup
  @Input()
  color: ThemePalette;

  @Input()
  disabled: boolean = true;

  @Input()
  labelPosition: 'before' | 'after' = 'before';

  @Input()
  name: string = 'radio-group-example';

  @Input()
  checked: boolean = false;

  @Input()
  colorRadio: ThemePalette;

  @Input()
  disabledRadio: boolean = false;

  @Input()
  id!: string;

  @Input()
  class?: string;

  @Input()
  radioOptionsList?: Observable<ArqList[]>;

  @Input()
  selectedValue?: string;

  @Input()
  direction: string = 'column';

  constructor() {
    super();
  }

  override ngOnInit(): void {
    checkRequiredFields(this.radioOptionsList, 'radioOptionsList');
    checkRequiredFields(this.label, 'label');
  }

  protected comprobarEntradas() {}
}
