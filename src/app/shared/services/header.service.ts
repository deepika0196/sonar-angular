import { Injectable } from '@angular/core';
import { MenuIcon, MenuItem } from '../interfaces/header.interface';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  items: MenuItem[] = [
    {
      label: 'Mantenimientos básicos',
      items: [
        {
          label: 'Entidades Solicitantes',
        },
        {
          label: 'Campos de Actuación',
        },

        {
          label: 'Requerimientos Subsanación (OBSOLETO)',
        },
        {
          label: 'Representantes de Entidad',
        },
      ],
    },

    {
      label: 'Expedientes',
      items: [
        {
          label: 'Solicitud de Inscripción',
        },
      ],
    },
    {
      label: 'Informes',
      items: [
        {
          label: 'Requerimientos Subsanación (OBSOLETO)',
        },
      ],
    },
  ];

  menuIcons: MenuIcon[] = [
    {
      icon: 'pi pi-fw pi-home',
      url: '#',
    },
    {
      icon: 'pi pi-bell',
      url: '#',
    },
    {
      icon: 'pi pi-language',
      url: '#',
      items: [
        { icon: 'pi pi-language', label: ' Spanish', code: 'es' },
        { icon: 'pi pi-language', label: ' English', code: 'en' },
        { icon: 'pi pi-language', label: ' Valencian', code: 'ca' },
      ],
    },
    {
      icon: 'pi pi-sun',
      url: '#',
    },
    {
      icon: 'pi pi-sign-out',
      url: '#',
    },
  ];
}
