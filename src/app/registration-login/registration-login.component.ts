import { RegistrationInfosService } from './../shared/services/registration-infos.service';
import { RegistrationLoginGuard } from './../authentication-guards/registration-login.guard';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {  Users } from './../shared/models/customerInfos';

@Component({
  selector: 'app-registration-login',
  templateUrl: './registration-login.component.html',
  styleUrls: ['./registration-login.component.scss'],
})
export class RegistrationLoginComponent implements OnInit {
  public loginRegisterForm: FormGroup;
  private returnUrl: string;
  public loading = false;
  public message;
  public passwordType = 'password'; // used to toggle password
  public passwordShown = false; // used to toggle password
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private registrationInfo: RegistrationInfosService
    ) {
    this.loginRegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

    guardRoute() {
      this.registrationInfo.accountSetUpAccess = true;
    }

    // Password visibility toggle function 
    public togglePasswordVisibility() {
      if (this.passwordShown) {
        this.passwordShown = false;
        this.passwordType = 'password';
      } else {
        this.passwordShown = true;
        this.passwordType = 'text';
      }
    }

    postdata(form) {
      this.loading = true;
      // console.log(form.value.email);
      // console.log(form.value.password);

      const formdata = {
        data: [
          {
            email: form.value.email
          },
          {
            password: form.value.password
          }
        ]
      };

      this.loginService.userlogin(formdata)
          .pipe(first())
          .subscribe(data => {
            this.loading = false;
            this.router.navigate(['cart']);
          },
            error => {
              console.log(error);
          }
          );
      }

      get email() {
        return this.loginRegisterForm.get('email');
      }

      get password() {
        return this.loginRegisterForm.get('password');
      }
}
