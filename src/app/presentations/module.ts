export class Module {
  private type: string;

  configuration: Object;

  constructor(type?: string) {
    this.type = type || undefined;
  }

  static fromJsonObject(o): Module {
    const module = new Module(o.type);
    module.configuration = o.configuration;
    return module;
  }

  isValid(): Boolean {
    if (this.type === undefined) {
      return false;
    }

    return true;
  }
}

