import { AdminFooterModule } from './admin-footer/admin-footer.module';
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
// import { CanEnterGuard } from './../authentication-guards/can-enter.guard';


@NgModule({
  declarations: [ AdministrationComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AdminFooterModule,
    AdministrationRoutingModule
  ],
  providers: []
})
export class AdministrationModule { }
