import { LatestArrivalsService } from './../shared/services/latest-arrivals.service';
import { ShopService } from './../tab2/shared/services/shop.service';
import { FeaturedProductsService } from './../shared/services/featured-products.service';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from './../shared/models/allProducts';
import { IonSlides, ToastController } from '@ionic/angular';
import {  ProductsYouMayLikeService } from './shared/services/products-you-may-like.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product;
  public productDetails: AllProducts[] = [];
  public imageArrays = [];
  public listsOfSuggestedProducts: AllProducts[] = [];
  public SuggestedProductsImageArrays = []; // Stores suggested products images
  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  @ViewChild('slides3', {static: false}) slides3: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  thirdSlideOpts: any;
  constructor(
    private toastController: ToastController,
    private route: ActivatedRoute,
    private cartService: CartService,
    private featuredProductsService: FeaturedProductsService,
    private shopService: ShopService,
    private productsYouMayLikeService: ProductsYouMayLikeService,
    private latestArrivalsService: LatestArrivalsService
    ) {
      this.slideOpts = {
        initialSlide: 0,
        slidesPerView: 1,
        speed: 800
      };

      this.secondSlideOpts = {
        initialSlide: 0,
        slidesPerView: 4,
        speed: 1000,
        spaceBetween: 10
      };

      this.thirdSlideOpts = {
        initialSlide: 0,
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 10
      };
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('productId');
      if( productId) {
        this.getDetailsOfProducts(productId);
      }
    });
  }

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

  // Used for slides on a lower screen
  slidesDidLoad3(slides3: IonSlides) {
    this.slides3.startAutoplay();
  }

  getDetailsOfProducts(productId) {
    this.shopService
        .getProductById(productId)
        .then((data: AllProducts[]) => {
          this.product = data;
          console.log('product details', this.product);
          this.getProductsYouMayLike(this.product[0].category_name, this.product[0].subcategory_name);
          const slicedArray = this.product[0].image.split(',');
          this.imageArrays.push(slicedArray);
    })
        .catch((error) => {
        console.log(error);
      });
  }

  getProductsYouMayLike(categoryName, subcategoryName) {
    this.productsYouMayLikeService
            .getSuggestedProducts(categoryName, subcategoryName)
            .then((data: AllProducts[]) => {
              this.listsOfSuggestedProducts = data;
              for (let i = 0; i < this.listsOfSuggestedProducts.length; i++) {
                const slicedArray = this.listsOfSuggestedProducts[i].image.split(',');
                this.SuggestedProductsImageArrays.push(slicedArray);
              }
            })
            .catch(error => {
              console.log(error);
            });
  }
  
  addToCart(product) {
    this.cartService.addProduct(product);
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
