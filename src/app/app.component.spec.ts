import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ElectronService } from './providers/electron.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialComponentsModule } from './material-components.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent
      ],
      providers: [
        ElectronService
      ],
      imports: [
        RouterTestingModule,
        MaterialComponentsModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

class TranslateServiceStub {
  setDefaultLang(lang: string): void {
  }
}
