import { TestBed } from '@angular/core/testing';

import { CommonDialogService } from './common-dialog.service';
import { TranslocoRootModule } from '@app/transloco-root.module';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';

describe('CommonDialogService', () => {
  let service: CommonDialogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientTestingModule],
      providers: [CommonDialogService, DialogService],
    });
    service = TestBed.inject(CommonDialogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
