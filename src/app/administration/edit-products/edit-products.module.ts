import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { EditProductsRoutingModule } from './edit-products-routing.module';
import { EditProductsComponent } from './edit-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [EditProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminFooterModule,
    EditProductsRoutingModule
  ]
})
export class EditProductsModule { }
