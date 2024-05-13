import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';
import { CampoDeActuacionService } from '@app/basic-maintenance/services/campo-de-actuacion.service';
import {
  Entidad,
  Municipio,
  Provincia,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import { SolicitudDeInscripcionService } from '@app/files/services/solicitud-de-inscripcion.service';
import { SolicitudeMunicipioService } from '@app/files/services/solicitude-municipio.service';
import { SolicitudeProvinciaService } from '@app/files/services/solicitude-provincia.service';
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
import { TranslocoService } from '@ngneat/transloco';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-solicitud-de-inscripcion-search',
  templateUrl: './solicitud-de-inscripcion-search.component.html',
  styleUrls: ['./solicitud-de-inscripcion-search.component.scss'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class SolicitudDeInscripcionSearchComponent
  implements OnInit, OnDestroy
{
  solicitudDeInscripcions: Entidad[];
  cloneSolicitudDeInscripcionRecords: Entidad[];

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
    showRestore: false,
    showArchive: true,
  };

  paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    currentPageReportTemplate: '',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  columns = [
    {
      field: 'nifcif',
      header: 'solicitudDeInscripcion.cif',
      sortable: true,
      class: 'table-col-width-fix',
    },
    {
      field: 'denomsocial',
      header: 'solicitudDeInscripcion.business_name',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'codpro',
      header: 'solicitudDeInscripcion.province',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'deseccionVal',
      header: 'solicitudDeInscripcion.municipality',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'numinscripcion',
      header: 'solicitudDeInscripcion.registration_no',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'feentrada',
      header: 'solicitudDeInscripcion.application_date',
      sortable: false,
      class: 'table-col-width',
      pipe: 'dd/MM/yyyy',
    },
    {
      field: 'fbaja',
      header: 'solicitudDeInscripcion.low_date',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'deseccionVal',
      header: 'solicitudDeInscripcion.NIF/CIF_legal_representative',
      sortable: false,
      class: 'table-col-width',
    },
  ];
  private subscription = new Subject<void>();
  countries: any[];

  selectedCountry: any;
  date: Date;
  checked: boolean;
  solicitudDeInscripcionForm;
  provinciaList: Provincia[] = [];
  municipioList: Municipio[] = [];

  constructor(
    private solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private translocoService: TranslocoService
  ) {
    this.solicitudDeInscripcionForm = new FormGroup({
      cif: new FormControl(null),
      razonSocial: new FormControl(null),
      nRegistro: new FormControl(null),
      fechaSolicitud: new FormControl(null),
      incluirExpedientesBaja: new FormControl(null),
      fechaBaja: new FormControl(null),
      provincia: new FormControl(null),
      municipio: new FormControl(null),
      representanteLegal: new FormControl(null),
    });
  }

  codigo = '';

  deseccion = '';

  deseccionVal = '';

  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
    this.fetchAllSolicitudDeInscripcion();
    this.fetchAllProvincia();
  }

  fetchAllSolicitudDeInscripcion() {
    this.solicitudDeInscripcionService
      .getSolicitudDeInscripcions()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.solicitudDeInscripcions = data.response;
          this.cloneSolicitudDeInscripcionRecords = data.response;
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
  }

  fetchAllProvincia() {
    this.solicitudProvinciaService
      .getProvincia()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.provinciaList = data.response;
        },
        error: (err: Error) => console.error(err),
      });
  }

  onProvinciaSelected(selectedProvincia: Provincia) {
    console.log('ss', selectedProvincia);
    this.solicitudeMunicipioService
      .getMunicipio(selectedProvincia.provCodProvincia)
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.municipioList = data.response;
        },
        error: (err: Error) => console.error(err),
      });
  }

  clearAll() {
    this.codigo = '';
    this.deseccion = '';
    this.deseccionVal = '';
    this.solicitudDeInscripcions = [...this.cloneSolicitudDeInscripcionRecords];
  }

  filterHandler() {
    const values = this.cloneSolicitudDeInscripcionRecords.filter(
      (obj: Entidad) => {
        // let result = false;
        // if (obj.codigo) {
        //   result = obj.codigo
        //     .toLowerCase()
        //     .includes(this.codigo.trim().toLowerCase());
        // }
        // if (obj.deseccion) {
        //   result =
        //     result &&
        //     obj.deseccion
        //       .toLowerCase()
        //       .includes(this.deseccion.trim().toLowerCase());
        // }
        // if (obj.deseccionVal) {
        //   result =
        //     result &&
        //     obj.deseccionVal
        //       ?.toLowerCase()
        //       .includes(this.deseccionVal.trim().toLowerCase());
        // }
        return false;
      }
    );
    this.solicitudDeInscripcions = [...values];
  }

  openAddDialog() {
    // const actionButtons: ActionButtons[] = [
    //   {
    //     label: this.translocoService.translate('buttons.save'),
    //     action: (input: CampoDeActuacion) => {
    //       this.campoDeActuacionService
    //         .postCampoDeActuacions(input)
    //         .pipe(takeUntil(this.subscription))
    //         .subscribe({
    //           next: (data) => {
    //             if (data.success === false && data.errorCode) {
    //               this.openAlertDialog(
    //                 this.translocoService.translate('errors.' + data.errorCode),
    //                 'warn'
    //               );
    //             } else {
    //               this.fetchAllCamposDeActuacion();
    //               this.addDialogRef?.close();
    //               this.messageService.add({
    //                 severity: 'success',
    //                 summary: this.translocoService.translate(
    //                   'campoDeActuacion.title'
    //                 ),
    //                 detail: this.translocoService.translate(
    //                   'toast_messages.add_success'
    //                 ),
    //               });
    //             }
    //           },
    //           error: (err: Error) => console.error(err),
    //           complete: () => {},
    //         });
    //     },
    //     validate: (input: CampoDeActuacion) => {
    //       return Object.values(input).some((x) => x === null || x === '');
    //     },
    //     disabled: true,
    //   },
    //   {
    //     label: this.translocoService.translate('buttons.cancel'),
    //     action: () => {
    //       this.addDialogRef?.close();
    //     },
    //     disabled: false,
    //   },
    // ];
    // const inputFields: InputField[] = [
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_id'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'codigo',
    //     maxLength: 10,
    //   },
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_description'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'deseccion',
    //   },
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_descriptionVal'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'deseccionVal',
    //   },
    // ];
    // const inputValues: CampoDeActuacion = {
    //   codigo: '',
    //   deseccion: '',
    //   deseccionVal: '',
    // };
    // const addDialogConfig: GenericDialog = {
    //   header: this.translocoService.translate('dialog_header.add', {
    //     title: this.translocoService.translate('campoDeActuacion.title'),
    //   }),
    //   width: '50%',
    //   contentStyle: {
    //     overflow: 'none',
    //   },
    //   closable: false,
    //   baseZIndex: 10000,
    //   data: {
    //     inputValues: inputValues,
    //     actionButtons: actionButtons,
    //     inputFields: inputFields,
    //   },
    //   styleClass: 'dialogStyle',
    //   showHeader: true,
    // };
    // this.addDialogRef = this.dialogService.open(
    //   AlertDialogComponent,
    //   addDialogConfig
    // );
  }

  openUpdateDialog(campoDetails: any) {
    // const updateHandler = (input: CampoDeActuacion) => {
    //   this.campoDeActuacionService
    //     .updateCampoDeActuacions(input)
    //     .pipe(takeUntil(this.subscription))
    //     .subscribe({
    //       next: (data) => {
    //         if (data.success === false && data.errorCode) {
    //           this.openAlertDialog(
    //             this.translocoService.translate('errors.' + data.errorCode),
    //             'warn'
    //           );
    //         } else {
    //           this.fetchAllCamposDeActuacion();
    //           this.updateDialogRef?.close();
    //           this.messageService.add({
    //             severity: 'success',
    //             summary: this.translocoService.translate(
    //               'campoDeActuacion.title'
    //             ),
    //             detail: this.translocoService.translate(
    //               'toast_messages.update_success'
    //             ),
    //           });
    //         }
    //       },
    //       error: (err: Error) => console.error(err),
    //       complete: () => {},
    //     });
    // };
    // const actionButtons: ActionButtons[] = [
    //   {
    //     label: this.translocoService.translate('buttons.update'),
    //     action: (input: CampoDeActuacion) => {
    //       this.openAlertDialog(
    //         this.translocoService.translate('dialog_content.modify_alert'),
    //         'confirm',
    //         updateHandler,
    //         input
    //       );
    //     },
    //     validate: (input: CampoDeActuacion) => {
    //       return Object.values(input).some((x) => x === null || x === '');
    //     },
    //     disabled: true,
    //   },
    //   {
    //     label: this.translocoService.translate('buttons.cancel'),
    //     action: () => {
    //       this.updateDialogRef?.close();
    //     },
    //     disabled: false,
    //   },
    // ];
    // const inputFields: InputField[] = [
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_id'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'codigo',
    //     disabled: true,
    //   },
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_description'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'deseccion',
    //   },
    //   {
    //     label: `${this.translocoService.translate(
    //       'campoDeActuacion.field_descriptionVal'
    //     )}*`,
    //     required_msg: this.translocoService.translate('required_text'),
    //     name: 'deseccionVal',
    //   },
    // ];
    // const updateDialogConfig: GenericDialog = {
    //   header: this.translocoService.translate('dialog_header.update', {
    //     title: this.translocoService.translate('campoDeActuacion.title'),
    //   }),
    //   width: '50%',
    //   contentStyle: {
    //     overflow: 'none',
    //   },
    //   closable: false,
    //   baseZIndex: 10000,
    //   data: {
    //     inputValues: { ...campoDetails },
    //     actionButtons: actionButtons,
    //     inputFields: inputFields,
    //   },
    //   styleClass: 'dialogStyle',
    //   showHeader: true,
    // };
    // this.updateDialogRef = this.dialogService.open(
    //   AlertDialogComponent,
    //   updateDialogConfig
    // );
  }

  onDeleteHandler(campoDetails: Entidad) {
    // const actionButtons: ActionButtons[] = [
    //   {
    //     label: this.translocoService.translate('buttons.yes'),
    //     icon: 'check',
    //     action: () => {
    //       this.campoDeActuacionService
    //         .deleteCampoDeActuacions(campoDetails.codigo)
    //         .pipe(takeUntil(this.subscription))
    //         .subscribe({
    //           next: (data) => {
    //             if (data.success === false && data.errorCode) {
    //               this.openAlertDialog(
    //                 this.translocoService.translate('errors.' + data.errorCode),
    //                 'warn'
    //               );
    //             } else {
    //               this.fetchAllCamposDeActuacion();
    //               this.deleteDialogRef?.close();
    //               this.messageService.add({
    //                 severity: 'success',
    //                 summary: this.translocoService.translate(
    //                   'campoDeActuacion.title'
    //                 ),
    //                 detail: this.translocoService.translate(
    //                   'toast_messages.delete_success'
    //                 ),
    //               });
    //             }
    //           },
    //           error: (err: Error) => console.error(err),
    //           complete: () => {},
    //         });
    //     },
    //     disabled: false,
    //   },
    //   {
    //     label: this.translocoService.translate('buttons.no'),
    //     action: () => {
    //       this.deleteDialogRef?.close();
    //     },
    //     disabled: false,
    //   },
    // ];
    // const deleteDialogConfig: GenericDialog = {
    //   width: '40%',
    //   contentStyle: {
    //     overflow: 'none',
    //   },
    //   showHeader: false,
    //   closable: false,
    //   baseZIndex: 10000,
    //   styleClass: 'dialogStyle',
    //   data: {
    //     actionButtons: actionButtons,
    //     alertMessage: this.translocoService.translate(
    //       'dialog_content.delete_alert'
    //     ),
    //     headerStyle: {
    //       icon: 'info',
    //       dialogType: 'confirm',
    //       title: this.translocoService.translate('dialog_header.delete'),
    //     },
    //   },
    // };
    // this.deleteDialogRef = this.dialogService.open(
    //   AlertDialogComponent,
    //   deleteDialogConfig
    // );
  }

  openAlertDialog(
    alertMessage: string,
    dialogType: string,
    callback?: (input?: any) => void,
    campoDetails?: CampoDeActuacion
  ) {
    // const actionButtons: ActionButtons[] =
    //   dialogType === 'confirm'
    //     ? [
    //         {
    //           label: this.translocoService.translate('buttons.yes'),
    //           icon: 'check',
    //           action: () => {
    //             if (callback && campoDetails) callback(campoDetails);
    //             this.alertDialogRef?.close();
    //           },
    //           disabled: false,
    //         },
    //         {
    //           label: this.translocoService.translate('buttons.no'),
    //           action: () => {
    //             this.alertDialogRef?.close();
    //           },
    //           disabled: false,
    //         },
    //       ]
    //     : [
    //         {
    //           label: this.translocoService.translate('buttons.accept'),
    //           action: () => {
    //             this.alertDialogRef?.close();
    //           },
    //           disabled: false,
    //         },
    //       ];
    // const alertDialogConfig: GenericDialog = {
    //   width: '40%',
    //   contentStyle: {
    //     overflow: 'none',
    //   },
    //   showHeader: false,
    //   baseZIndex: 20000,
    //   closable: false,
    //   styleClass: 'dialogStyle',
    //   data: {
    //     actionButtons: actionButtons,
    //     alertMessage: alertMessage,
    //     headerStyle: {
    //       icon: dialogType === 'confirm' ? 'info' : 'report_problem',
    //       dialogType: dialogType,
    //       title:
    //         dialogType === 'confirm'
    //           ? this.translocoService.translate('dialog_header.delete')
    //           : this.translocoService.translate('dialog_header.alert'),
    //     },
    //   },
    // };
    // this.alertDialogRef = this.dialogService.open(
    //   AlertDialogComponent,
    //   alertDialogConfig
    // );
  }

  ngOnDestroy(): void {
    this.solicitudDeInscripcions = [];
    this.cloneSolicitudDeInscripcionRecords = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
