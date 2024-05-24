import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequerimientosSubsanacionComponent } from './requerimientos-subsanacion.component';
import { RequerimientosSubsanacionService } from '@app/basic-maintenance/services/requerimientos-subsanacion.service';
import { of, throwError } from 'rxjs';
import { RequerimientosSubsanacion } from '@app/basic-maintenance/interfaces/requerimientos-subsanacion';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RequerimientosSubsanacionComponent', () => {
  let component: RequerimientosSubsanacionComponent;
  let fixture: ComponentFixture<RequerimientosSubsanacionComponent>;
  let requerimientosSubsanacionService: jasmine.SpyObj<RequerimientosSubsanacionService>;

  beforeEach(async () => {
    const requerimientosSubsanacionServiceSpy = jasmine.createSpyObj(
      'RequerimientosSubsanacionService',
      ['getRequerimientosSubsanacions']
    );

    await TestBed.configureTestingModule({
      declarations: [RequerimientosSubsanacionComponent],
      providers: [
        {
          provide: RequerimientosSubsanacionService,
          useValue: requerimientosSubsanacionServiceSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    requerimientosSubsanacionService = TestBed.inject(
      RequerimientosSubsanacionService
    ) as jasmine.SpyObj<RequerimientosSubsanacionService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimientosSubsanacionComponent);
    component = fixture.componentInstance;
    const mockData: RequerimientosSubsanacion[] = [
      { codigo: '1', derequerimiento: 'Desc', derequerimientoVal: 'Desc Val' },
    ];
    requerimientosSubsanacionService.getRequerimientosSubsanacions.and.returnValue(
      of({ response: mockData, success: true })
    );
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all requerimientos subsanacion on init', () => {
    const mockData: RequerimientosSubsanacion[] = [
      { codigo: '1', derequerimiento: 'Desc', derequerimientoVal: 'Desc Val' },
    ];
    requerimientosSubsanacionService.getRequerimientosSubsanacions.and.returnValue(
      of({ response: mockData, success: true })
    );

    component.ngOnInit();

    expect(
      requerimientosSubsanacionService.getRequerimientosSubsanacions
    ).toHaveBeenCalled();
    expect(component.requerimientosSubsanacions).toEqual(mockData);
    expect(component.cloneRequerimientosSubsanacionRecords).toEqual(mockData);
  });

  // it('should handle error while fetching requerimientos subsanacion', () => {
  //   requerimientosSubsanacionService.getRequerimientosSubsanacions.and.returnValue(
  //     throwError(() => new Error('Error fetching data'))
  //   );

  //   component.ngOnInit();

  //   expect(
  //     requerimientosSubsanacionService.getRequerimientosSubsanacions
  //   ).toHaveBeenCalled();
  //   expect(component.requerimientosSubsanacions).toBeUndefined();
  //   expect(component.cloneRequerimientosSubsanacionRecords).toBeUndefined();
  // });

  it('should clear all filters', () => {
    component.codigo = '1';
    component.derequerimiento = 'Desc';
    component.derequerimientoVal = 'Desc Val';
    component.cloneRequerimientosSubsanacionRecords = [
      { codigo: '1', derequerimiento: 'Desc', derequerimientoVal: 'Desc Val' },
    ];

    component.clearAll();

    expect(component.codigo).toBe('');
    expect(component.derequerimiento).toBe('');
    expect(component.derequerimientoVal).toBe('');
    expect(component.requerimientosSubsanacions).toEqual(
      component.cloneRequerimientosSubsanacionRecords
    );
  });

  it('should filter records based on input values', () => {
    component.cloneRequerimientosSubsanacionRecords = [
      { codigo: '1', derequerimiento: 'Desc1', derequerimientoVal: 'DescVal1' },
      { codigo: '2', derequerimiento: 'Desc2', derequerimientoVal: 'DescVal2' },
    ];

    component.codigo = '1';
    component.derequerimiento = 'Desc1';
    component.derequerimientoVal = 'DescVal1';

    component.filterHandler();

    expect(component.requerimientosSubsanacions.length).toBe(1);
    expect(component.requerimientosSubsanacions[0].codigo).toBe('1');
  });

  it('should handle no filters applied', () => {
    component.cloneRequerimientosSubsanacionRecords = [
      { codigo: '1', derequerimiento: 'Desc1', derequerimientoVal: 'DescVal1' },
      { codigo: '2', derequerimiento: 'Desc2', derequerimientoVal: 'DescVal2' },
    ];

    component.codigo = '';
    component.derequerimiento = '';
    component.derequerimientoVal = '';

    component.filterHandler();

    expect(component.requerimientosSubsanacions.length).toBe(2);
  });

  afterEach(() => {
    component.ngOnDestroy();
    expect(component.requerimientosSubsanacions).toEqual([]);
    expect(component.cloneRequerimientosSubsanacionRecords).toEqual([]);
  });
});
