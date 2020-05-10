import { AdminService } from './../shared/services/admin.service';
import { AddCategoriesService } from './shared/services/add-categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from './shared/models/category';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
 public categoryPost: Category;
 public error: string;
 // public showPostForm = false;
 public addCategoriesForm;
 public updateButton = false; // Used to enable or disable the update button
 public serverRetrievedCategory: Category; // holds category retrieved for updating


  constructor(
    private formBuilder: FormBuilder,
    private addCategoriesService: AddCategoriesService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.addCategoriesForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const catId = +params.get('id');
      if (catId) {
        this.getCategory(catId);
      }
    });
  }

  onSubmit() {
    if (this.updateButton === false) {
      console.log(this.addCategoriesForm.value);
      this.addCategoriesService.addCategory(this.addCategoriesForm.value)
          .then((data) => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      console.log(this.updateButton);
    // This below code is executed on form submit if the update button is enabled and clicked
    } else if (this.updateButton === true) {
      // this.mapFormValuesToCategoryModel();
      console.log('Pussy cats name', this.serverRetrievedCategory);
      const formData = {
        info: [
          {
          data: this.addCategoriesForm.value,
          id: this.serverRetrievedCategory[0].category_id
          }
        ]
      };
      console.log('formdata is gives as', formData);

      this.adminService.updateCategory(formData)
          .then(data => {
            console.log('its friday guyssssssssssssssssssssssssssssssssss', data);
           // this.router.navigate(['administration-panel']);
          })
          .catch(error => {
            console.log(error);
            console.log('it has always been seeing this error');
          });
    }
    // this.addCategoriesForm.reset();
  }


  getCategory(id: number) {
    this.adminService
        .getCategoryById(id)
        .then((data: Category) => {
        this.editCategory(data);
        this.serverRetrievedCategory = data; // saving retrieved category in a variable
        })
        .catch(error => {
          console.log(error);
        });
  }

  editCategory(data: Category) {
    console.log('i entered here');
    this.addCategoriesForm.patchValue({
      categoryName: data[0].category_name,
      categoryDescription: data[0].category_description
    });
    this.updateButton = true;
    console.log('update button value', this.updateButton);
  }
}
