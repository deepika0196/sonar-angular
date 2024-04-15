import { Injectable } from '@angular/core';
import { Language, MenuItem } from '../interfaces/header.interface';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  items: MenuItem[] = [
    {
      label: this.translocoService.translate(
        'menu_items.mantenimientos_basicos'
      ),
      items: [
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.entidades_solicitantes'
          ),
        },
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.campos_de_actuacion'
          ),
        },

        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.requerimientos_subsanacion'
          ),
        },
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.representantes_de_entidad'
          ),
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

  language: Language[] = [
    { label: ' Spanish', code: 'es' },
    { label: ' English', code: 'en' },
    { label: ' Valencian', code: 'ca' },
  ];
  constructor(private translocoService: TranslocoService) {}
}
