import { AdminService } from './../shared/services/admin.service';
import { Suppliers } from './../../shared/models/suppliers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { SuppliersService } from './../../shared/services/suppliers.service';
import { ActivatedRoute } from '@angular/router';
import {EditSuppliers} from './../shared/models/editSuppliers';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss'],
})
export class AddSupplierComponent implements OnInit {
  public supplierPost: EditSuppliers;
  public error: string;
  public showPostForm = false;
  public addSuppliersForm: FormGroup;
  public updateButton = false;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SuppliersService,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {
    this.addSuppliersForm = this.formBuilder.group({
      companyName:  ['', Validators.required],
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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const suppId = +params.get('id');
      if (suppId) {
        this.getSupplier(suppId);
      }
    });
  }

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

  getSupplier(id: number) {
    this.adminService
        .getSupplierById(id)
        .then((data: EditSuppliers) => {
        console.log('dataaaaa', data);
        this.editSupplier(data);
        console.log('dataaaaa', data);
        })
        .catch(error => {

        });
  }

  editSupplier(data: EditSuppliers) {
    console.log('i entered here');
    this.addSuppliersForm.patchValue({
      companyName: data[0].company_name,
      contactFname: data[0].contact_fname,
      contactlname: data[0].contact_lname,
      contactTitle: data[0].contact_title,
      address: data[0].company_address,
      city: data[0].city,
      postalCode: data[0].postal_code,
      country: data[0].country,
      phone: data[0].phone,
      email: data[0].email,
      customerId: data[0].customer_id
    });
    this.updateButton = true;
  }

}
