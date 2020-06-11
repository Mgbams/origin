import { LoginService } from './../shared/services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyAccountGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      const destination: string = state.url;
      // const productId = route.params.id; // used while adding products to cart
      // To check if the user is not loggedin
      if (!this.loginService.isLoggedIn()) {
        this.router.navigate(['/register-login'], {queryParams: {returnUrl: state.url}});
        return false;
      }

      // If the user is already logged in

      switch (destination) {
        case '/tabs/tab3':
          {
            if (this.loginService.isLoggedIn()) {
              return true;
           }
          }
          break;

        case '/cart':
        {
          if (this.loginService.isLoggedIn()) {
            return true;
         }
        }
        break;

        case '/administration-panel':
          {
            if (this.loginService.isLoggedIn() && this.loginService.getUserStatus() === 'Admin') {
              return true;
            }
          }
          break;

        default:
          {
            this.router.navigate(['/tabs/tab1']);
            return false;
          }
      }
  }
}
