import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class AddCategoriesService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/admin/';

  constructor(private http: HttpClient) { }

  addCategory (category) {
    return this.http.post(`${this.baseUrl}category/category.php`, category, {responseType: 'text' }).toPromise();
  }
}
