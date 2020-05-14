import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suppliers } from './../models/suppliers';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  getSuppliers(): Promise< Suppliers[] > {
   return this.http.get < Suppliers[] >(`${this.baseUrl}get-all-suppliers/get-all-suppliers.php`).toPromise();
   }

   addSupplier (supplier) {
    return this.http.post (`${this.baseUrl}admin/suppliers/suppliers.php`, supplier, {responseType: 'text' }).toPromise();
  }
}
