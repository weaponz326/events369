import { TestBed } from '@angular/core/testing';

import { EventPublishingService } from './event-publishing.service';

describe('EventPublishingService', () => {
  let service: EventPublishingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPublishingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
