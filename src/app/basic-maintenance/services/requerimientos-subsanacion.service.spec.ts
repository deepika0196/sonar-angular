import { TestBed } from '@angular/core/testing';
import { RequerimientosSubsanacionService } from './requerimientos-subsanacion.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CustomResponse } from '@app/shared/services/common.service';
import { RequerimientosSubsanacion } from '@app/basic-maintenance/interfaces/requerimientos-subsanacion';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';

describe('RequerimientosSubsanacionService', () => {
  let service: RequerimientosSubsanacionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequerimientosSubsanacionService],
    });

    service = TestBed.inject(RequerimientosSubsanacionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getRequerimientosSubsanacions', () => {
    it('should call get with the correct URL', () => {
      const mockResponse: CustomResponse<RequerimientosSubsanacion> = {
        response: [
          {
            codigo: '001',
            derequerimiento: 'Test 1',
            derequerimientoVal: 'Test Val 1',
          },
        ],
        success: true,
      };
      service.getRequerimientosSubsanacions().subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaRequerimientos)
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('postRequerimientosSubsanacion', () => {
    it('should call post with the correct URL and data', () => {
      const mockRequest: RequerimientosSubsanacion = {
        codigo: '001',
        derequerimiento: 'Test 1',
        derequerimientoVal: 'Test Val 1',
        /* mock data */
      };
      const mockResponse: CustomResponse<RequerimientosSubsanacion> = {
        response: [
          {
            codigo: '001',
            derequerimiento: 'Test 1',
            derequerimientoVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service
        .postRequerimientosSubsanacion(mockRequest)
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaRequerimientos)
      );
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(mockRequest);
      req.flush(mockResponse);
    });
  });

  describe('updateRequerimientosSubsanacion', () => {
    it('should call put with the correct URL and data', () => {
      const mockRequest: RequerimientosSubsanacion = {
        codigo: '001',
        derequerimiento: 'Test 1',
        derequerimientoVal: 'Test Val 1',
        /* mock data */
      };
      const mockResponse: CustomResponse<RequerimientosSubsanacion> = {
        response: [
          {
            codigo: '001',
            derequerimiento: 'Test 1',
            derequerimientoVal: 'Test Val 1',
          },
        ],
        success: true,
      };
      service
        .updateRequerimientosSubsanacion(mockRequest)
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        service.urlBuilder(UrlEndpoints.reccaRequerimientos)
      );
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(mockRequest);
      req.flush(mockResponse);
    });
  });

  describe('deleteRequerimientosSubsanacion', () => {
    it('should call delete with the correct URL', () => {
      const codigo = '123';
      const mockResponse: CustomResponse<RequerimientosSubsanacion> = {
        response: [
          {
            codigo: '001',
            derequerimiento: 'Test 1',
            derequerimientoVal: 'Test Val 1',
          },
        ],
        success: true,
      };

      service.deleteRequerimientosSubsanacion(codigo).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        `${service.urlBuilder(UrlEndpoints.reccaRequerimientos)}/${codigo}`
      );
      expect(req.request.method).toEqual('DELETE');
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.reccaRequerimientos);
      expect(url).toEqual(
        `${service.apiUrl}${UrlEndpoints.reccaRequerimientos}`
      );
    });
  });
});
