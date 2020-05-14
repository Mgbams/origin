import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class AddCategoriesService {
  // serverUrl = 'http://localhost/origin/src/application/controllers/';
  private baseUrl = 'http://localhost/origin/src/application/controllers/admin/';

  constructor(private http: HttpClient) { }

  addCategory (category) {
   // return this.http.post(this.serverUrl + 'categories.php', category, {responseType: 'text' }).toPromise();
    return this.http.post(`${this.baseUrl}category/category.php`, category, {responseType: 'text' }).toPromise();
  }
}
