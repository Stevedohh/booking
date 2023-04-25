import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../features/auth/auth.service';
import { RegisterPayload } from '../../shared/api/auth/models';

@Component({
  selector: 'booking-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  registrationForm = new FormGroup({
    first_name: new FormControl<string | null>(null, [Validators.required]),
    second_name: new FormControl<string | null>(null, [Validators.required]),
    phone: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required])
  })

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    this.authService.registration(this.registrationForm.value as RegisterPayload)
  }
}
