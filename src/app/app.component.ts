import { Component, ViewChild, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './providers/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  window: BrowserWindow;
  @ViewChild('sidenav') sidenav: MatSidenav;

  get maximized(): boolean {
    return this.window.isMaximized();
  }

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private sidenavService: SidenavService
  ) {
    translate.setDefaultLang('en');
    console.log('environment', environment);
    this.window = electronService.remote.getCurrentWindow();
  }

  ngOnInit(): void {
    if (!environment.production) {
      this.window.webContents.openDevTools();
    }
    this.sidenavService.Sidenav = this.sidenav;
  }

  toggleMaximize() {
    if (this.maximized) {
      this.window.unmaximize();
    } else {
      this.window.maximize();
    }
  }

  quit(): void {
    this.electronService.remote.app.quit();
  }
}
