import { KidsService } from './shared/services/kids.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  public products;

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 8; // Number of products per page

  constructor(private kidsService: KidsService) { }

  ngOnInit() {
    this.getAllKidsProducts();
    this.allKidsProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database
  getAllKidsProducts() {
    this.kidsService
        .getKids()
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
    this.allKidsProductsPagination(this.startIndex, this.numPerPage);
  }

  allKidsProductsPagination(startIndex, numPerPage) {
    this.kidsService
        .getAllKidsProductsByPagination(startIndex, numPerPage)
        .then((data: AllProducts[]) => {
          this.products = data;
    })
      .catch((error) => {
        console.log(error);
    });
  }
}
