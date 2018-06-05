export class Presentation {
    id: number;
    date: Date;
    name: string;
    modules = [];

    constructor(id = 0) {
      this.id = id;
      this.date = new Date();
    }
}
