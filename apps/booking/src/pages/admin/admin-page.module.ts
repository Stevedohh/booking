import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page.component';
import { AdminRoomsComponent } from './admin-rooms/admin-rooms.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminRoomsComponent,
    AdminBookingsComponent,
    CreateRoomFormComponent,
  ],
  imports: [UiKitModule, SharedComponentsModule, ReactiveFormsModule],
})
export class AdminPageModule {}
