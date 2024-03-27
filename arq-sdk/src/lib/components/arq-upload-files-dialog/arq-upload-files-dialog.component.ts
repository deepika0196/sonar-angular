import { Component, HostListener, Inject, Input, Optional, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'arq-upload-files-dialog',
  templateUrl: './arq-upload-files-dialog.component.html',
  styleUrls: ['./arq-upload-files-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqUploadFilesDialogComponent {
  @Input() config: any;

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelBtn: boolean;
      confirmBtn: boolean;
      textConfirm: string;
      textCancel: string;
      config: any;
      label: string;
    },
    @Optional() private mdDialogRef: MatDialogRef<ArqUploadFilesDialogComponent>
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
