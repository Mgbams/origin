import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { JeansComponent } from './jeans.component';
import { JeansRoutingModule } from './jeans-routing.module';

@NgModule({
  declarations: [JeansComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    JeansRoutingModule 
  ],
  exports: [
    JeansComponent
  ]
})
export class JeansModule { }
