import { Suppliers } from './../../shared/models/suppliers';
import { SuppliersService } from './../../shared/services/suppliers.service';
import { CategoriesService } from './../../shared/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductCategories } from './../../shared/models/productCategories';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss'],
})
export class AddProductsComponent implements OnInit {
  public addProductfoForm;
  public productCategories: ProductCategories[] = [];
  public productSuppliers: Suppliers[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private suppliersService: SuppliersService
    ) { 
    this.addProductfoForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDesc: ['', Validators.required],
      sellingPrice: ['', Validators.required],
      unitPrice: ['', Validators.required],
      costPrice: ['', Validators.required],
      productCategory: ['', Validators.required],
      productSupplier: ['', Validators.required],
      productQty: ['', Validators.required],
      productNumber: ['', Validators.required],
      productDiscount: [''],
      productFeatured: [''],
      colors: ['', Validators.required],
      sizes: ['', Validators.required],
      promo: [''],
      available: ['']
    });
  }

  ngOnInit() {
    this.categoriesService.getCategories()
        .then((data: ProductCategories[]) => {
          this.productCategories = data;
        })
        .catch(error => {
          console.log(error);
        });

    this.suppliersService.getSuppliers()
        .then((res: Suppliers[]) => {
          this.productSuppliers = res;
          console.log(this.productSuppliers);
        })
        .catch(error => {
          console.log(error);
        });
  }

  onSubmit() {
    console.log('add products');
  }

}
