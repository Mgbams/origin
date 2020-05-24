import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PolicyFooterModule } from './../policy-footer/policy-footer.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolicyFooterModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
