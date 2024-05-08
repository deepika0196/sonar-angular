import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { GlobalConstant } from '@app/core/constants/globalConstants';

@Component({
  selector: 'app-solicitud-de-inscripcion',
  templateUrl: './solicitud-de-inscripcion.component.html',
  styleUrls: ['./solicitud-de-inscripcion.component.css'],
})
export class SolicitudDeInscripcionComponent implements OnInit {
  registroDeEntidades: string = GlobalConstant.RegistroDeEntidades;
  isValidForm = false;
  isFechaBajaNull = true;

  datosPrincipalesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.datosPrincipalesForm = this.fb.group({
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
      fechaSolicitudDeInscripción: new FormControl(null),
      fechaBaja: new FormControl(null),
      email: new FormControl(null, Validators.email),
      telefono: new FormControl(null),
      fax: new FormControl(null),
      publicarEnWeb: new FormControl(null),
      observaciones: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.datosPrincipalesForm.valueChanges.subscribe(() => {
      this.isValidForm = this.datosPrincipalesForm.valid;
    });

    this.datosPrincipalesForm
      .get('fechaBaja')
      ?.valueChanges.subscribe((value) => {
        this.isFechaBajaNull = value === null;
      });
  }
  updateFechaBaja() {
    if (!this.isFechaBajaNull)
      this.datosPrincipalesForm.patchValue({
        fechaBaja: null,
      });
    else {
      this.datosPrincipalesForm.patchValue({
        fechaBaja: new Date(),
      });
    }
  }

  onSubmit() {
    console.log(this.datosPrincipalesForm);
  }

  notOnlyWhitespace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      if (value && value.trim().length === 0) {
        return { notOnlyWhitespace: true };
      }
      return null;
    };
  }
}
