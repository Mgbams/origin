import { CanEnterAccountSetupGuard } from './../authentication-guards/can-enter-account-setup.guard';
import { AccountSetupRoutingModule } from './account-setup-routing.module';
import { AccountSetupComponent } from './account-setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ConfirmEqualityValidatorDirective } from './../shared/confirm-equality-directive';


@NgModule({
  declarations: [AccountSetupComponent, ConfirmEqualityValidatorDirective],
  imports: [
    CommonModule,
    SharedModule,
    AccountSetupRoutingModule
  ],
  providers: [
    CanEnterAccountSetupGuard
  ]
})
export class AccountSetupModule { }
