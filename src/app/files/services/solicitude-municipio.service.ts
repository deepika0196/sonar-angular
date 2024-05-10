import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import {
  Municipio,
  Provincia,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudeMunicipioService extends CommonService {
  getMunicipio(provCodProvincia: string) {
    const params = { provCodProvincia };
    return this._arqHttpClient.get<CustomResponse<Municipio>>(
      this.urlBuilder(UrlEndpoints.vmcrcMunicipio),
      { params }
    );
  }
  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.vmcrcMunicipio:
        url += `${type}`;
        break;
    }
    return url;
  }
}
