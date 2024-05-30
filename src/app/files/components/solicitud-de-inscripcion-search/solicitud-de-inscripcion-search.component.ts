import { DatePipe } from '@angular/common';
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
  providers: [MessageService, DialogService, DynamicDialogRef, DatePipe],
})
export class SolicitudDeInscripcionSearchComponent
  implements OnInit, OnDestroy
{
  solicitudDeInscripcions: Entidad[];
  cloneSolicitudDeInscripcionRecords: Entidad[];

  dialogRef: DynamicDialogRef | undefined;
  calendarDateFormat = GlobalConstant.ddmmyy;
  calendarPlaceholder = GlobalConstant.CalendarPlaceholder;
  ecmca = GlobalConstant.ecmca;
  private readonly tableWidthClass = 'table-col-width';

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
      sortable: true,
      class: 'table-col-width-fix',
    },
    {
      field: 'denomsocial',
      header: 'solicitudDeInscripcion.business_name',
      sortable: true,
      class: this.tableWidthClass,
    },
    {
      field: 'provDenominacion',
      header: 'solicitudDeInscripcion.province',
      sortable: true,
      class: this.tableWidthClass,
    },
    {
      field: 'muniDenominacion',
      header: 'solicitudDeInscripcion.municipality',
      sortable: true,
      class: this.tableWidthClass,
    },
    {
      field: 'numinscripcion',
      header: 'solicitudDeInscripcion.registration_no',
      sortable: true,
      class: this.tableWidthClass,
    },
    {
      field: 'feentrada',
      header: 'solicitudDeInscripcion.application_date',
      sortable: true,
      class: this.tableWidthClass,
      pipe: 'date',
      pipeFormat: GlobalConstant.ddmmyyyy,
    },
    {
      field: 'fbaja',
      header: 'solicitudDeInscripcion.low_date',
      sortable: true,
      class: this.tableWidthClass,
      pipe: 'date',
      pipeFormat: GlobalConstant.ddmmyyyy,
    },
    {
      field: 'representantesNifcif',
      header: 'solicitudDeInscripcion.NIF_CIF_legal_representative',
      sortable: true,
      class: this.tableWidthClass,
    },
    {
      field: 'action',
      header: 'actions.acciones',
      sortable: false,
      class: 'table-col-width-fix',
    },
  ];
  private readonly subscription = new Subject<void>();
  solicitudDeInscripcionForm;
  provinciaList: Provincia[] = [];
  municipioList: Municipio[] = [];

  constructor(
    private readonly solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private readonly solicitudProvinciaService: SolicitudeProvinciaService,
    private readonly solicitudeMunicipioService: SolicitudeMunicipioService,
    private readonly messageService: MessageService,
    private readonly dialogService: DialogService,
    private readonly translocoService: TranslocoService,
    private readonly router: Router,
    private readonly datePipe: DatePipe
  ) {
    this.solicitudDeInscripcionForm = new FormGroup({
      cif: new FormControl(null, [Validators.maxLength(9)]),
      razonSocial: new FormControl(null),
      nRegistro: new FormControl(`/${this.ecmca}`),
      fechaSolicitud: new FormControl(null),
      incluirExpedientesBaja: new FormControl(null),
      fechaBaja: new FormControl({
        value: null,
        disabled: true,
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
    const fechaBajaControl = this.solicitudDeInscripcionForm.controls.fechaBaja;
    if (checked) {
      fechaBajaControl.enable();
    } else {
      fechaBajaControl.disable();
      fechaBajaControl.reset();
    }
  }
  clearAll() {
    this.solicitudDeInscripcionForm.reset();
    this.solicitudDeInscripcions = [...this.cloneSolicitudDeInscripcionRecords];
  }

  convertDateFormat(date: string | null | undefined): string {
    if (date) {
      return (
        this.datePipe.transform(date, GlobalConstant.ddmmyyyyWithHyphen) || ''
      );
    }
    return '';
  }

  filterHandler() {
    const formValues = this.solicitudDeInscripcionForm.value;

    const feentrada = this.convertDateFormat(formValues.fechaSolicitud);
    const fbaja = this.convertDateFormat(formValues.fechaBaja);

    const entidadFilterObj: EntidadFilter = {
      nifcif: formValues.cif || '',
      denomsocial: formValues.razonSocial || '',
      codpro: formValues.provincia || '',
      codmun: formValues.municipio || '',
      numinscripcion: formValues.nRegistro || '',
      feentrada,
      fbaja,
      representantesNifcif: formValues.representanteLegal || '',
    };
    this.solicitudDeInscripcionService
      .filterSolicitudDeInscripcions(entidadFilterObj)
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          if (data.success) {
            this.solicitudDeInscripcions = [...data.response];
          }
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
  }

  /**
   * Opens a dialog for either archiving or restoring an entity.
   * @param entidadDetails The details of the entity to be archived or restored.
   * @param action Specifies whether the action is 'archive' or 'restore'.
   */
  openDialog(entidadDetails: Entidad, action: 'archive' | 'restore') {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          if (entidadDetails.id)
            this.solicitudDeInscripcionService[
              action === 'archive'
                ? 'archiveSolicitudDeInscripcion'
                : 'restoreSolicitudDeInscripcion'
            ](entidadDetails.id)
              .pipe(takeUntil(this.subscription))
              .subscribe({
                next: (data) => {
                  if (data?.success) {
                    this.fetchAllSolicitudDeInscripcion();
                    this.dialogRef?.close();
                    this.messageService.add({
                      severity: 'success',
                      summary: this.translocoService.translate(
                        'solicitudDeInscripcion.title'
                      ),
                      detail: this.translocoService.translate(
                        `toast_messages.${action}_success`
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
          this.dialogRef?.close();
        },
        disabled: false,
      },
    ];

    const dialogConfig: GenericDialog = {
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
          `dialog_content.${action}_alert`
        ),
        headerStyle: {
          icon: 'info',
          dialogType: 'confirm',
          title: this.translocoService.translate('dialog_header.delete'),
        },
      },
    };

    this.dialogRef = this.dialogService.open(
      AlertDialogComponent,
      dialogConfig
    );
  }

  navigateToSolicitudDeInscripcion(
    action: 'view' | 'edit' | 'add',
    entidad?: Entidad
  ) {
    const state = entidad
      ? { cif: entidad.nifcif, id: entidad.id, action }
      : { action };
    this.router.navigate(['/files/solicitudDeInscripcion'], { state });
  }

  onArchiveHandler(entidadDetails: Entidad) {
    this.openDialog(entidadDetails, 'archive');
  }

  onRestoreHandler(entidadDetails: Entidad) {
    this.openDialog(entidadDetails, 'restore');
  }

  onViewHandler(entidad: Entidad) {
    this.navigateToSolicitudDeInscripcion('view', entidad);
  }

  onEditHandler(entidad: Entidad) {
    this.navigateToSolicitudDeInscripcion('edit', entidad);
  }

  onAddHandler() {
    this.navigateToSolicitudDeInscripcion('add');
  }

  ngOnDestroy(): void {
    this.solicitudDeInscripcions = [];
    this.cloneSolicitudDeInscripcionRecords = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
