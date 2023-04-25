import { Component, OnInit } from '@angular/core';
import { RoomView } from '../../shared/ui/types';
import { Observable, of } from 'rxjs';
import { RoomViewService } from '../../features/room/room-view.service';

@Component({
  selector: 'booking-room',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss'],
})
export class RoomPageComponent implements OnInit {
  rooms$: Observable<Array<RoomView>> = of([])

  constructor(private readonly roomsViewService: RoomViewService) {
  }

  ngOnInit() {
    this.rooms$ = this.roomsViewService.getAllRooms();
  }
}
