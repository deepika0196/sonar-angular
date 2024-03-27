import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';

import { ArqDialogComponent } from '../components/arq-dialog/arq-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ArqDialogService {
  public constructor(private dialog: MatDialog) {}
  public dialogRef: MatDialogRef<ArqDialogComponent>[] = [];

  public open(data: any, component: any = null, width: string = ''): any {
    if (!component) {
      component = ArqDialogComponent;
    }

    this.popClosedDialogs();

    this.dialogRef.push(
      this.dialog.open(component, {
        autoFocus: false,
        data: data,
        panelClass: 'custom-class-dialog',
        minWidth: width
      })
    );
    return this.dialogRef[this.dialogRef.length - 1].afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      })
    );
  }

  public confirmed(data: any): any {
    this.popClosedDialogs();
    this.dialogRef[this.dialogRef.length - 1].close(data);
    this.dialogRef.pop();
  }

  public close(): any {
    this.popClosedDialogs();
    this.dialogRef[this.dialogRef.length - 1].close();
    this.dialogRef.pop();
  }

  public popClosedDialogs(): any {
    this.dialogRef.forEach((dialog, index) => {
      if (dialog.getState() !== MatDialogState.OPEN) {
        this.dialogRef.splice(index, 1);
      }
    });
  }
}
