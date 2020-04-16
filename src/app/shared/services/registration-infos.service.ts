import { Injectable, defineInjectable } from '@angular/core';
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

   deleteLastEnteredCustomerInfo() {
    this.customerInfos.pop();
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

/*

// in component.ts
uploadFile(event) {
  let elem = event.target;
  if(elem.files.length > 0 ) {
    console.log(elem.files[0]);
    let formData = new FormData();
    formData.append('file', elem.files[0]);
    this.http.post('http://localhost/script.php', formData)
    .then((data) => {
      console.log('got some data', data);
    }
    );
  }
}

// in html
<label>
upload file
  <div>
    <input type="file" hidden (change)="uploadFile($event)">
  </div>
</label>

// in php file
 header('Access-Control-Allow-Origin: *');
 var_dump($_Files); // just to check if upload worked
 define('PUBLIC_KEY', 'awrfghhjhhh');
 $tempPath = $_FILES['file']['tmp_name'];
 $actualName =  $_FILES['file']['name'];

$actualPath = dirname(_FILE_)."\\temp\\".$actualName;
move_uploaded_file($tempPath, $actualPath);

$ch = curl_init();
$post = [
  'UPLOADCARE_PUB_KEY'=>PUBLIC_KEY,
  'UPLOADCARE_STORE'=> 1,
  'file'=>curl_file_create($actualPath)
]

curl_setopt($ch, CURLOPT_URL, 'https://upload.uploadcare.com/base/');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

$response = curl_exec($ch);

*/