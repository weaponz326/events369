import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketsPageComponent } from './user-tickets-page.component';

describe('UserTicketsPageComponent', () => {
  let component: UserTicketsPageComponent;
  let fixture: ComponentFixture<UserTicketsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTicketsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTicketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
