import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-checkbox-basic',
  templateUrl: './arq-checkbox-basic.component.html',
  styleUrls: ['./arq-checkbox-basic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqCheckboxBasicComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  checked?: boolean;

  @Input()
  disabled?: boolean;

  @Input()
  sectionClass?: string;

  @Input()
  spanClass?: string;

  @Input() checkbox_down: boolean = false;

  @Input() checkbox_sn: boolean = false;

  constructor() {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.verifyCheckbox();
    }
  }

  override ngOnInit(): void {
    this.verifyCheckbox();
  }

  verifyCheckbox() {
    if (this.getValue() && this.checkbox_sn) {
      this.setValueCheckbox();
    }
  }

  comprobarEntradas(): void {}
}
