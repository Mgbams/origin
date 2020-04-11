import { FeaturedProductsService } from './../shared/services/featured-products.service';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from './../shared/models/allProducts';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product;
  public productDetails: AllProducts[] = [];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private featuredProductsService: FeaturedProductsService
    ) { }

  ngOnInit() {
    this.getFeaturedProducts();
  }

  getFeaturedProducts() {
    this.featuredProductsService
        .getFeaturedProducts()
        .then((data: AllProducts[]) => {
        this.productDetails = data;
        if (this.route.paramMap) {
          this.route.paramMap.subscribe(params => {
          this.product = this.productDetails[Number(params.get('productId'))];
          });
        }
       // console.log('productDetails', this.productDetails);
       // console.log(this.product);
    })
      .catch((error) => {
        console.log(error);
    });
  }

  addToCart(product) {
    this.cartService.addProductToCart(product);
    console.log('not adding to cart')
  }

}
