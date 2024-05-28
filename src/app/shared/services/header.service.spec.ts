import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header.service';
import { TranslocoService } from '@ngneat/transloco';

describe('HeaderService', () => {
  let service: HeaderService;
  let translocoServiceSpy: jasmine.SpyObj<TranslocoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TranslocoService', ['translate']);

    TestBed.configureTestingModule({
      providers: [HeaderService, { provide: TranslocoService, useValue: spy }],
    });

    service = TestBed.inject(HeaderService);
    translocoServiceSpy = TestBed.inject(
      TranslocoService
    ) as jasmine.SpyObj<TranslocoService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeaderMenu', () => {
    it('should return the correct menu structure', () => {
      // Arrange
      const translations: { [key: string]: any } = {
        'menu_items.mantenimientos_basicos': 'Basic Maintenance',
        'menu_items.sub_menu.entidades_solicitantes': 'Requesting Entities',
        'menu_items.sub_menu.campos_de_actuacion': 'Fields of Action',
        'menu_items.sub_menu.requerimientos_subsanacion':
          'Remediation Requirements',
        'menu_items.sub_menu.representantes_de_entidad':
          'Entity Representatives',
        'menu_items.expedientes': 'Files',
        'menu_items.sub_menu.solicitud_de_inscripcion': 'Registration Request',
        'menu_items.informes': 'Reports',
        'menu_items.sub_menu.generacion_de_informes': 'Report Generation',
      };

      translocoServiceSpy.translate.and.callFake((key: any) => {
        return translations[key];
      });

      // Act
      const menu = service.getHeaderMenu();

      // Assert
      expect(menu).toEqual([
        {
          label: 'Basic Maintenance',
          items: [
            {
              label: 'Requesting Entities',
              routerLink: ['/basic-maintenance/entidadesSolicitantes'],
              routerLinkActiveOptions: { exact: true },
            },
            {
              label: 'Fields of Action',
              routerLink: ['/basic-maintenance/campoDeActuacion'],
              routerLinkActiveOptions: { exact: true },
            },
            {
              label: 'Remediation Requirements',
              routerLink: ['/basic-maintenance/requerimientosSubsanacion'],
              routerLinkActiveOptions: { exact: true },
            },
            {
              label: 'Entity Representatives',
            },
          ],
        },
        {
          label: 'Files',
          items: [
            {
              label: 'Registration Request',
              routerLink: ['/files/solicitudDeInscripcionSearch'],
              routerLinkActiveOptions: { exact: true },
            },
          ],
        },
        {
          label: 'Reports',
          items: [
            {
              label: 'Report Generation',
            },
          ],
        },
      ]);

      // Verify that translate was called with the correct keys
      expect(translocoServiceSpy.translate.calls.count()).toBe(9);
      expect(translocoServiceSpy.translate.calls.allArgs()).toEqual([
        ['menu_items.mantenimientos_basicos'],
        ['menu_items.sub_menu.entidades_solicitantes'],
        ['menu_items.sub_menu.campos_de_actuacion'],
        ['menu_items.sub_menu.requerimientos_subsanacion'],
        ['menu_items.sub_menu.representantes_de_entidad'],
        ['menu_items.expedientes'],
        ['menu_items.sub_menu.solicitud_de_inscripcion'],
        ['menu_items.informes'],
        ['menu_items.sub_menu.generacion_de_informes'],
      ]);
    });
  });
});
