import { TestBed, async, inject } from '@angular/core/testing';

import { RegistrationLoginGuard } from './registration-login.guard';

describe('RegistrationLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationLoginGuard]
    });
  });

  it('should ...', inject([RegistrationLoginGuard], (guard: RegistrationLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
