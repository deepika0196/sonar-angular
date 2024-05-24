import { TestBed } from '@angular/core/testing';
import { CampoDeActuacionService } from './campo-de-actuacion.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CustomResponse } from '@app/shared/services/common.service';
import { CampoDeActuacion } from '../interfaces/campoDeActuacion';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

describe('CampoDeActuacionService', () => {
  let service: CampoDeActuacionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CampoDeActuacionService],
    });

    service = TestBed.inject(CampoDeActuacionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCampoDeActuacions', () => {
    it('should call get with the correct URL', () => {
      const mockResponse: CustomResponse<CampoDeActuacion> = {
        response: [
          {
            codigo: '001',
            deseccion: 'Test 1',
            deseccionVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service.getCampoDeActuacions().subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaSecciones)
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('postCampoDeActuacions', () => {
    it('should call post with the correct URL and data', () => {
      const mockRequest: CampoDeActuacion = {
        codigo: '001',
        deseccion: 'Test 1',
        deseccionVal: 'Test Val 1',
      };

      const mockResponse: CustomResponse<CampoDeActuacion> = {
        response: [
          {
            codigo: '001',
            deseccion: 'Test 1',
            deseccionVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service.postCampoDeActuacions(mockRequest).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaSecciones)
      );
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(mockRequest);
      req.flush(mockResponse);
    });
  });

  describe('updateCampoDeActuacions', () => {
    it('should call put with the correct URL and data', () => {
      const mockRequest: CampoDeActuacion = {
        codigo: '001',
        deseccion: 'Test 1',
        deseccionVal: 'Test Val 1',
      };

      const mockResponse: CustomResponse<CampoDeActuacion> = {
        response: [
          {
            codigo: '001',
            deseccion: 'Test 1',
            deseccionVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service.updateCampoDeActuacions(mockRequest).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaSecciones)
      );
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(mockRequest);
      req.flush(mockResponse);
    });
  });

  describe('deleteCampoDeActuacions', () => {
    it('should call delete with the correct URL', () => {
      const codigo = '123';
      const mockResponse: CustomResponse<CampoDeActuacion> = {
        response: [
          {
            codigo: '001',
            deseccion: 'Test 1',
            deseccionVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service.deleteCampoDeActuacions(codigo).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        `${service.urlBuilder(UrlEndpoints.reccaSecciones)}/${codigo}`
      );
      expect(req.request.method).toEqual('DELETE');
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.reccaSecciones);
      expect(url).toEqual(`${service.apiUrl}${UrlEndpoints.reccaSecciones}`);
    });
  });
});
