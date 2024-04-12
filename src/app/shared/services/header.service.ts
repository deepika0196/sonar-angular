import { Injectable } from '@angular/core';
import { Language, MenuItem } from '../interfaces/header.interface';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  items: MenuItem[] = [
    {
      label: this.translocoService.translate(
        'menu_items.Mantenimientos básicos'
      ),
      items: [
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Entidades Solicitantes'
          ),
        },
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Campos de Actuación'
          ),
        },

        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Requerimientos Subsanación'
          ),
        },
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Representantes de Entidad'
          ),
        },
      ],
    },

    {
      label: this.translocoService.translate('menu_items.Expedientes'),
      items: [
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Solicitud de Inscripción'
          ),
        },
      ],
    },
    {
      label: this.translocoService.translate('menu_items.Informes'),
      items: [
        {
          label: this.translocoService.translate(
            'menu_items.sub_menu.Generación de Informes'
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
