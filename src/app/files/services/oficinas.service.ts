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
  getOficinasByEntidadId(entidadId: number) {
    return this._arqHttpClient.get<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaOficinas) +
        `/findByEntidadId/${entidadId}`
    );
  }

  postOficinas(officeDetails: Oficinas) {
    return this._arqHttpClient.post<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaOficinas),
      officeDetails
    );
  }

  updateOficinas(officeDetails: Oficinas) {
    return this._arqHttpClient.put<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaOficinas),
      officeDetails
    );
  }

  deleteOficinas(oficinaId: number, entidadId: number) {
    return this._arqHttpClient.delete<CustomResponse<Oficinas>>(
      this.urlBuilder(UrlEndpoints.reccaOficinas) +
        `/delete/${oficinaId}/${entidadId}`
    );
  }

  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaOficinas:
        url += `${type}`;
        break;
    }
    return url;
  }
}
