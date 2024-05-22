import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { RepresentantesLegal } from '@app/files/interfaces/solicitud-de-inscripcion';

import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDeInscripcionRepresentantesService extends CommonService {
  getByRepresentantesNifCif(cifNif: string) {
    console.log('cifNif :  ' + cifNif);
    return this._arqHttpClient.get<CustomResponse<RepresentantesLegal>>(
      this.urlBuilder(UrlEndpoints.reccaRepresentantes) +
        `/findByNifcif/${cifNif}`
    );
  }
  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaRepresentantes:
        url += `${type}`;
        break;
    }
    return url;
  }
}
