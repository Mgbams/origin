import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  RegistrationInfosService } from './../shared/services/registration-infos.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  public contactInfoForm;

  constructor(private formBuilder: FormBuilder, private registrationInfo: RegistrationInfosService) { 
    // Remember to add validations later
    this.contactInfoForm = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      agreeToTerms: [Validators.required]
    });
  }

  ngOnInit() {}

   onSubmit() {
    let userCountry =  this.contactInfoForm.get('country').value;
    let userState =  this.contactInfoForm.get('state').value;
    if (userCountry  === '' || userState === '') {
      return;
    }
    const contactInfos = this.contactInfoForm.value;
    this.registrationInfo.addCustomerInfo(contactInfos);
    console.log('that is pushed data from CONTACT_INFO',  this.registrationInfo.customerInfos);
  }

  clickedBackButton() {
    // used to delete last entered data to avoid duplication of data when the back button is clicked
    this.registrationInfo.deleteLastEnteredCustomerInfo();
  }

}
