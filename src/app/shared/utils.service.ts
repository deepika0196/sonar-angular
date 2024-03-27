import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { ArqDialogService, ArqPageableRequest, ArqPageableResponse } from 'arq-sdk';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(){}

  static loadMockedData(request: ArqPageableRequest, data: any): Observable<ArqPageableResponse> {
    // Filter Mocking
    if (request.filterCol) {
      if (request.filterCol === 'global')
        data = data.filter((el: any) =>
          el.tParamOne.toLowerCase().includes(request.filter?.toLowerCase())
        );
      else
        data = data.filter((el: any) => {
          let value = el[request.filterCol!];
          if (value && value.value) {
            return (
              el[request.filterCol!].description
                .toLowerCase()
                .includes(request.filter?.toLowerCase()) ||
              el[request.filterCol!].descriptionV
                .toLowerCase()
                .includes(request.filter?.toLowerCase()) ||
              el[request.filterCol!].value
                .toLowerCase()
                .includes(request.filter?.toLowerCase())
            );
          } else {
            return value.toLowerCase().includes(request.filter?.toLowerCase());
          }
        });
    }

    // Sort Mocking
    if (request.sort) {
      data.sort((a: any, b: any) => {
        if (a[request.sort!] < b[request.sort!]) return -1;
        else if (a[request.sort!] > b[request.sort!]) return 1;
        else return 0;
      });
      if (request.sort === 'desc') data.reverse();
    }

    // Page Mocking
    return of({
      content: data.slice(
        request.page * request.size,
        request.page * request.size + request.size
      ),
      size: data.length,
      pageable: {
        sort: {
          unsorted: false,
          sorted: true,
          empty: false,
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 0,
        unpaged: false,
        paged: true,
      },
      last: false,
      totalPages: 0,
      totalElements: data.length,
      number: 0,
      sort: {
        unsorted: false,
        sorted: true,
        empty: false,
      },
      first: true,
      numberOfElements: 0,
      empty: false,
    }).pipe(delay(100));
  }

  static rerender(outletRef: ViewContainerRef, contentRef: TemplateRef<any>) {
    outletRef?.clear();
    outletRef?.createEmbeddedView(contentRef);
  }
  
}

