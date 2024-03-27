import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

import { enable, enableJWT, gvloginUrl, nombreApp, tokenPerso, urlRedirect } from '../interceptors/interceptors';
import { Service } from './arq-service.service';
import { ArqSnackBarService } from './arq-snackbar.service';
import { ArqSpinnerService } from './arq-spinner.service';

export const NOM_APP = new InjectionToken<string>('NOM_APP');
export const GVLOGIN = new InjectionToken<string>('GVLOGIN');

@Injectable()
export class ArqApiService extends Service {
  protected nombreApp!: string;
  protected gvloginUrl!: string;
  protected enableJWT!: boolean;
  protected enable!: boolean;
  protected urlRedirect!: string;
  protected tokenPerso!: string;
  protected _spinner: ArqSpinnerService;
  protected _http: HttpClient;
  protected _snackbar: ArqSnackBarService;

  public getURIEntity(params?: any): string {
    throw new Error('El metodo "getURIEntity" debe ser sobreescrito');
  }

  public schema(): Observable<any> {
    throw new Error('El metodo "schema" debe ser sobreescrito');
  }

  public validations(controls?: any): Observable<any> {
    throw new Error('El metodo "validations" debe ser sobreescrito');
  }

  public constructor(
    protected _spinnerParam?: ArqSpinnerService,
    protected _httpParam?: HttpClient,
    protected _snackbarParam?: ArqSnackBarService
  ) {
    super();
    this._spinner = _spinnerParam ? _spinnerParam : inject(ArqSpinnerService);
    this._http = _httpParam ? _httpParam : inject(HttpClient);
    this._snackbar = _snackbarParam ? _snackbarParam : inject(ArqSnackBarService);
  }

  private getUrlParams(params: Record<any, any>): string {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
   */
  public get(url: string, params?: Record<any, any>, tipoRespuesta?: any): Observable<any> {
    let data = new Observable();
    const resp = tipoRespuesta ? tipoRespuesta : 'json';

    if (tipoRespuesta && !['arraybuffer', 'blob', 'json', 'text'].includes(tipoRespuesta)) {
      console.error("Tipo de respuesta NO ADMITIDO. Los valores admitidos son 'arraybuffer','blob','json','text' ");
      return of();
    }

    if (url) {
      if (params) {
        url += '?' + this.getUrlParams(params);
      }

      this.preRequest();
      data = new Observable(observer => {
        this._http
          .get(url, {
            //observe: 'response',
            responseType: resp,
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, false);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return data;
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
   */
  public getText(url: string, params?: Record<any, any>): Observable<any> {
    let data = new Observable();
    if (url) {
      if (params) {
        url += this.getUrlParams(params);
      }

      this.preRequest();
      data = new Observable(observer => {
        this._http
          .get(url, {
            observe: 'response',
            responseType: 'text',
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, false);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return data;
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.post()`
   */
  public post(url: string, data: any, tipoRespuesta?: any): Observable<any> {
    let obs = new Observable();
    const resp = tipoRespuesta ? tipoRespuesta : 'json';

    if (tipoRespuesta && !['arraybuffer', 'blob', 'json', 'text'].includes(tipoRespuesta)) {
      console.error("Tipo de respuesta NO ADMITID. Los valores admitidos son 'arraybuffer','blob','json','text' ");
      return of();
    }

    if (url) {
      this.preRequest();
      obs = new Observable(observer => {
        this._http
          .post(url, data, {
            //observe: 'response',
            responseType: resp,
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, true);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return obs;
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.patch()`
   */
  public patch(url: string, data: any): Observable<any> {
    let obs = new Observable();
    if (url) {
      this.preRequest();
      obs = new Observable(observer => {
        this._http
          .patch(url, data, {
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, true);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return obs;
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.put()`
   */
  public put(url: string, data: any): Observable<any> {
    let obs = new Observable();
    if (url) {
      this.preRequest();
      obs = new Observable(observer => {
        this._http
          .put(url, data, {
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, true);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return obs;
  }

  /**
   * @deprecated este metodo no debe usarse para nuevos desarrollos.
   *
   * Ahora hay que utilizar el servicio `ArqHttpClient.delete()`
   */
  public delete(url: string, data: any): Observable<any> {
    let obs = new Observable();
    if (url) {
      this.preRequest();
      obs = new Observable(observer => {
        this._http
          .delete(url + `/${data}`, {
            context: new HttpContext()
              .set(nombreApp, this.nombreApp)
              .set(gvloginUrl, this.gvloginUrl)
              .set(enableJWT, this.enableJWT)
              .set(enable, this.enable)
              .set(urlRedirect, this.urlRedirect)
              .set(tokenPerso, this.tokenPerso)
          })
          .subscribe({
            next: result => {
              this.handleSuccess(observer, result, true);
            },
            error: error => {
              this.handleError(observer, error);
            }
          });
      });
    }
    return obs;
  }

  private preRequest(): void {
    // console.log('preRequest' + this.nombreApp);
    // console.log('preRequest' + this.gvloginUrl);
    this._spinner.show();
  }

  private handleSuccess(observer: Subscriber<any>, result: any, successMsg: boolean): void {
    this._spinner.hide();
    observer.next(result);
    observer.complete();
    if (successMsg) {
      this._snackbar.showSuccess('Datos guardados correctamente', '');
    }
  }

  private handleError(observer: Subscriber<any>, error: HttpErrorResponse): void {
    this._spinner.hide();
    observer.error(error);
    if (error?.error) {
      this._snackbar.showError(error?.error?.message + ': ' + error?.error?.errors?.join(','), 'ERROR');
    } else {
      this._snackbar.showError('Error inesperado', 'ERROR');
    }
  }
}
