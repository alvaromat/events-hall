import { Injectable } from '@angular/core';
import { Presentation } from './presentation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';
const PRESENTATIONS = 'presentations';

import * as settings from 'electron-settings';

@Injectable()
export class PresentationService {
  private presentations: Array<Presentation> = undefined;
  settings: typeof settings;

  constructor() {
    this.settings = window.require('electron-settings');
  }

  getPresentations(): Observable<Array<Presentation>> {
    if (this.presentations === undefined) {
      this.presentations = this.loadPresentations();
    }

    return of(this.presentations);
  }

  /**
   * Loads the presentations from local storage.
   */
  private loadPresentations(): Array<Presentation> {
    let presentations: any;
    if (!this.settings.has(PRESENTATIONS)) {
      presentations = new Array<Presentation>();
      this.settings.set(PRESENTATIONS, presentations, {prettify: true});
    } else {
      try {
        presentations = this.settings.get(PRESENTATIONS);
        presentations = presentations.map((p) => Presentation.fromJsonObject(p));
      } catch (e) {
        presentations = new Array<Presentation>();
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
    const deleteIndex = this.presentations.findIndex(p => p.id === presentation.id);
    if (deleteIndex !== -1) {
      this.presentations.splice(deleteIndex, 1);
      this.save();
    }
    return of(presentation);
  }

  update(newPresentation: Presentation): Observable<Presentation> {
    const index = this.presentations.findIndex((presentation) => presentation.id === newPresentation.id);
    if (index !== -1) {
      this.presentations[index] = newPresentation;
      this.save();
      return of(newPresentation);
    } else {
      const error = new Error('Id not found');
      console.error(error);
      return Observable.throw(error);
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
    this.settings.set(PRESENTATIONS, <any>this.presentations, {prettify: true});
  }

  getNewInstance(): Presentation {
    let maxId = 0;
    this.presentations.forEach(presentation => {
      if (presentation.id > maxId) { maxId = presentation.id; }
    });
    return new Presentation(maxId + 1);
  }
}
