import { CountriesService } from './../../shared/services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MONTH } from './shared/models/month';
import { YEAR } from './shared/models/year';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  public paymentsForm: FormGroup;
  public months = MONTH;
  public years = YEAR;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private countriesService: CountriesService
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
    this.countriesService
        .getCategories()
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
  }

  onSubmit() {
    console.log('payments form', this.paymentsForm.value);
  }

}
