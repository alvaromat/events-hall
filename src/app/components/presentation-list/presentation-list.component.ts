import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../providers/presentation.service';
import { Presentation } from '../../models/presentation';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {

  presentations: Presentation[];

  constructor(private presentationService: PresentationService, private electronService: ElectronService) { }

  ngOnInit() {
    this.presentations = this.presentationService.getPresentations();
    this.electronService.remote.getCurrentWindow().setResizable(false);
    // TODO: check if it executes when closing a presentation
  }

  create() {

  }

  delete(presentation: Presentation) {
    if (this.presentationService.delete(presentation)) {
      this.presentations = this.presentations.filter(p => p !== presentation);
    }
  }

  open(presentation: Presentation) {

  }

}
