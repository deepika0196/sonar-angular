import { Translation, TranslocoService } from '@ngneat/transloco';

export function preloadUser(transloco: TranslocoService, environment: any) {
  return function (): Promise<Translation | undefined> {
    const lang = localStorage.getItem('user-lang') || environment.locale.default;
    transloco.setActiveLang(lang);
    return transloco.load(lang).toPromise();
  };
}
