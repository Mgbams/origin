import { ConfirmEqualityValidatorDirective } from './shared/confirm-password-conformity';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';

@NgModule({
  declarations: [ResetPasswordComponent, ConfirmEqualityValidatorDirective],
  imports: [
    CommonModule,
    SharedModule,
     AdminFooterModule,
     ResetPasswordRoutingModule
  ],
  exports: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
