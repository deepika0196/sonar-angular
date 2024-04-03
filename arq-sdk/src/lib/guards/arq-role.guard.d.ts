import { TranslocoService } from '@ngneat/transloco';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArqGvloginService } from '../services/arq-gvlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { ArqHttpClient } from '../services/arq-http-client.service';
import * as i0 from "@angular/core";
export declare class ArqRoleGuard {
    private auth;
    private _arqHttpClient;
    private _translocoService;
    private cookieservice;
    constructor(auth: ArqGvloginService, _arqHttpClient: ArqHttpClient, _translocoService: TranslocoService, cookieservice: CookieService);
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    private accesoOk;
    private comprobarMarte;
    private realizarPeticionMarte;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqRoleGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqRoleGuard>;
}
