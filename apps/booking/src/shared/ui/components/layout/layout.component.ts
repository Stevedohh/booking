import { Component, Input } from '@angular/core';

@Component({
  selector: 'booking-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() backgroundImage: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() withPadding = true;
}
