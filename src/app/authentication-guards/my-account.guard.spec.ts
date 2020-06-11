import { TestBed, async, inject } from '@angular/core/testing';

import { MyAccountGuard } from './my-account.guard';

describe('MyAccountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAccountGuard]
    });
  });

  it('should ...', inject([MyAccountGuard], (guard: MyAccountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
