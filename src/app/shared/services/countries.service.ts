import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/countries/countries.php';

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(`${this.baseUrl}`).toPromise();
   }
}
