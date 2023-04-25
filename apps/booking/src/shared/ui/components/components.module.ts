import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit.module';
import { RoomCardComponent } from './room-card/room-card.component';
import { NgForOf, NgStyle } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { TinyRoomCardComponent } from './tiny-room-card/tiny-room-card.component';

@NgModule({
  declarations: [
    RoomCardComponent,
    LayoutComponent,
    HeaderComponent,
    TinyRoomCardComponent,
  ],
  exports: [RoomCardComponent, LayoutComponent, TinyRoomCardComponent],
  imports: [UiKitModule, NgForOf, NgStyle],
})
export class SharedComponentsModule {}
