import { CanEnterGuard } from './../authentication-guards/can-enter.guard';
import { AccountInfoComponent } from './account-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'account-info', component: AccountInfoComponent,
    canActivate: [CanEnterGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AccountInfoRoutingModule { }
