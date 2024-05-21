import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

import {
  Entidad,
  Municipio,
  Provincia,
  PostalCode,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import { SolicitudDeInscripcionService } from '@app/files/services/solicitud-de-inscripcion.service';
import { SolicituddeCodigoPostalService } from '@app/files/services/solicitudde-codigo-postal.service';
import { SolicitudeMunicipioService } from '@app/files/services/solicitude-municipio.service';
import { SolicitudeProvinciaService } from '@app/files/services/solicitude-provincia.service';
import { AlertDialogComponent } from '@app/shared/components/alert-dialog/alert-dialog.component';
import { GlobalConstant } from '@app/core/constants/globalConstants';
import {
  ActionButtons,
  GenericDialog,
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import { CIFValidator } from '@app/core/utils/cif-validator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-solicitud-de-inscripcion',
  templateUrl: './solicitud-de-inscripcion.component.html',
  styleUrls: ['./solicitud-de-inscripcion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class SolicitudDeInscripcionComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  registroDeEntidades: string = GlobalConstant.RegistroDeEntidades;
  isValidForm = false;
  isFechaBajaNull = true;
  alertmsg = '';
  copyAdress: boolean;
  entidadData: Entidad = {};
  datosPrincipalesForm: FormGroup;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;
  numinscripcion = '/ECMCA';
  dateFormat = GlobalConstant.ddmmyyyy;

  postalList: PostalCode[] = [];
  filteredPostal: PostalCode[] = [];
  selectedPostal: PostalCode;
  selectdircp: PostalCode;

  municipioList: Municipio[] = [];
  selectedMunicipio!: Municipio;
  selecteddDirMunicipio: Municipio;
  filteredMunicipio: Municipio[] = [];

  provinciaList: Provincia[] = [];
  selectedProvincia: Provincia;
  selecteddDirProvincia: Provincia;
  filteredProvincia: Provincia[] = [];

  private subscription = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private translocoService: TranslocoService,
    private dialogService: DialogService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private solicituddeCodigoPostalService: SolicituddeCodigoPostalService,
    private location: Location
  ) {
    this.datosPrincipalesForm = this.fb.group({
      entidad: this.fb.group({
        nifcif: [null, [Validators.required, this.notOnlyWhitespace()]],
        denomsocial: [null, [Validators.required, this.notOnlyWhitespace()]],
        domsocial: [null, [Validators.required, this.notOnlyWhitespace()]],
        codpro: [null],
        codmun: [null],
        cp: [null],
        numinscripcion: ['/ECMCA'],
        feentrada: [null],
        fbaja: [{ value: '', disabled: true }],
        email: [null, Validators.email],
        telefono: [null],
        fax: [null],
        publicaWeb: [null],
        observaciones: [null],
      }),
      notificaciones: this.fb.group({
        addressCopy: [false],
        dirDomicilio: [null],
        dirPro: [null],
        dirMun: [null],
        dirCp: [null],
        dirEmail: [null, Validators.email],
        dirFax: [null],
        dirTelefono: [null],
      }),
      representanteLegal: this.fb.group({
        sNifCif: [null],
        sNombre: [null],
        sApellidos: [null],
        sDomicilio: [null],
        sCodePro: [null],
        sCodMun: [null],
        sCP: [null],
        sEmail: [null, Validators.email],
        sTelefono: [null],
        sFax: [null],
      }),
    });
  }

  ngAfterViewInit(): void {
    this.datosPrincipalesForm.get('notificaciones.addressCopy')?.setValue(true);
    this.datosPrincipalesForm.get('notificaciones.dirPro')?.disable();
    this.datosPrincipalesForm.get('notificaciones.dirMun')?.disable();
    this.datosPrincipalesForm.get('notificaciones.dirCp')?.disable();
  }

  ngOnInit(): void {
    console.log(this.location.getState());

    this.copyAdress = true;

    this.datosPrincipalesForm
      .get('notificaciones.addressCopy')
      ?.valueChanges.pipe(takeUntil(this.subscription))
      .subscribe({
        next: (value) => {
          if (value) {
            this.copyAdress = value;
            // this.copyAddressFieldsOfEntidadData();
          } else {
            this.copyAdress = false;
            // this.clearNotificacioneFields();
          }
        },
        error: (err: Error) => console.error(err),
      });

    this.datosPrincipalesForm
      .get('entidad')
      ?.valueChanges.pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.isValidForm =
            this.datosPrincipalesForm.get('entidad')?.valid ?? false;
          this.copyAddressFieldsOfEntidadData();
        },
        error: (err: Error) => console.error(err),
      });

    this.datosPrincipalesForm
      .get('entidad.fbaja')
      ?.valueChanges.pipe(takeUntil(this.subscription))
      .subscribe({
        next: (value) => {
          this.isValidForm = this.isFechaBajaNull = value === null;
        },
        error: (err: Error) => console.error(err),
      });

    this.loadProvincia();
  }

  onSubmit() {
    if (
      !CIFValidator.esNifNieCifValido(
        this.datosPrincipalesForm.get('entidad.nifcif')?.value
      )
    ) {
      this.InformationAction();
    }
    console.log(this.mapFormToBackendData());
  }

  mapFormToBackendData(): any {
    const formValue = this.datosPrincipalesForm.value;
    const entidad = formValue.entidad;
    const notificaciones = formValue.notificaciones;
    const mappedData = {
      codidfiscal: entidad.nifcif,
      codmun: entidad.codmun.id.muniCodMunicipio,
      codpro: entidad.codpro.provCodProvincia,
      cp: entidad.cp.id.cpostCodPostal,
      denomsocial: entidad.denomsocial,
      dirCodmun: notificaciones.dirCodmun.id.muniCodMunicipio,
      dirCodpro: notificaciones.dirCodpro.provCodProvincia,
      dirCp: notificaciones.dirCp.id.cpostCodPostal,
      dirDomicilio: notificaciones.dirDomicilio,
      dirEmail: notificaciones.dirEmail,
      dirFax: notificaciones.dirFax,
      dirTelefono: notificaciones.dirTelefono,
      domsocial: entidad.domsocial,
      email: entidad.email,
      fax: entidad.fax,
      fbaja: entidad.fbaja,
      feentrada: entidad.feentrada,
      nifcif: entidad.nifcif,
      numinscripcion: entidad.numinscripcion,
      observaciones: entidad.observaciones,
      publicaWeb: entidad.publicaWeb,
      telefono: entidad.telefono,
      web: '',
    };

    return mappedData;
  }

  loadProvincia() {
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

  loadMunicipio() {
    this.solicitudeMunicipioService
      .getMunicipio(this.selectedProvincia.provCodProvincia)
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.municipioList = data.response;
        },
        error: (err: Error) => console.error(err),
      });
  }

  loadCP() {
    this.solicituddeCodigoPostalService
      .getMunicipio(
        this.selectedMunicipio.id.muniCodProvincia,
        this.selectedMunicipio.id.muniCodMunicipio
      )
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.postalList = data.response;
          console.log('cp = ', data.response);
        },
        error: (err: Error) => console.error(err),
      });
  }

  fetchDeatails(event: Event) {
    const cif = (event.target as HTMLInputElement).value;
    console.log('cif = ', cif);
    if (
      !CIFValidator.esNifNieCifValido(
        this.datosPrincipalesForm.get('entidad.nifcif')?.value
      )
    ) {
      this.InformationAction();
    } else {
      this.solicitudDeInscripcionService
        .getByNifCif(cif)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (err: Error) => console.error(err),
        });
    }
  }

  InformationAction() {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.accept'),

        action: () => {
          this.deleteDialogRef?.close();
        },
        disabled: false,
      },
    ];

    const archiveDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: { overflow: 'none' },
      showHeader: false,
      closable: true,
      baseZIndex: 10000,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: this.translocoService.translate(``),
        headerStyle: {
          icon: 'info',
          dialogType: 'alert',
          title: this.translocoService.translate('dialog_header.delete'),
        },
      },
    };

    this.deleteDialogRef = this.dialogService.open(
      AlertDialogComponent,
      archiveDialogConfig
    );
  }

  notOnlyWhitespace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value: string = control.value;
      if (value && value.trim().length === 0) {
        return { notOnlyWhitespace: true };
      }
      return null;
    };
  }

  updateAction(isArchive: boolean) {
    const messageKey = isArchive ? 'archivar_message' : 'restaurar_message';
    const fechaBajaValue = isArchive ? new Date() : null;

    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.yes'),
        icon: 'check',
        action: () => {
          this.datosPrincipalesForm
            .get('entidad')
            ?.patchValue({ fbaja: fechaBajaValue });
          this.deleteDialogRef?.close();
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

    const archiveDialogConfig: GenericDialog = {
      width: '40%',
      contentStyle: { overflow: 'none' },
      showHeader: false,
      closable: true,
      baseZIndex: 10000,
      styleClass: 'dialogStyle',
      data: {
        actionButtons: actionButtons,
        alertMessage: this.translocoService.translate(
          `solicitud_de_inscripcion.${messageKey}`
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
      archiveDialogConfig
    );
  }

  updateFechaBaja() {
    this.updateAction(this.isFechaBajaNull);
  }

  copyAddressFieldsOfEntidadData() {
    this.selecteddDirProvincia = this.selectedProvincia;
    this.selecteddDirMunicipio = this.selectedMunicipio;
    this.selectdircp = this.selectedPostal;
    this.datosPrincipalesForm.get('notificaciones')?.patchValue({
      dirDomicilio: this.datosPrincipalesForm.get('entidad.domsocial')?.value,
      dirProvincia: this.datosPrincipalesForm.get('entidad.codpro')?.value,
      dirMunicipio: this.datosPrincipalesForm.get('entidad.codmun')?.value,
      dirCPostal: this.datosPrincipalesForm.get('entidad.cp')?.value,
      dirEmail: this.datosPrincipalesForm.get('entidad.email')?.value,
      dirTelefono: this.datosPrincipalesForm.get('entidad.telefono')?.value,
    });
  }

  clearNotificacioneFields() {
    this.datosPrincipalesForm.get('notificaciones')?.patchValue({
      dirDomicilio: '',
      dirProvincia: '',
      dirMunicipio: '',
      dirCPostal: '',
      dirEmail: '',
      dirTelefono: '',
    });
  }

  filterProvincia(event: any) {
    const query = event.query.toLowerCase();
    this.filteredProvincia = this.provinciaList.filter((provincia) =>
      provincia.provDenominacion.toLowerCase().startsWith(query)
    );
  }

  filterMunicipio(event: any) {
    const query = event.query.toLowerCase();
    this.filteredMunicipio = this.municipioList.filter((municipio) =>
      municipio.muniDenominacion.toLowerCase().startsWith(query)
    );
  }

  filterPostal(event: any) {
    const query = event.query.toLowerCase();
    const uniquePostalCodes: string[] = [];

    this.filteredPostal = this.postalList.filter((postal) => {
      const postalCode = postal.cpostMunicipio.toLowerCase();
      if (
        !uniquePostalCodes.includes(postalCode) &&
        postalCode.startsWith(query)
      ) {
        uniquePostalCodes.push(postalCode);
        return true;
      }
      return false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
