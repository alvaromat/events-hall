import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PresentationService } from './presentation.service';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { NewPresentationDialogComponent } from './presentation-list/new-presentation-dialog/new-presentation-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // TODO: create local router module and configure it
  imports: [SharedModule, RouterModule],
  declarations: [PresentationListComponent, NewPresentationDialogComponent],
  exports: [PresentationListComponent],
  entryComponents: [NewPresentationDialogComponent],
  providers: [PresentationService] // TODO: Provide PresentationService in root moodule via @Provider.providedIn decorator
})
export class PresentationsModule {}
