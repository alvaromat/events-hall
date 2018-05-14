import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  win: BrowserWindow;

  get maximized(): boolean {
    return this.win.isMaximized();
  }

  constructor(public electronService: ElectronService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('environment', environment);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
      this.win = electronService.remote.getCurrentWindow();
    } else {
      console.log('Mode web');
    }
  }

  toggleMaximize() {
    if (this.maximized) {
      this.win.unmaximize();
    } else {
      this.win.maximize();
    }
  }

  quit(): void {
    this.electronService.remote.app.quit();
  }
}
