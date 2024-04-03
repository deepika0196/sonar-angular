import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class AuthService {
    constructor() {
        this.user$ = new BehaviorSubject(undefined);
    }
    /** Cierra la sesión del usuario activo */
    logout(gvLoginUrl, urlRedirect) {
        //TODO: se utiliza es en la version 7.2 this.user$.next(undefined);
        this.user$.closed;
    }
    /**
     * Obtiene un stream que emite el usuario con la sesión activa
     * @returns Observable que emite el usuario activo
     */
    getUser() {
        return this.user$.asObservable();
    }
    /**
     * Comprueba si el usuario activo posee alguno de los roles indicados
     * @param roles Lista de roles a comprobar
     */
    hasAnyRole(roles) {
        const currentUser = this.user$.value;
        return currentUser !== undefined && currentUser.roles.some(userRole => roles.includes(userRole.codigo));
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFJbkQsTUFBTSxPQUFnQixXQUFXO0lBRy9CO1FBRlUsVUFBSyxHQUE0QyxJQUFJLGVBQWUsQ0FBeUIsU0FBUyxDQUFDLENBQUM7SUFFNUYsQ0FBQztJQU92QiwwQ0FBMEM7SUFDbkMsTUFBTSxDQUFDLFVBQWtCLEVBQUUsV0FBbUI7UUFDbkQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsS0FBZTtRQUMvQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNyQyxPQUFPLFdBQVcsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7O3dHQS9CbUIsV0FBVzs0R0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcnFVc3VhcmlvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcnEtdXN1YXJpby5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHByb3RlY3RlZCB1c2VyJDogQmVoYXZpb3JTdWJqZWN0PEFycVVzdWFyaW8gfCB1bmRlZmluZWQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnFVc3VhcmlvIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWEgbGEgc2VzacOzbiBkZWwgdXN1YXJpb1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBsb2dpbih1cmw6IHN0cmluZywgbm9tYnJlQXBwOiBzdHJpbmcsIGd2bG9naW5Vcmw6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIC8qKiBDaWVycmEgbGEgc2VzacOzbiBkZWwgdXN1YXJpbyBhY3Rpdm8gKi9cclxuICBwdWJsaWMgbG9nb3V0KGd2TG9naW5Vcmw6IHN0cmluZywgdXJsUmVkaXJlY3Q6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy9UT0RPOiBzZSB1dGlsaXphIGVzIGVuIGxhIHZlcnNpb24gNy4yIHRoaXMudXNlciQubmV4dCh1bmRlZmluZWQpO1xyXG4gICAgdGhpcy51c2VyJC5jbG9zZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIHVuIHN0cmVhbSBxdWUgZW1pdGUgZWwgdXN1YXJpbyBjb24gbGEgc2VzacOzbiBhY3RpdmFcclxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIHF1ZSBlbWl0ZSBlbCB1c3VhcmlvIGFjdGl2b1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRVc2VyKCk6IE9ic2VydmFibGU8QXJxVXN1YXJpbyB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlciQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wcnVlYmEgc2kgZWwgdXN1YXJpbyBhY3Rpdm8gcG9zZWUgYWxndW5vIGRlIGxvcyByb2xlcyBpbmRpY2Fkb3NcclxuICAgKiBAcGFyYW0gcm9sZXMgTGlzdGEgZGUgcm9sZXMgYSBjb21wcm9iYXJcclxuICAgKi9cclxuICBwdWJsaWMgaGFzQW55Um9sZShyb2xlczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdGhpcy51c2VyJC52YWx1ZTtcclxuICAgIHJldHVybiBjdXJyZW50VXNlciAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRVc2VyLnJvbGVzLnNvbWUodXNlclJvbGUgPT4gcm9sZXMuaW5jbHVkZXModXNlclJvbGUuY29kaWdvKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==