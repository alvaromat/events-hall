import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PresentationService } from './presentation.service';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { NewPresentationDialogComponent } from './presentation-list/new-presentation-dialog/new-presentation-dialog.component';
import { RouterModule } from '@angular/router';
import { PresentationViewComponent } from './presentation-view/presentation-view.component';
import { PresentationButtonsComponent } from './presentation-buttons/presentation-buttons.component';

@NgModule({
  // TODO: create local router module and configure it
  imports: [SharedModule, RouterModule],
  declarations: [
    PresentationListComponent,
    NewPresentationDialogComponent,
    PresentationViewComponent,
    PresentationButtonsComponent
  ],
  exports: [
    PresentationListComponent,
    PresentationViewComponent,
    PresentationButtonsComponent
  ],
  entryComponents: [NewPresentationDialogComponent],
  providers: [PresentationService] // TODO: Provide PresentationService in root moodule via @Provider.providedIn decorator
})
export class PresentationsModule {}
