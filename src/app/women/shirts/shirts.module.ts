import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ShirtsComponent } from './shirts.component';
import { ShirtsRoutingModule } from './shirts-routing.module';

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
