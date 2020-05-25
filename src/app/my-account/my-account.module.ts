import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { ProfileModule } from './profile/profile.module';
import { PaymentsModule } from './payments/payments.module';
import { PasswordModule } from './password/password.module';
import { EmailModule } from './email/email.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    AdminFooterModule,
    SharedModule,
    EmailModule,
    PasswordModule,
    PaymentsModule,
    ProfileModule,
    ShippingAddressModule,
    MyAccountRoutingModule
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
