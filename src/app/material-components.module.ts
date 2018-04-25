import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule ],
  exports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule ],
  declarations: []
})
export class MaterialComponentsModule { }
