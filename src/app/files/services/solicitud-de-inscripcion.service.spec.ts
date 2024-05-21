import { TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionService } from './solicitud-de-inscripcion.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SolicitudDeInscripcionService', () => {
  let service: SolicitudDeInscripcionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudDeInscripcionService],
    });
    service = TestBed.inject(SolicitudDeInscripcionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
