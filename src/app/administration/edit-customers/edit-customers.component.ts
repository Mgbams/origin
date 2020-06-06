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

  public pageActual = 1; // Actual page by default for pagination is page
  public totalCustomers;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 20; // Number of products per page

  constructor(private adminService: AdminService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get customers from database
    this.getAllCustomers();
    this.allCustomersPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of Customers in the database
  getAllCustomers() {
    this.adminService
        .getCustomers()
        .then((res: Customers[]) => {
        this.customers = res;
        this.totalCustomers = this.customers.length;
    })
      .catch((error) => {
        console.log(error);
    });
  }

  // changeHandler() and allProductsPagination() functions handle pagination

  changeHandler(pageIndex) {
    this.pageActual = pageIndex;
    this.startIndex = (pageIndex - 1) * this.numPerPage;
    this.allCustomersPagination(this.startIndex, this.numPerPage);
  }

  allCustomersPagination(startIndex, numPerPage) {
    this.adminService
        .getCustomersByPagination(startIndex, numPerPage)
        .then((res: Customers[]) => {
        this.customers = res;
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
