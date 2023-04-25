import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Booking, CreateBooking } from './models';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private readonly http: HttpClient) {}

  bookRoom(payload: CreateBooking) {
    return this.http.post<{ id: number } & CreateBooking>(`${environment.apiUrl}/booking`, payload)
  }

  getUserBookings() {
    return this.http.post<Booking[]>(`${environment.apiUrl}/booking/user`, {});
  }

  deleteBooking(bookingId: string | number) {
    return this.http.delete(`${environment.apiUrl}/booking/${bookingId}`, );
  }

  getAll() {
    return this.http.get<Booking[]>(`${environment.apiUrl}/booking/`, );
  }

  updateBooking(bookingId: string | number, payload: CreateBooking) {
    return this.http.patch(`${environment.apiUrl}/booking/${bookingId}`, payload);
  }
}
