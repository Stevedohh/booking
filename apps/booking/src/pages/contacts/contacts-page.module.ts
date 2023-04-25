import { NgModule } from '@angular/core';
import { UiKitModule } from '../../shared/ui';
import { ContactsPageComponent } from './contacts-page.component';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [
    UiKitModule,
    SharedComponentsModule,
    FormsModule,
  ]
})
export class ContactsPageModule {}
