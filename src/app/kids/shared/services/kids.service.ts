import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class KidsService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/kids/';

  constructor(private http: HttpClient) { }

  public getKids(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}kids.php`).toPromise();
  }

  public getAllKidsProductsByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}kids-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
  }

}
