import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { products } from './../../products';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public products = products; // To be deleted once i get data from database
  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChild('slides2', {static: false}) slides2: IonSlides;
  slideOpts: any;
  secondSlideOpts: any;
  constructor() {
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

}
