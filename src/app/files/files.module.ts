import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';

import { SharedModule } from '@app/shared/shared.module';
import { SolicitudDeInscripcionComponent } from '@app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';
import { CIFValidator } from '@app/core/utils/cif-validator';
import { AcreditacionesComponent } from '@app/files/components/solicitud-de-inscripcion/components/acreditaciones/acreditaciones.component';
import { DocumentosComponent } from '@app/files/components/solicitud-de-inscripcion/components/documentos/documentos.component';
import { ActualizacionesComponent } from '@app/files/components/solicitud-de-inscripcion/components/actualizaciones/actualizaciones.component';
import { OficinasComponent } from '@app/files/components/solicitud-de-inscripcion/components/oficinas/oficinas.component';
@NgModule({
  declarations: [
    FilesComponent,
    SolicitudDeInscripcionComponent,
    AcreditacionesComponent,
    DocumentosComponent,
    ActualizacionesComponent,
    OficinasComponent,
  ],
  imports: [CommonModule, FilesRoutingModule, SharedModule],
  providers: [CIFValidator],
})
export class FilesModule {}
