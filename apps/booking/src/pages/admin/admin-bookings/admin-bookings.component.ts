import { Component, OnInit } from '@angular/core';
import { BookingView } from '../../../features/booking/models';
import { BookingService } from '../../../shared/api/booking/booking.service';
import { BookingViewService } from '../../../features/booking/booking-view.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'booking-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss'],
})
export class AdminBookingsComponent implements OnInit {
  bookings: BookingView[] = [];

  constructor(
    private readonly bookingApiService: BookingService,
    private readonly bookingService: BookingViewService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.bookingService.getAllBookingsTable().subscribe((bookings) => {
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
      this.bookingService.getAllBookingsTable().subscribe((bookings) => {
        this.bookings = bookings;
      })
    });
  }
}
