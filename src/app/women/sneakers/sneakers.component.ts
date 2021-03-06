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
    this.getwomenSneakersProducts();
    this.womenSneakersProductsPagination(this.startIndex, this.numPerPage);
  }

 
  // This function is used to get the total counts of products in my database

  getwomenSneakersProducts(){
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
  this.womenSneakersProductsPagination(this.startIndex, this.numPerPage);
}

 womenSneakersProductsPagination(startIndex, numPerPage) {
  this.sneakersService
      .getWomenSneakersByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
}
}
