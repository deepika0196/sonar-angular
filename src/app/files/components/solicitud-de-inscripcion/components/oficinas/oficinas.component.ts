import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalConstant } from '@app/core/constants/globalConstants';
import { Oficinas } from '@app/files/interfaces/oficinas';
import {
  Municipio,
  Provincia,
  PostalCode,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import { OficinasService } from '@app/files/services/oficinas.service';
import { SolicituddeCodigoPostalService } from '@app/files/services/solicitudde-codigo-postal.service';
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
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.scss'],
  providers: [DialogService],
})
export class OficinasComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  tableConfig: TableConfig = {
    rows: 10,
    styleClass: 'paginator-override',
    paginator: true,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
    showDelete: true,
    showEdit: true,
    showView: true,
    showRestore: false,
    showArchive: false,
    columnFilter: true,
  };

  paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    currentPageReportTemplate: '',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  columns: TableColumns[] = [
    {
      field: 'office_name',
      header: 'oficinas.office_name',
      sortable: false,
      class: 'table-col-width-fix',
      filter: true,
    },
    {
      field: 'denomsocial',
      header: 'oficinas.residency',
      sortable: false,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'provDenominacion',
      header: 'oficinas.province',
      sortable: false,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'muniDenominacion',
      header: 'oficinas.municipality',
      sortable: false,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'numinscripcion',
      header: 'oficinas.phone',
      sortable: true,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'feentrada',
      header: 'oficinas.contact_person',
      sortable: true,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'fbaja',
      header: 'oficinas.contact_email',
      sortable: true,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'action',
      header: 'action_column',
      sortable: false,
      class: 'table-col-width-fix',
    },
  ];

  oficinas: Oficinas[] = [];
  private subscription = new Subject<void>();
  addDialogRef: DynamicDialogRef | undefined;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;
  provinciaList: Provincia[] = [];
  municipioList: Municipio[] = [];
  postalList: PostalCode[] = [];
  calendarDateFormat = GlobalConstant.ddmmyy;
  oficinasForm;

  constructor(
    private oficinasService: OficinasService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicituddeCodigoPostalService: SolicituddeCodigoPostalService,
    private translocoService: TranslocoService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {
    this.oficinasForm = new FormGroup({
      office_name: new FormControl(''),
      residency: new FormControl(null),
      phone: new FormControl(null),
      fax: new FormControl(null),
      province: new FormControl(null),
      municipality: new FormControl(null),
      postal: new FormControl(null),
      contact_email: new FormControl(null),
      contact_person: new FormControl(null),
    });
  }

  ngOnInit() {
    this.fetchAllOficinas();
    this.fetchAllProvincia();
  }
  fetchAllOficinas() {
    this.oficinasService
      .getOficinas()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.oficinas = data.response;
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
    this.oficinas.push({ office_name: 'test' });
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
  onMunicipalitySelected(selectedMunicipality: any) {
    console.log(selectedMunicipality, 'Sj');
    if (selectedMunicipality) {
      this.solicituddeCodigoPostalService
        .getMunicipio(
          selectedMunicipality.muniCodProvincia,
          selectedMunicipality.muniCodMunicipio
        )
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.postalList = data.response;
            console.log('cp = ', data.response);
          },
          error: (err: Error) => console.error(err),
        });
    } else {
      this.postalList = [];
    }
  }
  openAddDialog() {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.save'),
        icon: 'save',
        action: () => {
          console.log(this.oficinasForm.value, 'zhns');
          // this.oficinasService
          //   .postOficinas(officeDetails)
          //   .pipe(takeUntil(this.subscription))
          //   .subscribe({
          //     next: (data) => {
          //       this.fetchAllOficinas();
          //     },
          //     error: (err: Error) => console.error(err),
          //   });
        },
        validate: () => {
          return (
            this.oficinasForm.value.office_name === null ||
            this.oficinasForm.value.office_name === undefined ||
            this.oficinasForm.value.office_name.trim() === ''
          );
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
        actionButtons: actionButtons,
        template: this.template,
      },
      styleClass: 'dialogStyle',
      showHeader: true,
    };
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }

  deleteOficina(campoDetails: any) {
    this.oficinasService
      .deleteOficinas(campoDetails.codigo)
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
            this.fetchAllOficinas();
            this.deleteDialogRef?.close();
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
  }

  onDeleteHandler(campoDetails: any) {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          if (this.oficinas.length === 1) {
            if (this.checkDefaultOffice()) {
              this.openAlertDialog(
                this.translocoService.translate('errors'),
                'warn'
              );
            } else {
              this.openAlertDialog(
                this.translocoService.translate('errors'),
                'confirm',
                this.deleteOficina,
                campoDetails
              );
            }
          } else {
            this.deleteOficina(campoDetails);
          }
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
    campoDetails?: any
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
  checkDefaultOffice() {
    let officeDetails = null;
    if (this.oficinas.length === 1) {
      officeDetails = this.oficinas[0];
      return (
        officeDetails.office_name === 'social' && officeDetails.id === null
      );
    }

    return false;
  }
}
