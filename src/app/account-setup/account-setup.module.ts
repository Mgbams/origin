import { AccountSetupRoutingModule } from './account-setup-routing.module';
import { AccountSetupComponent } from './account-setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [AccountSetupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountSetupRoutingModule
  ]
})
export class AccountSetupModule { }
