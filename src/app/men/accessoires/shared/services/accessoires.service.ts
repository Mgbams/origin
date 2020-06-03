import { AllProducts } from './../../../../shared/models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessoiresService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/men/';
  constructor(private http: HttpClient) { }

  public getAccessoires(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-accessoires.php`).toPromise();
    }

  public getMenAccessoiresProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}men-accessoires-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
}
}
