import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicMaintenanceRoutingModule } from './basic-maintenance-routing.module';
import { BasicMaintenanceComponent } from './basic-maintenance.component';
import { RepresentantesDeEntidadComponent } from '@app/basic-maintenance/components/representantes-de-entidad/representantes-de-entidad.component';
import { RequerimientosSubsanacionComponent } from '@app/basic-maintenance/components/requerimientos-subsanacion/requerimientos-subsanacion.component';
import { CampoDeActuacionComponent } from '@app/basic-maintenance/components/campo-de-actuacion/campo-de-actuacion.component';
import { EntidadesSolicitantesComponent } from '@app/basic-maintenance/components/entidades-solicitantes/entidades-solicitantes.component';
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';
import { SharedModule } from '@shared/shared.module';

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
