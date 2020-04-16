import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss'],
})
export class AccountSetupComponent implements OnInit {
  public accountSetupForm;
  constructor(private formBuilder: FormBuilder) {
    this.accountSetupForm = this.formBuilder.group({
      email: ['', Validators.required],
      retypedEmail: ['', Validators.required],
      password: ['', Validators.required],
      retypedPassword: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submitted');
  }

}
