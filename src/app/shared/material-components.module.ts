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
  DateAdapter,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';
import {
  MatMomentDateModule,
  MomentDateAdapter
} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialComponentsModule {}
