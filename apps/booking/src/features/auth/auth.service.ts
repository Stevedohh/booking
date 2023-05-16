import { Injectable } from '@angular/core';
import { AuthApiService } from '../../shared/api/auth/auth-api.service';
import { LoginPayload, RegisterPayload } from '../../shared/api/auth/models';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly authApiService: AuthApiService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {}

  private setSession(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.userService.removeUser();
    this.router.navigateByUrl('/');
  }

  login(payload: LoginPayload) {
    return this.authApiService.login(payload)
      .pipe(
        catchError((err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Помилка',
            detail: 'Невірне ім\'я, або пароль'
          })

          throw new Error(err);
        })
      ).subscribe((jwt) => {
        this.setSession(jwt.token);
        this.userService.setUser();
        this.router.navigateByUrl('/');
      })
  }

  registration(payload: RegisterPayload) {
    return this.authApiService.register(payload).subscribe((jwt) => {
      this.setSession(jwt.token);
      this.userService.setUser();
      this.router.navigateByUrl('/');
    })
  }

  update(payload: RegisterPayload) {
    return this.authApiService.update(payload).subscribe((jwt) => {
      this.setSession(jwt.token);
      this.userService.setUser();
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Профіль оновлено!'
      })
    })
  }
}
