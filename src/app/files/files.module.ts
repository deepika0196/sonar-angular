import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';
import { SolicitudDeInscripcionComponent } from 'src/app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';

@NgModule({
  declarations: [FilesComponent, SolicitudDeInscripcionComponent],
  imports: [CommonModule, FilesRoutingModule],
})
export class FilesModule {}
