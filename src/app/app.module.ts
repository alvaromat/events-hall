import 'reflect-metadata';
import '../polyfills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { AppComponent } from './app.component';
import { MAT_DATE_LOCALE, GestureConfig } from '@angular/material';
import { SidenavService } from './providers/sidenav.service';
import { SharedModule } from './shared/shared.module';
import { PresentationsModule } from './presentations/presentations.module';
import { AboutComponent } from './about/about.component';
import { ConfigurationService } from './providers/configuration.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, AboutComponent],
  entryComponents: [AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    PresentationsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en_GB' },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig  },
    ElectronService,
    SidenavService,
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
