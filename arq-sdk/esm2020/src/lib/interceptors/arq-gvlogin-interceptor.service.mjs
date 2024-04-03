import { HttpContextToken } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/arq-gvlogin.service";
import * as i2 from "@auth0/angular-jwt";
import * as i3 from "@ngneat/transloco";
import * as i4 from "ngx-cookie-service";
export const nombreApp = new HttpContextToken(() => '');
export const gvloginUrl = new HttpContextToken(() => '');
export const enableJWT = new HttpContextToken(() => true);
export const urlRedirect = new HttpContextToken(() => '');
export const tokenPerso = new HttpContextToken(() => '');
export const enable = new HttpContextToken(() => true);
export class ArqGvloginInterceptorService {
    constructor(auth, injector, jwtHelper, _translocoService, cookieservice) {
        this.auth = auth;
        this.injector = injector;
        this.jwtHelper = jwtHelper;
        this._translocoService = _translocoService;
        this.cookieservice = cookieservice;
    }
    intercept(request, next) {
        if (this.isRefreshNeeded(request)) {
            if (request.context.get(enable)) {
                if (this.cookieservice.check('gvlogin.login.GVLOGIN_COOKIE') &&
                    request.context.get(enableJWT) &&
                    !this.isTokenExpired()) {
                    this.auth.buscarTokenJWT(request.context.get(nombreApp), request.context.get(gvloginUrl));
                }
                else {
                    this.auth.login(request.url, request.context.get(nombreApp), request.context.get(gvloginUrl), request.context.get(urlRedirect));
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
    isRefreshNeeded(request) {
        const isRefreshNeeded = this.auth.getToken() == 'NO TOKEN' || this.isTokenExpired(); //&&
        // environment.gvlogin.whitelistedDomains.some(domain => request.url.includes(domain));
        // &&
        return isRefreshNeeded;
    }
    isTokenExpired() {
        if (this.auth.getToken() === 'NO TOKEN') {
            return false;
        }
        return this.jwtHelper.isTokenExpired(this.auth.getToken());
    }
}
ArqGvloginInterceptorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService, deps: [{ token: i1.ArqGvloginService }, { token: i0.Injector }, { token: i2.JwtHelperService }, { token: i3.TranslocoService }, { token: i4.CookieService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqGvloginInterceptorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvloginInterceptorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ArqGvloginService }, { type: i0.Injector }, { type: i2.JwtHelperService }, { type: i3.TranslocoService }, { type: i4.CookieService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWd2bG9naW4taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9pbnRlcmNlcHRvcnMvYXJxLWd2bG9naW4taW50ZXJjZXB0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFDOUcsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUXJELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3ZELE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsWUFDVSxJQUF1QixFQUNkLFFBQWtCLEVBQzNCLFNBQTJCLEVBQzNCLGlCQUFtQyxFQUNuQyxhQUE0QjtRQUo1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsY0FB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dCI6WyJpbXBvcnQgeyBIdHRwQ29udGV4dFRva2VuLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsb2NvU2VydmljZSB9IGZyb20gJ0BuZ25lYXQvdHJhbnNsb2NvJztcclxuaW1wb3J0IHsgQXJxR3Zsb2dpblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcnEtZ3Zsb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgbm9tYnJlQXBwID0gbmV3IEh0dHBDb250ZXh0VG9rZW4oKCkgPT4gJycpO1xyXG5leHBvcnQgY29uc3QgZ3Zsb2dpblVybCA9IG5ldyBIdHRwQ29udGV4dFRva2VuKCgpID0+ICcnKTtcclxuZXhwb3J0IGNvbnN0IGVuYWJsZUpXVCA9IG5ldyBIdHRwQ29udGV4dFRva2VuKCgpID0+IHRydWUpO1xyXG5leHBvcnQgY29uc3QgdXJsUmVkaXJlY3QgPSBuZXcgSHR0cENvbnRleHRUb2tlbigoKSA9PiAnJyk7XHJcbmV4cG9ydCBjb25zdCB0b2tlblBlcnNvID0gbmV3IEh0dHBDb250ZXh0VG9rZW4oKCkgPT4gJycpO1xyXG5leHBvcnQgY29uc3QgZW5hYmxlID0gbmV3IEh0dHBDb250ZXh0VG9rZW4oKCkgPT4gdHJ1ZSk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcnFHdmxvZ2luSW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGF1dGg6IEFycUd2bG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGp3dEhlbHBlcjogSnd0SGVscGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RyYW5zbG9jb1NlcnZpY2U6IFRyYW5zbG9jb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvb2tpZXNlcnZpY2U6IENvb2tpZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBpZiAodGhpcy5pc1JlZnJlc2hOZWVkZWQocmVxdWVzdCkpIHtcclxuICAgICAgaWYgKHJlcXVlc3QuY29udGV4dC5nZXQoZW5hYmxlKSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuY29va2llc2VydmljZS5jaGVjaygnZ3Zsb2dpbi5sb2dpbi5HVkxPR0lOX0NPT0tJRScpICYmXHJcbiAgICAgICAgICByZXF1ZXN0LmNvbnRleHQuZ2V0KGVuYWJsZUpXVCkgJiZcclxuICAgICAgICAgICF0aGlzLmlzVG9rZW5FeHBpcmVkKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuYXV0aC5idXNjYXJUb2tlbkpXVChyZXF1ZXN0LmNvbnRleHQuZ2V0KG5vbWJyZUFwcCksIHJlcXVlc3QuY29udGV4dC5nZXQoZ3Zsb2dpblVybCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGgubG9naW4oXHJcbiAgICAgICAgICAgIHJlcXVlc3QudXJsLFxyXG4gICAgICAgICAgICByZXF1ZXN0LmNvbnRleHQuZ2V0KG5vbWJyZUFwcCksXHJcbiAgICAgICAgICAgIHJlcXVlc3QuY29udGV4dC5nZXQoZ3Zsb2dpblVybCksXHJcbiAgICAgICAgICAgIHJlcXVlc3QuY29udGV4dC5nZXQodXJsUmVkaXJlY3QpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKCcvYXBpJykpIHtcclxuICAgICAgLy9BbnlhZGltb3MgZWwgdG9rZW4gZGUgTWFydGVcclxuICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVyc1xyXG4gICAgICAgICAgLnNldCgneC1wZXRpY2lvbi1tYXJ0ZScsIHRoaXMuYXV0aC5nZXRUb2tlblBldE1hcnRlKCkpXHJcbiAgICAgICAgICAuc2V0KCd4LXBldGljaW9uLW1hcnRlLWZvcm11bGFyaW8tc2VsZWNjaW9uJywgdGhpcy5hdXRoLmdldFRva2VuU2VsTWFydGUoKSlcclxuICAgICAgICAgIC5zZXQoJ3gtdG9rZW4tcGVyc29uYWxpemFkbycsIHRoaXMuYXV0aC5nZXRUb2tlblBlcnNvbmFsaXphZG8oKSlcclxuICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0aGlzLmF1dGguZ2V0VG9rZW4oKSlcclxuICAgICAgICAgIC5zZXQoJ0NvbnRlbnQtTGFuZ3VhZ2UnLCB0aGlzLl90cmFuc2xvY29TZXJ2aWNlPy5nZXRBY3RpdmVMYW5nKCkgPT0gJ2NhJyA/ICdjYS1FUycgOiAnZXMtRVMnKVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1JlZnJlc2hOZWVkZWQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNSZWZyZXNoTmVlZGVkID0gdGhpcy5hdXRoLmdldFRva2VuKCkgPT0gJ05PIFRPS0VOJyB8fCB0aGlzLmlzVG9rZW5FeHBpcmVkKCk7IC8vJiZcclxuICAgIC8vIGVudmlyb25tZW50Lmd2bG9naW4ud2hpdGVsaXN0ZWREb21haW5zLnNvbWUoZG9tYWluID0+IHJlcXVlc3QudXJsLmluY2x1ZGVzKGRvbWFpbikpO1xyXG4gICAgLy8gJiZcclxuICAgIHJldHVybiBpc1JlZnJlc2hOZWVkZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVG9rZW5FeHBpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuYXV0aC5nZXRUb2tlbigpID09PSAnTk8gVE9LRU4nKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0aGlzLmF1dGguZ2V0VG9rZW4oKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==