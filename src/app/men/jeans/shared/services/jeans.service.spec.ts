import { TestBed } from '@angular/core/testing';

import { JeansService } from './jeans.service';

describe('JeansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeansService = TestBed.get(JeansService);
    expect(service).toBeTruthy();
  });
});
