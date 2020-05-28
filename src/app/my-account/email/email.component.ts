import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  public changeEmailForm: FormGroup;
  public EmailErrorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myAccountService: MyAccountService,
    private loginService: LoginService,
    private toastController: ToastController
  ) {
    this.changeEmailForm = this.formBuilder.group({
      currentEmail: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      newEmail: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.minLength(1), Validators.email]]
    });
   }

  ngOnInit() {}

  onSubmit() {
    // console.log('changeEmailForm form', this.changeEmailForm.value);
    this.updateEmail();
  }

  updateEmail() {
    const formData = this.changeEmailForm.value;
    this.myAccountService
        .updateCustomerEmail(this.loginService.getId(), formData)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  checkEmailAvailability(event) {
    if ("" !== this.changeEmailForm.get('currentEmail').value) {
    console.log('value in the blur box', event);
    const currentEmail = this.changeEmailForm.get('currentEmail').value;
    this.myAccountService
        .checkEmailForExistence(this.loginService.getId(), currentEmail)
        .then((data: string) => {
          console.log(data);
          this.EmailErrorMessage = data;
          this.EmailErrorMessage = this.EmailErrorMessage.replace(/^"(.*)"$/, '$1'); // used to replace the quotes around the string
            // Creating a toast that displays a message when the product is added to the cart
          if ("" !== this.EmailErrorMessage) {
                const toast = this.toastController.create({
                message: this.EmailErrorMessage,
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
}
