import { Injectable } from '@angular/core';
import { ArqApiService, ArqHttpClient, ArqPageableResponse} from 'arq-sdk';
import { environment } from 'src/environments/environment';
import { ItemExample } from '../shared/interfaces/itemExample';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ItemExampleService   {
    public urlApi : string = environment.settings.hostDynamic + '/api/v1/item-example';

    constructor(private _http : HttpClient){}

    _arqHttpClient: ArqHttpClient = new ArqHttpClient(this._http,environment);

    public getAll(){
        return this._arqHttpClient.get<ItemExample[]>(
            this.urlApi
          );
    } 

    public getAllPageable(body: any):Observable<any>{
        return this._arqHttpClient.post(this.urlApi,body);
    } 

    public insert(data: ItemExample) {
        return this._arqHttpClient.post<ItemExample>(
            this.urlApi,
            data
          );
      }
    
      public update(data: ItemExample) {
        return this._arqHttpClient.put<ItemExample>(
            this.urlApi+ "/" +data.id,
            data
          );
      }
    
      public delete(id : number) {
        return this._arqHttpClient.delete<ItemExample>(
            this.urlApi + "/" + id
          );
        }
}