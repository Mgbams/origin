import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountriesService } from './../../shared/services/countries.service';


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
    private countriesService: CountriesService
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
    console.log('Shipping form', this.shippingForm.value);
  }

}
