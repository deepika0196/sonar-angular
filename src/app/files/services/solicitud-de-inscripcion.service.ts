import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDeInscripcionService {
  postEnten(data: any) {
    console.log(data);
  }
}
