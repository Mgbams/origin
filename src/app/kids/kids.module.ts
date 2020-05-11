import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { KidsComponent } from './kids.component';
import { KidsRoutingModule } from './kids-routing.module';

@NgModule({
  declarations: [KidsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    KidsRoutingModule
  ],
  exports: [
    KidsComponent
  ]
})
export class KidsModule { }
