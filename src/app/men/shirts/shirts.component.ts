import { ShirtsService } from './shared/services/shirts.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss'],
})
export class ShirtsComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 8; // Number of products per page

  constructor(
    private shirtsService: ShirtsService
    ) { }

  ngOnInit() {
    this.getMenShirtsProducts();
    this.menShirtsProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database

  getMenShirtsProducts() {
    this.shirtsService
        .getShirts()
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
  this.menShirtsProductsPagination(this.startIndex, this.numPerPage);
}

  menShirtsProductsPagination(startIndex, numPerPage) {
  this.shirtsService
      .getMenShirtsProductsByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
}

}
