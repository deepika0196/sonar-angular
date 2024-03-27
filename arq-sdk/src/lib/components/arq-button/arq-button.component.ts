import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'arq-button',
  templateUrl: './arq-button.component.html',
  styleUrls: ['./arq-button.component.css']
})
export class ArqButtonComponent {
  @Input()
  public readonly: boolean = false;

  @Input()
  public label!: string;

  @Input()
  public color!: string;

  @Input()
  public type!: string;

  @Input()
  public icon!: string;

  @Input()
  public tipoButton?: string;

  @Input()
  public btnName?: string

  @HostBinding('class.parent-disabled') get className() {
    return this.readonly;
  }
}
