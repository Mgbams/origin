import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import {  AddProductsRoutingModule } from './add-products-routing.module';
import { AddProductsComponent } from './add-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [ AddProductsComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AddProductsRoutingModule
  ],
  exports: [
    AddProductsComponent
  ]
})
export class AddProductsModule { }
