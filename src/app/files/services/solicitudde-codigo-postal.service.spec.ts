import { TestBed } from '@angular/core/testing';

import { SolicituddeCodigoPostalService } from './solicitudde-codigo-postal.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SolicituddeCodigoPostalService', () => {
  let service: SolicituddeCodigoPostalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicituddeCodigoPostalService],
    });
    service = TestBed.inject(SolicituddeCodigoPostalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
