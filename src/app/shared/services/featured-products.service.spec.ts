import { TestBed } from '@angular/core/testing';

import { FeaturedProductsService } from './featured-products.service';

describe('FeaturedProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturedProductsService = TestBed.get(FeaturedProductsService);
    expect(service).toBeTruthy();
  });
});
