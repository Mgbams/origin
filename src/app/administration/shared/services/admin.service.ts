import { Category } from './../../categories/shared/models/category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  getCategoryById(data) {
    // const datas = JSON.stringify({id: data});
    return this.http.get(`${this.serverUrl}admin/getCategoryById.php/?id=` + data ).toPromise();
   }


  deleteCategoryById(data) {
    // const datas = JSON.stringify({id: data});
    return this.http.delete(`${this.serverUrl}admin/deleteCategoryById.php/?id=` + data ).toPromise();
   }

   /* updateCategory(category, id) {
    const httpOptions = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Headers': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Accept,Accept-Language,Content-Language,Content-Type',
      'Content-Type': 'multipart/form-data'
       });

    const options = { headers: httpOptions };
    return this.http.put(`${this.serverUrl}admin/categoryUpdate.php/?id=` + id, category, options).toPromise();
   }*/

   updateCategory(category) {
    return this.http.put('http://localhost/origin/src/entity/admin/categoryUpdate.php', category, {responseType: 'json'}).toPromise();
  }

   /* For supplier */

   getSupplierById(data) {
    return this.http.get(`${this.serverUrl}admin/getSupplierById.php/?id=` + data ).toPromise();
   }


    /* For SubCategory */

   getSubCategoryById(data) {
    return this.http.get(`${this.serverUrl}admin/getSubCategoryById.php/?id=` + data ).toPromise();
   }


  deleteSubCategoryById(data) {
    return this.http.delete(`${this.serverUrl}admin/deleteSubCategoryById.php/?id=` + data ).toPromise();
   }


   updateSubCategory(subCategory) {
    return this.http.put('http://localhost/origin/src/entity/admin/subcategoryUpdate.php', subCategory, {responseType: 'json'}).toPromise();
  }

}
