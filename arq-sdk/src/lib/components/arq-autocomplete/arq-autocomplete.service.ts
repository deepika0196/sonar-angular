import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArqAutocompleteService {
  constructor() {}

  public _filter(options: any, value: string, lang: any): Observable<any> {
    const filterValue = value ? value.toString().toLowerCase() : '';

    let result: any[] = [];

    options.forEach((opt: any) => {
      opt.forEach((el: any) => {
        if (lang == 'ca') {
          if (el?.descriptionV?.toLowerCase().includes(filterValue)) {
            result.push(el);
          }
        } else {
          if (el?.description?.toLowerCase().includes(filterValue)) {
            result.push(el);
          }
        }
      });
    });

    return of(result);
  }
}
