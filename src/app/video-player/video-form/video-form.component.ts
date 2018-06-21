import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { VideoSettings } from '../video-settings';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent implements OnInit, OnDestroy {

  @Input() configuration: any;
  @Output() save = new EventEmitter<null>();

  newVideoType = 'local';

  localVideoName = 'none';
  localVideoPath: string;

  webVideoURL: string;

  constructor() {}

  ngOnInit() {
    if (this.configuration) {
      if (!this.configuration.backgroundColor) { this.configuration.backgroundColor = 'black'; }
      if (!this.configuration.videoList) { this.configuration.videoList = []; }
    }
  }

  ngOnDestroy() {
    this.save.emit();
  }

  validVideo(): boolean {
    if (this.newVideoType === 'local') {
      return this.localVideoPath && this.localVideoPath !== '';
    } else if (this.newVideoType === 'web') {
      return this.webVideoURL && this.webVideoURL.startsWith('http');
    }
  }

  fileChanged(event) {
    if (event.target && event.target.files[0]) {
      this.localVideoName = event.target.files[0].name;
      this.localVideoPath = `file:///${event.target.files[0].path}`;
    }
  }

  addVideo() {
    const newVideo = new VideoSettings();
      newVideo.source = this.newVideoType === 'local'
      ? this.localVideoPath
      : this.webVideoURL;
      this.configuration.videoList.push(newVideo);

    this.save.emit();
    this.resetForm();
  }

  delete(videoToDelete: VideoSettings) {
    this.configuration.videoList = this.configuration.videoList.filter(video => video !== videoToDelete);
    this.save.emit();
  }

  toggleMute(videoToMute: VideoSettings) {
    videoToMute.muted = !videoToMute.muted;
    this.save.emit();
  }

  resetForm() {
    this.localVideoName = 'none';
    this.localVideoPath = undefined;
    this.webVideoURL = undefined;
  }

}
