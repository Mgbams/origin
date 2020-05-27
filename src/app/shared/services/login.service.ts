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
          this.setId(Users[0].customer_id); // Users[0].first_name
          this.setUserStatus(Users[0].status);
          this.setUserName(Users[0].first_name);
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
  setId(id: string) {
    sessionStorage.setItem('id', id);
  }

  getId() {
    return sessionStorage.getItem('id');
  }

  deleteId() {
    sessionStorage.removeItem('id');
  }

  isLoggedIn() {
    const usertoken = this.getId();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  logout() {
    this.deleteId();
    // add route here
  }

    // UserName
    setUserName(username: string) {
      sessionStorage.setItem('username', username);
    }
    getUserName() {
      return sessionStorage.getItem('username');
    }

    // Status
    setUserStatus(status: string) {
      sessionStorage.setItem('status', status);
    }

    getUserStatus() {
      return sessionStorage.getItem('status');
    }
}
