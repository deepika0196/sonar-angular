import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewEncapsulation } from '@angular/core';

import { ArqGenericInputComponent } from '../../../../core/arq-generic-input/arq-generic-input.component';
import { ArqStepItemComponent } from '../arq-step-item/arq-step-item.component';

@Component({
  selector: 'arq-step-group',
  templateUrl: './arq-step-group.component.html',
  styleUrls: ['./arq-step-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqStepGroupComponent extends ArqGenericInputComponent {
  @Input() public duration = '2000';

  @Input() public linear = false;

  @Input() public orientation: StepperOrientation = 'horizontal';

  @Input() public isEditable = false;

  @Input() public position: 'top' | 'bottom' = 'top';

  @Input() public labelPosition: 'bottom' | 'end' = 'bottom';

  @Input() public isOptional = false;

  @Output()
  emitValue = new EventEmitter<any>();

  @ContentChildren(ArqStepItemComponent) private contentItems?: QueryList<ArqStepItemComponent>;
  public appItems?: QueryList<ArqStepItemComponent>;

  ngAfterContentInit() {
    this.appItems = this.contentItems;
  }

  selectionChange(evt: StepperSelectionEvent) {
    this.emitValue.emit(evt);
  }

  next(control: any) {
    if (control && this.linear && !control.valid) {
      control.markAllAsTouched();
    }
  }

  comprobarEntradas(): void {}
}
