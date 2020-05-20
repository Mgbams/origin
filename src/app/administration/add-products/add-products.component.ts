import { AdminService } from './../shared/services/admin.service';
import { AllProducts } from './../../shared/models/allProducts';
import { Router, ActivatedRoute } from '@angular/router';
import { AddProductsService } from './shared/services/add-products.service';
import { Suppliers } from './../../shared/models/suppliers';
import { SuppliersService } from './../../shared/services/suppliers.service';
import { CategoriesService } from './../../shared/services/categories.service';
import { SubcategoryService } from './../../shared/services/subcategory.service';
import { Component, OnInit } from '@angular/core';
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
  // Used for editing a product
  public updateButton = false; // Used to enable or disable the update button
  public serverRetrievedProduct: AllProducts; // holds category retrieved for updating

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private suppliersService: SuppliersService,
    private addProductsService: AddProductsService,
    private subCategoryService: SubcategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
  ) {
    this.addProductForm = this.formBuilder.group({
      productName: ["", Validators.required],
      productDesc: ["", Validators.required],
      sellingPrice: ["", Validators.required],
      costPrice: ["", Validators.required],
      productCategory: ["", Validators.required],
      productSubCategory: ["", Validators.required],
      productSupplier: ["", Validators.required],
      productQty: ["", Validators.required],
      productNumber: ["", Validators.required],
      productDiscount: [""],
      productFeatured: [false],
      productImages: [""],
      colors: ["", Validators.required],
      sizes: ["", Validators.required],
      promo: [false],
      available: [true],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id');
      if (productId) {
        this.getProduct(productId);
      }
    });

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
        console.log('products from suppliers', this.productSuppliers);
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

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        this.myFiles.push(event.target.files[i]);
      }
      this.addProductForm.get("productImages").setValue(this.myFiles);
      this.submitImages();
    }
  }

  submitImages() {
    const formData = new FormData();

    for (let i = 0; i < this.myFiles.length; i++) {
      formData.append("productImages[]", this.myFiles[i]);
    }

    this.addProductsService.uploadFile(formData).subscribe(
      (res) => {
        this.addProductsService
          .getImages()
          .then((data: UploadedImages[]) => {
            this.uploadResponse = data;
            this.lastInsertedImageId = this.uploadResponse[0]; // getting the imageId of the last stored images
            this.imageArr = this.uploadResponse[0].image.split(","); // splittingreceived images into array formats
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
    if (!this.serverRetrievedProduct) {
      const formData = new FormData();

      formData.append(
        'productName',
        this.addProductForm.get("productName").value
      );
      formData.append(
        'productDesc',
        this.addProductForm.get("productDesc").value
      );
      formData.append(
        'sellingPrice',
        this.addProductForm.get("sellingPrice").value
      );
      formData.append("costPrice", this.addProductForm.get("costPrice").value);
      formData.append(
        'productCategory',
        this.addProductForm.get("productCategory").value
      );
      formData.append(
        'productSubCategory',
        this.addProductForm.get("productSubCategory").value
      );
      formData.append(
        'productSupplier',
        this.addProductForm.get("productSupplier").value
      );
      formData.append('productQty', this.addProductForm.get("productQty").value);
      formData.append(
        'productNumber',
        this.addProductForm.get("productNumber").value
      );
      formData.append(
        'productDiscount',
        this.addProductForm.get("productDiscount").value
      );
      formData.append(
        'productFeatured',
        this.addProductForm.get("productFeatured").value
      );
      formData.append('colors', this.addProductForm.get("colors").value);
      formData.append('sizes', this.addProductForm.get("sizes").value);
      formData.append('promo', this.addProductForm.get("promo").value);
      formData.append('available', this.addProductForm.get("available").value);
      formData.append('productImages', this.lastInsertedImageId);
  
      this.addProductsService
        .saveProduct([this.addProductForm.value, this.lastInsertedImageId])
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.addProductForm.reset(); // resetting form values
      this.imageArr = null; // setting the image array to empty
    } else if (this.updateButton === true) {
      console.log('Pussy cats name', this.serverRetrievedProduct);
      const formData = {
        info: [
          {
          data: this.addProductForm.value,
          id: this.serverRetrievedProduct[0].product_id
          }
        ]
      };
      console.log('formdata is gives as', formData);

      this.adminService.updateProduct(formData)
          .then(data => {
            console.log('its friday guyssssssssssssssssssssssssssssssssss', data);
           // this.router.navigate(['administration-panel']);
          })
          .catch(error => {
            console.log(error);
            console.log('it has always been seeing this error');
          });
    }
  }

  // Editing a product

  getProduct(id: number) {
    this.adminService
        .getProductById(id)
        .then((data: AllProducts) => {
        this.editProduct(data);
        this.serverRetrievedProduct = data; // saving retrieved product in a variable
        })
        .catch(error => {
          console.log(error);
        });
  }

  editProduct(data: AllProducts) {
    console.log('i entered here');
    this.addProductForm.patchValue({
      productName: data[0].product_name,
      productDesc: data[0].product_description,
      sellingPrice: data[0].product_price,
      costPrice: data[0].cost_price,
      productCategory: data[0].category_name,
      productSubCategory: data[0].subcategory_name,
      productSupplier: data[0].company_name,
      productQty: data[0].units_in_stock,
      productNumber: data[0].product_no,
      productDiscount: data[0].product_discount,
      productFeatured: data[0].product_featured,
      colors: data[0].product_colors,
      sizes: data[0].product_sizes,
      promo: data[0].product_promo,
      available: data[0].available
    });
    this.updateButton = true;
    console.log('update button value', this.updateButton);
  }
}
