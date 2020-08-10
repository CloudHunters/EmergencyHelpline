import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewRequestComponent } from './patient-view-request.component';

describe('PatientViewRequestComponent', () => {
  let component: PatientViewRequestComponent;
  let fixture: ComponentFixture<PatientViewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
