import { AdminFooterModule } from './../../administration/admin-footer/admin-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { SneakersRoutingModule } from './sneakers-routing.module';
import { SneakersComponent } from './sneakers.component';

@NgModule({
  declarations: [SneakersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    SneakersRoutingModule
  ],
  exports: [
    SneakersComponent
  ]
})
export class SneakersModule { }
