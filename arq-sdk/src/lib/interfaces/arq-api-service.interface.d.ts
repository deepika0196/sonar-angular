import { Observable } from 'rxjs';
export interface ArqApiServiceBasics {
    schema(idBloque?: string): Observable<any>;
    findOne?(): Observable<any>;
    findById?(id: string): Observable<any>;
}
