import { ShopService } from './shared/services/shop.service';
import { Component, OnInit  } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {
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
    })
      .catch((error) => {
        console.log(error);
    });
  }
}
