import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficViewComponent } from './traffic-view.component';

describe('TrafficViewComponent', () => {
  let component: TrafficViewComponent;
  let fixture: ComponentFixture<TrafficViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
