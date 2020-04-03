import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [AccountInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountInfoRoutingModule
  ]
})
export class AccountInfoModule { }
