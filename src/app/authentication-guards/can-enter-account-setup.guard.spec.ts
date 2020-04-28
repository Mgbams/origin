import { TestBed, async, inject } from '@angular/core/testing';

import { CanEnterAccountSetupGuard } from './can-enter-account-setup.guard';

describe('CanEnterAccountSetupGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEnterAccountSetupGuard]
    });
  });

  it('should ...', inject([CanEnterAccountSetupGuard], (guard: CanEnterAccountSetupGuard) => {
    expect(guard).toBeTruthy();
  }));
});
