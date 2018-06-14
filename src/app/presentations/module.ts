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
          items: '',
          refreshTime: 60
        };
      break;
    }
  }

  configuration: Object;

  constructor(type?: string) {
    this.type = type || undefined;
  }

  static fromJsonObject(o): Module {
    const module = new Module(o._type);
    module.configuration = o.configuration;
    return module;
  }

  isValid(): Boolean {
    if (this._type === undefined) {
      return false;
    }

    return true;
  }
}

