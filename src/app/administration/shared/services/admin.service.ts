import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './../models/customers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = 'http://localhost/origin/src/entity/';

  constructor(private http: HttpClient) { }

  getCustomers(): Promise< Customers[] > {
    return this.http.get < Customers[] >(this.serverUrl + 'getCustomers.php').toPromise();
   }
}
