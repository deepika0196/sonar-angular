import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { ArqDialogService } from 'arq-sdk';

@Injectable({
  providedIn: 'root',
})
export class UtilsComponent {
  static eventReadRow(row: any, dialog: any, serviceArq: any): any {
    const data = {
      row,
      readOnly: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    serviceArq.open(data, dialog).subscribe((res: any) => {});
  }

  static eventNewRow(row: any, dialog: any): any {
    const dataModal = {
      data: {
        readOnly: false,
      },
      component: dialog,
    };

    return dataModal;
  }

  static eventEditRow(
    row: any,
    dialog: any,
    service: any,
    serviceArq: any
  ): any {
    const data = {
      row,
      readOnly: false,
    };
    serviceArq.open(data, dialog).subscribe((res: any) => {
      if (res != undefined && res != null) {
        service.sendData(res);
      }
    });
  }

  static closeDialog(
    data: any,
    formGroup: FormGroup,
    serviceArq: ArqDialogService,
    transloco: TranslocoService
  ): void {
    if (data.readOnly || formGroup.pristine) {
      serviceArq.close();
    } else {
      serviceArq
        .open(
          {
            cancelBtn: true,
            confirmBtn: true,
            message: transloco.translate('dialog_exit_1'),
            title: transloco.translate('dialog_exit_2'),
            type: 'exit',
            icon: 'close',
            color: 'text-danger',
            textConfirm: transloco.translate('dialog_accept'),
            textCancel: transloco.translate('dialog_cancel'),
          },
          null
        )
        .subscribe((res: any) => {
          if (res) {
            serviceArq.close();
          }
        });
    }
  }
}
