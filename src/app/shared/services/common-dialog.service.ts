import { Injectable } from '@angular/core';
import { AlertDialogComponent } from '@app/shared/components/alert-dialog/alert-dialog.component';
import {
  ActionButtons,
  GenericDialog,
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import { TranslocoService } from '@ngneat/transloco';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class CommonDialogService {
  alertDialogRef: DynamicDialogRef | undefined;

  constructor(
    private translocoService: TranslocoService,
    private dialogService: DialogService
  ) {}

  createActionButton(
    labelKey: string,
    icon: string,
    action: () => void,
    validate?: () => boolean,
    disabled = false
  ): ActionButtons {
    return {
      label: this.translocoService.translate(labelKey),
      icon: icon,
      action: action,
      validate: validate,
      disabled: disabled,
    };
  }

  getDialogConfig(
    width: string,
    showHeader: boolean,
    baseZIndex: number,
    closable: boolean,
    styleClass: string,
    actionButtons: ActionButtons[],
    alertMessage = '',
    dialogType = '',
    headerKey = '',
    template: any = null
  ): GenericDialog {
    return {
      header: headerKey
        ? this.translocoService.translate(headerKey)
        : undefined,
      width: width,
      contentStyle: { overflow: 'none' },
      closable: closable,
      baseZIndex: baseZIndex,
      styleClass: styleClass,
      showHeader: showHeader,
      data: {
        actionButtons: actionButtons,
        alertMessage: alertMessage ? alertMessage : undefined,
        template: template,
        headerStyle: dialogType ? this.getHeaderStyle(dialogType) : undefined,
      },
    };
  }

  openNestedConfirmOrAlertDialog(
    alertMessage: string,
    dialogType: string,
    callback?: (input?: any) => void,
    campoDetails?: any
  ) {
    const actionButtons: ActionButtons[] =
      dialogType === 'confirm'
        ? [
            this.createActionButton(
              'buttons.yes',
              'check',
              () => {
                if (callback)
                  campoDetails ? callback(campoDetails) : callback();
                this.alertDialogRef?.close();
              },
              undefined,
              false
            ),
            this.createActionButton(
              'buttons.no',
              '',
              () => this.alertDialogRef?.close(),
              undefined,
              false
            ),
          ]
        : [
            this.createActionButton(
              'buttons.accept',
              '',
              () => this.alertDialogRef?.close(),
              undefined,
              false
            ),
          ];

    const alertDialogConfig = this.getDialogConfig(
      '40%',
      false,
      20000,
      false,
      'dialogStyle',
      actionButtons,
      alertMessage,
      dialogType
    );

    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      alertDialogConfig
    );
  }

  private getHeaderStyle(dialogType: string) {
    switch (dialogType) {
      case 'confirm':
        return {
          icon: 'info',
          dialogType: 'confirm',
          title: this.translocoService.translate('dialog_header.delete'),
        };
      case 'warn':
        return {
          icon: 'report_problem',
          dialogType: 'warn',
          title: this.translocoService.translate('dialog_header.alert'),
        };
      default:
        return {
          icon: '',
          dialogType: '',
          title: '',
        };
    }
  }
}
