import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { CanEnterGuard } from './../authentication-guards/can-enter.guard';



@NgModule({
  declarations: [AccountInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountInfoRoutingModule
  ],
  providers: [
    CanEnterGuard
  ]
})
export class AccountInfoModule { }
