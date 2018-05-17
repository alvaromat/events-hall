import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Presentation } from '../../presentation';
import { DateAdapter } from '@angular/material';
import { ElectronService } from '../../../providers/electron.service';

@Component({
  selector: 'app-new-presentation-dialog',
  templateUrl: './new-presentation-dialog.component.html',
  styleUrls: ['./new-presentation-dialog.component.scss']
})
export class NewPresentationDialogComponent implements OnInit {
  presentation: Presentation;

  constructor(
    public dialogRef: MatDialogRef<NewPresentationDialogComponent>,
    private adapter: DateAdapter<any>,
    private electron: ElectronService,
    @Inject(MAT_DIALOG_DATA) public data?: Presentation
  ) {
    this.presentation = data || {name: '', date: new Date(), modules: []};
  }

  ngOnInit() {
    this.adapter.setLocale(this.electron.remote.app.getLocale());
  }
}
