export class VideoSettings {
  source: string;
  muted: boolean;

  constructor(source?: string, muted?: boolean) {
    this.source = source || '';
    this.muted = muted || false;
   }
}
