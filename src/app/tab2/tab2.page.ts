import { ShopService } from './shared/services/shop.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';
// import fade in animation
import { slideInOutAnimation } from './../animations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  // make fade in animation available to this component
  animations: [slideInOutAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class Tab2Page implements OnInit, AfterViewInit {
  public products: AllProducts[] = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 12; // Number of products per page

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.getAllProducts();
    this.allProductsPagination(this.startIndex, this.numPerPage);
  }

  ngAfterViewInit() {}

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

}
