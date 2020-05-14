// This service is called in tab1.page.ts to display the last 12 added products in the database
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class LatestArrivalsService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/latest-arrivals/latest-arrivals.php';
  constructor(private http: HttpClient) { }

  public getLatestProducts(): Promise< AllProducts[] > {
       return this.http.get < AllProducts[] >(`${this.baseUrl}`).toPromise();
       }
}
