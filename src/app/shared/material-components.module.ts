import { NgModule, LOCALE_ID } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatListModule,
  MatInputModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';
import {
  MatMomentDateModule
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
    MatRadioModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSnackBarModule
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
    MatRadioModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialComponentsModule {}
