import { Injectable } from '@angular/core';
import { CampoDeActuacion } from '../interfaces/campoDeActuacion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

@Injectable({
  providedIn: 'root',
})
export class CampoDeActuacionService extends CommonService {
  getCampoDeActuacions() {
    return this._arqHttpClient.get<CustomResponse>(
      this.urlBuilder(UrlEndpoints.reccaSecciones)
    );
  }

  postCampoDeActuacions(campDetails: CampoDeActuacion) {
    return this._arqHttpClient.post<CustomResponse>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      campDetails
    );
  }

  updateCampoDeActuacions(campDetails: CampoDeActuacion) {
    return this._arqHttpClient.put<CustomResponse>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      campDetails
    );
  }

  deleteCampoDeActuacions(codigo: string) {
    return this._arqHttpClient.delete<CustomResponse>(
      this.urlBuilder(UrlEndpoints.reccaSecciones) + `/${codigo}`
    );
  }

  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaSecciones:
        url += `${type}`;
        break;
    }
    return url;
  }
}
