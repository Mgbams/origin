import { JeansService } from './shared/services/jeans.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.scss'],
})
export class JeansComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 8; // Number of products per page

  constructor(private jeansService: JeansService) { }

  ngOnInit() {
    this.getWomenJeansProducts();
    this.womenJeansProductsPagination(this.startIndex, this.numPerPage);
  }


  // This function is used to get the total counts of products in my database

  getWomenJeansProducts() {
    this.jeansService.getJeans()
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
  this.womenJeansProductsPagination(this.startIndex, this.numPerPage);
}

  womenJeansProductsPagination(startIndex, numPerPage) {
  this.jeansService.getWomenJeansByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
}


}
