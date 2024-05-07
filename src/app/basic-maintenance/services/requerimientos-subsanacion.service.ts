import { Injectable } from '@angular/core';
import { RequerimientosSubsanacion } from '@app/basic-maintenance/interfaces/requerimientos-subsanacion';

import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import {
  CommonService,
  CustomResponse,
} from '@app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class RequerimientosSubsanacionService extends CommonService {
  getRequerimientosSubsanacions() {
    return this._arqHttpClient.get<CustomResponse<RequerimientosSubsanacion>>(
      this.urlBuilder(UrlEndpoints.reccaRequerimientos)
    );
  }

  postRequerimientosSubsanacion(campDetails: RequerimientosSubsanacion) {
    return this._arqHttpClient.post<CustomResponse<RequerimientosSubsanacion>>(
      this.urlBuilder(UrlEndpoints.reccaRequerimientos),
      campDetails
    );
  }

  updateRequerimientosSubsanacion(campDetails: RequerimientosSubsanacion) {
    return this._arqHttpClient.put<CustomResponse<RequerimientosSubsanacion>>(
      this.urlBuilder(UrlEndpoints.reccaRequerimientos),
      campDetails
    );
  }

  deleteRequerimientosSubsanacion(codigo: string) {
    return this._arqHttpClient.delete<
      CustomResponse<RequerimientosSubsanacion>
    >(this.urlBuilder(UrlEndpoints.reccaRequerimientos) + `/${codigo}`);
  }

  urlBuilder(type: string): string {
    let url: string = this.apiUrl;
    switch (type) {
      case UrlEndpoints.reccaRequerimientos:
        url += `${type}`;
        break;
    }
    return url;
  }
}
