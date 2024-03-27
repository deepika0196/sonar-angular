import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ArqGvloginInterceptorService } from '../interceptors/interceptors';
import { ArqGvloginService } from '../services/services';

const securityProviders = [
  // Servicios de gvLogin
  { provide: ArqGvloginService, useClass: ArqGvloginService },
  //{ provide: AuthService, useClass: GvloginService, multi: true },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: ArqGvloginInterceptorService,
    multi: true
  }
];

export function jwtOptionsFactory() {
  return {
    //whitelistedDomains: environment.gvlogin.whitelistedDomains,
    tokenGetter: tokenGetter
  };
}

export function tokenGetter(): string {
  return localStorage.getItem('gvlogin-token')!;
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
        useFactory: jwtOptionsFactory
      }
    })
  ]
})
export class ArqGvLoginModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ArqGvLoginModule,
      providers: securityProviders
    };
  }
}
