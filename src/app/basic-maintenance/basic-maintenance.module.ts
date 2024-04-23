import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BasicMaintenanceRoutingModule } from './basic-maintenance-routing.module';
import { BasicMaintenanceComponent } from './basic-maintenance.component';
import { AlertDialogComponent } from './components/campo-de-actuacion/alert-dialog/alert-dialog.component';
import { CampoDeActuacionComponent } from './components/campo-de-actuacion/campo-de-actuacion.component';
import { EntidadesSolicitantesComponent } from './components/entidades-solicitantes/entidades-solicitantes.component';
import { RepresentantesDeEntidadComponent } from './components/representantes-de-entidad/representantes-de-entidad.component';
import { RequerimientosSubsanacionComponent } from './components/requerimientos-subsanacion/requerimientos-subsanacion.component';

@NgModule({
  declarations: [
    BasicMaintenanceComponent,
    RepresentantesDeEntidadComponent,
    RequerimientosSubsanacionComponent,
    CampoDeActuacionComponent,
    EntidadesSolicitantesComponent,
    AlertDialogComponent,
  ],
  imports: [CommonModule, BasicMaintenanceRoutingModule, SharedModule],
})
export class BasicMaintenanceModule {}
