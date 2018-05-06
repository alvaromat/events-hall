import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../providers/presentation.service';
import { Presentation } from '../../models/presentation';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {

  presentations: Presentation[];

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.presentations = this.presentationService.getPresentations();
  }

  create() {

  }

  delete(presentation: Presentation) {

  }

  open(presentation: Presentation) {

  }

}
