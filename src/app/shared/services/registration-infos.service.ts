import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationInfosService {
  public customerInfos = [];
  public accessGranted = false;
  public accountSetUpAccess = false;
  public contactInfoAccess  = false;
  public completedRegistrationAccess = false;
  serverUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) { }

  addCustomerInfo(details) {
    this.customerInfos.push(details);
  }

   deleteLastEnteredCustomerInfo() {
    this.customerInfos.pop();
  }

  public sendtToDatabase(data) {
   return this.http
              .post(this.serverUrl + 'user-registration.php', data, {responseType: 'text'})
              .toPromise();
   }

  getCustomerInfo() {
    return this.customerInfos;
  }

  clearCustomerInfos() {
    this.customerInfos = [];
    return this.customerInfos;
  }
}
