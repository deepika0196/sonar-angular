import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredFields } from '../../../core/utils/basic.util';
import { ArqCheckbox } from '../../interfaces/arq-checkbox.interface';

@Component({
  selector: 'arq-checkbox',
  templateUrl: './arq-checkbox.component.html',
  styleUrls: ['./arq-checkbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqCheckboxComponent extends ArqGenericInputComponent {
  @Input()
  color: ThemePalette;

  @Input()
  checked?: boolean;

  @Input()
  disabled?: boolean;

  @Input()
  indeterminate?: boolean;

  @Input()
  disableRipple?: boolean;

  @Input()
  checkBoxes!: ArqCheckbox[];

  @Input()
  sectionClass?: string;

  @Input()
  spanClass?: string;

  @Input()
  direction?: string = 'column';

  @Input() checkbox_down: boolean = false;

  @Input() checkbox_sn: boolean = false;
  copyCheckboxes!: ArqCheckbox[];

  override comprobarEntradas() {
    checkRequiredFields(this.checkBoxes, 'checkBoxes');
  }

  override ngOnInit(): void {
    this.copyCheckboxes = this.checkBoxes.slice();
  }

  public setCheckBoxes(evt: any, item: any) {
    item.completed = evt;
    if (this.checkbox_sn) {
      this.copyCheckboxes.forEach((check: ArqCheckbox) => {
        if (check.completed == true) check.completed = 'S';
        if (check.completed == false) check.completed = 'N';
      });
    }
    this.setValue(this.copyCheckboxes);
    this.ngChanges();
  }
}
