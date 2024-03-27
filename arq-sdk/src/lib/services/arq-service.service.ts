import { Injectable } from '@angular/core';

/**
 * Base service for every CRUD Service
 */
@Injectable()
export abstract class Service {
  constructor() {}

  protected getURIEntityBase(host: string, params?: undefined): string {
    return host + '/api/' + this.getURIEntity(params);
  }

  protected getURIEntityBasePublica(host: string, params?: undefined): string {
    return host + '/apipublica/' + this.getURIEntity(params);
  }

  public abstract getURIEntity(params?: undefined): string;
}
