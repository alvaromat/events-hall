import { Injectable } from '@angular/core';
import { Presentation } from './presentation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const PRESENTATIONS = 'presentations';

@Injectable()
export class PresentationService {
  private presentations: Presentation[] = undefined;

  constructor() {}

  getPresentations(): Observable<Presentation[]> {
    if (this.presentations === undefined) {
      this.presentations = this.loadPresentations();
    }

    const presentations = this.presentations.map(presentation =>
      Object.assign({}, presentation)
    );

    return of(presentations);
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
        const JSONpresentations = JSON.parse(window.localStorage.getItem(PRESENTATIONS));
        presentations = JSONpresentations.map((p) => Presentation.fromJsonObject(p));
      } catch (e) {
        presentations = [];
      }
    }

    return presentations;
  }

  add(presentation: Presentation): Observable<Presentation> {
    this.presentations.unshift(presentation);
    this.save();
    return of(presentation);
  }

  delete(presentation: Presentation): Observable<Presentation> {
    this.presentations = this.presentations.filter(p => p !== presentation);
    this.save();
    return of(presentation);
  }

  update(newPresentation: Presentation): Observable<Presentation> {
    const index = this.presentations.findIndex((presentation) => presentation.id === newPresentation.id);
    if (index !== -1) {
      this.presentations[index] = newPresentation;
      this.save();
      return of(newPresentation);
    } else {
      return Observable.throw(new Error('Id not found'));
    }
  }

  get(id: number): Observable<Presentation> {
     return of(this.presentations.find(
      (presentation: Presentation) => presentation.id === id
    ));
  }

  /**
   * Stores the presentations in local storage.
   */
  private save() {
    window.localStorage.setItem(PRESENTATIONS, JSON.stringify(this.presentations));
  }

  getNewInstance(): Presentation {
    let maxId = 0;
    this.presentations.forEach(presentation => {
      if (presentation.id > maxId) { maxId = presentation.id; }
    });
    return new Presentation(maxId + 1);
  }
}
