import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation.service';
import { Presentation } from '../presentation';
import { MatDialog } from '@angular/material';
import { SidenavService } from '../../providers/sidenav.service';
import { NewPresentationDialogComponent } from '../new-presentation-dialog/new-presentation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {
  presentations: Presentation[];

  constructor(
    private presentationService: PresentationService,
    private dialog: MatDialog,
    private sidenavService: SidenavService,
    private router: Router
  ) {}

  ngOnInit() {
    this.presentationService
      .getPresentations()
      .subscribe(presentations => (this.presentations = presentations));
  }

  create() {
    const dialogRef = this.dialog.open(NewPresentationDialogComponent, {
      data: this.presentationService.getNewInstance()
    });

    dialogRef.afterClosed().subscribe((resultPresentation: Presentation) => {
      if (resultPresentation) {
        this.presentationService
          .add(resultPresentation)
          .subscribe();
          this.router.navigate(['presentation', resultPresentation.id, 'editing']);
          this.closeSidenav();
      }
    });
  }

  delete(presentation: Presentation) {
    this.presentationService.delete(presentation).subscribe();
  }

  closeSidenav() {
    return this.sidenavService.close();
  }
}
