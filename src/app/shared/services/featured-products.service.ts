// This service is called in tab1.page.ts to get featured products for display
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  public getFeaturedProducts(): Promise< AllProducts[] > {
// return this.http.get < AllProducts[] >(`http://localhost/origin/src/entity/featuredproducts.php`).toPromise();
   return this.http.get < AllProducts[] >(`${this.baseUrl}featured-products/featured-products.php`).toPromise();
   }

}
