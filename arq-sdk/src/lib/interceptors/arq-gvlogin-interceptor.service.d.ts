import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { ArqGvloginService } from '../services/arq-gvlogin.service';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
export declare const nombreApp: HttpContextToken<string>;
export declare const gvloginUrl: HttpContextToken<string>;
export declare const enableJWT: HttpContextToken<boolean>;
export declare const urlRedirect: HttpContextToken<string>;
export declare const tokenPerso: HttpContextToken<string>;
export declare const enable: HttpContextToken<boolean>;
export declare class ArqGvloginInterceptorService implements HttpInterceptor {
    private auth;
    private readonly injector;
    private jwtHelper;
    private _translocoService;
    private cookieservice;
    constructor(auth: ArqGvloginService, injector: Injector, jwtHelper: JwtHelperService, _translocoService: TranslocoService, cookieservice: CookieService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isRefreshNeeded;
    private isTokenExpired;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqGvloginInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqGvloginInterceptorService>;
}
