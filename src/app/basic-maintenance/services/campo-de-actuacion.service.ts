import { Injectable } from '@angular/core';
import { CampoDeActuacion } from '../interfaces/campoDeActuacion';
import { environment } from '@env/environment';
import { CommonService } from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

@Injectable({
  providedIn: 'root',
})
export class CampoDeActuacionService extends CommonService {
  public urlApi = `${environment.settings.hostDynamic}/api/v1/reccaSecciones`;

  getCampoDeActuacions() {
    return this._arqHttpClient.get<Array<CampoDeActuacion>>(
      this.urlBuilder(UrlEndpoints.reccaSecciones)
    );
  }

  postCampoDeActuacions(campDetails: CampoDeActuacion) {
    return this._arqHttpClient.post<CampoDeActuacion>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      campDetails
    );
  }

  updateCampoDeActuacions(campDetails: CampoDeActuacion) {
    return this._arqHttpClient.put<CampoDeActuacion>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      campDetails
    );
  }

  deleteCampoDeActuacions(campDetails: CampoDeActuacion) {
    return this._arqHttpClient.delete<CampoDeActuacion>(
      this.urlBuilder(UrlEndpoints.reccaSecciones) + `/${campDetails.codigo}`
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
