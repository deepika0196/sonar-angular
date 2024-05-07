import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ArqGvloginInterceptorService, ArqGvloginService } from 'arq-sdk';

import { environment } from '@env/environment';

const securityProviders = [
  // Servicios de gvLogin
  { provide: ArqGvloginService, useClass: ArqGvloginService },
  //{ provide: AuthService, useClass: GvloginService, multi: true },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: ArqGvloginInterceptorService,
    multi: true,
  },
];

export function jwtOptionsFactory() {
  return {
    //whitelistedDomains: environment.gvlogin.whitelistedDomains,
    tokenGetter: tokenGetter,
  };
}

export function tokenGetter(): string {
  const item = localStorage.getItem(environment.gvlogin.tokenKey);
  return item ? item : '';
}

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
})
export class GvLoginModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: GvLoginModule,
      providers: securityProviders,
    };
  }
}
