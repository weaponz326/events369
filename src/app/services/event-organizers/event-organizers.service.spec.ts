import { TestBed } from '@angular/core/testing';

import { EventOrganizersService } from './event-organizers.service';

describe('EventOrganizersService', () => {
  let service: EventOrganizersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventOrganizersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
