import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { ShippingAddressComponent } from './shipping-address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'myaccount/shipping-address', component: ShippingAddressComponent,
    canActivate: [MyAccountGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ShippingAddressRoutingModule { }
