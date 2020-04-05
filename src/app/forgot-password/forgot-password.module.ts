import { ForgotPasswordComponent } from './forgot-password.component';
import {ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    ForgotPasswordRoutingModule
  ],
  exports: [
    ForgotPasswordComponent
  ]
})
export class ForgotPasswordModule { }
