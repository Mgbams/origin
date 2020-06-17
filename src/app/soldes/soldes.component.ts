import { SoldesService } from './shared/services/soldes.service';
import { Component, OnInit } from '@angular/core';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-soldes',
  templateUrl: './soldes.component.html',
  styleUrls: ['./soldes.component.scss'],
})
export class SoldesComponent implements OnInit {
  public products;
  public imageArrays = [];
  constructor(private soldesService: SoldesService) { }

  ngOnInit() {
    this.getAllPromoProducts();
  }

  getAllPromoProducts() {
    this.soldesService
        .getAllSoldes()
        .then((data: AllProducts[]) => {
        this.products = data;
        console.log('soldes products', this.products);
        this.imageArrays = [];
        for (let i = 0; i < this.products.length; i++) {
          const slicedArray = this.products[i].image.split(',');
          this.imageArrays.push(slicedArray);
        }
    })
      .catch((error) => {
        console.log(error);
    });
  }

}
