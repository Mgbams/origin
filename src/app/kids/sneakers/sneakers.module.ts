import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { SneakersComponent } from './sneakers.component';
import { SneakersRoutingModule } from './sneakers-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [SneakersComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminFooterModule,
    SneakersRoutingModule 
  ],
  exports: [
    SneakersComponent
  ]
})
export class SneakersModule { }
