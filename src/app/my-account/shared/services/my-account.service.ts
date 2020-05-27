import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/myaccount/';

  constructor(private http: HttpClient) { }

  updateCustomerPassword(data, newPassword) {
    return this.http.put(`${this.baseUrl}password-update.php/?id=` + data, newPassword, {responseType: 'text'}).toPromise();
  }

  updateCustomerEmail(data, newEmail) {
    return this.http.put(`${this.baseUrl}email-update.php/?id=` + data, newEmail, {responseType: 'text'}).toPromise();
  }
}
