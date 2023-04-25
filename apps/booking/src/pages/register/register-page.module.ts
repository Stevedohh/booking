import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { RegisterPageComponent } from './register-page.component';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    UiKitModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterPageModule {}
