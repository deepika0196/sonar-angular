import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

import { ArqGvloginTokenData } from '../interfaces/arq-gvlogin-token-data';
import { ArqApiService } from './arq-api.service';
import { AuthService } from './arq-auth.service';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY: string = 'gvlogin-token';
const TOKEN_MARTE: string = 'peticion-marte';
const TOKEN_MARTE_FORMULARIO_SELECCION: string = 'peticion-marte-formulario-seleccion';
const TOKEN_PERSONALIZADO: string = 'token-personalizado';
const IDPET: string = 'idPet';
const IDSEL: string = 'idSel';
// const GVLOGIN_DESA: string = 'https://gvlogin-dsa.gva.es/gvlogin';
// const GVLOGIN_PRE: string = 'https://gvlogin-pre.gva.es/gvlogin';
// const GVLOGIN_PROD: string = 'https://gvlogin.gva.es/gvlogin';

@Injectable()
export class ArqGvloginService extends AuthService {
  //environment.gvlogin.url
  //environment.gvlogin.aplicacion

  public constructor(
    private jwtHelper: JwtHelperService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    protected _apiService: ArqApiService,
    private cookieservice: CookieService
  ) {
    super();
    this.cargarToken();
  }

  public cargarToken(): any {
    this.activatedRoute.queryParams.pipe(filter(params => !!params['token'])).subscribe(params => {
      this.setToken(params['token']);
      this.cleanUrl(params, 'token', this.router.url);
    });

    const existingToken = localStorage.getItem(TOKEN_KEY);
    if (existingToken) {
      this.setToken(existingToken);
    }
  }

  public isLogged(): boolean {
    return !!this.user$.value;
  }

  /**
   * Redirige a la aplicación de gvLogin para iniciar sesión
   */
  public login(url: string, nombreApp: string, gvloginUrl: string, urlRedirect?: string): any {
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
  public override logout(gvLoginUrl: string, urlRedirect: string): any {
    super.logout(gvLoginUrl, urlRedirect);

    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_MARTE);
    this.cookieservice.deleteAll('/', '.gva.es');

    const redirectURI = urlRedirect ? urlRedirect : encodeURIComponent(window.location.href);
    const gvloginUrl = `${gvLoginUrl}/logout?callbackUrl=${redirectURI}`;

    window.location.href = gvloginUrl;
  }

  public setToken(token: string): any {
    this.storeToken(token);
    const tokenData = this.extractTokenData(token);
    this.setCurrentUser(tokenData);
  }

  public cleanUrl(params: Params, param: string, url?: string): any {
    const queryParams = { ...params };
    delete queryParams[param];

    this.router.navigate([url?.split('?')[0]], { queryParams });
  }

  private storeToken(token: string): any {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getTokenPetMarte(): string {
    let token = localStorage.getItem(TOKEN_MARTE);
    if (!token) {
      token = 'NO TOKEN';
    }
    return token;
  }

  public getTokenSelMarte(): string {
    let token = localStorage.getItem(TOKEN_MARTE_FORMULARIO_SELECCION);
    if (!token) {
      token = 'NO TOKEN';
    }
    return token;
  }

  public getTokenPersonalizado(): string {
    let token = localStorage.getItem(TOKEN_PERSONALIZADO);
    if (!token) {
      token = 'NO TOKEN';
    }
    return token;
  }

  public getToken(): string {
    let token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      token = 'NO TOKEN';
    }
    return token;
  }

  public getIdPet(): string {
    let idPet = localStorage.getItem(IDPET);
    if (!idPet) {
      idPet = 'NO ID PET';
    }
    return idPet;
  }
  public getIdSel(): string {
    let idSel = localStorage.getItem(IDSEL);
    if (!idSel) {
      idSel = 'NO ID SEL';
    }
    return idSel;
  }

  public storeTokenPetMarte(token: string | null): any {
    if (token) {
      localStorage.setItem(TOKEN_MARTE, token);
    }
  }

  public storeTokenPetMarteFormularioSeleccion(token: string | null): any {
    if (token) {
      localStorage.setItem(TOKEN_MARTE_FORMULARIO_SELECCION, token);
    }
  }

  public storeIdPetMarte(idpet?: string): any {
    if (idpet) {
      localStorage.setItem(IDPET, idpet);
    }
  }

  public storeIdSelMarte(idsel?: string): any {
    if (idsel) {
      localStorage.setItem(IDPET, idsel);
    }
  }

  public storeTokenPersonalizado(token: string | null): any {
    if (token) {
      localStorage.setItem(TOKEN_PERSONALIZADO, token);
    }
  }

  private extractTokenData(token: string): ArqGvloginTokenData | null {
    return this.jwtHelper.decodeToken(token);
  }

  private setCurrentUser(data: ArqGvloginTokenData | null): any {
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

  public mostrarInfoTokenMarte(host: string): Observable<any> {
    return this._apiService.get(host + '/api/marte/v1/peticiontokeninfo');
  }

  public buscarTokenJWT(nombreApp: string, gvLoginUrl: string): void {
    if (nombreApp && gvLoginUrl) {
      let datos = {
        idAplicacion: nombreApp, //data['nombreApp'],
        tokenSSO: this.cookieservice.get('gvlogin.login.GVLOGIN_COOKIE')
      };

      this._apiService
        .post(gvLoginUrl + '-ws/rest/restJwt/crearTokenJwtSSO', datos) //data['gvloginUrl']
        .pipe(
          map((token: any) => {
            console.log(token.tokenJwt);
            // sustituir el token de GVLogin por el de esta respuesta
            if (token.tokenJwt) {
              this.setToken(token.tokenJwt);
            }
          }),
          catchError((err, caught) => {
            console.log(err);
            return EMPTY;
          })
        )
        .subscribe();
    }
  }
}
