import { ShippingAddressRoutingModule } from './shipping-address-routing.module';
import { ShippingAddressComponent } from './shipping-address.component';
import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [ShippingAddressComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    ShippingAddressRoutingModule
  ],
  exports: [
    ShippingAddressComponent
  ]
})
export class ShippingAddressModule { }
