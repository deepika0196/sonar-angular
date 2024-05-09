import { TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionService } from './solicitud-de-inscripcion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolicitudDeInscripcionService', () => {
  let service: SolicitudDeInscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudDeInscripcionService],
    });
    service = TestBed.inject(SolicitudDeInscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
