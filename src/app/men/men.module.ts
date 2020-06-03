import { AdminFooterModule } from './../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { MenComponent } from './men.component';
import { MenRoutingModule } from './men-routing.module';
import { AccessoiresModule } from './accessoires/accessoires.module';
import { JeansModule } from './jeans/jeans.module';
import { ShirtsModule } from './shirts/shirts.module';
import { ShortsModule } from './shorts/shorts.module';
import { SneakersModule } from './sneakers/sneakers.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [MenComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AccessoiresModule,
    NgxPaginationModule,
    JeansModule,
    ShirtsModule,
    ShortsModule,
    SneakersModule,
    MenRoutingModule
  ],
  exports: [
    MenComponent
  ]
})
export class MenModule { }
