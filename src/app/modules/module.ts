export class Module {
  private _type: string;
  get type(): string {
    return this._type;
  }
  set type(newType: string) {
    this._type = newType;
    switch (newType) {
      case 'twitter':
        this.configuration = {
          items: ''
        };
      break;
    }
  }

  configuration: Object;

  constructor(name?: string) {
    this.type = name || undefined;
  }

  isValid(): Boolean {
    if (this._type === undefined) {
      return false;
    }

    return true;
  }
}

