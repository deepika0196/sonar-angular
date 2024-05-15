import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';
import { SolicitudDeInscripcionSearchComponent } from './components/solicitud-de-inscripcion-search/solicitud-de-inscripcion-search.component';
import { SharedModule } from '@app/shared/shared.module';
import { SolicitudDeInscripcionComponent } from '@app/files/components/solicitud-de-inscripcion/solicitud-de-inscripcion.component';
import { CIFValidator } from '@app/core/utils/cif-validator';

@NgModule({
  declarations: [
    FilesComponent,
    SolicitudDeInscripcionComponent,
    SolicitudDeInscripcionSearchComponent,
  ],
  imports: [CommonModule, FilesRoutingModule, SharedModule],
  providers: [CIFValidator],
})
export class FilesModule {}
