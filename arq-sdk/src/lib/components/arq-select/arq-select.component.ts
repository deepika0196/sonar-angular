import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredListFields } from '../../../core/utils/basic.util';
import { ArqList } from '../../../lib/interfaces/arq-list.interface';

@Component({
  selector: 'arq-select',
  templateUrl: './arq-select.component.html',
  styleUrls: ['./arq-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqSelectComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  disabled!: boolean;

  @Input()
  selectOptionsList?: Observable<ArqList[]> | any;

  @Input()
  emptyOption?: boolean = false;

  @Input()
  fullObject?: boolean = true;

  @Input()
  public multiple?: boolean = false;

  @Output()
  selectionChange = new EventEmitter();

  constructor() {
    super();
  }

  override ngOnInit(): void {
    checkRequiredListFields(
      [this.selectOptionsList, this.placeholder, this.required],
      ['selectOptionsList', 'placeholder', 'required']
    );

    if (Array.isArray(this.selectOptionsList)) {
      this.selectOptionsList = of(this.selectOptionsList);
    }

    this.getValue().valueChanges.subscribe(value => {
      if (value === undefined || value === '') {
        this.setValue(null);
      }
      // caso select fullObject false, no multiple
      if (!this.fullObject && !this.multiple && value?.value) {
        this.setValue(value.value);
      }
      // caso select fullObject false, multiple
      if (!this.fullObject && this.multiple && Array.isArray(value) && value.length > 0 && value[0].value) {
        this.setValue(value.map((obj: { value: string }) => obj.value));
      }
    });

    this.changeObjectWithArrayPropertiesToNull();

    this.checkInitValue();
  }

  private changeObjectWithArrayPropertiesToNull() {
    if (this.fullObject && Array.isArray(this.getValue().value?.value)) {
      this.setValue(null);
    }
  }

  private checkInitValue() {
    if (this.fullObject) {
      if (this.getValue().value && !this.getValue().value?.value) {
        throw new Error(
          'El valor del select debe heredar de ArqList (con propiedades value, description, descriptionV)'
        );
      }
    } else if (this.multiple) {
      if (this.getValue().value && !Array.isArray(this.getValue().value)) {
        throw new Error('Al ser un select múltiple, el valor del select debe ser un array');
      }
    } else {
      if (typeof this.getValue().value === 'object' && this.getValue().value !== null) {
        throw new Error('El valor del select no acepta objetos, solo valores primitivos');
      }
    }
  }

  compareFunction(o1: any, o2: any) {
    let val1 = o1?.value ? o1.value : o1;
    let val2 = o2?.value ? o2.value : o2;
    return val1 === val2;
  }

  comprobarEntradas(): void {}
}
