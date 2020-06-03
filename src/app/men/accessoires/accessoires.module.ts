import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { AccessoiresComponent } from './accessoires.component';
import { AccessoiresRoutingModule } from './accessoires-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [AccessoiresComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    NgxPaginationModule,
    AccessoiresRoutingModule
  ],
  exports: [
    AccessoiresComponent
  ]
})
export class AccessoiresModule { }
