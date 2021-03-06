import { PasswordComponent } from './password.component';
import { PasswordRoutingModule } from './password-routing.module';
import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ConfirmEqualityValidatorDirective } from '../shared/confirm-password-equality-directive';


@NgModule({
  declarations: [PasswordComponent, ConfirmEqualityValidatorDirective],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    PasswordRoutingModule
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
