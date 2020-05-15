import { WomenService } from './../shared/services/women.service';
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
  constructor(private womenService: WomenService) { }

  ngOnInit() {
    this.getWomenSneakers();
  }

  getWomenSneakers() {
    this.womenService
        .getSneakers()
        .then((data: AllProducts[]) => {
        this.products = data;
        this.imageArrays = [];
        for (let i = 0; i < this.products.length; i++) {
          const slicedArray = this.products[i].image.split(',');
          this.imageArrays.push(slicedArray);
        }
        console.log('featuredImage Array', this.imageArrays);
        console.log('Display featuredproducts', this.products);
    })
      .catch((error) => {
        console.log(error);
    });
  }
}
