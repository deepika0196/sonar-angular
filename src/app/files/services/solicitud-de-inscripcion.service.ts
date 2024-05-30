import { Injectable } from '@angular/core';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import {
  Entidad,
  EntidadFilter,
} from '@app/files/interfaces/solicitud-de-inscripcion';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDeInscripcionService extends CommonService {
  public createSolicitudDeInscripcion(entidadDetials: Entidad) {
    return this._arqHttpClient.post<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades),
      entidadDetials
    );
  }

  public updateSolicitudDeInscripcion(entidadDetials: Entidad) {
    return this._arqHttpClient.put<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades),
      entidadDetials
    );
  }

  public getByNifCif(cif: string) {
    return this._arqHttpClient.get<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades) + `/findByNifcif/${cif}`
    );
  }

  public getSolicitudDeInscripcions() {
    return this._arqHttpClient.get<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades)
    );
  }

  public archiveSolicitudDeInscripcion(id: number) {
    return this._arqHttpClient.delete<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades) + `/archive/${id}`
    );
  }

  public restoreSolicitudDeInscripcion(id: number) {
    return this._arqHttpClient.delete<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades) + `/restore/${id}`
    );
  }

  public filterSolicitudDeInscripcions(entidadFilter: EntidadFilter) {
    return this._arqHttpClient.post<CustomResponse<Entidad>>(
      this.urlBuilder(UrlEndpoints.reccaEntidades) + `/searchAdv`,
      entidadFilter
    );
  }

  public urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaEntidades:
        url += `${type}`;
        break;
    }
    return url;
  }
}
