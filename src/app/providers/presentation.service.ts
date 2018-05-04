import { Injectable } from '@angular/core';
import { Presentation } from '../models/presentation';
import { PRESENTATIONS } from '../shared/mock-presentations';

@Injectable()
export class PresentationService {

  constructor() { }

  getPresentations(): Presentation[] {
    return PRESENTATIONS;
  }

}
