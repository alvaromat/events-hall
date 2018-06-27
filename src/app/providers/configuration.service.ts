import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ConfigurationService {
  configuration;

  constructor(private translate: TranslateService) {
    this.loadConfiguration();
  }

  private loadConfiguration() {
    if (window.localStorage.getItem('config') === null) {
      this.configuration = new Object();
      window.localStorage.setItem('config', JSON.stringify(this.configuration));
    } else {
      try {
        this.configuration = JSON.parse(window.localStorage.getItem('config'));
      } catch (e) {
        this.configuration = new Object();
      }
    }
  }

  private save() {
    window.localStorage.setItem('config', JSON.stringify(this.configuration));
  }

  get language() {
    return this.configuration.language || 'en';
  }

  set language(language: string) {
    this.configuration.language = language;
    this.translate.use(language).subscribe();
    this.save();
  }
}
