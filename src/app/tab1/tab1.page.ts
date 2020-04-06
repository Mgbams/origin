import { FeaturedProductsService } from './shared/services/featured-products.service';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { products } from './../../products';
import { FeaturedProducts } from './shared/models/featured-products';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public displayFeaturedProducts: FeaturedProducts[] = [];
  public products = products; // To be deleted once i get data from database
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

    this.getFeaturedProducts(); // modify the position after
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
        .then((data: FeaturedProducts[]) => {
        console.log('Display data', data);
        this.displayFeaturedProducts = data;
        console.log('Display featuredproducts', this.displayFeaturedProducts);
        console.log('welcome', this.displayFeaturedProducts[0].product_name);
    })
      .catch((error) => {
        console.log(error);
    });
  }

}
