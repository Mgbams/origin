import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/forgot-password/forgot-password.php';

  constructor(private http: HttpClient) { }

  public updatePassword(data): Promise<Password> {
    return this.http.put<Password> (`${this.baseUrl}`,  data).toPromise();
   }
}
