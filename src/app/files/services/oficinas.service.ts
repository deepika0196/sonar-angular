import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { Oficinas } from '@app/files/interfaces/oficinas';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class OficinasService extends CommonService {
  getOficinas() {
    return this._arqHttpClient.get<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaSecciones)
    );
  }

  postOficinas(officeDetails: Oficinas) {
    return this._arqHttpClient.post<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      officeDetails
    );
  }

  updateOficinas(officeDetails: Oficinas) {
    return this._arqHttpClient.put<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaSecciones),
      officeDetails
    );
  }

  deleteOficinas(codigo: string) {
    return this._arqHttpClient.delete<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaSecciones) + `/${codigo}`
    );
  }

  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.oficinas:
        url += `${type}`;
        break;
    }
    return url;
  }
}
