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
  providers: [DialogService, MessageService],
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

  checkDefaultOffice() {
    const [officeDetails] = this.oficinas;
    return (
      this.oficinas.length === 1 &&
      officeDetails.office_name === 'test1' &&
      !officeDetails.id
    );
  }

  getCommonDialogConfig = (
    buttons: ActionButtons[],
    template: any
  ): GenericDialog => {
    return {
      header: this.translocoService.translate('oficinas.office_dialog_header'),
      width: '50%',
      contentStyle: { overflow: 'none' },
      closable: false,
      baseZIndex: 10000,
      data: { actionButtons: buttons, template: template },
      styleClass: 'dialogStyle',
      showHeader: true,
    };
  };

  createActionButton = (
    labelKey: string,
    icon: string,
    action: () => void,
    validate?: () => boolean,
    disabled = false
  ): ActionButtons => {
    return {
      label: this.translocoService.translate(labelKey),
      icon: icon,
      action: action,
      validate: validate,
      disabled: disabled,
    };
  };

  isOfficeNameInvalid = (): boolean => {
    const officeName = this.oficinasForm.value.office_name;
    return !officeName || officeName.trim() === '';
  };

  openAddDialog() {
    const saveAction = () => {
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
    };

    const actionButtons: ActionButtons[] = [
      this.createActionButton(
        'buttons.save',
        'save',
        saveAction,
        this.isOfficeNameInvalid,
        true
      ),
      this.createActionButton(
        'buttons.cancel',
        '',
        () => this.addDialogRef?.close(),
        undefined,
        false
      ),
    ];

    const addDialogConfig = this.getCommonDialogConfig(
      actionButtons,
      this.template
    );
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }

  openUpdateDialog() {
    const updateService = () => {
      this.oficinasService
        .postOficinas({ id: 1, office_name: 'ss' })
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: () => {
            this.updateDialogRef?.close();
            this.fetchAllOficinas();
          },
          error: (err: Error) => console.error(err),
        });
    };

    const updateAction = () => {
      console.log(this.oficinasForm.value, 'zhns');
      this.openAlertDialog(
        this.translocoService.translate(
          'dialog_content.update_officinas_alert'
        ),
        'confirm',
        updateService,
        this.oficinasForm.value
      );
    };

    const actionButtons: ActionButtons[] = [
      this.createActionButton(
        'buttons.update',
        'save',
        updateAction,
        this.isOfficeNameInvalid,
        true
      ),
      this.createActionButton(
        'buttons.cancel',
        '',
        () => this.updateDialogRef?.close(),
        undefined,
        false
      ),
    ];

    const updateDialogConfig = this.getCommonDialogConfig(
      actionButtons,
      this.template
    );
    this.updateDialogRef = this.dialogService.open(
      AlertDialogComponent,
      updateDialogConfig
    );
  }

  openViewDialog() {
    const actionButtons: ActionButtons[] = [
      this.createActionButton(
        'buttons.close',
        '',
        () => this.viewDialogRef?.close(),
        undefined,
        false
      ),
    ];

    const viewDialogConfig = this.getCommonDialogConfig(
      actionButtons,
      this.template
    );
    this.viewDialogRef = this.dialogService.open(
      AlertDialogComponent,
      viewDialogConfig
    );
  }

  deleteOficina(officeDetails: any) {
    this.oficinasService
      .deleteOficinas(officeDetails.codigo)
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
                'oficinas.office_dialog_header'
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

  onDeleteHandler() {
    const officeDetails: any = null;
    const yesAction = () => {
      if (this.oficinas.length === 1) {
        if (this.checkDefaultOffice()) {
          this.openAlertDialog(
            this.translocoService.translate('oficinas.default_delete'),
            'warn'
          );
        } else {
          this.openAlertDialog(
            this.translocoService.translate('oficinas.last_delete'),
            'confirm',
            this.deleteOficina,
            officeDetails
          );
        }
      } else {
        this.deleteOficina(officeDetails);
      }
    };

    const actionButtons: ActionButtons[] = [
      this.createActionButton(
        'buttons.yes',
        'check',
        yesAction,
        undefined,
        false
      ),
      this.createActionButton(
        'buttons.no',
        '',
        () => this.deleteDialogRef?.close(),
        undefined,
        false
      ),
    ];

    const deleteDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: { overflow: 'none' },
      showHeader: false,
      closable: false,
      baseZIndex: 10000,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: this.translocoService.translate(
          'dialog_content.delete_oficinas_alert'
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
            this.createActionButton(
              'buttons.yes',
              'check',
              () => {
                if (callback && campoDetails) callback(campoDetails);
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

    const alertDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: { overflow: 'none' },
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
}
