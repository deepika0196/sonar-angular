import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArqUsuario } from '../interfaces/arq-usuario.interface';

@Injectable()
export abstract class AuthService {
  protected user$: BehaviorSubject<ArqUsuario | undefined> = new BehaviorSubject<ArqUsuario | undefined>(undefined);

  public constructor() {}

  /**
   * Inicia la sesión del usuario
   */
  public abstract login(url: string, nombreApp: string, gvloginUrl: string): void;

  /** Cierra la sesión del usuario activo */
  public logout(gvLoginUrl: string, urlRedirect: string): void {
    //TODO: se utiliza es en la version 7.2 this.user$.next(undefined);
    this.user$.closed;
  }

  /**
   * Obtiene un stream que emite el usuario con la sesión activa
   * @returns Observable que emite el usuario activo
   */
  public getUser(): Observable<ArqUsuario | undefined> {
    return this.user$.asObservable();
  }

  /**
   * Comprueba si el usuario activo posee alguno de los roles indicados
   * @param roles Lista de roles a comprobar
   */
  public hasAnyRole(roles: string[]): boolean {
    const currentUser = this.user$.value;
    return currentUser !== undefined && currentUser.roles.some(userRole => roles.includes(userRole.codigo));
  }
}
