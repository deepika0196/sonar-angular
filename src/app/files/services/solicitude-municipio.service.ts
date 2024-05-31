import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { Municipio } from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudeMunicipioService extends CommonService {
  public getMunicipio(provCodProvincia: string) {
    const params = { provCodProvincia };
    return this._arqHttpClient.get<CustomResponse<Municipio>>(
      this.urlBuilder(UrlEndpoints.vmcrcMunicipio),
      { params }
    );
  }
  public urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.vmcrcMunicipio:
        url += `${type}`;
        break;
    }
    return url;
  }
}
