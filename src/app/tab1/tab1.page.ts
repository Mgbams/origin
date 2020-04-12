import { FeaturedProductsService } from './../shared/services/featured-products.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
// import { products } from './../../products';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public products: AllProducts[] = [];
  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  constructor(private featuredProductsService: FeaturedProductsService) {
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

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

  ngOnInit() {
    this.getFeaturedProducts();
  }


  getFeaturedProducts() {
    this.featuredProductsService
        .getFeaturedProducts()
        .then((data: AllProducts[]) => {
        this.products = data;
        console.log('Display featuredproducts', this.products);
    })
      .catch((error) => {
        console.log(error);
    });
  }

  filterProductDetails() {

  }

}
