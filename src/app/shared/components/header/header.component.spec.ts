import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderService } from '@shared/services/header.service';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoHttpLoader } from '@app/transloco-root.module';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerService: jasmine.SpyObj<HeaderService>;
  let translocoService: jasmine.SpyObj<TranslocoService>;
  let translateHttpLoader: jasmine.SpyObj<TranslocoHttpLoader>;

  beforeEach(async () => {
    const headerServiceSpy = jasmine.createSpyObj('HeaderService', [
      'getHeaderMenu',
    ]);
    const translocoServiceSpy = jasmine.createSpyObj('TranslocoService', [
      'getDefaultLang',
      'setActiveLang',
    ]);
    const translateHttpLoaderSpy = jasmine.createSpyObj('TranslocoHttpLoader', [
      'getTranslation',
    ]);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: HeaderService, useValue: headerServiceSpy },
        { provide: TranslocoService, useValue: translocoServiceSpy },
        { provide: TranslocoHttpLoader, useValue: translateHttpLoaderSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerService = TestBed.inject(
      HeaderService
    ) as jasmine.SpyObj<HeaderService>;
    translocoService = TestBed.inject(
      TranslocoService
    ) as jasmine.SpyObj<TranslocoService>;
    translateHttpLoader = TestBed.inject(
      TranslocoHttpLoader
    ) as jasmine.SpyObj<TranslocoHttpLoader>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    const mockLanguages = [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Spanish' },
    ];
    headerService.language = mockLanguages;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header menu and languages on init', () => {
    const mockMenuItems = [{ label: 'Home', routerLink: '/', items: [] }];
    const mockLanguages = [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Spanish' },
    ];
    headerService.getHeaderMenu.and.returnValue(mockMenuItems);
    headerService.language = mockLanguages;
    translocoService.getDefaultLang.and.returnValue('en');

    component.ngOnInit();

    expect(component.items).toEqual(mockMenuItems);
    expect(component.languages).toEqual(mockLanguages);
    expect(component.selectedLanguage).toEqual(mockLanguages[0]);
  });

  it('should change language and update menu items', () => {
    const mockLanguages = [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Spanish' },
    ];
    const mockMenuItems = [{ label: 'Home', routerLink: '/', items: [] }];
    component.languages = mockLanguages;
    component.selectedLanguage = mockLanguages[1];
    translocoService.setActiveLang.and.callThrough();
    translateHttpLoader.getTranslation.and.returnValue(of({}));
    headerService.getHeaderMenu.and.returnValue(mockMenuItems);

    component.changeLanguage();

    expect(translocoService.setActiveLang).toHaveBeenCalledWith('es');
    expect(translateHttpLoader.getTranslation).toHaveBeenCalledWith('es');
    expect(component.items).toEqual(mockMenuItems);
  });

  it('should unsubscribe from all subscriptions on destroy', () => {
    spyOn(component['subscription'], 'next');
    spyOn(component['subscription'], 'complete');

    component.ngOnDestroy();

    expect(component['subscription'].next).toHaveBeenCalled();
    expect(component['subscription'].complete).toHaveBeenCalled();
  });
});
