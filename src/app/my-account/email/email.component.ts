import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  public changeEmailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myAccountService: MyAccountService,
    private loginService: LoginService
  ) {
    this.changeEmailForm = this.formBuilder.group({
      currentEmail: ['', Validators.required],
      newEmail: ['', Validators.required],
      confirmEmail: ['', Validators.required]
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
    console.log('value in the blur box', event);
  }
}
