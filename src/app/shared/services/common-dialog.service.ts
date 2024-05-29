import { Injectable, TemplateRef } from '@angular/core';
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
  addDialogRef: DynamicDialogRef;
  updateDialogRef: DynamicDialogRef;
  viewDialogRef: DynamicDialogRef;
  deleteDialogRef: DynamicDialogRef;

  constructor(
    private translocoService: TranslocoService,
    private dialogService: DialogService
  ) {}

  createActionButton(
    labelKey: string,
    icon: string,
    action: (input?: any) => void,
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

  protected getActionButtons(
    dialogType: 'save' | 'update' | 'view' | 'delete' | 'confirm' | string,
    dialogRef: string,
    buttonIcon: string,
    callback?: (input?: any) => void,
    validate?: () => boolean
  ): ActionButtons[] {
    const closeActionButton = this.createActionButton(
      'buttons.cancel',
      '',
      () => this[dialogRef]?.close(),
      undefined,
      false
    );

    const saveActionButton = this.createActionButton(
      `buttons.save`,
      buttonIcon,
      (input?: any) => callback(input),
      validate,
      true
    );
    const updateActionButton = this.createActionButton(
      `buttons.update`,
      buttonIcon,
      (input?: any) => callback(input),
      validate,
      true
    );

    const viewActionButton = this.createActionButton(
      'buttons.close',
      '',
      () => this[dialogRef]?.close(),
      undefined,
      false
    );

    const yesActionButton = this.createActionButton(
      'buttons.yes',
      'check',
      (input?: any) => callback(input),
      undefined,
      false
    );

    const noActionButton = this.createActionButton(
      'buttons.no',
      '',
      () => this[dialogRef]?.close(),
      undefined,
      false
    );

    const acceptActionButton = this.createActionButton(
      'buttons.accept',
      '',
      () => this[dialogRef]?.close(),
      undefined,
      false
    );

    switch (dialogType) {
      case 'save':
        return [saveActionButton, closeActionButton];
      case 'update':
        return [updateActionButton, closeActionButton];
      case 'view':
        return [viewActionButton];
      case 'delete':
      case 'confirm':
        return [yesActionButton, noActionButton];
      case 'alert':
        return [acceptActionButton];
      default:
        return [];
    }
  }

  public openDialog(
    type: string,
    action?: (input?: any) => void,
    template?: TemplateRef<any>,
    validate?: () => boolean,
    icon?: string,
    headerTitle?: string,
    message?: string,
    nested?: number
  ) {
    let options = {
      action: '',
      dialogref: '',
      icon: icon,
      width: '50%',
      type: '',
      showHeader: true,
      baseZIndex: 10000,
    };
    switch (type) {
      case 'add':
        options = {
          ...options,
          action: 'save',
          dialogref: 'addDialogRef',
        };
        break;
      case 'update':
        options = {
          ...options,
          action: 'update',
          dialogref: 'updateDialogRef',
        };
        break;
      case 'view':
        options = {
          ...options,
          action: 'view',
          dialogref: 'viewDialogRef',
        };
        break;
      case 'delete':
        options = {
          ...options,
          action: 'delete',
          dialogref: 'deleteDialogRef',
          width: '40%',
          type: 'confirm',
          showHeader: false,
        };
        break;
      case 'confirm':
        options = {
          ...options,
          action: 'confirm',
          dialogref: 'alertDialogRef',
          width: '40%',
          type: 'confirm',
          showHeader: false,
          baseZIndex: nested ? nested * 10000 : 10000,
        };
        break;
      case 'alert':
        options = {
          ...options,
          action: 'alert',
          dialogref: 'alertDialogRef',
          width: '40%',
          type: 'warn',
          showHeader: false,
          baseZIndex: nested ? nested * 10000 : 10000,
        };
        break;

      default:
        break;
    }

    const addDialogConfig = this.getDialogConfig(
      options.width,
      options.showHeader,
      options.baseZIndex,
      false,
      'dialogStyle',
      this.getActionButtons(
        options.action,
        options.dialogref,
        options.icon,
        action,
        validate
      ),
      message,
      options.type,
      headerTitle,
      template
    );
    console.log(options, addDialogConfig);
    this[options.dialogref] = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }
}
