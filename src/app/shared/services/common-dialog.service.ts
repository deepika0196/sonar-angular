import { Injectable, TemplateRef } from '@angular/core';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';
import { Oficinas } from '@app/files/interfaces/oficinas';
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
  private dialogRefs: { [key: string]: DynamicDialogRef } = {};

  constructor(
    private translocoService: TranslocoService,
    private dialogService: DialogService
  ) {}

  private createActionButton(
    labelKey: string,
    icon: string,
    action: (input?: CampoDeActuacion | Oficinas | undefined) => void,
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

  private getDialogConfig(
    width: string,
    showHeader: boolean,
    baseZIndex: number,
    closable: boolean,
    styleClass: string,
    actionButtons: ActionButtons[],
    alertMessage = '',
    dialogType = '',
    headerKey = '',
    template: TemplateRef<void> = null
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

  private getActionButtons(
    dialogType: 'save' | 'update' | 'view' | 'delete' | 'confirm' | 'alert',
    dialogRef: string,
    buttonIcon: string,
    callback?: (input?: CampoDeActuacion | Oficinas | undefined) => void,
    validate?: () => boolean
  ): ActionButtons[] {
    const closeActionButton = this.createActionButton(
      'buttons.cancel',
      '',
      () => this.closeDialog(dialogRef),
      undefined,
      false
    );

    const actionButton =
      dialogType === 'save' || dialogType === 'update'
        ? this.createActionButton(
            `buttons.${dialogType}`,
            buttonIcon,
            (input?: CampoDeActuacion | Oficinas | undefined) =>
              callback?.(input),
            validate,
            dialogType === 'save' || dialogType === 'update'
          )
        : undefined;

    const yesNoButtons = [
      this.createActionButton(
        'buttons.yes',
        'check',
        (input?: CampoDeActuacion | Oficinas | undefined) => callback?.(input),
        undefined,
        false
      ),
      this.createActionButton(
        'buttons.no',
        '',
        () => this.closeDialog(dialogRef),
        undefined,
        false
      ),
    ];

    switch (dialogType) {
      case 'save':
      case 'update':
        return [actionButton, closeActionButton];
      case 'view':
        return [
          this.createActionButton(
            'buttons.close',
            '',
            () => this.closeDialog(dialogRef),
            undefined,
            false
          ),
        ];
      case 'delete':
      case 'confirm':
        return yesNoButtons;
      case 'alert':
        return [
          this.createActionButton(
            'buttons.accept',
            '',
            () => this.dialogRefs[dialogRef]?.close(),
            undefined,
            false
          ),
        ];
      default:
        return [];
    }
  }

  public openDialog(
    type: 'add' | 'update' | 'view' | 'delete' | 'confirm' | 'alert',
    action?: (input?: CampoDeActuacion | Oficinas | undefined) => void,
    template?: TemplateRef<void>,
    validate?: () => boolean,
    icon = '',
    headerTitle = '',
    message = '',
    nested = 0
  ) {
    const baseConfig = {
      icon,
      width: '50%',
      type: '',
      showHeader: true,
      baseZIndex: 10000,
    };

    const dialogConfig = {
      add: { action: 'save', dialogRef: 'addDialogRef' },
      update: { action: 'update', dialogRef: 'updateDialogRef' },
      view: { action: 'view', dialogRef: 'viewDialogRef' },
      delete: {
        action: 'delete',
        dialogRef: 'deleteDialogRef',
        width: '40%',
        type: 'confirm',
        showHeader: false,
      },
      confirm: {
        action: 'confirm',
        dialogRef: 'alertDialogRef',
        width: '40%',
        type: 'confirm',
        showHeader: false,
        baseZIndex: nested ? nested * 10000 : 10000,
      },
      alert: {
        action: 'alert',
        dialogRef: 'alertDialogRef',
        width: '40%',
        type: 'warn',
        showHeader: false,
        baseZIndex: nested ? nested * 10000 : 10000,
      },
    }[type];

    const config = { ...baseConfig, ...dialogConfig };

    const dialogRef = this.getDialogConfig(
      config.width,
      config.showHeader,
      config.baseZIndex,
      false,
      'dialogStyle',
      this.getActionButtons(
        config.action as
          | 'save'
          | 'update'
          | 'view'
          | 'delete'
          | 'confirm'
          | 'alert',
        config.dialogRef,
        config.icon,
        action,
        validate
      ),
      message,
      config.type,
      headerTitle,
      template
    );

    this.dialogRefs[config.dialogRef] = this.dialogService.open(
      AlertDialogComponent,
      dialogRef
    );
  }

  public closeDialog(dialogRefKey: string) {
    const dialogRef = this.dialogRefs[dialogRefKey];
    if (dialogRef) {
      dialogRef.close();
      delete this.dialogRefs[dialogRefKey];
    }
  }

  public closeAllDialogs() {
    Object.values(this.dialogRefs).forEach((dialogRef) => dialogRef.close());
    this.dialogRefs = {};
  }
}
