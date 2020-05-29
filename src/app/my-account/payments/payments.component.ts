import { CountriesService } from './../../shared/services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MONTH } from './shared/models/month';
import { YEAR } from './shared/models/year';
import { LoginService } from './../../shared/services/login.service';
import { MyAccountService } from './../shared/services/my-account.service';
import { ToastController } from '@ionic/angular';
import { ShippingAddress } from '../shared/models/shipping-address';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  public paymentsForm: FormGroup;
  public months = MONTH;
  public years = YEAR;
  public countries;
  public shippingAddress: ShippingAddress[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private myAccountService: MyAccountService,
    private loginService: LoginService,
    private toastController: ToastController
  ) {
    this.paymentsForm = this.formBuilder.group({
      nickName: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      firstName:  ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      cardNo: ['', Validators.required],
      phone: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Loading lists of countries
    this.countriesService
        .getCategories()
        .then(data => {
          this.countries = data;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });

    // Loading the shipping address
    this.myAccountService
        .getShippingAddressById(this.loginService.getId()) 
        .then((data: ShippingAddress[]) => {
          this.shippingAddress = data;
        })
        .catch(err => {
          console.log(err);
        });
  }

  onSubmit() {
    // console.log('payments form', this.paymentsForm.value);
    this.updatePaymentInfos();
  }


  updatePaymentInfos() {
    const formData = this.paymentsForm.value;
    this.myAccountService
        .updatePaymentInfos(this.loginService.getId(), formData)
        .then((data) => {
          console.log(data);
          const toast = this.toastController.create({
          message: 'Card information successfully updated',
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
