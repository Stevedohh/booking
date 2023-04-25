import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Room } from './models';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private readonly http: HttpClient) {}

  getAll() {
    return this.http.get<Array<Room>>(`${environment.apiUrl}/room`)
  }

  getById(id: number | string) {
    return this.http.get<Room>(`${environment.apiUrl}/room/${id}`)
  }

  update(id: string | number, payload: Room) {
    return this.http.patch(`${environment.apiUrl}/room/${id}`, payload)
  }

  delete(id: string | number) {
    return this.http.delete(`${environment.apiUrl}/room/${id}`)
  }

  create(payload: Omit<Room, 'id'>) {
    return this.http.post(`${environment.apiUrl}/room`, payload)
  }
}
