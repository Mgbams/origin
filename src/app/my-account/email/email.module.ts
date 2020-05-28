import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ConfirmEqualityValidatorDirective } from '../shared/confirm-email-equality-directive';


@NgModule({
  declarations: [EmailComponent, ConfirmEqualityValidatorDirective],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    EmailRoutingModule
  ],
  exports: [
    EmailComponent
  ]
})
export class EmailModule { }
