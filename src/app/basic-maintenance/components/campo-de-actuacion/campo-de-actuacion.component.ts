import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslocoService } from '@ngneat/transloco';
import {
  PaginatorConfig,
  TableConfig,
} from '@shared/components/generic-table/generic-table.config';
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';
import { CampoDeActuacionService } from '@app/basic-maintenance/services/campo-de-actuacion.service';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';
@Component({
  selector: 'app-campo-de-actuacion',
  templateUrl: './campo-de-actuacion.component.html',
  styleUrls: ['./campo-de-actuacion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class CampoDeActuacionComponent implements OnInit {
  campoDeActuacions: CampoDeActuacion[];
  cloneCampoDeActuacionRecords: CampoDeActuacion[];

  statuses: SelectItem[];

  clonedCampoDeActuacion: {
    [s: string]: CampoDeActuacion;
  } = {};

  addDialogRef: DynamicDialogRef | undefined;
  updateDialogRef: DynamicDialogRef | undefined;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;

  first = 0;
  rows = 10;
  visible = false;

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
      header: 'campoDeActuacion.field_id',
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'deseccion',
      header: 'campoDeActuacion.field_description',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'deseccionVal',
      header: 'campoDeActuacion.field_descriptionVal',
      sortable: false,
      class: 'table-col-width',
    },
  ];

  constructor(
    private campoDeActuacionService: CampoDeActuacionService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private translocoService: TranslocoService // private ref: DynamicDialogRef
  ) {}

  codigo = '';

  deseccion = '';

  deseccionVal = '';

  ngOnInit() {
    this.campoDeActuacionService
      .getCampoDeActuacions()
      .subscribe((data: any) => {
        const { response: res } = data;
        console.log(res, data, 'data');
        this.campoDeActuacions = res;
        this.cloneCampoDeActuacionRecords = res;
      });
    // .then((res) => {
    //   this.campoDeActuacions = res;
    //   this.cloneCampoDeActuacionRecords = res;
    // });
  }

  clearAll() {
    this.codigo = '';
    this.deseccion = '';
    this.deseccionVal = '';
    this.campoDeActuacions = [...this.cloneCampoDeActuacionRecords];
  }

  filterHandler() {
    const values = this.cloneCampoDeActuacionRecords.filter(
      (obj: CampoDeActuacion) =>
        obj.codigo
          ?.toString()
          .toLowerCase()
          .includes(this.codigo.trim().toLowerCase()) &&
        obj.deseccion
          ?.toLowerCase()
          .includes(this.deseccion.trim().toLowerCase()) &&
        obj.deseccionVal
          ?.toLowerCase()
          .includes(this.deseccionVal.trim().toLowerCase())
    );
    this.campoDeActuacions = [...values];
  }

  openAddDialog() {
    this.addDialogRef = this.dialogService.open(AlertDialogComponent, {
      header: this.translocoService.translate(
        'campoDeActuacion.add_dialog_header'
      ),
      width: '50%',
      contentStyle: {
        overflow: 'none',
      },
      closable: false,
      baseZIndex: 10000,
      // height: "50%",
      data: {
        inputValues: {
          codigo: 0,
          deseccion: '',
          deseccionVal: '',
        },
        actionButtons: [
          {
            label: this.translocoService.translate(
              'campoDeActuacion.save_button'
            ),
            action: (input: any) => {
              console.log('add', input);
              // this.campoDeActuacionService
              //   .postCampoDeActuacions(input)
              //   .subscribe((data) => {
              //     console.log(data);
              //   });
              this.addDialogRef?.close();
              this.messageService.add({
                severity: 'info',
                summary: 'Campos De Actuacion',
                detail: 'New Record Saved',
              });
            },
            validate: (input: any) => {
              return Object.values(input).some((x) => x === null || x === '');
            },
            disabled: true,
          },
          {
            label: this.translocoService.translate(
              'campoDeActuacion.cancel_button'
            ),
            action: (input: any) => {
              console.log('cancel', input);
              // this.ref.close();
              this.openAlertDialog(
                this.translocoService.translate('campoDeActuacion.insert_alert')
              );
            },
            disabled: false,
          },
        ],
        inputFields: [
          {
            label: `${this.translocoService.translate(
              'campoDeActuacion.field_description'
            )}*`,
            required_msg: this.translocoService.translate(
              'campoDeActuacion.required_text'
            ),
            name: 'deseccion',
          },
          {
            label: `${this.translocoService.translate(
              'campoDeActuacion.field_descriptionVal'
            )}*`,
            required_msg: this.translocoService.translate(
              'campoDeActuacion.required_text'
            ),
            name: 'deseccionVal',
          },
        ],
      },
      styleClass: 'dialogStyle',
    });
  }

  openUpdateDialog(campoDetails: any) {
    this.updateDialogRef = this.dialogService.open(AlertDialogComponent, {
      header: this.translocoService.translate(
        'campoDeActuacion.update_dialog_header'
      ),
      width: '50%',
      contentStyle: {
        overflow: 'none',
      },
      closable: false,
      baseZIndex: 10000,
      // height: "50%",
      data: {
        inputValues: campoDetails,
        actionButtons: [
          {
            label: this.translocoService.translate(
              'campoDeActuacion.update_button'
            ),
            action: (input: any) => {
              this.campoDeActuacionService
                .updateCampoDeActuacions(input)
                .subscribe((data) => {});
              // this.openAlertDialog(
              //   this.translocoService.translate("campoDeActuacion.insert_alert")
              // );
              this.updateDialogRef?.close();
            },
            disabled: false,
          },
          {
            label: this.translocoService.translate(
              'campoDeActuacion.cancel_button'
            ),
            action: (input: any) => {
              console.log('cancel', input);
              this.updateDialogRef?.close();
            },
            disabled: false,
          },
        ],
        inputFields: [
          {
            label: `${this.translocoService.translate(
              'campoDeActuacion.field_description'
            )}*`,
            required_msg: this.translocoService.translate(
              'campoDeActuacion.required_text'
            ),
            name: 'deseccion',
          },
          {
            label: `${this.translocoService.translate(
              'campoDeActuacion.field_descriptionVal'
            )}*`,
            required_msg: this.translocoService.translate(
              'campoDeActuacion.required_text'
            ),
            name: 'deseccionVal',
          },
        ],
      },
      styleClass: 'dialogStyle',
      // footer: "hell0",
    });

    this.updateDialogRef.onClose.subscribe((campoDetails: any) => {
      if (campoDetails) {
        this.messageService.add({
          severity: 'info',
          summary: 'campoDetails Selected',
          detail: campoDetails.name,
        });
      }
    });
  }

  onDeleteHandler(campoDetails: any) {
    this.deleteDialogRef = this.dialogService.open(AlertDialogComponent, {
      width: '40%',
      contentStyle: {
        overflow: 'none',
      },
      showHeader: false,

      baseZIndex: 10000,
      // height: "40%",
      styleClass: 'dialogStyle',
      data: {
        actionButtons: [
          {
            label: this.translocoService.translate(
              'campoDeActuacion.yes_button'
            ),
            icon: 'pi pi-check',
            action: (input: any) => {
              console.log('delete');
              // this.campoDeActuacionService
              //   .deleteCampoDeActuacions(campoDetails)
              //   .subscribe((data) => {
              //     console.log(data);
              //   });
              // this.openAlertDialog(
              //   this.translocoService.translate("campoDeActuacion.delete_alert")
              // );
              this.deleteDialogRef?.close();
            },
            disabled: false,
          },
          {
            label: this.translocoService.translate(
              'campoDeActuacion.no_button'
            ),
            action: () => {
              console.log('cancel');
              this.deleteDialogRef?.close();
            },
            disabled: false,
          },
        ],
        alertMessage: this.translocoService.translate(
          'campoDeActuacion.delete_existing_alert'
        ),
        headerStyle: {
          icon: 'pi pi-info-circle',
          type: 'info',
          text: this.translocoService.translate(
            'campoDeActuacion.delete_dialog_header'
          ),
        },
      },
    });

    this.deleteDialogRef.onClose.subscribe((campoDetails: any) => {
      if (campoDetails) {
        this.messageService.add({
          severity: 'info',
          summary: 'campoDetails Selected',
          detail: campoDetails.name,
        });
      }
    });
  }

  openAlertDialog(alertMessage: string) {
    this.alertDialogRef = this.dialogService.open(AlertDialogComponent, {
      width: '40%',
      contentStyle: {
        overflow: 'none',
      },
      showHeader: false,
      // position: "left",
      baseZIndex: 20000,
      // height: "40%",
      styleClass: 'dialogStyle',
      data: {
        actionButtons: [
          {
            label: this.translocoService.translate(
              'campoDeActuacion.yes_button'
            ),
            action: (input: any) => {
              console.log('delete');
              // this.campoDeActuacionService
              //   .deleteCampoDeActuacions(input)
              //   .subscribe((data) => {
              //     console.log(data);
              //   });
              this.alertDialogRef?.close();
            },
            disabled: false,
          },
          {
            label: this.translocoService.translate(
              'campoDeActuacion.no_button'
            ),
            action: () => {
              console.log('cancel');
              this.alertDialogRef?.close();
            },
            disabled: false,
          },
        ],
        alertMessage: alertMessage,
        headerStyle: {
          icon: 'pi pi-exclamation-triangle',
          type: 'warn',
          text: this.translocoService.translate(
            'campoDeActuacion.alert_dialog_header'
          ),
        },
      },
    });
  }
}
