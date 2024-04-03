import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/arq-gvlogin.service";
import * as i2 from "../services/arq-http-client.service";
import * as i3 from "@ngneat/transloco";
import * as i4 from "ngx-cookie-service";
const USER_LANG = 'user-lang';
export class ArqRoleGuard {
    constructor(auth, _arqHttpClient, _translocoService, cookieservice) {
        this.auth = auth;
        this._arqHttpClient = _arqHttpClient;
        this._translocoService = _translocoService;
        this.cookieservice = cookieservice;
    }
    canActivateChild(next, state) {
        return this.accesoOk(next, state, next.parent?.data ? next.parent?.data : next.data);
    }
    canActivate(next, state) {
        return this.accesoOk(next, state, next.data);
    }
    accesoOk(next, state, data) {
        if (next.queryParams[USER_LANG]) {
            const lang = next.queryParams[USER_LANG];
            localStorage.setItem('user-lang', lang);
            this._translocoService?.setActiveLang(lang);
        }
        // console.log('cookies:', this.cookieservice.getAll());
        if (next.queryParams['token']) {
            // existe el token de gvlogin en la url, lo almacenamos en el localStorage
            localStorage.setItem('gvlogin-token', next.queryParams['token']);
            this.auth.cargarToken();
        }
        else if (!this.auth.isLogged()) {
            if (this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') && data['enableJWT']) {
                this.auth.buscarTokenJWT(data['nombreApp'], data['gvloginUrl']);
            }
            else {
                // Redirigir a Gvlogin para obligar al loggeo
                if (data['enable']) {
                    this.auth.login(window.location.pathname, data['nombreApp'], data['gvloginUrl'], data['urlRedirect']);
                }
            }
        }
        if (data['tokenPerso']) {
            this._arqHttpClient
                .get(data['tokenPerso'], {
                observe: 'response',
                responseType: 'text'
            })
                .subscribe({
                next: (response) => {
                    console.log(response);
                    this.auth.storeTokenPersonalizado(response.headers.get('x-token-personalizado'));
                },
                error: (err) => {
                    console.log('peta token perso ', err);
                }
            });
        }
        return this.comprobarMarte(next, state.url, data['host']);
    }
    comprobarMarte(next, state, host) {
        let idPet = next.queryParams['idPet'];
        let idSel = next.queryParams['idSel'];
        if (idPet || idSel) {
            if (!host || !host.startsWith('htt')) {
                console.error('El host no es correcto!!');
            }
            return this.realizarPeticionMarte({ idSel, idPet, host, next, state });
        }
        else {
            return of(true);
        }
    }
    realizarPeticionMarte({ idSel, idPet, host, next, state }) {
        let endpoint = host + '/api/marte/v1/';
        if (idSel) {
            this.auth.storeIdSelMarte(idSel);
            endpoint += `peticionsel/${idSel}`;
        }
        else {
            this.auth.storeIdPetMarte(idPet);
            endpoint += `peticion/${idPet}`;
        }
        return this._arqHttpClient
            .get(endpoint, {
            observe: 'response',
            responseType: 'text'
        })
            .pipe(map((token) => {
            const lang = token.headers.get('Content-Language')?.split('-')[0] || 'es';
            localStorage.setItem(USER_LANG, lang);
            this._translocoService?.setActiveLang(lang);
            if (idSel) {
                this.auth.storeTokenPetMarteFormularioSeleccion(token.headers.get('x-peticion-marte-formulario-seleccion'));
                this.auth.cleanUrl(next.queryParams, 'idSel', state);
            }
            else {
                this.auth.storeTokenPetMarte(token.headers.get('x-peticion-marte'));
                this.auth.cleanUrl(next.queryParams, 'idPet', state);
            }
            return true;
        }), catchError(err => {
            console.log('error al recuperar el token de Marte: ', err);
            return of(true);
        }));
    }
}
ArqRoleGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, deps: [{ token: i1.ArqGvloginService }, { token: i2.ArqHttpClient }, { token: i3.TranslocoService }, { token: i4.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqRoleGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRoleGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ArqGvloginService }, { type: i2.ArqHttpClient }, { type: i3.TranslocoService }, { type: i4.CookieService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXJvbGUuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvZ3VhcmRzL2FycS1yb2xlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFPdkQsTUFBTSxTQUFTLEdBQVcsV0FBVyxDQUFDO0FBS3RDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQ1UsSUFBdUIsRUFDdkIsY0FBNkIsRUFDN0IsaUJBQW1DLEVBQ25DLGFBQTRCO1FBSDVCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQUVHLGdCQUFnQixDQUNyQixJQUE0QixFQUM1QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sV0FBVyxDQUNoQixJQUE0QixFQUM1QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLFFBQVEsQ0FBQyxJQUE0QixFQUFFLEtBQTBCLEVBQUUsSUFBVTtRQUNuRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7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LFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDOzt5R0F6SFUsWUFBWTs2R0FBWixZQUFZLGNBRlgsTUFBTTsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsb2NvU2VydmljZSB9IGZyb20gJ0BuZ25lYXQvdHJhbnNsb2NvJztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIERhdGEsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBcnFHdmxvZ2luU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FycS1ndmxvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXJxSHR0cENsaWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2FycS1odHRwLWNsaWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuY29uc3QgVVNFUl9MQU5HOiBzdHJpbmcgPSAndXNlci1sYW5nJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVJvbGVHdWFyZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBBcnFHdmxvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FycUh0dHBDbGllbnQ6IEFycUh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIF90cmFuc2xvY29TZXJ2aWNlOiBUcmFuc2xvY29TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb29raWVzZXJ2aWNlOiBDb29raWVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgY2FuQWN0aXZhdGVDaGlsZChcclxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY2Nlc29PayhuZXh0LCBzdGF0ZSwgbmV4dC5wYXJlbnQ/LmRhdGEgPyBuZXh0LnBhcmVudD8uZGF0YSA6IG5leHQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQWN0aXZhdGUoXHJcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWNjZXNvT2sobmV4dCwgc3RhdGUsIG5leHQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjY2Vzb09rKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBkYXRhOiBEYXRhKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBpZiAobmV4dC5xdWVyeVBhcmFtc1tVU0VSX0xBTkddKSB7XHJcbiAgICAgIGNvbnN0IGxhbmc6IHN0cmluZyA9IG5leHQucXVlcnlQYXJhbXNbVVNFUl9MQU5HXTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItbGFuZycsIGxhbmcpO1xyXG4gICAgICB0aGlzLl90cmFuc2xvY29TZXJ2aWNlPy5zZXRBY3RpdmVMYW5nKGxhbmcpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2Nvb2tpZXM6JywgdGhpcy5jb29raWVzZXJ2aWNlLmdldEFsbCgpKTtcclxuICAgIGlmIChuZXh0LnF1ZXJ5UGFyYW1zWyd0b2tlbiddKSB7XHJcbiAgICAgIC8vIGV4aXN0ZSBlbCB0b2tlbiBkZSBndmxvZ2luIGVuIGxhIHVybCwgbG8gYWxtYWNlbmFtb3MgZW4gZWwgbG9jYWxTdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdndmxvZ2luLXRva2VuJywgbmV4dC5xdWVyeVBhcmFtc1sndG9rZW4nXSk7XHJcbiAgICAgIHRoaXMuYXV0aC5jYXJnYXJUb2tlbigpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5hdXRoLmlzTG9nZ2VkKCkpIHtcclxuICAgICAgaWYgKHRoaXMuY29va2llc2VydmljZS5jaGVjaygnZ3Zsb2dpbi5sb2dpbi5HVkxPR0lOX0NPT0tJRScpICYmIGRhdGFbJ2VuYWJsZUpXVCddKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoLmJ1c2NhclRva2VuSldUKGRhdGFbJ25vbWJyZUFwcCddLCBkYXRhWydndmxvZ2luVXJsJ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlZGlyaWdpciBhIEd2bG9naW4gcGFyYSBvYmxpZ2FyIGFsIGxvZ2dlb1xyXG4gICAgICAgIGlmIChkYXRhWydlbmFibGUnXSkge1xyXG4gICAgICAgICAgdGhpcy5hdXRoLmxvZ2luKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgZGF0YVsnbm9tYnJlQXBwJ10sIGRhdGFbJ2d2bG9naW5VcmwnXSwgZGF0YVsndXJsUmVkaXJlY3QnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YVsndG9rZW5QZXJzbyddKSB7XHJcbiAgICAgIHRoaXMuX2FycUh0dHBDbGllbnRcclxuICAgICAgICAuZ2V0PFJlc3BvbnNlPihkYXRhWyd0b2tlblBlcnNvJ10sIHtcclxuICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAnanNvbidcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8UmVzcG9uc2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoLnN0b3JlVG9rZW5QZXJzb25hbGl6YWRvKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCd4LXRva2VuLXBlcnNvbmFsaXphZG8nKSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGV0YSB0b2tlbiBwZXJzbyAnLCBlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29tcHJvYmFyTWFydGUobmV4dCwgc3RhdGUudXJsLCBkYXRhWydob3N0J10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wcm9iYXJNYXJ0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogc3RyaW5nLCBob3N0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGxldCBpZFBldCA9IG5leHQucXVlcnlQYXJhbXNbJ2lkUGV0J107XHJcbiAgICBsZXQgaWRTZWwgPSBuZXh0LnF1ZXJ5UGFyYW1zWydpZFNlbCddO1xyXG5cclxuICAgIGlmIChpZFBldCB8fCBpZFNlbCkge1xyXG4gICAgICBpZiAoIWhvc3QgfHwgIWhvc3Quc3RhcnRzV2l0aCgnaHR0JykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFbCBob3N0IG5vIGVzIGNvcnJlY3RvISEnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5yZWFsaXphclBldGljaW9uTWFydGUoeyBpZFNlbCwgaWRQZXQsIGhvc3QsIG5leHQsIHN0YXRlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFsaXphclBldGljaW9uTWFydGUoe1xyXG4gICAgaWRTZWwsXHJcbiAgICBpZFBldCxcclxuICAgIGhvc3QsXHJcbiAgICBuZXh0LFxyXG4gICAgc3RhdGVcclxuICB9OiB7XHJcbiAgICBpZFNlbD86IHN0cmluZztcclxuICAgIGlkUGV0Pzogc3RyaW5nO1xyXG4gICAgaG9zdDogc3RyaW5nO1xyXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcclxuICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgfSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgbGV0IGVuZHBvaW50OiBzdHJpbmcgPSBob3N0ICsgJy9hcGkvbWFydGUvdjEvJztcclxuICAgIGlmIChpZFNlbCkge1xyXG4gICAgICB0aGlzLmF1dGguc3RvcmVJZFNlbE1hcnRlKGlkU2VsKTtcclxuICAgICAgZW5kcG9pbnQgKz0gYHBldGljaW9uc2VsLyR7aWRTZWx9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0aC5zdG9yZUlkUGV0TWFydGUoaWRQZXQpO1xyXG4gICAgICBlbmRwb2ludCArPSBgcGV0aWNpb24vJHtpZFBldH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FycUh0dHBDbGllbnRcclxuICAgICAgLmdldDxSZXNwb25zZT4oZW5kcG9pbnQsIHtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICdqc29uJ1xyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHRva2VuOiBIdHRwUmVzcG9uc2U8UmVzcG9uc2U+KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsYW5nOiBzdHJpbmcgPSB0b2tlbi5oZWFkZXJzLmdldCgnQ29udGVudC1MYW5ndWFnZScpPy5zcGxpdCgnLScpWzBdIHx8ICdlcyc7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVU0VSX0xBTkcsIGxhbmcpO1xyXG4gICAgICAgICAgdGhpcy5fdHJhbnNsb2NvU2VydmljZT8uc2V0QWN0aXZlTGFuZyhsYW5nKTtcclxuICAgICAgICAgIGlmIChpZFNlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGguc3RvcmVUb2tlblBldE1hcnRlRm9ybXVsYXJpb1NlbGVjY2lvbih0b2tlbi5oZWFkZXJzLmdldCgneC1wZXRpY2lvbi1tYXJ0ZS1mb3JtdWxhcmlvLXNlbGVjY2lvbicpKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoLmNsZWFuVXJsKG5leHQucXVlcnlQYXJhbXMsICdpZFNlbCcsIHN0YXRlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5zdG9yZVRva2VuUGV0TWFydGUodG9rZW4uaGVhZGVycy5nZXQoJ3gtcGV0aWNpb24tbWFydGUnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5jbGVhblVybChuZXh0LnF1ZXJ5UGFyYW1zLCAnaWRQZXQnLCBzdGF0ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgYWwgcmVjdXBlcmFyIGVsIHRva2VuIGRlIE1hcnRlOiAnLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==