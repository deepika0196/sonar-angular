import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SolicitudeMunicipioService } from './solicitude-municipio.service';
import { CustomResponse } from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { Municipio } from '@app/files/interfaces/solicitud-de-inscripcion';

describe('SolicitudeMunicipioService', () => {
  let service: SolicitudeMunicipioService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudeMunicipioService],
    });

    service = TestBed.inject(SolicitudeMunicipioService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getMunicipio', () => {
    it('should call get with the correct URL and parameters', () => {
      const provCodProvincia = '01';
      const mockResponse: CustomResponse<Municipio> = {
        response: [
          {
            muniCodMunicipio: '',
            muniCodProvincia: '',
            muniDenominacion: '',
          },
        ],
        success: true,
      };

      service.getMunicipio(provCodProvincia).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'GET' &&
          req.url === service.urlBuilder(UrlEndpoints.vmcrcMunicipio) &&
          req.params.get('provCodProvincia') === provCodProvincia
      );

      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.vmcrcMunicipio);
      expect(url).toEqual(`${service.apiUrl}${UrlEndpoints.vmcrcMunicipio}`);
    });
  });
});
