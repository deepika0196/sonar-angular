import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './arq-service.service';
import { ArqSnackBarService } from './arq-snackbar.service';
import { ArqSpinnerService } from './arq-spinner.service';
import * as i0 from "@angular/core";
export declare const NOM_APP: InjectionToken<string>;
export declare const GVLOGIN: InjectionToken<string>;
export declare class ArqApiService extends Service {
    protected _spinnerParam?: ArqSpinnerService | undefined;
    protected _httpParam?: HttpClient | undefined;
    protected _snackbarParam?: ArqSnackBarService | undefined;
    protected nombreApp: string;
    protected gvloginUrl: string;
    protected enableJWT: boolean;
    protected enable: boolean;
    protected urlRedirect: string;
    protected tokenPerso: string;
    protected _spinner: ArqSpinnerService;
    protected _http: HttpClient;
    protected _snackbar: ArqSnackBarService;
    getURIEntity(params?: any): string;
    schema(idBloque?: string): Observable<any>;
    validations(controls?: any): Observable<any>;
    constructor(_spinnerParam?: ArqSpinnerService | undefined, _httpParam?: HttpClient | undefined, _snackbarParam?: ArqSnackBarService | undefined);
    private getUrlParams;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
     */
    get(url: string, params?: Record<any, any>, tipoRespuesta?: any): Observable<any>;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
     */
    getText(url: string, params?: Record<any, any>): Observable<any>;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.post()`
     */
    post(url: string, data: any, tipoRespuesta?: any): Observable<any>;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.patch()`
     */
    patch(url: string, data: any): Observable<any>;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.put()`
     */
    put(url: string, data: any): Observable<any>;
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.delete()`
     */
    delete(url: string, data: any): Observable<any>;
    private preRequest;
    private handleSuccess;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqApiService>;
}
