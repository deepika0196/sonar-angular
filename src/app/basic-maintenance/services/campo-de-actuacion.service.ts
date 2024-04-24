import { Injectable } from '@angular/core';
import { CampoDeActuacion } from '../interfaces/campoDeActuacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { ArqHttpClient } from 'arq-sdk';
import { CommonService } from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

@Injectable({
  providedIn: 'root',
})
export class CampoDeActuacionService extends CommonService {
  public urlApi = `${environment.settings.hostDynamic}/api/v1/reccaSecciones`;

  constructor(private _http: HttpClient) {
    super(_http);
  }

  getProductsData() {
    const data: CampoDeActuacion[] = [
      {
        codigo: 1000,
        deseccion: 'Product Description 1',
        deseccionVal: 'Product Description Val 1',
      },
      {
        codigo: 1001,
        deseccion: 'Product Description 2',
        deseccionVal: 'Product Description Val 2',
      },
      {
        codigo: 1002,
        deseccion: 'Product Description 3',
        deseccionVal: 'Product Description Val 3',
      },
      {
        codigo: 1003,
        deseccion: 'Product Description 4',
        deseccionVal: 'Product Description Val 4',
      },
      {
        codigo: 1004,
        deseccion: 'Product Description 5',
        deseccionVal: 'Product Description Val 5',
      },
      {
        codigo: 1005,
        deseccion: 'Product Description 6',
        deseccionVal: 'Product Description Val 6',
      },
      {
        codigo: 1006,
        deseccion: 'Product Description 7',
        deseccionVal: 'Product Description Val 7',
      },
      {
        codigo: 1007,
        deseccion: 'Product Description 1',
        deseccionVal: 'Descripció valencià',
      },
      {
        codigo: 1008,
        deseccion: 'Descripció castellà',
        deseccionVal: 'Product Description Val 2',
      },
      {
        codigo: 1009,
        deseccion: 'Product Description 3',
        deseccionVal: 'Product Description Val 3',
      },
      {
        codigo: 1010,
        deseccion: 'Product Description 4',
        deseccionVal: 'Product Description Val 4',
      },
      {
        codigo: 1011,
        deseccion: 'Product Description 5',
        deseccionVal: 'Product Description Val 5',
      },
      {
        codigo: 1012,
        deseccion: 'Product Description 6',
        deseccionVal: 'Product Description Val 6',
      },
      {
        codigo: 1013,
        deseccion: 'Product Description 7',
        deseccionVal: 'Product Description Val 7',
      },
    ];
    return data;
  }

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

  deleteCampoDeActuacions(campDetails: CampoDeActuacion) {}

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
