import { Injectable } from '@angular/core';
import { Presentation } from './presentation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';

const PRESENTATIONS = 'presentations';
const STORE_INTERVAL = 1000 * 60;

@Injectable()
export class PresentationService {
  private presentations = undefined;

  constructor() {}

  getPresentations(): Observable<Presentation[]> {
    if (this.presentations === undefined) {
      this.presentations = this.loadPresentations();
    }
    return of(this.presentations);
  }

  /**
   * Loads the presentations from local storage.
   */
  private loadPresentations(): Presentation[] {
    let presentations: Presentation[];
    if (window.localStorage.getItem(PRESENTATIONS) === null) {
      presentations = [];
      window.localStorage.setItem(PRESENTATIONS, JSON.stringify(presentations));
    } else {
      try {
        presentations = JSON.parse(window.localStorage.getItem(PRESENTATIONS));
      } catch (e) {
        presentations = [];
      }
    }

    const source = timer(STORE_INTERVAL, STORE_INTERVAL);
    source.subscribe(this.save);

    return presentations;
  }

  add(presentation: Presentation): Observable<Presentation> {
    this.presentations.unshift(presentation);
    return of(presentation);
  }

  delete(presentation: Presentation): Observable<Presentation> {
    this.presentations = this.presentations.filter(p => p !== presentation);
    return of(presentation);
  }

  get(id: number) {
     return of(this.presentations.find(
      (presentation: Presentation) => presentation.id === id
    ));
  }

  /**
   * Stores the presentations in local storage.
   */
  save() {
    window.localStorage.setItem(PRESENTATIONS, JSON.stringify(this.presentations));
  }

  getNewInstance(): Presentation {
    let maxId = 0;
    this.presentations.forEach(presentation => {
      if (presentation.id > maxId) { maxId = presentation.id; }
    });
    return new Presentation(maxId++);
  }
}
