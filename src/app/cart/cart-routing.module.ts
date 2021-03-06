import { MyAccountGuard } from './../authentication-guards/my-account.guard';
import {  CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart', component:  CartComponent,
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
export class CartRoutingModule { }
