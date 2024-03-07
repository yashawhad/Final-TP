import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssignedTrainingsComponent } from './all-assigned-trainings.component';

describe('AllAssignedTrainingsComponent', () => {
  let component: AllAssignedTrainingsComponent;
  let fixture: ComponentFixture<AllAssignedTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllAssignedTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllAssignedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
