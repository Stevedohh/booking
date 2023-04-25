import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from '../../../shared/api/room/room.service';
import { Room } from '../../../shared/api/room/models';
import { MessageService } from 'primeng/api';
import { AdminRoomsService } from '../admin-rooms/rooms.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

interface DropdownValue {
  value: string | number;
}

@Component({
  selector: 'booking-create-room-form',
  templateUrl: './create-room-form.component.html',
  styleUrls: ['./create-room-form.component.scss'],
})
export class CreateRoomFormComponent {
  bedType: DropdownValue[] = [
    {
      value: 'Двоспальне'
    },
    {
      value: 'Односпальне'
    }
  ];

  peopleCounts: DropdownValue[] = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    }
  ]

  roomForm = new FormGroup({
    people_count: new FormControl<any>(null),
    bed_type: new FormControl<any>(null),
    price: new FormControl<number | null>(null),
    title: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
    image_url: new FormControl<string | null>(null),
    long_description: new FormControl<string | null>(null),
    subtitle: new FormControl<string | null>(null),
  })

  constructor(
    private readonly roomsService: AdminRoomsService,
    private readonly dialogService: DialogService,
    public readonly config: DynamicDialogConfig
  ) {
    if(config.data.isEdit) {
      this.roomsService.getById(config.data.roomId).subscribe((room) => {
        this.roomForm.controls.people_count.setValue({ value: room.people_count })
        this.roomForm.controls.bed_type.setValue({ value: room.bed_type })
        this.roomForm.controls.price.setValue(room.price)
        this.roomForm.controls.title.setValue(room.title)
        this.roomForm.controls.description.setValue(room.description)
        this.roomForm.controls.image_url.setValue(room.image_url)
        this.roomForm.controls.long_description.setValue(room.long_description)
        this.roomForm.controls.subtitle.setValue(room.subtitle)
      })
    }
  }


  onSubmit() {
    const newRoom = {
      ...this.roomForm.value,
      people_count: this.roomForm.value.people_count.value,
      bed_type: this.roomForm.value.bed_type.value
    }

    if(this.config.data.isEdit) {
      this.roomsService.update(this.config.data.roomId, newRoom as Room)
    } else {
      this.roomsService.create(newRoom as Room)
    }

    this.dialogService.dialogComponentRefMap.forEach(dialog => {
      dialog.destroy();
    });
  }
}
