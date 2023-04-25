import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { LoginPageComponent } from './login-page.component';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    UiKitModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ]
})
export class LoginPageModule {}
