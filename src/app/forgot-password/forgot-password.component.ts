import { ForgotPasswordService } from './shared/services/forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
          const customerInfos = [];
          const slicedData = data.split(','); // data is given as string so i used split to get an array of strings
          customerInfos.push(slicedData);
          console.log(customerInfos);
          // delete the first 23 items with slice and replace quotation marks with the replace method
          // const token = customerInfos[0][14].slice(23).replace(/^"(.+)"$/,'$1');
          const token = customerInfos[0][7].slice(8).replace(/^"(.+)"$/,'$1');
         // set the reset token in session storage
         // sessionStorage.setItem('resetPasswordToken', token);
          localStorage.setItem('resetPasswordToken', token);
          this.forgetPasswordForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
  }

}
