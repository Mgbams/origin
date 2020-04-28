import { TestBed, async, inject } from '@angular/core/testing';

import { CanEnterContactInfoGuard } from './can-enter-contact-info.guard';

describe('CanEnterContactInfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEnterContactInfoGuard]
    });
  });

  it('should ...', inject([CanEnterContactInfoGuard], (guard: CanEnterContactInfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
