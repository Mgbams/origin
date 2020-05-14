import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategories } from './../models/productCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/get-all-categories/get-all-categories.php';

  constructor(private http: HttpClient) {}

  public getCategories(): Promise< ProductCategories[] > {
   // return this.http.get < ProductCategories[] >(`http://localhost/origin/src/entity/categories.php`).toPromise();
    return this.http.get < ProductCategories[] >(`${this.baseUrl}`).toPromise();
   }
}
