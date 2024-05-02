import { TestBed } from '@angular/core/testing';

import { RequerimientosSubsanacionService } from './requerimientos-subsanacion.service';

describe('RequerimientosSubsanacionService', () => {
  let service: RequerimientosSubsanacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimientosSubsanacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
