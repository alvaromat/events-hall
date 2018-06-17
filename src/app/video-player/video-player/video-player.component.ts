import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  HostBinding
} from '@angular/core';
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

  videoList = new Array<VideoSettings>();
  playingVideo: VideoSettings;

  end$: ISubscription;

  private anyVideo = false;

  constructor() {}

  ngOnInit() {
    if (this.configuration) {
      if (this.configuration.videoList) {
        Object.assign(this.videoList, this.configuration.videoList);
      }
      this.backgroundColor = this.configuration.backgroundColor || 'black';
      this.anyVideo = this.videoList.length > 0;
    }

    if (!this.videoList || this.videoList.length === 0) {
      this.backgroundColor = '';
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
    this.media.subscriptions.error.subscribe(_ =>
      this.handleUnplayableVideoError()
    );
    this.media.subscriptions.canPlay.subscribe(_ => this.media.play());
  }

  playNext() {
    this.videoList.push(this.playingVideo);
    this.playingVideo = this.videoList.shift();
  }

  handleUnplayableVideoError() {
    this.anyVideo = this.videoList.length > 0;
    if (this.anyVideo) {
      this.playingVideo = this.videoList.shift();
      this.media.subscriptions.error.subscribe(_ =>
        this.handleUnplayableVideoError()
      );
      this.media.subscriptions.canPlay.subscribe(_ => this.media.play());
    } else {
      this.backgroundColor = '';
    }
  }
}
