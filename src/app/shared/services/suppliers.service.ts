import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suppliers } from './../models/suppliers';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  serverUrl = 'http://localhost/origin/src/application/controllers/suppliers/';

  constructor(private http: HttpClient) { }

  getSuppliers(): Promise< Suppliers[] > {
    return this.http.get < Suppliers[] >(this.serverUrl + 'getsuppliers.php').toPromise();
   }

   addSupplier (supplier) {
    return this.http.post(this.serverUrl + 'postsupplier.php', supplier, {responseType: 'text' }).toPromise();
  }
}
