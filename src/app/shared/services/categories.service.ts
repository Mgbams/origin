import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategories } from './../models/productCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  public getCategories(): Promise< ProductCategories[] > {
    return this.http.get < ProductCategories[] >
    (`http://localhost/origin/src/entity/categories.php`)
    .toPromise();
   }
}
