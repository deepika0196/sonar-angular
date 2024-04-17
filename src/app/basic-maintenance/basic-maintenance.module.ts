import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicMaintenanceRoutingModule } from './basic-maintenance-routing.module';
import { BasicMaintenanceComponent } from './basic-maintenance.component';
import { RepresentantesDeEntidadComponent } from './components/representantes-de-entidad/representantes-de-entidad.component';
import { RequerimientosSubsanacionComponent } from './components/requerimientos-subsanacion/requerimientos-subsanacion.component';
import { CampoDeActuacionComponent } from './components/campo-de-actuacion/campo-de-actuacion.component';
import { EntidadesSolicitantesComponent } from './components/entidades-solicitantes/entidades-solicitantes.component';
import { PrimeNgModule } from '../prime-ng.module';
import { AlertDialogComponent } from './components/campo-de-actuacion/alert-dialog/alert-dialog.component';


@NgModule({
  declarations: [
    BasicMaintenanceComponent,
    RepresentantesDeEntidadComponent,
    RequerimientosSubsanacionComponent,
    CampoDeActuacionComponent,
    EntidadesSolicitantesComponent,
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    BasicMaintenanceRoutingModule,
    PrimeNgModule
  ]
})
export class BasicMaintenanceModule { }
