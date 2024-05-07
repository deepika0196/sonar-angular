import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ArqHttpClient } from 'arq-sdk';

export interface CustomResponse<T> {
  success: boolean;
  response: T[];
  errorCode?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public apiUrl = `${environment.settings.hostDynamic}/api/v1/`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
      entity_charset: 'UTF-8',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  _arqHttpClient: ArqHttpClient = new ArqHttpClient(
    this.httpClient,
    environment
  );

  encodeSessionStorage(key: string, value: any) {
    sessionStorage.setItem(window.btoa(key), window.btoa(value));
  }
}
