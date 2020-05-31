import { ForgotPasswordService } from './shared/services/forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ResetEmail } from './shared/models/reset-email';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public forgetPasswordForm: FormGroup;
  public errorMessage;

  constructor(
    private formBuilder: FormBuilder,
    private forgotPasswordService: ForgotPasswordService
    ) {
    this.forgetPasswordForm = this.formBuilder.group({
      personalEmail: ['', [Validators.required, Validators.minLength(1), Validators.email]]
    });
   }

  ngOnInit() {}

  onSubmit() {
    // const formData = this.forgetPasswordForm.get('personalEmail').value;
    this.forgotPasswordService
        .sendPasswordResetLink(this.forgetPasswordForm.value)
        .then(data => {
          console.log(data);
         // this.errorMessage = data;
          this.forgetPasswordForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
  }

}
