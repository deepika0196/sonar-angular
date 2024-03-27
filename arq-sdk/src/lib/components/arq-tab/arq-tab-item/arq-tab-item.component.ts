import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ArqTabItemHeaderComponent } from '../arq-tab-item-header/arq-tab-item-header.component';

@Component({
  selector: 'arq-tab-item',
  templateUrl: './arq-tab-item.component.html',
  styleUrls: ['./arq-tab-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqTabItemComponent implements OnInit {
  @ViewChild(TemplateRef) public contentTemplate!: TemplateRef<any>;
  @ContentChild(ArqTabItemHeaderComponent) public itemHeader!: ArqTabItemHeaderComponent;
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
