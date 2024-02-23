import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { EventFilters } from '../interfaces/event-filters';
import { Event, Pagination } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  async getEvents(
    filters: EventFilters
  ): Promise<{ events: Event[]; pages: Pagination }> {
    const url = this.assembleUrl(filters);
    const res = await fetch(url);
    const data = await res.json();
    return {
      events: (data?._embedded?.events as Event[]) ?? [],
      pages: {
        number: data.page.number,
        page: data.page,
      },
    };
  }

  assembleUrl(filters: EventFilters): string {
    // remove milliseconds from ISO date
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
    };

    let url = `${environment.ticketmasterUri}?apikey=${environment.apiKey}&size=21`;

    const { page, startedAt, endedAt, city } = filters;
    if (city) url += `&city=${city}`;
    if (startedAt) url += `&startDateTime=${formatDate(new Date(startedAt))}`;
    if (endedAt) url += `&endDateTime=${formatDate(new Date(endedAt))}`;
    if (page) url += `&page=${page}`;

    return encodeURI(url);
  }

  constructor() {}
}
