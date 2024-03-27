import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredListFields } from '../../../core/utils/basic.util';
import { ArqList } from '../../interfaces/arq-list.interface';

@Component({
  selector: 'arq-select-multiple',
  templateUrl: './arq-select-multiple.component.html',
  styleUrls: ['./arq-select-multiple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqSelectMultipleComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  disabled: boolean = false;

  @Input()
  public selectedValue?: any;

  @Input()
  selectOptionsList!: Observable<ArqList[]> | any;

  @Output()
  selectionChange = new EventEmitter();

  @Input()
  hint: string = '';

  optionsList: any[] = [];

  constructor() {
    super();
  }

  override ngOnInit(): void {
    checkRequiredListFields([this.selectOptionsList], ['selectOptionsList']);

    if (Array.isArray(this.selectOptionsList)) {
      this.selectOptionsList = of(this.selectOptionsList);
    }

    this.selectOptionsList.subscribe((data: any[]) => {
      this.optionsList = data;
    });

    if (this.selectedValue) {
      this.getValue()?.setValue(this.selectedValue);
    }
  }

  reset() {
    this.selectedValue = '';
  }

  comprobarEntradas(): void {}
}
