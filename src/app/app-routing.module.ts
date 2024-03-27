import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ArqRoleGuard } from 'arq-sdk';
import { environment } from 'src/environments/environment';
import { EjemploUsoComponent } from './components/ejemplo-uso/ejemplo-uso.component';

import { environmentLoader } from 'src/environments/environmentLoader';
import { LoginSimulatedComponent } from './shared/components/login-simulated/login-simulated.component';
import { ItemExampleComponent as ItemExample } from './components/item-example/item-example.component';
import { ItemExampleEditComponent as ItemExampleEdit } from './components/item-example-edit/item-example-edit.component';

export let routes: Routes = [];

interface Environment {
  [key: string]: any;
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'disabled' })],

  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    environmentLoader.then((env) => {
      Object.keys(env).forEach((key) => {
        (environment as Environment)[key] = env[key];
      });
      routes = [
        {
          path: 'itemExample',
          component: ItemExample,
          // canActivate: [ArqRoleGuard],
          // canActivateChild: [ArqRoleGuard],
          data: {
            host: environment.settings.host,
            nombreApp: environment.gvlogin.aplicacion,
            gvloginUrl: environment.gvlogin.url,
            enable: environment.gvlogin.enable,
          }
        },
        {
          path: 'itemExampleEdit',
          component: ItemExampleEdit,
          // canActivate: [ArqRoleGuard],
          // canActivateChild: [ArqRoleGuard],
          data: {
            host: environment.settings.host,
            nombreApp: environment.gvlogin.aplicacion,
            gvloginUrl: environment.gvlogin.url,
            enable: environment.gvlogin.enable,
          }
        },
        {
          path: 'ejemplo-uso',
          // canActivate: [ArqRoleGuard],
          // canActivateChild: [ArqRoleGuard],
          data: {
            host: environment.settings.host,
            nombreApp: environment.gvlogin.aplicacion,
            gvloginUrl: environment.gvlogin.url,
            enable: environment.gvlogin.enable,
          },
          children: [
            {
              path: '',
              component: EjemploUsoComponent,
            },
          ],
        }
        
      ];

      if (!environment.gvlogin.enableLoginSimulated) {
        routes.push({
          path: '**',
          component: ItemExample,//Set main page on your application
        })
      } else {
        routes.push({
          path: 'loginSimulated',
          component: LoginSimulatedComponent,
          // canActivate: [ArqRoleGuard],
          // canActivateChild: [ArqRoleGuard],
          data: {
            host: environment.settings.host,
            nombreApp: environment.gvlogin.aplicacion,
            gvloginUrl: environment.gvlogin.url,
            enable: false,
          }
        },
          {
            path: '**',
            redirectTo: 'loginSimulated',//This is for login local

          })
      }

      this.router.resetConfig(routes);
      this.router.initialNavigation();
    });
  }
}
