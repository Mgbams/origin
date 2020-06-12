import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router} from '@angular/router';
import { RegistrationInfosService } from './../shared/services/registration-infos.service';

@Injectable({
  providedIn: 'root'
})
export class CanEnterCompletedRegistrationGuard implements CanActivate {
  constructor(private router: Router, private registrationInfo: RegistrationInfosService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.registrationInfo.completedRegistrationAccess === false) {
        this.router.navigate(['/tabs/tab1']);
        return false;
      }
      return true;
  }
}
