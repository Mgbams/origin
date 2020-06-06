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

  public pageActual = 1; // Actual page by default for pagination is page
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 20; // Number of products per page

  constructor(
    private adminService: AdminService,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get products from database
    this.getAllProducts();
    this.allProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database
  getAllProducts() {
    this.shopService
        .getAllProducts()
        .then((data: AllProducts[]) => {
        this.products = data;
        this.totalProducts = this.products.length;
    })
      .catch((error) => {
        console.log(error);
    });
  }

  // changeHandler() and allProductsPagination() functions handle pagination

  changeHandler(pageIndex) {
    this.pageActual = pageIndex;
    this.startIndex = (pageIndex - 1) * this.numPerPage;
    this.allProductsPagination(this.startIndex, this.numPerPage);
  }

   allProductsPagination(startIndex, numPerPage) {
    this.shopService
        .getProductsByPagination(startIndex, numPerPage)
        .then((data: AllProducts[]) => {
          this.products = data;
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
