import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductCategories } from './../shared/models/productCategories';
import {  CategoriesService } from './../shared/services/categories.service';
import { CartService } from './../shared/services/cart.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements  AfterViewInit, OnInit {
  public name: string;
  public categories: ProductCategories[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private cartService: CartService
    ) { }

  ngOnInit() {}

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
