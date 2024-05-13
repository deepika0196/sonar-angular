import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RequerimientosSubsanacionService } from './requerimientos-subsanacion.service';

describe('RequerimientosSubsanacionService', () => {
  let service: RequerimientosSubsanacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequerimientosSubsanacionService],
    });
    service = TestBed.inject(RequerimientosSubsanacionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
