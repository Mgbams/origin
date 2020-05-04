import { LoginService } from './shared/services/login.service';
// import { CartComponent } from './cart/cart.component';
// import { Tab1Page } from './tab1/tab1.page';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { ViewChild } from '@angular/core';
import { ProductCategories } from './shared/models/productCategories';
import {  CategoriesService } from './shared/services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  public name: string;
  public categories: ProductCategories[] = [];
  public loginStatus;

  // @ViewChild( Tab1Page, {static: false}) tab1Page: Tab1Page;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private categoriesService: CategoriesService,
    private cartService: CartService,
    private loginService: LoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.loginStatus = this.loginService.getToken();
  }

  ngAfterViewInit() {
    // Get product categories from database
    this.categoriesService
        .getCategories()
        .then((data: ProductCategories[]) => {
          this.categories = data;
          console.log(this.categories);
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
