import { WomenService } from './shared/services/women.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss'],
})
export class WomenComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 12; // Number of products per page

  constructor(private womenService: WomenService) { }

  ngOnInit() {
    this.getAllWomenProducts();
    this.allWomenProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database
  getAllWomenProducts() {
      this.womenService
          .getWomen()
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
    this.allWomenProductsPagination(this.startIndex, this.numPerPage);
  }

  allWomenProductsPagination(startIndex, numPerPage) {
    this.womenService
        .getAllWomenProductsByPagination(startIndex, numPerPage)
        .then((data: AllProducts[]) => {
          this.products = data;
    })
      .catch((error) => {
        console.log(error);
    });
  }


}
