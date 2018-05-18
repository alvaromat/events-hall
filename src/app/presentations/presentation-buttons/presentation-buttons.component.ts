import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PresentationService } from '../presentation.service';
import { Presentation } from '../presentation';

@Component({
  selector: 'app-presentation-buttons',
  templateUrl: './presentation-buttons.component.html',
  styleUrls: ['./presentation-buttons.component.scss']
})
export class PresentationButtonsComponent implements OnInit {
  editing = false;
  show = false;

  private presentationId: string;
  private presentation: Presentation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private presentationService: PresentationService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationEnd && Boolean(this.route.firstChild)
        ),
        map((event: NavigationEnd) => this.route.firstChild.snapshot)
      )
      .subscribe(routeSnapshot => {
        this.show = routeSnapshot.url[0].path === 'presentation';
        this.editing = Boolean(routeSnapshot.paramMap.get('editing'));
        this.presentationId = routeSnapshot.paramMap.get('id');
        this.presentationService
          .get(+this.presentationId)
          .subscribe(presentation => (this.presentation = presentation));
      });
  }

  toggleEdit() {
    const route = ['presentation', this.presentationId];
    if (!this.editing) {
      route.push('editing');
    }
    this.router.navigate(route);
  }

  addModule() {
    this.presentationService
      .get(+this.presentationId)
      .subscribe(presentation => presentation.modules.push({}));
  }

  cannotAddModules() {
    return this.presentation.modules.length >= 6;
  }
}
