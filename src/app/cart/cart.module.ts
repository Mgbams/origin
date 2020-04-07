import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PolicyFooterModule } from './../policy-footer/policy-footer.module';



@NgModule({
  declarations: [ CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolicyFooterModule,
    CartRoutingModule
  ]
})
export class CartModule { }
