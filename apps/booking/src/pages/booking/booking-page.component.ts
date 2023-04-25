import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of, Subscription, } from 'rxjs';
import { RoomViewService } from '../../features/room/room-view.service';
import { TinyRoomView } from '../../shared/ui/types';
import { CreateBooking } from '../../shared/api/booking/models';
import { MessageService } from 'primeng/api';
import { UserService } from '../../features/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../shared/api/booking/booking.service';

@Component({
  selector: 'booking-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  providers: [MessageService]
})
export class BookingPageComponent implements OnInit, OnDestroy {
  rooms$: Observable<Array<TinyRoomView>> = of([]);
  meSubscription: Subscription;
  queryParamsSubscription: Subscription;

  queryRoomBenefits: any;

  bookingForm = new FormGroup({
    date: new FormControl<Array<string> | null>(null, [Validators.required]),
    firstName: new FormControl<string | null>(null, [Validators.required]),
    secondName: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.email]),
    phone: new FormControl<string | null>(null, [Validators.required]),
    room: new FormControl<number | null>(null, [Validators.required]),
  });

  constructor(
    private readonly roomsViewService: RoomViewService,
    private readonly bookingApiService: BookingService,
    private readonly messageService: MessageService,
    private readonly userService: UserService,
    private readonly router: ActivatedRoute,
  ) {
    this.queryParamsSubscription = router.queryParams.subscribe((params: any) => {
      if (params.form) {
        const form = JSON.parse(params.form);

        this.queryRoomBenefits = {
          bedType: form.bedType,
          peopleCount: form.peopleCount
        };

        this.bookingForm.controls.date.setValue(form.date?.map((date: string) => new Date(date)));
      }

      if(params.roomId) {
        this.bookingForm.controls.room.setValue(+params.roomId);
      }
    })


    this.meSubscription = userService.me$.subscribe(user => {
      if (user) {
        this.bookingForm.controls.secondName.setValue(user.secondName)
        this.bookingForm.controls.firstName.setValue(user.firstName)
        this.bookingForm.controls.phone.setValue(user.phone)
        this.bookingForm.controls.email.setValue(user.email)
      }
    });
  }

  onSubmit() {
    const bookPayload: CreateBooking = {
      email: this.bookingForm.value.email,
      room_id: this.bookingForm.value.room,
      phone: this.bookingForm.value.phone,
      first_name: this.bookingForm.value.firstName,
      end_date: this.bookingForm.value.date?.[1],
      second_name: this.bookingForm.value.secondName,
      start_date: this.bookingForm.value.date?.[0],
    }

    this.bookingApiService.bookRoom(bookPayload).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Успіх',
        detail: `Ваша кімната заброньована! Номер бронювання: ${response.id}`
      })
    })
  }

  filterRooms(rooms: TinyRoomView[], roomBenefits: any) {
    if(!roomBenefits) {
      return rooms
    }

    return rooms.filter((room) => room.benefits
      .filter((benefit) => roomBenefits[benefit.key])
      .every((el) => roomBenefits[el.key] === el.value)
    )
  }

  ngOnInit() {
    this.rooms$ = this.roomsViewService.getAllTinyRooms().pipe(
      map((rooms) => this.filterRooms(rooms, this.queryRoomBenefits))
    );
  }

  ngOnDestroy() {
    this.meSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
}
