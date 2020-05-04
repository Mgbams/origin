import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductCategories } from './../../shared/models/productCategories';
import {  CategoriesService } from './../../shared/services/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss'],
})
export class EditCategoriesComponent implements AfterViewInit, OnInit {
  public categories: ProductCategories[] = [];

  constructor(   private categoriesService: CategoriesService) { }

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
