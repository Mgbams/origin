import { AllProducts } from './../../../../shared/models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeansService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/men/';
  constructor(private http: HttpClient) { }

  public getJeans(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-jeans.php`).toPromise();
  }

  public getMenJeansProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}men-jeans-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
}
}
