import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTrainingForUserComponent } from './assigned-training-for-user.component';

describe('AssignedTrainingForUserComponent', () => {
  let component: AssignedTrainingForUserComponent;
  let fixture: ComponentFixture<AssignedTrainingForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedTrainingForUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedTrainingForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
