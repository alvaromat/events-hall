import { Component, OnInit, Input } from '@angular/core';
import { Presentation } from '../../models/presentation';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PresentationService } from '../../providers/presentation.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-presentation-editor',
  templateUrl: './presentation-editor.component.html',
  styleUrls: ['./presentation-editor.component.scss']
})
export class PresentationEditorComponent implements OnInit {
  @Input() presentation: Presentation;

  constructor(
    private route: ActivatedRoute,
    private presentationService: PresentationService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.presentationService.get(+params.get('id'))
        )
      )
      .subscribe(
        (presentation: Presentation) => (this.presentation = presentation)
      );
  }
}
