import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubCategory } from './../../administration/add-subcategory/shared/models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  public getSubCategories(): Promise< SubCategory[] > {
    return this.http.get < SubCategory[] >
    (`http://localhost/origin/src/entity/getSubCategories.php`)
    .toPromise();
   }
}
