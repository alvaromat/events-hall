import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterViewComponent } from './twitter-view.component';

describe('TwitterComponent', () => {
  let component: TwitterViewComponent;
  let fixture: ComponentFixture<TwitterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
