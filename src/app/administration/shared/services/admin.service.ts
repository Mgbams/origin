import { Category } from './../../categories/shared/models/category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from './../models/customers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = 'http://localhost/origin/src/entity/';
  secondUrl = 'http://localhost/origin/src/application/controllers/suppliers/';

  constructor(private http: HttpClient) { }

  getCustomers(): Promise< Customers[] > {
    return this.http.get < Customers[] >(this.serverUrl + 'getCustomers.php').toPromise();
   }

   deleteCustomerById(data) {
    return this.http.delete(`${this.serverUrl}getCustomers.php/?id=` + data ).toPromise();
   }

  getCategoryById(data) {
    // const datas = JSON.stringify({id: data});
    return this.http.get(`${this.serverUrl}admin/getCategoryById.php/?id=` + data ).toPromise();
   }


  deleteCategoryById(data) {
    // const datas = JSON.stringify({id: data});
    return this.http.delete(`${this.serverUrl}admin/deleteCategoryById.php/?id=` + data ).toPromise();
   }

   updateCategory(category) {
    return this.http.put(`${this.serverUrl}admin/category-update.php`, category, {responseType: 'text'}).toPromise();
  }

   /* For supplier */

   getSupplierById(data) {
    return this.http.get(`${this.serverUrl}admin/getSupplierById.php/?id=` + data ).toPromise();
   }

   updateSupplier(supplier) {
    return this.http.put(`${this.secondUrl}getsuppliers.php`, supplier, {responseType: 'text'}).toPromise();
  }

  deleteSupplierById(data) {
    // const datas = JSON.stringify({id: data});
    return this.http.delete(`${this.secondUrl}getsuppliers.php/?id=` + data ).toPromise();
   }


    /* For SubCategory */

   getSubCategoryById(data) {
    return this.http.get(`${this.serverUrl}admin/getSubCategoryById.php/?id=` + data ).toPromise();
   }


  deleteSubCategoryById(data) {
    return this.http.delete(`${this.serverUrl}admin/deleteSubCategoryById.php/?id=` + data ).toPromise();
   }


   updateSubCategory(subCategory) {
    return this.http.put('http://localhost/origin/src/entity/admin/sub-category-update.php', subCategory, {responseType: 'text' }).toPromise();
  }

}
