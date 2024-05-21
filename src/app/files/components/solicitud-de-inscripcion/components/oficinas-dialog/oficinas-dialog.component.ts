import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-oficinas-dialog',
  templateUrl: './oficinas-dialog.component.html',
  styleUrls: ['./oficinas-dialog.component.scss'],
})
export class OficinasDialogComponent {
  @Input() data: any;
  constructor(@Inject('data') public datas: any) {}
}
