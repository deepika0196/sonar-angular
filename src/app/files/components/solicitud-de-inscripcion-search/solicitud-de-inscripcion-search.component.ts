import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstant } from '@app/core/constants/globalConstants';
import {
  Entidad,
  EntidadFilter,
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
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import { TableColumns } from '@app/shared/components/generic-table/generic-table.component';
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

  archiveDialogRef: DynamicDialogRef | undefined;
  restoreDialogRef: DynamicDialogRef | undefined;
  dateFormat = GlobalConstant.ddmmyyyy;

  tableConfig: TableConfig = {
    rows: 10,
    styleClass: 'paginator-override',
    paginator: true,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
    showDelete: false,
    showEdit: true,
    showView: true,
    showRestore: true,
    showArchive: true,
  };

  paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    currentPageReportTemplate: '',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  columns: TableColumns[] = [
    {
      field: 'nifcif',
      header: 'solicitudDeInscripcion.cif',
      sortable: false,
      class: 'table-col-width-fix',
    },
    {
      field: 'denomsocial',
      header: 'solicitudDeInscripcion.business_name',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'provDenominacion',
      header: 'solicitudDeInscripcion.province',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'muniDenominacion',
      header: 'solicitudDeInscripcion.municipality',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'numinscripcion',
      header: 'solicitudDeInscripcion.registration_no',
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'feentrada',
      header: 'solicitudDeInscripcion.application_date',
      sortable: true,
      class: 'table-col-width',
      pipe: 'date',
      pipeFormat: 'dd/MM/yyyy',
    },
    {
      field: 'fbaja',
      header: 'solicitudDeInscripcion.low_date',
      sortable: true,
      class: 'table-col-width',
      pipe: 'date',
      pipeFormat: 'dd/MM/yyyy',
    },
    {
      field: 'deseccionVal',
      header: 'solicitudDeInscripcion.NIF_CIF_legal_representative',
      sortable: false,
      class: 'table-col-width',
    },
    {
      field: 'action',
      header: '',
      sortable: false,
      class: 'table-col-width-fix',
    },
  ];
  private subscription = new Subject<void>();
  date: Date;
  checked: boolean;
  disableFechaBaja = true;
  solicitudDeInscripcionForm;
  provinciaList: Provincia[] = [];
  municipioList: Municipio[] = [];

  constructor(
    private solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private translocoService: TranslocoService,
    private router: Router
  ) {
    this.solicitudDeInscripcionForm = new FormGroup({
      cif: new FormControl(null, [Validators.maxLength(9)]),
      razonSocial: new FormControl(null),
      nRegistro: new FormControl(null),
      fechaSolicitud: new FormControl(null),
      incluirExpedientesBaja: new FormControl(null),
      fechaBaja: new FormControl({
        value: null,
        disabled: this.disableFechaBaja,
      }),
      provincia: new FormControl(null),
      municipio: new FormControl(null),
      representanteLegal: new FormControl(null),
    });
  }

  ngOnInit() {
    this.fetchAllSolicitudDeInscripcion();
    this.fetchAllProvincia();
  }

  fetchAllSolicitudDeInscripcion() {
    this.solicitudDeInscripcionService
      .getSolicitudDeInscripcions()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
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

  onProvinciaSelected(selectedProvincia: string) {
    if (selectedProvincia) {
      this.solicitudeMunicipioService
        .getMunicipio(selectedProvincia)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.municipioList = data.response;
          },
          error: (err: Error) => console.error(err),
        });
    } else {
      this.municipioList = [];
    }
  }

  onCheckboxChange(checked: boolean) {
    if (checked) {
      this.solicitudDeInscripcionForm.controls.fechaBaja.enable();
      this.disableFechaBaja = false;
    } else {
      this.solicitudDeInscripcionForm.controls.fechaBaja.disable();
      this.solicitudDeInscripcionForm.get('fechaBaja')?.reset();
      this.disableFechaBaja = true;
    }
  }
  clearAll() {
    this.solicitudDeInscripcionForm.reset();
    this.solicitudDeInscripcions = [...this.cloneSolicitudDeInscripcionRecords];
  }

  convertDateFormat(date: string | null | undefined) {
    if (date) {
      const today = new Date(date);
      const yyyy = today.getFullYear();
      const mm = today.getMonth() + 1; // Months start at 0!
      const dd = today.getDate();
      let month = mm.toString();
      let day = dd.toString();
      if (dd < 10) day = '0' + dd.toString();
      if (mm < 10) month = '0' + mm.toString();

      return day + '-' + month + '-' + yyyy.toString();
    }
    return '';
  }

  filterHandler() {
    const entidadFilterObj: EntidadFilter = {
      nifcif: this.solicitudDeInscripcionForm.value.cif || '',
      denomsocial: this.solicitudDeInscripcionForm.value.razonSocial || '',
      codpro: this.solicitudDeInscripcionForm.value.provincia || '',
      codmun: this.solicitudDeInscripcionForm.value.municipio || '',
      numinscripcion: this.solicitudDeInscripcionForm.value.nRegistro || '',
      feentrada: this.convertDateFormat(
        this.solicitudDeInscripcionForm.value.fechaSolicitud
      ),
      fbaja: this.convertDateFormat(
        this.solicitudDeInscripcionForm.value.fechaBaja
      ),
      representantesNifcif:
        this.solicitudDeInscripcionForm.value.representanteLegal || '',
    };
    this.solicitudDeInscripcionService
      .filterSolicitudDeInscripcions(entidadFilterObj)
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          if (data.success === true) {
            this.solicitudDeInscripcions = [...data.response];
          }
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
  }

  onAddHandler() {
    this.router.navigate(['/files/solicitudDeInscripcion'], {
      state: { action: 'add' },
    });
  }

  onArchiveHandler(entidadDetails: Entidad) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          if (entidadDetails.id)
            this.solicitudDeInscripcionService
              .archiveSolicitudDeInscripcion(entidadDetails.id)
              .pipe(takeUntil(this.subscription))
              .subscribe({
                next: (data) => {
                  if (data.success === false && data.errorCode) {
                    // this.openAlertDialog(
                    //   this.translocoService.translate('errors.' + data.errorCode),
                    //   'warn'
                    // );
                  } else {
                    this.fetchAllSolicitudDeInscripcion();
                    this.archiveDialogRef?.close();
                    this.messageService.add({
                      severity: 'success',
                      summary: this.translocoService.translate(
                        'campoDeActuacion.title'
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
          this.archiveDialogRef?.close();
        },
        disabled: false,
      },
    ];
    const archiveDialogConfig: GenericDialog = {
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
          'dialog_content.archive_alert'
        ),
        headerStyle: {
          icon: 'info',
          dialogType: 'confirm',
          title: this.translocoService.translate('dialog_header.delete'),
        },
      },
    };
    this.archiveDialogRef = this.dialogService.open(
      AlertDialogComponent,
      archiveDialogConfig
    );
  }
  onRestoreHandler(entidadDetails: Entidad) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          if (entidadDetails.id)
            this.solicitudDeInscripcionService
              .restoreSolicitudDeInscripcion(entidadDetails.id)
              .pipe(takeUntil(this.subscription))
              .subscribe({
                next: (data) => {
                  if (data.success === false && data.errorCode) {
                    // this.openAlertDialog(
                    //   this.translocoService.translate('errors.' + data.errorCode),
                    //   'warn'
                    // );
                  } else {
                    this.fetchAllSolicitudDeInscripcion();
                    this.restoreDialogRef?.close();
                    this.messageService.add({
                      severity: 'success',
                      summary: this.translocoService.translate(
                        'campoDeActuacion.title'
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
          this.restoreDialogRef?.close();
        },
        disabled: false,
      },
    ];
    const restoreDialogConfig: GenericDialog = {
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
          'dialog_content.restore_alert'
        ),
        headerStyle: {
          icon: 'info',
          dialogType: 'confirm',
          title: this.translocoService.translate('dialog_header.delete'),
        },
      },
    };
    this.restoreDialogRef = this.dialogService.open(
      AlertDialogComponent,
      restoreDialogConfig
    );
  }

  onViewHandler(entidad: Entidad) {
    this.router.navigate(['/files/solicitudDeInscripcion'], {
      state: { cif: entidad.nifcif, action: 'view' },
    });
  }
  onEditHandler(entidad: Entidad) {
    this.router.navigate(['/files/solicitudDeInscripcion'], {
      state: { cif: entidad.nifcif, action: 'edit' },
    });
  }

  ngOnDestroy(): void {
    this.solicitudDeInscripcions = [];
    this.cloneSolicitudDeInscripcionRecords = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
