import { ShippingComponent } from './shipping.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PolicyFooterModule } from './../policy-footer/policy-footer.module';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolicyFooterModule,
    ShippingRoutingModule
  ]
})
export class ShippingModule { }
