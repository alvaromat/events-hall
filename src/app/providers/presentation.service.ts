import { Injectable } from '@angular/core';
import { Presentation } from '../models/presentation';
import { PRESENTATIONS } from '../shared/mock-presentations';

@Injectable()
export class PresentationService {

  constructor() { }

  delete(presentation: Presentation): boolean {
    return true;
  }

  getPresentations(): Presentation[] {
    return PRESENTATIONS;
  }

}
