import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountriesService } from './../../shared/services/countries.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public countries;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required]
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
    console.log('error error');
    console.log('profile form', this.profileForm.value);
  }

}
