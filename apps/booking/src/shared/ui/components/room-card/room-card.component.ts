import { Component, Input } from '@angular/core';
import { RoomView } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'booking-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent {
  @Input() room!: RoomView

  constructor(private readonly router: Router) {}

  onBookClick(id: string | number) {
    this.router.navigateByUrl(`/booking?roomId=${id}`)
  }
}
