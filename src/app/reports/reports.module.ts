import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { GeneracionDeInformesComponent } from './generacion-de-informes/generacion-de-informes.component';
import { SolicitudDeInscripcionComponent } from './solicitud-de-inscripcion/solicitud-de-inscripcion.component';


@NgModule({
  declarations: [
    ReportsComponent,
    GeneracionDeInformesComponent,
    SolicitudDeInscripcionComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
