import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { Injector, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArqApiService, ArqGvloginService, ArqSpinnerModule } from 'arq-sdk';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentsModule } from './components/app-components.module';
import { GvLoginModule } from './core/gvlogin/gvlogin.module';
import { TranslocoRootModule } from './transloco-root.module';
import { ToastrModule } from 'ngx-toastr';
import { preLoad } from './transloco-preload';
import { MenuExampleComponent } from './shared/components/menu/menu.component';
import { LoginSimulatedComponent } from './shared/components/login-simulated/login-simulated.component';
import { PrimeNgModule } from '@app/prime-ng.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { HttpRequestInterceptor } from '@app/interceptors/http-request.interceptor';
import { LoaderComponent } from '@app/shared/loader/loader.component';

// import { MenuItem } from 'primeng/api';

registerLocaleData(localeEs);

export function getToken(): string {
  // return localStorage.getItem('token')!;
  const token = localStorage.getItem('token');
  return token ? token : '';
}

export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,
    LoginSimulatedComponent,
    MenuExampleComponent,
    LoaderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponentsModule,
    FormsModule,
    TranslocoRootModule,
    AppComponentsModule,
    ArqSpinnerModule,
    GvLoginModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    ArqGvloginService,
    MatSnackBar,
    ArqApiService,
    MomentDateAdapter,
    preLoad,
    { provide: LOCALE_ID, useValue: 'es-ES' },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly injector: Injector) {
    AppInjector = this.injector;
  }
}
