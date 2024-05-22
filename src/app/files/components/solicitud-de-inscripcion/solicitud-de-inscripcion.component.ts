import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
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
  State,
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-de-inscripcion',
  templateUrl: './solicitud-de-inscripcion.component.html',
  styleUrls: ['./solicitud-de-inscripcion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class SolicitudDeInscripcionComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  initialFormValue = {};
  isValidForm = false;
  isFechaBajaNull = true;
  alertmsg = '';
  copyAdress: boolean;
  datosPrincipalesForm: FormGroup;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;
  numinscripcion = '/ECMCA';
  calendarDateFormat = GlobalConstant.ddmmyy;

  postalList: PostalCode[] = [];
  filteredPostal: PostalCode[] = [];

  municipioList: Municipio[] = [];
  filteredMunicipio: Municipio[] = [];

  provinciaList: Provincia[] = [];
  filteredProvincia: Provincia[] = [];
  cifNif = '';
  readOnlyMode: boolean;
  isLegalCifNif: boolean;

  private subscription = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private translocoService: TranslocoService,
    private dialogService: DialogService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private solicituddeCodigoPostalService: SolicituddeCodigoPostalService,
    private location: Location,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngAfterViewInit(): void {
    this.setFormReadOnly(this.readOnlyMode);
    this.datosPrincipalesForm.get('notificaciones.addressCopy')?.setValue(true);
    this.datosPrincipalesForm.get('notificaciones.dirPro')?.disable();
    this.datosPrincipalesForm.get('notificaciones.dirMun')?.disable();
    this.datosPrincipalesForm.get('notificaciones.dirCp')?.disable();
    if (!this.isLegalCifNif) {
      this.datosPrincipalesForm.get('representantesDTO.codpro')?.disable();
      this.datosPrincipalesForm.get('representantesDTO.codmun')?.disable();
      this.datosPrincipalesForm.get('representantesDTO.cp')?.disable();
    }
  }
  ngOnInit(): void {
    this.copyAdress = true;
    this.initializePage();
  }

  async initializePage() {
    await this.loadProvincia();
    await this.setupFormChangeSubscriptions();
    const state: State = this.location.getState() as State;
    this.checkMode(state.action);
    if (state.cif) {
      this.cifNif = state.cif;
      await this.fetchDetails(state.cif);
    }
  }
  loadProvincia() {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicitudProvinciaService
        .getProvincia()
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.provinciaList = data.response;
            resolve(true);
          },
          error: (err) => reject(err),
          complete: () => {},
        });
    });
  }
  private setupFormChangeSubscriptions() {
    return new Promise<void | boolean>((resolve, reject) => {
      const addressCopyControl = this.datosPrincipalesForm.get(
        'notificaciones.addressCopy'
      );
      if (addressCopyControl != null) {
        addressCopyControl.valueChanges
          .pipe(takeUntil(this.subscription))
          .subscribe((value) => {
            this.copyAdress = value;
            if (value) {
              this.copyAddressFieldsOfEntidadData();
            } else {
              this.clearNotificacioneFields();
            }
          });
      }

      this.datosPrincipalesForm
        .get('entidad')
        ?.valueChanges.pipe(takeUntil(this.subscription))
        .subscribe(() => {
          this.isValidForm = this.datosPrincipalesForm.valid ?? false;
          this.copyAddressFieldsOfEntidadData();
        });

      this.datosPrincipalesForm
        .get('entidad.fbaja')
        ?.valueChanges.pipe(takeUntil(this.subscription))
        .subscribe((value) => {
          this.isFechaBajaNull = value === null;
        });

      this.datosPrincipalesForm
        .get('representantesDTO.nifcif')
        ?.valueChanges.subscribe((value) => {
          if (value && CIFValidator.esNifNieCifValido(value)) {
            this.isLegalCifNif = true;
          } else {
            this.isLegalCifNif = false;
          }
        });

      resolve(true);
    });
  }

  fillDefaultNotification() {
    if (this.copyAdress) {
      this.copyAddressFieldsOfEntidadData();
    }
  }

  setFormReadOnly(isReadOnly: boolean) {
    if (isReadOnly) {
      this.datosPrincipalesForm.disable();
    } else {
      this.datosPrincipalesForm.enable();
    }
  }
  checkMode(mode: string) {
    if (mode == 'view') {
      this.readOnlyMode = true;
    } else {
      this.readOnlyMode = false;
    }
    return mode;
  }

  onSubmit() {
    if (
      !CIFValidator.esNifNieCifValido(
        this.datosPrincipalesForm.get('entidad.nifcif')?.value
      )
    ) {
      this.openInvalidCifDialog();
      return;
    }

    if (!this.datosPrincipalesForm.get('id')?.value) {
      this.createSolicitud();
    } else {
      this.updateSolicitud();
    }
  }

  initializeForm(): void {
    this.datosPrincipalesForm = this.fb.group({
      id: [null],
      entidad: this.fb.group({
        nifcif: [null, [Validators.required, this.notOnlyWhitespace()]],
        denomsocial: [null, [Validators.required, this.notOnlyWhitespace()]],
        domsocial: [null, [Validators.required, this.notOnlyWhitespace()]],
        codpro: [null],
        codmun: [null],
        cp: [null],
        numinscripcion: [this.numinscripcion],
        feentrada: [null],
        fbaja: [{ value: null, disabled: true }],
        email: [null, Validators.email],
        telefono: [null],
        fax: [null],
        publicaWeb: [null],
        observaciones: [null],
      }),
      notificaciones: this.fb.group({
        addressCopy: [true],
        dirDomicilio: [null],
        dirPro: [null],
        dirMun: [null],
        dirCp: [null],
        dirEmail: [null, Validators.email],
        dirFax: [null],
        dirTelefono: [null],
      }),
      representantesDTO: this.fb.group({
        apellidos: [null],
        codmun: [null],
        cp: [null],
        codpro: [null],
        domicilio: [null],
        email: [null, Validators.email],
        entidadId: [null],
        fax: [null],
        id: [null],
        nifcif: [null],
        nombre: [null],
        telefono: [null],
      }),
    });
  }

  mapFormToBackendData(): Entidad {
    const formValue = this.datosPrincipalesForm.value;
    const entidad = formValue.entidad || {};
    const notificaciones = formValue.notificaciones || {};
    const representantesDTO = formValue.representantesDTO || {};
    const representantesPrev =
      this.datosPrincipalesForm.get('representantesDTO.codpro')?.value || '';
    const representantesMunsi =
      this.datosPrincipalesForm.get('representantesDTO.codmun')?.value || '';
    const representantesPostal =
      this.datosPrincipalesForm.get('representantesDTO.cp')?.value || '';

    const publicaWeValue = entidad.publicaWeb ? 'Y' : 'N';

    const mappedData: Entidad = {
      id: formValue.id || null,
      codidfiscal: '',
      codmun: entidad.codmun?.muniCodMunicipio || '',
      cp: entidad.cp?.cpostCodPostal || '',
      codpro: entidad?.codpro?.provCodProvincia || '',
      denomsocial: entidad?.denomsocial || '',
      dirCodmun: notificaciones?.dirCodmun?.muniCodMunicipio || '',
      dirCp: notificaciones.dirCp?.cpostCodPostal || '',
      dirCodpro: notificaciones.dirCodpro?.provCodProvincia || '',
      dirDomicilio: notificaciones.dirDomicilio || '',
      dirEmail: notificaciones.dirEmail || '',
      dirFax: notificaciones.dirFax || '',
      dirTelefono: notificaciones.dirTelefono || '',
      domsocial: entidad.domsocial || '',
      email: entidad.email || '',
      fax: entidad.fax || '',
      fbaja: entidad.fbaja || '',
      feentrada: entidad.feentrada
        ? entidad.feentrada.toISOString().split('T')[0]
        : '',
      nifcif: entidad.nifcif || '',
      numinscripcion: entidad.numinscripcion || '',
      observaciones: entidad.observaciones || '',
      publicaWeb: publicaWeValue,
      representantesDTO: {
        apellidos: representantesDTO.apellidos || '',
        codmun: representantesMunsi?.muniCodMunicipio || '',
        cp: representantesPostal?.cpostCodPostal || '',
        codpro: representantesPrev?.provCodProvincia || '',
        domicilio: representantesDTO.domicilio || '',
        email: representantesDTO.email || '',
        entidadId: formValue.id || null,
        fax: representantesDTO.fax || '',
        id: representantesDTO.id || null,
        nifcif: representantesDTO.nifcif || '',
        nombre: representantesDTO.nombre || '',
        telefono: representantesDTO.telefono || '',
      },
      telefono: entidad.telefono || '',
      web: '',
    };

    return mappedData;
  }

  updateSolicitud() {
    this.solicitudDeInscripcionService
      .updateSolicitudDeInscripcion(this.mapFormToBackendData())
      .pipe(takeUntil(this.subscription))
      .subscribe({
        error: (err: Error) => console.error(err),
        complete: () => {
          this.router.navigate(['/files/solicitudDeInscripcionSearch']);
        },
      });
  }
  createSolicitud() {
    this.solicitudDeInscripcionService
      .createSolicitudDeInscripcion(this.mapFormToBackendData())
      .pipe(takeUntil(this.subscription))
      .subscribe({
        error: (err: Error) => console.error(err),
        complete: () => {
          this.router.navigate(['/files/solicitudDeInscripcionSearch']);
        },
      });
  }

  loadMunicipio(provCodProvincia: string) {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicitudeMunicipioService
        .getMunicipio(provCodProvincia)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.municipioList = data.response;
            resolve(true);
          },
          error: (err: Error) => {
            reject(err);
          },
        });
    });
  }

  loadCP(muniCodProvincia: string, muniCodMunicipio: string) {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicituddeCodigoPostalService
        .getMunicipio(muniCodProvincia, muniCodMunicipio)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data) => {
            this.postalList = data.response;
            resolve(true);
          },
          error: (err: Error) => reject(err),
        });
    });
  }

  fetchDetails(cifNif: string): Promise<void | boolean> {
    return new Promise<void | boolean>((resolve, reject) => {
      if (!CIFValidator.esNifNieCifValido(cifNif)) {
        this.openInvalidCifDialog();
        resolve(false);
      } else {
        this.solicitudDeInscripcionService
          .getByNifCif(cifNif)
          .pipe(takeUntil(this.subscription))
          .subscribe({
            next: (data) => {
              this.patchValue(data.response);
              resolve(true);
            },
            error: (err: Error) => {
              console.error(err);
              reject(err);
            },
          });
      }
    });
  }

  async patchValue(response: any) {
    const codproValue = this.provinciaList.find(
      (provincia) => provincia.provCodProvincia === response.codpro
    );

    let codmunValue;
    if (response.codpro) {
      await this.loadMunicipio(response.codpro);
      codmunValue = this.municipioList.find(
        (municipio) =>
          municipio.muniCodMunicipio === response.codmun &&
          municipio.muniCodProvincia === response.codpro
      );
    }
    let codCPValue;
    if (response.codpro) {
      await this.loadCP(response.codpro, response.codmun);

      codCPValue = this.postalList.find(
        (cp) =>
          cp.cpostCodMuni === response.codmun &&
          cp.cpostCodPostal === response.cp
      );
    }

    const feentradaValue = this.dateFormatConverter(response.feentrada);
    const publicaWebValue = response.publicaWeb === 'Y' ? true : false;
    this.datosPrincipalesForm.patchValue({
      id: response.id || null,
      entidad: {
        nifcif: response.nifcif,
        denomsocial: response.denomsocial,
        domsocial: response.domsocial,
        codpro: codproValue || '',
        codmun: codmunValue || '',
        cp: codCPValue,
        numinscripcion: response.numinscripcion,
        feentrada: feentradaValue,
        fbaja: response.fbaja,
        email: response.email,
        telefono: response.telefono,
        fax: response.fax,
        publicaWeb: publicaWebValue,
        observaciones: response.observaciones,
      },
      notificaciones: {
        addressCopy: true,
        dirDomicilio: response.dirDomicilio,
        dirPro: response.dirCodpro,
        dirMun: response.dirCodmun,
        dirCp: response.dirCp,
        dirEmail: response.dirEmail,
        dirFax: response.dirFax,
        dirTelefono: response.dirTelefono,
      },
      representantesDTO: response.representantesDTO,
    });
  }

  dateFormatConverter(date: string) {
    const formattedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    formattedDate.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  openInvalidCifDialog() {
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
        alertMessage: this.translocoService.translate(
          `toast_messages.invalid_cif`
        ),
        headerStyle: {
          icon: 'report_problem',
          dialogType: 'warn',
          title: this.translocoService.translate('dialog_header.alert'),
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
    return new Promise<void | boolean>((resolve, reject) => {
      this.datosPrincipalesForm.get('notificaciones')?.patchValue({
        dirDomicilio: this.datosPrincipalesForm.get('entidad.domsocial')?.value,
        dirPro: this.datosPrincipalesForm.get('entidad.codpro')?.value,
        dirMun: this.datosPrincipalesForm.get('entidad.codmun')?.value,
        dirCp: this.datosPrincipalesForm.get('entidad.cp')?.value,
        dirEmail: this.datosPrincipalesForm.get('entidad.email')?.value,
        dirTelefono: this.datosPrincipalesForm.get('entidad.telefono')?.value,
      });
      resolve(true);
    });
  }

  clearNotificacioneFields() {
    this.datosPrincipalesForm.get('notificaciones')?.patchValue({
      dirDomicilio: '',
      dirPro: '',
      dirMun: '',
      dirCp: '',
      dirEmail: '',
      dirTelefono: '',
    });
  }

  perviousScreen() {
    this.router.navigate(['/files/solicitudDeInscripcionSearch']);
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
