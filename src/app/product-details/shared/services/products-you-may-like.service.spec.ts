import { TestBed } from '@angular/core/testing';

import { ProductsYouMayLikeService } from './products-you-may-like.service';

describe('ProductsYouMayLikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsYouMayLikeService = TestBed.get(ProductsYouMayLikeService);
    expect(service).toBeTruthy();
  });
});
