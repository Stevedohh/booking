import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../features/auth/auth.service';
import { LoginPayload } from '../../shared/api/auth/models';

@Component({
  selector: 'booking-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  })

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.loginForm.value as LoginPayload)
  }
}
