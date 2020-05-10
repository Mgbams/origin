import { AddSubcategoryComponent } from './add-subcategory.component';
import { AddSubcategoryRoutingModule } from './add-subcategory-routing.module';
import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [AddSubcategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AddSubcategoryRoutingModule
  ],
  exports: [
    AddSubcategoryComponent
  ]
})
export class AddSubcategoryModule { }
