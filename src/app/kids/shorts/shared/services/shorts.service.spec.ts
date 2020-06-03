import { TestBed } from '@angular/core/testing';

import { ShortsService } from './shorts.service';

describe('ShortsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortsService = TestBed.get(ShortsService);
    expect(service).toBeTruthy();
  });
});
