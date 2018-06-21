import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PresentationService } from './presentation.service';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { PresentationViewComponent } from './presentation-view/presentation-view.component';
import { PresentationButtonsComponent } from './presentation-buttons/presentation-buttons.component';
import { NewPresentationDialogComponent } from './new-presentation-dialog/new-presentation-dialog.component';
import { CreateOrOpenTextComponent } from './create-or-open-text.component';
import { AppRoutingModule } from '../app-routing.module';
import { TwitterModule } from '../twitter/twitter.module';
import { VideoPlayerModule } from '../video-player/video-player.module';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  imports: [SharedModule, AppRoutingModule, TwitterModule, VideoPlayerModule, WeatherModule],
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
    PresentationButtonsComponent,
    NewPresentationDialogComponent
  ],
  entryComponents: [NewPresentationDialogComponent],
  providers: [PresentationService]
})
export class PresentationsModule {}
