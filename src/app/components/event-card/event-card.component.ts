import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Event } from '../../interfaces/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event!: Event;

  getImageUrl(): string | undefined {
    return this.event?.images?.find((e) => e.ratio === '3_2')?.url;
  }

  getDate(): string | undefined {
    const [year, month, day] = this.event?.dates?.start?.localDate?.split('-');
    return `${month}/${day}/${year}`;
  }

  getTime(): string {
    const parts = this.event.dates?.start?.localTime?.split(':');
    if (parts) {
      const [hours, minutes] = parts;
      return `${hours}:${minutes} `;
    }
    return '';
  }

  getPrice() {
    return this.event?.priceRanges?.[0].min;
  }

  getLocation() {
    return this.event?._embedded?.venues?.[0]?.city?.name;
  }
}
