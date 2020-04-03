import { RegistrationLoginComponent } from './registration-login.component';
import { RegistrationLoginRoutingModule } from './registration-login-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ RegistrationLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationLoginRoutingModule
  ]
})
export class RegistrationLoginModule { }
