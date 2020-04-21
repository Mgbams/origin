import { AddSupplierRoutingModule } from './add-supplier-routing.module';
import { AddSupplierComponent } from './add-supplier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [ AddSupplierComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AddSupplierRoutingModule
  ],
  exports: [
    AddSupplierComponent
  ]
})
export class AddSupplierModule { }
