import { TestBed } from '@angular/core/testing';

import { AccessoiresService } from './accessoires.service';

describe('AccessoiresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessoiresService = TestBed.get(AccessoiresService);
    expect(service).toBeTruthy();
  });
});
