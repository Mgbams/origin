import { LoginService } from './../shared/services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyAccountGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const destination: string = state.url;
      // const productId = route.params.id; // used while adding products to cart
      // To check if the user is not loggedin
      if (!this.loginService.isLoggedIn()) {
        this.router.navigate(['/register-login'], {queryParams: {returnUrl: state.url}});
        return false;
      }

      // If the user is already logged in

      switch (destination) {
        case '/myaccount/email':
        case '/myaccount/password':
        case '/myaccount/payments':
        case '/myaccount/profile':
        case '/myaccount/shipping-address':
        case '/tabs/tab3': {
            if (this.loginService.isLoggedIn()) {
              return true;
           }
            break;
          }

        case '/cart': {
          if (this.loginService.isLoggedIn()) {
            return true;
         }
          break;
        }

        case '/administration-panel/add-products/:id':
        case '/administration-panel/add-subcategory/:id':
        case '/administration-panel/add-suppliers/:id':
        case '/administration-panel/add-categories/:id':
        case '/administration-panel/edit-categories':
        case '/administration-panel/edit-customers':
        case '/administration-panel/edit-products':
        case '/administration-panel/edit-subcategories':
        case '/administration-panel/edit-suppliers':
        case '/administration-panel': {
            if (this.loginService.isLoggedIn() && this.loginService.getUserStatus() === 'Admin') {
              return true;
            }
            break;
          }

        default:
          {
            this.router.navigate(['/tabs/tab1']);
            return false;
          }
      }
  }
}
