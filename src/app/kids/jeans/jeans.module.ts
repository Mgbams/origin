import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { JeansRoutingModule } from './jeans-routing.module';
import { JeansComponent } from './jeans.component';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [ JeansComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminFooterModule,
    JeansRoutingModule
  ],
  exports: [
    JeansComponent
  ]
})
export class JeansModule { }
