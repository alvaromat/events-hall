import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatListModule, MatListItem } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatListModule ],
  exports: [ BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatListModule ],
  declarations: []
})
export class MaterialComponentsModule { }
