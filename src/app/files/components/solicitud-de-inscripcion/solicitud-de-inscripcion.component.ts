import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { GlobalConstant } from '@app/core/constants/globalConstants';

import {
  Entidad,
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
import { TranslocoService } from '@ngneat/transloco';

import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

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
  copyAdress = true;
  entidadData: Entidad = {};
  datosPrincipalesForm: FormGroup;
  deleteDialogRef: DynamicDialogRef | undefined;
  alertDialogRef: DynamicDialogRef | undefined;

  municipioList: Municipio[];
  selectedMunicipio: Municipio;
  filteredMunicipio: Municipio[];

  provinciaList: Provincia[];
  selectedProvincia: Provincia;
  filteredProvincia: Provincia[];

  private subscription = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private translocoService: TranslocoService,
    private dialogService: DialogService,
    private solicitudProvinciaService: SolicitudeProvinciaService,
    private solicitudeMunicipioService: SolicitudeMunicipioService,
    private solicitudDeInscripcionService: SolicitudDeInscripcionService
  ) {
    this.datosPrincipalesForm = this.fb.group({
      entidadData: this.fb.group({
        cif: new FormControl(null, [
          Validators.required,
          this.notOnlyWhitespace(),
        ]),
        razonSocial: new FormControl(null, [
          Validators.required,
          this.notOnlyWhitespace(),
        ]),
        domicilioSocia: new FormControl(null, [
          Validators.required,
          this.notOnlyWhitespace(),
        ]),
        provincia: new FormControl(null),
        municipio: new FormControl(null),
        cPostal: new FormControl(null),
        nRegistro: new FormControl(null),
        feentrada: new FormControl(null),
        fechaBaja: new FormControl({
          value: '',
          disabled: true,
        }),
        email: new FormControl(null, Validators.email),
        telefono: new FormControl(null),
        fax: new FormControl(null),
        publicarEnWeb: new FormControl(null),
        observaciones: new FormControl(null),
      }),
      notificacionesData: this.fb.group({
        addressCopy: new FormControl(true),
        domicilio: new FormControl(null),
        provincia: new FormControl(null),
        municipio: new FormControl(null),
        cPostal: new FormControl(null),
        email: new FormControl(null, Validators.email),
        telefono: new FormControl(null),
      }),
      representanteLegal: this.fb.group({
        nifCif: new FormControl(),
        nombre: new FormControl(null),
        apellidos: new FormControl(),
        domicilio: new FormControl(null),
        provincia: new FormControl(null),
        municipio: new FormControl(null),
        cPostal: new FormControl(null),
        email: new FormControl(null, Validators.email),
        telefono: new FormControl(null),
      }),
    });
    this.copyAddressFieldsOfEntidadData();
    this.datosPrincipalesForm.get('entidadData')?.valueChanges.subscribe(() => {
      if (this.copyAdress) {
        this.copyAddressFieldsOfEntidadData();
      }
    });

    this.datosPrincipalesForm
      .get('notificacionesData.addressCopy')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          this.copyAdress = value;
          this.copyAddressFieldsOfEntidadData();
        } else {
          this.copyAdress = false;
          this.clearnotificacioneFields();
        }
      });
  }

  ngOnInit(): void {
    this.datosPrincipalesForm.get('entidadData')?.valueChanges.subscribe(() => {
      this.isValidForm =
        this.datosPrincipalesForm.get('entidadData')?.valid ?? false;
    });
    this.solicitudProvinciaService
      .getProvincia()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.provinciaList = data.response;
          console.log(this.provinciaList);
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });

    this.datosPrincipalesForm
      .get('entidadData.fechaBaja')
      ?.valueChanges.subscribe((value) => {
        this.isFechaBajaNull = value === null;
      });

    this.datosPrincipalesForm
      .get('notificacionesData.addressCopy')
      ?.valueChanges.subscribe((value) => {
        this.copyAdress = value;
        this.datosPrincipalesForm
          .get('entidadData')
          ?.valueChanges.subscribe(() => {
            this.isValidForm =
              this.datosPrincipalesForm.get('entidadData')?.valid ?? false;
          });
      });
  }

  onSubmit() {
    this.entidadData.nifcif =
      this.datosPrincipalesForm.get('entidadData.cif')?.value;
    this.entidadData.email =
      this.datosPrincipalesForm.get('entidadData.email')?.value;
    console.log(this.entidadData);
    this.solicitudDeInscripcionService.postEnten(this.entidadData);
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
        complete: () => {},
      });
  }

  municipioSelected() {
    console.log(this.selectedMunicipio);
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
            .get('entidadData')
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
    this.datosPrincipalesForm.get('notificacionesData')?.patchValue({
      domicilio: this.datosPrincipalesForm.get('entidadData.domicilioSocia')
        ?.value,
      provincia: this.datosPrincipalesForm.get('entidadData.provincia')?.value,
      municipio: this.datosPrincipalesForm.get('entidadData.municipio')?.value,
      cPostal: this.datosPrincipalesForm.get('entidadData.cPostal')?.value,
      email: this.datosPrincipalesForm.get('entidadData.email')?.value,
      telefono: this.datosPrincipalesForm.get('entidadData.telefono')?.value,
    });
  }

  private clearnotificacioneFields() {
    this.datosPrincipalesForm.get('notificacionesData')?.patchValue({
      domicilio: '',
      provincia: '',
      municipio: '',
      cPostal: '',
      email: '',
      telefono: '',
    });
  }
  filterProvincia(event: any) {
    const query = event.query.toLowerCase();
    this.filteredProvincia = this.provinciaList.filter((provincia) =>
      provincia.provCapital.toLowerCase().startsWith(query)
    );
  }

  filterMacc(event: any) {
    const query = event.query.toLowerCase();
    this.filteredMunicipio = this.municipioList.filter((municipio) =>
      municipio.muniDenominacion.toLowerCase().startsWith(query)
    );
  }

  ngOnDestroy(): void {
    this.provinciaList = [];
    this.municipioList = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
