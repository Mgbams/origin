import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountriesService } from './../../shared/services/countries.service';
import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss'],
})
export class ShippingAddressComponent implements OnInit {

  public shippingForm: FormGroup;
  public countries;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
    private myAccountService: MyAccountService,
    private loginService: LoginService,
    private toastController: ToastController
  ) {
    this.shippingForm = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.countriesService
        .getCategories()
        .then(data => {
          this.countries = data;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
  }

  onSubmit() {
    // console.log('payments form', this.paymentsForm.value);
    this.updateShippingAddress();
  }


  updateShippingAddress() {
    const formData = this.shippingForm.value;
    this.myAccountService
        .updateShippingAddress(this.loginService.getId(), formData)
        .then((data) => {
          console.log(data);
          const toast = this.toastController.create({
            message: 'Shipping Address successfully updated!!',
            position: 'top',
            duration: 2000,
            cssClass: 'toast-bg',
            color: 'success'
            });
            toast.then((toastMessage) => {
            toastMessage.present();
            });
        })
        .catch((error) => {
          console.log(error);
        });
  }

}
