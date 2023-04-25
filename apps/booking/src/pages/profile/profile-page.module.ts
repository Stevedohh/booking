import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileBookingsComponent } from './profile-bookings/profile-bookings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileFormComponent,
    ProfileBookingsComponent,
  ],
  imports: [UiKitModule, SharedComponentsModule, ReactiveFormsModule],
})
export class ProfilePageModule {}
