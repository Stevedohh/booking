import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public user: UserService, public router: Router) {}
  canActivate(_:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    let isAuthenticated = false;

    this.user.isLoggedIn$().subscribe(value => isAuthenticated = value)

    console.log(state)

    if (!isAuthenticated) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
