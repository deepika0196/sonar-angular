import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SolicitudDeInscripcionRepresentantesService } from './solicitud-de-inscripcion-representantes.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import { RepresentantesLegal } from '@app/files/interfaces/solicitud-de-inscripcion';
import { CustomResponse } from '@app/shared/services/common.service';

describe('SolicitudDeInscripcionRepresentantesService', () => {
  let service: SolicitudDeInscripcionRepresentantesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudDeInscripcionRepresentantesService],
    });

    service = TestBed.inject(SolicitudDeInscripcionRepresentantesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getByRepresentantesNifCif', () => {
    it('should call get with the correct URL and parameter', () => {
      const cifNif = '12345678A';
      const mockResponse: CustomResponse<RepresentantesLegal> = {
        response: [
          {
            apellidos: '',
            codmun: '',
            codpro: '',
            cp: '',
            domicilio: '',
            email: '',
            fax: '',
            id: 0,
            nifcif: '',
            nombre: '',
            telefono: '',
          },
        ],
        success: true,
      };

      service.getByRepresentantesNifCif(cifNif).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'GET' &&
          req.url ===
            service.urlBuilder(UrlEndpoints.reccaRepresentantes) +
              `/findByNifcif/${cifNif}`
      );

      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.reccaRepresentantes);
      expect(url).toEqual(
        `${service.apiUrl}${UrlEndpoints.reccaRepresentantes}`
      );
    });
  });
});
