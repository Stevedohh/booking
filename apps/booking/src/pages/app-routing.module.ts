import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home';
import { ContactsPageComponent } from './contacts';
import { LoginPageComponent } from './login';
import { RegisterPageComponent } from './register';
import { BookingPageComponent } from './booking';
import { ProfilePageComponent } from './profile';
import { AuthGuard } from '../features/auth/auth-guard.service';
import { AdminPageComponent } from './admin';
import { ROLES } from '../features/user/models';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/room-page.module').then(m => m.RoomPageModule)
  },
  {
    path: 'contacts',
    component: ContactsPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'booking',
    component: BookingPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    data: {
      role: ROLES.ADMIN
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
