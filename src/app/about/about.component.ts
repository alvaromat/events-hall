import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../providers/configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private configuration: ConfigurationService) {}

  get language() {
    return this.configuration.language;
  }

  set language(language: string) {
    this.configuration.language = language;
  }

}
