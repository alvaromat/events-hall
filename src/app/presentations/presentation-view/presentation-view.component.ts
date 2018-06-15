import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { Presentation } from '../presentation';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PresentationService } from '../presentation.service';
import { Module } from '../module';

@Component({
  selector: 'app-presentation-view',
  templateUrl: './presentation-view.component.html',
  styleUrls: ['./presentation-view.component.scss']
})
export class PresentationViewComponent implements OnInit, OnDestroy {
  presentation: Presentation;
  editing: boolean;

  get cols() {
    const modules = this.presentation.modules.length;
    if (modules === 1) { return 1; }
    if (modules <= 4) { return 2; } else { return 3; }
  }

  constructor(
    private route: ActivatedRoute,
    private presentationService: PresentationService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        tap(params => this.editing = Boolean(params.get('editing'))),
        switchMap(params => this.presentationService.get(+params.get('id')))
      )
      .subscribe(presentation => this.presentation = presentation);
  }

  ngOnDestroy() {
    this.save();
  }

  rowspan(index: number): number {
    const modules = this.presentation.modules.length;

    const isLastColumnOfFirstRow = (index + 1) === this.cols;
    const moreThanOneModule = modules > 1;
    const oddModules = modules % 2 === 1;
    const shouldExpand = oddModules && moreThanOneModule && isLastColumnOfFirstRow;

    if (shouldExpand) {
      return 2;
    } else {
      return 1;
    }
  }

  remove(moduleToRemove: Module) {
    this.presentation.modules = this.presentation.modules.filter((module: Module) => module !== moduleToRemove);
    this.save();
  }

  save() {
    this.presentationService.update(this.presentation).subscribe();
  }
}
