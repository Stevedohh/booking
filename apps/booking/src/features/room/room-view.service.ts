import { Injectable } from '@angular/core';
import { RoomService } from '../../shared/api/room/room.service';
import { map, Observable } from 'rxjs';
import { RoomBenefits, RoomView, TinyRoomView } from '../../shared/ui/types';
import { Room } from '../../shared/api/room/models';

@Injectable({
  providedIn: 'root',
})
export class RoomViewService {
  constructor(private readonly roomService: RoomService) {}

  private getRoomBenefits(room: Room): Array<RoomBenefits> {
    return [
      {
        key: 'price',
        value: room.price,
        name: 'Ціна'
      },
      {
        key: 'bedType',
        value: room.bed_type,
        name: 'Тип ліжка'
      },
      {
        key: 'peopleCount',
        value: room.people_count,
        name: 'Кількість людей'
      }
    ]
  }

  getAllTinyRooms(): Observable<Array<TinyRoomView>> {
    return this.roomService.getAll().pipe(map(rooms => rooms.map(room => ({
      id: room.id,
      title: room.title,
      imageUrl: room.image_url,
      benefits: this.getRoomBenefits(room)
    }))))
  }

  getAllRooms(): Observable<Array<RoomView>> {
    return this.roomService.getAll().pipe(map(rooms => rooms.map((room) => ({
      id: room.id,
      title: room.title,
      imageUrl: room.image_url,
      benefits: this.getRoomBenefits(room),
      description: room.description,
      longDescription: room.long_description,
      subtitle: room.subtitle,
    }))))
  }

  getRoom(id: number | string): Observable<RoomView> {
    return this.roomService.getById(id).pipe(map(room => ({
      id: room.id,
      title: room.title,
      imageUrl: room.image_url,
      benefits: this.getRoomBenefits(room),
      description: room.description,
      longDescription: room.long_description,
      subtitle: room.subtitle,
    })))
  }
}
