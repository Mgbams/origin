import { EditSubcategoryRoutingModule } from './edit-subcategory-routing.module';
import { EditSubcategoryComponent } from './edit-subcategory.component';
import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [EditSubcategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    EditSubcategoryRoutingModule
  ]
})
export class EditSubcategoryModule { }
