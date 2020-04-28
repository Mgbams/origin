import { TestBed, async, inject } from '@angular/core/testing';

import { CanEnterCompletedRegistrationGuard } from './can-enter-completed-registration.guard';

describe('CanEnterCompletedRegistrationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEnterCompletedRegistrationGuard]
    });
  });

  it('should ...', inject([CanEnterCompletedRegistrationGuard], (guard: CanEnterCompletedRegistrationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
