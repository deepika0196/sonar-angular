import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { Entidad } from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDeInscripcionService extends CommonService {
  postEnten(data: any) {
    console.log(data);
  }

  getSolicitudDeInscripcions() {
    return this._arqHttpClient.get<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades)
    );
  }

  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaEntidades:
        url += `${type}`;
        break;
    }
    return url;
  }
}
