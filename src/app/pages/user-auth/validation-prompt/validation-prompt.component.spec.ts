import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPromptComponent } from './validation-prompt.component';

describe('ValidationPromptComponent', () => {
  let component: ValidationPromptComponent;
  let fixture: ComponentFixture<ValidationPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
