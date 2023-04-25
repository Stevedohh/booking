import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomView } from '../../../shared/ui/types';
import { RoomViewService } from '../../../features/room/room-view.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'booking-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit, OnDestroy {
  backgroundColor = '#f6f6f6'
  room: RoomView = {} as RoomView

  activeRouteSubscription!: Subscription

  constructor(
    private readonly roomViewService: RoomViewService,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouteSubscription = this.activeRoute.params.subscribe(params => {
      const roomId = params['id']
      this.roomViewService.getRoom(roomId).subscribe(room =>  this.room = room);
    })

  }

  ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
  }

  onBookClick(id: string | number) {
    this.router.navigateByUrl(`/booking?roomId=${id}`)
  }
}
