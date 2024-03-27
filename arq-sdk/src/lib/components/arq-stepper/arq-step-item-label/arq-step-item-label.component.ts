import { Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'arq-step-item-label',
  templateUrl: './arq-step-item-label.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ArqStepItemLabelComponent implements OnInit {
  @ViewChild(TemplateRef)
  public labelTemplate!: TemplateRef<any>;
  @Input()
  title: string = '';

  constructor() {}

  ngOnInit() {}
}
