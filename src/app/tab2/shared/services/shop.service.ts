import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Promise< AllProducts[] > {
   // return this.http.get(`${this.baseUrl}get-all-products/get-all-products.php`).toPromise();
    return this.http.get < AllProducts[] >(`http://localhost/origin/src/entity/allproducts.php`).toPromise();
   }
}
