import { TestBed } from '@angular/core/testing';

import { CampoDeActuacionService } from './campo-de-actuacion.service';

describe('CampoDeActuacionService', () => {
  let service: CampoDeActuacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampoDeActuacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
