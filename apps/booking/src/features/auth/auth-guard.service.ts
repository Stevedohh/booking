import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public user: UserService, public router: Router) {}
  canActivate(route:ActivatedRouteSnapshot): boolean {
    const routeRole = route.data['role'];
    let isAuthenticated = false;
    let userRole = null;

    this.user.me$.subscribe((user) => {
      isAuthenticated = !!user;
      userRole = user?.role?.value;
    })

    if (!isAuthenticated) {
      this.router.navigateByUrl('/');
      return false;
    }

    if (routeRole && routeRole !== userRole) {
      this.router.navigateByUrl('/');
      return false
    }

    return true;
  }
}
