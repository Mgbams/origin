import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
