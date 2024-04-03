import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ArqApiService } from './arq-api.service';
import { AuthService } from './arq-auth.service';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
export declare class ArqGvloginService extends AuthService {
    private jwtHelper;
    private activatedRoute;
    private router;
    protected _apiService: ArqApiService;
    private cookieservice;
    constructor(jwtHelper: JwtHelperService, activatedRoute: ActivatedRoute, router: Router, _apiService: ArqApiService, cookieservice: CookieService);
    cargarToken(): any;
    isLogged(): boolean;
    /**
     * Redirige a la aplicación de gvLogin para iniciar sesión
     */
    login(url: string, nombreApp: string, gvloginUrl: string, urlRedirect?: string): any;
    /**
     * Cierra la sesión del usuario
     */
    logout(gvLoginUrl: string, urlRedirect: string): any;
    setToken(token: string): any;
    cleanUrl(params: Params, param: string, url?: string): any;
    private storeToken;
    getTokenPetMarte(): string;
    getTokenSelMarte(): string;
    getTokenPersonalizado(): string;
    getToken(): string;
    getIdPet(): string;
    getIdSel(): string;
    storeTokenPetMarte(token: string | null): any;
    storeTokenPetMarteFormularioSeleccion(token: string | null): any;
    storeIdPetMarte(idpet?: string): any;
    storeIdSelMarte(idsel?: string): any;
    storeTokenPersonalizado(token: string | null): any;
    private extractTokenData;
    private setCurrentUser;
    mostrarInfoTokenMarte(host: string): Observable<any>;
    buscarTokenJWT(nombreApp: string, gvLoginUrl: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqGvloginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqGvloginService>;
}
