import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  public accountInfoForm;
  constructor(private formBuilder: FormBuilder) { 
    this.accountInfoForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
  }

  ngOnInit() {}

}
