import { TestBed, inject } from '@angular/core/testing';

import { ElearningService } from './elearning.service';

describe('ElearningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElearningService]
    });
  });

  it('should be created', inject([ElearningService], (service: ElearningService) => {
    expect(service).toBeTruthy();
  }));
});
