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
  constructor(
    private formBuilder: FormBuilder, 
    private registrationInfo: RegistrationInfosService
    ) {
    this.accountSetupForm = this.formBuilder.group({
      email: ['', Validators.required],
      retypedEmail: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])],
      retypedPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])]
    });
  }

  ngOnInit() {}

  onSubmit() {
    let enteredEmail =  this.accountSetupForm.get('email').value;
    let confirmedEmail =  this.accountSetupForm.get('retypedEmail').value;
    let enteredPassword =  this.accountSetupForm.get('password').value;
    let confirmedPassword =  this.accountSetupForm.get('retypedPassword').value;
    if (enteredEmail === '' || confirmedEmail === '' || enteredPassword === '' || confirmedPassword === '') {
      return;
    }
    const accountInfos = this.accountSetupForm.value;
    this.registrationInfo.addCustomerInfo(accountInfos);
  }

}
