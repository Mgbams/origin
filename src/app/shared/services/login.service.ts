import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface MyData {
  message: string;
  success: boolean;
}

interface LoggedIn {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = 'http://localhost/origin/src/application/controllers/';
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false'); // for session
   private loggedInStatus = false;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
     this.loggedInStatus = value;
    //  localStorage.setItem('loggedIn', true); // for session
  }

  get isLoggedIn() {
    // return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString()); //for session
    return this.loggedInStatus;
  }


  login(username: string, password: string) {
        return this.http.post<any>(`${this.serverUrl}/users/authenticate`, {username, password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getUserDetails(email, password) {
      return this.http.post(`${this.serverUrl}/users/authenticate`, {email, password});
    }

    getSomeData() {
      return this.http.get<MyData>('api/database.php');
    }

    loggedIn(): Observable<LoggedIn> {
      return this.http.get<LoggedIn>('api/loggedIn.php');
    }


    /*
    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/` + id);
    }
  */
}
