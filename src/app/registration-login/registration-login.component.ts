import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-login',
  templateUrl: './registration-login.component.html',
  styleUrls: ['./registration-login.component.scss'],
})
export class RegistrationLoginComponent implements OnInit {
  public loginRegisterForm;
  constructor(private formBuilder: FormBuilder) {
    this.loginRegisterForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {}

}
