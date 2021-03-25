import { TestBed } from '@angular/core/testing';

import { EventSchedulingService } from './event-scheduling.service';

describe('EventSchedulingService', () => {
  let service: EventSchedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSchedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
