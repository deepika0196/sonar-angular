import { Observable } from 'rxjs';

export interface ArqApiServiceBasics {
  schema(): Observable<any>;
  findOne?(): Observable<any>;
  findById?(id: string): Observable<any>;
}
