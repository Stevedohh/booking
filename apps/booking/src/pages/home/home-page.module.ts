import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { UiKitModule } from '../../shared/ui';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    UiKitModule,
    FormsModule,
    JsonPipe,
    SharedComponentsModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule {}
