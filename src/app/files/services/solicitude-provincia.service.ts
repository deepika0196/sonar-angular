import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { Provincia } from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudeProvinciaService extends CommonService {
  getProvincia() {
    return this._arqHttpClient.get<CustomResponse<Provincia>>(
      this.urlBuilder(UrlEndpoints.vmcrcProvincia)
    );
  }
  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.vmcrcProvincia:
        url += `${type}`;
        break;
    }
    return url;
  }
}
