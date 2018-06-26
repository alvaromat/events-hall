import { NgModule } from '@angular/core';
import { TrafficViewComponent } from './traffic-view/traffic-view.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { TrafficFormComponent } from './traffic-form/traffic-form.component';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhbLJjAtXRgED7JCjwD4nO-RTER-f-JN0',
      libraries: ['places']
    })
  ],
  declarations: [TrafficViewComponent, TrafficFormComponent],
  exports: [TrafficViewComponent, TrafficFormComponent]
})
export class TrafficModule { }
