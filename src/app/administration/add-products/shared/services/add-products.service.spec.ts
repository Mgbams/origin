import { TestBed } from '@angular/core/testing';

import { AddProductsService } from './add-products.service';

describe('AddProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductsService = TestBed.get(AddProductsService);
    expect(service).toBeTruthy();
  });
});
