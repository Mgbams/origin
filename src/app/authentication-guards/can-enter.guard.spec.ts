import { TestBed, async, inject } from '@angular/core/testing';

import { CanEnterGuard } from './can-enter.guard';

describe('CanEnterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEnterGuard]
    });
  });

  it('should ...', inject([CanEnterGuard], (guard: CanEnterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
