import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/men/';

  constructor(private http: HttpClient) { }

  public getMen(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}men.php`).toPromise();
    }

  public getAllMenProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}men-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
  }
}
