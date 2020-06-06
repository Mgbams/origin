import { ShortsService } from './shared/services/shorts.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss'],
})
export class ShortsComponent implements OnInit {
  public products;

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 8; // Number of products per page

  constructor(private shortsService: ShortsService) { }

  ngOnInit() {
    this.getMenShortsProducts();
    this.menShortsProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database

  getMenShortsProducts() {
    this.shortsService
        .getShorts()
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
  this.menShortsProductsPagination(this.startIndex, this.numPerPage);
 }

  menShortsProductsPagination(startIndex, numPerPage) {
  this.shortsService
      .getMenShortsProductsByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
 }
 
}
