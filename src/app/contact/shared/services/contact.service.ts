import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/contact-us/contact-us.php';
 // private serverUrl = 'http://localhost/origin/src/application/controllers/index/index.php';


  constructor(private http: HttpClient) { }

  sendMessage(formData) {
    return this.http.post(`${this.baseUrl}`, formData, {responseType: 'text'}).toPromise();
   }
}
