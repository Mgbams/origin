import { RegistrationInfosService } from './../shared/services/registration-infos.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanEnterGuard implements CanActivate {

  constructor(private router: Router, private registrationInfo: RegistrationInfosService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.registrationInfo.accessGranted === false) {
      this.router.navigate(['/tabs/tab1']);
      return false;
    }
    return true;
  }
}
