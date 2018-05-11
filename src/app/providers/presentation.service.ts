import { Injectable } from '@angular/core';
import { Presentation } from '../models/presentation';
import { PRESENTATIONS } from '../shared/mock-presentations';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PresentationService {

  private presentations = PRESENTATIONS;

  constructor() { }

  delete(presentation: Presentation): Observable<Presentation> {
    this.presentations = this.presentations.filter(p => p !== presentation);
    return of(presentation);
  }

  getPresentations(): Observable<Presentation[]> {
    const presentations = this.presentations.map((presentation) => Object.assign({}, presentation));
    return of(presentations);
  }

  add(presentation: Presentation): Observable<Presentation> {
    this.presentations.unshift(presentation);
    return of(presentation);
  }

}
