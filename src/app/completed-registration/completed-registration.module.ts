import { CompletedRegistrationRoutingModule } from './completed-registration-routing.module';
import { CompletedRegistrationComponent } from './completed-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [ CompletedRegistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompletedRegistrationRoutingModule
  ]
})
export class CompletedRegistrationModule { }
