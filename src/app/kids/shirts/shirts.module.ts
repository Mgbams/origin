import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ShirtsRoutingModule } from './shirts-routing.module';
import { ShirtsComponent } from './shirts.component';

@NgModule({
  declarations: [ShirtsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    ShirtsRoutingModule
  ],
  exports: [
    ShirtsComponent
  ]
})
export class ShirtsModule { }
