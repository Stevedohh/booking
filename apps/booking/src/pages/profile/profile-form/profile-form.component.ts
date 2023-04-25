import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../features/auth/auth.service';
import { RegisterPayload } from '../../../shared/api/auth/models';
import { UserService } from '../../../features/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'booking-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnDestroy {
  meSubscription: Subscription

  updateUserForm = new FormGroup({
    first_name: new FormControl<string | null>(null, [Validators.required]),
    second_name: new FormControl<string | null>(null, [Validators.required]),
    phone: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required])
  })

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    this.meSubscription = userService.me$.subscribe((user) => {
      if (user) {
        this.updateUserForm.controls.first_name.setValue(user.firstName)
        this.updateUserForm.controls.second_name.setValue(user.secondName)
        this.updateUserForm.controls.email.setValue(user.email)
        this.updateUserForm.controls.phone.setValue(user.phone)
      }
    })
  }

  onSubmit() {
    this.authService.update(this.updateUserForm.value as RegisterPayload)
  }

  ngOnDestroy(): void {
    this.meSubscription.unsubscribe();
  }
}
