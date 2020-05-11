import { Customers } from './../shared/models/customers';
import { AdminService } from './../shared/services/admin.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss'],
})
export class EditCustomersComponent implements AfterViewInit, OnInit {
  public customers: Customers[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get product Suppliers from database
    this.adminService
        .getCustomers()
    .then((res: Customers[]) => {
      this.customers = res;
      console.log(this.customers);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteCustomer(customerIndex) {
    this.adminService
        .deleteCustomerById(customerIndex)
        .then(data => {
          console.log('Customer successfully deleted');
        })
        .catch(error => {
          console.log(error);
        });
  }

}
