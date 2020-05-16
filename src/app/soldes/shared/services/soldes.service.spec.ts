import { TestBed } from '@angular/core/testing';

import { SoldesService } from './soldes.service';

describe('SoldesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldesService = TestBed.get(SoldesService);
    expect(service).toBeTruthy();
  });
});
