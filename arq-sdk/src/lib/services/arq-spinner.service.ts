import { Injectable } from '@angular/core';
import { Observable, Subject, distinctUntilChanged } from 'rxjs';

@Injectable()
export class ArqSpinnerService {
  private loading = new Subject<boolean>();

  constructor() {}

  show() {
    this.loading.next(true);
  }

  hide() {
    setTimeout(() => {
      this.loading.next(false);
    }, 500);
  }

  state(): Observable<boolean> {
    return this.loading.asObservable().pipe(distinctUntilChanged());
  }
}
