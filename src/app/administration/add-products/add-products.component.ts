import { AddProductsService } from './shared/services/add-products.service';
import { Suppliers } from './../../shared/models/suppliers';
import { SuppliersService } from './../../shared/services/suppliers.service';
import { CategoriesService } from './../../shared/services/categories.service';
import { SubcategoryService } from './../../shared/services/subcategory.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductCategories } from './../../shared/models/productCategories';
import { UploadedImages } from './shared/models/uploadedImages';
import { SubCategory } from '../add-subcategory/shared/models/subcategory';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss'],
})
export class AddProductsComponent implements OnInit {
  public addProductForm: FormGroup;
  public productCategories: ProductCategories[] = [];
  public productSuppliers: Suppliers[] = [];
  public subCategories: SubCategory[] = [];
  public error: string;
  public uploadError: string;
  public successMsg: string;
  public uploadResponse: UploadedImages[] = [];
  public myFiles: string[] = [];
  public imageArr = [];
  public lastInsertedImageId: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private suppliersService: SuppliersService,
    private addProductsService: AddProductsService,
    private subCategoryService:  SubcategoryService 
  ) {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDesc: ['', Validators.required],
      sellingPrice: ['', Validators.required],
      unitPrice: ['', Validators.required],
      costPrice: ['', Validators.required],
      productCategory: ['', Validators.required],
      productSubCategory: ['', Validators.required],
      productSupplier: ['', Validators.required],
      productQty: ['', Validators.required],
      productNumber: ['', Validators.required],
      productDiscount: [''],
      productFeatured: [false],
      productImages: [''],
      colors: ['', Validators.required],
      sizes: ['', Validators.required],
      promo: [false],
      available: [true],
    });
  }

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .then((data: ProductCategories[]) => {
        this.productCategories = data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.suppliersService
      .getSuppliers()
      .then((res: Suppliers[]) => {
        this.productSuppliers = res;
        console.log(this.productSuppliers);
      })
      .catch((error) => {
        console.log(error);
      });

      this.subCategoryService
      .getSubCategories()
      .then((data: SubCategory[]) => {
        this.subCategories = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler(data) {
    console.log(data);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        this.myFiles.push(event.target.files[i]);
      }
      this.addProductForm.get('productImages').setValue(this.myFiles);
      this.submitImages();
    }
  }

  submitImages() {
    const formData = new FormData();

    for (let i = 0; i < this.myFiles.length; i++) {
      formData.append('productImages[]', this.myFiles[i]);
    }

    this.addProductsService.uploadFile(formData).subscribe(
      (res) => {
        console.log('I entered the bracket');
        this.addProductsService
          .getImages()
          .then((data: UploadedImages[]) => {
            this.uploadResponse = data;
            this.lastInsertedImageId = this.uploadResponse[0]; // getting the imageId of the last stored images
            console.log('last image id', this.lastInsertedImageId);
            console.log('try it', this.uploadResponse);
            this.imageArr = this.uploadResponse[0].image.split(','); // splittingreceived images into array formats
            console.log('imgArray', this.imageArr);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteSelectedImage(filename, a) {
    const formData = new FormData();
    formData.append('filename', filename);
    this.addProductsService
      .deleteImage(formData)
      .then((res) => {
        a.parentElement.remove();
      })
      .catch((err) => {
        this.uploadError = err;
      });
  }

  submitForm() {
    const formData = new FormData();

    formData.append(
      'productName',
      this.addProductForm.get('productName').value
    );
    formData.append(
      'productDesc',
      this.addProductForm.get('productDesc').value
    );
    formData.append(
      'sellingPrice',
      this.addProductForm.get('sellingPrice').value
    );
    formData.append('unitPrice', this.addProductForm.get('unitPrice').value);
    formData.append('costPrice', this.addProductForm.get('costPrice').value);
    formData.append(
      'productCategory',
      this.addProductForm.get('productCategory').value
    );
     formData.append(
      'productSubCategory',
      this.addProductForm.get('productSubCategory').value
    );
    formData.append(
      'productSupplier',
      this.addProductForm.get('productSupplier').value
    );
    formData.append('productQty', this.addProductForm.get('productQty').value);
    formData.append(
      'productNumber',
      this.addProductForm.get('productNumber').value
    );
    formData.append(
      'productDiscount',
      this.addProductForm.get('productDiscount').value
    );
    formData.append(
      'productFeatured',
      this.addProductForm.get('productFeatured').value
    );
    formData.append('colors', this.addProductForm.get('colors').value);
    formData.append('sizes', this.addProductForm.get('sizes').value);
    formData.append('promo', this.addProductForm.get('promo').value);
    formData.append('available', this.addProductForm.get('available').value);
    formData.append('productImages', this.lastInsertedImageId);

    ///////////////////////////
    console.log('formdata values', formData);

    this.addProductsService
      .saveProduct([this.addProductForm.value, this.lastInsertedImageId])
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
