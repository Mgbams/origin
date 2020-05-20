import { Category } from './../../categories/shared/models/category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from './../models/customers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/admin/';

  constructor(private http: HttpClient) { }

  getCustomers(): Promise< Customers[] > {
    return this.http.get < Customers[] >(`${this.baseUrl}customers/customers.php`).toPromise();
   }

   deleteCustomerById(data) {
    return this.http.delete(`${this.baseUrl}customers/customers.php/?id=` + data ).toPromise();
   }

  getCategoryById(data) {
    return this.http.get(`${this.baseUrl}category/category.php/?id=` + data ).toPromise();
   }


  deleteCategoryById(data) {
    return this.http.delete(`${this.baseUrl}category/category.php/?id=` + data ).toPromise();
   }

   updateCategory(category) {
   return this.http.put(`${this.baseUrl}category/category.php`, category, {responseType: 'text'}).toPromise();
  }

   /* For supplier */

   getSupplierById(data) {
    return this.http.get(`${this.baseUrl}suppliers/suppliers.php/?id=` + data ).toPromise();
   }

   updateSupplier(supplier) {
    return this.http.put(`${this.baseUrl}suppliers/suppliers.php`, supplier, {responseType: 'text'}).toPromise();
  }

  deleteSupplierById(data) {
    return this.http.delete(`${this.baseUrl}suppliers/suppliers.php/?id=` + data ).toPromise();
   }


    /* For SubCategory */

   getSubCategoryById(data) {
    return this.http.get(`${this.baseUrl}subcategories/subcategories.php/?id=` + data ).toPromise();
   }


  deleteSubCategoryById(data) {
    return this.http.delete(`${this.baseUrl}subcategories/subcategories.php/?id=` + data ).toPromise();
   }


   updateSubCategory(subCategory) {
    return this.http.put(`${this.baseUrl}subcategories/subcategories.php`, subCategory, {responseType: 'text' }).toPromise();
  }

  /* Products http requests */
  deleteProductById(data) {
    return this.http.delete(`${this.baseUrl}products/products.php/?id=` + data ).toPromise();
   }

   getProductById(data) {
    return this.http.get(`${this.baseUrl}products/products.php/?id=` + data ).toPromise();
   }

   updateProduct(product) {
    return this.http.put(`${this.baseUrl}products/products.php`, product, {responseType: 'text'}).toPromise();
   }

}
