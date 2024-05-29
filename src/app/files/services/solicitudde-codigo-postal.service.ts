import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { PostalCode } from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicituddeCodigoPostalService extends CommonService {
  getMunicipio(provincia: string, municipio: string) {
    const params = {
      muniCodMunicipio: municipio,
      provCodProvincia: provincia,
    };
    return this._arqHttpClient.get<CustomResponse<PostalCode>>(
      this.urlBuilder(UrlEndpoints.vmcrcCodigoPostal),
      { params }
    );
  }
  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.vmcrcCodigoPostal:
        url += `${type}`;
        break;
    }
    return url;
  }
}
