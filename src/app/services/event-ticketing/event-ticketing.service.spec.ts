import { TestBed } from '@angular/core/testing';

import { EventTicketingService } from './event-ticketing.service';

describe('EventTicketingService', () => {
  let service: EventTicketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTicketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
