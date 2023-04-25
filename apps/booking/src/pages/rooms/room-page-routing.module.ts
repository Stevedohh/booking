import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomPageComponent } from './room-page.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RoomPageComponent,
  },
  {
    path: ':id',
    component: RoomDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomPageRoutingModule {
}
