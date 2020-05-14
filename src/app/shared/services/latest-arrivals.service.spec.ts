import { TestBed } from '@angular/core/testing';

import { LatestArrivalsService } from './latest-arrivals.service';

describe('LatestArrivalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestArrivalsService = TestBed.get(LatestArrivalsService);
    expect(service).toBeTruthy();
  });
});
