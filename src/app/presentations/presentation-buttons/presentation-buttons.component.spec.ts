import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationButtonsComponent } from './presentation-buttons.component';

describe('PresentationButtonsComponent', () => {
  let component: PresentationButtonsComponent;
  let fixture: ComponentFixture<PresentationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
