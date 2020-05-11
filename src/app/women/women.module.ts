import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { WomenComponent } from './women.component';
import { WomenRoutingModule } from './women-routing.module';
import { AccessoiresModule } from './accessoires/accessoires.module';
import { JeansModule } from './jeans/jeans.module';
import { ShirtsModule } from './shirts/shirts.module';
import { ShortsModule } from './shorts/shorts.module';
import { SneakersModule } from './sneakers/sneakers.module';

@NgModule({
  declarations: [WomenComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AccessoiresModule,
    JeansModule,
    ShirtsModule,
    ShortsModule,
    SneakersModule,
    WomenRoutingModule
  ],
  exports: [
    WomenComponent 
  ]
})
export class WomenModule { }
