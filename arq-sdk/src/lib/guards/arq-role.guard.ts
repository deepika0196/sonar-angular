import { inject, Injectable } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';

import { ActivatedRouteSnapshot, Data, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

import { ArqGvloginService } from '../services/arq-gvlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { ArqHttpClient } from '../services/arq-http-client.service';
import { HttpResponse } from '@angular/common/http';

const USER_LANG: string = 'user-lang';

@Injectable({
  providedIn: 'root'
})
export class ArqRoleGuard {
  public constructor(
    private auth: ArqGvloginService,
    private _arqHttpClient: ArqHttpClient,
    private _translocoService: TranslocoService,
    private cookieservice: CookieService
  ) {}

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.accesoOk(next, state, next.parent?.data ? next.parent?.data : next.data);
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.accesoOk(next, state, next.data);
  }

  private accesoOk(next: ActivatedRouteSnapshot, state: RouterStateSnapshot, data: Data): Observable<boolean> {
    if (next.queryParams[USER_LANG]) {
      const lang: string = next.queryParams[USER_LANG];
      localStorage.setItem('user-lang', lang);
      this._translocoService?.setActiveLang(lang);
    }
    // console.log('cookies:', this.cookieservice.getAll());
    if (next.queryParams['token']) {
      // existe el token de gvlogin en la url, lo almacenamos en el localStorage
      localStorage.setItem('gvlogin-token', next.queryParams['token']);
      this.auth.cargarToken();
    } else if (!this.auth.isLogged()) {
      if (this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') && data['enableJWT']) {
        this.auth.buscarTokenJWT(data['nombreApp'], data['gvloginUrl']);
      } else {
        // Redirigir a Gvlogin para obligar al loggeo
        if (data['enable']) {
          this.auth.login(window.location.pathname, data['nombreApp'], data['gvloginUrl'], data['urlRedirect']);
        }
      }
    }
    if (data['tokenPerso']) {
      this._arqHttpClient
        .get<Response>(data['tokenPerso'], {
          observe: 'response',
          responseType: 'text' as 'json'
        })
        .subscribe({
          next: (response: HttpResponse<Response>) => {
            console.log(response);
            this.auth.storeTokenPersonalizado(response.headers.get('x-token-personalizado'));
          },
          error: (err: any) => {
            console.log('peta token perso ', err);
          }
        });
    }
    return this.comprobarMarte(next, state.url, data['host']);
  }

  private comprobarMarte(next: ActivatedRouteSnapshot, state: string, host: string): Observable<boolean> {
    let idPet = next.queryParams['idPet'];
    let idSel = next.queryParams['idSel'];

    if (idPet || idSel) {
      if (!host || !host.startsWith('htt')) {
        console.error('El host no es correcto!!');
      }
      return this.realizarPeticionMarte({ idSel, idPet, host, next, state });
    } else {
      return of(true);
    }
  }

  private realizarPeticionMarte({
    idSel,
    idPet,
    host,
    next,
    state
  }: {
    idSel?: string;
    idPet?: string;
    host: string;
    next: ActivatedRouteSnapshot;
    state: string;
  }): Observable<boolean> {
    let endpoint: string = host + '/api/marte/v1/';
    if (idSel) {
      this.auth.storeIdSelMarte(idSel);
      endpoint += `peticionsel/${idSel}`;
    } else {
      this.auth.storeIdPetMarte(idPet);
      endpoint += `peticion/${idPet}`;
    }
    return this._arqHttpClient
      .get<Response>(endpoint, {
        observe: 'response',
        responseType: 'text' as 'json'
      })
      .pipe(
        map((token: HttpResponse<Response>) => {
          const lang: string = token.headers.get('Content-Language')?.split('-')[0] || 'es';
          localStorage.setItem(USER_LANG, lang);
          this._translocoService?.setActiveLang(lang);
          if (idSel) {
            this.auth.storeTokenPetMarteFormularioSeleccion(token.headers.get('x-peticion-marte-formulario-seleccion'));
            this.auth.cleanUrl(next.queryParams, 'idSel', state);
          } else {
            this.auth.storeTokenPetMarte(token.headers.get('x-peticion-marte'));
            this.auth.cleanUrl(next.queryParams, 'idPet', state);
          }
          return true;
        }),
        catchError(err => {
          console.log('error al recuperar el token de Marte: ', err);
          return of(true);
        })
      );
  }
}
