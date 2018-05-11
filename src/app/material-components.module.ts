import { NgModule, LOCALE_ID } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatListModule,
  MatListItem,
  MatInputModule,
  MatDatepickerModule,
  MatDialogModule,
  DateAdapter
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMomentDateModule,
  MomentDateAdapter
} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations: []
})
export class MaterialComponentsModule {}
