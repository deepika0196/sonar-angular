import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampoDeActuacionComponent } from './campo-de-actuacion.component';
import { CampoDeActuacionService } from '@app/basic-maintenance/services/campo-de-actuacion.service';
import { MessageService } from 'primeng/api';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslocoService } from '@ngneat/transloco';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';

describe('CampoDeActuacionComponent', () => {
  let component: CampoDeActuacionComponent;
  let fixture: ComponentFixture<CampoDeActuacionComponent>;
  let mockCampoDeActuacionService: jasmine.SpyObj<CampoDeActuacionService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockDialogService: jasmine.SpyObj<DialogService>;
  let mockTranslocoService: jasmine.SpyObj<TranslocoService>;

  beforeEach(async () => {
    mockCampoDeActuacionService = jasmine.createSpyObj(
      'CampoDeActuacionService',
      [
        'getCampoDeActuacions',
        'postCampoDeActuacions',
        'updateCampoDeActuacions',
        'deleteCampoDeActuacions',
      ]
    );
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    mockDialogService = jasmine.createSpyObj('DialogService', ['open']);
    mockTranslocoService = jasmine.createSpyObj('TranslocoService', [
      'translate',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CampoDeActuacionComponent],
      providers: [
        {
          provide: CampoDeActuacionService,
          useValue: mockCampoDeActuacionService,
        },
        { provide: MessageService, useValue: mockMessageService },
        { provide: DialogService, useValue: mockDialogService },
        { provide: TranslocoService, useValue: mockTranslocoService },
        DynamicDialogRef,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoDeActuacionComponent);
    component = fixture.componentInstance;

    const campoDetails = [
      {
        codigo: '001',
        deseccion: 'Test 1',
        deseccionVal: 'Test Val 1',
      },
    ];
    mockCampoDeActuacionService.getCampoDeActuacions.and.returnValue(
      of({ response: campoDetails, success: true })
    );
    mockTranslocoService.translate.and.callFake((key: any) => key);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all campos de actuacion on init', () => {
    expect(mockCampoDeActuacionService.getCampoDeActuacions).toHaveBeenCalled();
  });

  it('should clear all fields and restore the table to initial state', () => {
    component.codigo = 'testCodigo';
    component.deseccion = 'testDeseccion';
    component.deseccionVal = 'testDeseccionVal';

    component.clearAll();

    expect(component.codigo).toBe('');
    expect(component.deseccion).toBe('');
    expect(component.deseccionVal).toBe('');
    expect(component.campoDeActuacions).toEqual(
      component.cloneCampoDeActuacionRecords
    );
  });

  it('should filter records correctly', () => {
    component.cloneCampoDeActuacionRecords = [
      { codigo: '001', deseccion: 'Test 1', deseccionVal: 'Test Val 1' },
      { codigo: '002', deseccion: 'Test 2', deseccionVal: 'Test Val 2' },
    ];
    component.codigo = '001';
    component.deseccion = '';
    component.deseccionVal = '';

    component.filterHandler();

    expect(component.campoDeActuacions.length).toBe(1);
    expect(component.campoDeActuacions[0].codigo).toBe('001');
  });

  it('should open add dialog', () => {
    component.openAddDialog();

    expect(component.addDialogRef).toBeDefined();
  });

  it('should open update dialog', () => {
    const campoDetails = {
      codigo: '001',
      deseccion: 'Test 1',
      deseccionVal: 'Test Val 1',
    };
    component.openUpdateDialog(campoDetails);

    expect(component.updateDialogRef).toBeDefined();
  });

  it('should open delete dialog', () => {
    const campoDetails = {
      codigo: '001',
      deseccion: 'Test 1',
      deseccionVal: 'Test Val 1',
    };
    component.onDeleteHandler(campoDetails);

    expect(component.deleteDialogRef).toBeDefined();
  });

  it('should open alert dialog', () => {
    const alertMessage = 'This is an alert';
    component.openAlertDialog(alertMessage, 'alert');

    expect(component.alertDialogRef).toBeDefined();
  });

  afterEach(() => {
    component.ngOnDestroy();
    expect(component.campoDeActuacions).toEqual([]);
    expect(component.cloneCampoDeActuacionRecords).toEqual([]);
  });
});
