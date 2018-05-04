import { Injectable } from '@angular/core';
import { Presentation } from '../models/presentation';
import { PRESENTATIONS } from '../shared/mock-presentations';

@Injectable()
export class PresentationsService {

  constructor() { }

  getPresentations(): Presentation[] {
    return PRESENTATIONS;
  }

}
