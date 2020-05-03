import { SideMenuComponent } from './side-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
