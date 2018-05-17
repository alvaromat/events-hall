import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPresentationDialogComponent } from './new-presentation-dialog.component';

describe('NewPresentationDialogComponent', () => {
  let component: NewPresentationDialogComponent;
  let fixture: ComponentFixture<NewPresentationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPresentationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPresentationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
