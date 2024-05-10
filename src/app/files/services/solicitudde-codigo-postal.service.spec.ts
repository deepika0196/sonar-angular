import { TestBed } from '@angular/core/testing';

import { SolicituddeCodigoPostalService } from './solicitudde-codigo-postal.service';

describe('SolicituddeCodigoPostalService', () => {
  let service: SolicituddeCodigoPostalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicituddeCodigoPostalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
