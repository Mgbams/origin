import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationLoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const routeurl: string = state.url;
      return this.isLogin(routeurl);
  }

  isLogin(routeurl: string) {
    if (this.loginService.isLoggedIn() && this.loginService.getUserStatus() === 'Admin') {
      // this.router.navigate(['/administration-panel']);
      return true;
    } else if (this.loginService.isLoggedIn() && this.loginService.getUserStatus() === 'User') {
      this.router.navigate(['/tabs/tab1'], {queryParams: { returnUrl: routeurl }});
    }
    // this.loginService.redirectUrl = routeurl;
    this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl }});
    }
}
