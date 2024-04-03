import { BehaviorSubject, Observable } from 'rxjs';
import { ArqUsuario } from '../interfaces/arq-usuario.interface';
import * as i0 from "@angular/core";
export declare abstract class AuthService {
    protected user$: BehaviorSubject<ArqUsuario | undefined>;
    constructor();
    /**
     * Inicia la sesión del usuario
     */
    abstract login(url: string, nombreApp: string, gvloginUrl: string): void;
    /** Cierra la sesión del usuario activo */
    logout(gvLoginUrl: string, urlRedirect: string): void;
    /**
     * Obtiene un stream que emite el usuario con la sesión activa
     * @returns Observable que emite el usuario activo
     */
    getUser(): Observable<ArqUsuario | undefined>;
    /**
     * Comprueba si el usuario activo posee alguno de los roles indicados
     * @param roles Lista de roles a comprobar
     */
    hasAnyRole(roles: string[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
