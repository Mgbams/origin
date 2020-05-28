import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
   public changePasswordForm: FormGroup;
   public passwordErrorMessage: string;
   // Password toggler variables
   public passwordType = 'password'; // used to toggle password
   public passwordShown = false; // used to toggle password

 
  // RetyPePassword toggler variables
   public retypePasswordType = 'password'; // used to toggle password
   public retypePasswordShown = false; // used to toggle password

   // currentPassword toggler variables
   public currentPasswordType = 'password';
   public currentPasswordShown = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myAccountService: MyAccountService,
    private loginService: LoginService,
    private toastController: ToastController
  ) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30)])]
    });
  }

  ngOnInit() {}

  onSubmit() {
    // console.log('Password form', this.changePasswordForm.value);
    this.updatePassword();
  }

  updatePassword() {
    const formData = this.changePasswordForm.value;
    this.myAccountService
        .updateCustomerPassword(this.loginService.getId(), formData)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  checkPasswordAvailability(event) {
    if ("" !== this.changePasswordForm.get('currentPassword').value) {
      const currentPassword = this.changePasswordForm.get('currentPassword').value;
      this.myAccountService
          .checkPasswordForExistence(this.loginService.getId(), currentPassword)
          .then((data: string) => {
            this.passwordErrorMessage = data;
            this.passwordErrorMessage = this.passwordErrorMessage.replace(/^"(.*)"$/, '$1'); // used to replace the quotes around the string
              // Creating a toast that displays a message when the product is added to the cart
            if ("" !== this.passwordErrorMessage) {
                  const toast = this.toastController.create({
                  message: this.passwordErrorMessage,
                  position: 'top',
                  duration: 2000,
                  cssClass: 'toast-bg',
                  color: 'danger'
                  });
                  toast.then((toastMessage) => {
                  toastMessage.present();
                  });
              }
          })
          .catch(err => {
            console.log(err);
          });
    }
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

  // RetypePassword visibility toggle function
  public currentPasswordVisibility() {
    if (this.currentPasswordShown) {
      this.currentPasswordShown = false;
      this.currentPasswordType = 'password';
    } else {
      this.currentPasswordShown = true;
      this.currentPasswordType = 'text';
    }
  }

}
