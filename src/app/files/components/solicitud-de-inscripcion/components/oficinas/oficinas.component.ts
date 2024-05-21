import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstant } from '@app/core/constants/globalConstants';
import { OficinasDialogComponent } from '@app/files/components/solicitud-de-inscripcion/components/oficinas-dialog/oficinas-dialog.component';
import { Oficinas } from '@app/files/interfaces/oficinas';
import {
  Municipio,
  Provincia,
  PostalCode,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import { OficinasService } from '@app/files/services/oficinas.service';
import { SolicitudDeInscripcionService } from '@app/files/services/solicitud-de-inscripcion.service';
import { SolicituddeCodigoPostalService } from '@app/files/services/solicitudde-codigo-postal.service';
import { SolicitudeMunicipioService } from '@app/files/services/solicitude-municipio.service';
import { SolicitudeProvinciaService } from '@app/files/services/solicitude-provincia.service';
import { AlertDialogComponent } from '@app/shared/components/alert-dialog/alert-dialog.component';
import {
  ActionButtons,
  GenericDialog,
  InputField,
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
    private messageService: MessageService,
    private injector: Injector
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
    // this.fetchAllSolicitudDeInscripcion();
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
          //       // this.municipioList = data.response;
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
        // component: OficinasDialogComponent,
        // injector: Injector.create({
        //   providers: [{ provide: 'data', useValue: { name: 'John' } }],
        // }),
        // context: { name: 'John' },
      },
      styleClass: 'dialogStyle',
      showHeader: true,
    };
    this.addDialogRef = this.dialogService.open(
      AlertDialogComponent,
      addDialogConfig
    );
  }
}
