import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Accept': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationInfosService {
  public customerInfos = [];

  constructor(private http: HttpClient) { }

  addCustomerInfo(details) {
    this.customerInfos.push(details);
  }

  /* create(invoice: Invoice){
    let payload=new FormData();
    payload.append('amount', invoice.amount);
    payload.append('debtor', invoice.debtor);
    payload.append('serial', invoice.serial);
    payload.append('dateout', invoice.dateout);
    payload.append('expiration', invoice.expiration);
    payload.append('invoicefile', invoice.invoicefile);
    return this.http.post('/api/v1/invoices/', invoice, HttpUploadOptions)
  } */

  /* 
    export class Invoice {
    id: any;
    serial: any;
    amount: any;
    debtor: any;
    dateout: any;
    expiration: any;
    fid: any;
    invoicefile: File;
}


  ngOnInit() {
    this.registerForm = new FormGroup({
      serial: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      amount: new FormControl('', [<any>Validators.required, <any>Validators.minLength(4)]),
      debtor: new FormControl('', [<any>Validators.required, <any>Validators.minLength(10)]),
      dateout: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)]),
      expiration: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)]),
    });
  }
  
  */

  getCustomerInfo() {
    return this.customerInfos;
  }

  clearCustomerInfos() {
    this.customerInfos = [];
    return this.customerInfos;
  }
}

/* 
  <!-- app.component.html -->

<div class="container">
    <h1>
      Angular 6 Forms
    </h1>
    <form [formGroup]="angularForm" novalidate>
          <div class="form-group">
              <label>Name:</label>
              <input class="form-control" formControlName="name" type="text">
          </div>
          <div *ngIf="angularForm.controls['name'].invalid && (angularForm.controls['name'].dirty || angularForm.controls['name'].touched)" class="alert alert-danger">
              <div *ngIf="angularForm.controls['name'].errors.required">
                Name is required.
              </div>
          </div>
          <button type="submit"
              [disabled]="angularForm.pristine || angularForm.invalid" class="btn btn-success">
              Save
          </button>
    </form>
    <br />
  </div>
*/
