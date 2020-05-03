import { PopoverModule } from './../popover/popover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PopoverModule
  ]
})
export class AdminSideMenuModule { }
