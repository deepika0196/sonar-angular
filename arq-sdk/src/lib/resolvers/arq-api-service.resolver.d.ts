import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArqApiServiceBasics } from '../interfaces/arq-api-service.interface';
export declare const arqApiResolver: <T extends ArqApiServiceBasics>(service: T) => {
    schema: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => any;
    findOne: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => import("rxjs").Observable<any> | null;
    findById: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => import("rxjs").Observable<any> | null;
};
