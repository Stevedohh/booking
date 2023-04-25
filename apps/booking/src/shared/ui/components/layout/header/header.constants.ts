import { MenuItem } from 'primeng/api';

export const BASE_HEADER_ITEMS: MenuItem[] = [
  {
    label: 'Номери',
    icon: 'pi pi-fw pi-file',
    routerLink: '/rooms'
  },
  {
    label: 'Контакти',
    icon: 'pi pi-fw pi-map',
    routerLink: '/contacts'
  },
  {
    label: 'Забронювати',
    icon: 'pi pi-fw pi-users',
    routerLink: '/booking'
  },
]
