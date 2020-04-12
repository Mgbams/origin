import { ShopService } from './shared/services/shop.service';
import { Component, OnInit  } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {
  // attributes needed for pagination starts here
  public page = 0;
  public resultsCount = 10;
  public totalPages;
    // attributes needed for pagination ends here
  public products: AllProducts[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.shopService
        .getAllProducts()
        .then((data: AllProducts[]) => {
        this.products = data;
        console.log('Display featuredproducts', this.products);
        this.totalPages = this.products.length; // to be changed later
        console.log('total pages', this.totalPages);
        // totalPages = Math.ceil(this.products.length / resultsCount)
    })
      .catch((error) => {
        console.log(error);
    });
  }

  // Pagination code starts here
  nextPage() {
    this.page++;
    this.getAllProducts();
  }

  prevPage() {
    this.page--;
    this.getAllProducts();
  }

  firstPage() {
    this.page = 0;
    this.getAllProducts();
  }

  lastPage() {
    this.page = this.totalPages - 1;
    this.getAllProducts();
  }
}
