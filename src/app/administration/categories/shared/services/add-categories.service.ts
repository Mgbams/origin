import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class AddCategoriesService {
  serverUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  addCategory (category) {
    return this.http.post(this.serverUrl + 'categories.php', category, {responseType: 'text' }).toPromise();
  }
}

/* const httpOptions = {
    headers: new HttpHeaders({
//  'Accept': 'text/plain, * / *',
// 'Content-Type': 'application/json'
// }),
// responseType: 'text' as 'json' // we accept plain text as response
 // }
*/
