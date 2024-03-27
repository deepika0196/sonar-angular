import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ArqUploadFilesDialogComponent } from '../components/arq-upload-files-dialog/arq-upload-files-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ArqUploadFilesDialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<ArqUploadFilesDialogComponent>;

  public open(options: {
    cancelBtn: boolean;
    confirmBtn: boolean;
    textCancel: string;
    textConfirm: string;
    config: any;
    label: string;
  }) {
    this.dialogRef = this.dialog.open(ArqUploadFilesDialogComponent, {
      data: {
        cancelBtn: options.cancelBtn,
        confirmBtn: options.confirmBtn,
        textCancel: options.textCancel,
        textConfirm: options.textConfirm,
        config: options.config,
        label: options.label
      }
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      })
    );
  }

  public close() {
    this.dialogRef.close();
  }
}
