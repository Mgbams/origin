import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/forgot-password/forgot-password.php';

  constructor(private http: HttpClient) { }

  public updatePassword(data) {
    return this.http.put (`${this.baseUrl}`,  data, {responseType: 'text'}).toPromise();
   }
}
