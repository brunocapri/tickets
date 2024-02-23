import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { Event, Pagination } from '../../interfaces/event';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { EventFilters } from '../../interfaces/event-filters';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    EventCardComponent,
    PaginatorComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  eventService: EventService = inject(EventService);
  events: Event[] = [];
  pages: Pagination | undefined;
  filters: EventFilters = {
    city: undefined,
    startedAt: undefined,
    endedAt: undefined,
    page: 0,
  };
  loading: boolean = false;

  constructor() {
    this.getEvents(this.filters);
  }

  getEvents(filters: EventFilters) {
    this.loading = true;
    this.eventService.getEvents(filters).then(({ events, pages }) => {
      this.events = events;
      this.pages = pages;
      this.loading = false;
    });
  }

  onFilter(queries: any) {
    this.filters = {
      ...this.filters,
      city: queries.city,
      startedAt: queries.startedAt,
      endedAt: queries.endedAt,
    };
    this.getEvents(queries);
  }

  getNextPage() {
    this.getEvents({ ...this.filters, page: (this.pages?.number ?? 0) + 1 });
    window.scrollTo(0, 0);
  }

  getPreviousPage() {
    this.getEvents({ ...this.filters, page: (this.pages?.number ?? 0) - 1 });
    window.scrollTo(0, 0);
  }
}
