import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { EditCustomersRoutingModule } from './edit-customers-routing.module';
import { EditCustomersComponent } from './edit-customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [EditCustomersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    EditCustomersRoutingModule
  ]
})
export class EditCustomersModule { }
