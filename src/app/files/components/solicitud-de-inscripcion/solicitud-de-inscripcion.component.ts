import { Component, OnDestroy, OnInit } from '@angular/core';
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
  RepresentantesLegal,
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
import { OficinasService } from '@app/files/services/oficinas.service';
import { Oficinas } from '@app/files/interfaces/oficinas';
import { SolicitudDeInscripcionRepresentantesService } from '@app/files/services/solicitud-de-inscripcion-representantes.service';
import {
  CustomResponsSinglee,
  CustomResponse,
} from '@app/shared/services/common.service';

@Component({
  selector: 'app-solicitud-de-inscripcion',
  templateUrl: './solicitud-de-inscripcion.component.html',
  styleUrls: ['./solicitud-de-inscripcion.component.css'],
  providers: [MessageService, DialogService, DynamicDialogRef],
})
export class SolicitudDeInscripcionComponent implements OnInit, OnDestroy {
  protected isValidForm = false;
  protected isFechaBajaNull = true;

  protected copyAdress: boolean;
  protected datosPrincipalesForm: FormGroup;
  private alertDialogRef: DynamicDialogRef | undefined;
  private numinscripcion = '/ECMCA';
  protected calendarDateFormat = GlobalConstant.ddmmyy;

  protected postalList: PostalCode[] = [];
  protected filteredPostal: PostalCode[] = [];
  protected municipioList: Municipio[] = [];
  protected filteredMunicipio: Municipio[] = [];
  protected disableTabs: boolean;
  protected oficinasList: Oficinas[] = [];

