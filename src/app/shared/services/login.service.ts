import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from './../models/customerInfos';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public redirectUrl: string;
  public user: Users;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  private serverUrl = 'http://localhost/origin/src/entity/';
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false'); // for session
  private loggedInStatus = false;
  constructor(private http: HttpClient) {}

  public userlogin(formdata) {
    return this.http
      .post(this.serverUrl + 'login.php', formdata)
      .pipe(
        // tslint:disable-next-line: no-shadowed-variable
        map(Users => {
          this.setToken(Users[0].first_name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  // token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  logout() {
    this.deleteToken();
    // add route here
  }
}
