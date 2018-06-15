import { Module } from './module';

export class Presentation {
    id: number;
    date: Date;
    name: string;
    modules: Module[] = [];

    constructor(id = 0) {
      this.id = id;
      this.date = new Date();
    }

    static fromJsonObject(o): Presentation {
      const p = new Presentation(o.id);
      p.date = o.date;
      p.name = o.name;
      o.modules.forEach(module => p.modules.push(Module.fromJsonObject(module)));
      return p;
    }
}
