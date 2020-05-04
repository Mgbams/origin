import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { EditCategoriesRoutingModule } from './edit-categories-routing.module';
import { EditCategoriesComponent } from './edit-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [EditCategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    EditCategoriesRoutingModule
  ]
})
export class EditCategoriesModule { }
