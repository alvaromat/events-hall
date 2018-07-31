import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as settings from 'electron-settings';
import { DefaultApiKeys } from '../default-api-keys';

@Injectable()
export class ConfigurationService {
  configuration;
  keys;
  settings: typeof settings;

  constructor(private translate: TranslateService) {
    this.settings = window.require('electron-settings');
    this.loadConfiguration();
    this.loadKeys();
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
      this.settings.set('config', this.configuration, {prettify: true});
    }
  }

  private loadKeys() {
    this.keys = {
      twitter: {
        consumerKey: '',
        consumerSecret: '',
        callBackUrl: ''
      },
      openWeatherMaps: {
        apiKey: ''
      },
      google: {
        apiKey: ''
      }
    };

    if (this.settings.has('keys')) {
      this.keys = this.settings.get('keys');
    } else {
      this.settings.set('keys', this.keys, {prettify: true});
    }

    if (this.keys.twitter.consumerSecret === '') {
      this.keys.twitter = DefaultApiKeys.twitter;
    }

    if (this.keys.openWeatherMaps.apiKey === '') {
      this.keys.openWeatherMaps = DefaultApiKeys.openWeatherMaps;
    }

    if (this.keys.google.apiKey === '') {
      this.keys.google = DefaultApiKeys.google;
    }

    console.log('Using following keys');
    console.log(this.keys);
  }

  private save() {
    this.settings.set('config', this.configuration, {prettify: true});
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
