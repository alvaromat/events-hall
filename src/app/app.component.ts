import { Component, ViewChild, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './providers/sidenav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PresentationService } from './presentations/presentation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  window: BrowserWindow;
  @ViewChild('sidenav') sidenav: MatSidenav;
  title: string;

  get maximized(): boolean {
    return this.window.isMaximized();
  }

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private sidenavService: SidenavService,
    private router: Router,
    private route: ActivatedRoute,
    private presentationService: PresentationService
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

    this.translate.get('toolbar.title').subscribe((res: string) => this.title = res);

    this.suscribeToRouteChanges();
  }

  toggleMaximize() {
    if (this.maximized) {
      this.window.unmaximize();
    } else {
      this.window.maximize();
    }
  }

  suscribeToRouteChanges(): void {
    this.router.events
      .pipe(
        filter(
          event => event instanceof NavigationEnd
        ),
        map(() => this.route.firstChild.snapshot)
      )
      .subscribe(routeSnapshot => {
        if (routeSnapshot.url[0] && routeSnapshot.url[0].path === 'presentation') {
          this.presentationService
            .get(+routeSnapshot.paramMap.get('id'))
            .subscribe(presentation => this.title = presentation.name);
        } else {
            this.translate.get('toolbar.title').subscribe((res: string) => this.title = res);
        }
      });
  }

  quit(): void {
    this.electronService.remote.app.quit();
  }
}
