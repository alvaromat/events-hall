import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as settings from 'electron-settings';

@Injectable()
export class ConfigurationService {
  configuration;
  settings: typeof settings;

  constructor(private translate: TranslateService) {
    this.settings = window.require('electron-settings');
    this.loadConfiguration();
  }

  private loadConfiguration() {
    if (this.settings.has('config')) {
      try {
        this.configuration = this.settings.get('config');
      } catch (e) {
        this.configuration = new Object();
      }
    } else {
      this.configuration = new Object();
      this.settings.set('config', this.configuration);
    }
  }

  private save() {
    this.settings.set('config', this.configuration);
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
