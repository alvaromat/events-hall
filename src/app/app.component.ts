import { Component, ViewChild, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';
import { MatSidenav, MatDialog } from '@angular/material';
import { SidenavService } from './providers/sidenav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, retry } from 'rxjs/operators';
import { PresentationService } from './presentations/presentation.service';
import { NewPresentationDialogComponent } from './presentations/new-presentation-dialog/new-presentation-dialog.component';
import { Presentation } from './presentations/presentation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  window: BrowserWindow;
  @ViewChild('sidenav') sidenav: MatSidenav;
  title: string;
  shouldDisplayEditButton = false;
  presentation: Presentation;

  get maximized(): boolean {
    return this.window.isMaximized();
  }

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private sidenavService: SidenavService,
    private router: Router,
    private route: ActivatedRoute,
    private presentationService: PresentationService,
    private dialog: MatDialog
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

    this.translate.get('toolbar.title').pipe(retry(3)).subscribe((res: string) => this.title = res);

    this.suscribeToRouteChanges();
    // TODO: use configuration service to get lang
    this.translate.use(this.electronService.remote.app.getLocale());
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
            .subscribe(presentation => {
              this.title = presentation.name;
              this.presentation = presentation;
            });
          this.shouldDisplayEditButton = Boolean(routeSnapshot.url.find(segment => segment.path === 'editing'));
        } else {
            this.translate.get('toolbar.title').subscribe((res: string) => this.title = res);
        }
      });
  }

  editPresentation() {
    const dialogRef = this.dialog.open(NewPresentationDialogComponent, {
      data: this.presentation
    });

    dialogRef.afterClosed().subscribe(resultPresentation => {
      if (resultPresentation) {
        this.presentationService.update(this.presentation).subscribe(p => this.title = p.name);
      }
    });
  }

  quit(): void {
    this.electronService.remote.app.quit();
  }
}
