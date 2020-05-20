import { CartModalComponent } from './cart-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module'; 

@NgModule({
  declarations: [CartModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartModalComponent
  ]
})
export class CartModalModule { }
