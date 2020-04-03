import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent  } from './privacy-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [PrivacyPolicyComponent ],
  imports: [
    CommonModule,
    SharedModule,
    PrivacyPolicyRoutingModule
  ]
})
export class PrivacyPolicyModule { }
