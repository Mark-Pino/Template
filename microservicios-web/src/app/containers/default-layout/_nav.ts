import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Modulos',
    title: true
  },
  {
    name: 'Formularios',
    url: '/dashboard/setup',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Cliente',
        url: '/dashboard/setup/client'
      },
      {
        name: 'Producto',
        url: '/dashboard/setup/client'
      },
      {
        name: 'Carrito',
        url: '/dashboard/setup/client'
      },
      {
        name: 'Venta',
        url: '/dashboard/setup/client'
      }
    ]
  },
  {
    name: 'Evento',
    url: '/dashboard/event',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Evento',
        url: '/dashboard/event/event'
      },
    ]
  },
  {
    name: 'Asistencia',
    url: '/dashboard/attendance',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Asistencia',
        url: '/dashboard/attendance/attendance'
      }
    ]
  }
];
