import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/forgot-password/forgot-password.php';

  constructor(private http: HttpClient) { }

   public sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}`,  data, {responseType: 'text'}).toPromise();
   }



}
