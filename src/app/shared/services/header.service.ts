import { Injectable } from '@angular/core';
import { Language } from '../interfaces/header.interface';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  language: Language[] = [
    { label: 'Valenciano', code: 'ca' },
    { label: 'Castellano', code: 'es' },
    { label: 'English', code: 'en' },
  ];
  constructor(private translocoService: TranslocoService) {}

  getHeaderMenu() {
    return [
      {
        label: this.translocoService.translate(
          'menu_items.mantenimientos_basicos'
        ),
        items: [
          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.entidades_solicitantes'
            ),
            routerLink: ['/basic-maintenance/entidadesSolicitantes'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.representantes_de_entidad'
            ),
          },
          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.campos_de_actuacion'
            ),
            routerLink: ['/basic-maintenance/campoDeActuacion'],
            routerLinkActiveOptions: { exact: true },
          },

          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.requerimientos_subsanacion'
            ),
            routerLink: ['/basic-maintenance/requerimientosSubsanacion'],
            routerLinkActiveOptions: { exact: true },
          },
        ],
      },

      {
        label: this.translocoService.translate('menu_items.expedientes'),
        items: [
          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.solicitud_de_inscripcion'
            ),
            routerLink: ['/files/solicitudDeInscripcionSearch'],
            routerLinkActiveOptions: { exact: true },
          },
        ],
      },
      {
        label: this.translocoService.translate('menu_items.informes'),
        items: [
          {
            label: this.translocoService.translate(
              'menu_items.sub_menu.generacion_de_informes'
            ),
          },
        ],
      },
    ];
  }
}
