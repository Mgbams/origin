import { AllProducts } from './../../../../shared/models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  private baseUrl = 'http://localhost/origin/src/application/controllers/kids/';
  constructor(private http: HttpClient) { }

  public getSneakers(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-sneakers.php`).toPromise();
    }

  public getKidsSneakersByPagination(startPage, numOfProducts): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}kids-sneakers-pagination.php/?start_page=` + startPage + '&num_of_products=' + numOfProducts).toPromise();
  }
}
