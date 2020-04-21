import { AddCategoriesService } from './shared/services/add-categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from './shared/models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
 public categoryPost: Category;
 public error: string;
 public showPostForm = false;
 public addCategoriesForm;
  constructor(
    private formBuilder: FormBuilder,
    private addCategoriesService: AddCategoriesService
    ) {
    this.addCategoriesForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.addCategoriesForm.value);
    this.addCategoriesService.addCategory(this.addCategoriesForm.value)
        .then((data) => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    this.addCategoriesForm.reset();
  }
}
