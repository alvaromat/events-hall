import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PresentationService } from './presentation.service';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { PresentationViewComponent } from './presentation-view/presentation-view.component';
import { PresentationButtonsComponent } from './presentation-buttons/presentation-buttons.component';
import { NewPresentationDialogComponent } from './new-presentation-dialog/new-presentation-dialog.component';
import { ModulesModule } from '../modules/modules.module';
import { CreateOrOpenTextComponent } from './create-or-open-text.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [SharedModule, AppRoutingModule, ModulesModule],
  declarations: [
    PresentationListComponent,
    NewPresentationDialogComponent,
    PresentationViewComponent,
    PresentationButtonsComponent,
    CreateOrOpenTextComponent
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
