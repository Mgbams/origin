import { RegistrationInfosService } from './../shared/services/registration-infos.service';
import { RegistrationLoginGuard } from './../authentication-guards/registration-login.guard';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration-login',
  templateUrl: './registration-login.component.html',
  styleUrls: ['./registration-login.component.scss'],
})
export class RegistrationLoginComponent implements OnInit {
  public loginRegisterForm: FormGroup;
  public users: any[];
  private returnUrl: string;
  public loading = false;
  public submitted = false;
  public message;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private registrationInfo: RegistrationInfosService
    ) {
    this.loginRegisterForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
    /* this.loginService.getSomeData.subscribe(data => {
      this.message = data.message;
      if(!data.success) {
        localStorage.clearItem('loggedIn');
      }
    }) */



    /* For first guy
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; */
  }

  
  /* userLogin() {
    // get customers from database and store them in users.
     // find if any user matches login credentials
    let filteredUsers = this.users.filter(user => {
        return user.email === this.loginRegisterForm.get('email').value && user.password === this.loginRegisterForm.get('password').value;
      });

    if (filteredUsers.length) {
      // if login details are valid retur user details
      let user = filteredUsers[0];
      let body = {
          id: user.customer_id,
          firstName: user.first_name,
          lastName: user.last_name
      }; 
  }
  */

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginRegisterForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService
        .login(this.loginRegisterForm.get('email').value, this.loginRegisterForm.get('password').value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }


    loginUser(event) {
      event.preventDefault();
      const email = this.loginRegisterForm.get('email').value;
      const password = this.loginRegisterForm.get('password').value;
      this.loginService.getUserDetails(email, password).subscribe(data => {
        if (data) {
          // redirect to a given page like admin page
          this.router.navigate(['contact-info']);
          this.loginService.setLoggedIn(true);
        } else {
          window.alert('wrong');
        }
      });

    }

    guardRoute() {
      this.registrationInfo.accountSetUpAccess = true;
    }
}
