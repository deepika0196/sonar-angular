import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredFields } from '../../../core/utils/basic.util';
import { ArqList } from '../../interfaces/arq-list.interface';

@Component({
  selector: 'arq-button-toggle-multiple',
  templateUrl: './arq-button-toggle-multiple.component.html',
  styleUrls: ['./arq-button-toggle-multiple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqButtonToggleMultipleComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  toggleOptions!: Observable<ArqList[]>;

  @Output()
  selectionChange = new EventEmitter();

  onValChange(value: any) {
    this.selectionChange.emit(value);
  }

  comprobarEntradas(): void {
    checkRequiredFields(this.toggleOptions, 'toggleOptions');
  }
}
