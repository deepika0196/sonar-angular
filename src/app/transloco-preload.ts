import { APP_INITIALIZER } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { environment } from '@env/environment';

const lang = environment.locale.default;

export function preloadUser(transloco: TranslocoService) {
  return function () {
    transloco.setActiveLang(lang);
    return transloco.load(lang).toPromise();
  };
}

export const preLoad = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: preloadUser,
  deps: [TranslocoService],
};
