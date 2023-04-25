import { Component, Input } from '@angular/core';
import { TinyRoomView } from '../../types';

@Component({
  selector: 'booking-tiny-room-card',
  templateUrl: './tiny-room-card.component.html',
  styleUrls: ['./tiny-room-card.component.scss'],
})
export class TinyRoomCardComponent {
  @Input() room!: TinyRoomView;

  @Input() roomClass: Record<string, boolean> | undefined;
}