  protected provinciaList: Provincia[] = [];
  protected filteredProvincia: Provincia[] = [];
  protected cifNif = '';
  protected readOnlyMode: boolean;
  protected isLegalCifNif: boolean;
  private subscription = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private translocoService: TranslocoService,
    private dialogService: DialogService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private solicitudDeInscripcionService: SolicitudDeInscripcionService,
    private oficinasService: OficinasService,
    private solicituddeCodigoPostalService: SolicituddeCodigoPostalService,
    private representantesService: SolicitudDeInscripcionRepresentantesService,
    private location: Location,
    private router: Router
  ) {
    this.initializeForm();
  }

  private disableFileds() {
    return new Promise<void | boolean>((resolve, reject) => {
      this.datosPrincipalesForm.get('entidad.fbaja')?.disable();
      this.datosPrincipalesForm
        .get('notificaciones.addressCopy')
        ?.setValue(true);
      this.datosPrincipalesForm.get('notificaciones.dirCodpro')?.disable();
      this.datosPrincipalesForm.get('notificaciones.dirCodmun')?.disable();
      this.datosPrincipalesForm.get('notificaciones.dirCp')?.disable();
      if (!this.isLegalCifNif) {
        console.log('this is  ===', this.isLegalCifNif);
        this.datosPrincipalesForm.get('representantesDTO.codpro')?.disable();
        this.datosPrincipalesForm.get('representantesDTO.codmun')?.disable();
        this.datosPrincipalesForm.get('representantesDTO.cp')?.disable();
      }
      resolve(true);
    });
  }
  ngOnInit(): void {
    this.copyAdress = true;
    this.initializePage();
  }

  private async initializePage() {
    await this.loadProvincia();
    const state: State = this.location.getState() as State;
    this.disableTabs = state.action === 'add' ? false : false;
    this.checkMode(state.action);
    await this.setupFormChangeSubscriptions();

    await this.setFormReadOnly(this.readOnlyMode);
    if (state.cif) {
      this.cifNif = state.cif;
      await this.fetchDetails(state.cif);
      await this.fetchAllOficinasById(state.id);
    }
    await this.disableFileds();
  }

  protected async fetchAllOficinasById(id: number): Promise<void | boolean> {
    return new Promise<void | boolean>((resolve, reject) => {
      this.oficinasService
        .getOficinasByEntidadId(id)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data: CustomResponse<Oficinas>) => {
            this.oficinasList = data.response;
            resolve(true);
          },
          error: (err: Error) => {
            console.error(err);
            reject(err);
          },
        });
    });
  }

  protected loadProvincia() {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicitudProvinciaService
        .getProvincia()
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data: CustomResponse<Provincia>) => {
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

  private checkRepresentanteLegalCifNif(
    cifNif: string
  ): Promise<void | boolean> {
    return new Promise<void | boolean>((resolve, reject) => {
      if (!CIFValidator.esNifNieCifValido(cifNif)) {
        this.openInvalidCifDialog();
        this.resetRepresentantesDTOForm();
        resolve(false);
      } else {
        this.representantesService
          .getByRepresentantesNifCif(cifNif)
          .pipe(takeUntil(this.subscription))
          .subscribe({
            next: (data: CustomResponsSinglee<RepresentantesLegal>) => {
              this.patchValueOfRepresentantes(data.response);
              resolve(true);
            },
            error: (err) => reject(err),
          });
      }
    });
  }

  private async patchValueOfRepresentantes(response: RepresentantesLegal) {
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

    this.datosPrincipalesForm.get('representantesDTO')?.patchValue({
      apellidos: response.apellidos || '',
      codmun: codmunValue || '',
      cp: codCPValue,
      codpro: codproValue,
      domicilio: response.domicilio || '',
      email: response.email || '',
      fax: response.fax || '',
      id: response.id,
      nifcif: response.nifcif || '',
      nombre: response.nombre || '',
      telefono: response.telefono || '',
    });
  }
  protected fillDefaultNotification() {
    if (this.copyAdress) {
      this.copyAddressFieldsOfEntidadData();
    }
  }

  private setFormReadOnly(isReadOnly: boolean) {
    return new Promise<void | boolean>((resolve, reject) => {
      if (isReadOnly) {
        this.datosPrincipalesForm.disable();
        resolve(true);
      } else {
        this.datosPrincipalesForm.enable();
        resolve(true);
      }
    });
  }
  private checkMode(mode: string) {
    return new Promise<void | boolean>((resolve, reject) => {
      if (mode == 'view') {
        this.readOnlyMode = true;
      } else {
        this.readOnlyMode = false;
      }

      return mode;
    });
  }

  protected onSubmit() {
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

  private initializeForm(): void {
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
        addressCopy: [null],
        dirDomicilio: [null],
        dirCodpro: [null],
        dirCodmun: [null],
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

  private mapFormToBackendData(): Entidad {
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

    const dirPro =
      this.datosPrincipalesForm.get('notificaciones.dirCodpro')?.value || '';
    const dirMun =
      this.datosPrincipalesForm.get('notificaciones.dirCodmun')?.value || '';
    const dirCP =
      this.datosPrincipalesForm.get('notificaciones.dirCp')?.value || '';

    const publicaWeValue = entidad.publicaWeb ? 'Y' : 'N';

    const mappedData: Entidad = {
      id: formValue.id || null,
      codidfiscal: '',
      codmun: entidad.codmun?.muniCodMunicipio || '',
      cp: entidad.cp?.cpostCodPostal || '',
      codpro: entidad?.codpro?.provCodProvincia || '',
      denomsocial: entidad?.denomsocial || '',
      dirCodmun: dirMun?.muniCodMunicipio || '',
      dirCp: dirCP?.cpostCodPostal || '',
      dirCodpro: dirPro?.provCodProvincia || '',
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
        domicilio: representantesDTO?.domicilio || '',
        email: representantesDTO?.email || '',
        entidadId: formValue?.id || null,
        fax: representantesDTO?.fax || '',
        id: representantesDTO?.id || null,
        nifcif: representantesDTO?.nifcif || '',
        nombre: representantesDTO?.nombre || '',
        telefono: representantesDTO?.telefono || '',
      },
      telefono: entidad.telefono || '',
      web: '',
    };

    return mappedData;
  }
  private updateSolicitud() {
    this.solicitudDeInscripcionService
      .updateSolicitudDeInscripcion(this.mapFormToBackendData())
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data: CustomResponse<Entidad>) => {
          if (data.success) {
            this.router.navigate(['/files/solicitudDeInscripcionSearch']);
          }
        },
        error: (err: Error) => console.error(err),
      });
  }
  private createSolicitud() {
    this.solicitudDeInscripcionService
      .createSolicitudDeInscripcion(this.mapFormToBackendData())
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data: CustomResponse<Entidad>) => {
          if (data.success) {
            this.router.navigate(['/files/solicitudDeInscripcionSearch']);
          }
        },
        error: (err: Error) => console.error(err),
      });
  }

  protected loadMunicipio(provCodProvincia: string) {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicitudeMunicipioService
        .getMunicipio(provCodProvincia)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data: CustomResponse<Municipio>) => {
            this.municipioList = data.response;
            resolve(true);
          },
          error: (err: Error) => {
            reject(err);
          },
        });
    });
  }

  protected loadCP(muniCodProvincia: string, muniCodMunicipio: string) {
    return new Promise<void | boolean>((resolve, reject) => {
      this.solicituddeCodigoPostalService
        .getMunicipio(muniCodProvincia, muniCodMunicipio)
        .pipe(takeUntil(this.subscription))
        .subscribe({
          next: (data: CustomResponse<PostalCode>) => {
            this.postalList = data.response;

            resolve(true);
          },
          error: (err: Error) => reject(err),
        });
    });
  }

  private resetCompleteForm(): void {
    this.datosPrincipalesForm.reset({
      id: null,
      entidad: {
        nifcif: null,
        denomsocial: null,
        domsocial: null,
        codpro: null,
        codmun: null,
        cp: null,
        numinscripcion: null,
        feentrada: null,
        fbaja: { value: null, disabled: true },
        email: null,
        telefono: null,
        fax: null,
        publicaWeb: null,
        observaciones: null,
      },
      notificaciones: {
        addressCopy: true,
        dirDomicilio: null,
        dirPro: null,
        dirMun: null,
        dirCp: null,
        dirEmail: null,
        dirFax: null,
        dirTelefono: null,
      },
    });
  }

  protected fetchDetails(cifNif: string): Promise<void | boolean> {
    return new Promise<void | boolean>((resolve, reject) => {
      if (!CIFValidator.esNifNieCifValido(cifNif)) {
        this.openInvalidCifDialog();
        this.resetCompleteForm();
        resolve(false);
      } else {
        this.solicitudDeInscripcionService
          .getByNifCif(cifNif)
          .pipe(takeUntil(this.subscription))
          .subscribe({
            next: (data: CustomResponse<Entidad>) => {
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

  private async patchValue(response: any) {
    const codproValue = this.provinciaList.find(
      (provincia) => provincia.provCodProvincia === response.codpro
    );
    let codCPValue;
    let codmunValue;
    if (response.codpro) {
      await this.loadMunicipio(response.codpro);
      codmunValue = this.municipioList.find(
        (municipio) =>
          municipio.muniCodMunicipio === response.codmun &&
          municipio.muniCodProvincia === response.codpro
      );
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
        dirDomicilio: response.dirDomicilio,
        dirPro: response.dirCodpro || '',
        dirMun: response.dirCodmun || '',
        dirCp: response.dirCp || '',
        dirEmail: response.dirEmail,
        dirFax: response.dirFax,
        dirTelefono: response.dirTelefono,
      },
    });
    if (response.representantesDTO) {
      await this.patchValueOfRepresentantes(response.representantesDTO);
    }
  }

  private dateFormatConverter(date: string) {
    const formattedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    formattedDate.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  private openInvalidCifDialog() {
    const actionButtons: ActionButtons[] = [
      {
        label: this.translocoService.translate('buttons.accept'),

        action: () => {
          this.alertDialogRef?.close();
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

    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      archiveDialogConfig
    );
  }

  private notOnlyWhitespace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value: string = control.value;
      if (value && value.trim().length === 0) {
        return { notOnlyWhitespace: true };
      }
      return null;
    };
  }

  private updateAction(isArchive: boolean) {
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

    this.alertDialogRef = this.dialogService.open(
      AlertDialogComponent,
      archiveDialogConfig
    );
  }

  protected updateFechaBaja() {
    this.updateAction(this.isFechaBajaNull);
  }

  protected copyAddressFieldsOfEntidadData() {
    return new Promise<void | boolean>((resolve, reject) => {
      this.datosPrincipalesForm.get('notificaciones')?.patchValue({
        dirDomicilio: this.datosPrincipalesForm.get('entidad.domsocial')?.value,
        dirCodpro: this.datosPrincipalesForm.get('entidad.codpro')?.value,
        dirCodmun: this.datosPrincipalesForm.get('entidad.codmun')?.value,
        dirCp: this.datosPrincipalesForm.get('entidad.cp')?.value,
        dirEmail: this.datosPrincipalesForm.get('entidad.email')?.value,
        dirTelefono: this.datosPrincipalesForm.get('entidad.telefono')?.value,
      });
      resolve(true);
    });
  }

  private clearNotificacioneFields() {
    this.datosPrincipalesForm.get('notificaciones')?.patchValue({
      dirDomicilio: '',
      dirCodpro: '',
      dirCodmun: '',
      dirCp: '',
      dirEmail: '',
      dirTelefono: '',
    });
  }

  protected perviousScreen() {
    this.router.navigate(['/files/solicitudDeInscripcionSearch']);
  }

  protected filterProvincia(event: { query: string }): void {
    const query = event.query.toLowerCase();
    this.filteredProvincia = this.provinciaList.filter((provincia: Provincia) =>
      provincia.provDenominacion.toLowerCase().startsWith(query)
    );
  }

  protected filterMunicipio(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.filteredMunicipio = this.municipioList.filter((municipio) =>
      municipio.muniDenominacion.toLowerCase().startsWith(query)
    );
  }

  protected filterPostal(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.filteredPostal = this.postalList.filter((postal) =>
      postal.cpostCodPostal.toLowerCase().startsWith(query)
    );
  }

  private resetRepresentantesDTOForm() {
    this.datosPrincipalesForm.get('representantesDTO').reset();
  }
  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
