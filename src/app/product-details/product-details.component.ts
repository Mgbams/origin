import { FeaturedProductsService } from './../shared/services/featured-products.service';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from './../shared/models/allProducts';
import { IonSlides, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product;
  public productDetails: AllProducts[] = [];
  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  constructor(
    private toastController: ToastController,
    private route: ActivatedRoute,
    private cartService: CartService,
    private featuredProductsService: FeaturedProductsService
    ) {
      this.slideOpts = {
        initialSlide: 0,
        slidesPerView: 1,
        speed: 800
      };

      this.secondSlideOpts = {
        initialSlide: 0,
        slidesPerView: 3,
        speed: 1000
      };
     }

  ngOnInit() {
    this.getFeaturedProducts();
  }

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
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
    // Creating a toast that displays a message when the product is added to the cart
    const toast = this.toastController.create({
      message: product.product_name + ' has been added to your cart',
      position: 'top',
      duration: 2000,
      cssClass: 'toast-bg',
      color: 'success'
    });
    toast.then((toastMessage) => {
      toastMessage.present();
    });
  }

}
