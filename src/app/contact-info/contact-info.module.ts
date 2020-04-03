import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { ContactInfoComponent } from './contact-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [ContactInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactInfoRoutingModule
  ]
})
export class ContactInfoModule { }
