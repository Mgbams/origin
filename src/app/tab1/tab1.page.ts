import { SoldesService } from './../soldes/shared/services/soldes.service';
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
  public promoProduct;

  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  @ViewChild('slides3', {static: false}) slides3: IonSlides;
  @ViewChild('slides4', {static: false}) slides4: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  thirdSlideOpts: any;
  fourthSlideOpts: any;
  imageArrays = [];
  latestArrivalsImageArrays = [];
  promoImageArrays = [];

  constructor(
    private featuredProductsService: FeaturedProductsService,
    private latestArrivalsService: LatestArrivalsService,
    private soldesService: SoldesService
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

    this.fourthSlideOpts = {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 10
    };
  }

  slidesDidLoad(slides: IonSlides) {
    this.slides.startAutoplay();
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

  // used for third slide
  next() {
    this.slides3.slideNext();
  }

  prev() {
    this.slides3.slidePrev();
  }

  // used for fourth slide
  nextForFourthSlide() {
    this.slides4.slideNext();
  }

  prevForFourthSlide() {
    this.slides4.slidePrev();
  }

  ngOnInit() {
    this.getFeaturedProducts();
    this.getLatestArrivedProducts();
    this.getSinglePromoProduct();
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

  getSinglePromoProduct() {
    this.soldesService
        .getSingleSolde()
        .then((data: AllProducts[]) => {
        this.promoProduct = data;
        console.log('single promo product', this.promoProduct);
        const slicedArray = this.promoProduct[0].image.split(',');
        this.promoImageArrays.push(slicedArray);
        console.log('promo Image is', this.promoImageArrays);
    })
      .catch((error) => {
        console.log(error);
    });
  }

}
