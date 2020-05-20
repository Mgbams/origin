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
   return this.http.get < AllProducts[] >(`${this.baseUrl}get-all-products/get-all-products.php`).toPromise();
   }

  public getProductById(data) {
    return this.http.get(`${this.baseUrl}product-details-by-id/product-details-by-id.php/?id=` + data ).toPromise();
   }

  /* public getProductForPagination(startPage, numOfProducts) {
    return this.http.get(`${this.baseUrl}paginate/paginate.php/?start_page=` + startPage + '&num_of_products=' +  numOfProducts).toPromise();
   }*/

   public getProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-products-by-pagination/get-products-by-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
    }
}
