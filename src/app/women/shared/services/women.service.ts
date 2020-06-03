import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class WomenService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/women/';
  constructor(private http: HttpClient) { }

  public getWomen(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}women.php`).toPromise();
  }

  public getAllWomenProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}women-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
  }
}
