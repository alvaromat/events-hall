import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEditorComponent } from './presentation-editor.component';

describe('PresentationEditorComponent', () => {
  let component: PresentationEditorComponent;
  let fixture: ComponentFixture<PresentationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
