import { SubCategory } from './shared/models/subcategory';
import { AddSubcategoryService } from './shared/services/add-subcategory.service';
import { AdminService } from './../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss'],
})
export class AddSubcategoryComponent implements OnInit {

 public error: string;
 public addSubCategoriesForm;
 public updateButton = false; // Used to enable or disable the update button
 public serverRetrievedSubCategory: SubCategory; // holds subCategory retrieved for updating

  constructor(
    private formBuilder: FormBuilder,
    private addSubCategoryService: AddSubcategoryService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.addSubCategoriesForm = this.formBuilder.group({
      subcategoryName: ['', Validators.required],
      subcategoryDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subCatId = +params.get('id');
      if (subCatId) {
        this.getSubCategory(subCatId);
      }
    });
  }

  onSubmit() {
    if (!this.serverRetrievedSubCategory) {
      console.log(this.addSubCategoriesForm.value);
      this.addSubCategoryService.addSubCategory(this.addSubCategoriesForm.value)
          .then((data) => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      console.log(this.updateButton);
      this.addSubCategoriesForm.reset();
    // This below code is executed on form submit if the update button is enabled and clicked
    } else if (this.updateButton === true) {
      console.log('Pussy cats name', this.serverRetrievedSubCategory);
      const formData = {
        info: [
          {
          data: this.addSubCategoriesForm.value,
          id: this.serverRetrievedSubCategory[0].subcategory_id
          }
        ]
      };
      console.log('formdata is gives as', formData);

      this.adminService.updateSubCategory(formData)
          .then(data => {
            console.log('its friday guyssssssssssssssssssssssssssssssssss', data);
           // this.router.navigate(['administration-panel']);
            this.addSubCategoriesForm.reset();
          })
          .catch(error => {
            console.log(error);
            console.log('it has always been seeing this error');
          });
    }
  }


  getSubCategory(id: number) {
    this.adminService.getSubCategoryById(id)
        .then((data: SubCategory) => {
        this.editSubCategory(data);
        this.serverRetrievedSubCategory = data; // saving retrieved category in a variable
        })
        .catch(error => {
          console.log(error);
        });
  }

  editSubCategory(data: SubCategory) {
    console.log('i entered here');
    this.addSubCategoriesForm.patchValue({
      subcategoryName: data[0].subcategory_name,
      subcategoryDescription: data[0].subcategory_description
    });
    this.updateButton = true;
    console.log('update button value', this.updateButton);
  }
}
