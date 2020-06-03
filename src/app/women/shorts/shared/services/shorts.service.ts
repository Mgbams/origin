import { AllProducts } from './../../../../shared/models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortsService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/women/';

  constructor(private http: HttpClient) { }

  public getShorts(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-shorts.php`).toPromise();
 }

  public getWomenShortsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}women-shorts-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
}
}
