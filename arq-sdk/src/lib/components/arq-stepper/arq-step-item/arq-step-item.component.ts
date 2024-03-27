import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArqStepItemLabelComponent } from '../arq-step-item-label/arq-step-item-label.component';
@Component({
  selector: 'arq-step-item',
  templateUrl: './arq-step-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ArqStepItemComponent {
  @ViewChild(TemplateRef) public contentTemplate!: TemplateRef<any>;
  @ContentChild(ArqStepItemLabelComponent) public itemLabel!: ArqStepItemLabelComponent;

  @Input() title: string = '';
  @Input()
  btnNext!: boolean;
  @Input()
  btnBack!: boolean;
  @Input()
  control!: FormGroup;
}
