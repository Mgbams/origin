import { SubcategoryService } from './../../shared/services/subcategory.service';
import { SubCategory } from './../add-subcategory/shared/models/subcategory';
import { AdminService } from './../shared/services/admin.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.scss'],
})
export class EditSubcategoryComponent implements  AfterViewInit, OnInit {
  public subCategories: SubCategory[] = []; // for getting all subCategories
  constructor(
    private subCategoryService: SubcategoryService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get product categories from database
    this.subCategoryService
        .getSubCategories()
        .then((data: SubCategory[]) => {
          this.subCategories = data;
          console.log(this.subCategories);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  modifyButtonClick(subCategoryId: number) {
    this.router.navigate(['/administration-panel/add-subcategory', subCategoryId]);
  }

  deleteSubCategory(subCatIndex) {
    this.adminService
        . deleteSubCategoryById(subCatIndex)
        .then(data => {
          console.log('Category successfully deleted');
        })
        .catch(error => {
          console.log(error);
        });
  }

}
