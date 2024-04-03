import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { AuthService } from './arq-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@auth0/angular-jwt";
import * as i2 from "@angular/router";
import * as i3 from "./arq-api.service";
import * as i4 from "ngx-cookie-service";
const TOKEN_KEY = 'gvlogin-token';
const TOKEN_MARTE = 'peticion-marte';
const TOKEN_MARTE_FORMULARIO_SELECCION = 'peticion-marte-formulario-seleccion';
const TOKEN_PERSONALIZADO = 'token-personalizado';
const IDPET = 'idPet';
const IDSEL = 'idSel';
// const GVLOGIN_DESA: string = 'https://gvlogin-dsa.gva.es/gvlogin';
// const GVLOGIN_PRE: string = 'https://gvlogin-pre.gva.es/gvlogin';
// const GVLOGIN_PROD: string = 'https://gvlogin.gva.es/gvlogin';
export class ArqGvloginService extends AuthService {
    //environment.gvlogin.url
    //environment.gvlogin.aplicacion
    constructor(jwtHelper, activatedRoute, router, _apiService, cookieservice) {
        super();
        this.jwtHelper = jwtHelper;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._apiService = _apiService;
        this.cookieservice = cookieservice;
        this.cargarToken();
    }
    cargarToken() {
        this.activatedRoute.queryParams.pipe(filter(params => !!params['token'])).subscribe(params => {
            this.setToken(params['token']);
            this.cleanUrl(params, 'token', this.router.url);
        });
        const existingToken = localStorage.getItem(TOKEN_KEY);
        if (existingToken) {
            this.setToken(existingToken);
        }
    }
    isLogged() {
        return !!this.user$.value;
    }
    /**
     * Redirige a la aplicación de gvLogin para iniciar sesión
     */
    login(url, nombreApp, gvloginUrl, urlRedirect) {
        //Obtener entorno + Obtener nombre APP
        // let entorno = '';
        // let nombreApp = url
        //   .split('/')[3] //nos quedamos con la segunda parte de la URL
        //   .split(/(?:\/|-|\.)+/)[0]
        //   .toUpperCase();
        // let gvloginUrl = GVLOGIN_DESA;
        // console.log(url);
        // if (url.includes('dsa') || url.includes('localhost')) {
        //   gvloginUrl = GVLOGIN_DESA;
        // } else if (url.includes('pre')) {
        //   gvloginUrl = GVLOGIN_PRE;
        // } else {
        //   gvloginUrl = GVLOGIN_PROD;
        // }
        // console.log(nombreApp);
        const redirectURI = urlRedirect ? urlRedirect : encodeURIComponent(window.location.href);
        const gvloginFinalUrl = `${gvloginUrl}/login.xhtml?jwt=true&app=${nombreApp}&url=${redirectURI}`;
        //console.log(gvloginFinalUrl);
        if (nombreApp) {
            localStorage.removeItem(TOKEN_MARTE);
            window.location.href = gvloginFinalUrl;
        }
    }
    /**
     * Cierra la sesión del usuario
     */
    logout(gvLoginUrl, urlRedirect) {
        super.logout(gvLoginUrl, urlRedirect);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_MARTE);
        this.cookieservice.deleteAll('/', '.gva.es');
        const redirectURI = urlRedirect ? urlRedirect : encodeURIComponent(window.location.href);
        const gvloginUrl = `${gvLoginUrl}/logout?callbackUrl=${redirectURI}`;
        window.location.href = gvloginUrl;
    }
    setToken(token) {
        this.storeToken(token);
        const tokenData = this.extractTokenData(token);
        this.setCurrentUser(tokenData);
    }
    cleanUrl(params, param, url) {
        const queryParams = { ...params };
        delete queryParams[param];
        this.router.navigate([url?.split('?')[0]], { queryParams });
    }
    storeToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }
    getTokenPetMarte() {
        let token = localStorage.getItem(TOKEN_MARTE);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getTokenSelMarte() {
        let token = localStorage.getItem(TOKEN_MARTE_FORMULARIO_SELECCION);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getTokenPersonalizado() {
        let token = localStorage.getItem(TOKEN_PERSONALIZADO);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getToken() {
        let token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            token = 'NO TOKEN';
        }
        return token;
    }
    getIdPet() {
        let idPet = localStorage.getItem(IDPET);
        if (!idPet) {
            idPet = 'NO ID PET';
        }
        return idPet;
    }
    getIdSel() {
        let idSel = localStorage.getItem(IDSEL);
        if (!idSel) {
            idSel = 'NO ID SEL';
        }
        return idSel;
    }
    storeTokenPetMarte(token) {
        if (token) {
            localStorage.setItem(TOKEN_MARTE, token);
        }
    }
    storeTokenPetMarteFormularioSeleccion(token) {
        if (token) {
            localStorage.setItem(TOKEN_MARTE_FORMULARIO_SELECCION, token);
        }
    }
    storeIdPetMarte(idpet) {
        if (idpet) {
            localStorage.setItem(IDPET, idpet);
        }
    }
    storeIdSelMarte(idsel) {
        if (idsel) {
            localStorage.setItem(IDPET, idsel);
        }
    }
    storeTokenPersonalizado(token) {
        if (token) {
            localStorage.setItem(TOKEN_PERSONALIZADO, token);
        }
    }
    extractTokenData(token) {
        return this.jwtHelper.decodeToken(token);
    }
    setCurrentUser(data) {
        if (data) {
            const user = {
                nombre: data.given_name,
                apellidos: data.family_name,
                email: data.email,
                roles: data.rol || []
            };
            this.user$.next(user);
        }
    }
    mostrarInfoTokenMarte(host) {
        return this._apiService.get(host + '/api/marte/v1/peticiontokeninfo');
    }
    buscarTokenJWT(nombreApp, gvLoginUrl) {
        if (nombreApp && gvLoginUrl) {
            let datos = {
                idAplicacion: nombreApp,
                tokenSSO: this.cookieservice.get('gvlogin.login.GVLOGIN_COOKIE')
            };
            this._apiService
                .post(gvLoginUrl + '-ws/rest/restJwt/crearTokenJwtSSO', datos) //data['gvloginUrl']
                .pipe(map((token) => {
                console.log(token.tokenJwt);
                // sustituir el token de GVLogin por el de esta respuesta
                if (token.tokenJwt) {
                    this.setToken(token.tokenJwt);
                }
            }), catchError((err, caught) => {
                console.log(err);
                return EMPTY;
            }))
                .subscribe();
        }
    }
}
ArqGvloginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService, deps: [{ token: i1.JwtHelperService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i3.ArqApiService }, { token: i4.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqGvloginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.JwtHelperService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.ArqApiService }, { type: i4.CookieService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWd2bG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtZ3Zsb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQUdqRCxNQUFNLFNBQVMsR0FBVyxlQUFlLENBQUM7QUFDMUMsTUFBTSxXQUFXLEdBQVcsZ0JBQWdCLENBQUM7QUFDN0MsTUFBTSxnQ0FBZ0MsR0FBVyxxQ0FBcUMsQ0FBQztBQUN2RixNQUFNLG1CQUFtQixHQUFXLHFCQUFxQixDQUFDO0FBQzFELE1BQU0sS0FBSyxHQUFXLE9BQU8sQ0FBQztBQUM5QixNQUFNLEtBQUssR0FBVyxPQUFPLENBQUM7QUFDOUIscUVBQXFFO0FBQ3JFLG9FQUFvRTtBQUNwRSxpRUFBaUU7QUFHakUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFdBQVc7SUFDaEQseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyxZQUNVLFNBQTJCLEVBQzNCLGNBQThCLEVBQzlCLE1BQWMsRUFDWixXQUEwQixFQUM1QixhQUE0QjtRQUVwQyxLQUFLLEVBQUUsQ0FBQztRQU5BLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFHcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lB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RUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FDSDtpQkFDQSxTQUFTLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7OzhHQXpOVSxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBcnFHdmxvZ2luVG9rZW5EYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcnEtZ3Zsb2dpbi10b2tlbi1kYXRhJztcclxuaW1wb3J0IHsgQXJxQXBpU2VydmljZSB9IGZyb20gJy4vYXJxLWFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2FycS1hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFRPS0VOX0tFWTogc3RyaW5nID0gJ2d2bG9naW4tdG9rZW4nO1xyXG5jb25zdCBUT0tFTl9NQVJURTogc3RyaW5nID0gJ3BldGljaW9uLW1hcnRlJztcclxuY29uc3QgVE9LRU5fTUFSVEVfRk9STVVMQVJJT19TRUxFQ0NJT046IHN0cmluZyA9ICdwZXRpY2lvbi1tYXJ0ZS1mb3JtdWxhcmlvLXNlbGVjY2lvbic7XHJcbmNvbnN0IFRPS0VOX1BFUlNPTkFMSVpBRE86IHN0cmluZyA9ICd0b2tlbi1wZXJzb25hbGl6YWRvJztcclxuY29uc3QgSURQRVQ6IHN0cmluZyA9ICdpZFBldCc7XHJcbmNvbnN0IElEU0VMOiBzdHJpbmcgPSAnaWRTZWwnO1xyXG4vLyBjb25zdCBHVkxPR0lOX0RFU0E6IHN0cmluZyA9ICdodHRwczovL2d2bG9naW4tZHNhLmd2YS5lcy9ndmxvZ2luJztcclxuLy8gY29uc3QgR1ZMT0dJTl9QUkU6IHN0cmluZyA9ICdodHRwczovL2d2bG9naW4tcHJlLmd2YS5lcy9ndmxvZ2luJztcclxuLy8gY29uc3QgR1ZMT0dJTl9QUk9EOiBzdHJpbmcgPSAnaHR0cHM6Ly9ndmxvZ2luLmd2YS5lcy9ndmxvZ2luJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFycUd2bG9naW5TZXJ2aWNlIGV4dGVuZHMgQXV0aFNlcnZpY2Uge1xyXG4gIC8vZW52aXJvbm1lbnQuZ3Zsb2dpbi51cmxcclxuICAvL2Vudmlyb25tZW50Lmd2bG9naW4uYXBsaWNhY2lvblxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGp3dEhlbHBlcjogSnd0SGVscGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByb3RlY3RlZCBfYXBpU2VydmljZTogQXJxQXBpU2VydmljZSxcclxuICAgIHByaXZhdGUgY29va2llc2VydmljZTogQ29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2FyZ2FyVG9rZW4oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYXJnYXJUb2tlbigpOiBhbnkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKGZpbHRlcihwYXJhbXMgPT4gISFwYXJhbXNbJ3Rva2VuJ10pKS5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5zZXRUb2tlbihwYXJhbXNbJ3Rva2VuJ10pO1xyXG4gICAgICB0aGlzLmNsZWFuVXJsKHBhcmFtcywgJ3Rva2VuJywgdGhpcy5yb3V0ZXIudXJsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9LRVkpO1xyXG4gICAgaWYgKGV4aXN0aW5nVG9rZW4pIHtcclxuICAgICAgdGhpcy5zZXRUb2tlbihleGlzdGluZ1Rva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0xvZ2dlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMudXNlciQudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWRpcmlnZSBhIGxhIGFwbGljYWNpw7NuIGRlIGd2TG9naW4gcGFyYSBpbmljaWFyIHNlc2nDs25cclxuICAgKi9cclxuICBwdWJsaWMgbG9naW4odXJsOiBzdHJpbmcsIG5vbWJyZUFwcDogc3RyaW5nLCBndmxvZ2luVXJsOiBzdHJpbmcsIHVybFJlZGlyZWN0Pzogc3RyaW5nKTogYW55IHtcclxuICAgIC8vT2J0ZW5lciBlbnRvcm5vICsgT2J0ZW5lciBub21icmUgQVBQXHJcbiAgICAvLyBsZXQgZW50b3JubyA9ICcnO1xyXG4gICAgLy8gbGV0IG5vbWJyZUFwcCA9IHVybFxyXG4gICAgLy8gICAuc3BsaXQoJy8nKVszXSAvL25vcyBxdWVkYW1vcyBjb24gbGEgc2VndW5kYSBwYXJ0ZSBkZSBsYSBVUkxcclxuICAgIC8vICAgLnNwbGl0KC8oPzpcXC98LXxcXC4pKy8pWzBdXHJcbiAgICAvLyAgIC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIC8vIGxldCBndmxvZ2luVXJsID0gR1ZMT0dJTl9ERVNBO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIGlmICh1cmwuaW5jbHVkZXMoJ2RzYScpIHx8IHVybC5pbmNsdWRlcygnbG9jYWxob3N0JykpIHtcclxuICAgIC8vICAgZ3Zsb2dpblVybCA9IEdWTE9HSU5fREVTQTtcclxuICAgIC8vIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKCdwcmUnKSkge1xyXG4gICAgLy8gICBndmxvZ2luVXJsID0gR1ZMT0dJTl9QUkU7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBndmxvZ2luVXJsID0gR1ZMT0dJTl9QUk9EO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2cobm9tYnJlQXBwKTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdFVSSSA9IHVybFJlZGlyZWN0ID8gdXJsUmVkaXJlY3QgOiBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuICAgIGNvbnN0IGd2bG9naW5GaW5hbFVybCA9IGAke2d2bG9naW5Vcmx9L2xvZ2luLnhodG1sP2p3dD10cnVlJmFwcD0ke25vbWJyZUFwcH0mdXJsPSR7cmVkaXJlY3RVUkl9YDtcclxuICAgIC8vY29uc29sZS5sb2coZ3Zsb2dpbkZpbmFsVXJsKTtcclxuICAgIGlmIChub21icmVBcHApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTUFSVEUpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGd2bG9naW5GaW5hbFVybDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENpZXJyYSBsYSBzZXNpw7NuIGRlbCB1c3VhcmlvXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGxvZ291dChndkxvZ2luVXJsOiBzdHJpbmcsIHVybFJlZGlyZWN0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgc3VwZXIubG9nb3V0KGd2TG9naW5VcmwsIHVybFJlZGlyZWN0KTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9LRVkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTUFSVEUpO1xyXG4gICAgdGhpcy5jb29raWVzZXJ2aWNlLmRlbGV0ZUFsbCgnLycsICcuZ3ZhLmVzJyk7XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3RVUkkgPSB1cmxSZWRpcmVjdCA/IHVybFJlZGlyZWN0IDogZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGNvbnN0IGd2bG9naW5VcmwgPSBgJHtndkxvZ2luVXJsfS9sb2dvdXQ/Y2FsbGJhY2tVcmw9JHtyZWRpcmVjdFVSSX1gO1xyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZ3Zsb2dpblVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRUb2tlbih0b2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIHRoaXMuc3RvcmVUb2tlbih0b2tlbik7XHJcbiAgICBjb25zdCB0b2tlbkRhdGEgPSB0aGlzLmV4dHJhY3RUb2tlbkRhdGEodG9rZW4pO1xyXG4gICAgdGhpcy5zZXRDdXJyZW50VXNlcih0b2tlbkRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFuVXJsKHBhcmFtczogUGFyYW1zLCBwYXJhbTogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IC4uLnBhcmFtcyB9O1xyXG4gICAgZGVsZXRlIHF1ZXJ5UGFyYW1zW3BhcmFtXTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsPy5zcGxpdCgnPycpWzBdXSwgeyBxdWVyeVBhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcmVUb2tlbih0b2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOX0tFWSwgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRva2VuUGV0TWFydGUoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX01BUlRFKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdG9rZW4gPSAnTk8gVE9LRU4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRva2VuU2VsTWFydGUoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX01BUlRFX0ZPUk1VTEFSSU9fU0VMRUNDSU9OKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdG9rZW4gPSAnTk8gVE9LRU4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRva2VuUGVyc29uYWxpemFkbygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fUEVSU09OQUxJWkFETyk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHRva2VuID0gJ05PIFRPS0VOJztcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fS0VZKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdG9rZW4gPSAnTk8gVE9LRU4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElkUGV0KCk6IHN0cmluZyB7XHJcbiAgICBsZXQgaWRQZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShJRFBFVCk7XHJcbiAgICBpZiAoIWlkUGV0KSB7XHJcbiAgICAgIGlkUGV0ID0gJ05PIElEIFBFVCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWRQZXQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRJZFNlbCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IGlkU2VsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSURTRUwpO1xyXG4gICAgaWYgKCFpZFNlbCkge1xyXG4gICAgICBpZFNlbCA9ICdOTyBJRCBTRUwnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkU2VsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3JlVG9rZW5QZXRNYXJ0ZSh0b2tlbjogc3RyaW5nIHwgbnVsbCk6IGFueSB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU5fTUFSVEUsIHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9yZVRva2VuUGV0TWFydGVGb3JtdWxhcmlvU2VsZWNjaW9uKHRva2VuOiBzdHJpbmcgfCBudWxsKTogYW55IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9NQVJURV9GT1JNVUxBUklPX1NFTEVDQ0lPTiwgdG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3JlSWRQZXRNYXJ0ZShpZHBldD86IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoaWRwZXQpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSURQRVQsIGlkcGV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9yZUlkU2VsTWFydGUoaWRzZWw/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKGlkc2VsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKElEUEVULCBpZHNlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcmVUb2tlblBlcnNvbmFsaXphZG8odG9rZW46IHN0cmluZyB8IG51bGwpOiBhbnkge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOX1BFUlNPTkFMSVpBRE8sIHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdFRva2VuRGF0YSh0b2tlbjogc3RyaW5nKTogQXJxR3Zsb2dpblRva2VuRGF0YSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q3VycmVudFVzZXIoZGF0YTogQXJxR3Zsb2dpblRva2VuRGF0YSB8IG51bGwpOiBhbnkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICBub21icmU6IGRhdGEuZ2l2ZW5fbmFtZSxcclxuICAgICAgICBhcGVsbGlkb3M6IGRhdGEuZmFtaWx5X25hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcm9sZXM6IGRhdGEucm9sIHx8IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMudXNlciQubmV4dCh1c2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3N0cmFySW5mb1Rva2VuTWFydGUoaG9zdDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldChob3N0ICsgJy9hcGkvbWFydGUvdjEvcGV0aWNpb250b2tlbmluZm8nKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidXNjYXJUb2tlbkpXVChub21icmVBcHA6IHN0cmluZywgZ3ZMb2dpblVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAobm9tYnJlQXBwICYmIGd2TG9naW5VcmwpIHtcclxuICAgICAgbGV0IGRhdG9zID0ge1xyXG4gICAgICAgIGlkQXBsaWNhY2lvbjogbm9tYnJlQXBwLCAvL2RhdGFbJ25vbWJyZUFwcCddLFxyXG4gICAgICAgIHRva2VuU1NPOiB0aGlzLmNvb2tpZXNlcnZpY2UuZ2V0KCdndmxvZ2luLmxvZ2luLkdWTE9HSU5fQ09PS0lFJylcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAucG9zdChndkxvZ2luVXJsICsgJy13cy9yZXN0L3Jlc3RKd3QvY3JlYXJUb2tlbkp3dFNTTycsIGRhdG9zKSAvL2RhdGFbJ2d2bG9naW5VcmwnXVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgbWFwKCh0b2tlbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLnRva2VuSnd0KTtcclxuICAgICAgICAgICAgLy8gc3VzdGl0dWlyIGVsIHRva2VuIGRlIEdWTG9naW4gcG9yIGVsIGRlIGVzdGEgcmVzcHVlc3RhXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50b2tlbkp3dCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW4udG9rZW5Kd3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVyciwgY2F1Z2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19