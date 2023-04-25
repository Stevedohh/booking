import { NgModule } from '@angular/core';

import { RoomPageComponent } from './room-page.component';
import { RoomPageRoutingModule } from './room-page-routing.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { UiKitModule } from '../../shared/ui';
import { SharedComponentsModule } from '../../shared/ui/components/components.module';

@NgModule({
  declarations: [RoomPageComponent, RoomDetailComponent],
  imports: [RoomPageRoutingModule, UiKitModule, SharedComponentsModule],
})
export class RoomPageModule {}
