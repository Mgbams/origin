import { ForgotPasswordService } from './shared/services/forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public forgetPasswordForm;
  constructor(
    private formBuilder: FormBuilder,
    private forgotPasswordService: ForgotPasswordService
    ) {
    this.forgetPasswordForm = this.formBuilder.group({
      personalEmail: ['']
    });
   }

  ngOnInit() {}

  onSubmit() {
    this.forgotPasswordService
        .sendPasswordResetLink(this.forgetPasswordForm)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
  }

  handleResponse(res) {
    this.forgetPasswordForm.reset();
  }

}
