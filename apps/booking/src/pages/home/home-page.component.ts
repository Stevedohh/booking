import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface DropdownValue {
  value: string | number;
}

@Component({
  selector: 'booking-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
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

  constructor(
    private readonly router: Router
  ) {}


  bookForm = new FormGroup({
    date: new FormControl<Array<string> | null>(null),
    bedType: new FormControl<any>(null),
    peopleCount: new FormControl<any>(null)
  })

  onSubmit() {
    const bookForm = {
      ...this.bookForm.value,
      bedType: this.bookForm.value.bedType?.value,
      peopleCount: this.bookForm.value.peopleCount?.value
    }

    this.router.navigateByUrl(`/booking?form=${JSON.stringify(bookForm)}`)
  }

}
