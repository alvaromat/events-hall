import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const TWITTER_CONF = {
  consumerKey: 'WtO4ZmsssceJ0dsj2Cla6mTca',
  consumerSecret: '35XnpsalcaKb8L9yHR2uRRCLp78W7Cf0K2GjLO4Xi98wHHSFOE',
  callBackUrl: ''
};

@Injectable()
export class TwitterService {
  private authHeader: HttpHeaders;

  constructor(private http: HttpClient) {}

  private getAuthHeader(): Observable<HttpHeaders> {
    if (this.authHeader === undefined) {
      const bearerTokenCredentials = this.getBearerTokenCredentials(
        TWITTER_CONF.consumerKey,
        TWITTER_CONF.consumerSecret
      );
      return this.getBearerToken(bearerTokenCredentials).pipe(
        map(response => new HttpHeaders({Authorization: `Bearer ${response['access_token']}`})),
        tap(header => this.authHeader = header)
      );
    } else {
      return of(this.authHeader);
    }
  }

  private getBearerTokenCredentials(
    consumerKey: string,
    consumerSecret: string
  ): string {
    const encodedConsumerKey = encodeURIComponent(consumerKey);
    const encodedConsumerSecret = encodeURIComponent(consumerSecret);

    const credentials = `${encodedConsumerKey}:${encodedConsumerSecret}`;

    return btoa(credentials);
  }

  private getBearerToken(bearerTokenCredentials: string): Observable<Object> {
    let headers = new HttpHeaders();

    headers = headers
      .set('Authorization', `Basic ${bearerTokenCredentials}.`)
      .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8.');

    return this.http
      .post<string>(
        'https://api.twitter.com/oauth2/token',
        'grant_type=client_credentials',
        { headers }
      )
      .pipe(
        tap(_ => console.log('Twitter: got bearer token.')),
        catchError(this.handleError('getBearerToken', ''))
      );
  }

  search(terms: string, extended = false, since: number | string = 0) {
    return this.getAuthHeader().pipe(
      switchMap(authHeader => {
        let params = new HttpParams().set('q', encodeURI(terms));

        if (extended) { params = params.set('tweet_mode', 'extended'); }
        if (since !== 0) { params = params.set('since_id', `${since}`); }

        return this.http
          .get<any[]>('https://api.twitter.com/1.1/search/tweets.json', { headers: authHeader, params })
          .pipe(
            tap(_ => console.log(`Twitter: fetched twits containing "${terms}".`)),
            catchError(this.handleError('search', []))
          );
      })
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
