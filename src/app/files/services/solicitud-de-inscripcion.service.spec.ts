import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SolicitudDeInscripcionService } from './solicitud-de-inscripcion.service';
import { CustomResponse } from '@app/shared/services/common.service';
import { UrlEndpoints } from '@app/core/contsants/urlEndpoint';
import {
  Entidad,
  EntidadFilter,
} from '@app/files/interfaces/solicitud-de-inscripcion';

describe('SolicitudDeInscripcionService', () => {
  let service: SolicitudDeInscripcionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudDeInscripcionService],
    });

    service = TestBed.inject(SolicitudDeInscripcionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('createSolicitudDeInscripcion', () => {
    it('should call post with the correct URL and payload', () => {
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service
        .createSolicitudDeInscripcion(entidadDetails)
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'POST' &&
          req.url === service.urlBuilder(UrlEndpoints.reccaEntidades)
      );

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(entidadDetails);
      req.flush(mockResponse);
    });
  });

  describe('updateSolicitudDeInscripcion', () => {
    it('should call put with the correct URL and payload', () => {
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service
        .updateSolicitudDeInscripcion(entidadDetails)
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'PUT' &&
          req.url === service.urlBuilder(UrlEndpoints.reccaEntidades)
      );

      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(entidadDetails);
      req.flush(mockResponse);
    });
  });

  describe('getByNifCif', () => {
    it('should call get with the correct URL and parameter', () => {
      const cif = '12345678A';
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service.getByNifCif(cif).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'GET' &&
          req.url ===
            service.urlBuilder(UrlEndpoints.reccaEntidades) +
              `/findByNifcif/${cif}`
      );

      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('getSolicitudDeInscripcions', () => {
    it('should call get with the correct URL', () => {
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service.getSolicitudDeInscripcions().subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'GET' &&
          req.url === service.urlBuilder(UrlEndpoints.reccaEntidades)
      );

      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  describe('archiveSolicitudDeInscripcion', () => {
    it('should call delete with the correct URL', () => {
      const id = 1;
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service.archiveSolicitudDeInscripcion(id).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'DELETE' &&
          req.url ===
            service.urlBuilder(UrlEndpoints.reccaEntidades) + `/archive/${id}`
      );

      expect(req.request.method).toEqual('DELETE');
      req.flush(mockResponse);
    });
  });

  describe('restoreSolicitudDeInscripcion', () => {
    it('should call delete with the correct URL', () => {
      const id = 1;
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service.restoreSolicitudDeInscripcion(id).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'DELETE' &&
          req.url ===
            service.urlBuilder(UrlEndpoints.reccaEntidades) + `/restore/${id}`
      );

      expect(req.request.method).toEqual('DELETE');
      req.flush(mockResponse);
    });
  });

  describe('filterSolicitudDeInscripcions', () => {
    it('should call post with the correct URL and payload', () => {
      const entidadFilter: EntidadFilter = {
        codmun: '',
        codpro: '',
        cp: '',
        denomsocial: '',
        fbaja: '',
        feentrada: '',
        nifcif: '',
        numinscripcion: '',
        representantesNifcif: '',
      };
      const entidadDetails: Entidad = {
        id: 99,
        codidfiscal: '',
        codmun: '001',
        codpro: '01',
        cp: '01240',
        denomsocial: 'TESTING123123',
        dirCodmun: '001',
        dirCodpro: '01',
        dirCp: '01240',
        dirDomicilio: 'TEST123456',
        dirEmail: 'meenakshi@gmail.com',
        dirFax: '',
        dirTelefono: '79946565',
        domsocial: 'TEST123456',
        email: 'meenakshi@gmail.com',
        fax: 'test123',
        fbaja: null,
        feentrada: '1715040000000',
        nifcif: '81278922G',
        numinscripcion: '1233/ECMCA',
        observaciones: 'testing',
        publicaWeb: 'Y',
        telefono: '79946565',
        web: '',
        representantesDTO: {
          id: 125,
          apellidos: 'test123',
          codmun: '004',
          codpro: '02',
          cp: '02653',
          domicilio: 'testing ',
          email: 'meen@gamil.com',
          entidadId: 99,
          fax: '1323446',
          nifcif: '16600050F',
          nombre: 'Testing',
          telefono: 'test',
        },
      };

      const mockResponse: CustomResponse<Entidad> = {
        response: [entidadDetails],
        success: true,
      };

      service
        .filterSolicitudDeInscripcions(entidadFilter)
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        (req) =>
          req.method === 'POST' &&
          req.url ===
            service.urlBuilder(UrlEndpoints.reccaEntidades) + `/searchAdv`
      );

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(entidadFilter);
      req.flush(mockResponse);
    });
  });

  describe('urlBuilder', () => {
    it('should build the correct URL', () => {
      const url = service.urlBuilder(UrlEndpoints.reccaEntidades);
      expect(url).toEqual(`${service.apiUrl}${UrlEndpoints.reccaEntidades}`);
    });
  });
});
