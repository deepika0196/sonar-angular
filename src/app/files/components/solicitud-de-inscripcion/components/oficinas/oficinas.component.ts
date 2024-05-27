import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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
      field: 'denominacion',
      header: 'oficinas.office_name',
      sortable: false,
      class: 'table-col-width-fix',
      filter: true,
    },
    {
      field: 'domicilio',
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
      field: 'telefono',
      header: 'oficinas.phone',
      sortable: true,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'reccaResponsables.nombre',
      header: 'oficinas.contact_person',
      sortable: true,
      class: 'table-col-width',
      filter: true,
    },
    {
      field: 'reccaResponsables.email',
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

  @Input() oficinas: Oficinas[] = [];
  @Input() social = '';
  @Input() entidadId: number;
  @Input() provinceList: Provincia[] = [];
  @Output() fetchAllOficinasById: EventEmitter<number> = new EventEmitter();
  private subscription = new Subject<void>();
  addDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  updateDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  viewDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  deleteDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  alertDialogRef: DynamicDialogRef | undefined = new DynamicDialogRef();
  municipioList: Municipio[] = [];
  postalList: PostalCode[] = [];
  calendarDateFormat = GlobalConstant.ddmmyy;
  globalConst = GlobalConstant;
  oficinasForm;
  selectedProCod: string;

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
      residency: new FormControl(''),
      phone: new FormControl(''),
      phone_2: new FormControl(''),
      province: new FormControl(''),
      municipality: new FormControl(''),
      postal: new FormControl(''),
      contact_email: new FormControl(''),
      contact_person: new FormControl(''),
    });
  }

  ngOnInit() {
    console.log(this.oficinas, this.provinceList);
    // this.oficinas.push({ office_name: 'test' });
    // this.provinceList.push({
    //   muniDenominacion: 'ss',
    //   provCapital: 'SS',
    //   provCodCcaa: 'SS',
    //   provCodLetra: 'SS',
    //   provCodProvincia: 'SS',
    //   provDenominacion: 'Ss',
    // });
    // this.fetchAllOficinas();
    // this.fetchAllProvincia();
  }

  mapFormToOficinas(selectedOffice?: Oficinas) {
    const formValues = this.oficinasForm.value;
    const office: Oficinas = {
      ...selectedOffice,
      denominacion: formValues.office_name || '',
      domicilio: formValues.residency || '',
      telefono: formValues.phone || '',
      fax: formValues.phone_2 || '',
      codpro: formValues.province || '',
      codmun: formValues.municipality || '',
      cp: formValues.postal || '',
      entidadId: this.entidadId,
      reccaResponsables: {
        ...selectedOffice?.reccaResponsables,
        nombre: formValues.contact_person || '',
        email: formValues.contact_email || '',
        oficinaEntidadId: this.entidadId,
      },
    };
    return office;
  }

  mapOficinasToForm(office: Oficinas) {
    this.resetForm();
    if (office.codpro) {
      this.onProvinciaSelected(office.codpro);
      if (office.codmun)
        this.onMunicipalitySelected(office.codpro, office.codmun);
    }

    this.oficinasForm.patchValue({
      office_name: office.denominacion,
      residency: office.domicilio,
      phone: office.telefono,
      province: office.codpro,
      municipality: office.codmun,
      postal: office.cp,
      phone_2: office.fax,
      contact_person: office.reccaResponsables?.nombre,
      contact_email: office.reccaResponsables?.email,
    });
    console.log(office, this.oficinasForm.value);
  }

  resetForm() {
    this.oficinasForm.reset();
  }

  fetchAllOficinas(item: number) {
    this.fetchAllOficinasById.emit(item);
  }

  onProvinciaSelected(selectedProvincia: string) {
    if (selectedProvincia) {
      this.solicitudeMunicipioService
        .getMunicipio(selectedProvincia)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.municipioList = data.response;
            this.selectedProCod = selectedProvincia;
          },
          error: (err: Error) => console.error(err),
        });
    } else {
      this.municipioList = [];
    }
  }
  onMunicipalitySelected(
    selectedProvince: string,
    selectedMunicipality: string
  ) {
    if (selectedMunicipality && selectedProvince) {
      this.solicituddeCodigoPostalService
        .getMunicipio(selectedProvince, selectedMunicipality)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.postalList = data.response;
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
      officeDetails.denominacion === this.social &&
      !officeDetails.codmun
    );
  }

  getCommonDialogConfig = (
    buttons: ActionButtons[],
    template: any,
    width: string,
    showHeader: boolean,
    headerStyle?: any,
    alertMessage?: string,
    baseZIndex = 1000
  ): GenericDialog => {
    return {
      header: this.translocoService.translate('oficinas.office_dialog_header'),
      width: width,
      contentStyle: { overflow: 'none' },
      closable: false,
      baseZIndex: baseZIndex,
      data: {
        actionButtons: buttons,
        template,
        headerStyle,
        alertMessage,
      },
      styleClass: 'dialogStyle',
      showHeader: showHeader,
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
    this.resetForm();
    const saveAction = () => {
      this.oficinasService
        .postOficinas(this.mapFormToOficinas())
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: () => {
            this.addDialogRef?.close();
            this.fetchAllOficinas(this.entidadId);
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
      this.template,
      '50%',
      true
    );
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }

  openUpdateDialog(office: Oficinas) {
    this.mapOficinasToForm(office);
    const updateService = () => {
      console.log(this.oficinasForm.value, this.mapFormToOficinas(office));
      this.oficinasService
        .updateOficinas(this.mapFormToOficinas(office))
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: () => {
            this.updateDialogRef?.close();
            this.fetchAllOficinas(this.entidadId);
          },
          error: (err: Error) => console.error(err),
        });
    };

    const updateAction = () => {
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
      this.template,
      '50%',
      true
    );
    this.updateDialogRef = this.dialogService.open(
      AlertDialogComponent,
      updateDialogConfig
    );
  }

  openViewDialog(office: Oficinas) {
    this.mapOficinasToForm(office);
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
      this.template,
      '50%',
      true
    );
    this.viewDialogRef = this.dialogService.open(
      AlertDialogComponent,
      viewDialogConfig
    );
  }

  deleteOficina(officeDetails: Oficinas) {
    if (officeDetails.oficinaId && officeDetails.entidadId)
      this.oficinasService
        .deleteOficinas(officeDetails.oficinaId, officeDetails.entidadId)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            console.log(data);
            if (data?.success === false && data?.errorCode) {
              this.openAlertDialog(
                this.translocoService.translate(
                  'errors.' + data.errorCode.toString()
                ),
                'warn'
              );
            } else {
              this.fetchAllOficinas(this.entidadId);
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

  onDeleteHandler(office: Oficinas) {
    const yesAction = () => {
      const oficinasLength = this.oficinas.length;
      const isDefaultOffice = this.checkDefaultOffice();
      const alertType = isDefaultOffice ? 'warn' : 'confirm';
      const alertMessage = isDefaultOffice
        ? 'oficinas.default_delete'
        : 'oficinas.last_delete';

      if (oficinasLength === 1) {
        this.openAlertDialog(
          this.translocoService.translate(alertMessage),
          alertType,
          isDefaultOffice ? undefined : this.deleteOficina,
          office
        );
      } else {
        this.deleteOficina(office);
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

    const headerStyle = {
      icon: 'info',
      dialogType: 'confirm',
      title: this.translocoService.translate('dialog_header.delete'),
    };

    const deleteDialogConfig = this.getCommonDialogConfig(
      actionButtons,
      undefined,
      '40%',
      false,
      headerStyle,
      this.translocoService.translate('dialog_content.delete_oficinas_alert')
    );

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
                if (callback)
                  campoDetails ? callback(campoDetails) : callback();
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
    const headerStyle = {
      icon: dialogType === 'confirm' ? 'info' : 'report_problem',
      dialogType: dialogType,
      title:
        dialogType === 'confirm'
          ? this.translocoService.translate('dialog_header.delete')
          : this.translocoService.translate('dialog_header.alert'),
    };

    const alertDialogConfig = this.getCommonDialogConfig(
      actionButtons,
      undefined,
      '40%',
      false,
      headerStyle,
      alertMessage,
      20000
    );

    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      alertDialogConfig
    );
  }
}
