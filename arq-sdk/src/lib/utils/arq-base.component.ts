import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'arq-base-component',
  template: ''
})
export class ArqBaseComponent implements OnDestroy {
  public unsubscribe$ = new Subject<void>();

  public constructor() {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
