import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from './../models/customerInfos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public dataSource = new BehaviorSubject('');
  currentData = this.dataSource.asObservable();

  public statusSource = new BehaviorSubject('');
  loggedInStatus = this.statusSource.asObservable();

  public redirectUrl: string;
  public loggedToAccount = false;
  public user: Users;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  private baseUrl = 'http://localhost/origin/src/application/controllers/login/login.php';
  private myAccountUrl = 'http://localhost/origin/src/application/controllers/myaccount/';

  constructor(private http: HttpClient) {}

  public userlogin(formdata) {
    return this.http
      .post(`${this.baseUrl}`, formdata)
      .pipe(
        // tslint:disable-next-line: no-shadowed-variable
        map(Users => {
          this.setId(Users[0].customer_id); 
          this.setUserStatus(Users[0].status);
          this.setUserName(Users[0].first_name);
          this.getLoggedInName.emit(true);
          this.statusSource.next(this.getUserStatus());
          return Users;
        })
      );
  }

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

   getCustomerInfosById(data): Promise<Users[]> {
    return this.http.get<Users[]>(`${this.myAccountUrl}customer-infos.php/?id=` + data ).toPromise();
   }

   customerLoggedInDetails() {
     this.getCustomerInfosById(this.getId())
          .then(data => {
            console.log(data);
            this.geCustomerDetails(data);
          })
          .catch(err => {
            console.log(err);
          });
   }

   geCustomerDetails(customerDetails) {
    this.dataSource.next(customerDetails);
  }

}
