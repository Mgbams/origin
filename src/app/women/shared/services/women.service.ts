import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProducts } from './../../../shared/models/allProducts';

@Injectable({
  providedIn: 'root'
})
export class WomenService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/women/';
  constructor(private http: HttpClient) { }

  public getAccessoires(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-accessoires.php`).toPromise();
    }

  public getJeans(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}get-jeans.php`).toPromise();
    }

    public getShirts(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}get-shirts.php`).toPromise();
      }
  
    public getShorts(): Promise< AllProducts[] > {
        return this.http.get < AllProducts[] >(`${this.baseUrl}get-shorts.php`).toPromise();
      }

  public getSneakers(): Promise< AllProducts[] > {
    return this.http.get < AllProducts[] >(`${this.baseUrl}get-sneakers.php`).toPromise();
    }

  public getWomen(): Promise< AllProducts[] > {
      return this.http.get < AllProducts[] >(`${this.baseUrl}women.php`).toPromise();
    }
}
