import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../presentation.service';
import { Presentation } from '../presentation';
import { ElectronService } from '../../providers/electron.service';
import { MatDialog } from '@angular/material';
import { SidenavService } from '../../providers/sidenav.service';
import { NewPresentationDialogComponent } from '../new-presentation-dialog/new-presentation-dialog.component';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {
  presentations: Presentation[];

  constructor(
    private presentationService: PresentationService,
    private electronService: ElectronService,
    private dialog: MatDialog,
    private sidenavService: SidenavService
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

    dialogRef.afterClosed().subscribe(resultPresentation => {
      if (resultPresentation) {
        this.presentationService
          .add(resultPresentation)
          .subscribe(presentation => this.presentations.unshift(presentation));
      }
    });
  }

  delete(presentation: Presentation) {
    this.presentations = this.presentations.filter(p => p !== presentation);
    this.presentationService.delete(presentation).subscribe();
  }

  closeSidenav() {
    return this.sidenavService.close();
  }
}
