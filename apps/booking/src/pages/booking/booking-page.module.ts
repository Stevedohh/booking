import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { BookingPageComponent } from './booking-page.component';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    UiKitModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class BookingPageModule {}
