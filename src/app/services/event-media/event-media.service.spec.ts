import { TestBed } from '@angular/core/testing';

import { EventMediaService } from './event-media.service';

describe('EventMediaService', () => {
  let service: EventMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
