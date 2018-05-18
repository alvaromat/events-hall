import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationViewComponent } from './presentation-view.component';

describe('PresentationViewComponent', () => {
  let component: PresentationViewComponent;
  let fixture: ComponentFixture<PresentationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
