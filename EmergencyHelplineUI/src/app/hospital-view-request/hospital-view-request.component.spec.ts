import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewRequestComponent } from './hospital-view-request.component';

describe('HospitalViewRequestComponent', () => {
  let component: HospitalViewRequestComponent;
  let fixture: ComponentFixture<HospitalViewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalViewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
