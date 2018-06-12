import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { timer } from 'rxjs/observable/timer';
import { ISubscription } from 'rxjs/Subscription';
import { trigger, state, transition, style, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
  animations: [
    trigger('add', [
      state('in', style({transform: 'translateY(0)', height: '*', padding: '*'})),
      transition(':enter', [
        style({transform: 'translateY(-100%)', height: '0', overflow: 'hidden', padding: '0'}),
        animate('300ms')
      ])
    ])
  ]
})
export class TwitterComponent implements OnInit, OnDestroy {
  @Input() configuration: any;

  twits = new Array<any>();

  newTwits = new Array<any>();

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
      this.twitter.search(this.configuration.items, true, this.calculateBiggestId()).
        subscribe(result => {
          this.newTwits = this.newTwits.concat(result['statuses']);
          this.displayTwit(undefined);
          console.log('Recv new twits');
        });
    });
  }

  calculateBiggestId(): string | number {
    let max = '0';
    if (this.twits.length > 0) {
      this.twits.forEach((twit) => max = twit['id_str'] > max ? twit['id_str'] : max);
      return max;
    } else { return 0; }
  }

  displayTwit(event: AnimationEvent) {
    if (this.newTwits.length > 0) {
      if (event === undefined || event.toState === 'in') {
        this.twits.unshift(this.newTwits.shift());
      }
    }
  }
}
