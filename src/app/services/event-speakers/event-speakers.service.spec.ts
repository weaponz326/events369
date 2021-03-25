import { TestBed } from '@angular/core/testing';

import { EventSpeakersService } from './event-speakers.service';

describe('EventSpeakersService', () => {
  let service: EventSpeakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSpeakersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
