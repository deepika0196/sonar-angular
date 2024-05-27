import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericTableComponent, TableColumns } from './generic-table.component';
import { TranslocoService, TranslocoDirective } from '@ngneat/transloco';
import { HeaderService } from '@shared/services/header.service';
import { TranslocoHttpLoader } from '@app/transloco-root.module';
import { ChangeDetectorRef } from '@angular/core';
import {
  TableConfig,
  PaginatorConfig,
} from '@shared/components/generic-table/generic-table.config';
import { of } from 'rxjs';
import { SimpleChanges } from '@angular/core';

describe('GenericTableComponent', () => {
  let component: GenericTableComponent<any>;
  let fixture: ComponentFixture<GenericTableComponent<any>>;
  let translocoService: jasmine.SpyObj<TranslocoService>;
  let headerService: jasmine.SpyObj<HeaderService>;
  let translateHttpLoader: jasmine.SpyObj<TranslocoHttpLoader>;
  let cdr: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    const translocoServiceSpy = jasmine.createSpyObj('TranslocoService', [
      'translate',
    ]);
    const headerServiceSpy = jasmine.createSpyObj('HeaderService', ['']);
    const translateHttpLoaderSpy = jasmine.createSpyObj('TranslocoHttpLoader', [
      'getTranslation',
    ]);
    const cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    await TestBed.configureTestingModule({
      declarations: [GenericTableComponent],
      providers: [
        { provide: TranslocoService, useValue: translocoServiceSpy },
        { provide: HeaderService, useValue: headerServiceSpy },
        { provide: TranslocoHttpLoader, useValue: translateHttpLoaderSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy },
        TranslocoDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(
      TranslocoService
    ) as jasmine.SpyObj<TranslocoService>;
    headerService = TestBed.inject(
      HeaderService
    ) as jasmine.SpyObj<HeaderService>;
    translateHttpLoader = TestBed.inject(
      TranslocoHttpLoader
    ) as jasmine.SpyObj<TranslocoHttpLoader>;
    cdr = TestBed.inject(
      ChangeDetectorRef
    ) as jasmine.SpyObj<ChangeDetectorRef>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update table config on changes', () => {
    const changes: SimpleChanges = {
      tableConfig: {
        currentValue: {
          rows: 20,
          styleClass: 'new-class',
          paginator: true,
          sortable: false,
          tableStyle: { 'min-width': '80rem' },
        } as TableConfig,
        previousValue: component.tableConfig,
        firstChange: true,
        isFirstChange: () => true,
      },
    };

    component.ngOnChanges(changes);

    expect(component.tableConfig).toEqual(changes['tableConfig'].currentValue);
  });

  it('should emit delete event', () => {
    spyOn(component.openDelete, 'emit');
    const item = { id: 1 };

    component.onDelete(item);

    expect(component.openDelete.emit).toHaveBeenCalledWith(item);
  });

  it('should emit edit event', () => {
    spyOn(component.openEdit, 'emit');
    const item = { id: 1 };

    component.onEdit(item);

    expect(component.openEdit.emit).toHaveBeenCalledWith(item);
  });

  it('should emit view event', () => {
    spyOn(component.openView, 'emit');
    const item = { id: 1 };

    component.onView(item);

    expect(component.openView.emit).toHaveBeenCalledWith(item);
  });

  it('should emit restore event', () => {
    spyOn(component.openRestore, 'emit');
    const item = { id: 1 };

    component.onRestore(item);

    expect(component.openRestore.emit).toHaveBeenCalledWith(item);
  });

  it('should emit archive event', () => {
    spyOn(component.openArchive, 'emit');
    const item = { id: 1 };

    component.onArchive(item);

    expect(component.openArchive.emit).toHaveBeenCalledWith(item);
  });

  it('should unsubscribe from all subscriptions on destroy', () => {
    spyOn(component['subscription'], 'next');
    spyOn(component['subscription'], 'complete');

    component.ngOnDestroy();

    expect(component['subscription'].next).toHaveBeenCalled();
    expect(component['subscription'].complete).toHaveBeenCalled();
  });
});
