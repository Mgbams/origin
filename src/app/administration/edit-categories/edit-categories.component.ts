import { Category } from './../categories/shared/models/category';
import { AdminService } from './../shared/services/admin.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductCategories } from './../../shared/models/productCategories';
import {  CategoriesService } from './../../shared/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss'],
})
export class EditCategoriesComponent implements AfterViewInit, OnInit {
  public categories: ProductCategories[] = []; // for getting all categories

  constructor(
    private categoriesService: CategoriesService,
    private adminService: AdminService,
    private router: Router
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

  modifyButtonClick(categoryId: number) {
    this.router.navigate(['/administration-panel/add-categories', categoryId]);
  }

  deleteCategory(catIndex) {
    this.adminService
        . deleteCategoryById(catIndex)
        .then(data => {
          console.log('Category successfully deleted');
        })
        .catch(error => {
          console.log(error);
        });
  }

}
