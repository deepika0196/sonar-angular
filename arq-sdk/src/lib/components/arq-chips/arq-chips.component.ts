import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';

@Component({
  selector: 'arq-chips',
  templateUrl: './arq-chips.component.html',
  styleUrls: ['./arq-chips.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqChipsComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  placeholderadd!: string;

  @Input()
  compareWith?: (o1: any, o2: any) => boolean;

  @Input()
  selectable: boolean = true;

  @Input()
  role?: string | null;

  @Input()
  multiple?: boolean;

  //Chip Properties
  @Input()
  color: ThemePalette;

  @Input()
  disabled?: boolean;

  @Input()
  removable: boolean = true;

  @Input()
  roleChip?: string;

  @Input()
  selectableChip: boolean = true;

  @ViewChild('chipInput') chipInput?: ElementRef<HTMLInputElement>;

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() {
    super();
  }

  add(event: MatChipInputEvent): void {
    const input = event.chipInput;
    const value = event.value;

    if ((value || '').trim()) {
      let val = this.value && this.fGroup?.controls[this.value].value ? this.fGroup?.controls[this.value].value : [];
      this.fGroup?.controls[this.value].setValue([...val, value.trim()]);
      this.fGroup?.controls[this.value].updateValueAndValidity();
      this.ngChanges();
    }
  }

  remove(elem: string): void {
    const index = this.fGroup?.controls[this.value].value.indexOf(elem);

    if (index >= 0) {
      this.fGroup?.controls[this.value].value.splice(index, 1);
      this.fGroup?.controls[this.value].updateValueAndValidity();
      this.ngChanges();
    }
  }

  comprobarEntradas(): void {}
}
