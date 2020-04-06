// This service is called in tab1.page.ts to get featured products for display

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeaturedProducts } from './../models/featured-products';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {

  constructor(private http: HttpClient) { }

  public getFeaturedProducts(): Promise< FeaturedProducts[] > {
    return this.http.get < FeaturedProducts[] >
    (`http://localhost:800/origin/src/entity/featuredproducts.php`)
    .toPromise();
   }
}
