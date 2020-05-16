import { LatestArrivalsService } from './../shared/services/latest-arrivals.service';
import { FeaturedProductsService } from './../shared/services/featured-products.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public products: AllProducts[] = [];
  public latestArrivals: AllProducts[] = [];

  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  @ViewChild('slides3', {static: false}) slides3: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  thirdSlideOpts: any;
  imageArrays = [];
  latestArrivalsImageArrays = [];

  constructor(
    private featuredProductsService: FeaturedProductsService,
    private latestArrivalsService: LatestArrivalsService,
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
      slidesPerView: 4,
      spaceBetween: 10
    };
  }

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

  next() {
    this.slides3.slideNext();
  }

  prev() {
    this.slides3.slidePrev();
  }

  ngOnInit() {
    this.getFeaturedProducts();
    this.getLatestArrivedProducts();
  }


  getFeaturedProducts() {
    this.featuredProductsService
        .getFeaturedProducts()
        .then((data: AllProducts[]) => {
        this.products = data;
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

  getLatestArrivedProducts() {
    this.latestArrivalsService
        .getLatestProducts()
        .then((data: AllProducts[]) => {
        this.latestArrivals = data;
        this.latestArrivalsImageArrays = [];
        for (let i = 0; i < this.latestArrivals.length; i++) {
          const slicedArray = this.latestArrivals[i].image.split(',');
          this.latestArrivalsImageArrays.push(slicedArray);
        }
    })
      .catch((error) => {
        console.log(error);
    });
  }

}
