import { TestBed } from '@angular/core/testing';

import { SneakersService } from './sneakers.service';

describe('SneakersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SneakersService = TestBed.get(SneakersService);
    expect(service).toBeTruthy();
  });
});
