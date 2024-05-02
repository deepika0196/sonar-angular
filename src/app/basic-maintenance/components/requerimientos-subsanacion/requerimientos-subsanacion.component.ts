import { Component, OnInit } from '@angular/core';
import { RequerimientosSubsanacion } from '@app/basic-maintenance/interfaces/requerimientos-subsanacion';

import { RequerimientosSubsanacionService } from '@app/basic-maintenance/services/requerimientos-subsanacion.service';
import { AlertDialogComponent } from '@app/shared/components/alert-dialog/alert-dialog.component';
import {
  ActionButtons,
  GenericDialog,
  InputField,
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import {
  PaginatorConfig,
  TableConfig,
} from '@app/shared/components/generic-table/generic-table.config';
import { CustomResponse } from '@app/shared/services/common.service';
import { TranslocoService } from '@ngneat/transloco';
import { MessageService, SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-requerimientos-subsanacion',
  templateUrl: './requerimientos-subsanacion.component.html',
  styleUrls: ['./requerimientos-subsanacion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class RequerimientosSubsanacionComponent implements OnInit {
  requerimientosSubsanacions: RequerimientosSubsanacion[];
  cloneRequerimientosSubsanacionRecords: RequerimientosSubsanacion[];

  addDialogRef: DynamicDialogRef | undefined;
  updateDialogRef: DynamicDialogRef | undefined;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;

  tableConfig: TableConfig = {
    rows: 10,
    styleClass: 'paginator-override',
    paginator: true,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
    showDelete: true,
    showEdit: true,
    disableDelete: true,
    disableEdit: true,
  };

  paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    currentPageReportTemplate: '',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  columns = [
    {
      field: 'codigo',
      header: 'requerimientosSubsanacion.field_id',
      sortable: true,
      class: 'table-col-width-fix',
    },
    {
      field: 'derequerimiento',
      header: 'requerimientosSubsanacion.field_description',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'derequerimientoVal',
      header: 'requerimientosSubsanacion.field_descriptionVal',
      sortable: false,
      class: 'table-col-width',
    },
  ];

  constructor(
    private requerimientosSubsanacionService: RequerimientosSubsanacionService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private translocoService: TranslocoService
  ) {}

  codigo = '';

  derequerimiento = '';

  derequerimientoVal = '';

  ngOnInit() {
    this.fetchAllRequerimientosSubsanacion();
  }

  fetchAllRequerimientosSubsanacion() {
    this.requerimientosSubsanacionService
      .getRequerimientosSubsanacions()
      .subscribe((data: CustomResponse<RequerimientosSubsanacion>) => {
        this.requerimientosSubsanacions = data.response;
        this.cloneRequerimientosSubsanacionRecords = data.response;
      });
  }

  clearAll() {
    this.codigo = '';
    this.derequerimiento = '';
    this.derequerimientoVal = '';
    this.requerimientosSubsanacions = [
      ...this.cloneRequerimientosSubsanacionRecords,
    ];
  }

  filterHandler() {
    const values = this.cloneRequerimientosSubsanacionRecords.filter(
      (obj: RequerimientosSubsanacion) =>
        obj.codigo?.toLowerCase().includes(this.codigo.trim().toLowerCase()) &&
        obj.derequerimiento
          ?.toLowerCase()
          .includes(this.derequerimiento.trim().toLowerCase()) &&
        obj.derequerimientoVal
          ?.toLowerCase()
          .includes(this.derequerimientoVal.trim().toLowerCase())
    );
    this.requerimientosSubsanacions = [...values];
  }

  openAddDialog() {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.save'),
        action: (input: RequerimientosSubsanacion) => {
          this.requerimientosSubsanacionService
            .postRequerimientosSubsanacion(input)
            .subscribe((data: CustomResponse<RequerimientosSubsanacion>) => {
              if (data.success === false && data.errorCode) {
                this.openAlertDialog(
                  this.translocoService.translate('errors.' + data.errorCode),
                  'warn'
                );
              } else {
                this.fetchAllRequerimientosSubsanacion();
                this.addDialogRef?.close();
                this.messageService.add({
                  severity: 'success',
                  summary: this.translocoService.translate(
                    'requerimientosSubsanacion.title'
                  ),
                  detail: this.translocoService.translate(
                    'toast_messages.add_success'
                  ),
                });
              }
            });
        },
        validate: (input: RequerimientosSubsanacion) => {
          return Object.values(input).some((x) => x === null || x === '');
        },
        disabled: true,
      },
      {
        label: this.translocoService.translate('buttons.cancel'),
        action: () => {
          this.addDialogRef?.close();
        },
        disabled: false,
      },
    ];

    const inputFields: InputField[] = [
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_id'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'codigo',
      },
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_description'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'derequerimiento',
      },
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_descriptionVal'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'derequerimientoVal',
      },
    ];
    const inputValues: RequerimientosSubsanacion = {
      codigo: '',
      derequerimiento: '',
      derequerimientoVal: '',
    };
    const addDialogConfig: GenericDialog = {
      header: this.translocoService.translate('dialog_header.add', {
        title: this.translocoService.translate(
          'requerimientosSubsanacion.title'
        ),
      }),
      width: '50%',
      contentStyle: {
        overflow: 'none',
      },
      closable: false,
      baseZIndex: 10000,
      data: {
        inputValues: inputValues,
        actionButtons: actionButtons,
        inputFields: inputFields,
      },
      styleClass: 'dialogStyle',
      showHeader: true,
    };
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }

  openUpdateDialog(requerimientosDetails: RequerimientosSubsanacion) {
    const updateHandler = (input: RequerimientosSubsanacion) => {
      this.requerimientosSubsanacionService
        .updateRequerimientosSubsanacion(input)
        .subscribe((data: CustomResponse<RequerimientosSubsanacion>) => {
          if (data.success === false && data.errorCode) {
            this.openAlertDialog(
              this.translocoService.translate('errors.' + data.errorCode),
              'warn'
            );
          } else {
            this.fetchAllRequerimientosSubsanacion();
            this.updateDialogRef?.close();
            this.messageService.add({
              severity: 'success',
              summary: this.translocoService.translate(
                'requerimientosSubsanacion.title'
              ),
              detail: this.translocoService.translate(
                'toast_messages.update_success'
              ),
            });
          }
        });
    };
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.update'),
        action: (input: RequerimientosSubsanacion) => {
          this.openAlertDialog(
            this.translocoService.translate('dialog_content.modify_alert'),
            'confirm',
            updateHandler,
            input
          );
        },
        disabled: false,
      },
      {
        label: this.translocoService.translate('buttons.cancel'),
        action: () => {
          this.updateDialogRef?.close();
        },
        disabled: false,
      },
    ];

    const inputFields: InputField[] = [
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_id'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'codigo',
        disabled: true,
      },
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_description'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'derequerimiento',
      },
      {
        label: `${this.translocoService.translate(
          'requerimientosSubsanacion.field_descriptionVal'
        )}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'derequerimientoVal',
      },
    ];
    const updateDialogConfig: GenericDialog = {
      header: this.translocoService.translate('dialog_header.update', {
        title: this.translocoService.translate(
          'requerimientosSubsanacion.title'
        ),
      }),
      width: '50%',
      contentStyle: {
        overflow: 'none',
      },
      closable: false,
      baseZIndex: 10000,
      data: {
        inputValues: { ...requerimientosDetails },
        actionButtons: actionButtons,
        inputFields: inputFields,
      },
      styleClass: 'dialogStyle',
      showHeader: true,
    };
    this.updateDialogRef = this.dialogService.open(
      AlertDialogComponent,
      updateDialogConfig
    );
  }

  onDeleteHandler(requerimientosDetails: RequerimientosSubsanacion) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          this.requerimientosSubsanacionService
            .deleteRequerimientosSubsanacion(requerimientosDetails.codigo)
            .subscribe((data: CustomResponse<RequerimientosSubsanacion>) => {
              if (data.success === false && data.errorCode) {
                this.openAlertDialog(
                  this.translocoService.translate('errors.' + data.errorCode),
                  'warn'
                );
              } else {
                this.fetchAllRequerimientosSubsanacion();
                this.deleteDialogRef?.close();
                this.messageService.add({
                  severity: 'success',
                  summary: this.translocoService.translate(
                    'requerimientosSubsanacion.title'
                  ),
                  detail: this.translocoService.translate(
                    'toast_messages.delete_success'
                  ),
                });
              }
            });
        },
        disabled: false,
      },
      {
        label: this.translocoService.translate('buttons.no'),
        action: () => {
          this.deleteDialogRef?.close();
        },
        disabled: false,
      },
    ];

    const deleteDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: {
        overflow: 'none',
      },
      showHeader: false,
      closable: false,
      baseZIndex: 10000,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: this.translocoService.translate(
          'dialog_content.delete_alert'
        ),
        headerStyle: {
          icon: 'info',
          dialogType: 'confirm',
          title: this.translocoService.translate('dialog_header.delete'),
        },
      },
    };
    this.deleteDialogRef = this.dialogService.open(
      AlertDialogComponent,
      deleteDialogConfig
    );
  }

  openAlertDialog(
    alertMessage: string,
    dialogType: string,
    callback?: (input?: any) => void,
    requerimientosDetails?: RequerimientosSubsanacion
  ) {
    const actionButtons: ActionButtons[] =
      dialogType === 'confirm'
        ? [
            {
              label: this.translocoService.translate('buttons.yes'),
              action: () => {
                if (callback && requerimientosDetails)
                  callback(requerimientosDetails);
                this.alertDialogRef?.close();
              },
              disabled: false,
            },
            {
              label: this.translocoService.translate('buttons.no'),
              action: () => {
                this.alertDialogRef?.close();
              },
              disabled: false,
            },
          ]
        : [
            {
              label: this.translocoService.translate('buttons.accept'),
              action: () => {
                this.alertDialogRef?.close();
              },
              disabled: false,
            },
          ];

    const alertDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: {
        overflow: 'none',
      },
      showHeader: false,
      baseZIndex: 20000,
      closable: false,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: alertMessage,
        headerStyle: {
          icon: 'report_problem',
          dialogType: dialogType,
          title: this.translocoService.translate('dialog_header.alert'),
        },
      },
    };
    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      alertDialogConfig
    );
  }
}
