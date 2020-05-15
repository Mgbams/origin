import { KidsService } from './../shared/services/kids.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../../shared/models/allProducts';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss'],
})
export class ShortsComponent implements OnInit {
  public products;
  public imageArrays = [];
  constructor(private kidsService: KidsService) { }

 
  ngOnInit() {
    this.getKidsShorts();
  }

  getKidsShorts() {
    this.kidsService
        .getShorts()
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
