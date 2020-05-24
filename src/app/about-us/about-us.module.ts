import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PolicyFooterModule } from './../policy-footer/policy-footer.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolicyFooterModule,
    AdminFooterModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
