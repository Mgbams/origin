import { SneakersService } from './shared/services/sneakers.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss'],
})
export class SneakersComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 8; // Number of products per page

  constructor(private sneakersService: SneakersService) { }

  ngOnInit() {
    this.getKidsSneakers();
    this.kidsSneakersPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database

  getKidsSneakers() {
    this.sneakersService
        .getSneakers()
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
  this.kidsSneakersPagination(this.startIndex, this.numPerPage);
 }

 kidsSneakersPagination(startIndex, numPerPage) {
  this.sneakersService
      .getKidsSneakersByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
 }

}
