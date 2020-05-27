import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myAccountService: MyAccountService,
    private loginService: LoginService
  ) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    // console.log('Password form', this.changePasswordForm.value);
    this.updatePassword();
  }

  updatePassword() {
    const formData = this.changePasswordForm.value;
    this.myAccountService
        .updateCustomerPassword(this.loginService.getId(), formData)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  checkPasswordAvailability(event) {
    console.log('value in the blur box', event);
  }

}
