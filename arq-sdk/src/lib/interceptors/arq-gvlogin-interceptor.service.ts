import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { TranslocoService } from '@ngneat/transloco';
import { ArqGvloginService } from '../services/arq-gvlogin.service';
import { CookieService } from 'ngx-cookie-service';

export const nombreApp = new HttpContextToken(() => '');
export const gvloginUrl = new HttpContextToken(() => '');
export const enableJWT = new HttpContextToken(() => true);
export const urlRedirect = new HttpContextToken(() => '');
export const tokenPerso = new HttpContextToken(() => '');
export const enable = new HttpContextToken(() => true);

@Injectable()
export class ArqGvloginInterceptorService implements HttpInterceptor {
  public constructor(
    private auth: ArqGvloginService,
    private readonly injector: Injector,
    private jwtHelper: JwtHelperService,
    private _translocoService: TranslocoService,
    private cookieservice: CookieService
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isRefreshNeeded(request)) {
      if (request.context.get(enable)) {
        if (
          this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') &&
          request.context.get(enableJWT) &&
          !this.isTokenExpired()
        ) {
          this.auth.buscarTokenJWT(request.context.get(nombreApp), request.context.get(gvloginUrl));
        } else {
          this.auth.login(
            request.url,
            request.context.get(nombreApp),
            request.context.get(gvloginUrl),
            request.context.get(urlRedirect)
          );
        }
      }
    }
    if (request.url.includes('/api')) {
      //Anyadimos el token de Marte
      const clonedRequest = request.clone({
        headers: request.headers
          .set('x-peticion-marte', this.auth.getTokenPetMarte())
          .set('x-peticion-marte-formulario-seleccion', this.auth.getTokenSelMarte())
          .set('x-token-personalizado', this.auth.getTokenPersonalizado())
          .set('Authorization', 'Bearer ' + this.auth.getToken())
          .set('Content-Language', this._translocoService?.getActiveLang() == 'ca' ? 'ca-ES' : 'es-ES')
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }

  private isRefreshNeeded(request: HttpRequest<any>): boolean {
    const isRefreshNeeded = this.auth.getToken() == 'NO TOKEN' || this.isTokenExpired(); //&&
    // environment.gvlogin.whitelistedDomains.some(domain => request.url.includes(domain));
    // &&
    return isRefreshNeeded;
  }

  private isTokenExpired(): boolean {
    if (this.auth.getToken() === 'NO TOKEN') {
      return false;
    }
    return this.jwtHelper.isTokenExpired(this.auth.getToken());
  }
}
