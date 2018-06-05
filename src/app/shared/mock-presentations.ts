import { Presentation } from '../presentations/presentation';
import { Module } from '../modules/module';

export const PRESENTATIONS: Presentation[] = [
  {
    id: 1,
    date: new Date(),
    name: 'Presentación USAL 2018',
    modules: [new Module('twitter'), new Module('twitter')]
  },
  { id: 2, date: new Date(), name: 'CodeWars 2018', modules: [] },
  {
    id: 3,
    date: new Date(),
    name: 'Reunión equipo tester 2017 Q4',
    modules: [
      new Module('twitter'),
      new Module('twitter'),
      new Module('twitter'),
      new Module('twitter')
    ]
  }
];
