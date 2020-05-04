import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { EditSuppliersComponent } from './edit-suppliers.component';
import { EditSuppliersRoutingModule } from './edit-suppliers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [EditSuppliersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    EditSuppliersRoutingModule
  ]
})
export class EditSuppliersModule { }
