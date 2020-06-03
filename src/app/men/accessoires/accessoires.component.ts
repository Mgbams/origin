import { AccessoiresService } from './shared/services/accessoires.service';
import { MenService } from './../shared/services/men.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.scss'],
})
export class AccessoiresComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 12; // Number of products per page

  constructor(
    private menService: MenService,
    private accessoiresService: AccessoiresService
    ) { }

  ngOnInit() {
    this.getMenAccessoiresProducts();
    this.menAccessoiresProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database
  getMenAccessoiresProducts() {
    this.accessoiresService
        .getAccessoires()
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
  this.menAccessoiresProductsPagination(this.startIndex, this.numPerPage);
}

  menAccessoiresProductsPagination(startIndex, numPerPage) {
  this.accessoiresService
      .getMenAccessoiresProductsByPagination(startIndex, numPerPage)
      .then((data: AllProducts[]) => {
        this.products = data;
  })
    .catch((error) => {
      console.log(error);
  });
}

}
