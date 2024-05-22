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
  addDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  updateDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  viewDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  deleteDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  alertDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
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

  deleteOficina(campoDetails: any) {
    this.oficinasService
      .deleteOficinas(campoDetails.codigo)
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          if (data?.success === false && data?.errorCode) {
            // this.openAlertDialog(
            //   this.translocoService.translate(
            //     'errors.' + data.errorCode.toString()
            //   ),
            //   'warn'
            // );
            // this.alertDialogRef = this.openDialog(
            //   'alert',
            //   undefined,
            //   this.translocoService.translate('errors')
            // );
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
      });
  }

  checkDefaultOffice() {
    const [officeDetails] = this.oficinas;
    return (
      this.oficinas.length === 1 &&
      officeDetails.office_name === 'test' &&
      !officeDetails.id
    );
  }

  openAddDialog() {
    this.addDialogRef = this.openDialog('add');
  }
  openUpdateDialog() {
    this.updateDialogRef = this.openDialog('update');
  }
  openViewDialog() {
    this.viewDialogRef = this.openDialog('view');
  }

  onDeleteHandler() {
    this.deleteDialogRef = this.openDialog(
      'delete',
      undefined,
      this.translocoService.translate('dialog_content.delete_oficinas_alert')
    );
  }

  openDialog(
    dialogType: 'add' | 'update' | 'view' | 'delete' | 'alert' | 'confirm',
    campoDetails?: any,
    alertMessage?: string,
    callback?: (input?: any) => void
  ) {
    const serviceActions = {
      add: () => {
        console.log(this.oficinasForm.value, 'zhns');
        this.oficinasService
          .postOficinas({ office_name: 'dd' })
          .pipe(takeUntil(this.subscription))
          .subscribe({
            next: () => {
              this.addDialogRef?.close();
              this.fetchAllOficinas();
            },
            error: (err: Error) => console.error(err),
          });
      },
      update: () => {
        const updateService = () => {
          this.oficinasService
            .updateOficinas({ id: 1, office_name: 'ss' })
            .pipe(takeUntil(this.subscription))
            .subscribe({
              next: () => {
                this.updateDialogRef?.close();
                this.alertDialogRef?.close();
                this.fetchAllOficinas();
              },
              error: (err: Error) => console.error(err),
            });
        };

        this.alertDialogRef = this.openDialog(
          'confirm',
          this.oficinasForm.value,
          this.translocoService.translate(
            'dialog_content.update_officinas_alert'
          ),
          updateService
        );
      },
      delete: () => {
        if (this.oficinas.length === 1 && this.checkDefaultOffice()) {
          this.alertDialogRef = this.openDialog(
            'alert',
            this.alertDialogRef,
            this.translocoService.translate('oficinas.default_delete')
          );
        } else if (this.oficinas.length === 1) {
          this.alertDialogRef = this.openDialog(
            'alert',
            this.alertDialogRef,
            this.translocoService.translate('oficinas.last_delete')
          );
        } else {
          this.deleteOficina(campoDetails);
        }
      },
      view: () => {},
      alert: () => {},
      confirm: () => {},
    };

    const validate = () => {
      const officeName = this.oficinasForm.value.office_name;
      return !officeName || officeName.trim() === '';
    };

    const actionButtons = this.getActionButtons(
      dialogType,
      serviceActions[dialogType],
      validate,
      callback,
      campoDetails
    );
    const dialogConfig = this.getDialogConfig(
      dialogType,
      actionButtons,
      alertMessage
    );

    return this.dialogService.open(AlertDialogComponent, dialogConfig);
  }

  getActionButtons(
    dialogType: string,
    serviceAction: () => void,
    validate: () => boolean,
    callback?: (input?: any) => void,
    campoDetails?: any
  ): ActionButtons[] {
    const buttons: { [key: string]: ActionButtons[] } = {
      add: [
        {
          label: this.translocoService.translate('buttons.save'),
          icon: 'save',
          action: serviceAction,
          validate: validate,
          disabled: true,
        },
        {
          label: this.translocoService.translate('buttons.cancel'),
          action: () => this.addDialogRef?.close(),
          disabled: false,
        },
      ],
      update: [
        {
          label: this.translocoService.translate('buttons.update'),
          icon: 'save',
          action: serviceAction,
          validate: validate,
          disabled: true,
        },
        {
          label: this.translocoService.translate('buttons.cancel'),
          action: () => this.updateDialogRef?.close(),
          disabled: false,
        },
      ],
      view: [
        {
          label: this.translocoService.translate('buttons.cancel'),
          action: () => this.viewDialogRef?.close(),
          disabled: false,
        },
      ],
      delete: [
        {
          label: this.translocoService.translate('buttons.yes'),
          icon: 'check',
          action: serviceAction,
          disabled: false,
        },
        {
          label: this.translocoService.translate('buttons.no'),
          action: () => this.deleteDialogRef?.close(),
          disabled: false,
        },
      ],
      alert: [
        {
          label: this.translocoService.translate('buttons.accept'),
          action: () => this.alertDialogRef?.close(),
          disabled: false,
        },
      ],
      confirm: [
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
          action: () => this.alertDialogRef?.close(),
          disabled: false,
        },
      ],
    };

    return buttons[dialogType];
  }

  getDialogConfig(
    dialogType: string,
    actionButtons: ActionButtons[],
    alertMessage?: string
  ): GenericDialog {
    const isAlertDialog =
      dialogType === 'alert' ||
      dialogType === 'confirm' ||
      dialogType === 'delete';

    const dialogConfig: GenericDialog = {
      header: this.translocoService.translate(
        this.translocoService.translate('oficinas.office_dialog_header')
      ),
      width: isAlertDialog ? '40%' : '50%',
      contentStyle: { overflow: 'none' },
      closable: false,
      baseZIndex: isAlertDialog ? 20000 : 10000,
      data: {
        actionButtons,
        template: isAlertDialog ? undefined : this.template,
        alertMessage: isAlertDialog ? alertMessage : undefined,
      },
      styleClass: 'dialogStyle',
      showHeader: !isAlertDialog,
    };

    if (isAlertDialog) {
      dialogConfig.data.headerStyle = {
        icon: dialogType === 'alert' ? 'report_problem' : 'info',
        dialogType: dialogType === 'alert' ? 'warn' : 'confirm',
        title:
          dialogType === 'alert'
            ? this.translocoService.translate('dialog_header.alert')
            : this.translocoService.translate('dialog_header.delete'),
      };
    }

    return dialogConfig;
  }
}
