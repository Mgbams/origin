import { Suppliers } from './../../shared/models/suppliers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SuppliersService } from './../../shared/services/suppliers.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss'],
})
export class AddSupplierComponent implements OnInit {
  public supplierPost: Suppliers;
  public error: string;
  public showPostForm = false;
  public addSuppliersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SuppliersService
  ) {
    this.addSuppliersForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      contactFname: ['', Validators.required],
      contactlname: ['', Validators.required],
      contactTitle: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      customerId: ['', Validators.required]
    });
   }

  ngOnInit() {}

  onSubmit() {
    console.log(this.addSuppliersForm.value);
    this.supplierService.addSupplier(this.addSuppliersForm.value)
        .then((data) => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    this.addSuppliersForm.reset();
  }

}
