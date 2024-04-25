import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files.component';
import { SolicitudDeInscripcionComponent } from '@app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';

const routes: Routes = [{ path: '', component: FilesComponent }];

@NgModule({
  declarations: [SolicitudDeInscripcionComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {}
