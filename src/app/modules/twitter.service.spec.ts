import { TestBed, inject } from '@angular/core/testing';

import { TwitterService } from './twitter.service';
import { HttpClient } from '@angular/common/http';
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

  it('should generate bearer token correctly', inject([TwitterService], (service: TwitterService) => {
    const token = service.getBearerTokenCredentials('xvz1evFS4wEEPTGEFPHBog', 'L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg');
    expect(token).toBe('eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJnNmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw==');
    service.getBearerToken(token).subscribe((response) => console.log(response));
  }));
});
