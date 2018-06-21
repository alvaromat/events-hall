import { NgModule } from '@angular/core';
import { OpenWeatherMapService } from './open-weather-map.service';
import { SharedModule } from '../shared/shared.module';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [WeatherViewComponent, WeatherFormComponent],
  exports: [WeatherViewComponent, WeatherFormComponent],
  providers: [OpenWeatherMapService]
})
export class WeatherModule { }
