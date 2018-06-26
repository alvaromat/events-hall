import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficFormComponent } from './traffic-form.component';

describe('TrafficFormComponent', () => {
  let component: TrafficFormComponent;
  let fixture: ComponentFixture<TrafficFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
