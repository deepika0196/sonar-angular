import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
declare type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
@Component({
  selector: 'gva-button',
  templateUrl: './gva-button.component.html',
  styleUrls: ['./gva-button.component.css'],
  providers: [TranslocoDirective],
})
export class GvaButtonComponent<T> implements OnInit {
  translate: TranslocoService;
  constructor() {}
  @Input() btnLabel: string;
  @Input() btnClass: string;
  @Input() btnDisabled = false;
  @Input() iconPosition: ButtonIconPosition;
  @Output() btnClick: EventEmitter<T> = new EventEmitter();

  ngOnInit() {}

  buttonClick() {
    this.btnClick.emit();
  }
}
