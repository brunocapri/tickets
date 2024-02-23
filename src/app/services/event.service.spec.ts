import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { environment } from '../../environment/environment';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assemble the url with all parameters', () => {
    const filters = {
      page: 1,
      city: 'New York',
      startedAt: '2024-02-21T08:30:00Z',
      endedAt: '2024-02-21T08:30:00Z',
    };
    const expected = `${environment.ticketmasterUri}?apikey=${environment.apiKey}&size=21&city=New%20York&startDateTime=2024-02-21T08:30:00Z&endDateTime=2024-02-21T08:30:00Z&page=1`;
    expect(service.assembleUrl(filters)).toBe(expected);
  });

  it('should assemble the url with some parameters', () => {
    const filters = {
      page: 1,
      city: 'New York',
      startedAt: undefined,
      endedAt: undefined,
    };
    const expected = `${environment.ticketmasterUri}?apikey=${environment.apiKey}&size=21&city=New%20York&page=1`;
    expect(service.assembleUrl(filters)).toBe(expected);
  });
  it('should assemble the url without parameters', () => {
    const filters = {
      page: undefined,
      city: undefined,
      startedAt: undefined,
      endedAt: undefined,
    };
    const expected = `${environment.ticketmasterUri}?apikey=${environment.apiKey}&size=21`;
    expect(service.assembleUrl(filters)).toBe(expected);
  });
});
