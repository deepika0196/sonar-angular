import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicMaintenanceComponent } from './basic-maintenance.component';
import { CampoDeActuacionComponent } from './components/campo-de-actuacion/campo-de-actuacion.component';
import { environment } from '@env/environment';
import { EntidadesSolicitantesComponent } from '@app/basic-maintenance/components/entidades-solicitantes/entidades-solicitantes.component';
import { RequerimientosSubsanacionComponent } from '@app/basic-maintenance/components/requerimientos-subsanacion/requerimientos-subsanacion.component';

const routes: Routes = [
  { path: '', component: BasicMaintenanceComponent },
  {
    path: 'campoDeActuacion',
    component: CampoDeActuacionComponent,
    // canActivate: [ArqRoleGuard],
    // canActivateChild: [ArqRoleGuard],
    data: {
      host: environment.settings.host,
      nombreApp: environment.gvlogin.aplicacion,
      gvloginUrl: environment.gvlogin.url,
      enable: environment.gvlogin.enable,
    },
  },
  {
    path: 'entidadesSolicitantes',
    component: EntidadesSolicitantesComponent,
    // canActivate: [ArqRoleGuard],
    // canActivateChild: [ArqRoleGuard],
    data: {
      host: environment.settings.host,
      nombreApp: environment.gvlogin.aplicacion,
      gvloginUrl: environment.gvlogin.url,
      enable: environment.gvlogin.enable,
    },
  },
  {
    path: 'requerimientosSubsanacion',
    component: RequerimientosSubsanacionComponent,
    // canActivate: [ArqRoleGuard],
    // canActivateChild: [ArqRoleGuard],
    data: {
      host: environment.settings.host,
      nombreApp: environment.gvlogin.aplicacion,
      gvloginUrl: environment.gvlogin.url,
      enable: environment.gvlogin.enable,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicMaintenanceRoutingModule {}
