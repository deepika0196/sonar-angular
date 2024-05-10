import { Component, OnDestroy, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-solicitud-de-inscripcion',
  templateUrl: './solicitud-de-inscripcion.component.html',
  styleUrls: ['./solicitud-de-inscripcion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class SolicitudDeInscripcionComponent implements OnInit, OnDestroy {
  registroDeEntidades: string = GlobalConstant.RegistroDeEntidades;
  isValidForm = false;
  isFechaBajaNull = true;
  alertmsg = '';
  copyAdress: boolean;
  entidadData: Entidad = {};
  datosPrincipalesForm: FormGroup;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;

  postalList: any[] = [];
  filteredPostal: any[] = [];
  selectedPostal: any;
  selectdircp: any;

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
    private solicituddeCodigoPostalService: SolicituddeCodigoPostalService
  ) {
    this.datosPrincipalesForm = this.fb.group({
      entidad: this.fb.group({
        cif: [null, [Validators.required, this.notOnlyWhitespace()]],
        razonSocial: [null, [Validators.required, this.notOnlyWhitespace()]],
        domicilioSocia: [null, [Validators.required, this.notOnlyWhitespace()]],
        provincia: [null],
        municipio: [null],
        cPostal: [null],
        nRegistro: [null],
        feentrada: [null],
        fechaBaja: [{ value: '', disabled: true }],
        email: [null, Validators.email],
        telefono: [null],
        fax: [null],
        publicarEnWeb: [null],
        observaciones: [null],
      }),
      notificaciones: this.fb.group({
        addressCopy: [true],
        dirDomicilio: [null],
        dirProvincia: [null],
        dirMunicipio: [null],
        dirCPostal: [null],
        dirEmail: [null, Validators.email],
        dirTelefono: [null],
      }),
      representanteLegal: this.fb.group({
        nifCif: [null],
        nombre: [null],
        apellidos: [null],
        domicilio: [null],
        provincia: [null],
        municipio: [null],
        cPostal: [null],
        email: [null, Validators.email],
        telefono: [null],
      }),
    });
  }

  ngOnInit(): void {
    this.copyAdress = true;
    this.copyAddressFieldsOfEntidadData();

    this.datosPrincipalesForm.get('entidad')?.valueChanges.subscribe(() => {
      if (this.copyAdress) {
        this.copyAddressFieldsOfEntidadData();
      }
    });

    this.datosPrincipalesForm
      .get('notificaciones.addressCopy')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          this.copyAdress = value;
          this.copyAddressFieldsOfEntidadData();
        } else {
          this.copyAdress = false;
          this.clearNotificacioneFields();
        }
      });

    this.datosPrincipalesForm.get('entidad')?.valueChanges.subscribe(() => {
      this.isValidForm =
        this.datosPrincipalesForm.get('entidad')?.valid ?? false;
    });

    this.solicitudProvinciaService
      .getProvincia()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.provinciaList = data.response;
        },
        error: (err: Error) => console.error(err),
      });

    this.datosPrincipalesForm
      .get('entidad.fechaBaja')
      ?.valueChanges.subscribe((value) => {
        this.isFechaBajaNull = value === null;
      });
  }

  onSubmit() {
    console.log(this.mapToBackendData());
    this.solicitudDeInscripcionService
      .postSolicitudDeInscripcion(this.mapToBackendData())
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          console.log('success : ', data);
        },
        error: (err: Error) => console.error(err),
      });
  }

  mapToBackendData(): Entidad {
    return {
      nifcif: this.datosPrincipalesForm.get('entidad.cif')?.value || '',
      denomsocial:
        this.datosPrincipalesForm.get('entidad.razonSocial')?.value || '',
      domsocial:
        this.datosPrincipalesForm.get('entidad.domicilioSocia')?.value || '',
      codpro: this.selectedProvincia?.provDenominacion || '',
      codmun: this.selectedMunicipio?.muniDenominacion || '',
      cp: this.selectedPostal.cpostMunicipio || '',
      numinscripcion:
        this.datosPrincipalesForm.get('entidad.nRegistro')?.value || '',
      feentrada:
        this.datosPrincipalesForm.get('entidad.feentrada')?.value || '',
      fbaja: this.datosPrincipalesForm.get('entidad.fechaBaja')?.value || '',
      email: this.datosPrincipalesForm.get('entidad.email')?.value || '',
      telefono: this.datosPrincipalesForm.get('entidad.telefono')?.value || '',
      fax: this.datosPrincipalesForm.get('entidad.fax')?.value || '',
      publicaWeb:
        this.datosPrincipalesForm.get('entidad.publicarEnWeb')?.value || '',
      observaciones:
        this.datosPrincipalesForm.get('entidad.observaciones')?.value || '',
      dirDomicilio:
        this.datosPrincipalesForm.get('notificaciones.dirDomicilio')?.value ||
        '',
      dirCodpro:
        this.datosPrincipalesForm.get('notificaciones.dirProvincia')?.value
          ?.provDenominacion || '',
      dirCodmun:
        this.datosPrincipalesForm.get('notificaciones.dirMunicipio')?.value
          ?.muniDenominacion || '',
      dirCp:
        this.datosPrincipalesForm.get('notificaciones.dirCPostal')?.value
          ?.muniDenominacion || '',
    };
  }

  provinciaSelected() {
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

  municipioSelected() {
    this.solicituddeCodigoPostalService
      .getMunicipio(
        this.selectedMunicipio.id.muniCodProvincia,
        this.selectedMunicipio.id.muniCodMunicipio
      )
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.postalList = data.response;
        },
        error: (err: Error) => console.error(err),
      });
  }

  fetchDeatails(event: Event) {
    const cif = (event.target as HTMLInputElement).value;
    console.log('cif = ', cif);
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
            ?.patchValue({ fechaBaja: fechaBajaValue });
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

  private copyAddressFieldsOfEntidadData() {
    this.selecteddDirProvincia = this.selectedProvincia;
    this.selecteddDirMunicipio = this.selectedMunicipio;
    this.selectdircp = this.selectedPostal;
    this.datosPrincipalesForm.get('notificaciones')?.patchValue({
      dirDomicilio: this.datosPrincipalesForm.get('entidad.domicilioSocia')
        ?.value,
      dirProvincia: this.datosPrincipalesForm.get('entidad.provincia')?.value,
      dirMunicipio: this.datosPrincipalesForm.get('entidad.municipio')?.value,
      dirCPostal: this.datosPrincipalesForm.get('entidad.cPostal')?.value,
      dirEmail: this.datosPrincipalesForm.get('entidad.email')?.value,
      dirTelefono: this.datosPrincipalesForm.get('entidad.telefono')?.value,
    });
  }

  private clearNotificacioneFields() {
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
