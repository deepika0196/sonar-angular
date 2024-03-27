import { Injectable, isDevMode, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER
} from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  // TODO: cambiar a ArqHttpClient
  public constructor(private http: HttpClient) {}

  public getTranslation(lang: string): any {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['es', 'ca'],
        defaultLang: 'es',
        fallbackLang: 'es',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule {}
