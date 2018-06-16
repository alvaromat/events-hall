import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { ISubscription } from 'rxjs/Subscription';
import { IPlayable } from 'videogular2/src/core/vg-media/i-playable';
import { VideoSettings } from '../video-settings';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  api: VgAPI;
  media: IPlayable;

  @Input() configuration;
  @HostBinding('style.background-color') backgroundColor = 'black';

  videoList: VideoSettings[];
  playingVideo: VideoSettings;

  end$: ISubscription;

  constructor() { }

  ngOnInit() {
    if (this.configuration) {
      this.videoList = this.configuration.videoList || [];
      this.backgroundColor = this.configuration.backgroundColor || 'black';
    }

    if (!this.videoList || this.videoList.length === 0) {
      this.backgroundColor = 'inherited';
    }
  }

  ngOnDestroy() {
    if (this.end$) {
      this.end$.unsubscribe();
    }
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.media = this.api.getDefaultMedia();
    this.playFirst();
  }

  playFirst() {
    this.playingVideo = this.videoList.shift();

    this.end$ = this.media.subscriptions.ended.subscribe(() => this.playNext());
    this.media.subscriptions.canPlay.subscribe(_ => this.media.play());
  }

  playNext() {
    this.videoList.push(this.playingVideo);
    this.playingVideo = this.videoList.shift();
  }
}
