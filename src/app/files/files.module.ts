import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';

import { SharedModule } from '@app/shared/shared.module';
import { SolicitudDeInscripcionComponent } from '@app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';

@NgModule({
  declarations: [FilesComponent, SolicitudDeInscripcionComponent],
  imports: [CommonModule, FilesRoutingModule, SharedModule],
})
export class FilesModule {}
