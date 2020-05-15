import { TestBed } from '@angular/core/testing';

import { WomenService } from './women.service';

describe('WomenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WomenService = TestBed.get(WomenService);
    expect(service).toBeTruthy();
  });
});
