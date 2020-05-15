import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/get-all-products/get-all-products.php';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Promise< AllProducts[] > {
   return this.http.get < AllProducts[] >(`${this.baseUrl}`).toPromise();

    // return this.http.get < AllProducts[] >(`http://localhost/origin/src/entity/allproducts.php`).toPromise();
   }
}
