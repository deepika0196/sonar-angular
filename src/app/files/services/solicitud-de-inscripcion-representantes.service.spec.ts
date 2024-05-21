import { TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionRepresentantesService } from './solicitud-de-inscripcion-representantes.service';

describe('SolicitudDeInscripcionRepresentantesService', () => {
  let service: SolicitudDeInscripcionRepresentantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudDeInscripcionRepresentantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
