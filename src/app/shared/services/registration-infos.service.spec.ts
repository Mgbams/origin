import { TestBed } from '@angular/core/testing';

import { RegistrationInfosService } from './registration-infos.service';

describe('RegistrationInfosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationInfosService = TestBed.get(RegistrationInfosService);
    expect(service).toBeTruthy();
  });
});
