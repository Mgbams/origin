import { SuppliersService } from './../../shared/services/suppliers.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Suppliers } from './../../shared/models/suppliers';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.scss'],
})
export class EditSuppliersComponent implements AfterViewInit, OnInit {
  public productSuppliers: Suppliers[] = [];

  constructor( private suppliersService: SuppliersService) { }

  ngOnInit() {}
  
  ngAfterViewInit() {
    // Get product Suppliers from database
    this.suppliersService
    .getSuppliers()
    .then((res: Suppliers[]) => {
      this.productSuppliers = res;
      console.log(this.productSuppliers);
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
