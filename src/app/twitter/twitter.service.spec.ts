import { TestBed, inject } from '@angular/core/testing';

import { TwitterService } from './twitter.service';
import { SharedModule } from '../shared/shared.module';

describe('TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterService],
      imports: [SharedModule]
    });
  });

  it('should be created', inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
