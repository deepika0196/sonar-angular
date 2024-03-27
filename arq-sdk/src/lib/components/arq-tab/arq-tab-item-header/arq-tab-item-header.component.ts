import { Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'arq-tab-item-header',
  templateUrl: './arq-tab-item-header.component.html',
  styleUrls: ['./arq-tab-item-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqTabItemHeaderComponent implements OnInit {
  @ViewChild(TemplateRef)
  public headerTemplate!: TemplateRef<any>;
  @Input()
  title: string = '';

  constructor() {}

  ngOnInit() {}
}
