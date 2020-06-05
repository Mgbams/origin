import { MenService } from './shared/services/men.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
  public products;
  public imageArrays = [];

  public pageActual = 1; // Actual page by default for pagination is page 
  public totalProducts;
  public startIndex = 0; // default startIndex value used for getting items from database
  public numPerPage = 12; // Number of products per page

  constructor(private menService: MenService) { }

  ngOnInit() {
    this.getAllMenProducts();
    this.allMenProductsPagination(this.startIndex, this.numPerPage);
  }

  // This function is used to get the total counts of products in my database
  getAllMenProducts() {
    this.menService
        .getMen()
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
    this.allMenProductsPagination(this.startIndex, this.numPerPage);
  }

  allMenProductsPagination(startIndex, numPerPage) {
    this.menService
        .getAllMenProductsByPagination(startIndex, numPerPage)
        .then((data: AllProducts[]) => {
          this.products = data;
    })
      .catch((error) => {
        console.log(error);
    });
  }

}
