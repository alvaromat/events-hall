import { TestBed, inject } from '@angular/core/testing';

import { ModuleQuestionsService } from './module-questions.service';

describe('ModuleQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleQuestionsService]
    });
  });

  it('should be created', inject([ModuleQuestionsService], (service: ModuleQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
