import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { GlobalConstant } from '@app/core/constants/globalConstants';
interface DatosPrincipales {
  cif: string;
  razonSocial: string;
  domicilioSocia: string;
  provincia: string;
  municipio: string;
  cPostal: string;
  nRegistro: string;
  fechaSolicitudDeInscripción: Date;
  fechaBaja: Date;
  email: string;
  telefono: string;
  fax: string;
  publicarEnWeb: boolean;
}

@Component({
  selector: 'app-entidades-solicitantes',
  templateUrl: './entidades-solicitantes.component.html',
  styleUrls: ['./entidades-solicitantes.component.css'],
})
export class EntidadesSolicitantesComponent implements OnInit {
  RegistroDeEntidades: string = GlobalConstant.RegistroDeEntidades;
  archive: string;

  DatosPrincipalesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.DatosPrincipalesForm = this.fb.group({
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

  ngOnInit() {}

  onSubmit() {
    console.log(this.DatosPrincipalesForm);
    console.log(this.DatosPrincipalesForm.get('cif')?.valid);
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
