import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  RegistrationInfosService } from './../shared/services/registration-infos.service';


@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss'],
})
export class AccountSetupComponent implements OnInit {
  public accountSetupForm: FormGroup;

  // Password toggler variables
  public passwordType = 'password'; // used to toggle password
  public passwordShown = false; // used to toggle password

   // RetyPePassword toggler variables
   public retypePasswordType = 'password'; // used to toggle password
   public retypePasswordShown = false; // used to toggle password
  constructor(
    private formBuilder: FormBuilder,
    private registrationInfo: RegistrationInfosService
    ) {
    this.accountSetupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      retypedEmail: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])],
      retypedPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])]
    });
  }

  ngOnInit() {}

  onSubmit() {
    const enteredEmail =  this.accountSetupForm.get('email').value;
    const confirmedEmail =  this.accountSetupForm.get('retypedEmail').value;
    const enteredPassword =  this.accountSetupForm.get('password').value;
    const confirmedPassword =  this.accountSetupForm.get('retypedPassword').value;
    if (enteredEmail === '' || confirmedEmail === '' || enteredPassword === '' || confirmedPassword === '') {
      return;
    }
    const accountInfos = this.accountSetupForm.value;
    this.registrationInfo.addCustomerInfo(accountInfos);
    console.log('customerinfo', this.registrationInfo.customerInfos);
  }

  guardRoute() {
    this.registrationInfo.accessGranted = true;
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

    // RetypePassword visibility toggle function
    public retypePasswordVisibility() {
      if (this.retypePasswordShown) {
        this.retypePasswordShown = false;
        this.retypePasswordType = 'password';
      } else {
        this.retypePasswordShown = true;
        this.retypePasswordType = 'text';
      }
    }

}
