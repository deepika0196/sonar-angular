import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslocoService } from '@ngneat/transloco';
import {
  PaginatorConfig,
  TableConfig,
} from '@shared/components/generic-table/generic-table.config';
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';
import { CampoDeActuacionService } from '@app/basic-maintenance/services/campo-de-actuacion.service';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';
import {
  ActionButtons,
  GenericDialog,
  InputField,
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-campo-de-actuacion',
  templateUrl: './campo-de-actuacion.component.html',
  styleUrls: ['./campo-de-actuacion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class CampoDeActuacionComponent implements OnInit, OnDestroy {
  campoDeActuacions: CampoDeActuacion[];
  cloneCampoDeActuacionRecords: CampoDeActuacion[];
  fieldIdLabel = 'campoDeActuacion.field_id';
  fieldDescription = 'campoDeActuacion.field_description';
  fieldDescriptionVal = 'campoDeActuacion.field_descriptionVal';
  campoDeActuacionTitle = 'campoDeActuacion.title';
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
      header: this.fieldIdLabel,
      sortable: true,
      class: 'table-col-width-fix',
    },
    {
      field: 'deseccion',
      header: this.fieldDescription,
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'deseccionVal',
      header: this.fieldDescriptionVal,
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'action',
      header: 'actions.acciones',
      sortable: false,
      class: 'table-col-width-fix',
    },
  ];
  private readonly subscription = new Subject<void>();

  constructor(
    private readonly campoDeActuacionService: CampoDeActuacionService,
    private readonly messageService: MessageService,
    private readonly dialogService: DialogService,
    private readonly translocoService: TranslocoService
  ) {}

  codigo = '';

  deseccion = '';

  deseccionVal = '';

  ngOnInit() {
    this.fetchAllCamposDeActuacion();
  }

  fetchAllCamposDeActuacion() {
    this.campoDeActuacionService
      .getCampoDeActuacions()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data: { response: CampoDeActuacion[] }) => {
          this.campoDeActuacions = data.response;
          this.cloneCampoDeActuacionRecords = data.response;
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
  }

  clearAll() {
    this.codigo = '';
    this.deseccion = '';
    this.deseccionVal = '';
    this.campoDeActuacions = [...this.cloneCampoDeActuacionRecords];
  }

  filterHandler() {
    const values = this.cloneCampoDeActuacionRecords.filter(
      (obj: CampoDeActuacion) => {
        let result = false;
        if (obj?.codigo) {
          result = obj.codigo
            .toLowerCase()
            .includes(this.codigo.trim().toLowerCase());
        }
        if (obj?.deseccion) {
          result =
            result &&
            obj.deseccion
              .toLowerCase()
              .includes(this.deseccion.trim().toLowerCase());
        }
        if (obj?.deseccionVal) {
          result =
            result &&
            obj.deseccionVal
              ?.toLowerCase()
              .includes(this.deseccionVal.trim().toLowerCase());
        }
        return result;
      }
    );
    this.campoDeActuacions = [...values];
  }

  openAddDialog() {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.save'),
        action: (input: CampoDeActuacion) => {
          this.campoDeActuacionService
            .postCampoDeActuacions(input)
            .pipe(takeUntil(this.subscription))
            .subscribe({
              next: (data) => {
                if (data?.success === false && data?.errorCode) {
                  this.openAlertDialog(
                    this.translocoService.translate(
                      'errors.' + data.errorCode.toString()
                    ),
                    'warn'
                  );
                } else {
                  this.fetchAllCamposDeActuacion();
                  this.addDialogRef?.close();
                  this.messageService.add({
                    severity: 'success',
                    summary: this.translocoService.translate(
                      this.campoDeActuacionTitle
                    ),
                    detail: this.translocoService.translate(
                      'toast_messages.add_success'
                    ),
                  });
                }
              },
              error: (err: Error) => console.error(err),
              complete: () => {},
            });
        },
        validate: (input: CampoDeActuacion) => {
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
        label: `${this.translocoService.translate(this.fieldIdLabel)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'codigo',
        maxLength: 10,
      },
      {
        label: `${this.translocoService.translate(this.fieldDescription)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'deseccion',
      },
      {
        label: `${this.translocoService.translate(this.fieldDescriptionVal)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'deseccionVal',
      },
    ];
    const inputValues: CampoDeActuacion = {
      codigo: '',
      deseccion: '',
      deseccionVal: '',
    };
    const addDialogConfig: GenericDialog = {
      header: this.translocoService.translate('dialog_header.add', {
        title: this.translocoService.translate('campoDeActuacion.dialog_title'),
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

  openUpdateDialog(campoDetails: any) {
    const updateHandler = (input: CampoDeActuacion) => {
      this.campoDeActuacionService
        .updateCampoDeActuacions(input)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            if (data?.success === false && data?.errorCode) {
              this.openAlertDialog(
                this.translocoService.translate(
                  'errors.' + data.errorCode.toString()
                ),
                'warn'
              );
            } else {
              this.fetchAllCamposDeActuacion();
              this.updateDialogRef?.close();
              this.messageService.add({
                severity: 'success',
                summary: this.translocoService.translate(
                  this.campoDeActuacionTitle
                ),
                detail: this.translocoService.translate(
                  'toast_messages.update_success'
                ),
              });
            }
          },
          error: (err: Error) => console.error(err),
          complete: () => {},
        });
    };

    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.update'),
        action: (input: CampoDeActuacion) => {
          this.openAlertDialog(
            this.translocoService.translate('dialog_content.modify_alert'),
            'confirm',
            updateHandler,
            input
          );
        },
        validate: (input: CampoDeActuacion) => {
          return Object.values(input).some((x) => x === null || x === '');
        },
        disabled: true,
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
        label: `${this.translocoService.translate(this.fieldIdLabel)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'codigo',
        disabled: true,
      },
      {
        label: `${this.translocoService.translate(this.fieldDescription)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'deseccion',
      },
      {
        label: `${this.translocoService.translate(this.fieldDescriptionVal)}*`,
        required_msg: this.translocoService.translate('required_text'),
        name: 'deseccionVal',
      },
    ];

    const updateDialogConfig: GenericDialog = {
      header: this.translocoService.translate('dialog_header.update', {
        title: this.translocoService.translate(this.campoDeActuacionTitle),
      }),
      width: '50%',
      contentStyle: {
        overflow: 'none',
      },
      closable: false,
      baseZIndex: 10000,
      data: {
        inputValues: { ...campoDetails },
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

  onDeleteHandler(campoDetails: CampoDeActuacion) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          this.campoDeActuacionService
            .deleteCampoDeActuacions(campoDetails.codigo)
            .pipe(takeUntil(this.subscription))
            .subscribe({
              next: (data) => {
                if (data?.success === false && data?.errorCode) {
                  this.openAlertDialog(
                    this.translocoService.translate(
                      'errors.' + data.errorCode.toString()
                    ),
                    'warn'
                  );
                } else {
                  this.fetchAllCamposDeActuacion();
                  this.deleteDialogRef?.close();
                  this.messageService.add({
                    severity: 'success',
                    summary: this.translocoService.translate(
                      this.campoDeActuacionTitle
                    ),
                    detail: this.translocoService.translate(
                      'toast_messages.delete_success'
                    ),
                  });
                }
              },
              error: (err: Error) => console.error(err),
              complete: () => {},
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
    campoDetails?: CampoDeActuacion
  ) {
    const actionButtons: ActionButtons[] =
      dialogType === 'confirm'
        ? [
            {
              label: this.translocoService.translate('buttons.yes'),
              icon: 'check',
              action: () => {
                if (callback && campoDetails) callback(campoDetails);
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
          icon: dialogType === 'confirm' ? 'info' : 'report_problem',
          dialogType: dialogType,
          title:
            dialogType === 'confirm'
              ? this.translocoService.translate('dialog_header.delete')
              : this.translocoService.translate('dialog_header.alert'),
        },
      },
    };
    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      alertDialogConfig
    );
  }

  ngOnDestroy(): void {
    this.campoDeActuacions = [];
    this.cloneCampoDeActuacionRecords = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
