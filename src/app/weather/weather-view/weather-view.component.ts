import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';

const RESIZE_SENSOR = require('../../../../node_modules/css-element-queries/src/ResizeSensor.js');
const ELEMENT_QUERIES = require('../../../../node_modules/css-element-queries/src/ElementQueries.js');

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit, AfterViewInit {

  @Input() configuration;

  currentWeather;
  forecasts = [];

  constructor(private weather: OpenWeatherMapService) { }

  ngOnInit() {
    if (this.configuration && this.configuration.cityId) {
      this.weather.current(this.configuration.cityId).subscribe(res => this.currentWeather = (+res.cod === 200 ? res : undefined));
      this.weather.forecast(this.configuration.cityId).subscribe(res => this.forecasts = (+res.cod === 200 ? res.list : []));
    }
  }

  ngAfterViewInit() {
    ELEMENT_QUERIES.init();
  }

}
