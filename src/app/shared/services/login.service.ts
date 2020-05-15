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
  private baseUrl = 'http://localhost/origin/src/application/controllers/login/login.php';
  // private serverUrl = 'http://localhost/origin/src/entity/';
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false'); // for session
  private loggedInStatus = false;
  constructor(private http: HttpClient) {}

  public userlogin(formdata) {
    return this.http
      .post(`${this.baseUrl}`, formdata)
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
 /* setToken(token: string) {
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
  } */

  // Session storage
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem('token');
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

  /* sessionStorage.setItem('id', data.id);
retrieving from the session//
var data = sessionStorage.getItem('id');
console.log(data) to see the id in the console */
}
