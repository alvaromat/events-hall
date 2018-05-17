import 'reflect-metadata';
import '../polyfills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { AppComponent } from './app.component';
import { PresentationService } from './providers/presentation.service';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { PresentationEditorComponent } from './components/presentation-editor/presentation-editor.component';
import { NewPresentationDialogComponent } from './components/presentation-list/new-presentation-dialog/new-presentation-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { SidenavService } from './providers/sidenav.service';
import { SharedModule } from './shared/shared.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PresentationListComponent,
    PresentationEditorComponent,
    NewPresentationDialogComponent
  ],
  entryComponents: [NewPresentationDialogComponent],
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
    })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en_GB' },
    ElectronService,
    PresentationService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
