import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { timer } from 'rxjs/observable/timer';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit, OnDestroy {
  @Input() configuration: any;

  twits: Array<any> = new Array();

  private cyclicSearch: ISubscription;

  constructor(private twitter: TwitterService) {}

  ngOnInit() {
    if (this.configuration !== undefined && this.configuration.items !== undefined) {
      this.setUpCyclicSearch();
    }
  }

  ngOnDestroy() {
    if (this.cyclicSearch !== undefined) {
      this.cyclicSearch.unsubscribe();
    }
  }

  setUpCyclicSearch() {
    const refreshInterval = (this.configuration.refreshTime ? this.configuration.refreshTime : 60) * 1000;

    this.cyclicSearch = timer(0, refreshInterval).subscribe(_ => {
      this.twitter.search(this.configuration.items, true, this.twits[0] ? (+this.twits[0]['id'] + 1) : 0 ).
      subscribe(result => this.twits = result['statuses'].concat(this.twits));
    });
  }
}
