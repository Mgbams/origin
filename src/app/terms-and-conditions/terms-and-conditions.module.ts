import { TermsAndConditionsRoutingModule  } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TermsAndConditionsRoutingModule 
  ]
})
export class TermsAndConditionsModule { }
