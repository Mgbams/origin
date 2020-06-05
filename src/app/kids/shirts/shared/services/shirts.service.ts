import { AllProducts } from './../../../../shared/models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShirtsService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/kids/';
  constructor(private http: HttpClient) { }

  public getShirts(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-shirts.php`).toPromise();
  }

  public getKidsShirtsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}kids-shirts-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
}
}
