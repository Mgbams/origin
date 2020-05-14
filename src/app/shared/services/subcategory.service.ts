import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubCategory } from './../../administration/add-subcategory/shared/models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/get-all-subcategories/get-all-subcategories.php';
  constructor(private http: HttpClient) { }

  public getSubCategories(): Promise< SubCategory[] > {
    return this.http.get < SubCategory[] >(`${this.baseUrl}`).toPromise();
  }
}
