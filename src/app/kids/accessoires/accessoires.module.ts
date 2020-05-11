import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { AccessoiresRoutingModule } from './accessoires-routing.module';
import { AccessoiresComponent } from './accessoires.component';


@NgModule({
  declarations: [AccessoiresComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AccessoiresRoutingModule
  ],
  exports: [
    AccessoiresComponent
  ]
})
export class AccessoiresModule { }
