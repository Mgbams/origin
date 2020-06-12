import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { PaymentsComponent } from './payments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'myaccount/payments', component: PaymentsComponent,
    canActivate: [MyAccountGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PaymentsRoutingModule { }
