import { ShopService } from './../../tab2/shared/services/shop.service';
import { AllProducts } from './../../shared/models/allProducts';
import { Router } from '@angular/router';
import { AdminService } from './../shared/services/admin.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent implements AfterViewInit, OnInit {
  public products: AllProducts[] = []; // for getting all categories
  constructor(
    private adminService: AdminService,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get products from database
   this.getAllProducts();
  }

  getAllProducts() {
    this.shopService
    .getAllProducts()
    .then((data: AllProducts[]) => {
      this.products = data;
      console.log(this.products);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteProduct(productIndex) {
    this.adminService
        . deleteProductById(productIndex)
        .then(data => {
          console.log('Product successfully deleted');
        })
        .catch(error => {
          console.log(error);
        });
  }

  modifyButtonClick(productId: number) {
    this.router.navigate(['/administration-panel/add-products', productId]);
  }

}
