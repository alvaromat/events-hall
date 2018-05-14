import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../providers/presentation.service';
import { Presentation } from '../../models/presentation';
import { ElectronService } from '../../providers/electron.service';
import { MatDialog } from '@angular/material';
import { NewPresentationDialogComponent } from './new-presentation-dialog/new-presentation-dialog.component';

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
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.presentationService
      .getPresentations()
      .subscribe(presentations => (this.presentations = presentations));
  }

  create() {
    const dialogRef = this.dialog.open(NewPresentationDialogComponent);

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
}
