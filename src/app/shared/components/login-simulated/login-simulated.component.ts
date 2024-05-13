import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {
  TokenData,
  TokenRequest,
  TokenSimulated,
} from './interfaces/TokenInterfaces';

@Component({
  selector: 'app-login-simulated',
  templateUrl: './login-simulated.component.html',
  styleUrls: ['./login-simulated.component.css'],
})
export class LoginSimulatedComponent {
  public userInfo: TokenData = {
    nif: '',
    name: '',
    email: '',
    rol: '',
  };
  entorno: any = environment;

  public tokenRequest: TokenRequest = {
    application: this.entorno.gvlogin.aplicacion,
    userInfo: this.userInfo,
  };

  public token: TokenSimulated;
  public callback?: string | null;

  constructor(
    public httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: LocationStrategy,
    private toast: ToastrService
  ) {
    this.entorno = environment;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route.params.subscribe((params: Params) => {
      this.callback = this.route.snapshot.queryParams['url'];
      if (this.callback == null) {
        this.callback =
          'http://localhost:8080' + this.location.getBaseHref() + 'itemExample'; // Para que al entrar con loginSimulado y hacer el login, nos mande a un componente de inicio
      }
    });
  }

  public login() {
    this.httpClient
      .post<TokenSimulated>(
        environment.settings.hostDynamic + '/apipublica/interna/v1/token',
        this.tokenRequest
      )
      .subscribe({
        next: (data) => {
          this.token = data;
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          window.location.href = this.callback + '?token=' + this.token.token;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        error: (e) => this.toast.error('No token for his nif', 'Error token'),
      });
  }
}
