import { TestBed } from '@angular/core/testing';

import { AddSubcategoryService } from './add-subcategory.service';

describe('AddSubcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSubcategoryService = TestBed.get(AddSubcategoryService);
    expect(service).toBeTruthy();
  });
});
