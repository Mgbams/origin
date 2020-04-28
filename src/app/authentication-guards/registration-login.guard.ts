import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationLoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    /* if (!this.auth.isLoggedIn) {
      this.router.navigate(['/tabs/tab1']);
    }
    return this.auth.isLoggedIn; */ // for session

    if (this.loginService.isLoggedIn) {
      return true;
    }
    return this.loginService.loggedIn().pipe(map(res => {
      if (res) {
        this.loginService.setLoggedIn(true);
        return true;
      } else {
        this.router.navigate(['/tabs/tab1']);
        return false;
      }
    }));
  }
  
}
