import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../../../../features/user/user.service';
import { AuthService } from '../../../../../features/auth/auth.service';
import { BASE_HEADER_ITEMS } from './header.constants';
import { ROLES } from '../../../../../features/user/models';

@Component({
  selector: 'booking-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerItems!: MenuItem[];

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userService.me$.subscribe((user) => {
      const isLoggedIn = !!user;

      if (isLoggedIn) {
        this.headerItems = BASE_HEADER_ITEMS.concat(
          [{
            label: 'Профіль',
            icon: 'pi pi-fw pi-user',
            routerLink: '/profile',
            style: { 'margin-left': 'auto' }
          },
          user?.role.value === ROLES.ADMIN && {
            label: 'Адмінка',
            icon: 'pi pi-fw pi-star',
            routerLink: '/admin'
          },
          {
            label: 'Вихід',
            icon: 'pi pi-fw pi-sign-out',
            command: () => {
              this.authService.logout();
            }
          }] as any[])
      } else {
        this.headerItems = BASE_HEADER_ITEMS.concat({
          label: 'Вхід',
          icon: 'pi pi-fw pi-sign-in',
          routerLink: '/login',
          style: { 'margin-left': 'auto' }
        },
        {
          label: 'Реєстрація',
          icon: 'pi pi-fw pi-user',
          routerLink: '/register'
        },)
      }
    })
  }
}
