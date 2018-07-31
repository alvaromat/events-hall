import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ConfigurationService } from '../providers/configuration.service';

@Injectable()
export class OpenWeatherMapService {

  globalParams;

  constructor(private http: HttpClient, private config: ConfigurationService) {
    this.globalParams = {
      appid: config.keys.openWeatherMaps.apiKey,
      units: 'metric'
    };
   }

  current(citiId, extraParameters = {}) {
    const params = { lang: this.config.language, id: citiId };
    Object.assign(params, this.globalParams, extraParameters);

    return this.http
    .get<Object>('http://api.openweathermap.org/data/2.5/weather', { params })
    .pipe(
      tap(_ => console.log(`OpenWeather: weather for city "${citiId}".`)),
      catchError(this.handleError('weather', undefined))
    );
  }

  forecast(citiId, extraParameters = {}) {
    const params = { lang: this.config.language, id: citiId };
    Object.assign(params, this.globalParams, extraParameters);

    return this.http
    .get<Object>('http://api.openweathermap.org/data/2.5/forecast', { params })
    .pipe(
      tap(_ => console.log(`OpenWeather: forecast for city "${citiId}".`)),
      catchError(this.handleError('forecast', undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`HTTP error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }

}
