import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ShortsComponent } from './shorts.component';
import { ShortsRoutingModule } from './shorts-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [ShortsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    AdminFooterModule,
    ShortsRoutingModule
  ],
  exports: [
    ShortsComponent
  ]
})
export class ShortsModule { }
