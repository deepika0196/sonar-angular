import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArqApiServiceBasics } from '../interfaces/arq-api-service.interface';
import { catchError, of, shareReplay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const arqApiResolver = <T extends ArqApiServiceBasics>(service: T) => {
  let schema$: any;
  return {
    schema: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      if (!schema$) {
        schema$ = service.schema().pipe(shareReplay(1));
      }
      return schema$;
    },
    findOne: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      if (!service.findOne) {
        return null;
      }
      return service.findOne().pipe(catchError((error: HttpErrorResponse) => of(error)));
    },
    findById: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      if (!service.findById) {
        return null;
      }
      let id = route.params['id'];
      return service.findById(id).pipe(catchError((error: HttpErrorResponse) => of(error)));
    }
  };
};
