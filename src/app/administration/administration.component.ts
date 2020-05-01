import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  public page = 0;
 @ViewChild('slides', {static: false}) slides: IonSlides;
 @ViewChild('slides2', {static: false}) slides2: IonSlides;
 slideOpts: any;
 secondSlideOpts: any;

  constructor() {
    this.slideOpts = {
      initialSlide: 0,
    };

    this.secondSlideOpts = {
      initialSlide: 0,
      slidesPerView: 3,
      speed: 1000
    };
   }

  ngOnInit() {}

  selectedTab(index) {
    this.slides.slideTo(index);
  }

  slidesDidLoad2(slides2: IonSlides) {
    this.slides2.startAutoplay();
  }

}
