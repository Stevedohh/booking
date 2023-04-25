import { Component, OnInit } from '@angular/core';
import { BookingViewService } from '../../../features/booking/booking-view.service';
import { BookingView } from '../../../features/booking/models';
import { MessageService } from 'primeng/api';
import { BookingService } from '../../../shared/api/booking/booking.service';

@Component({
  selector: 'booking-profile-bookings',
  templateUrl: './profile-bookings.component.html',
  styleUrls: ['./profile-bookings.component.scss'],
})
export class ProfileBookingsComponent implements OnInit {
  bookings: BookingView[] = [];

  constructor(
    private readonly bookingApiService: BookingService,
    private readonly bookingService: BookingViewService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.bookingService.getUserBookingsTable().subscribe((bookings) => {
      this.bookings = bookings;
    })
  }

  deleteBooking(roomId: number) {
    this.bookingApiService.deleteBooking(roomId).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Ваше бронювання видалено'
      })
      this.bookingService.getUserBookingsTable().subscribe((bookings) => {
        this.bookings = bookings;
      })
    });
  }
}
