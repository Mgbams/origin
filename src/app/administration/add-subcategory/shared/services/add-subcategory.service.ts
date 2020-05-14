import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddSubcategoryService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/admin/subcategories/subcategories.php';

  constructor(private http: HttpClient) { }

  addSubCategory (subcategory) {
    return this.http.post(`${this.baseUrl}`, subcategory, {responseType: 'text' }).toPromise();
  }
}
