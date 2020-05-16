import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class SoldesService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/promo/';

  constructor(private http: HttpClient) { }

  public getSingleSolde(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}single-promo.php`).toPromise();
  }

  public getAllSoldes(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}all-promo.php`).toPromise();
  }
}
