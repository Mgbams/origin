import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  RegistrationInfosService } from './../shared/services/registration-infos.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  public accountInfoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private registrationInfo: RegistrationInfosService) { 
    this.accountInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {}

   onSubmit() {
    const fname =  this.accountInfoForm.get('firstName').value;
    const lname =  this.accountInfoForm.get('lastName').value;
    if (fname === '' || lname === '') {
      return;
    }
    const accountInfos = this.accountInfoForm.value;
    this.registrationInfo.addCustomerInfo(accountInfos);
  }

  clickedBackButton() {
    // used to delete last entered data to avoid duplication of data when the back button is clicked
    this.registrationInfo.deleteLastEnteredCustomerInfo();
    this.registrationInfo.accountSetUpAccess = true; // granting access to the previous page
  }

  guardRoute() {
    this.registrationInfo.contactInfoAccess = true;
  }

}
