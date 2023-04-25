import { Injectable } from '@angular/core';
import { BookingService } from '../../shared/api/booking/booking.service';
import { map, Observable } from 'rxjs';
import { BookingView } from './models';

@Injectable({
  providedIn: 'root'
})
export class BookingViewService {
  constructor(
    private readonly bookingApiService: BookingService,
  ) {
  }

  getUserBookingsTable(): Observable<BookingView[]> {
    return this.bookingApiService.getUserBookings().pipe(map(bookings => bookings.map((booking) => ({
      id: booking.id,
      startDate: new Date(booking.start_date).toLocaleDateString(),
      endDate: new Date(booking.end_date).toLocaleDateString(),
      roomName: booking.room.title,
      roomPrice: booking.room.price,
      roomPeoples: booking.room.people_count,
      roomId: booking.room.id,
      roomImage: booking.room.image_url
    }) as unknown as BookingView)))
  }


  getAllBookingsTable(): Observable<BookingView[]> {
    return this.bookingApiService.getAll().pipe(map(bookings => bookings.map((booking) => ({
      id: booking.id,
      firstName: booking?.user?.first_name,
      secondName: booking?.user?.second_name,
      email: booking?.user?.email,
      startDate: new Date(booking.start_date).toLocaleDateString(),
      endDate: new Date(booking.end_date).toLocaleDateString(),
      roomName: booking.room.title,
      roomPrice: booking.room.price,
      roomPeoples: booking.room.people_count,
      roomId: booking.room.id,
      roomImage: booking.room.image_url
    }) as unknown as BookingView)))
  }
}
