import { PolicyFooterComponent } from './policy-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [PolicyFooterComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PolicyFooterComponent]
})
export class PolicyFooterModule { }
