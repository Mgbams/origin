import { TestBed } from '@angular/core/testing';

import { MenService } from './men.service';

describe('MenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenService = TestBed.get(MenService);
    expect(service).toBeTruthy();
  });
});
