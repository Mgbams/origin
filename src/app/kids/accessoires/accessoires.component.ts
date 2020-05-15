import { KidsService } from './../shared/services/kids.service';
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
  constructor(private kidsService: KidsService) { }

  ngOnInit() {
    this.getKidsAccessoires();
  }

  getKidsAccessoires() {
    this.kidsService
        .getAccessoires()
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
