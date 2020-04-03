import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  public contactInfoForm;

  constructor(private formBuilder: FormBuilder) { 
    this.contactInfoForm = this.formBuilder.group({
      country: [''],
      state: [''],
      agreeToTerms: ['']
    });
  }

  ngOnInit() {}

}
