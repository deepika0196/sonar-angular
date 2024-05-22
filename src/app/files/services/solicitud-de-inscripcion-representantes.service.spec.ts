import { TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionRepresentantesService } from './solicitud-de-inscripcion-representantes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolicitudDeInscripcionRepresentantesService', () => {
  let service: SolicitudDeInscripcionRepresentantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudDeInscripcionRepresentantesService],
    });
    service = TestBed.inject(SolicitudDeInscripcionRepresentantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
