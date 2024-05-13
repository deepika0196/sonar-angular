import { TestBed } from '@angular/core/testing';

import { SolicitudeProvinciaService } from './solicitude-provincia.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolicitudeProvinciaService', () => {
  let service: SolicitudeProvinciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudeProvinciaService],
    });
    service = TestBed.inject(SolicitudeProvinciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
