import { Component, OnDestroy, OnInit } from '@angular/core';
import { Room } from '../../../shared/api/room/models';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateRoomFormComponent } from '../create-room-form/create-room-form.component';
import { AdminRoomsService } from './rooms.service';

@Component({
  selector: 'booking-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss'],
})
export class AdminRoomsComponent implements OnInit, OnDestroy {
  rooms: Room[] = [];
  dialogRef: DynamicDialogRef | undefined;

  constructor(
    public readonly roomsService: AdminRoomsService,
    private readonly messageService: MessageService,
    private readonly dialogService: DialogService,
  ) {}

  deleteRoom(id: number) {
    this.roomsService.delete(id)
  }

  showCreateRoomModal(data: any) {
    this.dialogRef = this.dialogService.open(CreateRoomFormComponent, {
      header: 'Створити нову кімнату',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data
    });
  }

  ngOnInit(): void {
    this.roomsService.fetchRooms();
  }

  ngOnDestroy() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
