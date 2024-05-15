import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files.component';
import { SolicitudDeInscripcionComponent } from '@app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';
import { SolicitudDeInscripcionSearchComponent } from '@app/files/components/solicitud-de-inscripcion-search/solicitud-de-inscripcion-search.component';
import { environment } from '@env/environment';

const routes: Routes = [
  { path: '', component: FilesComponent },
  {
    path: 'solicitudDeInscripcion',
    component: SolicitudDeInscripcionComponent,
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
    path: 'solicitudDeInscripcionSearch',
    component: SolicitudDeInscripcionSearchComponent,
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
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {}
