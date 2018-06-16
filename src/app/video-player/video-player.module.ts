import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SharedModule } from '../shared/shared.module';
import { VideoFormComponent } from './video-form/video-form.component';

@NgModule({
  imports: [
    SharedModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [VideoPlayerComponent, VideoFormComponent],
  exports: [VideoPlayerComponent, VideoFormComponent]
})
export class VideoPlayerModule { }
