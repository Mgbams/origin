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
  constructor(private menService: MenService) { }

 
  ngOnInit() {
    this.getMenProducts();
  }

  getMenProducts() {
    this.menService
        .getMen()
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
