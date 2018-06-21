import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ElectronService } from '../providers/electron.service';

const OW_CONF = {
  apiKey: 'bfae1f8e940a726cddcf947929d6066d'
};

@Injectable()
export class OpenWeatherMapService {

  globalParams;

  constructor(private http: HttpClient, private electron: ElectronService) {
    this.globalParams = {
      // TODO: use configuration service to get lang
      lang: this.electron.remote.app.getLocale(),
      appid: OW_CONF.apiKey,
      units: 'metric'
    };
   }

  current(citiId, extraParameters = {}) {
    const params = { id: citiId };
    Object.assign(params, this.globalParams, extraParameters);

    return this.http
    .get<Object>('http://api.openweathermap.org/data/2.5/weather', { params })
    .pipe(
      tap(_ => console.log(`OpenWeather: weather for city "${citiId}".`)),
      catchError(this.handleError('weather', undefined))
    );
  }

  forecast(citiId, extraParameters = {}) {
    const params = { id: citiId };
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
