import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SolicituddeCodigoPostalService } from './solicitudde-codigo-postal.service';
import { CustomResponse } from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { postalCode } from '@app/files/interfaces/solicitud-de-inscripcion';

describe('SolicituddeCodigoPostalService', () => {
  let service: SolicituddeCodigoPostalService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicituddeCodigoPostalService],
    });

    service = TestBed.inject(SolicituddeCodigoPostalService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getMunicipio', () => {
    it('should call get with the correct URL and parameters', () => {
      const provincia = '01';
      const municipio = '001';
      const mockResponse: CustomResponse<postalCode> = {
        response: [
          {
            cpostMunicipio: '',
            cpostCodMuni: '',
            cpostCodPostal: '',
          },
        ],
        success: true,
      };

      service.getMunicipio(provincia, municipio).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'GET' &&
          req.url === service.urlBuilder(UrlEndpoints.vmcrcCodigoPostal) &&
          req.params.get('muniCodMunicipio') === municipio &&
          req.params.get('provCodProvincia') === provincia
      );

      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.vmcrcCodigoPostal);
      expect(url).toEqual(`${service.apiUrl}${UrlEndpoints.vmcrcCodigoPostal}`);
    });
  });
});
