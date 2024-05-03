import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CampoDeActuacionService } from './campo-de-actuacion.service';
import { CampoDeActuacion } from '../interfaces/campoDeActuacion';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

describe('CampoDeActuacionService', () => {
  let service: CampoDeActuacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CampoDeActuacionService],
    });
    service = TestBed.inject(CampoDeActuacionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
