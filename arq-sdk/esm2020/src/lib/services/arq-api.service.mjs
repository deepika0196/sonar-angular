import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enable, enableJWT, gvloginUrl, nombreApp, tokenPerso, urlRedirect } from '../interceptors/interceptors';
import { Service } from './arq-service.service';
import { ArqSnackBarService } from './arq-snackbar.service';
import { ArqSpinnerService } from './arq-spinner.service';
import * as i0 from "@angular/core";
import * as i1 from "./arq-spinner.service";
import * as i2 from "@angular/common/http";
import * as i3 from "./arq-snackbar.service";
export const NOM_APP = new InjectionToken('NOM_APP');
export const GVLOGIN = new InjectionToken('GVLOGIN');
export class ArqApiService extends Service {
    getURIEntity(params) {
        throw new Error('El metodo "getURIEntity" debe ser sobreescrito');
    }
    schema(idBloque) {
        throw new Error('El metodo "schema" debe ser sobreescrito');
    }
    validations(controls) {
        throw new Error('El metodo "validations" debe ser sobreescrito');
    }
    constructor(_spinnerParam, _httpParam, _snackbarParam) {
        super();
        this._spinnerParam = _spinnerParam;
        this._httpParam = _httpParam;
        this._snackbarParam = _snackbarParam;
        this._spinner = _spinnerParam ? _spinnerParam : inject(ArqSpinnerService);
        this._http = _httpParam ? _httpParam : inject(HttpClient);
        this._snackbar = _snackbarParam ? _snackbarParam : inject(ArqSnackBarService);
    }
    getUrlParams(params) {
        return Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
    }
    /**
     * @deprecated este metodo no debe usarse para nuevos desarrollos.
     *
     * Ahora hay que utilizar el servicio `ArqHttpClient.get()`
     */
    get(url, params, tipoRespuesta) {
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
    getText(url, params) {
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
    post(url, data, tipoRespuesta) {
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
    patch(url, data) {
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
    put(url, data) {
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
    delete(url, data) {
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
    preRequest() {
        // console.log('preRequest' + this.nombreApp);
        // console.log('preRequest' + this.gvloginUrl);
        this._spinner.show();
    }
    handleSuccess(observer, result, successMsg) {
        this._spinner.hide();
        observer.next(result);
        observer.complete();
        if (successMsg) {
            this._snackbar.showSuccess('Datos guardados correctamente', '');
        }
    }
    handleError(observer, error) {
        this._spinner.hide();
        observer.error(error);
        if (error?.error) {
            this._snackbar.showError(error?.error?.message + ': ' + error?.error?.errors?.join(','), 'ERROR');
        }
        else {
            this._snackbar.showError('Error inesperado', 'ERROR');
        }
    }
}
ArqApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService, deps: [{ token: i1.ArqSpinnerService }, { token: i2.HttpClient }, { token: i3.ArqSnackBarService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqApiService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ArqSpinnerService }, { type: i2.HttpClient }, { type: i3.ArqSnackBarService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL3NlcnZpY2VzL2FycS1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUUxRCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQVMsU0FBUyxDQUFDLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBYyxDQUFTLFNBQVMsQ0FBQyxDQUFDO0FBRzdELE1BQU0sT0FBTyxhQUFjLFNBQVEsT0FBTztJQVdqQyxZQUFZLENBQUMsTUFBWTtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFpQjtRQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLFdBQVcsQ0FBQyxRQUFjO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMs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LFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7OzBHQWpTVSxhQUFhOzhHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDb250ZXh0LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgZW5hYmxlLCBlbmFibGVKV1QsIGd2bG9naW5VcmwsIG5vbWJyZUFwcCwgdG9rZW5QZXJzbywgdXJsUmVkaXJlY3QgfSBmcm9tICcuLi9pbnRlcmNlcHRvcnMvaW50ZXJjZXB0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vYXJxLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFycVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vYXJxLXNuYWNrYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcnFTcGlubmVyU2VydmljZSB9IGZyb20gJy4vYXJxLXNwaW5uZXIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTk9NX0FQUCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdOT01fQVBQJyk7XHJcbmV4cG9ydCBjb25zdCBHVkxPR0lOID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0dWTE9HSU4nKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFycUFwaVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICBwcm90ZWN0ZWQgbm9tYnJlQXBwITogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBndmxvZ2luVXJsITogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBlbmFibGVKV1QhOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBlbmFibGUhOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCB1cmxSZWRpcmVjdCE6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgdG9rZW5QZXJzbyE6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX3NwaW5uZXI6IEFycVNwaW5uZXJTZXJ2aWNlO1xyXG4gIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudDtcclxuICBwcm90ZWN0ZWQgX3NuYWNrYmFyOiBBcnFTbmFja0JhclNlcnZpY2U7XHJcblxyXG4gIHB1YmxpYyBnZXRVUklFbnRpdHkocGFyYW1zPzogYW55KTogc3RyaW5nIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRWwgbWV0b2RvIFwiZ2V0VVJJRW50aXR5XCIgZGViZSBzZXIgc29icmVlc2NyaXRvJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2NoZW1hKGlkQmxvcXVlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRWwgbWV0b2RvIFwic2NoZW1hXCIgZGViZSBzZXIgc29icmVlc2NyaXRvJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGlvbnMoY29udHJvbHM/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbCBtZXRvZG8gXCJ2YWxpZGF0aW9uc1wiIGRlYmUgc2VyIHNvYnJlZXNjcml0bycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIF9zcGlubmVyUGFyYW0/OiBBcnFTcGlubmVyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBfaHR0cFBhcmFtPzogSHR0cENsaWVudCxcclxuICAgIHByb3RlY3RlZCBfc25hY2tiYXJQYXJhbT86IEFycVNuYWNrQmFyU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX3NwaW5uZXIgPSBfc3Bpbm5lclBhcmFtID8gX3NwaW5uZXJQYXJhbSA6IGluamVjdChBcnFTcGlubmVyU2VydmljZSk7XHJcbiAgICB0aGlzLl9odHRwID0gX2h0dHBQYXJhbSA/IF9odHRwUGFyYW0gOiBpbmplY3QoSHR0cENsaWVudCk7XHJcbiAgICB0aGlzLl9zbmFja2JhciA9IF9zbmFja2JhclBhcmFtID8gX3NuYWNrYmFyUGFyYW0gOiBpbmplY3QoQXJxU25hY2tCYXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VXJsUGFyYW1zKHBhcmFtczogUmVjb3JkPGFueSwgYW55Pik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHt2YWx1ZX1gKVxyXG4gICAgICAuam9pbignJicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgZXN0ZSBtZXRvZG8gbm8gZGViZSB1c2Fyc2UgcGFyYSBudWV2b3MgZGVzYXJyb2xsb3MuXHJcbiAgICpcclxuICAgKiBBaG9yYSBoYXkgcXVlIHV0aWxpemFyIGVsIHNlcnZpY2lvIGBBcnFIdHRwQ2xpZW50LmdldCgpYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxhbnksIGFueT4sIHRpcG9SZXNwdWVzdGE/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgY29uc3QgcmVzcCA9IHRpcG9SZXNwdWVzdGEgPyB0aXBvUmVzcHVlc3RhIDogJ2pzb24nO1xyXG5cclxuICAgIGlmICh0aXBvUmVzcHVlc3RhICYmICFbJ2FycmF5YnVmZmVyJywgJ2Jsb2InLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGlwb1Jlc3B1ZXN0YSkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRpcG8gZGUgcmVzcHVlc3RhIE5PIEFETUlUSURPLiBMb3MgdmFsb3JlcyBhZG1pdGlkb3Mgc29uICdhcnJheWJ1ZmZlcicsJ2Jsb2InLCdqc29uJywndGV4dCcgXCIpO1xyXG4gICAgICByZXR1cm4gb2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICB1cmwgKz0gJz8nICsgdGhpcy5nZXRVcmxQYXJhbXMocGFyYW1zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wcmVSZXF1ZXN0KCk7XHJcbiAgICAgIGRhdGEgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgICAgLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgLy9vYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IHJlc3AsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBIdHRwQ29udGV4dCgpXHJcbiAgICAgICAgICAgICAgLnNldChub21icmVBcHAsIHRoaXMubm9tYnJlQXBwKVxyXG4gICAgICAgICAgICAgIC5zZXQoZ3Zsb2dpblVybCwgdGhpcy5ndmxvZ2luVXJsKVxyXG4gICAgICAgICAgICAgIC5zZXQoZW5hYmxlSldULCB0aGlzLmVuYWJsZUpXVClcclxuICAgICAgICAgICAgICAuc2V0KGVuYWJsZSwgdGhpcy5lbmFibGUpXHJcbiAgICAgICAgICAgICAgLnNldCh1cmxSZWRpcmVjdCwgdGhpcy51cmxSZWRpcmVjdClcclxuICAgICAgICAgICAgICAuc2V0KHRva2VuUGVyc28sIHRoaXMudG9rZW5QZXJzbylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3Mob2JzZXJ2ZXIsIHJlc3VsdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Iob2JzZXJ2ZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBlc3RlIG1ldG9kbyBubyBkZWJlIHVzYXJzZSBwYXJhIG51ZXZvcyBkZXNhcnJvbGxvcy5cclxuICAgKlxyXG4gICAqIEFob3JhIGhheSBxdWUgdXRpbGl6YXIgZWwgc2VydmljaW8gYEFycUh0dHBDbGllbnQuZ2V0KClgXHJcbiAgICovXHJcbiAgcHVibGljIGdldFRleHQodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxhbnksIGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgdXJsICs9IHRoaXMuZ2V0VXJsUGFyYW1zKHBhcmFtcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJlUmVxdWVzdCgpO1xyXG4gICAgICBkYXRhID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuX2h0dHBcclxuICAgICAgICAgIC5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgSHR0cENvbnRleHQoKVxyXG4gICAgICAgICAgICAgIC5zZXQobm9tYnJlQXBwLCB0aGlzLm5vbWJyZUFwcClcclxuICAgICAgICAgICAgICAuc2V0KGd2bG9naW5VcmwsIHRoaXMuZ3Zsb2dpblVybClcclxuICAgICAgICAgICAgICAuc2V0KGVuYWJsZUpXVCwgdGhpcy5lbmFibGVKV1QpXHJcbiAgICAgICAgICAgICAgLnNldChlbmFibGUsIHRoaXMuZW5hYmxlKVxyXG4gICAgICAgICAgICAgIC5zZXQodXJsUmVkaXJlY3QsIHRoaXMudXJsUmVkaXJlY3QpXHJcbiAgICAgICAgICAgICAgLnNldCh0b2tlblBlcnNvLCB0aGlzLnRva2VuUGVyc28pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWNjZXNzKG9ic2VydmVyLCByZXN1bHQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKG9ic2VydmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgZXN0ZSBtZXRvZG8gbm8gZGViZSB1c2Fyc2UgcGFyYSBudWV2b3MgZGVzYXJyb2xsb3MuXHJcbiAgICpcclxuICAgKiBBaG9yYSBoYXkgcXVlIHV0aWxpemFyIGVsIHNlcnZpY2lvIGBBcnFIdHRwQ2xpZW50LnBvc3QoKWBcclxuICAgKi9cclxuICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCB0aXBvUmVzcHVlc3RhPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBvYnMgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgY29uc3QgcmVzcCA9IHRpcG9SZXNwdWVzdGEgPyB0aXBvUmVzcHVlc3RhIDogJ2pzb24nO1xyXG5cclxuICAgIGlmICh0aXBvUmVzcHVlc3RhICYmICFbJ2FycmF5YnVmZmVyJywgJ2Jsb2InLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGlwb1Jlc3B1ZXN0YSkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRpcG8gZGUgcmVzcHVlc3RhIE5PIEFETUlUSUQuIExvcyB2YWxvcmVzIGFkbWl0aWRvcyBzb24gJ2FycmF5YnVmZmVyJywnYmxvYicsJ2pzb24nLCd0ZXh0JyBcIik7XHJcbiAgICAgIHJldHVybiBvZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdGhpcy5wcmVSZXF1ZXN0KCk7XHJcbiAgICAgIG9icyA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcclxuICAgICAgICB0aGlzLl9odHRwXHJcbiAgICAgICAgICAucG9zdCh1cmwsIGRhdGEsIHtcclxuICAgICAgICAgICAgLy9vYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IHJlc3AsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBIdHRwQ29udGV4dCgpXHJcbiAgICAgICAgICAgICAgLnNldChub21icmVBcHAsIHRoaXMubm9tYnJlQXBwKVxyXG4gICAgICAgICAgICAgIC5zZXQoZ3Zsb2dpblVybCwgdGhpcy5ndmxvZ2luVXJsKVxyXG4gICAgICAgICAgICAgIC5zZXQoZW5hYmxlSldULCB0aGlzLmVuYWJsZUpXVClcclxuICAgICAgICAgICAgICAuc2V0KGVuYWJsZSwgdGhpcy5lbmFibGUpXHJcbiAgICAgICAgICAgICAgLnNldCh1cmxSZWRpcmVjdCwgdGhpcy51cmxSZWRpcmVjdClcclxuICAgICAgICAgICAgICAuc2V0KHRva2VuUGVyc28sIHRoaXMudG9rZW5QZXJzbylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3Mob2JzZXJ2ZXIsIHJlc3VsdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihvYnNlcnZlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgZXN0ZSBtZXRvZG8gbm8gZGViZSB1c2Fyc2UgcGFyYSBudWV2b3MgZGVzYXJyb2xsb3MuXHJcbiAgICpcclxuICAgKiBBaG9yYSBoYXkgcXVlIHV0aWxpemFyIGVsIHNlcnZpY2lvIGBBcnFIdHRwQ2xpZW50LnBhdGNoKClgXHJcbiAgICovXHJcbiAgcHVibGljIHBhdGNoKHVybDogc3RyaW5nLCBkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IG9icyA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIHRoaXMucHJlUmVxdWVzdCgpO1xyXG4gICAgICBvYnMgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgICAgLnBhdGNoKHVybCwgZGF0YSwge1xyXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgSHR0cENvbnRleHQoKVxyXG4gICAgICAgICAgICAgIC5zZXQobm9tYnJlQXBwLCB0aGlzLm5vbWJyZUFwcClcclxuICAgICAgICAgICAgICAuc2V0KGd2bG9naW5VcmwsIHRoaXMuZ3Zsb2dpblVybClcclxuICAgICAgICAgICAgICAuc2V0KGVuYWJsZUpXVCwgdGhpcy5lbmFibGVKV1QpXHJcbiAgICAgICAgICAgICAgLnNldChlbmFibGUsIHRoaXMuZW5hYmxlKVxyXG4gICAgICAgICAgICAgIC5zZXQodXJsUmVkaXJlY3QsIHRoaXMudXJsUmVkaXJlY3QpXHJcbiAgICAgICAgICAgICAgLnNldCh0b2tlblBlcnNvLCB0aGlzLnRva2VuUGVyc28pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWNjZXNzKG9ic2VydmVyLCByZXN1bHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Iob2JzZXJ2ZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9icztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIGVzdGUgbWV0b2RvIG5vIGRlYmUgdXNhcnNlIHBhcmEgbnVldm9zIGRlc2Fycm9sbG9zLlxyXG4gICAqXHJcbiAgICogQWhvcmEgaGF5IHF1ZSB1dGlsaXphciBlbCBzZXJ2aWNpbyBgQXJxSHR0cENsaWVudC5wdXQoKWBcclxuICAgKi9cclxuICBwdWJsaWMgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IG9icyA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIHRoaXMucHJlUmVxdWVzdCgpO1xyXG4gICAgICBvYnMgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgICAgLnB1dCh1cmwsIGRhdGEsIHtcclxuICAgICAgICAgICAgY29udGV4dDogbmV3IEh0dHBDb250ZXh0KClcclxuICAgICAgICAgICAgICAuc2V0KG5vbWJyZUFwcCwgdGhpcy5ub21icmVBcHApXHJcbiAgICAgICAgICAgICAgLnNldChndmxvZ2luVXJsLCB0aGlzLmd2bG9naW5VcmwpXHJcbiAgICAgICAgICAgICAgLnNldChlbmFibGVKV1QsIHRoaXMuZW5hYmxlSldUKVxyXG4gICAgICAgICAgICAgIC5zZXQoZW5hYmxlLCB0aGlzLmVuYWJsZSlcclxuICAgICAgICAgICAgICAuc2V0KHVybFJlZGlyZWN0LCB0aGlzLnVybFJlZGlyZWN0KVxyXG4gICAgICAgICAgICAgIC5zZXQodG9rZW5QZXJzbywgdGhpcy50b2tlblBlcnNvKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VjY2VzcyhvYnNlcnZlciwgcmVzdWx0LCB0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKG9ic2VydmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBlc3RlIG1ldG9kbyBubyBkZWJlIHVzYXJzZSBwYXJhIG51ZXZvcyBkZXNhcnJvbGxvcy5cclxuICAgKlxyXG4gICAqIEFob3JhIGhheSBxdWUgdXRpbGl6YXIgZWwgc2VydmljaW8gYEFycUh0dHBDbGllbnQuZGVsZXRlKClgXHJcbiAgICovXHJcbiAgcHVibGljIGRlbGV0ZSh1cmw6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBvYnMgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICB0aGlzLnByZVJlcXVlc3QoKTtcclxuICAgICAgb2JzID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuX2h0dHBcclxuICAgICAgICAgIC5kZWxldGUodXJsICsgYC8ke2RhdGF9YCwge1xyXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgSHR0cENvbnRleHQoKVxyXG4gICAgICAgICAgICAgIC5zZXQobm9tYnJlQXBwLCB0aGlzLm5vbWJyZUFwcClcclxuICAgICAgICAgICAgICAuc2V0KGd2bG9naW5VcmwsIHRoaXMuZ3Zsb2dpblVybClcclxuICAgICAgICAgICAgICAuc2V0KGVuYWJsZUpXVCwgdGhpcy5lbmFibGVKV1QpXHJcbiAgICAgICAgICAgICAgLnNldChlbmFibGUsIHRoaXMuZW5hYmxlKVxyXG4gICAgICAgICAgICAgIC5zZXQodXJsUmVkaXJlY3QsIHRoaXMudXJsUmVkaXJlY3QpXHJcbiAgICAgICAgICAgICAgLnNldCh0b2tlblBlcnNvLCB0aGlzLnRva2VuUGVyc28pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWNjZXNzKG9ic2VydmVyLCByZXN1bHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Iob2JzZXJ2ZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9icztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlUmVxdWVzdCgpOiB2b2lkIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdwcmVSZXF1ZXN0JyArIHRoaXMubm9tYnJlQXBwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdwcmVSZXF1ZXN0JyArIHRoaXMuZ3Zsb2dpblVybCk7XHJcbiAgICB0aGlzLl9zcGlubmVyLnNob3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlU3VjY2VzcyhvYnNlcnZlcjogU3Vic2NyaWJlcjxhbnk+LCByZXN1bHQ6IGFueSwgc3VjY2Vzc01zZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fc3Bpbm5lci5oaWRlKCk7XHJcbiAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XHJcbiAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHN1Y2Nlc3NNc2cpIHtcclxuICAgICAgdGhpcy5fc25hY2tiYXIuc2hvd1N1Y2Nlc3MoJ0RhdG9zIGd1YXJkYWRvcyBjb3JyZWN0YW1lbnRlJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihvYnNlcnZlcjogU3Vic2NyaWJlcjxhbnk+LCBlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NwaW5uZXIuaGlkZSgpO1xyXG4gICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgaWYgKGVycm9yPy5lcnJvcikge1xyXG4gICAgICB0aGlzLl9zbmFja2Jhci5zaG93RXJyb3IoZXJyb3I/LmVycm9yPy5tZXNzYWdlICsgJzogJyArIGVycm9yPy5lcnJvcj8uZXJyb3JzPy5qb2luKCcsJyksICdFUlJPUicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc25hY2tiYXIuc2hvd0Vycm9yKCdFcnJvciBpbmVzcGVyYWRvJywgJ0VSUk9SJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==