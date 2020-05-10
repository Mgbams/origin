import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { SubCategory } from './../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class AddSubcategoryService {
  serverUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  addSubCategory (subcategory) {
    return this.http.post(this.serverUrl + 'add-sub-category.php', subcategory, {responseType: 'text' }).toPromise();
  }
}
