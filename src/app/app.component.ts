import { Component, ViewChild } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  win: BrowserWindow;
  @ViewChild('sidenav') sidenav: MatSidenav;

  get maximized(): boolean {
    return this.win.isMaximized();
  }

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private router: Router
  ) {
    translate.setDefaultLang('en');
    this.router.events.subscribe(() => this.sidenav.close());
    console.log('environment', environment);

    if (electronService.isElectron()) {
      this.win = electronService.remote.getCurrentWindow();
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
