import { AdminFooterModule } from './../admin-footer/admin-footer.module';
import { EditCustomersRoutingModule } from './edit-customers-routing.module';
import { EditCustomersComponent } from './edit-customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [EditCustomersComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminFooterModule,
    EditCustomersRoutingModule
  ]
})
export class EditCustomersModule { }
