import { TestBed } from '@angular/core/testing';

import { SolicitudeMunicipioService } from './solicitude-municipio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolicitudeMunicipioService', () => {
  let service: SolicitudeMunicipioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudeMunicipioService],
    });
    service = TestBed.inject(SolicitudeMunicipioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
