import { TestBed } from '@angular/core/testing';

import { OficinasService } from './oficinas.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('OficinasService', () => {
  let service: OficinasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OficinasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
