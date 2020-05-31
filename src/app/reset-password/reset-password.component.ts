import { Password } from './shared/models/password';
import { ResetPasswordService } from './shared/services/reset-password.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public message: Password;
  public resetPasswordForm: FormGroup;

  // Password toggler variables
  public passwordType = 'password'; // used to toggle password
  public passwordShown = false; // used to toggle password

   // RetyPePassword toggler variables
   public retypePasswordType = 'password'; // used to toggle password
   public retypePasswordShown = false; // used to toggle password

  constructor(
    private resetPasswordService: ResetPasswordService,
    private formBuilder: FormBuilder
    ) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])]
    });
   }

  ngOnInit() {}

  onSubmit() {
    const formData = this.resetPasswordForm.value;
    this.resetPasswordService
        .updatePassword(formData)
        .then((data: Password) => {
          console.log(data);
          this.message = data;
          this.resetPasswordForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
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
