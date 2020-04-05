import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public forgetPasswordForm;
  constructor(private formBuilder: FormBuilder) {
    this.forgetPasswordForm = this.formBuilder.group({
      personalEmail: ['']
    });
   }

  ngOnInit() {}

}
