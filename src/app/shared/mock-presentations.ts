import { Presentation } from '../models/presentation';
import { FourModulesLayout } from '../models/layout';

export const PRESENTATIONS: Presentation[] = [
  { created: Date.now(), layout: FourModulesLayout, modified: Date.now(), name: 'Presentación USAL 2018' },
  { created: Date.now(), layout: FourModulesLayout, modified: Date.now(), name: 'CodeWars 2018' },
  { created: Date.now(), layout: FourModulesLayout, modified: Date.now(), name: 'Reunión equipo tester 2017 Q4' }
];
