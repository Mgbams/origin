import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { products } from './../../products'; // to be deleted once database is sorted

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product;
  // localhost:800/origin/src/entity/featuredproducts.php
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,  private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addProductToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
