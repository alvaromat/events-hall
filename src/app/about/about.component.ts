import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../providers/configuration.service';
import { ElectronService } from '../providers/electron.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userDataPath = '';
  configFilePath = '';

  copiedText = '';

  constructor(
    private configuration: ConfigurationService,
    private electron: ElectronService,
    private snack: MatSnackBar,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.userDataPath = this.electron.remote.app.getPath('userData');
    const separator = this.userDataPath.includes('\\') ? '\\' : '/';
    this.configFilePath = `${this.userDataPath}${separator}Settings`;
    this.translate.get('about.copied').subscribe(result => this.copiedText = result);
  }

  openUserDataPath() {
    this.electron.remote.shell.openExternal(this.userDataPath);
  }

  openConfigFile() {
    this.electron.remote.shell.openExternal(this.configFilePath);
  }

  copyPath() {
    this.electron.remote.clipboard.writeText(this.configFilePath);
    this.snack.open(this.copiedText, null, {duration: 2500});
  }

  get language() {
    return this.configuration.language;
  }

  set language(language: string) {
    this.configuration.language = language;
  }
}
