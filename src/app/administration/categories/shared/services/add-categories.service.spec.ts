import { TestBed } from '@angular/core/testing';

import { AddCategoriesService } from './add-categories.service';

describe('AddCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCategoriesService = TestBed.get(AddCategoriesService);
    expect(service).toBeTruthy();
  });
});
