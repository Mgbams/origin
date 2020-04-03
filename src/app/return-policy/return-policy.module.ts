import { ReturnPolicyRoutingModule } from './return-policy-routing.module';
import { ReturnPolicyComponent  } from './return-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PolicyFooterModule } from './../policy-footer/policy-footer.module';



@NgModule({
  declarations: [ReturnPolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReturnPolicyRoutingModule,
    PolicyFooterModule 
  ]
})
export class ReturnPolicyModule { }
