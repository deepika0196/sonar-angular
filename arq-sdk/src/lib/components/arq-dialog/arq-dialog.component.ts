import { ChangeDetectionStrategy, Component, HostListener, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'arq-dialog',
  templateUrl: './arq-dialog.component.html',
  styleUrls: ['./arq-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqDialogComponent {
  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelBtn: boolean;
      confirmBtn: boolean;
      message: string;
      title: string;
      type: string;
      icon: string;
      color: string;
      textConfirm: string;
      textCancel: string;
      content?: any;
    },
    @Optional() private mdDialogRef: MatDialogRef<ArqDialogComponent>
  ) {}
  public cancel() {
    this.close(false);
  }
  public close(value: boolean) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }
}
