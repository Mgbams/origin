import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  RegistrationInfosService } from './../shared/services/registration-infos.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  public contactInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationInfo: RegistrationInfosService
    ) {
    // Remember to add validations later
    this.contactInfoForm = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {}

   onSubmit() {
    const userCountry =  this.contactInfoForm.get('country').value;
    const userState =  this.contactInfoForm.get('state').value;
    if (userCountry  === '' || userState === '') {
      return;
    }
    const contactInfos = this.contactInfoForm.value;
    this.registrationInfo.addCustomerInfo(contactInfos);

    // formatting data before pushing to database
    const formdata = {
      dataInfos: this.registrationInfo.customerInfos
    };
    this.sendPostRequest(formdata);
  }

  clickedBackButton() {
    // used to delete last entered data to avoid duplication of data when the back button is clicked
    this.registrationInfo.deleteLastEnteredCustomerInfo();
    this.registrationInfo.accessGranted = true; // granting access to account info page on clicking back button
  }


  sendPostRequest(data) {
     this.registrationInfo.sendtToDatabase(data)
                          .then(res => {
                            console.log(res);
                          })
                          .catch(err => {
                            console.log(err);
                          });
  }

  guardRoute() {
    this.registrationInfo.completedRegistrationAccess = true;
  }

}
