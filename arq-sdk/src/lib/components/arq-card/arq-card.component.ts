import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { checkRequiredFields } from '../../../core/utils/basic.util';

@Component({
  selector: 'arq-card',
  templateUrl: './arq-card.component.html',
  styleUrls: ['./arq-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqCardComponent implements OnInit {
  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  @Input()
  content?: string;

  @Input()
  src?: string;

  @Input()
  image?: string;

  @Input()
  alt?: string;

  @Input()
  buttonsSchema?: any[];

  @Input()
  extraClass?: string;

  constructor() {}

  ngOnInit(): void {
    checkRequiredFields(this.content, 'Content');
    checkRequiredFields(this.title, 'title');
    checkRequiredFields(this.src, 'src');
  }
}
