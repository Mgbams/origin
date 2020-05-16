import { SoldesComponent } from './soldes.component';
import { SoldesRoutingModule } from './soldes-routing.module';
import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [SoldesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    SoldesRoutingModule
  ],
  exports: [
    SoldesComponent
  ]
})
export class SoldesModule { }
