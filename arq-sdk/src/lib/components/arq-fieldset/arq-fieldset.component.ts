import { Component, Input } from '@angular/core';

@Component({
  selector: 'arq-fieldset',
  templateUrl: './arq-fieldset.component.html',
  styleUrls: ['./arq-fieldset.component.css']
})
export class ArqFieldsetComponent {

  @Input()
  public legend: string | undefined = undefined

}
