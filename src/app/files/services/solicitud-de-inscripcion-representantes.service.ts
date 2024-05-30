import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { RepresentantesLegal } from '@app/files/interfaces/solicitud-de-inscripcion';

import {
  CommonService,
  CustomResponsSinglee,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDeInscripcionRepresentantesService extends CommonService {
  public getByRepresentantesNifCif(cifNif: string) {
    console.log('cifNif :  ' + cifNif);
    return this._arqHttpClient.get<CustomResponsSinglee<RepresentantesLegal>>(
      this.urlBuilder(UrlEndpoints.reccaRepresentantes) +
        `/findByNifcif/${cifNif}`
    );
  }
  public urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaRepresentantes:
        url += `${type}`;
        break;
    }
    return url;
  }
}
