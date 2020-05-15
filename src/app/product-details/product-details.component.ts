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
  private productsSuggestedToggler = false; // Used to detect when details button of suggested products is clicked
  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
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
     }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('productId');
      if (this.shopService.featuredProductsToggled === true && 
        this.shopService.latestArrivalsToggled === false && this.productsSuggestedToggler === false && 
        productId) {
        this.getFeaturedProductDetails(productId);
      } else if (this.shopService.featuredProductsToggled === false && 
        this.shopService.latestArrivalsToggled === false && this.productsSuggestedToggler === false && 
        productId ){
        this.getProductDetails(productId);
      } else if (this.shopService.latestArrivalsToggled === true && 
        this.shopService.featuredProductsToggled === false && this.productsSuggestedToggler === false && 
        productId ) {
        this.getLatestArrivalsDetails(productId);
      } else if (this.productsSuggestedToggler === true && 
        this.shopService.featuredProductsToggled === false && 
        this.shopService.latestArrivalsToggled === false && productId ) {
        this.getSuggestedProductDetail(productId);
      }
    });
    console.log('featuredtoggle', this.shopService.featuredProductsToggled);
    console.log('arrivals toggled', this.shopService.latestArrivalsToggled);
  }

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

  getProductDetails(productId) {
    this.shopService
        .getAllProducts()
        .then((data: AllProducts[]) => {
          this.productDetails = data;
          this.product = this.productDetails[productId];
          this.getProductsYouMayLike(this.product.category_name, this.product.subcategory_name);
          console.log('The product id is ', productId);
          console.log('this is the product to display', this.product);
          const slicedArray = this.product.image.split(',');
          this.imageArrays.push(slicedArray);
          console.log('productDetails image arrays', this.imageArrays);
    })
        .catch((error) => {
        console.log(error);
      });
  }

  getFeaturedProductDetails(productId) {
    this.featuredProductsService
        .getFeaturedProducts()
        .then((data: AllProducts[]) => {
          this.productDetails = data;
          this.product = this.productDetails[productId];
          this.getProductsYouMayLike(this.product.category_name, this.product.subcategory_name);
          console.log('The product id is ', productId);
          console.log('this is the featuredproduct to display', this.product);
          const slicedArray = this.product.image.split(',');
          this.imageArrays.push(slicedArray);
          console.log('productDetails image arrays', this.imageArrays);
          this.shopService.featuredProductsToggled = false;
    })
        .catch((error) => {
        console.log(error);
      });
  }

  getLatestArrivalsDetails(productId) {
    this.latestArrivalsService
        .getLatestProducts()
        .then((data: AllProducts[]) => {
          this.productDetails = data;
          this.product = this.productDetails[productId];
          this.getProductsYouMayLike(this.product.category_name, this.product.subcategory_name);
          console.log('The product id is ', productId);
          console.log('this is the featuredproduct to display', this.product);
          const slicedArray = this.product.image.split(',');
          this.imageArrays.push(slicedArray);
          console.log('productDetails image arrays', this.imageArrays);
          this.shopService.latestArrivalsToggled = false;
    })
        .catch((error) => {
        console.log(error);
      });
  }

  // Used to get details of products in the Products you might like section
  getSuggestedProductDetail(productId) {
      this.product = this.listsOfSuggestedProducts[productId];
      const slicedArray = this.product.image.split(',');
      console.log('okokokokokokok', this.product);
      console.log('getting data from here', this.listsOfSuggestedProducts);
      this.imageArrays.push(slicedArray);
      this.getProductsYouMayLike(this.product.category_name, this.product.subcategory_name);
      this.productsSuggestedToggler = false;
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

  toggleProductsYouMayLikeDetails() {
    this.productsSuggestedToggler = true;
  }

}
