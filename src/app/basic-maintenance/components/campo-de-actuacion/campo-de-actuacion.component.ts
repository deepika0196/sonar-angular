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
import {
  ActionButtons,
  GenericDialog,
  InputField,
} from '@app/basic-maintenance/interfaces/action-buttons';
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
    this.fetchAllCamposDeActuacion();
  }

  fetchAllCamposDeActuacion() {
    this.campoDeActuacionService
      .getCampoDeActuacions()
      .subscribe((data: any) => {
        const { response: res } = data;
        this.campoDeActuacions = res;
        this.cloneCampoDeActuacionRecords = res;
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
      (obj: CampoDeActuacion) =>
        obj.codigo?.toLowerCase().includes(this.codigo.trim().toLowerCase()) &&
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
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('campoDeActuacion.save_button'),
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
          this.addDialogRef?.close();
          // this.ref.close();
          // this.openAlertDialog(
          //   this.translocoService.translate('campoDeActuacion.insert_alert')
          // );
        },
        disabled: false,
      },
    ];

    const inputFields: InputField[] = [
      {
        label: `${this.translocoService.translate(
          'campoDeActuacion.field_id'
        )}*`,
        required_msg: this.translocoService.translate(
          'campoDeActuacion.required_text'
        ),
        name: 'codigo',
      },
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
    ];
    const inputValues: CampoDeActuacion = {
      codigo: '',
      deseccion: '',
      deseccionVal: '',
    };
    const addDialogConfig: GenericDialog = {
      header: this.translocoService.translate(
        'campoDeActuacion.add_dialog_header'
      ),
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
    };
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }

  openUpdateDialog(campoDetails: any) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate(
          'campoDeActuacion.update_button'
        ),
        action: (input: any) => {
          const updateService =
            this.campoDeActuacionService.postCampoDeActuacions(input);
          // .subscribe((data) => {
          //   console.log(data, 'rrss');
          //   this.fetchAllCamposDeActuacion();
          // });
          this.openAlertDialog(
            this.translocoService.translate('campoDeActuacion.modify_alert'),
            'confirm',
            'update',
            input
          );
          // this.updateDialogRef?.close();
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
    ];

    const inputFields: InputField[] = [
      {
        label: `${this.translocoService.translate(
          'campoDeActuacion.field_id'
        )}*`,
        required_msg: this.translocoService.translate(
          'campoDeActuacion.required_text'
        ),
        name: 'codigo',
        disabled: true,
      },
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
    ];
    const updateDialogConfig: GenericDialog = {
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
        actionButtons: actionButtons,
        inputFields: inputFields,
      },
      styleClass: 'dialogStyle',
    };
    this.updateDialogRef = this.dialogService.open(
      AlertDialogComponent,
      updateDialogConfig
    );
  }

  onDeleteHandler(campoDetails: any) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('campoDeActuacion.yes_button'),
        icon: 'pi pi-check',
        action: (input: any) => {
          console.log('delete');
          this.campoDeActuacionService
            .deleteCampoDeActuacions(campoDetails)
            .subscribe((data) => {
              console.log(data);
              // if (error) {
              // this.openAlertDialog(
              //   this.translocoService.translate("campoDeActuacion.delete_alert"),
              // 'warn',
              //   ""
              // );
              // } else {
              // this.fetchAllCamposDeActuacion()
              // }
            });

          this.deleteDialogRef?.close();
        },
        disabled: false,
      },
      {
        label: this.translocoService.translate('campoDeActuacion.no_button'),
        action: () => {
          console.log('cancel');
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
      // height: "40%",
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: this.translocoService.translate(
          'campoDeActuacion.delete_existing_alert'
        ),
        headerStyle: {
          icon: 'pi pi-info-circle',
          dialogType: 'confirm',
          title: this.translocoService.translate(
            'campoDeActuacion.delete_dialog_header'
          ),
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
    serviceType: string,
    serviceInput: CampoDeActuacion
  ) {
    const actionButtons =
      dialogType === 'confirm'
        ? [
            {
              label: this.translocoService.translate(
                'campoDeActuacion.yes_button'
              ),
              action: (input: any) => {
                console.log('delesste');
                this.runServiceByType(serviceType, serviceInput);
                // if (service)
                //   service.subscribe((data) => {
                //     console.log(data, 'rrss');
                //     this.fetchAllCamposDeActuacion();
                //   });
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
          ]
        : [
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
          ];

    const alertDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: {
        overflow: 'none',
      },
      showHeader: false,
      // position: "left",
      baseZIndex: 20000,
      // height: "40%",
      closable: false,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: alertMessage,
        headerStyle: {
          icon: 'pi pi-exclamation-triangle',
          dialogType: dialogType,
          title: this.translocoService.translate(
            'campoDeActuacion.alert_dialog_header'
          ),
        },
      },
    };
    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      alertDialogConfig
    );
  }

  runServiceByType(serviceType: string, serviceInput: CampoDeActuacion) {
    switch (serviceType) {
      case 'update':
        this.campoDeActuacionService
          .postCampoDeActuacions(serviceInput)
          .subscribe((data) => {
            console.log(data, 'rrss');
            this.fetchAllCamposDeActuacion();
            this.updateDialogRef?.close();
          });
        break;

      default:
        break;
    }
  }
}
