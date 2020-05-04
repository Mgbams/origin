import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
