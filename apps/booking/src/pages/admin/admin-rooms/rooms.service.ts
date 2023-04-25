import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Room } from '../../../shared/api/room/models';
import { RoomService } from '../../../shared/api/room/room.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AdminRoomsService {
  rooms$: Observable<Room[]> = of([]);

  constructor(
    private readonly roomService: RoomService,
    public messageService: MessageService,
  ) {}

  fetchRooms() {
    this.rooms$ = this.roomService.getAll();
  }

  getById(id: number) {
    return this.roomService.getById(id);
  }

  delete(id: number) {
    this.roomService.delete(id).pipe(catchError((e: any) => {
      if(e) {
        this.messageService.add({
          severity: 'error',
          summary: 'Помилка',
          detail: 'На цю кімнату є бронь'
        })
      }

      throw Error(e)
    })).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Кімната видалена'
      })
      this.fetchRooms();
    });
  }

  update(id: number, payload: Room) {
    this.roomService.update(id, payload).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Кімната оновлена'
      })
      this.fetchRooms();
    });
  }

  create(payload: Room) {
    this.roomService.create(payload).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Кімната створена'
      })
      this.fetchRooms();
    });
  }
}
